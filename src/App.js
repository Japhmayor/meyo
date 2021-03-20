import { useState, useEffect } from "react";
import Loading from "./LoadingScreen";
import MainPage from "./mainPage";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <MainPage />;
}

export default App;
