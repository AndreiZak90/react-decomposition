import "./Search.css";
import SearchLogo from "./SearchLogo";
import SearchMainBox from "./SearchMainBox";

export default function SearchBox() {
  // страница основная блока с поиском
  return (
    <div className="searchBox_main">
      <SearchLogo />
      <SearchMainBox />
    </div>
  );
}
