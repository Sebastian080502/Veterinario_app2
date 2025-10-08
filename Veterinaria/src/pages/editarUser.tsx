import React, { useState } from "react";
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
  IonIcon,
  IonList,
  IonAvatar,
} from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";
import HeadLayout from "../components/headLayout";
import "./editarUser.css";

const CrearUser: React.FC = () => {
  const [estado, setEstado] = useState("Activo");
  const [rol, setRol] = useState("Administrador");

  return (
    <IonPage>
      <HeadLayout name="Editar Usuario" route="/tab1" />
      <IonContent className="ion-padding" scrollY={true}>
        <div className="avatar-container">
          <IonAvatar className="user-avatar">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Foto del usuario"
            />
          </IonAvatar>
          <div className="edit-icon">
            <IonIcon icon={checkmarkCircle} color="success" />
          </div>
        </div>

        <IonList lines="none">
          <IonItem>
            <IonLabel position="stacked">Nombre completo</IonLabel>
            <IonInput value="Carlos Mendoza" placeholder="Ingrese el nombre" />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Correo electrónico</IonLabel>
            <IonInput
              type="email"
              value="carlos.mendoza@example.com"
              placeholder="Ingrese el correo"
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Rol</IonLabel>
            <IonSelect
              value={rol}
              onIonChange={(e) => setRol(e.detail.value)}
              interface="popover"
            >
              <IonSelectOption value="Administrador">Administrador</IonSelectOption>
              <IonSelectOption value="Editor">Editor</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem lines="none" className="ion-margin-top">
            <IonLabel position="stacked">Estado</IonLabel>
          </IonItem>

          <IonRadioGroup
            value={estado}
            onIonChange={(e) => setEstado(e.detail.value)}
          >
            <div className="estado-group">
              <IonItem lines="none">
                <IonRadio value="Activo" labelPlacement="end">
                  Activo
                </IonRadio>
              </IonItem>
              <IonItem lines="none">
                <IonRadio value="Inactivo" labelPlacement="end">
                  Inactivo
                </IonRadio>
              </IonItem>
            </div>
          </IonRadioGroup>

          <IonButton fill="clear" expand="block" className="change-password-btn">
            Cambiar contraseña
          </IonButton>

          <IonButton expand="block" className="save-btn" fill="clear">
            Guardar Cambios
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CrearUser;