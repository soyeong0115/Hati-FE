import { useState } from 'react';

interface UseShareOptions {
  title: string;
  text: string;
  url: string;
}

export const useShare = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const share = async ({
    title,
    text,
    url,
  }: UseShareOptions): Promise<boolean> => {
    setIsSharing(true);

    try {
      // Web Share API 지원 여부 확인
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url,
        });
        return false;
      } else {
        // Web Share API가 지원되지 않는 경우 URL 복사
        await copyToClipboard(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        return true; // 복사 완료 메시지 표시
      }
    } catch (err) {
      console.log('공유가 취소되었습니다.');
      return false;
    } finally {
      setIsSharing(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return { share, isSharing, isCopied };
};
