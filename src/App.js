import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./screen/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Analytics from "./screen/Analytics/Analytics";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Header />
      <SideBar />
      <Routes>
        <Route  path="/" element={<Dashboard />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
