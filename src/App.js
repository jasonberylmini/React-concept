import { BrowserRouter,Routes,Route } from "react-router-dom";
import Test1 from "./Test1";
import Example from "./Example"
import Design from "./Design"
import  Login from "./Login"
import Fetch from "./Fetch"
import Calculator from './Calculator'
function App() {
  return (
    <div className="App">
      <Calculator />
      {/* <Login/> */}
      {/* <Fetch/> */}
      {/* <Design/> */}
      {/* <Example/> */}
      {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<Test1/>}></Route>      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
