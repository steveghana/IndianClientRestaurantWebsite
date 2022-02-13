import React from "react";
import { Grid } from "@material-ui/core";
import cardStyles from "../styles/cardLayout.module.scss";
function CardLayout() {
  return (
    <div className={cardStyles.cardWrapper}>
      <div className={cardStyles.cuisine}>world cuisine</div>
      <div className={cardStyles.image}>
        <i className={cardStyles.promotion}></i>
      </div>
      <div className={cardStyles.name}>Dark Chocolate Berry Square</div>
      <div className={cardStyles.priceAndAdd}>
        <div className={cardStyles.price}>$99</div>
        <div className={cardStyles.addBtn}>ADD</div>
      </div>
    </div>
  );
}

export default CardLayout;
