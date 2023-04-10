import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="bg-transparent fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link href="/">
            <b>Wing Co.</b>
          </Link>

          <ul className="flex items-center gap-10">
            <li className="text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="text-blue-600">
              <Link href="/docs">Docs</Link>
            </li>
            <li className="text-blue-600">
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className="text-black bg-orange-300 rounded-md py-1 px-2">
              <Link href="/hire_us">Hire us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
