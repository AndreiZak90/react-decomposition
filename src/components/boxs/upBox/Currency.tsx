import currencyBox from "../../props/HeaderCurrency";
import CurrModal from "./CurrencyModal";

interface currProp {
  list: typeof currencyBox;
}

export default function Currency({ list }: currProp) {
  // страница добавления строки с валютой
  return (
    <div className="currency_box">
      {list.map((item, idx) => (
        <CurrModal curr={item.curr} key={idx}>
          <p className="name_item">{item.name}</p>
          <p className="value_item">{item.value}</p>
          <p className="parcent_item">{item.percent}</p>
        </CurrModal>
      ))}
      <a href="#!" className="dop_item">
        Ещё
      </a>
    </div>
  );
}
