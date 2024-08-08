import "./upBox.css";
import Headers from "./Headers";
import headerTitle from "../../props/HeaderPropsTitle";
import newsList from "../../props/HeaderPropsList";
import NewsList from "./NewsList";
import RigthMainBox from "./RigthMainBox";
import rigthBox from "../../props/HeaderPropsRigth";
import Currency from "./Currency";
import currencyBox from "../../props/HeaderCurrency";

export default function UpBox() {
  // страница верхних ссылок
  return (
    <div className="upBox_main">
      <div className="upBox_main_left">
        <Headers list={headerTitle.mainTitle} data={headerTitle.data} />
        <NewsList list={newsList} />
        <Currency list={currencyBox} />
      </div>
      <div className="upBox_main_rigth">
        <RigthMainBox list={rigthBox} />
      </div>
    </div>
  );
}
