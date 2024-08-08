import "./App.css";
import DuwnBox from "./components/boxs/downBox/DuwnBox";
import ImgBox from "./components/boxs/imgBox/ImgBox";
import SearchBox from "./components/boxs/searchBox/SearchBox";
import UpBox from "./components/boxs/upBox/UpBox";

function App() {
  // основная страница с компонентами
  return (
    <div className="container">
      <UpBox />
      <SearchBox />
      <ImgBox />
      <DuwnBox />
    </div>
  );
}

export default App;
