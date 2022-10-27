import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div style={{ backgroundColor: "#fcfef5", height: "100vh" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
