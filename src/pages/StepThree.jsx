import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerCharacter } from "../components/AnswerCharacter";
import { Link } from "react-router-dom";

const StepThree = () => {
    const [selectedVariant, setSelectedVariant] = useState(null);

    
    const variants = [
        {
          answerText: "VK",
          
          answerId: "variant-1",
        },
        {
          answerText: "Whatsapp",
          
          answerId: "variant-2",
        },
        {
          answerText: "Instogram",
          
          answerId: "variant-3",
        },
        {
          answerText: "Telegram",
          
          answerId: "variant-4",
        },
      ];

    const handleVariantSelect = (id) => {
        setSelectedVariant(id);
    };

    const checkedBtn = selectedVariant === null; // Кнопка отключена, если вариант не выбран

    return (
        <div className="container">
            <div className="wrapper">
                <div className="emoji-quiz">
                    <ProgressBar currentStep={3} />
                    <div className="question">
                        <h2>3.  Как нам будет удобнее с вами связаться</h2>
                        <ul className="emoji-variants">
                            {variants.map((elem) => (
                                <li key={elem.answerId} onClick={() => handleVariantSelect(elem.answerId)}>
                                    <AnswerCharacter
                                        answerImg={elem.answerImg}
                                        id={elem.answerId}
                                        answerText={elem.answerText}
                                    />
                                </li>
                            ))}
                        </ul>
                        <Link to="/step-four">
                            <button type="button" disabled={checkedBtn} id="next-btn">
                                Далее
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepThree;

  


// import React, { useState } from "react";
// import { ProgressBar } from "../components/ProgressBar";
// import { AnswerCharacter } from "../components/AnswerCharacter";
// import { Link } from "react-router-dom";

// const StepThree = () => {
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const variants = [
//     // ваши варианты
//   ];
//   const checkedBtn = selectedVariant === null; // Кнопка отключена, если вариант не выбран

//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="emoji-quiz">
//           <ProgressBar currentStep={3} />
//           <div className="question">
//             <h2>3. Занимательный вопрос</h2>
//             <ul className="emoji-variants">
//               {variants.map((elem) => (
//                 <AnswerCharacter
//                   answerImg={elem.answerImg}
//                   key={elem.answerId}
//                   id={elem.answerId}
//                   answerText={elem.answerText}
//                   onClick={() => setSelectedVariant(elem.answerId)} // Устанавливаем выбранный вариант
//                 />
//               ))}
//             </ul>
//             <Link to="/step-four">
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

// export default StepThree;
