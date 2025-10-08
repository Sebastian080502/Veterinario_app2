import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  useIonRouter
} from "@ionic/react";
import './headContainer.css';
import backI from '../assets/arrow-back-outline.svg';

interface ContainerProp {
  name: string;
  route?: string;
}

const HeadLayout: React.FC<ContainerProp> = ({ name, route }) => {
  const router = useIonRouter();

  const handleNavigate = () => {
    if (route) {
      router.push(route, 'back', 'pop');
    } else {
      router.goBack();
    }
  };

  return (
    <IonHeader translucent={true}>
      <IonToolbar className="custom-header">
        <IonButtons slot="start">
          <IonButton fill="clear" onClick={handleNavigate}>
            <IonIcon icon={backI} slot="icon-only" />
          </IonButton>
        </IonButtons>
        <IonTitle className="header-title">{name}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default HeadLayout;
