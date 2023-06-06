import { MongoClient } from 'mongodb'
import {} from 'dotenv/config'

// CONNECT TO DATABASE
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database...')
})