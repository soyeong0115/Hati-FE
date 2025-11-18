import { useNavigate } from 'react-router-dom';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import HomeTitle from '@/components/home/HomeTitle';

function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/test');
    console.log('테스트 시작');
  };

  return (
    <div className="relative h-full">
      {/* 산 */}
      <img
        src={mountains}
        alt="Mountains"
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0 object-cover object-bottom"
      />

      {/* 크리스마스 집 */}
      <img
        src={christmasHouse}
        alt="Christmas House"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[400px] h-auto z-0"
      />

      <div className="flex justify-center items-center mb-[35px]">
        <Header />
      </div>

      <div className="flex flex-col items-center">
        <HomeTitle text="Holiday Animal Type Indicator" strokeWidth={2} />

        <p className="text-title-sb-button font-hakgyoansim font-bold text-text-brown text-center mt-[20px] z-10">
          연말을 준비하는 나는 어떤 동물일까?
        </p>
      </div>

      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10">
        <p className="text-title-sb-button font-hakgyoansim font-medium text-text-brown text-center mb-[20px] z-10">
          현재 234명의 사람들이 참여했어요!
        </p>

        <BottomButton
          text="연말 동물 테스트 시작하기"
          onClick={handleClick}
          disabled={false}
        />
      </div>
    </div>
  );
}

export default Homepage;
