import Link from "next/link";
import { memo, useMemo } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useCartState } from "../../helpers";

const navs = [
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Products",
    path: "/products",
  },
];

const Header = () => {
  const { totalCartQty } = useCartState();
  const isNotif = useMemo(() => totalCartQty > 0, [totalCartQty]);
  return (
    <header className="p-4 shadow-md">
      <div className="flex justify-between px-4 items-center">
        <Link href="/" passHref>
          <a className="text-2xl">CHams</a>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            {navs.map((nav, idx) => (
              <li key={`${nav.label}_${idx}`}>
                <Link href={nav.path} passHref>
                  <a className="capitalize">{nav.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/cart" passHref>
          <a className="relative">
            <TiShoppingCart title="My Cart" size="2rem" />
            {isNotif && (
              <span className="absolute text-xs -top-1 -right-2 rounded-full bg-black w-4 h-4 text-white flex justify-center items-center">
                {totalCartQty}
              </span>
            )}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
