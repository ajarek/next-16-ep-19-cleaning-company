import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import { Facebook, Instagram, Linkedin, Mail, MapPinCheckInside } from 'lucide-react'

const AboveNavbar = () => {
  return (
    <div id="above-navbar" className="flex items-center justify-between h-14 bg-primary/50 text-secondary-foreground px-10 max-lg:hidden">
        <div className="flex gap-8 lg:gap-12">
            <Button variant={'outline'}>
                <Mail/>
                <span className=" text-sm font-semibold cursor-pointer">perfect_clean@onet.pl</span>
            </Button>
            <Button variant={'outline'}>
                <MapPinCheckInside />
                <span className=" text-sm font-semibold cursor-pointer">Wielkopolska, Kołobrzeg</span>
            </Button>
        </div>
        <div className="flex items-center gap-4 lg:gap-9">
           <Instagram/>
           <Facebook/>
           <Linkedin />
           <ModeToggle/>
                
        </div>
    </div>
  )
}

export default AboveNavbar