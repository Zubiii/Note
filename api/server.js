const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

// include Model
const Note = require("../model/note.js")


//Connect mongo DB
mongoose.connect(
    'mongodb://127.0.0.1:27017/simple_blog',
    {   
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)
mongoose.connection.on('error', console.error.bind(console, 'connection error!'))


// Add Midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(cors())


//Routes
app.get('/api/note/list', (req, res)=>{ //Get All Notes
    Note.find({}).sort({updatedAt: 'descending'}).exec( (err, notes) => {
        if(err) return res.status(404).send('Error while getting notes')
        return res.send({notes})
    })
})
app.post('/api/note/create', (req, res)=>{   //Save new Note
    const note = new Note({body: req.body.body, title: req.body.title})
    note.save( (err) => {
        if(err) return res.status(404).send({message: err.message})
        return res.send({note})
    })
})



const port = process.env.PORT || 1000
app.listen(port, ()=>{
    console.log(`listening and http://127.0.0.1:${port}`)
})