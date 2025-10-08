import {
  IonFooter, IonToolbar, IonButtons, IonButton, IonIcon, IonLabel
} from '@ionic/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { albumsOutline, cubeOutline, pricetagsOutline } from 'ionicons/icons';

const TABS = [
  { path: '/types', label: 'Tipos', icon: albumsOutline },
  { path: '/products', label: 'Productos', icon: cubeOutline },
  { path: '/categories', label: 'Categorías', icon: pricetagsOutline },
];

export default function BottomTabs() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <IonFooter className="app-tabs">
      <IonToolbar>
        <IonButtons slot="primary" style={{ width: '100%', justifyContent: 'space-around' }}>
          {TABS.map(t => {
            const active = pathname.startsWith(t.path);
            return (
              <IonButton
                key={t.path}
                onClick={() => nav(t.path)}
                fill={active ? 'solid' : 'clear'}
              >
                <IonIcon icon={t.icon} slot="start" />
                <IonLabel>{t.label}</IonLabel>
              </IonButton>
            );
          })}
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
}
