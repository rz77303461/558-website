import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '伍伍捌新材料科技有限公司',
    template: '%s | 伍伍捌新材料科技有限公司',
  },
  description:
    '伍伍捌新材料科技有限公司专注于环保珐琅颜料、高纯度黄金合金的研发、生产与销售，提供优质的新材料解决方案。',
  keywords: [
    '新材料',
    '珐琅颜料',
    '黄金合金',
    '环保材料',
    '首饰材料',
    '珐琅技术',
    '合金材料',
    'REACH标准',
  ],
  authors: [{ name: '伍伍捌新材料科技有限公司' }],
  generator: 'Next.js',
  openGraph: {
    title: '伍伍捌新材料科技有限公司 | 创新引领未来',
    description:
      '专注环保珐琅颜料和高纯度黄金合金的研发与生产，为首饰行业提供优质材料解决方案。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
