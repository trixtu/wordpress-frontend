
import React from 'react'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'




export default function SliderHome({ slider }) {

  const router = useRouter()

 
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
                  size={'sm'}
                  boxShadow={'md'}
                  fontSize={12}
                  textTransform={'uppercase'}
                  onClick={()=>router.push('/cifra-destinului')}
                  colorScheme={'yellow'}
                  rightIcon={<ChevronRightIcon fontSize={20}/>}
                >
                  Calculator numerologic
                </Button>
                <Button
                  size={'sm'}
                  boxShadow={'md'}
                  fontSize={12}
                  textTransform={'uppercase'}
                  onClick={()=>router.push('/ce-este-numerologia')}
                  colorScheme={'yellow'}
                  rightIcon={ <ChevronRightIcon fontSize={20}/>}
                >
                  Numerologie
                </Button>
                <Button
                  size={'sm'}
                  boxShadow={'md'}
                  fontSize={12}
                  textTransform={'uppercase'}
                  onClick={()=>router.push('/ce-este-si-cui-se-adreseaza')}
                  colorScheme={'yellow'}
                  rightIcon={<ChevronRightIcon  fontSize={20}/>}
                >
                  Consiliere pentru dezvoltare personala 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}