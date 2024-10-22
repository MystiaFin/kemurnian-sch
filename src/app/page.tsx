import NavbarDesktop from 'components/NavbarDesktop';
import ImageSlider from 'components/ImageSlider'
import Slide1 from 'assets/1.webp'
import Slide2 from 'assets/2.webp'
import ListSekolah from '@/components/ListSekolah';
import kemurnian1 from 'assets/school-list/kemurnian1.webp';
import kemurnian2 from 'assets/school-list/kemurnian2.webp';
import kemurnian3 from 'assets/school-list/kemurnian3.webp';
import { StaticImageData } from 'next/image';

interface School {
  name: string;
  address: string;
  image: StaticImageData;
  mapLink: string;
}

export default function Home() {
  const images = [
    Slide1,
    Slide2,
    Slide2,
    Slide1,
    Slide1,
    Slide1,
  ];

  const schools: School[] = [
    {
      name: 'Sekolah Kemurnian I',
      address: 'Jl. Kemurnian V No. 209 Glodok, Taman Sari Jakarta Barat 11120',
      image: kemurnian1,
      mapLink: 'https://maps.google.com/maps?ll=-6.146417,106.813213&z=15&t=m&hl=id&gl=ID&mapclient=embed&cid=10588243867173712899',
    },
    {
      name: 'Sekolah Kemurnian II',
      address: 'Komplek Green Ville Blok Q No. 209, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11510',
      image: kemurnian2,
      mapLink: 'https://maps.google.com/maps?ll=-6.168533,106.77941&z=11&t=m&hl=id&gl=ID&mapclient=embed&cid=17291091903259751618',
    },
    {
      name: 'Sekolah Kemurnian III',
      address: 'Jl. Perumahan Citra 2 Jl. Keharmonisan No.Blok A3, RT.1/RW.19, Pegadungan, Kec. Kalideres, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11830',
      image: kemurnian3,
      mapLink: 'https://maps.google.com/maps?ll=-6.137509,106.705484&z=15&t=m&hl=id&gl=ID&mapclient=embed&cid=13731167462812804915',
    },
  ];

  return (
    <>
      <NavbarDesktop/>
      <div className="bg-semi-dark-red">
        <div className="container mx-auto">
          <ImageSlider images={images} />
        </div>
      </div>
      <h2 className='mt-10 mb-5 text-center font-bold'>
        <span className='relative inline-block py-2 px-3 text-xl after:content-[""] after:absolute after:left-1/2 after:bottom-0 after:w-20 after:h-0.5 after:bg-black after:-translate-x-1/2'>
          Lokasi Sekolah
        </span>
      </h2>
      <div className='flex justify-center flex-row gap-8'>
        {schools.map((school, index) => (
          <ListSekolah
            key={index}
            name={school.name}
            address={school.address}
            image={school.image}
            mapLink={school.mapLink}
          />
        ))}
      </div>
    </>
  );
}
