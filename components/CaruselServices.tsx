
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function CarouselServices() {
  return (
    <div className=" flex flex-col items-center justify-center py-8 px-16 gap-8">
        <div className="w-full flex     items-center justify-between">
            <h2 className="text-3xl font-semibold">Nasze profesjonalne usługi sprzątania</h2>
            <p className="w-full  max-w-md text-lg">Poznaj nasze skuteczne usługi sprzątania, które pomogą Ci utrzymać dom w czystości i porządku.</p>
        </div>
    <Carousel className="w-full max-w-7xl">
      <CarouselContent className="-ml-1">
        {servicesData.map((service) => (
          <CarouselItem key={service.id} className="max-sm:max-w-full basis-1/2 pl-1 lg:basis-1/3">
            <div className="p-1 max-sm:max-w-full">
              <Card className="max-sm:max-w-full h-[450px] flex flex-col justify-between ">
                <CardHeader>
                  <div className="relative w-full max-sm:max-w-full h-[300px] overflow-hidden rounded-md">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
