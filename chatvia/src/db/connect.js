const mongoose = require("mongoose")


// const db = async () => {
//   try {
//     if (mongoose.connection.readyState !== 1) {
//       await mongoose.connect("mongodb://127.0.0.1:27017/chatvia", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//       console.log("MongoDB connected successfully");
//     } else {
//       console.log("MongoDB is already connected");
//     }
//   } catch (error) {
//     console.error("MongoDB connection error:", error.message);
//   }
// };

// export default db;
//   async function dbConnect() {
//     try {

//         const db = await mongoose.createConnection("mongodb://127.0.0.1:27017/chatvia", {
//             useNewUrlParser: true,
//         }).asPromise()
//         const readyState = db.readyState
//         if (readyState === 1) {
//             console.log('connected')
//         } else {
//             console.log('connecting')
//         }
//     } catch(error) {
//         console.error('had some problems connecting')
//     }
// }

// module.exports = dbConnect

mongoose.connect('mongodb://127.0.0.1:27017/chatvia')
