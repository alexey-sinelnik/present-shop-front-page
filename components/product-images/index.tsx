import { ProductImagesProps } from "@/common/types/products";
import {
    ActiveImage,
    ActiveImageWrapper,
    Image,
    ImageButton,
    ImageButtons
} from "@/styles/components/single-product";
import { useState } from "react";

export default function ProductImagesComponent({
    images,
    alt
}: ProductImagesProps) {
    const [activeImage, setActiveImage] = useState(images[0]);
    return (
        <>
            <ActiveImageWrapper>
                <ActiveImage src={activeImage} alt={alt} />
            </ActiveImageWrapper>
            <ImageButtons>
                {images.map((image: string) => (
                    <ImageButton
                        active={image === activeImage}
                        key={image}
                        onClick={() => setActiveImage(image)}
                    >
                        <Image src={image} alt={alt} />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}
