import Page from '../../ui/Page';
import SimpleForm, { type Field } from '../../ui/SimpleForm';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesRepo, productsRepo } from '../../data/repos';
import { useIonToast } from '@ionic/react';

export default function ProductForm(){
  const { id } = useParams();
  const editing = Boolean(id);
  const nav = useNavigate();
  const [toast] = useIonToast();

  const existing = useMemo(()=> id ? productsRepo.get(id) : undefined, [id]);
  if (editing && !existing) {
    toast({ message: 'Producto no encontrado', duration: 1500, color: 'danger' });
    nav('/products', { replace: true });
    return null;
  }

  const cats = categoriesRepo.list();
  const fields: Field[] = [
    { type: 'text', name: 'name', label: 'Nombre', required: true },
    { type: 'textarea', name: 'description', label: 'Descripción' },
    { type: 'number', name: 'price', label: 'Precio', required: true },
    { type: 'number', name: 'stock', label: 'Stock', required: true },
    {
      type: 'select', name: 'categoryId', label: 'Categoría',
      options: [{label:'—', value:''}, ...cats.map((c: { icon?: string; name: string; id: string }) => ({ label: `${c.icon ?? '🏷️'} ${c.name}`, value: c.id }))]
    },
  ];

  const initial = {
    name: existing?.name ?? '',
    description: existing?.description ?? '',
    price: existing?.price ?? 0,
    stock: existing?.stock ?? 0,
    categoryId: existing?.categoryId ?? (cats[0]?.id ?? ''),
  };

  const save = (values: typeof initial) => {
    const payload = { ...values, price: Number(values.price), stock: Number(values.stock) };
    if (payload.price < 0 || payload.stock < 0) {
      toast({ message: 'Precio/stock no pueden ser negativos', duration: 1500, color: 'warning' });
      return;
    }

    if(editing && id){
      productsRepo.update(id, payload);
      toast({ message: 'Producto actualizado', duration: 1200, color: 'success' });
    } else {
      productsRepo.create(payload as any);
      toast({ message: 'Producto creado', duration: 1200, color: 'success' });
    }
    nav('/products', { replace: true });
  };

  const del = () => {
    if(editing && id){
      productsRepo.remove(id);
      toast({ message: 'Producto eliminado', duration: 1200, color: 'medium' });
      nav('/products', { replace: true });
    }
  };

  return (
    <Page title={editing ? 'Editar producto' : 'Nuevo producto'}>
      <SimpleForm initial={initial} fields={fields} onSubmit={save} submitLabel="Guardar" />
      {editing && (
        <div style={{ padding: 16 }}>
          <button className="ion-color-danger" onClick={del} style={{ padding: 10 }}>Eliminar</button>
        </div>
      )}
    </Page>
  );
}
