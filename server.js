var http = require("http");
var port = 7000;
var port2 = 7500;
function handleRequest(request,res){
	res.end("it worked"+ request.url);
}
var server = http.createServer(handleRequest);
server.listen(port,function(){
	console.log("server listning on: http://localhost:%s"+ port);
	console.log(port+"Telling Good about Port ");

})
var server2 = http.createServer(handleRequest);
server2.listen(port2,function(){
	console.log("server listning on: http://localhost:%s"+ port2);
	console.log(port2+"Telling bad about Port ")
})