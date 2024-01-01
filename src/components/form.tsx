interface FormProps {
  prompt: string;
  setPrompt: any;
  onSubmit: any;
  isLoading: boolean;
  characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
        props.setPrompt(text);
    }
  }

  return (
    <>
      <p>Tell me a body part and I will generate exericses for you.</p>
      <input
        placeholder="bicep"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div>
        {props.prompt.length}/{props.characterLimit}
      </div>
      <button onClick={props.onSubmit} disabled={props.isLoading}>Submit</button>
    </>
  );
};

export default Form;
