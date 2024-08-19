import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchApi = createAsyncThunk("cart/fetchApi", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  
  // Fetch products from localStorage
  const localProducts = JSON.parse(localStorage.getItem("products")) || [];
  
  // Combine API products with localStorage products
  const allProducts = [...response.data, ...localProducts];
  console.log(allProducts);
  return allProducts;
});


const initialFavorites = localStorage.getItem("favorite")
  ? JSON.parse(localStorage.getItem("favorite"))
  : [];

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    isLoading: false,
    products: [],
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    isError: false,
    selectedProduct: localStorage.getItem("selectedProduct")
      ? JSON.parse(localStorage.getItem("selectedProduct"))
      : null,
    favorites: initialFavorites,
  },
  reducers: {
    add(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        toast.info("Increased product quantity in cart");
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        toast.success("Product added to cart");
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.error("Product removed from cart");
    },
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
      localStorage.setItem("selectedProduct", JSON.stringify(state.selectedProduct));
    },
    toggleFavorite(state, action) {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
        toast.info("Product removed from favorites");
      } else {
        state.favorites.push(productId);
        toast.success("Product added to favorites");
      }
      localStorage.setItem("favorite", JSON.stringify(state.favorites));
    },
    increaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.info("Increased product quantity in cart");
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0 && state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.info("Decreased product quantity in cart");
      }
    },
    resetCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
      toast.error("Cart has been reset");
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

export const {
  add,
  remove,
  selectProduct,
  toggleFavorite,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
