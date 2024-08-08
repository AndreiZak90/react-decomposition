import TvBlock from "../../props/TvProp";

interface propTv {
  list: typeof TvBlock;
}

export default function TvBox({ list }: propTv) {
  // страница блока ТВ программ
  return (
    <div className="weather_box_item">
      <a href="#!" className="link_title">
        <h2 className="title_duwn">Телепрограмма</h2>
      </a>
      <div className="tv_prog_block">
        {list.map((item, idx) => (
          <div className="item_tv" key={idx}>
            <p className="item_time">{item.time}</p>
            <p className="item_chanel">{item.chanel}</p>
            <p className="item_prog">{item.program}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
