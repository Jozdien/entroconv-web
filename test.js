const axios = require('axios');
const https = require('https');

// add this
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// this
const agent = new https.Agent({
	rejectUnauthorized: false
});

axios.get("https://ec2-3-21-162-233.us-east-2.compute.amazonaws.com/api/", "", {
	headers: {
		'accept': 'application/json',
		'Accept-Language': 'en-US,en;q=0.8',
	},
	params: {
		'num_speakers': 1,
		'seg_len': 2,
		'sen_len': 3,
	},
	httpsAgent: agent, // and this here
})
	.then((response) => {
		console.log(response.data);
	}).catch((error) => {
		//handle error
		console.log(error)
	});