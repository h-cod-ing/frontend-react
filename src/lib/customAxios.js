import axios from 'axios';
const DEVELOPMENT_SERVER_ADDRESS = 'http://localhost:3000/api'; // 개발 api 서버 주소
const PRODUCTION_SERVER_ADDRESS = ''; // 프로덕션 api 서버 주소
const SERVER_ADDRESS = process.env.NODE_ENV === 'production' ? PRODUCTION_SERVER_ADDRESS : DEVELOPMENT_SERVER_ADDRESS;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const request = axios.create({
	baseURL: `${SERVER_ADDRESS}`,
	withCredentials: true,
	headers: {
		Accept: 'application/json',
	},
});

request.interceptors.request.use(
	config => {
		if (process.env.NODE_ENV === 'development') console.log('요청: ', config)
		return config;
	},
	error => {},
);

request.interceptors.response.use(
	async response => {
		if (process.env.NODE_ENV === 'development') console.log('응답: ', response)

		return response
	},
	error => {},
);