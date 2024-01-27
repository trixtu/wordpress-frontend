import React from 'react'
// import ContactForm from './contact-form'
import { Heading } from '@chakra-ui/react'
import ContactForm from './ContactForm'

export default function TrimiteMesaj() {
  return (
    <div 
      className="
        mt-10 
        mr-10 
        text-neutral-900 
        border-l-4 
        border-[#f0ba27] 
        pl-4 
        flex 
        flex-col 
        min-h-full
      "
    >
      <Heading as={'h2'} variant="h5" fontSize={'2xl'}   fontWeight={500} marginBottom={3}>
        Trimite-mi un mesaj
      </Heading>
      <ContactForm />
    </div>
  )
}