// import React from "react";
// import { ProgressBar } from "../components/ProgressBar";
// import { Link } from "react-router-dom";

// const StepOne = () => {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="single-input-quiz">
//           <ProgressBar currentStep={0} />
//           <div className="question">
//             <h2>1. Занимательный вопрос</h2>
//             <label className="input-wrapper">
//               <input
//                 required
//                 type="text"
//                 name="answer"
//                 placeholder="Ваш ответ"
//               />
//               <span id="error-message">
//                 Введите номер в правильном формате например
//               </span>
//             </label>
//             <Link to="/step-two">
//               <button type="button" disabled={checkedBtn} id="next-btn">
//                 Далее
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepOne;





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const navigate = useNavigate();
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setCheckBtn(!nameValue); // Проверка, активна ли кнопка
  }, [nameValue]);

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);

    // Проверяем, содержит ли ответ число
    if (/\d/.test(value)) {
      setError("Вы ввели неправильный ответ. Пожалуйста, не используйте числа.");
    } else {
      setError(""); // Очищаем ошибку, если ответ правильный
    }
  };

  const handleClick = () => {
    const isNameError = !nameRegex.test(nameValue);
    setNameError(isNameError);

    if (!isNameError) {
      // Переход на следующий шаг
      navigate("/step-one");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <h2>1. Что вас привело к нам</h2>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
                value={answer}
                onChange={handleAnswerChange} // Обработчик изменения
              />
              {error && <span id="error-message" style={{ color: "red" }}>{error}</span>} {/* Показываем сообщение об ошибке */}
            </label>
            <button type="button" disabled={!answer.trim() || !!error} id="next-btn" onClick={() => navigate("/step-two")}>
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
