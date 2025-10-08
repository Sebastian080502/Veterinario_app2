
import {
  IonMenu, IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonIcon, IonLabel, IonMenuToggle
} from '@ionic/react';
import { albumsOutline, cubeOutline, pricetagsOutline } from 'ionicons/icons';

export default function AppMenu() {
  return (
    <IonMenu contentId="main" side="start" swipeGesture={true}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Veterinaria</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList inset>
          {}
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/types" detail={false} button>
              <IonIcon icon={albumsOutline} slot="start" />
              <IonLabel>Tipos</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/products" detail={false} button>
              <IonIcon icon={cubeOutline} slot="start" />
              <IonLabel>Productos</IonLabel>
            </IonItem>
          </IonMenuToggle>

          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/categories" detail={false} button>
              <IonIcon icon={pricetagsOutline} slot="start" />
              <IonLabel>Categorías</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
