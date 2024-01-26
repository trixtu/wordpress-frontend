
import React from 'react'
import Nav from './nav'
import { isEmpty } from 'lodash'

import PropTypes from 'prop-types';
import TopNavBar from './topNavbar';

const Header = ({headerMenus, header, slug, socialLinks}) => {
  
 
  if(isEmpty(headerMenus)){
    return null;
  }

  return (
      <header> 
        <TopNavBar socialLinks={socialLinks}/>
        <Nav header={header} headerMenus={headerMenus} slug={slug}/>
      </header>
  )
}

Header.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string
};

Header.defaultProps = {
  header: {},
  headerMenus: [],
  slug: ''
};


export default Header