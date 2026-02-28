"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import Image from "next/image"
import { Button } from "./ui/button"
import { Phone } from "lucide-react"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='h-16 flex justify-between items-center px-10 bg-primary/10 '>
      <Link
        href='/'
        className='flex items-center gap-0'
        aria-label='AutoCare – strona główna'
      >
        <Image src='/logo.png' alt='Logo' width={45} height={45} />
        <span className='text-xl font-bold italic'>Perfect Clean</span>
      </Link>
      <div className='flex items-center gap-6 max-lg:hidden'>
        <Link
          href='/'
          className={`text-lg ${pathname === "/" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Strona główna
        </Link>
        <Link
          href='/services'
          className={`text-lg ${pathname === "/services" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Usługi
        </Link>
        <Link
          href='/about'
          className={`text-lg ${pathname === "/about" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          O nas
        </Link>
        <Link
          href='/contact'
          className={`text-lg ${pathname === "/contact" ? "text-primary" : ""} transition-colors hover:text-primary`}
        >
          Kontakt
        </Link>
      </div>
      <div className="max-lg:hidden flex gap-4">
        <Button className="bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer ">
          <Phone className="size-6" />
          (+48) 500 500 500
        </Button>
        <Button asChild variant='outline' className='bg-secondary text-secondary-foreground h-9 text-lg cursor-pointer border-primary'>
         <Link href='/contact'>
         Zarezerwuj Usługę
         </Link>
        </Button>
      </div>
      <SheetNav />
    </nav>
  )
}

export default Navbar
