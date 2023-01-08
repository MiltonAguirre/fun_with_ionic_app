import React from "react";
import { Person } from "../models/person.model";
import { IonItem, IonLabel } from "@ionic/react";

const UserItem: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <IonItem>
      <IonLabel>
        <h2>{person.name.firstname}</h2>
        <p>{person.email}</p>
      </IonLabel>
    </IonItem>
  );
};
export default UserItem;
