import Page from '../../ui/Page';
import { IonButtons, IonButton, IonList, IonItem, IonLabel,
  IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useEffect, useMemo, useState } from 'react';
import { categoriesRepo } from '../../data/repos';
import type { ProductCategory } from '../../types';
import { useNavigate } from 'react-router-dom';
import EmptyState from '../../components/EmptyState';

export default function CategoriesList(){
  const nav = useNavigate();
  const [data, setData] = useState<ProductCategory[]>([]);
  const [q, setQ] = useState('');

  useEffect(() => setData(categoriesRepo.list()), []);
  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return !t ? data : data.filter(c => (c.name + (c.description ?? '')).toLowerCase().includes(t));
  }, [q, data]);

  return (
    <Page
      title="Categorías"
      actions={
        <IonButtons>
          <IonButton onClick={()=>nav('/categories/new')}>Nueva</IonButton>
        </IonButtons>
      }
    >
      {/* SearchInput si lo quieres aquí */}
      <IonList inset>
        {filtered.map(c => (
          <IonItem key={c.id} button onClick={()=>nav(`/categories/${c.id}/edit`)}>
            <IonLabel>
              <h2>{c.icon ?? '🏷️'} {c.name}</h2>
              <p>{c.description ?? '—'}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>

      {filtered.length === 0 && (
        <EmptyState title="Sin categorías" message="Crea la primera categoría." />
      )}

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton onClick={()=>nav('/categories/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
}
