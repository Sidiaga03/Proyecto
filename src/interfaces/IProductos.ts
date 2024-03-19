
export interface IProducto {
    codigo:         string;
    nombre:         string;
    codgama:        string;
    imagen:         string;
    descripcion:    string;
    proveedor:      string;
    stock:          number;
    pvp:            number;
    pcoste:         number;
}

export interface IColumn {
    key: string;
    label: string;
}

const ColumProducto:IColumn[] = [
    {
        key: "nombre",
        label: "NOMBRE",
    },
    {
        key: "imagen",
        label: "IMAGEN",
    },
    {
        key: "stock",
        label: "STOCK",
    },
    {
        key: "pvp",
        label: "PVP",
    }
]

export default ColumProducto