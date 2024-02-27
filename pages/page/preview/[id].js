import client from '../../../src/apollo/client';
import { GET_PAGE_BY_ID} from '../../../src/queries/pages/get-page';
import Layout from '../../../src/components/layout';
import {handleRedirectsAndReturnData} from '../../../src/utils/slug';
import {getAuthToken} from '../../../src/utils/cookies';
import {sanitize} from '../../../src/utils/miscellaneous';
import {
	getLoginPreviewRedirectUrl
} from '../../../src/utils/redirects';

const PagePreview = ( { data } ) => {
	
	return (
		<Layout data={data}>
			<div dangerouslySetInnerHTML={{__html: sanitize( data?.page?.content ?? {} )}}/>
		</Layout>
	);
};

export default PagePreview;

export async function getServerSideProps( context ) {

	const authToken = getAuthToken( context.req );

	const { params } = context || {};
	const { data, errors } = await client.query( {
		query: GET_PAGE_BY_ID,
		variables: {
			id: Number( params?.id ?? '' ),
		},
		context: {
			headers: {
				authorization: authToken ? `Bearer ${authToken}` : '',
			}
		}
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

	const loginRedirectURL = getLoginPreviewRedirectUrl( 'page', params?.id ?? '' );

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'page', true, loginRedirectURL );
}