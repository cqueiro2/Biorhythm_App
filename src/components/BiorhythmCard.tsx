import React from  'react';
import dayjs from 'dayjs';

import {
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardTitle
   } from '@ionic/react'
 import {calculateBiorhythms} from '../calculations';

function formatDate(isoString: any) {
  return dayjs(isoString).format('D-MMM-YYYY');
}

 function BiorhythmCard({ birthDate, targetDate }: any) {
  //const targetDate = new Date().toISOString() 

  const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);

  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
        <p>Physical: {physical.toFixed(4)}</p>
        <p>Emotional: {emotional.toFixed(4)}</p>
        <p>Physical: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );

}


export default BiorhythmCard