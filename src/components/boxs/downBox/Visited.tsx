import visited from "../../props/VisitedPops";

interface listLinks {
  list: typeof visited;
}

export default function Visited({ list }: listLinks) {
  // страница блока посещаемости
  return (
    <div className="weather_box_item">
      <a href="#!" className="link_title">
        <h2 className="title_duwn">Посещаемое</h2>
      </a>
      <div className="weather_box_links">
        {list.map((item, idx) => (
          <div className="weat_item" key={idx}>
            <p className="weat_text">
              <a className="weat_text_bold">{item.tem}</a> - {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
