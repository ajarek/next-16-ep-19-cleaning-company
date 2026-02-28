"use client"
import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react"
import { toast } from "sonner"

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success("Dziękujemy za subskrypcję!")
    e.currentTarget.reset()
  }
  return (
    <footer className='bg-secondary/30 pt-16 pb-8 border-t relative overflow-hidden'>
      {/* Decorative Background Element */}
      <div className='absolute -bottom-20 right-20 text-[20rem] font-bold text-foreground/5 pointer-events-none select-none italic'>
        S
      </div>

      <div className='container mx-auto px-4 md:px-10 relative z-10'>
        {/* Top Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-start md:items-center mb-12'>
          <div className='text-foreground/80 font-medium text-sm md:text-base max-w-sm'>
            Bądź na bieżąco z najnowszymi wiadomościami, promocjami i
            ekskluzywnymi ofertami.
          </div>
          <div className='w-full flex justify-center'>
            <form onSubmit={handleSubscribe} className='flex w-full max-w-md items-center shadow-sm'>
              <Input
                type='email'
                placeholder='Podaj swój adres e-mail'
                className='bg-background h-14 md:h-16 rounded-r-none border-r-0 focus-visible:ring-0 text-base px-6 placeholder:text-muted-foreground'
                required
              />
              <Button
                type='submit'
                className='bg-primary hover:bg-primary/90 text-primary-foreground h-14 md:h-16 rounded-l-none px-6 md:px-8 font-semibold text-base transition-all cursor-pointer'
              >
                Subskrybować
              </Button>
            </form>
          </div>
          <div className='flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center text-foreground/60 text-xs'>
            <p className='max-w-[280px] leading-relaxed'>
              Subskrybując, wyrażasz zgodę na otrzymywanie naszych e-maili
              promocyjnych. Możesz zrezygnować z subskrypcji w dowolnym
              momencie.
            </p>
            <div className='flex gap-6 items-center'>
              <Link
                href='#'
                className='hover:text-primary transition-transform hover:scale-110'
              >
                <Twitter className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='hover:text-primary transition-transform hover:scale-110'
              >
                <Facebook className='w-5 h-5' />
              </Link>
              <Link
                href='#'
                className='hover:text-primary transition-transform hover:scale-110'
              >
                <Instagram className='w-5 h-5' />
              </Link>
            </div>
          </div>
        </div>

        <div className='border-t border-border/60 my-10' />

        {/* Middle Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 mt-16'>
          <div className='space-y-8 max-w-2xl'>
            <h2 className='text-4xl md:text-[2.75rem] font-bold tracking-tight text-foreground leading-tight'>
              Czystszy dom jest na wyciągnięcie ręki - zacznij swoją podróż już
              dziś.
            </h2>
            <Button
              size='lg'
              className='bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 font-semibold rounded-md transition-all hover:shadow-lg'
            >
              <Link href='/contact'>Skontaktuj się z nami</Link>
            </Button>
          </div>

          <div className='grid grid-cols-2 gap-8 md:pl-24 pt-4 text-base font-medium'>
            <div className='flex flex-col space-y-6'>
              <Link
                href='/'
                className='text-foreground/70 hover:text-primary transition-colors w-fit'
              >
                Dom
              </Link>
              <Link
                href='/about'
                className='text-foreground/70 hover:text-primary transition-colors w-fit'
              >
                O nas
              </Link>
              <Link
                href='/contact'
                className='text-foreground/70 hover:text-primary transition-colors w-fit'
              >
                Uzyskaj wycenę
              </Link>
            </div>
            <div className='flex flex-col space-y-6'>
              <Link
                href='/pricing'
                className='text-foreground/70 hover:text-primary transition-colors w-fit'
              >
                Plany cenowe
              </Link>
              <Link
                href='/404'
                className='text-foreground/70 hover:text-primary transition-colors w-fit'
              >
                Strona 404
              </Link>
            </div>
          </div>
        </div>

        <div className='border-t border-border/60 my-8' />

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/60 w-full pt-4'>
          <p className='text-center md:text-left'>
            © 2026 Perfect Clean - Projekt i wykonanie: getnextjstemplates .
          </p>
          <div className='flex flex-wrap justify-center items-center gap-6 md:gap-8'>
            <Link
              href='/terms'
              className='hover:text-primary transition-colors'
            >
              Warunki korzystania z usługi
            </Link>
            <Link
              href='/privacy'
              className='hover:text-primary transition-colors'
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
