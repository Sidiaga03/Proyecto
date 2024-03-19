'use client'

import { Menu } from "@/components/commons/Menu"
import { ILink } from "@/interfaces/ILinks";

export const Header = () => {

    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Gamas', href: '/public/gamas'},
        {name: 'Clientes', href: '/public/clientes'},
      ];

  return (
    <>
      <header>
        <Menu links= {links} />
      </header>
    </>
  )
}