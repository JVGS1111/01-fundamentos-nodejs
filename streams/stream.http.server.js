import http from 'node:http'

const server = http.createServer(async (req,res)=> {
    const buffer = []
    for await (const chunk of req){
        buffer.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffer).toString()

    console.log(fullStreamContent);
    
    return res.end(fullStreamContent)
})

server.listen(3334)