import {servicesData} from '@/data/servicesData'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

const ListServices = () => {
  return (
    <div id='services' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {servicesData.map((service) => (
              <Card key={service.id} className="h-[400px] flex flex-col justify-between ">
                <CardHeader>
                  <div className='relative w-full h-[250px]'>
                  <Image src={service.image} alt={service.name} fill className='rounded-md object-cover' />
                  </div>
                <CardTitle className="text-2xl font-semibold">{service.name}</CardTitle>
                </CardHeader>
                <CardFooter className="w-full flex items-end justify-end">
                    <Button asChild className="w-fit h-12 flex items-center text-xl gap-2 px-8 cursor-pointer">
                      <Link href={`/service-id/${service.id}`}>
                      Dowiedz się więcej<MoveRight className="size-5" />
                      </Link>
                      </Button>
                </CardFooter>
              </Card>
        ))}
    </div>
  )
}

export default ListServices