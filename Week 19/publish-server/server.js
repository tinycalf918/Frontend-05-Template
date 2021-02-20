let http = require('http');
let https = require('https');
// let fs = require("fs");
let unzipper = require("unzipper");
let querystring = require("querystring");

// auth路由： 接受code，用code、client_id、client_secret换取access token
function auth(request, response){
    let query = querystring.parse(request.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    getToken(query.code, function(info){
        response.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`);
        response.end();
    });
}

function getToken(code, callback){
    let request = https.request({
        hostname: "github.com",
        ppath: `/login/oauth/access_token?code=${code}&client_id=51.ad011ru08dasdf&client_secret=habdufbhu13rbfakdbf12i21ag034a`,
        port: 443,
        method: 'POST',
    }, function(response){
        let body = "";
        response.on('data', chunk => {
            body += chunk.toString();
        })
        response.on('end', chunk => {
            callback(querystring.parse(body));
        })
    })
    request.end();
}

// publish路由： 用access token 获取用户信息 检查权限
function publish(request, response){
    let query = querystring.parse(request.url.match(/^\/publish\?([\s\S]+)$/)[1]);
    getUser(query.token, info => {
        if(info.login === 'asce'){
            request.pipe(unzipper.Extract({ path: '../server/public/' }));
            request.on('end', function(){
                response.end('success!');
            })
        }
    });
}

function getUser(token, callback){
    let request = https.request({
        hostname: "api.github.com",
        ppath: `/user`,
        port: 443,
        method: 'GET',
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": "toy-publish"
        }
    }, function(response){
        let body = "";
        response.on('data', chunk => {
            body += chunk.toString();
        })
        response.on('end', chunk => {
            callback(JSON.parse(body))
        })
    })
    request.end();
}
http.createServer(function(request, response){

    if(request.url.match(/^\/auth\?/)){
        return auth(request, response);
    }
    if(request.url.match(/^\/publish\?/)){
        return publish(request, response);
    }
    // let outFile = fs.createWriteStream("../server/public/tem.zip");

    // request.on('data', chunk => {
    //     outFile.write(chunk);
    // })
    // request.on('end', chunk => {
    //     outFile.end();
    //     response.end("success")
    // })
    // request.pipe(outFile);

}).listen(8082);