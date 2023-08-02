"use client"

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const MobileMenu = () => {

    const user = true;
    const [open, setOpen] = useState(false);

    return (
        <div>

            <div className="cursor-pointer">
                {!open ? (
                    <RxHamburgerMenu onClick={() => setOpen(true)} />
                ) : (
                    <AiOutlineClose onClick={() => setOpen(false)} />
                )
                }
            </div>
            {
                open && (
                    <div className="text-white text-lg w-full bg-green-500 absolute left-0 top-20 h-[calc(100vh-5rem)] flex flex-col items-center justify-center z-10 gap-5">
                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                                {item.title}
                            </Link>
                        ))}
                        {user ? (
                            <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
                        ) : (
                            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                        )
                        }
                        <Link href="/cart" onClick={() => setOpen(false)}>
                            <CartIcon />
                        </Link>
                    </div>
                )
            }
        </div>
    );
}

export default MobileMenu;
