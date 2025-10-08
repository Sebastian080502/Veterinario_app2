import React from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonTextarea,
  IonRow,
  IonGrid,
  IonCol,
  IonModal,
  IonDatetime,
  IonDatetimeButton,
} from "@ionic/react";
import HeadLayout from "../components/headLayout";
import "./crearPet.css";

const CrearUser: React.FC = () => {

  return (
    <IonPage>
      <HeadLayout name="Nueva Mascota" route="/tab2" />
      <IonContent className="ion-padding form-content">
        <IonItem>
          <IonLabel position="stacked">Nombre de la mascota</IonLabel>
          <IonInput placeholder="Nombre"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Especie</IonLabel>
          <IonSelect placeholder="Seleccionar">
            <IonSelectOption value="perro">Perro</IonSelectOption>
            <IonSelectOption value="gato">Gato</IonSelectOption>
            <IonSelectOption value="pez">Pez</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Raza</IonLabel>
          <IonSelect placeholder="Seleccionar">
            <IonSelectOption value="golden">Golden Retriever</IonSelectOption>
            <IonSelectOption value="siamese">Siamese</IonSelectOption>
            <IonSelectOption value="payaso">Payaso</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Fecha de nacimiento</IonLabel>
          <IonDatetimeButton datetime="fechaMascota"></IonDatetimeButton>
          <IonModal keepContentsMounted={true}>
            <IonDatetime id="fechaMascota" presentation="date"></IonDatetime>
          </IonModal>
        </IonItem>

        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Sexo</IonLabel>
                <IonSelect placeholder="Seleccionar">
                  <IonSelectOption value="macho">Macho</IonSelectOption>
                  <IonSelectOption value="hembra">Hembra</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>

            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Color</IonLabel>
                <IonSelect placeholder="Seleccionar">
                  <IonSelectOption value="blanco">Blanco</IonSelectOption>
                  <IonSelectOption value="negro">Negro</IonSelectOption>
                  <IonSelectOption value="marron">Marrón</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonItem>
          <IonLabel position="stacked">Propietario</IonLabel>
          <IonSelect placeholder="Seleccionar">
            <IonSelectOption value="1">Carlos Mendoza</IonSelectOption>
            <IonSelectOption value="2">Ana Torres</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">
            Notas médicas iniciales (opcional)
          </IonLabel>
          <IonTextarea placeholder="Escribe aquí..."></IonTextarea>
        </IonItem>

        <IonButton expand="block" shape="round" className="guardar-btn">
          Guardar Mascota
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CrearUser;