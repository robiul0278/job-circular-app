
import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth();
    return (
        <header>
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">

                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <span className="text-2xl font-bold text-gray-800 cursor-pointer">LOGO</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:flex sm:items-center sm:space-x-6">
                            <Link href="#">
                                <span className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Home</span>
                            </Link>
                            <Link href="#">
                                <span className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Features</span>
                            </Link>
                            <Link href="#">
                                <span className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Pricing</span>
                            </Link>

                            {session?.user ? (
                                <>
                                    <Link href="/startup/create">
                                        <span className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">Create</span>
                                    </Link>

                                    <form
                                        action={async () => {
                                            "use server"
                                            await signOut();
                                        }}
                                    >
                                            <button
                                            type="submit"
                                            className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Logout
                                        </button>
                                    </form>



                                    <Link href={`/user/${session.id}`}>
                                        <span className="text-gray-600 hover:text-gray-900 text-sm font-medium cursor-pointer">
                                            {session.user.name}
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <form
                                        action={async () => {
                                            "use server"
                                            await signIn('github');
                                        }}
                                    >
                                        <button
                                            type="submit"
                                            className="px-4 py-2 cursor-pointer bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Github Login
                                        </button>


                                    </form>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="sm:hidden">
                            <input id="menu-toggle" type="checkbox" className="hidden peer" />
                            <label htmlFor="menu-toggle" className="cursor-pointer">
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="hidden peer-checked:block sm:hidden bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link href="#">
                            <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer">Home</span>
                        </Link>
                        <Link href="#">
                            <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer">Features</span>
                        </Link>
                        <Link href="#">
                            <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer">Pricing</span>
                        </Link>

                        {session?.user ? (
                            <>
                                <Link href="/startup/create">
                                    <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer">Create</span>
                                </Link>
                                <form action={async () => {
                                    "use server"
                                    await signOut();
                                }}
                                >
                                    <button
                                        className="block cursor-pointer w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium "
                                    >
                                        Log Out
                                    </button>
                                </form>
                                <Link href={`/user/${session.id}`}>
                                    <span className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer">
                                        {session.user.name}
                                    </span>
                                </Link>
                            </>
                        ) : (
                            <>
                                <form
                                    action={async () => {
                                        "use server"
                                        await signIn("github");
                                    }}
                                >
                                    <button
                                        className="block  w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-base font-medium cursor-pointer"
                                    >
                                        Login
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
