interface currItemProp {
  curr?: string;
  children: React.ReactNode;
}

export default function CurrModal({ curr, children }: currItemProp) {
  // страница добавления строки с валютой и проверкой есть ли знак валюты
  return (
    <>
      <div className="currItem">
        {curr ? <p className="curr_item">{curr}</p> : <></>}
        {children}
      </div>
    </>
  );
}
