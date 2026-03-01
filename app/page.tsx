import Header from "@/components/Header"
import Marquee from "@/components/Marquee"
import { CarouselServices } from "@/components/CaruselServices"
import HomeInfo1 from "@/components/HomeInfo1"
import HomeInfo2 from "@/components/HomeInfo2"
import HomeInfo3 from "@/components/HomeInfo3"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
export default function Page() {
  return (
    <main className='relative flex flex-col items-center justify-center '>
      <Header />
    <Marquee />
      <CarouselServices />
      <HomeInfo1 />
      <HomeInfo2 />
      <HomeInfo3 />
      <Button asChild className='fixed bottom-4 right-4 w-14 h-14 rounded-full z-50'>
        <a href='#above-navbar'>
          <ChevronUp className='size-10' />
        </a>
      </Button>
    </main>
  )
}
