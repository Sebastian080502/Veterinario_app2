import { createRepo } from '../data/repo'
import type { User, Pet, Product, ProductCategory, PetType } from '../types';


export const usersRepo = createRepo<User>('users', [
  { fullName: 'Admin Demo', email: 'admin@demo.com', phone: '3000000000', role: 'Administrador', active: true },
]);

export const petsRepo = createRepo<Pet>('pets', [
  { name: 'Firulais', species: 'Perro', breed: 'Criollo', age: 3, sex: 'M', ownerId: '', healthStatus: 'Sano', registeredAt: new Date().toISOString() },
]);

export const petTypesRepo = createRepo<PetType>('petTypes', [
  { name: 'Perro', description: 'Caninos domésticos', icon: '🐶' },
  { name: 'Gato', description: 'Felinos domésticos', icon: '🐱' },
]);

export const categoriesRepo = createRepo<ProductCategory>('categories', [
  { name: 'Alimento', description: 'Comida para mascotas', icon: '🍖' },
  { name: 'Medicamento', description: 'Farmacia veterinaria', icon: '💊' },
]);

export const productsRepo = createRepo<Product>('products', [
  { name: 'Concentrado Premium 10kg', categoryId: '', description: 'Perros adultos', price: 120000, stock: 15, image: '' },
]);
