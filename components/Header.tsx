import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const Header = () => {
  return (
    <div className='relative w-full h-[280px] sm:h-[450px] md:h-[550px] lg:h-[700px]  overflow-hidden '>
      <Image
        src="/banner-img.jpg"
        alt="Header Background"
        fill
        className='absolute inset-0 w-full h-full object-cover object-bottom'
      />
     
      <div className='absolute bottom-0 left-0  flex flex-col items-center justify-center px-4 text-center'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-extrabold text-white mb-6 max-w-5xl tracking-tight'>
         Zaufane usługi sprzątania domów
          
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed'>
         Ciesz się nieskazitelnym domem dzięki naszym profesjonalnym usługom sprzątania. Zarezerwuj już teraz, aby cieszyć się czystszą i świeższą przestrzenią życiową.
        </p>
        <Button
         asChild
          className='text-lg md:text-xl lg:text-2xl px-4 py-2 md:py-6 md:px-8 lg:px-12 rounded-none font-bold uppercase tracking-wider cursor-pointer'
        >
          <Link href='/reservation'>Usługa Rezerwacji </Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
