import { configureStore } from "@reduxjs/toolkit";
import checkList from "./userSlice";
import autoComplete from "./autoSlice"
import button from "./credSlice"

export default configureStore({
  reducer: {
    checking: checkList,
    auto: autoComplete,
    button: button
  },
});
