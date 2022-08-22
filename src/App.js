import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Autocomplete  from "./Components/AutoComplete";
import CheckBox from "./pages/CheckBox";
import Buttons from "./pages/Button"
import Select from "./pages/Select"
import Slider from "./pages/Slider"
import AvatarTooltip from "./pages/AvatarTooltip"
import Chips from "./pages/Chips"
import Lists from "./pages/List"
import Dialog from "./pages/Dialog"





function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/autocomplete" element={<Autocomplete/>} />
      <Route exact path="/checkbox" element={<CheckBox/>} />
      <Route exact path="/button" element={<Buttons/>} />
      <Route exact path="/select" element={<Select/>} />
      <Route exact path="/slider" element={<Slider/>} />
      <Route exact path="/avatar" element={<AvatarTooltip/>} />
      <Route exact path="/chips" element={<Chips/>} />
      <Route exact path="/list" element={<Lists/>} />
      <Route exact path="/dialog" element={<Dialog/>} />

    </Routes>
  </Router>
  );
}

export default App;
