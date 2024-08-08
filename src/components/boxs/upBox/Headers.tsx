interface propList {
  list: string[];
  data: string[];
}

export default function Headers({ list, data }: propList) {
  // страница добавления самых верхних ссылок и даты
  return (
    <div className="headers">
      {list.map((title, idx = Math.random()) => (
        <a href="#!" key={idx} className="list_main">
          {title}
        </a>
      ))}
      <p className="data_main">{data}</p>
    </div>
  );
}
