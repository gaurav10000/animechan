import express from 'express';
import ejs from 'ejs';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

// let url = ;

// async function funcName(url){
//     const response = await fetch(url);
//     let data = await response.text();
//     // console.log(data);
//     return data.quote;
//     }



app.get("/anime", async(req, res) => {
    const response = await fetch(`https://animechan.vercel.app/api/random/anime?title=${req.query.title}`);
    const data = await response.json();

    res.render("index.ejs", {animeQuote: data["quote"], animeName: data["anime"], animeCharacter: data["character"], Anime: "Anime: ", Character: "Character: ", Quote: "Quote: "});
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
})