import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    nombre: "Tony Reichert",
    empresa: "HiperGarden Tools",
    localidad: "Caceres",
  },
  { 
    key: "2",
    nombre: "Zoey Lang",
    empresa: "Frutales Talavera S.A",
    localidad: "Toledo",
  },
  {
    key: "3",
    nombre: "Sam Fisher",
    empresa: "Viveros EL OASIS",
    localidad: "Alicante",
  },
  {
    key: "4",
    nombre: "William Howard",
    empresa: "Jerte Distribuciones S.L.",
    localidad: "Murcia",
  },
  {
    key: "5",
    nombre: "Simon Avila",
    empresa: "Almeria Seasons",
    localidad: "Almeria",
  },
  {
    key: "6",
    nombre: "Francisco Parra Navarro",
    empresa: "Herramientas La Fuente",
    localidad: "La Fuente",
  }
];

const columns = [
  {
    key: "nombre",
    label: "NOMBRE",
  },
  {
    key: "empresa",
    label: "EMPRESA",
  },
  {
    key: "localidad",
    label: "LOCALIDAD",
  },
];

const Tabla2=()=> {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
export default Tabla2