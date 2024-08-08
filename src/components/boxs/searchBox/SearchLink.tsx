interface linkProp {
  link: string[];
}

export default function SearchLink({ link }: linkProp) {
  // страница добавления ссылок над инпутом
  return (
    <ul className="links_search">
      {link.map((item, idx) => (
        <li className="link_item_search" key={idx}>
          <a href="#!" className="link_item_search_link">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
