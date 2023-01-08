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

import UserItem from "../../components/UserItem";
import { Person } from "../../models/person.model";
const Users: React.FC = () => {
  const [users, setUsers] = useState<Person[]>([]);

  useIonViewDidEnter(async () => {
    try {
      fetch("https://fakestoreapi.com/users?limit=5")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUsers(data);
        });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Users</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {users.map((user, idx) => (
            <UserItem key={idx} person={user} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Users;
