import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "../ReduxData/RegisterSlice";


const store = configureStore({
   reducer : {
          regData : RegisterReducer
   }
})

export default store ;