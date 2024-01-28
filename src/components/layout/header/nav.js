import { isCustomPageUri } from '@/src/utils/slug';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import NavSearch from '../../search/nav-search';
import { Box, Button, Text } from '@chakra-ui/react';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import Search from './Search';
import NavBarLink from './NavBarLink';

const Nav = ({headerMenus, header, slug}) => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
      const offset = window.scrollY;  

      if (offset > 200) {
          setScrolled(true);
      }
      if( offset < 1){
        setScrolled(false)
      }
  }
  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
  })

  
  return (
    <Box boxShadow='base' className={scrolled ? "fixed top-0 w-full z-50": null} transition={'ease-in-out'}>
    <nav className="bg-white">
    <MaxWidthWrapper>
          {/* Mobile */}
          <div className='md:hidden'>
            <div className='flex items-center h-10 pt-4 justify-between '>
              <Logo />
              <MobileMenu headerMenus={headerMenus}/>
            </div>
            <NavSearch/>
       
          </div>
          {/* end mobile */}

          {/* tablet */}
          <div className='hidden md:block lg:hidden'>
            <div className='flex items-center h-20 justify-between '>
              <Logo />
              <NavSearch/>
              <MobileMenu headerMenus={headerMenus}/>
            </div>
          </div>
          {/* end tablet */}

          {/* Desktop */}
          <div className='hidden lg:flex md:h-16 items-center justify-between gap-2'>
            <Logo />
            <NavSearch/>

          </div>
        </MaxWidthWrapper>
        <div className='hidden lg:block bg-[#fff] border-borderColor'>
          <MaxWidthWrapper>
            <NavBarLink headerMenus={headerMenus}/>
          </MaxWidthWrapper>
        </div>
        {/* end descktop */}
    </nav>
    </Box>
  )
}
Nav.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string
};

Nav.defaultProps = {
  header: {},
  headerMenus: [],
  slug: ''
};

export default Nav

    