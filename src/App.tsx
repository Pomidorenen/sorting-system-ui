import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "@pages/main";
import "./App.css";

function App() {

  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
