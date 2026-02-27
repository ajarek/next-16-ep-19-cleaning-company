import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/data/testimonials"


const HomeInfo3 = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 py-16 px-4 md:px-8'>
      <div className='w-full flex flex-col items-center gap-4'>
        <p className='text-center text-xl font-bold bg-primary/20 text-primary px-4 py-2 rounded-full'>
          Co mówią nasi klienci
        </p>
        <h2 className='text-4xl md:text-5xl font-bold max-w-2xl text-center leading-tight'>
          Opinie zadowolonych klientów.
        </h2>
        <p className='text-center text-lg md:text-xl text-muted-foreground max-w-3xl'>
          Dowiedz się, w jaki sposób nasze usługi sprzątania odmieniły domy
          naszych klientów i przekroczyły ich oczekiwania.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-8'>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className='overflow-hidden bg-card text-card-foreground shadow-lg border-primary/10 transition-transform duration-300 hover:scale-[1.02]'
          >
            <CardContent className='p-8 flex flex-col gap-6 h-full justify-between'>
              <div className='flex flex-col gap-4 relative'>
                <Quote className='size-16 text-primary/10 absolute -top-4 -left-4' />
                <p className='text-xl italic text-muted-foreground relative z-10 pt-2 pl-2'>
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              <div className='flex items-center gap-4 mt-8 pt-6 border-t border-border'>
                <div className='w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary'>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='flex flex-col'>
                  <p className='font-bold text-lg'>{testimonial.name}</p>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <p className='text-sm text-muted-foreground'>
                      {testimonial.role}
                    </p>
                    <span className='hidden sm:inline-block w-1 h-1 bg-muted-foreground rounded-full'></span>
                    <div className='flex text-yellow-500'>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className='size-3 fill-current' />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomeInfo3
