
import type { ReactNode } from 'react';
import {
  IonButtons, IonContent, IonHeader, IonMenuButton,
  IonPage, IonTitle, IonToolbar
} from '@ionic/react';

export default function Page({
  title, actions, children
}: { title: string; actions?: ReactNode; children: ReactNode }) {
  return (

    <IonPage id="main">
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            {}
            <IonMenuButton autoHide={false} color="dark" />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
          {actions && <IonButtons slot="end">{actions}</IonButtons>}
        </IonToolbar>
      </IonHeader>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="container">{children}</div>
      </IonContent>
    </IonPage>
  );
}
