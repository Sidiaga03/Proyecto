import apiProductos from "@/model/productos/apiProductos";
import { AdminTable } from "../component/site/AdminTable"
import { Search } from "../component/site/Search";
import { FooterP } from "@/components/commons/footerP";


const ProductosAdminPage = async () => {

    const productos = await apiProductos.listar();

    return (
        <>
            <Search placeholder="Búsqueda" />
            <br/>
            <AdminTable  productos={productos}/>
            <footer>
                <FooterP/>
            </footer>
        </>
    )
}

export default ProductosAdminPage