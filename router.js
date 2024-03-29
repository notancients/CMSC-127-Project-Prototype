import express from "express";
import { homepage } from "./path.js";




function router(app) {
    app.get('/', homepage)
}

export default router;