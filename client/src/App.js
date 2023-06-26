import Home from "./Home";
import { Route, Routes } from "react-router-dom";
 import { Toaster } from "react-hot-toast";


const App = () =>{
  
    return(
        <>
              <Toaster position='bottom-center' toastOptions={{ duration: 3000 }} />
        <Routes>
        <Route  path="/" element={<Home/>} />
        </Routes> 
     

        </>
    )
};

export default App;