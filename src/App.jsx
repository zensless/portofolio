import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./component/Navbar";
// import Footer from "./component/footer";

import Home from "./pages/Home";
import MySkill from "./pages/MySkill";
import FaqPage from "./pages/FaqPage";






function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Myskill" Component={MySkill} />
        <Route path="/Faq" Component={FaqPage} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
  

}

export default App
