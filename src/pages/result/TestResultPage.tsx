import { useNavigate, useSearchParams } from 'react-router-dom';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import SEO from '@/components/common/SEO';
import { ANIMAL_RESULTS } from '@/constants/testResults';
import { createTextStrokeStyle } from '@/utils/textShadow';
import { useShare } from '@/hooks/useShare';

function TestResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti') || 'ENFP';
  const result = ANIMAL_RESULTS[mbti] || ANIMAL_RESULTS['ENFP'];
  const { share, isCopied } = useShare();

  const shareUrl = `${window.location.origin}/result?mbti=${mbti}`;
  const shareTitle = `나의 연말 동물 유형은 ${result.name}!`;
  const shareDescription = `나의 연말 동물 유형은 ${result.name}! - 친구의 연말 동물 유형 보러가기🐶🎄`;
  // 각 결과의 동물 이미지 Open Graph 이미지로 사용
  const ogImage = `${window.location.origin}/${mbti.toLowerCase()}.png`;

  const handleRetest = () => {
    navigate('/');
  };

  const handleGift = () => {
    navigate('/feedback');
  };

  const handleShare = () => {
    // 카카오톡은 text를 실제 메시지로 보냄 -> 빈 문자열로 설정
    share({
      title: shareTitle,
      text: '',
      url: shareUrl,
    });
  };

  const textStrokeStyle = createTextStrokeStyle(2, 'white');

  return (
    <>
      <SEO
        title={shareTitle}
        description={shareDescription}
        image={ogImage}
        url={shareUrl}
      />
      <div className="relative h-full flex flex-col">
        <img
          src={mountains}
          alt="Mountains"
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0 object-cover object-bottom blur-[5px]"
        />

        <img
          src={christmasHouse}
          alt="Christmas House"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[400px] h-auto z-0 blur-[5px]"
        />

        {/* 헤더 */}
        <div className="relative flex justify-center items-center mb-[20px] z-20">
          <Header />
        </div>

        <div className="relative flex-1 overflow-y-auto px-6 z-20 pb-[60px] scrollbar-hide">
          <div className="w-full max-w-[300px] mx-auto">
            {/* 결과 내용 */}
            <div className="text-center">
              <h1 className="text-headline-sb-main font-hakgyoansim font-bold text-text-brown mb-5">
                당신의 연말 유형 동물은?
              </h1>

              {/* 동물 이미지 */}
              <div className="mb-5">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-[200px] h-[200px] mx-auto object-contain rounded-[2px]"
                />
              </div>

              {/* 동물 이름 */}
              <h2
                className="text-headline-sb-main font-hakgyoansim font-bold text-main-color mb-5"
                style={textStrokeStyle}
              >
                {result.name}
              </h2>

              {/* 성격 설명 */}
              <div className="bg-white rounded-[16px] p-6 shadow-custom">
                <p className="text-body-md-title font-hakgyoansim text-text-brown whitespace-pre-line break-words">
                  {result.description}
                </p>
              </div>
            </div>

            {/* 공유하기 버튼 */}
            <div className="mt-8 mb-4">
              <BottomButton
                text={isCopied ? '링크 복사 완료!' : '친구에게 결과 공유하기'}
                onClick={handleShare}
                disabled={false}
              />
            </div>

            <div className="mt-4 space-y-3">
              <BottomButton
                text="테스트 다시하기"
                onClick={handleRetest}
                disabled={false}
              />
              <BottomButton
                text="크리스마스 선물 받으러 가기"
                onClick={handleGift}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestResultPage;
