import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

const app = express();
const port = process.env.PORT || 3000;
console.log('>>>check port: ' + port);

//set up view engine
configViewEngine(app);
//init WebRoute
initWebRoute(app);

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})