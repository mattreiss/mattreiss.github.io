import apisauce from 'apisauce'

const SERVER_PORT = 3233;
const baseURL = "http://0.0.0.0:" + SERVER_PORT;
const api = apisauce.create({ baseURL });

const Api = {};

Api.log = (obj) => api.post('/log', obj);
Api.clone = (src, dest) => api.post('/clone', {src, dest});
Api.getImages = () => api.get('/images');
Api.getDrives = () => api.get('/drives');
Api.getConfig = () => api.get('/config');
Api.setConfig = (config) => api.post('/config', {config});

export default Api;
