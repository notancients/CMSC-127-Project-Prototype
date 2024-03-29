import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('static_files'));

app.listen(
    3000,
    () => console.log("Listening on port 3000")
)