import { configureStore } from "@reduxjs/toolkit";
import checkList from "./userSlice";
import autoComplete from "./autoSlice"
import button from "./credSlice"
import select from "./selectSlice"
import slider from "./slideSlice"
import chip from "./chipSlice"



export default configureStore({
  reducer: {
    checking: checkList,
    auto: autoComplete,
    button: button,
    select:select,
    slider:slider,
    chip:chip,
  },
});
