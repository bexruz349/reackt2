export const AnswerCharacter = ({ answerText, answerImg, id }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={id} />
      <label htmlFor={id}>
        <img src={answerImg} alt="smirk" />
        <p>{answerText}</p>
      </label>
    </li>
  );
};
