const getUsers = "SELECT * FROM quizzusers";
const checkUser = "SELECT * FROM quizzusers WHERE email = $1";
const checkUserName = "SELECT * FROM quizzusers WHERE username = $1";
const checkPhone = "SELECT * FROM quizzusers WHERE phone = $1";
const addUser = 'INSERT INTO quizzusers ("FISH", age, is_admin, registrated_at, username, email, phone, password) VALUES ($1, $2, $3, $4, $5, $6, $7,$8)';
const getUser = 'select * from quizzusers where username = $1 and password = $2';

module.exports = {
    getUsers,
    checkUser,
    checkUserName,
    checkPhone,
    addUser,
    getUser,
}