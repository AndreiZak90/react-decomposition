import wat from "../../../images/icon/free-icon-weather-4829032.png";

export default function Weather() {
  // страница блока с погодой
  return (
    <div className="weather_box_item">
      <a href="#!" className="link_title">
        <h2 className="title_duwn">Погода</h2>
      </a>

      <div className="weather_box">
        <img src={wat} className="weather_img" />
        <p className="weather_num">+17</p>
        <p className="weather_data">
          утром +17,<br></br> днем +20
        </p>
      </div>
    </div>
  );
}
