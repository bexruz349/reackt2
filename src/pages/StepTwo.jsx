// import React, { useEffect, useState } from "react";
// // const [checkedBtn, setCheckedBtn] = useState(initialValue);
// import { checkedBtn } from './path/to/file';


// import { ProgressBar } from "../components/ProgressBar";
// import { Header } from "../components/Header";
// import { AnswerItem } from "../components/AnswerItem";
// import { Link } from "react-router-dom";

// const StepTwo = () => {
//   const variants = [
//     {
//       id: "variant-1",
//       answerText: "Frontend",
//     },
//     {
//       id: "variant-2",
//       answerText: "Python",
//     },
//     {
//       id: "variant-3",
//       answerText: "UX/UI",
//     },
//     {
//       id: "variant-4",
//       answerText: "DATA Аналитик",
//     },
//   ];
//   const [checkedBtn, setCheckedBtn]= useState(true)
//   const [checkedAnswer, setCheckedAnswer] = useState(null);
//   useEffect(() => {
//     checkedAnswer!==null ? setCheckedBtn(false) : setCheckedBtn(true)
//   }, [checkedAnswer]);

//   if (checkedAnswer !== null) {
//     localStorage.setItem("Course", JSON.stringify(checkedAnswer));
//   } else {
//     localStorage.setItem("Course", "");
//   }
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="variants-quiz">
//           <ProgressBar currentStep={2} />
//           <div className="question">
//             <Header
//               headerText="На какой курс вы запишитесь ?"
//               headerType="h2"
//             />
//             <ul className="variants">
//               {variants.map((e) => (
//                 <AnswerItem
//                   key={e.id}
//                   id={e.id}
//                   answerText={e.answerText}
//                   answerChange={() => setCheckedAnswer(e.answerText)}
//                 />
//               ))}
//             </ul>
//             <Link to="/step-three">
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

// export default StepTwo;





import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { Link } from "react-router-dom";

const StepTwo = () => {
  const variants = [
    {
      id: "variant-1",
      answerText: "Карточный отдел",
    },
    {
      id: "variant-2",
      answerText: "Кредмтнный отдел",
    },
    {
      id: "variant-3",
      answerText: "IT",
    },
    {
      id: "variant-4",
      answerText: "Отдел Кассовых операций",
    },
  ];

  const [checkedBtn, setCheckedBtn] = useState(true);
  const [checkedAnswer, setCheckedAnswer] = useState(null);

  useEffect(() => {
    setCheckedBtn(checkedAnswer === null);
  }, [checkedAnswer]);

  useEffect(() => {
    localStorage.setItem("Course", JSON.stringify(checkedAnswer || ""));
  }, [checkedAnswer]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header
              headerText="В каком отделе вы хотите роботать?"
              headerType="h2"
            />
            <ul className="variants">
              {variants.map((e) => (
                <AnswerItem
                  key={e.id}
                  id={e.id}
                  answerText={e.answerText}
                  answerChange={() => setCheckedAnswer(e.answerText)}
                />
              ))}
            </ul>
            <Link to="/step-three">
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

export default StepTwo;
