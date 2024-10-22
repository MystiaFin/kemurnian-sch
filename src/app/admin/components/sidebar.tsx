import logo from 'assets/logo.webp';

export default function NavbarDesktop() {
    return(
        <nav className="flex flex-col justify-between w-60 h-[100vh] p-6 bg-primary-red text-white">
            <img src={logo.src} alt="logo" />
            <ul className='flex flex-col gap-2'>
                <li>Slider</li>
                <li>Home News</li>
                <li>Schools</li>
            </ul>
            <div>
                <button>logout</button>
            </div>
        </nav>
    );
};