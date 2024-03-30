import express from 'express';
import router from './router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static('static_html'));
// app.use(express.static('static_js'));

router(app);

app.listen(
    3000,
    () => console.log("Listening on port 3000")
)