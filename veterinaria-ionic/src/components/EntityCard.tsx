import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import type { ReactNode } from 'react';

export default function EntityCard({
  title, subtitle, children, onClick
}: {
  title: string; subtitle?: string; children?: ReactNode; onClick?: () => void
}) {
  return (
    <IonCard button={!!onClick} onClick={onClick}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        {subtitle && <IonCardSubtitle>{subtitle}</IonCardSubtitle>}
      </IonCardHeader>
      {children && <IonCardContent>{children}</IonCardContent>}
    </IonCard>
  );
}
