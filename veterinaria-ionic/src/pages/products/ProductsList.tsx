import Page from '../../ui/Page';
import { IonButtons, IonButton, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useEffect, useMemo, useState } from 'react';
import { productsRepo, categoriesRepo } from '../../data/repos';
import type { Product, ProductCategory } from '../../types';
import { useNavigate } from 'react-router-dom';

export default function ProductsList(){
  const nav = useNavigate();
  const [data, setData] = useState<Product[]>([]);
  const [cats, setCats] = useState<ProductCategory[]>([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    setData(productsRepo.list());
    setCats(categoriesRepo.list());
  }, []);

  const labelCat = (id?: string) => cats.find(c => c.id === id)?.name ?? '—';

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return !t ? data : data.filter(p =>
      (p.name + (p.description ?? '') + labelCat(p.categoryId)).toLowerCase().includes(t)
    );
  }, [q, data, cats]);

  return (
    <Page
      title="Productos"
      actions={
        <IonButtons>
          <IonButton onClick={()=>nav('/products/new')}>Nuevo</IonButton>
        </IonButtons>
      }
    >
      {/* aquí tu SearchInput si lo tienes */}
      <IonGrid fixed>
        <IonRow>
          {filtered.map(p => (
            <IonCol key={p.id} size="12" sizeSm="6" sizeMd="4">
              <IonCard className="card" button onClick={()=>nav(`/products/${p.id}`)}>
                <IonCardHeader>
                  <IonCardSubtitle className="muted">
                    ${p.price} · stock {p.stock} · {labelCat(p.categoryId)}
                  </IonCardSubtitle>
                  <IonCardTitle>{p.name}</IonCardTitle>
                </IonCardHeader>
              </IonCard>
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton onClick={()=>nav('/products/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
}
