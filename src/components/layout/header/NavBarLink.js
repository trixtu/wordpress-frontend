import { isCustomPageUri } from "@/src/utils/slug";
import { Box, Flex } from "@chakra-ui/react";
import { debounce } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBarLink = ({headerMenus}) => {
  const [colorMenu, setColorMenu] = useState(null);

  const toggleColorMenu = debounce((index) => {
    setColorMenu((prevIndex) => (prevIndex === index ? null : index));
  },0)

  const insertColorMenu = debounce((index) => {
    setColorMenu((prevIndex) => (prevIndex === index ? null : index));
  },0)

  const router = useRouter()
  
  return (
    <>
      {/* desktop */}
      <Flex 
        alignItems={'center'} 
        justifyContent={'center'} 
        fontSize={'md'} 
        fontWeight={'300'}
        position={'relative'}
       
      >
        {headerMenus && headerMenus.map((item,index)=>{
          if(!isCustomPageUri(item?.node?.label)){
            return(
              <Flex 
              className="nav__menu-item"
              key={index} 
              alignItems={'center'} 
              justifyItems={'center'} 
              borderTop={1}
              onMouseEnter={()=>toggleColorMenu(index)}
              onMouseLeave={()=>insertColorMenu(index)}
             
            >
              <Box 
                _hover={{textDecoration:'none',bgColor:'#ececec'}}
                bgColor={colorMenu === index && '#ececec'}
                px={3}
                py={1}>
                <Link href={item?.node?.path}>
                  <Flex alignItems={'center'} gap={1} textTransform={'uppercase'} fontSize={'sm'} py={1}>  
                    {item?.node?.label}
                    {item?.node?.childItems?.edges?.length > 0 && <FaChevronDown size={10}/>}
                  </Flex>
                </Link>
              </Box>
              {item?.node?.childItems?.edges?.length > 0 && (
                <ul 
                  className="
                    nav__submenu 
                    absolute 
                    border-l
                    border-r
                    border-b
                    border-[#ececec]
                    w-[350px] 
                    px-2 
                    py-2 
                    shadow-sm 
                    rounded-sm 
                    bg-[#ececec] 
                    z-50 
                    top-[35px]
                  "
                  
                >
                  {item?.node?.childItems?.edges?.length > 0 && item?.node?.childItems?.edges.map((submenu, index) => (
                    <Link 
                      key={index} 
                      href={submenu?.node?.path}
                      _hover={{textDecoration:'none'}}
                    >
                      <Box
                        className={classNames(
                          submenu.current
                            ? 'text-[#0b2f16]'
                            : 'text-gray-900 font-semibold hover:text-[#0b2f16]',
                          'nav__submenu-item'
                        )}
                        fontWeight={'300'}
                        px={1}
                        py={1}
                      >
                        {submenu?.node?.label}
                      </Box>
                    </Link>
                ))}
                
              </ul>
              )}
              </Flex>
            ) 
          }                 
        })}
        {/* <Flex 
          className="nav__menu-item"   
          alignItems={'center'} 
          justifyItems={'center'} 
          borderTop={1}      
        >
            <Box 
              _hover={{textDecoration:'none',bgColor:'#fff'}}
              px={3}
              py={1}
            >
              <Flex alignItems={'center'} gap={1} textTransform={'uppercase'} fontSize={'sm'} py={1}>
                <Link href={'/blog/'}>Blog</Link>
              </Flex>
            </Box>
        </Flex> */}
      </Flex>
      {/* mobile */}
    </>
  )
}

export default NavBarLink;