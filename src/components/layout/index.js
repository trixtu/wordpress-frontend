
import React from 'react'
import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import Seo from '../seo';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';
import { sanitize } from '@/src/utils/miscellaneous';
import { Container } from '@chakra-ui/react';

import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
  subsets:['latin'],
  display:'swap',
})

const Layout = ( {data, isPost, children} ) => {
	const {page, post, posts, header, footer, headerMenu, footerMenu} = data || {};

	// If it does not have either post or page.
	if ( isEmpty( page ) && isEmpty( post ) && isEmpty( posts ) ) {
		return null;
	}

	const seo = isPost ? ( post?.seo ?? {} ) : ( page?.seo ?? {} );
	const uri = isPost ? ( post?.uri ?? {} ) : ( page?.uri ?? {} );
  

	return (
		<div className={montserrat.className}>
			<Seo seo={seo} uri={uri}/>
			<Head>
				<meta name="robots" content="index, follow" />
				<link rel="shortcut icon" href={header?.favicon}/>
				{seo?.schemaDetails ? (
					<script
						type='application/ld+json'
						className='yoast-schema-graph'
						key='yoastSchema'
						dangerouslySetInnerHTML={{__html: sanitize  ( seo.schemaDetails )}}
					/>
				) : null}
			</Head>
			<Header header={header} headerMenus={headerMenu?.edges} socialLinks={footer?.socialLinks}/>
			<Container maxW={'1150px'} marginY={4}>
				{children}
			</Container>
			<Footer footer={footer} footerMenus={footerMenu?.edges}/>
		</div>
	);
};

Layout.propTypes = {
	data: PropTypes.object,
	isPost: PropTypes.bool,
	children: PropTypes.object
};

Layout.defaultProps = {
	data: {},
	isPost: false,
	children: {}
};

export default Layout;