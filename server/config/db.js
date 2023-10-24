const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ankushsharma488888:g8Jla8L41Xjh3JDn@cluster0.quot4bq.mongodb.net/')
        console.log("Mongo DB Connected: ", conn.connection.host)
    }
    catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB