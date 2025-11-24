import { useState } from 'react';

interface UseShareOptions {
  title: string;
  text: string;
  url: string;
}

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);

  const share = async ({ title, text, url }: UseShareOptions) => {
    setIsSharing(true);

    try {
      // Web Share API 지원 여부 확인
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });
      } else {
        // Web Share API가 지원되지 않는 경우 URL 복사
        await copyToClipboard(url);
      }
    } catch (err) {
      // 사용자가 공유를 취소한 경우 또는 에러 발생
      console.log('공유가 취소되었습니다.');
    } finally {
      setIsSharing(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // 클립보드 API가 지원되지 않는 경우 fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return { share, isSharing };
};
