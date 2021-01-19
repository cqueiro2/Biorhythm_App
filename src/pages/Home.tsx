import {
 IonContent,
  IonDatetime,
  IonHeader, 
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import BiorhythmCard from "../components/BiorhythmCard";
import {useLocalStorage} from '../hooks';

import "./Home.css";

const Home: React.FC = () => {
  
   const [birthDate, setBirthDate] = useLocalStorage('birthDate','')
   const [targetDate, setTargetDate] = useState(new Date().toISOString());
 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate &&
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position="stacked">Date of Birth</IonLabel>
          <IonDatetime 
           displayFormat="D-MMM-YYYY"
           value={birthDate}
           onIonChange={event => setBirthDate(event.detail.value!)}
           />          
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date</IonLabel>
          <IonDatetime 
           displayFormat="D-MMM-YYYY"
           value={targetDate}
           onIonChange={event => setTargetDate(event.detail.value!)}
           />          
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;