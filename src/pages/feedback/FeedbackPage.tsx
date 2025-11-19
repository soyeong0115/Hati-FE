import { useState } from 'react';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import { useNavigate } from 'react-router-dom';

function FeedbackPage() {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('의견 제출:', { feedback, email });
    navigate('/');
  };

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

      <div className="relative flex justify-center items-center mb-[20px] z-20">
        <Header />
      </div>

      <div className="relative flex flex-col items-center px-6 z-20">
        <div className="w-full max-w-[300px]">
          <div className="text-center">
            <h1 className="text-headline-sb-main font-hakgyoansim font-bold text-text-brown mb-2">
              이번 크리스마스 소원과
              <br />
              서비스에 대한 의견을 남겨주세요
            </h1>

            <p className="text-body-md-title font-hakgyoansim text-text-brown mb-4">
              추첨을 통해 크리스마스에 선물을 드려요! (1만원 상당)
            </p>

            <div className="bg-white rounded-[16px] p-4 shadow-custom mb-4">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="하티에 대한 의견을 입력해주세요"
                className="w-full h-[120px] resize-none border-none outline-none text-body-md-title font-hakgyoansim text-text-brown placeholder:text-sub-gray"
              />
            </div>

            <div className="mb-4">
              <label className="block text-body-md-title font-hakgyoansim text-text-brown mb-2 text-left">
                연락 받을 이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-[16px] border-2 border-gray-200 outline-none text-body-md-title font-hakgyoansim text-text-brown placeholder:text-sub-gray focus:border-main-color"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-30">
        <p className="text-body-md-title font-hakgyoansim text-text-brown text-center mb-1">
          소중한 의견 감사합니다.
        </p>
        <p className="text-body-md-title font-hakgyoansim text-text-brown text-center mb-[20px]">
          모두 미리 메리크리스마스! 🎄
        </p>
        <BottomButton
          text="개발자에게 보내기"
          onClick={handleSubmit}
          disabled={!feedback.trim() || !email.trim()}
        />
      </div>
    </div>
  );
}

export default FeedbackPage;
