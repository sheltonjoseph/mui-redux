import { configureStore } from "@reduxjs/toolkit";
import checkList from "./userSlice";
import autoComplete from "./autoSlice"

export default configureStore({
  reducer: {
    checking: checkList,
    auto: autoComplete
  },
});
