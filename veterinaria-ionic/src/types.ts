export type ID = string;

export type Role = 'Administrador' | 'Veterinario' | 'Asistente';
export type Sex = 'M' | 'F';
export type Species = 'Perro' | 'Gato' | 'Ave' | 'Reptil' | 'Otro';

export interface User {
  id: ID;
  fullName: string;
  email: string;
  phone?: string;
  role: Role;
  active: boolean;
}

export interface Pet {
  id: ID;
  name: string;
  species: Species | string;
  breed?: string;
  age?: number;
  sex?: Sex;
  ownerId?: ID;
  healthStatus?: string;
  registeredAt: string; // ISO date
}

export interface ProductCategory {
  id: ID;
  name: string;
  description?: string;
  icon?: string; // emoji o url
}

export interface Product {
  id: ID;
  name: string;
  categoryId?: ID;
  description?: string;
  price: number;
  stock: number;
  image?: string; // url/base64
}

export interface PetType {
  id: ID;
  name: string;
  description?: string;
  icon?: string; // emoji o url
}
