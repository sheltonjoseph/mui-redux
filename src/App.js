import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Autocomplete  from "./Components/AutoComplete";
import CheckBox from "./pages/CheckBox";
import Buttons from "./pages/Button"
import Select from "./pages/Select"



function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/autocomplete" element={<Autocomplete/>} />
      <Route exact path="/checkbox" element={<CheckBox/>} />
      <Route exact path="/button" element={<Buttons/>} />
      <Route exact path="/select" element={<Select/>} />

    </Routes>
  </Router>
  );
}

export default App;
