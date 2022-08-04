import {useState} from "react";

function App() {

  const [active, setActive] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const disableCheck = (active, button) => {
    if (button === "prev") {
      if (active === 2) {
        setPrevDisabled(true);
        setActive(active - 1);
      } if (active === 4) {
        setNextDisabled(false);
        setActive(active - 1);
      } else {
        setActive(active - 1);
      }
    } else if (button === "next") {
      if (active === 3) {
        setNextDisabled(true);
        setActive(active + 1);
      } if (active === 1) {
        setPrevDisabled(false);
        setActive(active + 1);
      } else {
        setActive(active + 1);
      }
    } else {
      console.log("Error in 'disableCheck' function");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="progressContainer">
          <div className="progress" id="progress"></div>
          <div 
            className={active === 1 ? "circle active" : "circle"}
          >1</div>
          <div 
            className={active === 2 ? "circle active" : "circle"}
          >2</div>
          <div 
            className={active === 3 ? "circle active" : "circle"}
          >3</div>
          <div 
            className={active === 4 ? "circle active" : "circle"}
          >4</div>
        </div>

        <button 
          className="btn" 
          id="prev" 
          disabled={prevDisabled}
          onClick={() => {disableCheck(active, "prev")}}
        >Prev</button>
        <button 
          className="btn" 
          id="next" 
          disabled={nextDisabled}
          onClick={() => {disableCheck(active, "next")}}
        >Next</button>
      </div>
    </div>
  );
}

export default App;
