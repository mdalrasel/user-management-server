const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000


app.use(cors())


app.get('/', (req, res) => {
    res.send('Hellooo World!')
})

const users =[
    {id:1,name:'rakib',email:'rakib@gmail.com'},
    {id:2,name:'shahed',email:'shahed@gmail.com'},
    {id:3,name:'rasel',email:'rasel@gmail.com'},
    {id:4,name:'pavel',email:'pavel@gmail.com'},
    {id:5,name:'nesher',email:'nesher@gmail.com'},
]

app.get('/users',(req,res) =>{
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
