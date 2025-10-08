import { IonIcon, IonText } from '@ionic/react';
import { alertCircleOutline } from 'ionicons/icons';

export default function EmptyState({
  title = 'Sin datos',
  message = 'No encontramos resultados.',
  icon = alertCircleOutline,
}: {
  title?: string; message?: string; icon?: string
}) {
  return (
    <div className="empty" style={{ padding: 48, textAlign: 'center' }}>
      <IonIcon icon={icon} style={{ fontSize: 48 }} />
      <h3 style={{ marginTop: 12 }}>{title}</h3>
      <IonText className="muted">{message}</IonText>
    </div>
  );
}
