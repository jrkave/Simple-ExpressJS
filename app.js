// Setup
const express = require('express')
const parser = require('body-parser')
const app = express()
const port = 3000

// Set view engine, parser
app.set('view engine', 'ejs') // Set view engine
app.use(parser.urlencoded({extended: true})) // Parse request body if contains post data

// Route returning static file
app.get('/staticHTML', (req, res) => {
    res.sendFile('static.html', {root: __dirname})
})

// Route containing form to generate dynamic content
app.get('/madlib', (req, res) => {
    res.sendFile('madlib.html', {root: __dirname})
})

app.post('/madlibfilled', (req, res) => {
    const fields = {
        f1: req.body.f1,
        f2: req.body.f2,
        f3:req.body.f3,
        f5: req.body.f5,
        f6: req.body.f6,
        f7: req.body.f7,
        f8: req.body.f8,
        f9: req.body.f9,
        f10: req.body.f10,
        f11: req.body.f11
    }
    console.log('fields: ', fields)
    res.render('madlib', fields) // Pass all fields to view
})

// Launch server
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

