import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 p-4 gap-4 place-items-center'>
      <div>
        <Image
          src='/about-1.png'
          alt='Profesjonalne sprzątanie - About'
          width={680}
          height={512}
          className='object-cover object-center rounded-lg'
          priority
        />
      </div>
      
      <div className='flex flex-col items-start justify-center'>
        <p className='text-primary text-lg font-semibold mb-2'>Kim jesteśmy</p>
        <h1 className='text-4xl md:text-6xl font-bold text-primary mb-4'>
          Więcej czasu na życie, pracę i grę
        </h1>
        <p className='text-xl md:text-2xl text-muted-foreground max-w-2xl'>
          Jesteśmy firmą sprzątającą, która oferuje profesjonalne usługi sprzątania
          dla domów i firm. Nasz zespół składa się z doświadczonych i
          wykwalifikowanych pracowników, którzy dbają o każdy szczegół i
          zapewniają najwyższą jakość usług.
        </p>
      </div>
    </section>
  )
}

export default AboutHero