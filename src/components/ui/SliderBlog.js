
import { isEmpty, map } from 'lodash'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUser } from "react-icons/fa";
import { BiSolidChat } from "react-icons/bi";

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from '../../components/image';
import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Link, Text } from '@chakra-ui/react';

const SliderBlog = ({blogs}) => {

if(isEmpty(blogs)){
  return null;
}

const breakpoints = {
  // Breakpoint pentru dispozitive mobile cu o singură vedere
  600: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  // Breakpoint pentru dispozitive mici cu 2 slide-uri
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // Breakpoint pentru dispozitive mai mari cu 3 slide-uri
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

console.log(blogs)
  return (
    <>
      <Heading as={'h2'} textAlign={'center'} padding={4}>Materiale Informative</Heading>
      <Swiper 
        
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
      
        }}
        modules={[FreeMode, Pagination,Navigation]}
        className='mySwiper'
        breakpoints={breakpoints}
        
      
      >
        
        {blogs.map(blog=>(
        <SwiperSlide className='py-4 px-1'>
          <Box border={1} paddingBottom={4} borderColor={'#ececec'} borderRadius={10} overflow={'hidden'} boxShadow={'0 4px 8px rgba(0, 0, 0, 0.1)'} >
         
            <Image { ...blog?.node.featuredImage?.node } width="400" height="305" layout="fill" containerClassNames="w-96 sm:-w-[600px] md:w-[400px] h-56 sm:h-338px md:h-225px" title={blog?.node.title ?? ''}/>
         
            <Flex justifyContent={'space-between'} padding={2}>
              <Button variant='outline' border={'none'} _hover={'none'} leftIcon={<FaUser fontSize={'18px'} color='#fac482'/>} textColor={'#888787'} fontWeight={'300'}>{`${blog?.node?.author?.node?.name}`}</Button>
              <Button variant='outline' border={'none'} _hover={'none'} leftIcon={<BiSolidChat fontSize={'18px'} color='#fac482'/>} textColor={'#888787'} fontWeight={'300'}>{`Comments${' '}${blog?.node?.commentCount === null ? 0 : blog?.node?.commentCount}`}</Button>
            </Flex>

            <Text padding={2} fontSize='2xl'>{blog.node.title}</Text>
           
            <Link href={`/blog/${blog?.node?.slug}/`} fontSize={12} fontWeight={'bold'} color={'#fac482'} textTransform={'uppercase'} padding={2} >Citește mai mult...</Link>
           </Box>

        </SwiperSlide>
        ))}
        </Swiper>
    </>
  )
  
}

export default SliderBlog


