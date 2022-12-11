const express = require('express');
const app = express();
const studentRoutes = require('./src/student/routes');
const port = 3000;

app.use(express.json());



app.use("/api/v1/students",studentRoutes);

app.listen(port,()=>{
	console.log('App Listening on PORT %d',port);
})