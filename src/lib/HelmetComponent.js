import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

class HelmetComponent extends Component {
	render() {
		return (
			<>
				<HelmetProvider>
					<Helmet>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
						<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
					</Helmet>
				</HelmetProvider>
			</>
		);
	}
}

export default HelmetComponent;