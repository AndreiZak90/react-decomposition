import rigthBox from "../../props/HeaderPropsRigth";

interface propRigthBox {
  list: typeof rigthBox;
}

export default function RigthMainBox({ list }: propRigthBox) {
  // страница добавления бокового блока
  return (
    <div className="rigthBox">
      <img src={list.img} alt="" className="rightBox_img" />
      <a href="#!" className="rightBox_link">
        <h3 className="rightBox_title">{list.title}</h3>
      </a>
      <p className="rightBox_text">{list.text}</p>
    </div>
  );
}
