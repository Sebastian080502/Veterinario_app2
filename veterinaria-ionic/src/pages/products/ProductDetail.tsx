import Page from '../../ui/Page';
import DetailList from '../../ui/DetailList';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesRepo, productsRepo } from '../../data/repos';
import { IonButton, IonButtons } from '@ionic/react';

export default function ProductDetail(){
  const { id } = useParams();
  const nav = useNavigate();
  const product = useMemo(()=> id ? productsRepo.get(id) : undefined, [id]);
  const category = useMemo(()=> product?.categoryId ? categoriesRepo.get(product.categoryId) : undefined, [product?.categoryId]);

  if(!product){
    nav('/products', { replace: true });
    return null;
  }

  const actions = (
    <IonButtons>
      <IonButton onClick={()=>nav(`/products/${product.id}/edit`)}>Editar</IonButton>
      <IonButton color="danger" onClick={()=>{
        productsRepo.remove(product.id);
        nav('/products', { replace: true });
      }}>Eliminar</IonButton>
    </IonButtons>
  );

  return (
    <Page title="Detalle de producto" actions={actions}>
      <DetailList
        rows={[
          { label: 'Nombre', value: product.name },
          { label: 'Descripción', value: product.description ?? '—' },
          { label: 'Precio', value: `$${product.price}` },
          { label: 'Stock', value: String(product.stock) },
          { label: 'Categoría', value: category ? `${category.icon ?? '🏷️'} ${category.name}` : '—' },
        ]}
      />
    </Page>
  );
}
