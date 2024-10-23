import logo from 'assets/logo.webp';

export default function NavbarDesktop() {
    return(
        <nav className="flex flex-col justify-between w-60 h-[100vh] p-2 bg-primary-red text-white">
            <img src={logo.src} alt="logo" className='pr-1' />
            <ul className='flex flex-col gap-1'>
                <li><button className='w-full bg-dark-red text-left p-2 rounded-md'>Dashboard</button></li>
                <li><button className='w-full hover:bg-semi-dark-red text-left p-2 rounded-md'>Sliders</button></li>
                <li><button className='w-full hover:bg-semi-dark-red text-left p-2 rounded-md'>PPDB</button></li>
                <li><button className='w-full hover:bg-semi-dark-red text-left p-2 rounded-md'>News</button></li>
                <li><button className='w-full hover:bg-semi-dark-red text-left p-2 rounded-md'>School</button></li>
            </ul>
            <div>
                <button>logout</button>
            </div>
        </nav>
    );
};