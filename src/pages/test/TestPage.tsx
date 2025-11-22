import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomButton from '@/components/common/BottomButton';
import christmasHouse from '@/assets/svgs/common/christmas-house.svg';
import mountains from '@/assets/svgs/common/mountains.svg';
import Header from '@/components/common/Header';
import ProgressBar from '@/components/test/ProgressBar';
import QuestionCounter from '@/components/test/QuestionCounter';
import QuestionButton from '@/components/test/QuestionButton';
import { TEST_QUESTIONS } from '@/constants/testQuestions';
import { calculateMBTI } from '@/constants/testResults';

const TOTAL_QUESTIONS = TEST_QUESTIONS.length;

function TestPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const currentQuestion = TEST_QUESTIONS[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    const newAnswers = [...answers, answerIndex];

    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
      setAnswers(newAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      const finalAnswers = [...newAnswers, answerIndex];
      const mbti = calculateMBTI(finalAnswers);
      navigate(`/result?mbti=${mbti}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex === 0) return;

    const previousIndex = currentQuestionIndex - 1;
    setCurrentQuestionIndex(previousIndex);

    setSelectedAnswer(null);

    setAnswers(answers.slice(0, previousIndex));
  };

  return (
    <div className="relative h-full">
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

      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        {currentQuestionIndex > 0 && (
          <BottomButton text="이전" onClick={handlePrevious} />
        )}
      </div>
    </div>
  );
}

export default TestPage;
