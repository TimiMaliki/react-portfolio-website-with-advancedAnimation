import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import Router from "../Router";

function App() {
  return (

      <BrowserRouter>
        <Router />
      </BrowserRouter>
   
  );
}

export default App;
