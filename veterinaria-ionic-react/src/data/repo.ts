import { v4 as uuid } from 'uuid';

export type WithId = { id: string };

function readList<T>(key: string): T[] {
  const raw = localStorage.getItem(key);
  return raw ? (JSON.parse(raw) as T[]) : [];
}
function writeList<T>(key: string, list: T[]) {
  localStorage.setItem(key, JSON.stringify(list));
}

export type Repo<T extends WithId> = {
  list: () => T[];
  get: (id: string) => T | undefined;
  create: (data: Omit<T, 'id'>) => T;
  update: (id: string, patch: Partial<T>) => void;
  remove: (id: string) => void;
};

export function createRepo<T extends WithId>(key: string, seed?: Omit<T, 'id'>[]): Repo<T> {
  // semilla 1 vez
  if (!localStorage.getItem(key) && seed?.length) {
    const seeded = seed.map(s => ({ ...s, id: uuid() })) as T[];
    writeList(key, seeded);
  }

  return {
    list: () => readList<T>(key),
    get: (id: string) => readList<T>(key).find(x => x.id === id),
    create: (data: Omit<T, 'id'>) => {
      const list = readList<T>(key);
      const created = { ...data, id: uuid() } as T;
      writeList(key, [created, ...list]);
      return created;
    },
    update: (id: string, patch: Partial<T>) => {
      const list = readList<T>(key).map(x => (x.id === id ? { ...x, ...patch } : x));
      writeList(key, list);
    },
    remove: (id: string) => {
      const list = readList<T>(key).filter(x => x.id !== id);
      writeList(key, list);
    },
  };
}
