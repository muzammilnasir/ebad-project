// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Contact from "./pages/Contact";
// import Layout from "./components/layout/Layout";
// import Details from "./pages/Details";
// import Favorite from "./pages/Favorite";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="favorite" element={<Favorite />} />
//       <Route path="cart" element={<Cart />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="details" element={<Details />} />
//     </Route>
//   )
// )

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;

import React, { Suspense, lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Lazy loading components
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Contact = lazy(() => import("./pages/Contact"));
const Details = lazy(() => import("./pages/Details"));
const Favorite = lazy(() => import("./pages/Favorite"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="favorite" element={<Favorite />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
      <Route path="details" element={<Details />} />
    </Route>
  )
);

function App() {
  return (
    <Suspense fallback={/* From Uiverse.io by Javierrocadev */
      <div className="backdrop-blur-3xl h-screen w-screen flex items-center justify-center">
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
      </div>
    }>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
