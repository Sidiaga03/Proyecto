export interface ICliente {
    nif:           string;
    nombre:        string;
    apellidos:     string;
    direccion:     string;
    provincia:     string;
    localidad:     string;
    codigo_postal: string;
    key?:          string;
}

export interface IColumn {
    key: string;
    label: string;
}

const ColumCliente:IColumn[] = [
    {
        key: "nif",
        label: "NIF",
    },
    {
        key: "nombre",
        label: "NOMBRE",
    },
    {
        key: "apellidos",
        label: "APELLIDOS",
    },
    {
        key: "codigo postal",
        label: "Codigo Postal",
    }
]

export default ColumCliente