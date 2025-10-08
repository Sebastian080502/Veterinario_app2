import { useState } from 'react';
import {
  IonButton, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption,
  IonRadioGroup, IonRadio, IonTextarea
} from '@ionic/react';

type Option = { label: string; value: string | number; };

export type Field =
  | { type: 'text' | 'email' | 'number'; name: string; label: string; required?: boolean; }
  | { type: 'select'; name: string; label: string; options: Option[]; required?: boolean; }
  | { type: 'radio'; name: string; label: string; options: Option[]; required?: boolean; }
  | { type: 'textarea'; name: string; label: string; required?: boolean; };

export default function SimpleForm<T extends Record<string, any>>({
  initial, fields, onSubmit, submitLabel = 'Guardar'
}: {
  initial: T, fields: Field[], onSubmit: (values: T) => void, submitLabel?: string
}) {
  const [values, setValues] = useState<T>(initial);
  const set = (name: string, v: any) => setValues(prev => ({ ...prev, [name]: v }));

  const valid = () => fields.every(f => !('required' in f) || !f.required || (values as any)[f.name]);

  return (
    <>
      <IonList lines="full">
        {fields.map((f, idx) => {
          if (f.type === 'select') {
            return (
              <IonItem key={idx}>
                <IonLabel>{f.label}{f.required ? ' *' : ''}</IonLabel>
                <IonSelect value={(values as any)[f.name]} onIonChange={e=>set(f.name, e.detail.value)}>
                  {f.options.map(o => <IonSelectOption key={String(o.value)} value={o.value}>{o.label}</IonSelectOption>)}
                </IonSelect>
              </IonItem>
            );
          }
          if (f.type === 'radio') {
            return (
              <IonItem key={idx}>
                <IonLabel>{f.label}{f.required ? ' *' : ''}</IonLabel>
                <IonRadioGroup value={(values as any)[f.name]} onIonChange={e=>set(f.name, e.detail.value)}>
                  {f.options.map(o => (
                    <IonItem key={String(o.value)} lines="none">
                      <IonLabel>{o.label}</IonLabel><IonRadio value={o.value} />
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonItem>
            );
          }
          if (f.type === 'textarea') {
            return (
              <IonItem key={idx}>
                <IonLabel position="stacked">{f.label}{f.required ? ' *' : ''}</IonLabel>
                <IonTextarea value={(values as any)[f.name]} onIonInput={e=>set(f.name, (e.detail.value ?? ''))} />
              </IonItem>
            );
          }
        
          return (
            <IonItem key={idx}>
              <IonLabel position="stacked">{f.label}{f.required ? ' *' : ''}</IonLabel>
              <IonInput
                type={f.type === 'number' ? 'number' : f.type}
                value={(values as any)[f.name] ?? ''}
                onIonInput={e=>set(f.name, e.detail.value)}
              />
            </IonItem>
          );
        })}
      </IonList>

      <div style={{ padding: 16 }}>
        <IonButton expand="block" disabled={!valid()} onClick={() => onSubmit(values)}>{submitLabel}</IonButton>
      </div>
    </>
  );
}
