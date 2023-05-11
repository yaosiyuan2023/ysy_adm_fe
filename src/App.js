import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoadingHandler({
  //     startLoading: () => setLoading(true),
  //     closeLoading: () => setLoading(false),
  //   });
  // }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
