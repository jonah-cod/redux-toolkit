import { configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
      reducer: {
            todos: todoSlice,
            productdetails: productsSlice
      }
})

export default store;