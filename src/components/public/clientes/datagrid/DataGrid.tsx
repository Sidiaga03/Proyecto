import { IColumn, ICliente } from '@/interfaces/IClientes'
import React, { FC } from 'react'

interface Props {
    clientes: ICliente[],
    columns: IColumn[]
}

const DataGrid:FC<Props> = ({ clientes, columns}) => {
  return (
    <table border={1}>
            <thead>
                {
                    columns.map( (col) => (
                        <th>{ col.label }</th>
                    ))
                }
            </thead>
            <tbody>
                {
                    clientes.map( (clientes) => (
                        <tr>
                            <th>{ clientes.nif }</th>
                            <th>{ clientes.nombre}</th>
                            <th>{ clientes.apellidos }</th>
                            <th>{ clientes.codigo_postal }</th>
                        </tr>
                    ))
                }
            </tbody>
    </table>
  )
}

export default DataGrid