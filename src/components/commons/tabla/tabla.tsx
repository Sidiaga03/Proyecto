'use client'

import { useState } from 'react';
import axios from 'axios';
import { IProducto } from '@/interfaces/IProductos';

interface Props {
  productos: IProducto[];
}

export const AdminTable = ({ productos }: Props) => {
  const [deleteProduct, setDeletedProduct] = useState<string | null>(null);

  const handleDelete = async (codigo: string) => {
    try {
      await axios.delete(`http://192.168.0.100:3001/api/productos/${codigo}`);
      setDeletedProduct(codigo);
      window.location.reload();
    } catch (error) {
      console.error('Error al borrar el producto:', error);
    }
  };

  const confirmDelete = (codigo: string) => {
    if (window.confirm('¿Seguro que quieres borrar este producto?')) {
      handleDelete(codigo);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Gama
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                <button type="button" className="button-circle">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </button>

              </th>

            </tr>
          </thead>
          {productos.map((producto) => (
            <tbody key={producto.codigo}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src={producto.imagen} className="w-16 md:w-32 max-w-full max-h-full" alt="Producto" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.codgama}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.pvp}€
                </td>
                <td className="px-6 py-4">
                  <button type="button" onClick={() => confirmDelete(producto.codigo)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};