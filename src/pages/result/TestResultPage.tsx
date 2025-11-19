import { useNavigate, useSearchParams } from 'react-router-dom';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import { ANIMAL_RESULTS } from '@/constants/testResults';
import { createTextStrokeStyle } from '@/utils/textShadow';

function TestResultPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti') || 'ENFP';
  const result = ANIMAL_RESULTS[mbti] || ANIMAL_RESULTS['ENFP'];

  const handleRetest = () => {
    navigate('/');
  };

  const handleGift = () => {
    navigate('/feedback');
  };

  const textStrokeStyle = createTextStrokeStyle(2, 'white');

  return (
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

          <div className="mt-8 space-y-3">
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
  );
}

export default TestResultPage;
