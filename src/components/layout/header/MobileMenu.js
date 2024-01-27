import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Link, useDisclosure } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa6"
import Logo from "./Logo"

const MobileMenu = ({headerMenus}) => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);


  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const toggleSubMenu = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return(
    <>
      <Link ref={btnRef} onClick={onOpen} borderRadius={5} p={2}>
        <FaBars size={30} color="#333"/>
      </Link>

      <Drawer 
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base:'full', md:'xs'}}
        allowPinchZoom
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size={'lg'}/>
          <DrawerHeader><Logo /></DrawerHeader>
          <Divider/>
          <DrawerBody overflowY={'scroll'}>
            <Flex direction="column" align="left" >
            {headerMenus && headerMenus.map((item,index)=>(
              <React.Fragment key={index}>
                {item?.node?.childItems?.edges?.length > 0 ? (
                  <Flex
                    textTransform={'uppercase'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    px={'4'}
                    py={'2'}
                    cursor="pointer"
                    _hover={{ textDecoration: "none", bg: "antracitGri.600", color:"#a9d0c6" }}
                    onClick={()=> toggleSubMenu(index)}
                  >
                    {item?.node?.label} {openSubmenuIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </Flex>
                ) : (
                  <Link px={4} py={2} textTransform={'uppercase'}  href="/"   _hover={{ textDecoration: "none" }}>
                    {item?.node?.label}
                  </Link>
                )}
                {openSubmenuIndex === index  && item?.node?.childItems?.edges?.length > 0  && (
                  <Flex direction="column" pl={6} >
                    {item?.node?.childItems?.edges?.map((subMenuItem, subIndex) => (
                      <Link
                        textTransform={'uppercase'}
                        key={subIndex}
                        href={subMenuItem?.node?.path}
                        p={2}
                        _hover={{ textDecoration: "none",textColor:"#a9d0c6" }}
                      >
                        {subMenuItem?.node?.label}
                      </Link>
                    ))}
                  </Flex>
                )}
              </React.Fragment>
            ))}
            
            </Flex>
          </DrawerBody>
          <Divider/>
          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export default MobileMenu