import client from '@/src/apollo/client'
import Layout from '@/src/components/layout'
import DateOfBirth from '@/src/components/ui/DateOfBirth'
import { GET_NEWS } from '@/src/queries/news/get-news'
import { PER_PAGE_FIRST } from '@/src/utils/pagination'
import { handleRedirectsAndReturnData } from '@/src/utils/slug'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaHome } from 'react-icons/fa'

const CifraDestinului = ({data}) => {

  const router = useRouter()
  const numbers = [
    {
      name: 'one',
      href: '/cifra-destinului-1',
      value: 1,
    },
    {
      name: 'two',
      href: '/cifra-destinului-2',
      value: 2,
    },
    {
      name: 'three',
      href: '/cifra-destinului-3',
      value: 3,
    },
    {
      name: 'four',
      href: '/cifra-destinului-4',
      value: 4,
    },
    {
      name: 'five',
      href: '/cifra-destinului-5',
      value: 5,
    },
    {
      name: 'six',
      href: '/cifra-destinului-6',
      value: 6,
    },
    {
      name: 'seven',
      href: '/cifra-destinului-7',
      value: 7,
    },
    {
      name: 'eight',
      href: '/cifra-destinului-8',
      value: 8,
    },
    {
      name: 'nine',
      href: '/cifra-destinului-9',
      value: 9,
    },
    {
      name: 'eleven',
      href: '/cifra-destinului-11',
      value: 11,
    },
    {
      name: 'twenty-two',
      href: '/cifra-destinului-22',
      value: 22,
    },
    {
      name: 'thirty-three',
      href: '/cifra-destinului-33',
      value: 33,
    },
  ]

  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <Layout data={data}>
      <Breadcrumb marginY={2} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'><Flex alignItems={'center'} gap={2}><FaHome />Acasă</Flex></BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Cifra Destinului</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="flex items-center justify-center p-2">
          <div className="w-[650px] ">
            <Text
              variant="h5"
              fontWeight={'500'}
              textAlign={'center'}
              marginTop={5}
              paddingBottom={2}
            >
              Numerologie: Cifra destinului
            </Text>
            <SimpleGrid columns={{base:4, md: 6}} spacingX={10} spacingY={6} marginBottom={10}>
              {numbers.map((number, index) => (
                <div>
                  <Link
                    href={number.href}
                    className="flex items-center justify-center"
                  >
                    <div
                      className="rounded-full w-12 h-12 text-center justify-center flex items-center bg-cover bg-center font-bold text-white"
                      style={{
                        backgroundImage:
                          ' url(/images/copper-color-background-with-blur-and-smooth-texture-for-festive-metallic-graphic-design-element-vector.jpg)',
                      }}
                    >
                      {number.value}
                    </div>
                  </Link>
                </div>
              ))}
            </SimpleGrid>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: '#EFDF9A',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              <Text variant="h5">
                Afla care este CIFRA DESTINULUI tau
              </Text>
              <Text
                variant="subtitle1"
                sx={{
                  marginBottom: '20px',
                }}
              >
                Adauga data nasterii pentru a calcula Cifra Destinului
              </Text>
              <DateOfBirth />
            </Box>
          </div>
        </div>
    </Layout>
  )
}

export default CifraDestinului

export async function getStaticProps() {
	const { data, errors } = await client.query( {
		query: GET_NEWS,
		variables: {
			uri: '/news/',
			first: PER_PAGE_FIRST,
			after: null,
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

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'posts' )
}