import Page from '../../ui/Page';
import SimpleForm, { type Field } from '../../ui/SimpleForm';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { petTypesRepo } from '../../data/repos';
import { useIonToast } from '@ionic/react';

export default function TypeForm(){
  const { id } = useParams();
  const editing = Boolean(id);
  const nav = useNavigate();
  const [toast] = useIonToast();
  const existing = useMemo(()=> id ? petTypesRepo.get(id) : undefined, [id]);

  if (editing && !existing) {
    toast({ message: 'Tipo no encontrado', duration: 1500, color: 'danger' });
    nav('/types', { replace: true });
    return null;
  }

  const fields: Field[] = [
    { type: 'text', name: 'name', label: 'Nombre', required: true },
    { type: 'text', name: 'icon', label: 'Ícono (emoji)' },
    { type: 'textarea', name: 'description', label: 'Descripción' },
  ];

  const initial = {
    name: existing?.name ?? '',
    icon: existing?.icon ?? '🐾',
    description: existing?.description ?? '',
  };

  const save = (values: typeof initial) => {
    if(editing && id){
      petTypesRepo.update(id, values);
      toast({ message: 'Tipo actualizado', duration: 1200, color: 'success' });
    } else {
      petTypesRepo.create(values as any);
      toast({ message: 'Tipo creado', duration: 1200, color: 'success' });
    }
    nav('/types', { replace: true });
  };

  const del = () => {
    if(editing && id){
      petTypesRepo.remove(id);
      toast({ message: 'Tipo eliminado', duration: 1200, color: 'medium' });
      nav('/types', { replace: true });
    }
  };

  return (
    <Page title={editing ? 'Editar tipo' : 'Nuevo tipo'}>
      <SimpleForm initial={initial} fields={fields} onSubmit={save} submitLabel="Guardar" />
      {editing && (
        <div style={{ padding: 16 }}>
          <button className="ion-color-danger" onClick={del} style={{ padding: 10 }}>Eliminar</button>
        </div>
      )}
    </Page>
  );
}
