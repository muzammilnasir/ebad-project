import React, { Suspense, lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ToastContainer } from 'react-toastify';
import DarkMode from "./components/specialcase/DarkMode";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./pages/Details"));
const Favorite = lazy(() => import("./pages/Favorite"));
const AddProduct = lazy(() => import("./pages/AddProduct"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="details" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="addProduct" element={<AddProduct />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Suspense fallback={
        <div className="backdrop-blur-3xl h-screen w-screen flex items-center justify-center">
          <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      }>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
      <DarkMode /> 
    </>
  );
}

export default App;
