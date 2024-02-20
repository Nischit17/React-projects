import "./App.css";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import Accordian from "./components/accordian/Accordian";
import Show from "./components/show_hide/Show";
import StarRating from "./components/starrating/StarRating";

function App() {
  return (
    <div>
      {/* Accordian Component */}
      <Accordian />
      {/* StarRating Component */}
      <StarRating noOfStars={10} />
      {/* Show/Hide Title Component */}
      <Show />
      {/* Time Component */}
      <Stopwatch />
    </div>
  );
}

export default App;
