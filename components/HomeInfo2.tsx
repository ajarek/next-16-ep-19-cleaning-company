import {homeInfo2Data} from '@/data/homeInfo2Data'
import { Card } from './ui/card'

const HomeInfo2 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className='text-center text-2xl font-bold bg-primary/50 px-4 py-2 rounded-full'>
        Dlaczego warto wybrać nasze usługi sprzątania?
      </p>
      <h2 className='text-center text-5xl font-bold'>
       Wyjątkowa obsługa za każdym razem
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {homeInfo2Data.map((item) => (
          <Card key={item.id} className='flex flex-col items-center justify-center gap-4 p-8'>
            <h3 className='text-2xl font-bold bg-primary/50 px-4 py-2 rounded-full'>{item.id}</h3>
            <p className='text-center text-xl'>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HomeInfo2
