"use client"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { toast } from "sonner"
import MotionDiv from "./MotionDiv"

const GetQuote = () => {
  const [regularCleaning, setRegularCleaning] = useState<boolean>(false)
  const [moveInMoveOut, setMoveInMoveOut] = useState<boolean>(false)
  const [ecologicalCleaning, setEcologicalCleaning] = useState<boolean>(false)
  const [deepCleaning, setDeepCleaning] = useState<boolean>(false)
  const [removalAndStorage, setRemovalAndStorage] = useState<boolean>(false)
  const [cleaningAfterRenovation, setCleaningAfterRenovation] =
    useState<boolean>(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")

    toast("Zapytanie o wycenę zostało wysłane!", {
      description: `Wysłano dane dla: ${name}. Skontaktujemy się z Tobą pod numerem ${phone} lub adresem ${email}.
      ${regularCleaning ? "Regularne czyszczenie: Tak" : ""}\n
      ${moveInMoveOut ? "Wprowadzanie się / Wyprowadzanie się: Tak" : ""}\n
      ${ecologicalCleaning ? "Ekologiczne czyszczenie: Tak" : ""}\n
      ${deepCleaning ? "Głębokie czyszczenie: Tak" : ""}\n
      ${removalAndStorage ? "Usuwanie i przechowywanie: Tak" : ""}\n
      ${cleaningAfterRenovation ? "Sprzątanie po remoncie: Tak" : ""}\n
      `,
    })
    e.currentTarget.reset()
    setRegularCleaning(false)
    setMoveInMoveOut(false)
    setEcologicalCleaning(false)
    setDeepCleaning(false)
    setRemovalAndStorage(false)
    setCleaningAfterRenovation(false)
  }
  return (
   
    <MotionDiv className='w-full max-w-[250px] sm:max-w-[400px] absolute top-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-10 right-0 flex flex-col items-start justify-center p-4 text-center bg-background shadow-2xl rounded-lg gap-4'>
      <h2 className='text-base sm:text-2xl font-bold sm:mb-4 mb-0'>Uzyskaj bezpłatną wycenę</h2>
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col items-start gap-4'
      >
        <Input type='text' name='name' placeholder='Imię i Nazwisko' required />
        <Input type='text' name='phone' placeholder='Numer Telefonu' required />
        <Input type='text' name='email' placeholder='Adres e-mail' required />
        <div className='w-full flex flex-col gap-4'>
          <FieldSet>
            <FieldLegend
              variant='label'
              className='text-left text-xl font-semibold mb-2'
            >
              Opcje serwisu *
            </FieldLegend>

            <FieldGroup className='w-full flex flex-row max-sm:flex-col gap-4'>
              <div className='w-full flex flex-col gap-4'>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='regular-cleaning'
                    name='regular-cleaning'
                    defaultChecked={regularCleaning}
                    checked={regularCleaning}
                    onCheckedChange={() => setRegularCleaning(!regularCleaning)}
                  />
                  <FieldLabel
                    htmlFor='regular-cleaning'
                    className='font-normal cursor-pointer'
                  >
                    Regularne czyszczenie
                  </FieldLabel>
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='move-in-move-out'
                    name='move-in-move-out'
                    defaultChecked={moveInMoveOut}
                    checked={moveInMoveOut}
                    onCheckedChange={() => setMoveInMoveOut(!moveInMoveOut)}
                  />
                  <FieldLabel
                    htmlFor='move-in-move-out'
                    className='text-left font-normal cursor-pointer'
                  >
                    Wprowadzanie się / Wyprowadzanie się
                  </FieldLabel>
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='ecological-cleaning'
                    name='ecological-cleaning'
                    defaultChecked={ecologicalCleaning}
                    checked={ecologicalCleaning}
                    onCheckedChange={() =>
                      setEcologicalCleaning(!ecologicalCleaning)
                    }
                  />
                  <FieldLabel
                    htmlFor='ecological-cleaning'
                    className='font-normal cursor-pointer'
                  >
                    Ekologiczne czyszczenie
                  </FieldLabel>
                </Field>
              </div>
              <div className='w-full flex flex-col gap-4'>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='deep-cleaning'
                    name='deep-cleaning'
                    defaultChecked={deepCleaning}
                    checked={deepCleaning}
                    onCheckedChange={() => setDeepCleaning(!deepCleaning)}
                  />
                  <FieldLabel htmlFor='deep-cleaning' className='font-normal cursor-pointer'>
                    Głębokie czyszczenie
                  </FieldLabel>
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='removal-and-storage'
                    name='removal-and-storage'
                    defaultChecked={removalAndStorage}
                    checked={removalAndStorage}
                    onCheckedChange={() =>
                      setRemovalAndStorage(!removalAndStorage)
                    }
                  />
                  <FieldLabel
                    htmlFor='removal-and-storage'
                    className='text-left font-normal cursor-pointer'
                  >
                    Usuwanie i przechowywanie
                  </FieldLabel>
                </Field>
                <Field orientation='horizontal'>
                  <Checkbox
                    id='cleaning-after-renovation'
                    name='cleaning-after-renovation'
                    defaultChecked={cleaningAfterRenovation}
                    checked={cleaningAfterRenovation}
                    onCheckedChange={() =>
                      setCleaningAfterRenovation(!cleaningAfterRenovation)
                    }
                  />
                  <FieldLabel
                    htmlFor='cleaning-after-renovation'
                    className='font-normal cursor-pointer'
                  >
                    Sprzątanie po remoncie
                  </FieldLabel>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </div>
        <Button type='submit' className='w-fit px-6 p-2 cursor-pointer'>
          Wyślij zapytanie
        </Button>
      </form>
    </MotionDiv>
    
  )
}

export default GetQuote
