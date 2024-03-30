import needle from "needle";

/**
 * NOTES:
 * These are formatted into functions so they can be called easily
 * using other test values.
 * They return nothing but simply print onto the terminal.
 */

/** 
 *  Name: request_homepage
 *  Parameters:
 *      N/A
 *  Returns:
 *      N/A
 *  Description:
 *      Simple call to the homepage endpoint.
*/
function request_homepage() {
    let endpoint = 'http://localhost:3000/';
    needle.get(
        endpoint,
        (err, res) => {
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_saveStudent
 *  Parameters:
 *      Student newStudent
 *  Returns:
 *      N/A
 *  Description:
 *      Calls the save-student endpoint. Note that it assumes that 
 *      a properly formatted student object has been passed.
*/
function request_saveStudent(newStudent) {
    needle.post(
        'http://localhost:3000/save-student',
        newStudent,
        (err, res) => {
            console.log("Received a post response from save-student.")
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_updateStudent
 *  Parameters:
 *      updateDetails
 *          String fname
 *          String newName
 *  Returns:
 *      N/A
 *  Description:
 *      Updates the record of the student with the given first name
 *      and updates it to the new name.
*/
function request_updateStudent(updateDetails) {
    needle.post(
        'http://localhost:3000/update-student',
        updateDetails,
        (err, res) => {
            console.log("Received a post response from update-student.")
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_removeUser
 *  Parameters:
 *      removeDetails
 *          String stdnum
 *  Returns:
 *      N/A
 *  Description:
 *      Removes the student with the corresponding student number.
*/
function request_removeUser(removeDetails) {
    needle.post(
        'http://localhost:3000/remove-user',
        removeDetails,
        (err, res) => {
            console.log("Received a post response from remove-user.")
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_removeAllUser
 *  Parameters:
 *      N/A
 *  Returns:
 *      N/A
 *  Description:
 *      Sends a request to delete all users in the database.
*/
function request_removeAllUser() {
    needle.post(
        'http://localhost:3000/remove-all-user',
        {},
        (err, res) => {
            console.log("Received a post response from remove-all-user.")
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_getUser
 *  Parameters:
 *      Stromg studentNumber
 *  Returns:
 *      N/A
 *  Description:
 *      Sends a query via get to find the student with the corresponding
 *      student number.
*/
function request_getUser(studentNumber) {
    let endpoint = 'http://localhost:3000/user';
    let query = `${endpoint}?stdnum=${studentNumber}`;
    needle.get(
        query,
        (err, res) => {
            console.log("Received a get response from /user.");
            console.log(res.body);
        }
    )
}


/** 
 *  Name: request_getMembers()
 *  Parameters:
 *      N/A
 *  Returns:
 *      N/A
 *  Description:
 *      Shows all the students currently saved in the database.
*/
function request_getMembers() {
    let endpoint = 'http://localhost:3000/members';
    needle.get(
        endpoint,
        (err, res) => {
            console.log(res.body);
        }
    )
}


export {
    request_saveStudent,
    request_updateStudent,
    request_removeUser,
    request_removeAllUser,
    request_getUser,
    request_getMembers
}
