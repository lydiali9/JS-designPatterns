let express = require('express');
let path = require('path');
let app = express();

let todos = [
    {
        id: 1,
        text: 'eat',
        completed: false
    },
    {
        id: 2,
        text: 'sleep',
        completed: false
    },
    {
        id: 3,
        text: 'play',
        completed: false
    }
];

app.get('/todos', function(req, res) {
    res.json(todos);
})

app.get('/toggle', function(req, res) {
    let ids = req.query.ids;
    ids = ids.split(',').map(item => parseInt(item.id));
    
    todos = todos.map(function(todo) {
        if (ids.includes(todo.id)) {
            todo.completed = !todo.completed;
        }
        return todo;
    })

    res.json({code: 0});
})

app.use(express.static(__dirname));
app.listen(8088);
