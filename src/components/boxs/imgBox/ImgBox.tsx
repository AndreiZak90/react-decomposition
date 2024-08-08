import image from "../../../images/img/long_foto.jpg";
import "./ImgBox.css";

export default function ImgBox() {
  // страница добаления рекламного фото
  return <img src={image} className="images_box" />;
}
