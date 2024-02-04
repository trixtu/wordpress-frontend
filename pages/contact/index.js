import client from "@/src/apollo/client"
import Layout from "@/src/components/layout"
import ContactForm from "@/src/components/ui/ContactForm"
import { GET_PAGE } from "@/src/queries/pages/get-page"
import { handleRedirectsAndReturnData } from "@/src/utils/slug"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, GridItem, Heading } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { FaHome } from "react-icons/fa"

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

export async function generateMetadata() {
  return {
    title: 'Contact',
    description: 'Pagina de contact',
  }
}
export default function ContactPage({data}) {
  const router = useRouter()

  return (
    <Layout data={data}>
      <Breadcrumb marginY={2} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'><Flex alignItems={'center'} gap={2}><FaHome />Acasă</Flex></BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href='#'>Contact</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
        
        <Grid templateColumns='repeat(12, 1fr)'>
          <GridItem colSpan={{base:0, md:3}}></GridItem>
          <GridItem colSpan={{base:12, md:6}}>
            <Box padding={{base:5, md:5, lg:20}} border={'1px'} borderColor={'#f2f2f2'} shadow={'md'}>
              <Heading fontWeight={500} fontSize={24} textAlign={'center'}>
                Contactează-mă
              </Heading>
              <ContactForm />
            </Box>
          </GridItem>
          <GridItem colSpan={{base:0, md:3}}></GridItem>
        </Grid>
      
     
    </Layout>
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