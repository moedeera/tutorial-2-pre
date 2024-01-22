import { useContext, useState } from "react";
import { siteContext } from "../../Context/Context";

export const AboutPage = () => {
  const { count, setCount, countNoStorage, setCountNoStorage } =
    useContext(siteContext);
  const [localCount, setLocalCount] = useState(1);
  return (
    <div className="container">
      <h3>About Page</h3>
      <div>
        {" "}
        <h1>global count:{count}</h1>
        <h2>with local Storage</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        {" "}
        <h1>global count:{countNoStorage}</h1>
        <h2>no local storage</h2>
        <button
          onClick={() => {
            setCountNoStorage(countNoStorage + 1);
          }}
        >
          Increment
        </button>
      </div>
      <div>
        {" "}
        <h1>local count B:{localCount}</h1>
        <button
          onClick={() => {
            setLocalCount(localCount + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
};
