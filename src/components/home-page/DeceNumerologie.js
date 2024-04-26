import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";



export default function DeceNumerologie(){

  
  return (
    <div className="my-10">
      <Heading as={'h2'} textAlign={'center'} mb={4}>
        De ce NUMEROLOGIE?
      </Heading>
      
      <Text mb={4} textAlign={'inherit'}>Numerologia este un sistem de credințe care sugerează că numerele au semnificații speciale și pot influența viața umană și evenimentele din lumea înconjurătoare. </Text>
      <Text>Iată câteva motive pentru care oamenii ar putea fi atrași de numerologie:</Text>
      <Text><strong>1 Găsirea sensului:</strong> Numerologia oferă un cadru pentru a înțelege viața și evenimentele sale. Mulți oameni caută sens și coerență în experiențele lor, iar numerologia le poate oferi un sistem de referință.</Text>
      <Text><strong>2 Planificare și predicție:</strong> Unii adepți ai numerologiei cred că această practică poate oferi informații despre viitor sau potențiale evenimente. Ei o pot folosi pentru a face alegeri informate sau pentru a anticipa momente importante în viața lor.</Text>
      <Text><strong>3 Dezvoltare personală:</strong> Numerologia poate fi folosită pentru auto-descoperire și dezvoltare personală. Prin înțelegerea numerelor asociate cu numele sau data nașterii, oamenii pot dobândi perspective asupra personalității, talentelor și slăbiciunilor lor.</Text>
      <Text><strong>4 Conexiuni spirituale:</strong> Pentru unii, numerologia are un aspect spiritual. Numerele pot fi considerate simboluri care conectează oamenii la forțe universale sau divine.</Text>
      <Text><strong>5 Explorare și curiozitate:</strong> Cei care au o minte curioasă sau doresc să exploreze domenii neconvenționale găsesc în numerologie o modalitate de a-și satisface interesul. Ei pot fi fascinați de legătura dintre numere și realitate.</Text>
      <Text><strong>6 Consiliere și orientare:</strong> Numerologia poate fi folosită ca instrument de consiliere pentru a ghida oamenii în diferite domenii ale vieții, cum ar fi relațiile, cariera sau deciziile personale.</Text>
      <Text>În general, numerologia oferă o perspectivă alternativă asupra lumii, permițând oamenilor să exploreze aspecte pe care știința convențională poate să nu le abordeze în mod direct. Pentru cei care găsesc în numerologie un sens sau o direcție, aceasta poate fi un instrument puternic pentru transformare și autocunoaștere.</Text>
      
      <SimpleGrid minChildWidth='240px' spacing='30px'>
      <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/numerologie-sternzeichen-stories-ys8qztljjyg-unsplash.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Data de naștere</Heading>
          </a>
        </Box>
        
        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/numarul-cosmic.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numărul cosmic</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/numar-karmic.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numărul karmic</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/maester-number.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numere maestre</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/lucky-numbers.png'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numere norocoase</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/adn.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numere ereditare</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/numarul-activ.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numarul activ</Heading>
          </a>
        </Box>

        <Box className="trx-column">
          <a href="/contact/programeaza-te" className="relative">
            <div className="elementor-background-overlay"></div>
            <Image
              width={'100%'}
              height={200}
              objectFit='cover'
              src='/images/numere-dominante.jpg'
              alt=''
            />
            <Heading position={'absolute'} width={'100%'} top={'70%'} textAlign={'center'} color={'#fff'} as={'h4'} fontSize={'22px'} fontWeight={'500'}>Numere dominante</Heading>
          </a>
        </Box>


      </SimpleGrid>
    </div>
  );
}