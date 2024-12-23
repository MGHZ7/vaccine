'use client'

import Image from "next/image";
import logo from "../../app/logo.png";
import { useState } from "react";
import { copyToClipboard } from "@/libs/clipboard/clipboard";

export function TokenInfo() {

    const [isOpen, setIsOpen] = useState(false);

    const address = '0x475bfaa1848591ae0e6ab69600f48d828f61a80e';
    const decimals = 18;
    const name = 'VAC';

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }

    return <article className={`fixed flex top-1/2 right-0 z-40 bg-black bg-opacity-10 
        border-l border-t border-b border-primary backdrop-blur-xl rounded-l-xl h-56 
        transition ${isOpen ? 'translate-x-0' : 'translate-x-[200px] sm:translate-x-[300px]'}`}>
        <div className="relative h-full py-4 cursor-pointer" onClick={toggleOpen}>
            <Image alt="Logo" {...logo} width={50} height={50} />
            <h5 className="absolute top-24 -left-2 rotate-90 text-xs text-primary whitespace-nowrap">Token Info</h5>
            <span className={`absolute material-symbols-outlined top-36 left-2 text-primary drop-shadow-lg
                transition ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                chevron_left
            </span>
        </div>

        <div className="p-4 max-w-[200px] sm:max-w-[300px]">
            <p className="text-xl text-on-primary">Token Info</p>
            <div className="mt-2 space-y-2">
                <div>
                    <h6 className="text-sm text-primary font-light">Name</h6>
                    <p className="text-sm text-on-primary font-light">{name}</p>
                </div>
                <div>
                    <h6 className="text-sm text-primary font-light">Smart contract address</h6>
                    <p className="text-xs text-on-primary font-light break-words">{address}
                        {address
                            ? <button className="hover:scale-105 active:scale-90" onClick={() => copyToClipboard(address!)}>
                                <span className="material-symbols-outlined mx-2">
                                    content_copy
                                </span>
                            </button> : null
                        }
                    </p>

                </div>
                <div>
                    <h6 className="text-sm text-primary font-light">Decimals</h6>
                    <p className="text-sm text-on-primary font-light">{decimals}</p>
                </div>
            </div>
        </div>
    </article>
}