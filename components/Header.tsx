import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { BrushCleaning } from "lucide-react"
import GetQuote from "./GetQuote"
import TextType from "./TextType"


const Header = () => {
  return (
    <div className='relative w-full h-[620px]   overflow-hidden '>
      <Image
        src="/banner-img.jpg"
        alt="Header Background"
        fill
        className='absolute inset-0 w-full h-full object-cover object-center'
      />
     
      <div className='absolute bottom-0 left-0 max-sm:left-1/2 max-sm:-translate-x-1/2 flex flex-col items-center justify-center gap-4 text-center mb-8'>
        <TextType
          text={["Zaufane usługi sprzątania domów"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter='_'
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
          className='max-sm:text-xl text-4xl text-center font-bold text-white'
        />
        <p className='max-sm:hidden text-base md:text-lg lg:text-xl text-white/90   w-full md:w-2xl lg:w-3xl leading-relaxed'>
         Ciesz się nieskazitelnym domem dzięki naszym profesjonalnym usługom sprzątania. Zarezerwuj już teraz, aby cieszyć się czystszą i świeższą przestrzenią życiową.
        </p>
        <Button
         asChild
          className='text-lg md:text-xl lg:text-2xl px-4 py-2 md:py-6 md:px-8 lg:px-12  font-bold uppercase tracking-wider cursor-pointer '
        >
          <Link href='/reservation'>Zamów teraz <BrushCleaning className="ml-2 size-6" /></Link>
        </Button>
      </div>
      <GetQuote/>
    </div>
  )
}

export default Header
