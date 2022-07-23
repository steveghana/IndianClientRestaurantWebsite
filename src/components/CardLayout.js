import React from "react";
import { Grid } from "@material-ui/core";
import pizza from "../assets/p1.jpg";
import cardStyles from "../styles/cardLayout.module.scss";
function CardLayout({ name, img, price }) {
  return (
    <div className={cardStyles.cardWrapper}>
      <div className={cardStyles.cuisine}>world cuisine</div>
      <div
        className={cardStyles.image}
        style={{ backgroundImage: `url(${pizza})` }}
      >
        <i className={cardStyles.promotion}></i>
      </div>
      <div className={cardStyles.name}>{name}</div>
      <div className={cardStyles.priceAndAdd}>
        <div className={cardStyles.price}>{`$${price.length}`}</div>
        <div className={cardStyles.addBtn}>ADD</div>
      </div>
    </div>
  );
}

export default CardLayout;
