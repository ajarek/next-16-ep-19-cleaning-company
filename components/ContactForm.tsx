"use client"
import React from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.success("Wiadomość wysłana pomyślnie!")
        e.currentTarget.reset()
    }
  return (
    <div id="contact" className= 'w-full mx-auto p-4 md:p-8'>
      <div className='flex flex-col md:flex-row gap-8 md:gap-12 bg-card border border-border rounded-2xl overflow-hidden shadow-sm'>
        {/* Left Column: Contact Info */}
        <div className='relative w-full md:w-[45%] bg-[#cafd6e] p-8 md:p-12 pb-24 overflow-hidden md:rounded-r-none rounded-2xl md:rounded-l-2xl'>
          <div className='relative z-10 flex flex-col gap-10'>
            <div>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>
                Informacje kontaktowe
              </h2>
              <p className='text-gray-800 text-sm leading-relaxed max-w-sm'>
                Stworzymy wysokiej jakości treści, do których będzie można
                linkować, i zbudujemy co najmniej 40 treści o wysokim
                autorytecie.
              </p>
            </div>

            <div className='flex flex-col gap-8 mt-4'>
              <div className='flex items-start gap-4 text-gray-900'>
                <Phone className='size-6 mt-1' strokeWidth={1.5} />
                <div className='flex flex-col text-sm font-medium'>
                  <span>+48 500 500 500</span>
                  <span>+48 502 222 222</span>
                </div>
              </div>

              <div className='flex items-center gap-4 text-gray-900'>
                <Mail className='size-6' strokeWidth={1.5} />
                <span className='text-sm font-medium'>support@perfect-clean.com</span>
              </div>

              <div className='flex items-center gap-4 text-gray-900'>
                <MapPin className='size-6' strokeWidth={1.5} />
                <span className='text-sm font-medium'>
                  Wielkopolska 2, Kołobrzeg, 78-100
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Circle Bottom Right */}
          <div className='absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tr from-[#dfffa3] to-transparent rounded-full opacity-60 z-0'></div>
        </div>

        {/* Right Column: Form */}
        <div className='w-full md:w-[55%] p-4 py-8 md:py-12 md:pr-12 md:pl-4 bg-card'>
          <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 w-full'>
            <div>
              <Input
                type='text'
                placeholder='Imię i nazwisko *'
                className='h-14 border-input bg-transparent rounded-md focus-visible:ring-1 focus-visible:ring-ring shadow-none text-base px-4'
                required
              />
            </div>
            <div>
              <Input
                type='tel'
                placeholder='Numer telefonu *'
                className='h-14 border-input bg-transparent rounded-md focus-visible:ring-1 focus-visible:ring-ring shadow-none text-base px-4'
                required
              />
            </div>
            <div>
              <Input
                type='email'
                placeholder='Adres e-mail *'
                className='h-14 border-input bg-transparent rounded-md focus-visible:ring-1 focus-visible:ring-ring shadow-none text-base px-4'
                required
              />
            </div>
            <div>
              <Textarea
                placeholder='Napisz tutaj swoją wiadomość'
                className='min-h-[160px] resize-none border-input bg-transparent rounded-md focus-visible:ring-1 focus-visible:ring-ring shadow-none text-base p-4'
              />
            </div>

            <Button
              type='submit'
              className='self-start mt-2 px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-semibold text-sm'
            >
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
