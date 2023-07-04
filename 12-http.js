const http = require('http')

const server = http.createServer((req, res) =>{
     
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }

    if(req.url === '/about'){
        res.end('Our history:')
    }
    res.end(`
<h1>Oops!</h1>
<p>We cant find the page you are looking for</p>
<a href="/"> Go back? </a>
`)
})

server.listen(5000)