let express = require('express');
let app = express();

let colors = {
    "data" : [
        {
            name: "Red",
            info: "cardinal, scarlet, crimson"
        },
        {
            name: "Orange",
            info: "ochre, copper, terracotta"
        },
        {
            name: "Yellow",
            info: "lemon, amber, gold"
        },
        {
            name: "Green",
            info: "olive, emerald, lime"
        },
        {
            name: "Blue",
            info: "azure, sapphire, cobalt"
        },
        {
            name: "Purple",
            info: "violet, lavender, indigo"
        }
    ]
}

app.use('/', express.static('public'));

// app.get('/', (request, response)=> {
//    response.send("Hello, welcome to the home page.");
// })

app.get('/about', (request, response) => {
    response.send("This is an about page");
})

app.get('/colors', (request, response) => {
    response.json(colors);
})

app.get('/colors/:color', (request, response)=> {
    console.log(request.params.color);
    let user_color = request.params.color;
    let user_object;
    for(let i=0;i<colors.data.length;i++) {
        if(user_color == colors.data[i].name) {
            user_object = colors.data[i];
        }
    }
    console.log(user_object);
    if (user_object) {
        response.json(user_object);
    } else {
        response.json({status: "info not present"})
    }
})

app.listen(3000, ()=>{
    console.log("app is listening at localhost:3000");
})