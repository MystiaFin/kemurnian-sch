import logo from "assets/logo.webp";

export default function NavbarDesktop() {
  return (
    <nav className="flex flex-col justify-between w-60 h-[100vh] p-2 bg-primary-red text-white">
      <img src={logo.src} alt="logo" className="pr-1" />
      <ul className="flex flex-col gap-1">
        <li>
          <a href="">
            <button className="w-full bg-dark-red text-left p-2 rounded-md">
              Dashboard
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/sliders">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              Sliders
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/ppdb">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              PPDB
            </button>
          </a>
        </li>
        <li>
          <a href="/admin/p/home-news">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              News
            </button>
          </a>
        </li>
        <li>
          <a href="#">
            <button className="w-full hover:bg-semi-dark-red text-left p-2 rounded-md">
              School
            </button>
          </a>
        </li>
      </ul>
      <div>
        <button className="w-full bg-red-600 rounded-md py-2">logout</button>
      </div>
    </nav>
  );
}
