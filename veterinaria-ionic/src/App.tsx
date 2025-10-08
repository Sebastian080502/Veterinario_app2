
import React from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppMenu from './ui/AppMenu';

import TypesList from './pages/types/TypesList';
import TypeForm from './pages/types/TypeForm';

import ProductsList from './pages/products/ProductsList';
import ProductDetail from './pages/products/ProductDetail';
import ProductForm from './pages/products/ProductForm';

import CategoriesList from './pages/categories/CategoriesList';
import CategoryForm from './pages/categories/CateforyForm';
export default function App() {
  return (
    <IonApp>
      <BrowserRouter>
        {}
        <AppMenu />

        <Routes>
          <Route path="/" element={<Navigate to="/types" replace />} />

          {}
          <Route path="/types" element={<TypesList />} />
          <Route path="/types/new" element={<TypeForm />} />
          <Route path="/types/:id/edit" element={<TypeForm />} />

          {}
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductForm />} />

          {}
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/categories/new" element={<CategoryForm />} />
          <Route path="/categories/:id/edit" element={<CategoryForm />} />
        </Routes>
      </BrowserRouter>
    </IonApp>
  );
}
