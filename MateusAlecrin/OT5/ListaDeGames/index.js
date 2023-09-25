const express = require("express");
const app = express();
app.use(express.json());

//Lista de Games

let games = [
    {title: "Assassin's Creed Odyssey",        epoca:"431 - 404 AC",   studio: "Ubisoft Quebec",   price: 199.00},
    {title: "Assassin's Creed Origins",        epoca:"49 - 43 AC",     studio: "Ubisoft Montreal", price: 199.00},
    {title: "Assassin's Creed Valhalla",       epoca:"873 DC",         studio: "Ubisoft Montreal", price: 279.95},
    {title: "Assassin's Creed",                epoca:"1191 DC",        studio: "Ubisoft Montreal", price: 90},
    {title: "Assassin's Creed II",             epoca:"1476 - 1499 DC", studio: "Ubisoft Montreal", price: 90},
    {title: "Assassin's Creed Brotherhood",    epoca:"1500 - 1507 DC", studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed Revelations",    epoca:"1511 DC",        studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed IV Black Flag",  epoca:"1712 - 1722 DC", studio: "Ubisoft Montreal", price: 99.00},
    {title: "Assassin's Creed Rogue",          epoca:"1756 - 1763 DC", studio: "Ubisoft Sofia",    price: 79.00},
    {title: "Assassin's Creed III",            epoca:"1754 - 1783 DC", studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed III Liberation", epoca:"1765 - 1780 DC", studio: "Ubisoft",          price: 90},
    {title: "Assassin's Creed Unity",          epoca:"1776 - 1800 DC", studio: "Ubisoft Montreal", price: 99.00},
    {title: "Assassin's Creed Syndicate",      epoca:"1868 DC",        studio: "Ubisoft Quebec",   price: 89.95}
];

app.listen(3080,() => {
    console.log("Servidor rodando!");
});

app.get("/", (req, res) => {
    res.json(games);
});

app.post("/novogame", (req, res) => {
    let title = req.body.title;
    let time = req.body.epoca;
    let studio = req.body.studio;
    let price = req.body.price 
    
    console.log(title);
    console.log(time);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, studio, price};
    games.push(newGame);
    res.send("OK");
});



