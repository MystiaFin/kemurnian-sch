import Image, { StaticImageData } from "next/image";

interface ListSekolahProps {
    name: string;
    address: string;
    image: StaticImageData;
    mapLink: string;
}

export default function ListSekolah({ name, address, image, mapLink }: ListSekolahProps) {
    return (
        <div className="mt-4 flex max-w-60 flex-col items-center text-center">
            <h2 className="font-bold text-xl mb-4">
                {name}
            </h2>
            <Image src={image} alt={name} className="w-[250px] rounded-md" />
            <div className="flex flex-col h-40 justify-between">
                <div className="text-sm mt-2 text-left">
                    {address}
                    <div className="mt-2">
                        <a href={mapLink} className="text-blue-500 text-sm hover:underline">
                            Lihat Peta {'>'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}