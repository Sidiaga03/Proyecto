
import { ICliente } from '@/interfaces/IClientes';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
    cliente: ICliente[];
}

export const ClienteCard:FC<Props> = ({cliente}) => {
  return (
    <Card className="py-4 min-h-72 max-h-72">
        <CardHeader className="pb-0 pt-2 px-4 h-10 flex-col items-start">
            <h5 className="font-bold text-sm">{  }</h5>
        </CardHeader>
        <CardBody>
            <Image
                alt="Card background"
                className="object-cover rounded-xl max-h-44"

            />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 h-10 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
                
            </p>
        </CardFooter>
    </Card>
  )
}
