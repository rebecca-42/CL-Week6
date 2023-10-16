let express = require('express');
let app = express();

let signs = {
    "data" : [
        {
            name: "Blue",
            info: "A color."
        },
        {
            name: "Red",
            info: "Another color."
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

app.get('/signs', (request, response) => {
    response.json(signs);
})

app.get('/signs/:sign', (request, response)=> {
    console.log(request.params.sign);
    let user_sign = request.params.sign;
    let user_object;
    for(let i=0;i<signs.data.length;i++) {
        if(user_sign == signs.data[i].name) {
            user_object = signs.data[i];
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