import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <h1>BLog App with Appwrite </h1>
    </>
  );
}

export default App;
