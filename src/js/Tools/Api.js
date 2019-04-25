import apisauce from 'apisauce'

const SERVER_PORT = 1337;
const baseURL = "http://0.0.0.0:" + SERVER_PORT;
const api = apisauce.create({ baseURL });

const Api = {};

Api.run = (command, args) => api.post('/run', {command, args});

export default Api;
