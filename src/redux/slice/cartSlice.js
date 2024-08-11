import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("cart/fetchApi", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isLoading: false,
    products: [],
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    isError: false,
  },
  reducers: {
    add(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    resetCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchApi.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
