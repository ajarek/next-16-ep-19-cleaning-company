  
import {servicesData} from '@/data/servicesData'
import Image from 'next/image'

const ServiceId = async ({params}: {params: Promise<{id: string}>}) => {
  const{id} =await params
  const serviceDetails = servicesData.find(dt=>dt.id===+id)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center'>
      <div className='relative w-full h-[500px] '>
        <Image src={serviceDetails?.image || ""} alt={serviceDetails?.name || ""} width={500} height={500} className='w-full h-full object-cover rounded-md' />
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-bold'>{serviceDetails?.name}</p>

        <p>{serviceDetails?.description}</p>
        <p>{serviceDetails?.characteristics.map((char,index)=>(
          <span key={index}>{char}<br/></span>
        ))}</p>
        <p>{serviceDetails?.process.map((char,index)=>(
          <span key={index}>{char}<br/></span>
        ))}</p>

        <div className='flex gap-4'>
          <p className='text-2xl font-bold line-through text-gray-500'>{serviceDetails?.price}zł</p>
          <p className='text-2xl font-bold'>{serviceDetails?.discountedPrice}zł</p>
        </div>
          <button className='bg-primary text-white px-4 py-2 rounded-md'>Zarezerwuj teraz</button>
      </div>
     
    </div>
  )
}

export default ServiceId