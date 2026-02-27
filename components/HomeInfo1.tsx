import { Button } from "@/components/ui/button"
import { CalendarSync, Forklift, House, NotebookPen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const HomeInfo1 = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-10'>
      <div className='flex flex-col gap-8 p-4'>
        <h2 className='text-5xl font-bold leading-tight'>
          Sprawimy, że Twój dom będzie lśnił i nieskazitelnie czysty
        </h2>
        <p className='text-gray-500 text-xl'>
          Biurka są wypolerowane i odkurzone, dywany są świeże i nieskazitelnie
          czyste.
        </p>
        <div className='w-full grid grid-cols-2 gap-4'>
          <p className='flex items-center gap-2 text-xl'>
            <span className='w-12 h-12 bg-accent text-accent-foreground  flex items-center justify-center'>
              <Forklift className='size-8  ' />
            </span>
              Czyszczenie w celu złagodzenia alergii
          </p>
          <p className='flex items-center gap-2 text-xl'>
            <span className='w-12 h-12 bg-accent text-accent-foreground  flex items-center justify-center'>
              <CalendarSync className='size-8  ' />
            </span>
            Sprzątanie sezonowe
          </p>
          <p className='flex items-center gap-2 text-xl'>
            <span className='w-12 h-12 bg-accent text-accent-foreground  flex items-center justify-center'>
              <House className='size-8  ' />
            </span>
            Gruntowne sprzątanie mieszkań
          </p>
          <p className='flex items-center gap-2 text-xl'>
            <span className='w-12 h-12 bg-accent text-accent-foreground  flex items-center justify-center'>
              <NotebookPen className='size-8  ' />
            </span>
            Spersonalizowane plany sprzątania
          </p>
        </div>
        <Button asChild className='w-fit text-lg h-12 px-4'>
          <Link href="/contact">Skontaktuj się z nami</Link>
        </Button>
      </div>
      <div className="relative flex items-center justify-center">
       <Image src="/home-info-1.png" alt="Home Info 1" width={500} height={500} />
       
      </div>
    </div>
  )
}

export default HomeInfo1
