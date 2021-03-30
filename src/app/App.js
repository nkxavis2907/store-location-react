import React from 'react';
import 'app/App.scss';

import Header from 'components/header/header.component';
import GoogleMap from 'components/google-map/google-map.component';

class App extends React.Component {
	state = { data:[], loaded:false };

	async componentDidMount (response) {
		let urlRequest = 'https://munddi.com/dev/pdvs?ne_lat=-21.79&ne_lng=-44.85&sw_lat=-24.58&sw_lng=-49.18';

		await fetch(urlRequest)
			.then((resp) => resp.json())
			.then(function(data) {
				response = data.data;
			})
			.catch(function(error) { console.error(error) });

		return this.setState({ data:response, loaded:true });
	};

	render () {
		let { data,loaded } = this.state;

		return (
			<div className={'App'}>
				<Header />
				{ (loaded) ? ( <GoogleMap data={data} /> ) : ( null ) }
			</div>
		);
	};
};

export default App;

/*
	2.5kg osso ( chambaril )
	2.0kg peito
	2.0kg músculo
*/