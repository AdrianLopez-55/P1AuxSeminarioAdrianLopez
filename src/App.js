import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutLopez }   from "./routes/RoutesLayoutLopez";
import './App.css';
//import { NavbarLopez } from "./routes/NavbarLopez";
import React from "react";

export const userContext = React.createContext()

function App() {
  const user = {
    name: 'Adrian López Espinoza',
    img: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
  }
  return (
    <div className="App">
      <userContext.Provider value={user}>
        <BrowserRouter>
          <RoutesLayoutLopez />
        </BrowserRouter>
      </userContext.Provider>

    </div>
  );
}

export default App;
