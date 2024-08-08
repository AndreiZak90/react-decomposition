import SearchLink from "./SearchLink";
import linkSearch from "../../props/SearchLink";
import keyboard from "../../../images/icon/keyboard.png";
import { useEffect, useState } from "react";
import offers from "../../props/OffersSearch";

export default function SearchMainBox() {
  // страница основного блока поиска
  const [offer, setOffer] = useState(offers[0]);
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % offers.length;
      setOffer(offers[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="searchMain">
      <SearchLink link={linkSearch} />
      <div className="inputBox">
        <div className="input_box">
          <input type="text" className="inputBoxLink" />
          <img src={keyboard} alt="" className="inputBoxImg" />
        </div>
        <button className="inputBoxBtn">Найти</button>
      </div>
      <div className="offers_box">
        <p className="offers_text">
          Найдётся всё. Например, <p className="offers_links"> {offer}</p>
        </p>
      </div>
    </div>
  );
}
