import { getIconComponentByName } from '@/src/utils/icons-map';
import { isArray, isEmpty } from 'lodash'
import React from 'react'
import NewsletterSubscribe from './NewsletterSubscribe';
import { Box, Container, Divider, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import ContactMe from '../../ui/ContactMe';
import Link from 'next/link';
import TrimiteMesaj from '../../ui/TrimiteMesaj';

const Footer = ({footer, footerMenus}) => {
  
  if(isEmpty(footerMenus)){
    return null;
  }
  
  return (
    <footer  
      className="bg-cover bg-top h-full w-full"
      style={{
        backgroundImage:
          ' url(/images/copper-color-background-with-blur-and-smooth-texture-for-festive-metallic-graphic-design-element-vector.jpg)',
        }}
    >
      <div
        className="bg-contain  h-[5px]"
        style={{
          backgroundImage: ' url(/images/53f3ee01b5165a2abdd4c6d8d9123119.jpg)',
          width: 'auto',
        }}
      />
      
      <Container maxW={'1200px'}>

        <Grid 
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6} 
          marginBottom={8}
        >
          <GridItem>
            <div className='mt-10 mr-10  text-neutral-900 pl-4 flex flex-col'>
              {! isEmpty(footer?.socialLinks) && isArray(footer?.socialLinks) ? (
                <ul className='social-link flex items-center mb-4'>
                  {footer.socialLinks.map((link,index)=>(
                    <li key={index} className='ml-4'>
                      <a  href={link.iconUrl}>
                        {getIconComponentByName(link.iconName)}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {/*Mailchimp Newsletter Subscription*/}
              <NewsletterSubscribe/>
            </div>
          </GridItem>

          <GridItem >
            <ContactMe />
          </GridItem>
          <GridItem>
            <TrimiteMesaj />
          </GridItem>
        </Grid>
        <Divider mt={14}/>
    
        <SimpleGrid 
          columns={{ base: 1, md: 2}}
          width={'auto'}
        >
          <Box paddingY={4}>
            <div className="flex gap-4">
              <Link className="hover:underline" href={'#'}>
                Politica cookie
              </Link>
              <Link className="hover:underline" href={'/politica-de-confidentialitate-2'}>
                Politica de confidențialitate
              </Link>
              <Link className="hover:underline" href={'#'}>
               Termeni și condiții
              </Link>
            </div>
          </Box>
          <Box textAlign={'right'} paddingY={4}>
            &#169; trixTU
          </Box>
        </SimpleGrid>
      </Container>

    </footer>
  )
}

export default Footer
