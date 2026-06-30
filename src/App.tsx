import { BrowserRouter, Route, Routes } from "react-router";
import DetailsPage from "@pages/details-page";
import OrdersPage from "@pages/order-page";
import AuthPage from "@pages/auth-page";
import "./App.css";

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path="/" element={<DetailsPage/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
