import {
  IonHeader, IonPage, IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonBadge,
  IonIcon,
  IonSearchbar,
  IonContent,
  IonButton
} from '@ionic/react';
import HeadContainer from '../components/headContainer';
import { chevronForwardOutline } from "ionicons/icons";
import './Tab1.css';

interface User {
  name: string;
  role: string;
  status: "Activo" | "Inactivo";
  image: string;
}

const users: User[] = [
  {
    name: "Carlos Mendoza",
    role: "Administrador",
    status: "Activo",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Sofía Ramírez",
    role: "Veterinario",
    status: "Activo",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Diego Vargas",
    role: "Asistente",
    status: "Inactivo",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Isabel Torres",
    role: "Asistente",
    status: "Activo",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <HeadContainer name="Usuarios" route="/crear-user" />
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar placeholder="Buscar usuario..." />
        <IonList>
          {users.map((user, index) => (
            <IonItem key={index} lines="none">
              <IonButton fill="clear" routerLink='/detalles-user'>
                <IonAvatar slot="start">
                  <img src={user.image} alt={user.name} />
                </IonAvatar>
              </IonButton>


              <IonLabel>
                <h2>{user.name}</h2>
                <p>{user.role}</p>
              </IonLabel>

              <IonBadge
                color={user.status === "Activo" ? "success" : "medium"}
                slot="end"
              >
                {user.status}
              </IonBadge>
              <IonButton fill="clear" routerLink='/editar-user' >
                <IonIcon icon={chevronForwardOutline} slot="end" />
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

    </IonPage>

  );
};

export default Tab1;
