const db = require('../db/db.json');
const fs = require('fs');
const {v4: uuidv4} = require("uuid")
module.exports = (app) => {

    app.get('/api/notes', (req, res)=>{
        fs.readFile('./db/db.json', 'utf8', (err, db)=>{
            if(err) throw err;
            const data = JSON.parse(db);
            res.send(data)

        });
    });

    app.post('/api/notes', (req, res)=>{

        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }
        db.push(newNote)
        
        return res.json(true)})

    app.delete('/api/notes/:id', (req, res)=>{
        let ID = req.params.id
        db.forEach((note, i)=>{
            if(note.id === ID){
                db.splice(i, 1);
            }
        })
    })
}

console.log(uuidv4())