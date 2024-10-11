import { getByLabelText } from "@testing-library/react";
import React from "react";

export const AppLable = ({
  labelText,
  errorText,
  inputPlaceholder,
  inputTupe,
  id,
  labelValue,
  isRequired,
  labelChange,
  hasError,
})=>{
  
    return(
        <label className={`input-wrapper ${hasError && "_error"} `} htmlFor={id}>
              {labelText} 
              <input 
              value={labelValue}
                required={isRequired}
                type={inputTupe}
                name={id}
                id={id}
                onChange={(e)=>labelChange(e.target.value)}
                placeholder={inputPlaceholder}/>
               {hasError && <span id="error-message">{errorText}</span>}</label>
        
        
    )
}