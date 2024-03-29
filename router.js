import express from "express";
import { homepage, basicselect } from "./path.js";




function router(app) {
    app.get('/', homepage),
    app.get('/basicselect', basicselect)
}

export default router;