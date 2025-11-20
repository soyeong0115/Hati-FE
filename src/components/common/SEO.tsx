import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title = 'HATI - 연말을 준비하는 나는 어떤 동물일까?',
  description = '총 12개 문항으로 나의 연말 동물 유형을 알아보세요!',
  image = 'https://myhati.vercel.app/og-image.png',
  url = 'https://myhati.vercel.app',
}: SEOProps) {
  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
