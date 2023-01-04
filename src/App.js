import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import OrderReview from "./Components/OrderReview/OrderReview";
import Grandpa from "./Components/Grandpa/Grandpa";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/orderreview"
          element={<OrderReview></OrderReview>}
        ></Route>
        <Route path="/grandpa" element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
