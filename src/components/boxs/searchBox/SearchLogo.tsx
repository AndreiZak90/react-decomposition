import logo from "../../../images/icon/yandex.png";

export default function SearchLogo() {
  // страница добавления логотипа
  return (
    <a href="#!" className="logo_serch_link">
      <img src={logo} className="logo_search_img" />
    </a>
  );
}
