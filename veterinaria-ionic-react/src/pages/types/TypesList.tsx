import Page from '../../ui/Page';
import EmptyState from '../../components/EmptyState';
import SearchInput from '../../components/SearchInput';
import {
  IonButton, IonButtons, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { useEffect, useMemo, useState } from 'react';
import { petTypesRepo } from '../../data/repos';
import type { PetType } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function TypesList(){
  const nav = useNavigate();
  const [data, setData] = useState<PetType[]>([]);
  const [q, setQ] = useState('');

  const refresh = () => setData(petTypesRepo.list());
  useEffect(refresh, []);

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return !t ? data : data.filter(x => (x.name + (x.description ?? '')).toLowerCase().includes(t));
  }, [q, data]);

  return (
    <Page
      title="Tipos de mascotas"
      actions={<IonButtons><IonButton onClick={()=>nav('/types/new')}>Nuevo</IonButton></IonButtons>}
    >
      <SearchInput value={q} onChange={setQ} placeholder="Buscar tipo..." />

      <IonGrid fixed>
        <IonRow>
          {filtered.map(t => (
            <IonCol size="12" sizeSm="6" sizeMd="4" sizeLg="3" key={t.id}>
              <IonCard className="card" button onClick={()=>nav(`/types/${t.id}/edit`)}>
                <IonCardHeader>
                  <IonCardTitle>{t.icon ?? '🐾'} {t.name}</IonCardTitle>
                  {t.description && <IonCardSubtitle className="muted">{t.description}</IonCardSubtitle>}
                </IonCardHeader>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      {filtered.length === 0 && (
        <EmptyState title="Sin tipos" message="Crea el primer tipo de mascota." />
      )}

      {/* Botón flotante para crear rápidamente */}
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton color="primary" onClick={()=>nav('/types/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
}
