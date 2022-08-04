import {useState} from "react";

function App() {

  const [active, setActive] = useState(1);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = (active, button) => {
    if (button === "prev") {
      if (active === 2) {
        setPrevDisabled(true);
      } else if (active === 4) {
        setNextDisabled(false);
      }
      setActive(active - 1);
      let newProgress = ((active - 2) / 3) * 100;
      setProgress(newProgress);
    } else if (button === "next") {
      if (active === 3) {
        setNextDisabled(true);
      } else if (active === 1) {
        setPrevDisabled(false);
      }
      setActive(active + 1);
      let newProgress = ((active) / 3) * 100;
      setProgress(newProgress);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="progressContainer">
          <div className="progress" id="progress" style={{width: progress + "%"}}></div>
          <div 
            className={active >= 1 ? "circle active" : "circle"}
          >1</div>
          <div 
            className={active >= 2 ? "circle active" : "circle"}
          >2</div>
          <div 
            className={active >= 3 ? "circle active" : "circle"}
          >3</div>
          <div 
            className={active >= 4 ? "circle active" : "circle"}
          >4</div>
        </div>

        <button 
          className="btn" 
          id="prev" 
          disabled={prevDisabled}
          onClick={() => {handleClick(active, "prev")}}
        >Prev</button>
        <button 
          className="btn" 
          id="next" 
          disabled={nextDisabled}
          onClick={() => {handleClick(active, "next")}}
        >Next</button>
      </div>
    </div>
  );
}

export default App;
