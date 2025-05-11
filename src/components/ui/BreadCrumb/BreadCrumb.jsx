import React from "react";
import styles from "./BreadCrumb.module.css";
import { Link, useLocation } from "react-router-dom";

const breadCrumbs = {
  catalog: "Каталог",
  mixes: "Ассорти",
  candies: "Конфеты",
  "gift-boxes": "Подарочные коробки",
  "candy-sets": "Готовые наборы",
  other: "Аксессуары и другое",
}
function BreadCrumb() {
  const location = useLocation();  /* хук для получения url */
  const paths = location.pathname.split('/').filter(Boolean); /* pathname - берет ссылку после названия порта */
  const links = [];

  paths.forEach((segment, index) => {
    const segmentLink = '/' + paths.slice(0, index + 1).join('/');
    const segmentName = breadCrumbs[segment] || segment.replaceAll('-', " ");

    links.push( 
      <span key={segmentLink}>
        <Link to={segmentLink} className={styles.link}>{segmentName.charAt(0).toUpperCase() + segmentName.slice(1)}</Link>
        {index < paths.length - 1 && <span className={styles.separator}> ● </span>}
      </span>
    )
  })

  return (
    <div className={styles.breadcrumb}>
      {links}
    </div>
  );
}

export default BreadCrumb;
