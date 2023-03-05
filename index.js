const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request,response)=>{
    return response.json({message:"Server is up"});
});

app.get("/update", (request,response)=>{
    return response.json([
        {
            title:"A volta dos que não foram",
            subscription:"loremImpsum",
            age:"18+"
        },
        {
            title:"Até o ultimo homem",
            subscription:"loremloremloremimpsum",
            age:"16+"
        },
        {
            title:"Nossa que charme",
            subscription:'loremimpsumlorem lorem impsum',
            age:"free"
        }
    ]
)
})

app.post('/teste', (request,response)=>{

    const {name, date} = request.body;

    return response.json({name, date});
})

app.listen(3333)