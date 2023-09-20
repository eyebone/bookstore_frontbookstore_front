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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeView />}>
          <Route path="Book" element={<BookShow />} />
          <Route path="Shopping" element={<Shopping />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Statistics" element={<Statistics />} />
          <Route path="bookDetails" element={<BookDetail />} />
        </Route>
        <Route exact path="/" element={<LoginView />} />
        <Route path="/Manager" element={<ManagerView />}>
          <Route path="Book" element={<ManagerBook />} />
          <Route path="AddBook" element={<ManagerAddBook />} />
          <Route path="Order" element={<ManagerOrder />} />
          <Route path="User" element={<ManagerUser />} />
          <Route path="OrderStatistics" element={<OrderStatistics />} />
          <Route path="BookStatistics" element={<BookStatistics />} />
        </Route>
      </Routes>
    </Router>
  );
};


export default App;