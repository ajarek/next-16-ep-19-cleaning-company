import Header from '@/components/Header'
import ListServices from '@/components/ListServices'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine, ChevronUp } from 'lucide-react'


const ServicesPage = () => {
  return (
    <main className='relative min-h-screen w-full  flex flex-col gap-8'>
       <Button asChild className='absolute top-4 left-4 w-fit h-14  z-50'>
        <a href='#services'>
          <ArrowDownToLine className='size-10' /><span className='hidden md:block text-xl font-bold'>Usługi</span>
        </a>
      </Button>
      <Header />
      <ListServices />
       <Button asChild className='fixed bottom-4 right-4 w-14 h-14 rounded-full z-50'>
        <a href='#above-navbar'>
          <ChevronUp className='size-10' />
        </a>
      </Button>
    </main>
  )
}

export default ServicesPage