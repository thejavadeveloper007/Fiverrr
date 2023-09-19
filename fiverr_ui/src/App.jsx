import React from "react";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"; 
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Add from "./pages/add/Add";
import MyGigs from "./pages/myGigs/MyGigs";
import Register from "./pages/register/Register";
import Orders from "./pages/orders/Orders";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {

  const Layout = () =>{
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <hr />
        <Footer />
      </div>
    )
  }

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gig/:id',
          element: <Gig />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/message/:id',
          element: <Message />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/myGigs',
          element: <MyGigs />
        },
        {
          path: '/register',
          element: <Register />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
