interface ResultsProps {
  prompt: string;
  exercises: string[];
  explanation: string;
  onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const exerciseElements = [];
  for (let i = 0; i < props.exercises.length; i++) {
    const element = <div key={i}>{props.exercises[i]}</div>;
    exerciseElements.push(element);
  }

  const explanation = props.explanation.replace(/['"]+/g, "")

  const resultSection = (label: string, body: any) => {
    return (
      <div className="bg-motion-light-blue p-4 rounded-md my-2">
        <div className="font-bold text-sm">{label}</div>
        <div>{body}</div>
      </div>
    );
  };

  return (
    <>
      <div>
        {resultSection(
          "Prompt",
          <div className="text-lg font-bold">{props.prompt}</div>
        )}
        {resultSection("Exercises", exerciseElements)}
        {resultSection("Explanation", explanation)}
      </div>
      <button
        className="bg-gradient-to-r from-motion-orange to-motion-red w-full p-2 rounded-md"
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  );
};

export default Results;
