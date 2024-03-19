import { GamasCard } from "@/components/public/gamas/gamasCard";
import { IGamas } from "../../../interfaces/IGamas";
import { getGamas } from '../../../model/gamas/datagamas'
import React from 'react'

const GamasPage = async () => {

  const gamas: IGamas[] = await getGamas()
  return (
    <>
      <h1>Seccion de todas nuestras gamas</h1>
      <div id='gamas'>
      <section className='flex flex-col items-center'>
      {/* { <GamasCard gamas={gamas}/> } */}
      </section>
    </div>
    </>
  )
}

export default GamasPage;