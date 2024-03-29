import { Student } from "./student_model.js";


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

export {
    saveStudent,
    updateStudent,
    removeUser,
    removeAllUser,
    getUser,
    getMembers,
    homepage
}