import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import House from "./components/House";
import Header from "./components/Header";
import ListAHouse from "./components/ListAHouse";
import Login from "./components/Login";
import SearchHouse from "./components/SearchHouse";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Enquiries from "./components/Enquiries";
import SearchFilter from "./components/SearchFilter";
import SearchResults from "./components/SearchResults";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentGateway from "./components/PaymentGateway";

function App() {
  const stripePromise = loadStripe(
    "pk_test_51OyWMqSHaPJYJnpYT4FynnyQ42GGG06WKJPAm3AVr7PrDlzQe3HGkQDIdw8elKdrZd1B1ucc6vgUZ7jAcovUNgyh00pXJG8k13"
  );
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/search" element={<SearchFilter />} />
        <Route path="/house/:id" element={<House />} />
        {/* <Route path="listahouse" element={<ListAHouse/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/searchresults/:locality/:bhk"
          element={<SearchResults />}
        />
        
        <Route path="/searchhouse/:id" element={<SearchHouse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
      <Elements stripe={stripePromise}>
        <Routes>
        <Route path="*" element={<PageNotFound />} />
          <Route path="/pg" element={<PaymentGateway/>} />
        </Routes>
      </Elements>
    </div>
  );
}

export default App;
