const express = require('express');

const Service =  require('./src/service');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        message: 'Lista de usuarios',
        body: Service.getUsers(),
    })
});

app.get('/:id', (req, res) =>{
    // let id = req.params.id;
    let {params:{id}} = req;
    let user = Service.getUser(id);

    console.log(id);
    res.json({
        message: `Usuario ${id}`,
        body: user,
    })
});

app.post('/', (req, res) => {
    // let newUser = req.body;
    let {body: newUser} = req;
    
    res.status(201).json({
        message: 'Usuario creado',
        body: Service.createUser(newUser)
    })
})

app.put('/:id', (req, res) =>{

});

app.delete('/:id', (req, res) =>{
    
});

// app.put("/:id", (req, res) => {
//   const user = Service.getUser(req.params.id);
//   let {params: { id }} = req;
//   let { body: newUpdater } = req;
//   if (user.length == 0) {
//     res.status(404).send(`Usuario con id ${req.params.id} no existe`);
//   } else {
//     const result = Service.validatos(req.body);
//     if (result.error) {
//       res.status(400).send(result.error.details[0].message);
//     } else {
//       res.send(Service.updateUser(id, newUpdater));
//     }
//   }
// });

app.listen(port, () =>{
    console.log(`servidor escuchando en http://localhost:${port}`);
});