
'use client';

import { useRouter } from "next/navigation";
export default function LinkDisplay({ item,index }) {

    const router = useRouter();

    return (
        <li
            key={index}
            className="hover:text-white cursor-pointer transition"
            onClick={() => router.push(`/${item.link}`)}
        >
            {item.title}
        </li>
    )

}

