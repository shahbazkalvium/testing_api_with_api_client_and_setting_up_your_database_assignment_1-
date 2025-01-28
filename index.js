// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.


const express = require('express');
const { resolve } = require('path');
const students =require('.data.json');
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/students/above-threshold', (req, res) => {
  
  const { threshold } = req.body;
  const studentsAboveThreshold = students.filter(student => student.total > threshold);
  
  res.json({
    count: studentsAboveThreshold.length,
    students: studentsAboveThreshold
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


