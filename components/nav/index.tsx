import Link from "next/link"

export function Nav() {
   return (
      <nav className='max-w-2xl mt-4 mb-12 space-x-6'>
         <Link href="/" className="underline text-blue-600 text-xl">Home</Link>
         <Link href="/work" className="underline text-blue-600 text-xl">Work</Link>
         <Link href="/blog" className="underline text-blue-600 text-xl">Blog</Link>
      </nav>
   )
}