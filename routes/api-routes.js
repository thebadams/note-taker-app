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
        fs.readFile('./db/db.json', 'utf8', (err, db)=>{
            if(err) throw err;
            const notes = JSON.parse(db);
            let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
            }
            
            notes.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(notes, null), (err)=>{
                if(err) throw err;
                res.send(true)
            })

        })
    });


        
        // db.push(newNote)
        

    app.delete('/api/notes/:id', (req, res)=>{
        fs.readFile('./db/db.json', 'utf8', (err, data)=>{
            if(err) throw err;
            let ID = req.params.id
            let notes = JSON.parse(data)
            notes.forEach((note, i)=>{
                if(note.id === ID){
                    notes.splice(i,1);
                }
            })
             fs.writeFile('./db/db.json', JSON.stringify(notes, null), (err)=>{
            if(err) throw err;
            res.send(true);
            })
        })
       
    })
};