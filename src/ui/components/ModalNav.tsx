'use client'

import { IconCategory } from "@tabler/icons-react";
import Nav from "./Nav";
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

            <div className="place-content-center fixed inset-0 bg-dark/90 backdrop-blur-sm hidden animate-fade-up animate-duration-100 animate-ease-in-out peer-checked:grid">
                <label htmlFor="modalNav" className="cursor-pointer"><CloseIcon customClass="absolute right-5 top-5" /></label>
                <Nav customClass={null} handleModal={handleModal} />
            </div>
        </div>
    )
}