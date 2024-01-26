
import client from '@/src/apollo/client'
import Layout from '@/src/components/layout'
import { GET_PAGE } from '@/src/queries/pages/get-page'
import { GET_PAGES_URI } from '@/src/queries/pages/get-pages'
import { sanitize } from '@/src/utils/miscellaneous'
import { FALLBACK, handleRedirectsAndReturnData } from '@/src/utils/slug'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import React from 'react'

const Page = ( {data} ) => {
	const router = useRouter();
	
	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}
	console.log(data)
	return (

		<Layout data={data}>
			<div>
				<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
					<BreadcrumbItem>
						<BreadcrumbLink href='/'>Acasă</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href='#'>{data?.page?.title}</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/>
		</Layout>
	);
};

export default Page;

export async function getStaticProps( {params} ) {
	const {data, errors} = await client.query( {
		query: GET_PAGE,
		variables: {
			uri: params?.slug.join( '/' ),
		},
	} );

	const defaultProps = {
		props: {
			data: data || {}
		}
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page' );
}

export async function getStaticPaths(){
  const { data } = await client.query({
    query:GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes && data?.pages?.nodes.map(page => {
    if(!isEmpty(page.uri)){
      const slugs = page?.uri?.split('/').filter(pageSlug => pageSlug);
      pathsData.push({params:{slug:slugs}})
    }
   
  })

  return {
    paths:pathsData,
    fallback: FALLBACK,
  }
}