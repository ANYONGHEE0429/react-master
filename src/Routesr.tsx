import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/:coinId" element={Coins /} />
      </Routes>
    </BrowserRouter>


  );
}
