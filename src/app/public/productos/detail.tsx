import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
    producto: IProducto;
}

export const ProductoDetail: FC<Props> = ({ producto }) => {

    return (
        <section className="product-section">
            <div className="product-details">
                <h1 className="product-title">{producto.nombre}</h1>
                <h2 className="product-proveedor">{producto.proveedor}</h2>
                <h3 className="product-descripcion">{producto.descripcion}</h3>
                <button className="buy-now-btn">Adquirir producto</button>
            </div>
            <div className="product-image">
                <Image
                    alt="Card background"
                    className=" tarjetilla "
                    src={producto.imagen}
                />
            </div>
        </section>

    )
}