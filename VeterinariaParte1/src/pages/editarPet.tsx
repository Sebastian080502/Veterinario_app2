import React, { useState } from "react";
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
  IonGrid,
  IonRow,
  IonCol,
  IonDatetime,
} from "@ionic/react";
import HeadLayout from "../components/headLayout";
import "./editarUser.css";

const CrearUser: React.FC = () => {
  const [nombre, setNombre] = useState("Max");
  const [especie, setEspecie] = useState("Perro");
  const [raza, setRaza] = useState("Golden Retriever");
  const [fechaNacimiento] = useState("2020-05-15");
  const [sexo, setSexo] = useState("Macho");
  const [color, setColor] = useState("Dorado");
  const [propietario, setPropietario] = useState("Carlos Mendoza");
  const [notas, setNotas] = useState("Vacunas al día. Alergia al polen.");

  return (
    <IonPage>
      <HeadLayout name="Editar Mascota" route="/tab2" />
      <IonContent className="ion-padding form-content">

        <IonItem>
          <IonLabel position="stacked">Nombre de la mascota</IonLabel>
          <IonInput
            value={nombre}
            onIonChange={(e) => setNombre(e.detail.value!)}
          />
        </IonItem>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Especie</IonLabel>
                <IonSelect
                  value={especie}
                  onIonChange={(e) => setEspecie(e.detail.value!)}
                >
                  <IonSelectOption value="Perro">Perro</IonSelectOption>
                  <IonSelectOption value="Gato">Gato</IonSelectOption>
                  <IonSelectOption value="Pez">Pez</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Raza</IonLabel>
                <IonSelect
                  value={raza}
                  onIonChange={(e) => setRaza(e.detail.value!)}
                >
                  <IonSelectOption value="Golden Retriever">Golden Retriever</IonSelectOption>
                  <IonSelectOption value="Siames">Siames</IonSelectOption>
                  <IonSelectOption value="Payaso">Payaso</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Fecha de nacimiento</IonLabel>
                <IonDatetime
                  presentation="date"
                  value={fechaNacimiento}
                  display-format="MM/DD/YYYY"
                />
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="stacked">Sexo</IonLabel>
                <IonSelect
                  value={sexo}
                  onIonChange={(e) => setSexo(e.detail.value!)}
                >
                  <IonSelectOption value="Macho">Macho</IonSelectOption>
                  <IonSelectOption value="Hembra">Hembra</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonItem>
          <IonLabel position="stacked">Color</IonLabel>
          <IonInput
            value={color}
            onIonChange={(e) => setColor(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Propietario</IonLabel>
          <IonInput
            value={propietario}
            onIonChange={(e) => setPropietario(e.detail.value!)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Notas médicas</IonLabel>
          <IonTextarea
            value={notas}
            onIonChange={(e) => setNotas(e.detail.value!)}
          />
        </IonItem>

        <IonButton expand="block" className="guardar-btn" >
          Guardar cambios
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default CrearUser;