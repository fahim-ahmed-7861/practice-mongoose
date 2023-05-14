
import app from './app'
import mongoose from 'mongoose'
const port: number = 5001

//database connection
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose")
        console.log(`Database connection successful`)

        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    }
    catch (err) {
        console.log('failed to connect', err)
    }
}

main()
