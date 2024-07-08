import express from "express"



//  create Express App
const app = express();


// Use Router
app.use(express.json());




// Listen for incoming requests
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});