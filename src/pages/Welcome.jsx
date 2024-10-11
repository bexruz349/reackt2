// import React, { useEffect, useState } from "react";
// import { Header } from "../components/Header";
// import { AppLable } from "../components/AppLable";
// import { AppButton } from "../components/AppButton";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Welcome = () => {
//   const navigate = useNavigate()
//   const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
//   const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
//   const [nameValue, setNameValue] = useState("");
//   const [phoneValue, setPhoneValue] = useState("");
//   const [checkBtn,setCheckBtn]=useState(true);
//   const [nameError, setNameError] = useState(false);
//   const [phoneError, setPhoneError] = useState(false);
  

//   const goToNextPage= ()=>{
//     navigate("/step-two")
//   }


//   const handleClick = () => {
//     const isNameError = !nameRegex.test(nameValue);
//     const isPhoneError = !phoneRegex.test(phoneValue);
    
//     setNameError(isNameError);
//     setPhoneError(isPhoneError);
  
//     if (!isNameError && !isPhoneError) {
//       goToNextPage();
//     }
//   };


//   useEffect(() => {
//     if(nameValue && phoneValue){
//       setCheckBtn(false)
//     } else{
//       setCheckBtn(true)
//     }
//   }, [nameValue, phoneValue]);
//   return (
//     <div className="container">
//       <div className="wrapper">
//         <div className="welcome">
//           <Header
//             headerType="h1"
//             headerText="Добро пожаловать в квиз от лучшего учебного центра"
//           />
//           <form className="welcome__form">
//             <AppLable
//               labelText=" Ваше имя"
//               errorText="Введите Имя в правильном формате"
//               id="username"
//               isRequired
//               inputPlaceholder="Имя"
//               inputType="text"
//               labelChange={setNameValue}
//               labelValue={nameValue}
//               hasError={nameError}
//               onChange={(e) => setAnswer(e.target.value)}
//             />
//             <AppLable
//               labelText="Ваш номер"
//               errorText="Введите номер в правильном формате например"
//               id="phone"
//               hasError={phoneError}
//               isRequired={true}
//               labelChange={setPhoneValue}
//               labelValue={phoneValue}
//               inputPlaceholder="+998 9- --- -- -- "
//               inputType="text"
//               onChange={(e) => setAnswer(e.target.value)}
//             />

//             <Link to="/step-one">
//               <button type="button" disabled={checkedBtn} id="next-btn">
//                 Далее
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;



import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton"; // Если вам нужен этот компонент
import { useNavigate } from "react-router-dom";
import { themes } from "../context/ThemeContext"

const Welcome = () => {
  const navigate = useNavigate();
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  console.log("themes", themes);
  const goToNextPage= ()=>{
    navigate("/step-two")
  }

  const handleClick = () => {
    const isNameError = !nameRegex.test(nameValue);
    const isPhoneError = !phoneRegex.test(phoneValue);

    setNameError(isNameError);
    setPhoneError(isPhoneError);

    if (!isNameError && !isPhoneError) {
      goToNextPage();
      // Если ошибок нет, переходим на StepOne
      navigate("/step-one");
    }
  };

  useEffect(() => {
    setCheckBtn(!(nameValue && phoneValue));
  }, [nameValue, phoneValue]);

  return (
    <div className="container ">
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в наш Ipack Yoli Bank"
          />
          <form className="welcome__form" onSubmit={(e) => e.preventDefault()}>
            <AppLable
              labelText="Ваше имя"
              errorText="Введите Имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppLable
              labelText="Ваш номер"
              errorText="Введите номер в правильном формате например"
              id="phone"
              hasError={phoneError}
              isRequired
              labelChange={setPhoneValue}
              labelValue={phoneValue}
              inputPlaceholder="+998 9- --- -- -- "
              inputType="text"
            />

            <button type="button" disabled={checkBtn} id="next-btn" onClick={handleClick}>
              Далее
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
