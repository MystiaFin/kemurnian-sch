import NavbarDesktop from 'components/NavbarDesktop';
import ImageSlider from 'components/ImageSlider'
import Slide1 from 'assets/1.webp'
import Slide2 from 'assets/2.webp'

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
    </>
  );
}
