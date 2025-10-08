
import { IonSearchbar } from '@ionic/react';
import { useEffect, useRef } from 'react';

export default function SearchInput({
  value, onChange, delay = 250, placeholder = 'Buscar...'
}: { value: string; onChange: (v: string) => void; delay?: number; placeholder?: string; }) {
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const handle = (v: string) => {
    if (t.current) clearTimeout(t.current);
    t.current = setTimeout(() => onChange(v), delay);
  };
  useEffect(() => () => { if (t.current) clearTimeout(t.current); }, []);
  return (
    <IonSearchbar
      animated
      placeholder={placeholder}
      value={value}
      onIonInput={e=>handle(e.detail.value ?? '')}
    />
  );
}
