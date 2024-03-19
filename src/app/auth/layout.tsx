
import React from "react";
import { IChildren } from "../../interfaces/iChildren";

export default function AuthLayout({children}: IChildren){

    return (
        <>
            <main className="container mx-auto">
                { children }
            </main>
        </>
    )
}