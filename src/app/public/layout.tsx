
import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/ILinks";

export default function PublicLayout({children}: IChildren){

    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Gamas', href: '/public/gamas'},
        {name: 'Proveedores', href: '/public/proveedores'},
      ];

    return (
        <>
            <header>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}