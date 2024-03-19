import { ProductosCardList } from '@/components/public/productos/ProductosCardList'
import { IProducto } from '@/interfaces/IProductos'
import { getProductos } from '@/model/productos/dataproductos'
import React from 'react'

const ProductosPage = async () => {

  const productos: IProducto[] = await getProductos()
  return (
    <>
    <div id='productos'>
      <section className='flex flex-col items-center'>
        { <ProductosCardList productos={productos}/> }
      </section>
    </div>
    </>
  )
}
export default ProductosPage;

