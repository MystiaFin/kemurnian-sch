import NavbarDesktop from 'components/NavbarDesktop';
import ImageSlider from 'components/ImageSlider'
import Slide1 from 'assets/1.webp'
import Slide2 from 'assets/2.webp'
import SearchBar from '@/components/SearchBar';
import ListSekolah from '@/components/ListSekolah';

export default function Home() {
  const images = [
    Slide1,
    Slide2,
    Slide2,
    Slide1,
    Slide1,
    Slide1,
  ]
  return (
    <>
      <NavbarDesktop/>
      <div className="bg-semi-dark-red">
        <div className="container mx-auto">
          <ImageSlider images={images} />
        </div>
      </div>
      <h2 className='mt-10 mb-5 text-center font-bold'>
        <span className='py-1 px-3 bg-primary-red rounded-3xl text-white'>
          Lokasi Sekolah
        </span>
      </h2>
      <ListSekolah/>

    </>
  );
}
