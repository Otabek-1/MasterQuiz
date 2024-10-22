const { Client } = require("pg");
const queries = require("./queries");

const client = new Client({
    connectionString: 'postgresql://postgres.xqbhpmfdckbdssepvdlp:10010512111111497@aws-0-eu-central-1.pooler.supabase.com:6543/postgres',
    ssl: {
        rejectUnauthorized: false,  // Sertifikatni tekshirmaslik uchun false qilib qo'yilgan
    },
});

// PostgreSQL ga ulanish
client.connect((err) => {
    if (err) {
        console.error('Connection error:', err.stack);
    } else {
        console.log('Connected to PostgreSQL');
    }
});

// Foydalanuvchilarni olish funksiyasi
async function getUsers(req, res) {
    try {
        console.log("Fetching users...");
        const getusers = await client.query(queries.getUsers);

        if (getusers.rows.length === 0) {
            return res.status(200).send("There are no users.");
        } else {
            return res.status(200).json(getusers.rows);
        }
    } catch (error) {
        console.error("Error in getUsers:", error); // Xatoni log qilamiz
        return res.status(500).send("An error occurred while fetching users.");
    }
}


async function addUser(req, res) {
    const { FISH, age, is_admin, registrated_at, username, email, phone, password } = req.body;
    try {

        const useradd = await client.query(queries.addUser, [FISH, age, is_admin, registrated_at, username, email, phone, password]);
        res.status(201).send("Registered successfully!");
    } catch (error) {
        console.error(error);  // Xatoni konsolda chop qilishingiz mumkin, xatolik tafsilotlarini ko'rish uchun
        res.status(500).send("Error occurred while registering the user.");
    }
}

async function getUser(req, res) {
    const { username, password } = req.body; // Use req.body for a POST request
    try {
        const user = await client.query(queries.getUser, [username, password]);
        if (user.rows.length === 0) {
            return res.status(404).send("Incorrect username or password");
        } else {
            return res.status(200).json(user.rows[0]);
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getUsers,
    addUser,
    getUser,
};
