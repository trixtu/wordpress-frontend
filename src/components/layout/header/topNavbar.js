
import Link from 'next/link'
import React from 'react'
import { Email, Facebook, Instagram, Youtube } from '../../icons'
import { isArray, isEmpty } from 'lodash';
import { getIconComponentByName } from '@/src/utils/icons-map';
import { Container } from '@chakra-ui/react';

export default function TopNavBar({socialLinks}) {

  if(isEmpty(socialLinks)){
    return null;
  }

  return (
    
    <div  className="text-[#fff6c9] bg-cover top-navbar hidden md:block"
      style={{
        backgroundImage:
          ' url(/images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
        width: 'auto',
        height: 'auto',
      }}
    >

      <Container maxW={'container.xl'} py={1}>
        <div className='flex justify-between items-center'>
          <div >
          {! isEmpty(socialLinks) && isArray(socialLinks) ? (
                  <ul className='social-link flex items-center'>
                    {socialLinks.map((link,index)=>(
                      <li key={index} className='mr-4'>
                        <a  href={link.iconUrl} >
                          {getIconComponentByName(link.iconName)}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
            
          </div>
          <div className="">
            <Link href={'#'} className='flex items-center gap-2'>
             <Email/>
              <p className="hidden sm:block ">numerologie.contact@gmail.com</p>
            </Link>
          </div>
        </div>
      </Container>
      <div
        className="bg-contain  h-[5px]"
        style={{
          backgroundImage: ' url(/images/53f3ee01b5165a2abdd4c6d8d9123119.jpg)',
          width: 'auto',
        }}
      />

    </div>
    
  )
}