import apiProductos from '@/model/productos/apiProductos'
import React from 'react'
import { ProductoDetail } from '../detail';


const ProductoPage = async ({ params: { codigo } }: { params: { codigo: string } }) => {

  const producto = await apiProductos.detalle(codigo);

  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
        <ProductoDetail producto={producto} />
    </section>
  )
}

export default ProductoPage