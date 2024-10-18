import logo from 'assets/logo.webp';

export default function NavbarDesktop() {
    return(
        <nav className='flex bg-primary-red justify-between py-2 px-4'>
        <img src={logo.src} alt="logo" className="w-80" />
        <ul className='flex'>
            <li><a href="/">Home</a></li>
            <li><a href="/sekolah">School</a></li>
            <li><a href="/ppdb">PPDB</a></li>
            <li><a href="/kurikulum">Kurikulum</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login LMS</a></li>
        </ul>
        </nav>
    )
}