'use strict';
const CnodeJS = require('./index.js');
const client = new CnodeJS();
client.request('GET', 'topics', {page: 1}, (err, data) => {
   if(err){
      console.log(err);
   }else{
      console.log(data);	
   }
})
var data = {
	'accesstoken' : '8ba8fdd5-aaba-4080-8703-8f43df1d565d',
	'title' : '测试发帖，请无视',
	'tab' : 'ask',
	'content' : '测试发帖，请无视'
}
client.request('POST', 'topics', data).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});