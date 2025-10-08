import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { listOutline, ellipsisVertical } from "ionicons/icons";
import './Tab2.css';
import HeadContainer from '../components/headContainer';

const Tab2: React.FC = () => {
  const pets = [
    {
      nombre: "Max",
      tipo: "Perro",
      raza: "Golden Retriever",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83RIkgsMb89d8qrUW_PJAnJonAFsXkSEGNw&s",
    },
    {
      nombre: "Misty",
      tipo: "Gato",
      raza: "Siamese",
      img: "https://cdn2.thecatapi.com/images/ai6Jps4sx.jpg",
    },
    {
      nombre: "Nemo",
      tipo: "Pez",
      raza: "Payaso",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReG8G3XQie_osoVseTC2wnn4XoHy0QseCtFA&s",
    },
  ];
  return (
    <IonPage>
      <IonHeader>
        <HeadContainer name="Mis Mascotas" route="/crear-pet" />
        <IonButton color="success" className="tipos-btn" fill='clear'>
          <IonIcon slot="start" icon={listOutline} />
          Tipos
        </IonButton>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={true}>

        {pets.map((pet, index) => (
          <IonCard key={index} className="pet-card">
            <IonCardContent className="pet-content">
              <IonButton className='pet-image' routerLink='/detalles-pet' fill='clear'>
                <img src={pet.img} alt={pet.nombre} />
              </IonButton>
              <div className="pet-info">
                <p className="pet-name">{pet.nombre}</p>
                <p className="pet-type">{pet.tipo}</p>
                <p className="pet-breed">{pet.raza}</p>
              </div>
              <IonButton fill="clear" className="pet-options" routerLink='/editar-pet'>
                <IonIcon icon={ellipsisVertical} />
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>

    </IonPage>
  );
};

export default Tab2;
