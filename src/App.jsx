import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import { Test } from "./pages/Test";
import "./styles/main.css";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,
    },
    {
      path: "/step-One",
      element: <StepOne />,
    },
    { 
      path: "/step-Two",
      element: <StepTwo /> 
    },
    {
      
      path:"/step-three" ,
      element: <StepThree />,
    },
    {
     path:"/step-Four",
     element:<StepFour/>
    },
    {
      path:"/thanks",
      element:<Thanks/>
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

