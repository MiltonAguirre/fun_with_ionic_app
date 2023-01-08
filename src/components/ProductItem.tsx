import React from "react";
import { IonItem, IonAvatar, IonLabel } from "@ionic/react";
import { Product } from "../models/product.model";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <IonItem>
      <IonAvatar slot="start">
        <img src={product.image} />
      </IonAvatar>
      <IonLabel>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <h4>{product.price}</h4>
        <p>{product.description}</p>

      </IonLabel>
    </IonItem>
  );
};
export default ProductItem;
