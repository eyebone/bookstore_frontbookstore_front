import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomeView from "./view/HomeView";
import BookShow from "./components/BookShow";
import Shopping from "./components/Shopping";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import BookDetail from "./components/BookDetail";
import LoginView from "./view/LoginView";
import ManagerView from "./view/ManagerView";
import ManagerBook from "./components/ManagerBook";
import ManagerUser from "./components/ManagerUser";
import ManagerOrder from "./components/ManagerOrder";
import ManagerAddBook from "./components/ManagerAddBook";
import Statistics from "./components/Statistics";
import OrderStatistics from "./components/ManagerStatistics";
import BookStatistics from "./components/BookStatistics";

const routes = createRoutes([
  {
    path: "/Home",
    element: <HomeView />,
    children: [
      {
        path: "Book",
        element: <BookShow />,
      },
      {
        path: "Shopping",
        element: <Shopping />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "Statistics",
        element: <Statistics />,
      },
      {
        path: "bookDetails",
        element: <BookDetail />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginView />,
  },
  {
    path: "/Manager",
    element: <ManagerView />,
    children: [
      {
        path: "Book",
        element: <ManagerBook />,
      },
      {
        path: "AddBook",
        element: <ManagerAddBook />,
      },
      {
        path: "Order",
        element: <ManagerOrder />,
      },
      {
        path: "User",
        element: <ManagerUser />,
      },
      {
        path: "OrderStatistics",
        element: <OrderStatistics />,
      },
      {
        path: "BookStatistics",
        element: <BookStatistics />,
      },
    ],
  },
]);

const App = () => {
  return <Router routes={routes} />;
};

export default App;