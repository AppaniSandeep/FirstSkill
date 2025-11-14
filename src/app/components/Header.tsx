import Link from "next/link"

export default function Header() {
    return (
        <header className="fixed-top top-0 w-full bg-black/60 backdrop-blur-lg z-50">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-bold text-500">
                    Movie App
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="hover:text-red-500">Home</Link>
                    <Link href="/" className="hover:text-red-500">Trending</Link>
                    <Link href="/" className="hover:text-red-500">Upcoming</Link>
                </div>
            </nav>
        </header>
    )
}