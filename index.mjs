import express from 'express';
const solarSystem = (await import('npm-solarsystem')).default;
import fetch from 'node-fetch';

const app = express();

app.set("view engine", "ejs");
//store img and css static files in file public
app.use(express.static("public"));

//routes
//root route
app.get('/', async (req, res) => {
    let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar%20system"
    let respone = await fetch(url);
    let data = await respone.json();
    let i = Math.floor(Math.random()*50);
    let img = data.hits[i].webformatURL;
    console.log(img)
    res.render('home.ejs', {img});
});
app.get('/NASA_POD',(req, res) => {
    res.render('nasaPod.ejs');
});
//planet route
app.get('/planet',(req, res) => {
    let planet_Name = req.query.planetName;
    let planetInfo = solarSystem[`get${planet_Name}`]();
    console.log(planetInfo);
    res.render('planetInfo.ejs', {planetInfo, planet_Name});
});
app.get('/mars',(req, res) => {
    let planet_Name = req.query.planetName;
    let planetInfo = solarSystem[`get${planet_Name}`]();
    console.log(planetInfo);
    res.render('mars.ejs', {planetInfo, planet_Name});
});
app.get('/jupiter',(req, res) => {
    let planet_Name = req.query.planetName;
    let planetInfo = solarSystem[`get${planet_Name}`]();
    console.log(planetInfo);
    res.render('jupiter.ejs', {planetInfo, planet_Name});
});

//starts the web server
app.listen(3000, () => {
   console.log('server started');
});