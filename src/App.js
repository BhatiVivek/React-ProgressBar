import { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [progress]);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="outer">
        <div
          className="inner"
          style={{
            transform: `translateX(${progress - 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default App;
