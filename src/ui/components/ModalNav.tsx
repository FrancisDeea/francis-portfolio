'use client'

import { IconCategory } from "@tabler/icons-react";
import Nav from "./Nav";
import ThemeSelector from "./ThemeSelector";
import { CloseIcon } from "../icons";
import { useEffect } from "react";

export default function ModalNav() {

    const handleModal = () => {
        const checkbox = document.getElementById('modalNav') as HTMLInputElement

        if (checkbox.checked) {
            checkbox.checked = false
        }
    }

    // useEffect(() => {
    //     const checkbox = document.getElementById('modalNav') as HTMLInputElement

    //     function bodyFlow() {
    //         if (checkbox.checked) {
    //             document.body.style.overflow = 'hidden';
    //         } else {
    //             document.body.style.overflow = 'auto';
    //         }
    //     }

    //     checkbox.addEventListener('change', bodyFlow)
    //     return () => checkbox.removeEventListener('change', bodyFlow)
    // })

    return (
        <div className="md:hidden">
            <label htmlFor="modalNav"><IconCategory /></label>
            <input id="modalNav" type="checkbox" className="hidden peer" />

            <div
                className="
                    ct-flex-col justify-evenly fixed left-0 right-0 bottom-0 w-[calc(100%-2rem)] h-[calc(100%-1rem)] m-auto p-8
                    bg-dark/90 rounded-t-md border border-medium border-b-0 backdrop-blur-md hidden 
                    animate-fade-up animate-duration-100 animate-ease-in-out 
                    peer-checked:flex"
            >
                <label htmlFor="modalNav" className="cursor-pointer"><CloseIcon customClass="absolute right-5 top-5" /></label>

                <div className="ct-flex-col gap-1">
                    <span className="text-xl font-semibold">Francisco Javier Bernal</span>
                    <span className="text-sm font-normal">Programador Web JavaScript</span>
                    <hr />
                </div>

                <Nav customClass={null} handleModal={handleModal} />

                <div>
                    <ThemeSelector />
                    {/* <LanguageSelector /> */}
                </div>
            </div>
        </div>
    )
}