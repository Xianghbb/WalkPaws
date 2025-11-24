import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 md:px-10 lg:px-20">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary text-3xl">pets</span>
        <h2 className="text-xl font-bold tracking-tight">WalkPaws</h2>
      </div>
      <div className="hidden items-center gap-8 md:flex">
        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
          FAQ
        </Link>
      </div>
      <div className="flex gap-3">
        <Link
          href="/auth/login"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 text-sm font-medium leading-normal tracking-wide transition-colors bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
        >
          <span className="truncate">Log In</span>
        </Link>
        <Link
          href="/auth/signup"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal tracking-wide transition-transform hover:scale-105"
        >
          <span className="truncate">Sign Up</span>
        </Link>
      </div>
    </header>
  )
}