'use client';
import Image from "next/image";
import { useState } from "react";

export default function TransitionImage({ imageUrl: image, moving = false }: { imageUrl: string, moving: boolean }) {

    const [imageUrl, setImageUrl] = useState(`/${image}.png`);

    function mouseEnter() {
        setImageUrl(`/${image}.gif`);
    }

    function mouseLeave() {
        setImageUrl(`/${image}.png`);
    }

    return (
        <>
            <Image alt="Yes" src={moving ? `/${image}.gif` : imageUrl} width={256} height={154} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} priority />
        </>
    );
}