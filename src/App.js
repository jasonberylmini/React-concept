import { BrowserRouter,Routes,Route } from "react-router-dom";
import Test1 from "./Test1";
import Example from "./Example"
import Design from "./Design"
import  Login from "./Login"
import Fetch from "./Fetch"
function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Fetch/>
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
