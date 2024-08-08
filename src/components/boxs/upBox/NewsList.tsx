import newsList from "../../props/HeaderPropsList";

interface typyList {
  list: typeof newsList;
}

export default function NewsList({ list }: typyList) {
  // страница добавления списка важных новостей
  return (
    <div className="list_items">
      {list.map((item, idx) => (
        <a href="#!" key={idx} className="items_box">
          <img src={item.patch} className="item_img" />
          <p className="item_text">{item.text}</p>
        </a>
      ))}
    </div>
  );
}
