import AOS from 'aos';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Card,
  Skeleton,
  Tooltip,
  message,
  Button,
  Breadcrumb,
  FileSelect,
  Popover,
  HlImage,
  Select,
} from '@hankliu/hankliu-ui';
import {
  DeleteOutlined,
  FileImageFilled,
  FileTextOutlined,
  InfoCircleOutlined,
  PictureOutlined,
} from '@hankliu/icons';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { createWorker } from 'tesseract.js';
import { LanguageNames, Languages, PageTitle } from '@/constants';
import useBreadcrumb from '@/hooks/useBreadcrumb';

const languageOptions = Object.keys(Languages).map((key) => ({
  label: LanguageNames[Languages[key]],
  value: Languages[key],
}));

const MirrorEditor = dynamic(import('@hankliu/rc-mirror-editor'), {
  ssr: false,
});

/**
 * 图片提取文字
 *
 * @returns
 */
export default function Index() {
  const [file, setFile] = useState<File>();
  const [content, setContent] = useState<string>();
  const [language, setLanguage] = useState<(typeof languageOptions)[number]['value']>(
    Languages.CHI_SIM,
  );
  const [fetching, setFetching] = useState<boolean>(false);
  const router = useRouter();

  // 点击面包屑
  const onClickBreadcrumb = useBreadcrumb();

  useEffect(() => {
    AOS.init();
  }, []);

  /**
   * 运行图片提取文字
   */
  const onRunExtract = useCallback(async () => {
    try {
      setFetching(true);
      const worker = await createWorker(language);
      const ret = await worker.recognize(file);
      setContent(ret.data.text);
      await worker.terminate();
    } catch (error) {
      setContent('');
      message.error('图片提取文字失败');
      console.error(error);
    } finally {
      setFetching(false);
    }
  }, [language, file]);

  return (
    <div className="relative w-full text-white/75">
      {!!router.query?.['with-breadcrumb'] && (
        <Breadcrumb className="!m-6 !text-base" separator="/">
          <Breadcrumb.Item>
            <a onClick={onClickBreadcrumb}>小工具集合</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{PageTitle.split('-').pop().trim()}</Breadcrumb.Item>
        </Breadcrumb>
      )}

      <div className="relative z-20 mx-auto mt-6 w-full max-w-[1920px]">
        <div className="flex flex-col flex-wrap">
          {/* 图片提取文字 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="图片提取文字">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <PictureOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative pt-4">
                <div className="flex flex-col justify-start">
                  <label className="text-xl font-medium">上传图片开始处理</label>
                  <div className="mt-2 w-full">
                    <FileSelect
                      maxsize={5 * FileSelect.SIZE_MB}
                      onSelect={(files) => setFile(files[0])}
                      accept="image/*"
                      title="上传图片 或 拖进来"
                    />
                  </div>
                  {!!file && (
                    <div className="group/image mt-4 flex items-center justify-start overflow-hidden">
                      <FileImageFilled className="text-xl text-green-400" />
                      <Popover
                        placement="topLeft"
                        content={<HlImage src={URL.createObjectURL(file)} />}
                        trigger="hover"
                      >
                        <div className="mx-3 flex-1 truncate text-base">{file?.name}</div>
                      </Popover>
                      <DeleteOutlined
                        className="hidden h-[24px] cursor-pointer text-xl hover:text-red-600 group-hover/image:block"
                        onClick={() => setFile(undefined)}
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col  justify-start">
                  <label className="text-xl font-medium">语言</label>
                  <div className="mt-2 w-full">
                    <Select
                      showSearch
                      optionFilterProp="label"
                      className="w-[320px]"
                      options={languageOptions}
                      placeholder="请选择语言"
                      value={language}
                      onChange={(value) => setLanguage(value)}
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-start">
                  <Button
                    loading={fetching}
                    disabled={!file || fetching}
                    size="medium"
                    type="primary"
                    onClick={onRunExtract}
                  >
                    开始处理
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* 处理结果 */}
          {!!content && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="图片提取文字成功">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                    <FileTextOutlined className="text-[20px] text-white" />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching ? (
                    <Skeleton className="w-full" active />
                  ) : (
                    <MirrorEditor height={500} value={content} language="markdown" readOnly />
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* 使用说明 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="使用说明">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <InfoCircleOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative grid grid-cols-1 gap-4 pt-4">
                <div className="text-base">
                  在线图片转文字网站，用于解析您的上传的图片，获取图片中的文字内容。
                </div>
                <div className="text-base">
                  探索图像背后的文字世界！我们是您发现艺术与文学结合之美的理想场所。
                </div>
                <div className="text-base">
                  解读每一幅图像的独特故事，感受文字的魔力，开启创意之旅！
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
