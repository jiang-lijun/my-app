var express = require('express');
var app = express();
const cors = require('cors')

app.use( cors( ) )
app.all('/login', function (request, response) {
    let res = {
        status: 200,
        data: {
            code: 200,
            data: {
                token: 'jskfhsdoifhoihfiodshfsdn',
                msg: '登录成功～'
            }
        }
    }
    // console.log(request.data)
    // let req = request.data
    // if (req['username'] === '123456' && req['password'] === '123456') {
    //     res.status = 200
    //     res.data.data.msg = '登录成功～'
    // } else {
    //     res.status = 403
    //     res.data.data.msg = '账号或者密码错误～'
    // }
    response.setHeader('Access-Control-Allow-Origin','*')
    // response.send(JSON.stringify(res));
    response.json(res)
});
app.listen(8080);