import apisauce from 'apisauce'

const STACKER_SERVER_PORT = 1337;
const WEB_CRAWLER_SERVER_PORT = 1338;

const local = port => "http://0.0.0.0:" + port;

const Api = {};
Api.stackerURL = local(STACKER_SERVER_PORT);
Api.stacker = apisauce.create({ baseURL: Api.stackerURL });
Api.runStacker = (command, args) => Api.stacker.post('/run', {command, args});
Api.list = (directory) => Api.stacker.post('/list', {directory});
Api.img = (name) => Api.stackerURL + '/directory/' + name;


Api.webCrawlerURL = local(WEB_CRAWLER_SERVER_PORT);
Api.webCrawler = apisauce.create({ baseURL: Api.webCrawlerURL });
Api.runWebCrawler = (command, options) => Api.webCrawler.post('/run', {command, options});

export default Api;
