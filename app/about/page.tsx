import AboutHero from '@/components/AboutHero'
import AboutTeam from '@/components/AboutTeam'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import React from 'react'

const AboutPage = () => {
  return (
    <main className='relative flex flex-col items-center justify-center gap-4'>
      <AboutHero />
      <AboutTeam />
       <Button asChild className='fixed bottom-4 right-4 w-14 h-14 rounded-full z-50'>
        <a href='#above-navbar'>
          <ChevronUp className='size-10' />
        </a>
      </Button>
    </main>
  )
}

export default AboutPage