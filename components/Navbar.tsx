import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bpl-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            {/* Replace text with Logo Image */}
            <Link href="/" className="font-display text-2xl font-bold tracking-wider">
              BPL<span className="text-bpl-accent">T20</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-bpl-accent transition-colors font-medium">Home</Link>
            <Link href="/fixtures" className="hover:text-bpl-accent transition-colors font-medium">Fixtures</Link>
            <Link href="/stats" className="hover:text-bpl-accent transition-colors font-medium">Stats Center</Link>
            <Link href="/teams" className="hover:text-bpl-accent transition-colors font-medium">Teams</Link>
            <Link href="/news" className="hover:text-bpl-accent transition-colors font-medium">News</Link>
          </div>
          <div className="md:hidden">
            {/* Mobile Menu Button would go here */}
            <button className="text-white">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}