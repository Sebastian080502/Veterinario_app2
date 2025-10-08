import React from "react";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonButton,
  IonCard,
  IonIcon,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import HeadLayout from "../components/headLayout";
import "./detallesPet.css";

const CrearUser: React.FC = () => {

  return (
    <IonPage>
      <HeadLayout name="Detalles de la mascota" route="/tab2" />
      <IonContent className="detalles-content">
        <div className="pet-header">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_1280.jpg"
            alt="Foto mascota"
            className="pet-photo"
          />
          <div className="pet-info">
            <h2>Max</h2>
            <p>Perro, Golden Retriever</p>
            <p className="birth-text">Nacido el 15 de marzo de 2020</p>
          </div>
          <IonButton
            color="success"
            className="edit-button"
            routerLink="/editar-pet"
            fill="clear"
          >
            <IonIcon slot="start" icon={createOutline} />
            Editar
          </IonButton>
        </div>

        <IonCard className="info-card">
          <IonLabel className="section-title">Información General</IonLabel>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <p className="label">Especie</p>
                <p>Canino</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Raza</p>
                <p>Golden Retriever</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Fecha de Nacimiento</p>
                <p>15 de marzo de 2020</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Sexo</p>
                <p>Macho</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Color</p>
                <p>Dorado</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Propietario</p>
                <p>Carlos Mendoza</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard className="info-card">
          <IonLabel className="section-title">Información Clínica</IonLabel>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <p className="label">Vacunas</p>
                <p>Al día</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Alergias</p>
                <p>Ninguna conocida</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Enfermedades</p>
                <p>Ninguna conocida</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Tratamientos</p>
                <p>Ninguno</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Citas Previas</p>
                <p>2 citas</p>
              </IonCol>
              <IonCol size="6">
                <p className="label">Notas del Veterinario</p>
                <p>Ninguna nota</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CrearUser;