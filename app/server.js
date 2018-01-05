const http = require('http')
const MongoClient = require('mongodb').MongoClient

const port = 3000
const doc1 = { 'hello': 'doc1' }
const doc2 = { 'hello': 'doc2' }
const lotsOfDocs = [{ 'hello': 'doc3' }, { 'hello': 'doc4' }]

const init = async() => {
    try {
        const client = await MongoClient.connect("mongodb://mongo:27017/exampleDb")
        const exampleDb = await client.db('exampleDb')
        const testColl = await exampleDb.collection('test')

        // perform concurrently
        await Promise.all([
            testColl.insert(doc1),
            testColl.insert(doc2, { w: 1 }, function(err, result) {}),
            testColl.insert(lotsOfDocs, { w: 1 }, function(err, result) {})
        ])

        const results = await testColl.find()
        const items = await results.toArray()

        const requestHandler = (request, response) => {
            console.log(request.url)
            response.write(JSON.stringify(items))
            response.end('\nHello from Node.js Server!')
        }

        const server = http.createServer(requestHandler)

        server.listen(port, (err) => {
            if (err) {
                return console.log('something bad happened', err)
            }

            console.log(`server is listening on ${port}`)
        })

    } catch (e) {
        console.log('error', e)
    }
}

init()
