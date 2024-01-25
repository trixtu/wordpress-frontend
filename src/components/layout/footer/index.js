import { getIconComponentByName } from '@/src/utils/icons-map';
import { isArray, isEmpty } from 'lodash'
import React from 'react'
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer = ({footer, footerMenus}) => {
  
  if(isEmpty(footerMenus)){
    return null;
  }
  
  return (
    <footer>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-t'>
        {/* copyright text */}
        <div className='mb-8 mt-5 w-full flex flex-wrap'>
          <div className='w-full md:w-1/2 lg:w-1/4'>{footer?.copyrightText ? `© ${footer?.copyrightText}`: '© trixTU 2020'}</div>
          <div className='w-full lg:w-3/4 flex justify-end'>
            {/*Mailchimp Newsletter Subscription*/}
              <NewsletterSubscribe/>

            {! isEmpty(footer?.socialLinks) && isArray(footer?.socialLinks) ? (
              <ul className='social-link flex items-center'>
                {footer.socialLinks.map((link,index)=>(
                  <li key={index} className='ml-4'>
                    <a  href={link.iconUrl}>
                      {getIconComponentByName(link.iconName)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div> 
    </footer>
  )
}

export default Footer