import { useState } from 'react';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import ProgressBar from '@/components/test/ProgressBar';
import QuestionCounter from '@/components/test/QuestionCounter';
import QuestionButton from '@/components/test/QuestionButton';
import { TEST_QUESTIONS } from '@/constants/testQuestions';

const TOTAL_QUESTIONS = TEST_QUESTIONS.length;

function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentQuestion = TEST_QUESTIONS[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log('테스트 완료');
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  return (
    <div className="relative h-full">
      {/* 산 */}
      <img
        src={mountains}
        alt="Mountains"
        className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0 object-cover object-bottom blur-[5px]"
      />

      {/* 크리스마스 집 */}
      <img
        src={christmasHouse}
        alt="Christmas House"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[400px] h-auto z-0 blur-[5px]"
      />

      <div className="relative flex justify-center items-center mb-[20px] z-20">
        <Header />
      </div>

      {/* 진행 상황 바 */}
      <div className="relative z-20">
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={TOTAL_QUESTIONS}
        />
      </div>

      {/* 문항 번호 */}
      <div className="relative z-20">
        <QuestionCounter
          current={currentQuestionIndex + 1}
          total={TOTAL_QUESTIONS}
        />
      </div>

      <div className="relative flex flex-col items-center px-6 z-20">
        <div className="w-[300px] space-y-3">
          {/* 문항 제목 */}
          <h2 className="text-[18px] font-hakgyoansim font-bold text-text-brown text-center mb-6 whitespace-pre-line break-words">
            {currentQuestion.title}
          </h2>

          {/* 문항 선택 버튼 */}
          {currentQuestion.options.map((option, index) => (
            <QuestionButton
              key={index}
              text={option}
              onClick={() => handleAnswerSelect(index)}
              selected={selectedAnswer === index}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10">
        <BottomButton
          text={
            currentQuestionIndex === TOTAL_QUESTIONS - 1
              ? '테스트 결과 보러가기'
              : '다음'
          }
          onClick={handleNext}
          disabled={selectedAnswer === null}
        />
      </div>
    </div>
  );
}

export default TestPage;
