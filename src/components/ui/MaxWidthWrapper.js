import { Container } from "@chakra-ui/react";

export default function MaxWidthWrapper({children}){
  return(
    <Container maxW={'1200px'} >
      {children}
    </Container>
  )
}