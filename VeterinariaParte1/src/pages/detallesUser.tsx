import React from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonIcon,
  IonAvatar,
  IonChip,
  IonLabel,
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import HeadLayout from "../components/headLayout";
import "./detallesUser.css";

const CrearUser: React.FC = () => {
const handleEditar = () => {
    window.location.href = "/editar-user";
  };

  return (
    <IonPage>
        <HeadLayout name="Detalles Usuario" route="/tab1" />
       <IonContent className="ion-padding" scrollY={true}>
        <div className="user-header">
          <IonAvatar className="user-avatar">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Usuario"
            />
          </IonAvatar>

          <IonLabel className="user-name">Carlos Mendoza</IonLabel>
          <IonText color="medium" className="user-email">
            carlos.mendoza@example.com
          </IonText>

          <div className="chips-container">
            <IonChip color="primary" className="chip">
              Administrador
            </IonChip>
            <IonChip color="success" className="chip">
              Activo
            </IonChip>
          </div>
        </div>

        <IonCard className="info-card">
          <IonCardContent>
            <IonLabel className="section-title">
              Información del Usuario
            </IonLabel>

            <div className="info-item">
              <IonText color="medium">Nombre Completo</IonText>
              <IonText>Carlos Mendoza</IonText>
            </div>

            <div className="info-item">
              <IonText color="medium">Correo Electrónico</IonText>
              <IonText>carlos.mendoza@example.com</IonText>
            </div>

            <div className="info-item">
              <IonText color="medium">Rol</IonText>
              <IonText>Administrador</IonText>
            </div>

            <div className="info-item">
              <IonText color="medium">Estado</IonText>
              <IonText color="success">Activo</IonText>
            </div>

            <div className="info-item">
              <IonText color="medium">Fecha de Creación</IonText>
              <IonText>15 de enero de 2023</IonText>
            </div>

            <div className="info-item">
              <IonText color="medium">Última Modificación</IonText>
              <IonText>20 de mayo de 2024</IonText>
            </div>
          </IonCardContent>
          
        </IonCard>

        <IonButton
          expand="block"
          color="success"
          fill="clear"
          className="edit-btn"
          onClick={handleEditar}
        >
          <IonIcon icon={createOutline} slot="start" />
          Editar
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CrearUser;