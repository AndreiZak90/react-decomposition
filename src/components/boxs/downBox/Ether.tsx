import etherBox from "../../props/EtherProp";
import play from "../../../images/icon/play.png";
interface propTvEther {
  list: typeof etherBox;
}

export default function Ether({ list }: propTvEther) {
  // страница добавлени ссылок блока ЭФИР
  return (
    <div className="weather_box_item">
      <a href="#!" className="link_title">
        <h2 className="title_duwn">Эфир</h2>
      </a>
      <div className="tv_prog_block">
        {list.map((item, idx) => (
          <a className="item_tv" key={idx}>
            <img src={play} className="item_img_er" />
            <p className="item_chanel">{item.chanel}</p>
            <p className="item_prog">{item.prog}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
