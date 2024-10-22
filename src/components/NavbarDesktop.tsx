import logo from 'assets/logo.webp';

export default function NavbarDesktop() {
    return(
        <nav className='sticky top-0 z-[100] flex bg-primary-red justify-between items-center px-6 py-2'>
            <img src={logo.src} alt="logo" className="w-80" />
            <ul className='flex text-white gap-6'>
                <li><a href="/">Home</a></li>
                <li><a href="/sekolah">School</a></li>
                <li><a href="/ppdb">PPDB</a></li>
                <li><a href="/kurikulum">Kurikulum</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login" className='bg-dark-red px-4 py-2 rounded-full transition-colors duration-300 hover:bg-red-800 ease'>Login LMS</a></li>
                <li>search</li>
            </ul>
        </nav>
    );
};