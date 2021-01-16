import {
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import "./Home.css";

const Home: React.FC = () => {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState<string>('')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput value={name} 
          onIonChange={(event: any) => setName(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of Birth</IonLabel>
          <IonDatetime 
          displayFormat="D-MMM-YYYY"
          value={birthDate}
           onIonChange={event => setBirthDate(event.detail.value!)}
          />
        </IonItem>
        <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;