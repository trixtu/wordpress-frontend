import { Heading, Text } from '@chakra-ui/react'
import React from 'react'


export default function ContactMe() {
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
      <Heading as={'h2'} fontSize={'2xl'} fontWeight={500} marginBottom={3}>
        Contactează-mă
      </Heading>
      {/* <Typography variant="subtitle1" marginBottom={2}>
        Relații comenzi și livrare
      </Typography> */}
      {/* <Typography variant="subtitle2">
        Telefon: <span>0754 244 333</span>
      </Typography> */}
      <Text >
        E-mail: <span>numerologie.contact@gmail.com</span>
      </Text>
    </div>
  )
}