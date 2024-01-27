
import React from 'react'
import Image from 'next/image'
import { Button, Container } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function SliderHome({ slider }) {
  return (
      <div className='border' >
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-3 md:grid grid-cols-6">
            <div className="col-span-4 w-full text-center p-2">
              <Image
                src={'/images/key-2471007.jpg'}
                alt=""
                width={800}
                height={600}
                priority
                loading="eager"
              />
            </div>
            <div className=" col-span-2 w-full">
              <div className="flex flex-col items-left justify-center gap-4 p-2">
                <Button
                  href={'/calculator-numerologic/cifra-destinului'}
                  colorScheme={'yellow'}
                >
                  Calculator numerologic
                  <ChevronRightIcon fontSize={24}/>
                </Button>
                <Button
                  href={'/numerologie/ce-este-numerologia'}
                  colorScheme={'yellow'}
                >
                  Numerologie
                  <ChevronRightIcon fontSize={24}/>
                </Button>
                <Button
                  href={'/consiliere/cui-se-adreseaza'}
                  colorScheme={'yellow'}
                >
                  Consiliere pentru dezvoltare personala
                  <ChevronRightIcon  fontSize={24}/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}