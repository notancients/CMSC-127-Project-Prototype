// import { result } from '../database_controller/database.js'

/** 
 *  Name: homepage
 *  Parameters:
 *      Request req
 *      Response res
 *  Returns:
 *      String message
 *  Description:
 *      Simple hompage message for if no endpoint has been entered.
*/
async function homepage(req, res) {
    res.send('This is the homepage.')
}

async function basicselect(req, res) {
    // res.send(result[0]);
    res.send('This is the basic select return message.');
}

export {
    homepage,
    basicselect
}