type QuizSubmitConfirmationProps = {
  answeredQuestions: number;
  totalQuestions: number;
  onProceed: () => void;
};

export function QuizSubmitConfirmation({
  answeredQuestions,
  totalQuestions,
  onProceed,
}: QuizSubmitConfirmationProps) {
  const unansweredCount = totalQuestions - answeredQuestions;

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <p className="text-center font-poppins text-[16px] font-medium text-[#111111]">
        You have not answered {unansweredCount} questions
      </p>

      <p className="mt-10 font-poppins text-[14px] text-[#777777]">
        Attempted Questions
      </p>

      <p className="mt-3 font-poppins text-[32px] font-semibold text-[#111111]">
        <span className="text-[#2945FF]">{answeredQuestions}</span>{" "}
        <span className="text-[#111111]">out of {totalQuestions}</span>
      </p>

      <p className="mt-10 max-w-[480px] text-center font-poppins text-[14px] leading-[24px] text-[#777777]">
        Questions left unanswered will be marked as incorrect.
        <br />
        You can continue the quiz or end it now.
      </p>

      <button
        onClick={onProceed}
        className="mt-10 rounded-full bg-[#F59E0B] px-10 py-3 font-poppins text-[16px] font-medium text-white transition-colors hover:bg-[#D97706]"
      >
        Proceed Anyway
      </button>
    </div>
  );
}
