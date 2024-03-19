"use client"

import React, { FC, useState } from 'react';
import { IProducto } from '@/interfaces/IProductos';
import { ProductosCard } from './ProductosCard';
import Link from 'next/link';

interface Props {
  productos: IProducto[];
}

export const ProductosCardList: FC<Props> = ({ productos }) => {
  const [mostrarSoloAromaticas, setMostrarSoloAromaticas] = useState(false);
  const [mostrarSoloFrutales, setMostrarSoloFrutales] = useState(false);
  const [mostrarSoloHerbaceas, setMostrarSoloHerbaceas] = useState(false);
  const [mostrarSoloHerramientas, setMostrarSoloHerramientas] = useState(false);
  const [mostrarSoloOrnamentales, setMostrarSoloOrnamentales] = useState(false);

  const handleCheckboxChange = (marca: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prevState) => !prevState);
  };

  const productosFiltrados = productos.filter((producto) => {
    if (
      (mostrarSoloAromaticas && producto.codgama === 'Aromaticas') ||
      (mostrarSoloFrutales && producto.codgama === 'Frutales') ||
      (mostrarSoloHerbaceas && producto.codgama === 'Herbaceas') ||
      (mostrarSoloHerramientas && producto.codgama === 'Herramientas') ||
      (mostrarSoloOrnamentales && producto.codgama === 'Ornamentales')
    ) {
      return true;
    }

    // Mostrar todos si no hay ninguna marca seleccionada
    return (
      !mostrarSoloAromaticas &&
      !mostrarSoloFrutales &&
      !mostrarSoloHerbaceas &&
      !mostrarSoloHerramientas &&
      !mostrarSoloOrnamentales
    );
  }) || [];

  return (
    <section className="flex flex-row flex-wrap sct">
      <div id='consejo'>
        <h2>Usa nuestro filtro para buscar más rapido</h2>
      </div>
      <div className="checkboxs">
        <label>
          <div className="form-group">
            <input type="checkbox" id="html" checked={mostrarSoloAromaticas}
              onChange={() => handleCheckboxChange('Aromaticas', setMostrarSoloAromaticas)}
            ></input>
            <label htmlFor="html">Aromaticas</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html2" checked={mostrarSoloFrutales}
              onChange={() => handleCheckboxChange('Frutales', setMostrarSoloFrutales)}
            ></input>
            <label htmlFor="html2">Frutales</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html3" checked={mostrarSoloHerbaceas}
              onChange={() => handleCheckboxChange('Herbaceas', setMostrarSoloHerbaceas)}
            ></input>
            <label htmlFor="html3">Herbaceas</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html4" checked={mostrarSoloHerramientas}
              onChange={() => handleCheckboxChange('Herramientas', setMostrarSoloHerramientas)}
            ></input>
            <label htmlFor="html4">Herramientas</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html5" checked={mostrarSoloOrnamentales}
              onChange={() => handleCheckboxChange('Ornamentales', setMostrarSoloOrnamentales)}
            ></input>
            <label htmlFor="html5">Ornamentales</label>
          </div>  
        </label>
      </div>

      {/* <div className="listado"> */}
      {productosFiltrados.map((producto) => (
        <article key={producto.codigo} className="basis-1/4 p-2">
          <Link href={`/public/productos/${producto.codigo}`}>
            <ProductosCard productos={producto} />
          </Link>
        </article>
      ))}
      {/* </div> */}
    </section>
  );
};
