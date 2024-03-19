'use client'
import { IProducto } from "@/interfaces/IProductos";
import { FC, useState, useEffect } from "react";
import ProductoModal from "./ProductoModal";
import axios from "axios";
import { useSearchParams } from 'next/navigation';


interface Props {
    productos: IProducto[];
}

export const AdminTable:FC<Props> = ({productos}) => {

    const [deletedProducto, setDeletedProducto] = useState<string | null>(null);

    const handleDelete = async (codigo_producto: string) => {
        try {
        await axios.delete(`http://192.168.0.100/api/productos/${codigo_producto}`);
        setDeletedProducto(codigo_producto);
        window.location.reload();
        } catch (error) {
        console.error('Error al borrar el producto:', error);
        }
    };

    const confirmDelete = (codigo_producto: string) => {
        if (window.confirm('¿Estás seguro de que quieres borrar este producto?')) {
        handleDelete(codigo_producto);
        }
    };

    return (
        <>
        
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Imagen</span>
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
                                <ProductoModal/>
                            </th>
                                    
                        </tr>
                    </thead>
                    {
                         productos.map( (producto) => (    
                            <tbody key={producto.codigo}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <img src={producto.imagen} className="w-16 md:w-32 max-w-full max-h-full" alt={producto.nombre}/>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {producto.nombre}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {producto.codgama}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {producto.pvp}€
                                    </td>
                                    <td className="px-6 py-4">
                                        <button type="button" onClick={() => confirmDelete(producto.codigo)} className="text-white bg-gradient-to-r from-red-500 via-red-700 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                            Borrar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                                    
                        ))
                    }    
                </table>
            </div>

        </>  
    )
}