import React from 'react';
import {
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  useIonRouter
} from "@ionic/react";
import { addOutline } from 'ionicons/icons';
import iconoMa from '../assets/menu-outline.svg';



import './headContainer.css';

interface ContainerProps {
  name: string;
  route?: string;
}

const HeadContainer: React.FC<ContainerProps> = ({ name, route }) => {
  const router = useIonRouter();

  const handleNavigate = () => {
    if (route) {
      router.push(route, 'forward', 'push');
    }
  };
  return (
    <IonToolbar className="custom-header">

      <IonIcon icon={iconoMa} className='icono' />

      <IonTitle className="header-title">{name}</IonTitle>

      <IonButtons slot="end">
        <IonButton fill="solid" onClick={handleNavigate}>
          <IonIcon icon={addOutline} />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  );
};

export default HeadContainer;
