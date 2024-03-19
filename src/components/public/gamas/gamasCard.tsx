import { IGamas } from '@/interfaces/IGamas';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
    gamas: IGamas;
}

export const GamasCard: FC<Props> = ({ gamas }) => {
    return (
        <section className='sct'>
            <Card className="py-4 min-h-72 max-h-80 tarjeta">
                <CardHeader className="pb-0 pt-2 px-4 h-10 flex-col items-start">
                    <h2 className="font-bold text-xl text-white">{gamas.codigoGama}</h2>
                    <h3 className="font-bold text-sm text-white">{gamas.descripcion}</h3>;
                </CardHeader>
                <CardBody className="overflow-visible h-48 py-2 flex flex-wrap justify-center items-center">
                    <Image
                        alt="Card background"
                        className=" tarjetilla2 "
                        src={gamas.imagen}
                    />
                </CardBody>
            </Card>
        </section>
    )
}