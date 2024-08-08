import "./DuwnBox.css";
import Visited from "./Visited";
import Weather from "./Weather";
import visited from "../../props/VisitedPops";
import MapsBox from "./MapsBox";
import TvBox from "./TVBox";
import TvBlock from "../../props/TvProp";
import Ether from "./Ether";
import etherBox from "../../props/EtherProp";

export default function DuwnBox() {
  // страница нижнего блока
  return (
    <div className="duwnBox_main">
      <div className="duwnBox_main_left">
        <Weather />
        <Visited list={visited} />
      </div>
      <div className="duwnBox_main_centr">
        <MapsBox />
        <TvBox list={TvBlock} />
      </div>
      <div className="duwnBox_main_ritgh">
        <Ether list={etherBox} />
      </div>
    </div>
  );
}
