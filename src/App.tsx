import { BrowserRouter, Route, Routes,useLocation  } from "react-router";
import DetailsPage from "@pages/details-page";
import OrdersPage from "@pages/order-page";
import AuthPage from "@pages/auth-page";
import "./App.css";
import { Logs } from "@components/Logs";
import { ButtonScrollTop } from "@components/Button";

function AnimationRoute(){
    const location = useLocation();
    return  <div key={location.pathname} className="page">
                <Routes  location={location}>
                  <Route path="/auth" element={<AuthPage/>}/>
                  <Route path="/" element={<DetailsPage/>}/>
                  <Route path="/orders" element={<OrdersPage/>}/>
                </Routes>
              <Logs/>
              <ButtonScrollTop/>
          </div>
}

function App() {
  return (
    <main>
      <BrowserRouter>
        <AnimationRoute/>
      </BrowserRouter>
    </main>
  );
}

export default App;
