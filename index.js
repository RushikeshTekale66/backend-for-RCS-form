const express = require("express");
const Form = require("./data");

require('dotenv').config();
require("./connect");
const app = express();
const cors = require("cors")
app.use(express.json({limit:"50mb"}));
app.use(cors());
const port = 5000;


// // Upload Image
const multer = require("multer");

// // Create a Storage to store Image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // your folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

// Upload Section
const upload = multer({ storage });

const cpUpload = upload.fields([
    { name: "heroImage", maxCount: 1 },
    { name: "logo", maxCount: 1 },
]);

// ✅ Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

app.get("/", (req, res) => {
    res.status(200).send("Applicatioon is live");
})

app.get("/data", async (req, res) => {
    try {
        const data = await Form.find({})
        res.status(200).json(data);
    } catch (error) {
        console.error("Fetch error:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }

});

// send all the data to backend with photo
// app.post("/data", cpUpload, async (req, res) => {
//     const heroImageFile = req.files["heroImage"]?.[0];
//     const logoFile = req.files["logo"]?.[0];

//     const newForm = new Form({
//         ...req.body,
//         heroImageUrl: heroImageFile ? `/uploads/${heroImageFile.filename}` : null,
//         logoUrl: logoFile ? `/uploads/${logoFile.filename}` : null
//     });

//     await newForm.save();
//     res.status(200).json({ message: "Data saved with images" });
// });

app.post("/data", cpUpload, async (req, res) => {

    const newForm = new Form(req.body);

    await newForm.save();
    res.status(200).json({ message: "Data saved with images" });
});

app.listen(port, () => console.log("Application is running on port", port)
)
