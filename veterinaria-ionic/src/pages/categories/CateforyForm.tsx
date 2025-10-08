import Page from '../../ui/Page';
import SimpleForm, { type Field } from '../../ui/SimpleForm';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { categoriesRepo } from '../../data/repos';
import { useIonToast } from '@ionic/react';

export default function CategoryForm(){
  const { id } = useParams();
  const editing = Boolean(id);
  const nav = useNavigate();
  const [toast] = useIonToast();

  const existing = useMemo(()=> id ? categoriesRepo.get(id) : undefined, [id]);
  if (editing && !existing) {
    toast({ message: 'Categoría no encontrada', duration: 1500, color: 'danger' });
    nav('/categories', { replace: true });
    return null;
  }

  const fields: Field[] = [
    { type: 'text', name: 'name', label: 'Nombre', required: true },
    { type: 'text', name: 'icon', label: 'Ícono (emoji)' },
    { type: 'textarea', name: 'description', label: 'Descripción' },
  ];

  const initial = {
    name: existing?.name ?? '',
    icon: existing?.icon ?? '🏷️',
    description: existing?.description ?? '',
  };

  const save = (values: typeof initial) => {
    if(editing && id){
      categoriesRepo.update(id, values);
      toast({ message: 'Categoría actualizada', duration: 1200, color: 'success' });
    } else {
      categoriesRepo.create(values as any);
      toast({ message: 'Categoría creada', duration: 1200, color: 'success' });
    }
    nav('/categories', { replace: true });
  };

  const del = () => {
    if(editing && id){
      categoriesRepo.remove(id);
      toast({ message: 'Categoría eliminada', duration: 1200, color: 'medium' });
      nav('/categories', { replace: true });
    }
  };

  return (
    <Page title={editing ? 'Editar categoría' : 'Nueva categoría'}>
      <SimpleForm initial={initial} fields={fields} onSubmit={save} submitLabel="Guardar" />
      {editing && (
        <div style={{ padding: 16 }}>
          <button className="ion-color-danger" onClick={del} style={{ padding: 10 }}>Eliminar</button>
        </div>
      )}
    </Page>
  );
}
