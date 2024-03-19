
import { ICliente } from '../../../interfaces/IClientes';
import React, { FC } from 'react'

interface Props {
    clientes: ICliente[];
}

export const ClientesCardList:FC<Props> = ({clientes}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            clientes.map( (cliente) => (
                <article key={cliente.nif} className="basis-1/4 p-2">
                     
                </article>
            ))
        }
    </section>
  )
}
