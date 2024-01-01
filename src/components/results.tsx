interface ResultsProps {
    prompt: string;
    exercises: string[];
    explanation: string;
    onBack: any;
}

const Results: React.FC<ResultsProps> = (props) => {
    const exerciseElements = [];
    for (let i = 0; i < props.exercises.length; i++) {
        const element = <div key={i}>{props.exercises[i]}</div>
        exerciseElements.push(element)
    }

  return (
    <>
      <div>
        <div>
          <div><b>Prompt</b></div>
          <div>{props.prompt}</div>
        </div>        
        <div>
          <div><b>Exercises</b></div>
          <div>{exerciseElements}</div>
        </div>
        <div>
          <div><b>Explanation</b></div>
          <div>{props.explanation.replace(/['"]+/g, "")}</div>
        </div>
      </div>
      <button onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;
