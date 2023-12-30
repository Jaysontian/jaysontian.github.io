
import NavLink from '@/components/navlink'

const links = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Contact', href: '/contact'},
]

export default function Header() {
    return(
        <header className="sticky top-0 z-10 main-header backdrop-blur-md bg-header ">
            <nav className="md:px-2 py-4 max-w-[700px] mx-auto flex justify justify-between items-center">
            <div></div>
            <ul className="flex justify-between gap-8 text-sm">
                {links.map((link) => (
                    <li key={link.href} className="text-stone-500 hover:text-stone-700">
                        <NavLink href={link.href}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
            <div></div>
            </nav>
        </header>
    );
}