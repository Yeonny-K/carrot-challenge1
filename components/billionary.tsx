"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

interface BillionaryProps {
    id: string;
    name: string;
    squareImage: string;
    netWorth: number;
    industries: string[];
}

export default function Billionary({id, name, squareImage, netWorth, industries}: BillionaryProps) {
    return (
        <Link href={`/person/${id}`}>
        <div className="text-white hover:scale-105 transition-transform bg-slate-900">
            <img src={squareImage} alt="" />
            <div className="px-1 p-1">
            <div className="font-medium text-base">{name}</div>
            <div className="flex text-xs pt-1">{Math.floor(netWorth/1000)} Bilion / {industries.join(", ")}</div>
            </div>
        </div>
        </Link>
    );
}