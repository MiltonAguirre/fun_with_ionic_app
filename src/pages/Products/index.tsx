import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  IonList,
} from "@ionic/react";
import "./Products.css";

import { Product } from "../../models/product.model";
import ProductItem from "../../components/ProductItem";
const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useIonViewDidEnter(async () => {
    try {
      fetch("https://fakestoreapi.com/products?limit=5")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {products.map((product, idx) => (
            <ProductItem key={idx} product={product} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Products;
