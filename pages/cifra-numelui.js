import client from "@/src/apollo/client"
import Layout from "@/src/components/layout"
import { GET_PAGE } from "@/src/queries/pages/get-page"
import { handleRedirectsAndReturnData } from "@/src/utils/slug"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Collapse, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaHome } from "react-icons/fa"

export default function CifraNumelui({data}) {
  const router = useRouter()
  const [nume, setNume] = useState('')
  const [prenume, setPrenume] = useState('')
  const [resultNume, setResultNume] = useState(null)
  const [resultPrenume, setResultPrenume] = useState(null)

  function letterValue(str) {
    var anum = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 6,
      p: 7,
      q: 8,
      r: 9,
      s: 1,
      t: 2,
      u: 3,
      v: 4,
      w: 5,
      x: 6,
      y: 7,
      z: 8,
      "":0,
    }
    if (str?.length === 1) return anum[str] || ' '
    return str?.split('').map(letterValue)
  }

  function handleClickCalculeaza() {
    let sumPrenumeFinal = 0

    // Funcție care elimină spațiile și convertește restul caracterelor în numere
  function processName(name) {
    return letterValue(name.replace(/\s/g, '').toLowerCase());
  }


  // Procesează numele și prenumele pentru a elimina spațiile
  const processedFirstPrenumeArr = processName(prenume);

    if (processedFirstPrenumeArr.length >= 2) {
      const firstSumPrenume = processedFirstPrenumeArr.reduce(
        (acumulator, currentValue) => acumulator + currentValue,
        0
      )

      console.log(firstSumPrenume)
      if (firstSumPrenume > 9) {
        const secondSumPrenumeArr = String(firstSumPrenume)
          .split('')
          .map((num) => {
            return Number(num)
          })
        const secondSumPrenume = secondSumPrenumeArr.reduce(
          (acumulator, currentValue) => acumulator + currentValue,
          0
        )

        if (secondSumPrenume > 9) {
          const thirdSumPrenumeArr = String(secondSumPrenume)
            .split('')
            .map((num) => {
              return Number(num)
            })
          const thirdSumPrenume = thirdSumPrenumeArr.reduce(
            (acumulator, currentValue) => acumulator + currentValue,
            0
          )
          sumPrenumeFinal = thirdSumPrenume
        } else {
          sumPrenumeFinal = secondSumPrenume
        }

      }else{
        sumPrenumeFinal = firstSumPrenume
      }
    }
  
    setResultPrenume(sumPrenumeFinal)
  }
  
  

  return (
    <>
      <Head>
        <title>
          Calculator cifra nume, introdu nume, prenume si calculeaza |
          Numerologie
        </title>
      </Head>
    <Layout data={data}>
    
      <Breadcrumb marginY={2} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'><Flex alignItems={'center'} gap={2}><FaHome />Acasă</Flex></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Cifra Numelui</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

        <Heading as={'h1'} fontSize={'2xl'} marginBottom={2}>
          Cifra numelui
        </Heading>
        <Box bg={'#e5e5e5'} padding={4} >
          
            <FormControl marginBottom={4}>
              <FormLabel>Introdu numele tau</FormLabel>
              <Input
                backgroundColor={'#fff'}
                size="sm"
                value={prenume}
                placeholder='Introdu numele tau'
                onChange={(ev) => setPrenume(ev.target.value)}
              />
            </FormControl>

          <Button
            onClick={handleClickCalculeaza}
            colorScheme={'yellow'}
           
          >
            Calculeaza
          </Button>
        </Box>
        <Collapse
          in={resultPrenume}
          transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}
        >
          <Box
            style={{
              backgroundImage:
                ' url(/images/360_F_101044570_T9unk816eB6uiN0J29omibuDfzDkpxu9.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            p="20px"
            color="#fff6c9"
            mt="4"
            rounded="md"
            shadow="md"
            fontSize={'2xl'}
          >
            {resultPrenume > 0 && (
              <Heading as="h4" size="xl" noOfLines={1} count={1}>
                Cifra numelui este:{' '}
                <span className="font-semibold text-black">
                  {resultPrenume}
                </span>
              </Heading>
            )}
          </Box>
        </Collapse>
     
    </Layout>
    </>
  )
}

export async function getStaticProps( ) {

	const { data, errors } = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: '/',
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		},
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}