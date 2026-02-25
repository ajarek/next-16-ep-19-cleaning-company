

const Marquee = () => {
  const marqueeItems = [
    { id: 1, text: "Poznaj nasze wydajne usługi sprzątania!" },
    { id: 2, text: "Ekologiczne produkty dla zdrowszego środowiska w domu!" },
    { id: 3, text: "Darmowa wycena! Skontaktuj się z nami już dziś, aby umówić się na sprzątanie!" },
    { id: 4, text: "Specjalne zniżki na usługi regularnego sprzątania!" },
    { id: 5, text: "Zarezerwuj już teraz i otrzymaj 10% zniżki na pierwszą usługę sprzątania!" },
  ]

  return (
    <div className='relative flex py-2 overflow-x-hidden bg-primary/50 border-y border-black/5'>
      <div className='flex animate-marquee whitespace-nowrap gap-10'>
        {/* First set of items */}
        {marqueeItems.map((item) => (
          <div key={item.id} className='flex items-center gap-8 px-4'>
            <h2 className='marquee-text text-2xl font-bold  tracking-wider'>
              {item.text}
            </h2>
            <span className="text-2xl">🧹</span>
          </div>
        ))}
        {/* Duplicate set of items for seamless looping */}
        {marqueeItems.map((item) => (
          <div key={`dup-${item.id}`} className='flex items-center gap-8 px-4'>
            <h2 className='marquee-text text-2xl font-bold  tracking-wider'>
              {item.text}
            </h2>
            <span className="text-2xl ">🧹</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
