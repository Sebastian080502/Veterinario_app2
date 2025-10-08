import React from "react";
import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonText,
  IonCard,
  IonCardContent,
  IonIcon,
  IonList,
} from "@ionic/react";
import { cloudUploadOutline } from "ionicons/icons";
import HeadLayout from "../components/headLayout";
import "./crearUser.css";

const CrearUser: React.FC = () => {

  return (
    <IonPage>
      <HeadLayout name="Crear Usuario" route="/tab1" />
      <IonContent className="ion-padding" scrollY={true}>

        <IonList lines="full" className="ion-no-padding">

          <IonItem>
            <IonLabel position="stacked">Nombre Completo</IonLabel>
            <IonInput type="text" placeholder="Ingrese el nombre completo" readonly />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Correo Electrónico</IonLabel>
            <IonInput type="email" placeholder="Ingrese el correo electrónico" readonly />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Rol</IonLabel>
            <IonSelect
              placeholder="Seleccione el rol"
              interface="popover"
              disabled={true}
            >
              <IonSelectOption value="administrador">Administrador</IonSelectOption>
              <IonSelectOption value="editor">Editor</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Contraseña</IonLabel>
            <IonInput
              type="password"
              placeholder="Ingrese la contraseña"
              readonly={true}
            />
          </IonItem>
        </IonList>


        <IonItem lines="none" className="ion-margin-top">
          <IonLabel position="stacked">Estado</IonLabel> {/* La etiqueta del título */}
        </IonItem>

        <IonItem lines="none" className="ion-margin-bottom">
          <IonRadioGroup
            value="Activo"
          >
            <IonRadio
              value="Activo"
              labelPlacement="end"
              className="ion-margin-end"
              disabled={true}
            >
              Activo
            </IonRadio>
            <IonRadio
              value="Inactivo"
              labelPlacement="end"
              disabled={true}
            >
              Inactivo
            </IonRadio>
          </IonRadioGroup>
        </IonItem>


        <IonCard className="ion-margin-top foto-card">
          <IonCardContent className="ion-text-center">
            <IonLabel className="ion-padding-bottom">Foto</IonLabel>
            <div className="file-drop-area">
              <IonIcon
                icon={cloudUploadOutline}
                size="large"
                color="success"
              />
              <IonText color="success" className="ion-padding-top">
                Arrastra o selecciona un archivo
              </IonText>
              <IonText color="medium" className="ion-text-sm">
                <p>PNG, JPG, GIF hasta 10MB</p>
              </IonText>
            </div>
          </IonCardContent>
        </IonCard>



        <IonButton
          expand="full"
          type="button"
          disabled={true}
        >
          Crear Usuario
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CrearUser;