
import {isEmpty} from 'lodash';
import { useRouter } from 'next/router';


import client from '@/src/apollo/client';
import Layout from '@/src/components/layout';
import { sanitize } from '@/src/utils/miscellaneous';
import { GET_POST_SLUGS } from '@/src/queries/posts/get-posts';
import { GET_POST } from '@/src/queries/posts/get-post';
import { FALLBACK, handleRedirectsAndReturnData } from '@/src/utils/slug';
import CommentForm from '@/src/components/CommentForm';
import { getComments } from '@/src/lib/comments';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { LuMessagesSquare } from "react-icons/lu";
import Message from '@/src/components/ui/Message';


const Post = ( { data, comments, commentCount} ) => {
	const router = useRouter();

	// If the page is not yet generated, this will be displayed
	// initially until getStaticProps() finishes running
	if ( router.isFallback ) {
		return <div>Loading...</div>;
	}
	
	return (
		<Layout data={data} isPost>
			<div dangerouslySetInnerHTML={{__html: sanitize( data?.post?.content ?? {} )}}/>

			

			<div className='mb-4'>
				<CommentForm postId={data?.post?.databaseId}/>
			</div>
			<div className='my-4'> 
				<Alert backgroundColor={'#fac482'} gap={4} maxW={'sm'}>
					<LuMessagesSquare fontSize={22}/>
					Message:<strong>{commentCount}</strong>
				</Alert>

			</div>
			<div>
				<Message comments={comments}/>
			</div>
		</Layout>
	);
};

export default Post;

export async function getStaticProps( { params } ) {
	const { data, errors } = await client.query( {
		query: GET_POST,
		variables: {
			uri: params?.slug ?? '/',
		},
	} );

	const {comments, commentCount} = await getComments(params?.slug);



	const defaultProps = {
		props: {
			data: data || {},
			comments,
			commentCount
		},
		/**
         * Revalidate means that if a new request comes to server, then every 1 sec it will check
         * if the data is changed, if it is changed then it will update the
         * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
         */
		revalidate: 1,
	};

	return handleRedirectsAndReturnData( defaultProps, data, errors, 'post' );
}

/**
 * Since the page name 'does not' use catch-all routes,
 * for example [slug],
 * that's why params would contain just slug and not an array of slugs , unlike [...slug].
 * For example, If we need to have dynamic route '/foo/'
 * Then we would add paths: [ params: { slug: 'foo' } } ]
 * Here slug will be 'foo', then Next.js will statically generate the page at /foo/
 *
 * At build time next js will will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
	const { data } = await client.query( {
		query: GET_POST_SLUGS
	} );

	const pathsData = [];

	data?.posts?.nodes && data?.posts?.nodes.map( post => {
		if ( ! isEmpty( post?.slug ) ) {
			pathsData.push( {params: { slug: post?.slug }} );
		}
	} );

	return {
		paths: pathsData,
		fallback: FALLBACK
	};
}