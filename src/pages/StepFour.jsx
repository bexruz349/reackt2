// import React from "react";
// import { ProgressBar } from "../components/ProgressBar";
// import { Link } from "react-router-dom";

// const StepFour = () => {
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="emoji-quiz">
//           <ProgressBar currentStep={4} />
//           <div className="question">
//             <h2>4. Занимательный вопрос</h2>
//             <ul className="level-variants">
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-1" />
//                 <label htmlFor="variant-1">1</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-2" />
//                 <label htmlFor="variant-2">2</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-3" />
//                 <label htmlFor="variant-3">3</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-4" />
//                 <label htmlFor="variant-4">4</label>
//               </li>
//               <li className="variant-wrapper">
//                 <input required type="radio" name="variant" id="variant-5" />
//                 <label htmlFor="variant-5">5</label>
//               </li>
//             </ul>
//             <Link to="/step-thanks">
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

// export default StepFour;



// import React, { useState } from "react";
// import { ProgressBar } from "../components/ProgressBar";
// import { Link } from "react-router-dom";

// const StepFour = () => {
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const checkedBtn = selectedVariant === null; // Кнопка отключена, если вариант не выбран

//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="emoji-quiz">
//           <ProgressBar currentStep={4} />
//           <div className="question">
//             <h2>4. Занимательный вопрос</h2>
//             <ul className="level-variants">
//               {[...Array(5)].map((_, index) => (
//                 <li className="variant-wrapper" key={index + 1}>
//                   <input
//                     required
//                     type="radio"
//                     name="variant"
//                     id={`variant-${index + 1}`}
//                     onChange={() => setSelectedVariant(index + 1)}
//                   />
//                   <label htmlFor={`variant-${index + 1}`}>{index + 1}</label>
//                 </li>
//               ))}
//             </ul>
//             <Link to="/step-thanks">
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

// export default StepFour;


import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Link } from "react-router-dom";

const StepFour = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const checkedBtn = selectedVariant === null; // Кнопка отключена, если вариант не выбран

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={4} />
          <div className="question">
            <h2>4. Вам нравиться наш банк и наши услуги</h2>
            <ul className="level-variants">
              {[...Array(5)].map((_, index) => (
                <li className="variant-wrapper" key={index + 1}>
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={`variant-${index + 1}`}
                    onChange={() => setSelectedVariant(index + 1)}
                  />
                  <label htmlFor={`variant-${index + 1}`}>{index + 1}</label>
                </li>
              ))}
            </ul>
            {/* <Link to="/Welcome">
              <button type="button" disabled={checkedBtn} id="next-btn">
                Далее
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
