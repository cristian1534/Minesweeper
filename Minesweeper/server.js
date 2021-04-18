const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');  
const commentRoute = require('./routes/comments-route');
const config = require('./config');
const colors = require('colors');


// uses...
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

// routes...
app.use('/api', commentRoute.routes);


app.listen(config.port, () => 
      console.log('Using Firebase... - Server on port', 
                  colors.yellow(config.port)
      )
);
