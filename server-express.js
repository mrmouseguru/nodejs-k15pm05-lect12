import express from "express";

let app = express();


app.get("/", (req, res) => {
    res.send("Hello from Express");
});

app.get("/binky", (req, res) => {

    res.send("Hello, this is binky");

});

app.use("/files", express.static("public"));

app.get("/api/test", (req, res) => {

    res.json({text : "Hello World", num : 8888});

});

app.get("/api/students/:binky", (req, res) => {

    let studentId = req.params.binky;
    console.log(studentId);
    res.json({message : `Hello ${studentId}`});

})

app.listen(8888, () =>{
    console.log("Now listening");
});