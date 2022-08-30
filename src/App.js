import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
