import type { ReactNode } from 'react';
import { IonItem, IonLabel, IonList } from '@ionic/react';

export type DetailRow = {
  label: string;
  value: ReactNode;
  onClick?: () => void;
  href?: string;
};

export default function DetailList({ rows }: { rows: DetailRow[] }) {
  return (
    <IonList lines="full">
      {rows.map((r, i) => (
        <IonItem key={i} button={!!(r.onClick || r.href)} onClick={r.onClick} href={r.href}>
          <IonLabel>
            <h2>{r.label}</h2>
            <p>{r.value}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
}
