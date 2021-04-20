const db = require('../db/db.json');
const {v4: uuidv4} = require("uuid")
module.exports = (app) => {

    app.get('/api/notes', (req, res)=>res.json(db));

    app.post('/api/notes', (req, res)=>{

        let newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4()
        }
        db.push(newNote)
        
        return res.json(true)})
}