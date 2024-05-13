import { Link } from "react-router-dom";

const Navbar = () => {
    const menuLinks = [
        { id: "Home", label: 'Home', path: '/' },
        { id: "Country", label: 'New Country', path: '/newcountry' },
    ];

    return (
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
            <div className="hidden gap-3 md:!flex">
                {menuLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.path}
                        className="flex cursor-pointer flex-col items-center justify-center"
                    >
                        <p className="text-xs">{link.label}</p>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
