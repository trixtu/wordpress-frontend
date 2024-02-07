import client from "@/src/apollo/client";
import Layout from "@/src/components/layout";
import SliderHome from "@/src/components/ui/Slider";
import SliderBlog from "@/src/components/ui/SliderBlog";
import { GET_PAGE } from "@/src/queries/pages/get-page";
import { sanitize } from "@/src/utils/miscellaneous";
import { handleRedirectsAndReturnData } from "@/src/utils/slug";


export default function Home({data}) {

console.log(data)
  return (
		<Layout data={data}>
      <SliderHome slider={data} />
      {/* <NewProducts
        products={products}
        wishedProducts={wishedNewProducts}
        ratings={ratings}
      /> */}
      {/* <HomePageUnu /> */}
			{ data?.page?.content ? <div className="mt-4" dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/> : null }

			<SliderBlog blogs={data?.blogs?.edges}/>
		</Layout>
	);
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
			data: data || {},
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

