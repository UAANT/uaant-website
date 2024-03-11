// src/app/_components/support.tsx
import { SUPPORTERS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";


export function Support() {
    return (
        <section className="py-24 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
                <p className="text-3xl m-6 text-accent-1 max-w-[280px] leading-tight">
                    We work with the support of official organizations
                </p>
                {SUPPORTERS.map((image, index) => (
                    <Link href={image.link} key={index} className="hover:scale-110 transition-transform duration-700" target="_blank" rel="noopener noreferrer">
                        <Image src={image.url} alt={image.alt} width={120} height={120} loading="lazy" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
