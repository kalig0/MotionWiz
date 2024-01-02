interface FormProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
  const promptAtLimit = props.prompt.length < props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

  let statusColor = "text-slate-400";
  let statusText = "";
  if (!promptAtLimit) {
    statusColor = "text-motion-orange";
    statusText = `Input must be less than ${props.characterLimit} characters`;
  }

  return (
    <>
      <div className="mb-6 text-motion-white">
        <p>Tell me a body part and I will generate exericses for you.</p>
      </div>

      <input
        className="p-2 w-full rounded-md focus:outline-motion-red focus:outline text-motion-gray"
        placeholder="bicep"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + " flex justify-between my-2 text-sm"}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-motion-orange to-motion-red disabled:opacity-50 w-full p-2 rounded-md"
        onClick={props.onSubmit}
        disabled={props.isLoading || !promptAtLimit}
      >
        Submit
      </button>
    </>
  );
};

export default Form;
