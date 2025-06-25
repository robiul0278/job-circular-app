import Link from "next/link";
import DarkButton from "../DarkButton";
import { Button } from "../ui/button";
import Image from "next/image";

const Navbar = () => {
  const { auth, signIn, signOut } = [];
  const session = false;

  return (
    <header>
      <nav className="border-b border-gray-300 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="cursor-pointer">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40} // change as needed
                    height={40} // change as needed
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {["Home", "Features", "Pricing"].map((item) => (
                <Link key={item} href="#">
                  <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200">
                    {item}
                  </span>
                </Link>
              ))}

              <DarkButton />

              {session?.user ? (
                <>
                  <Link href="/blog/create">
                    <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200">
                      Create
                    </span>
                  </Link>

                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors duration-200 shadow-sm"
                    >
                      Logout
                    </button>
                  </form>

                  <Link href={`/user/${session.id}`}>
                    <span className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium cursor-pointer transition-colors duration-200">
                      {session.user.name}
                    </span>
                  </Link>
                </>
              ) : (
                <form
                  action={async () => {
                    "use server";
                    await signIn("github");
                  }}
                >
                  <Button
                    variant="outline"
                    type="submit"
                    className="px-4 bg-blue-400 hover:bg-blue-400 text-white hover:text-white  py-2 rounded-md text-sm font-semibold transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    Login
                  </Button>
                </form>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <input id="menu-toggle" type="checkbox" className="hidden peer" />
              <label htmlFor="menu-toggle" className="cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div className="hidden peer-checked:block sm:hidden bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {["Home", "Features", "Pricing"].map((item) => (
              <Link key={item} href="#">
                <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium cursor-pointer transition-colors duration-200">
                  {item}
                </span>
              </Link>
            ))}

            {session?.user ? (
              <>
                <Link href="/startup/create">
                  <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium cursor-pointer transition-colors duration-200">
                    Create
                  </span>
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium cursor-pointer transition-colors duration-200">
                    Log Out
                  </button>
                </form>

                <Link href={`/user/${session.id}`}>
                  <span className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium cursor-pointer transition-colors duration-200">
                    {session.user.name}
                  </span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-base font-medium cursor-pointer transition-colors duration-200">
                  Login
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
