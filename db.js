const Pool = require('pg').Pool;
const pool = new Pool({
	user:"postgres",
	host:"localhost",
	database:"mystudents",
	password:"ruhulamin",
	port:5432
});

module.exports = pool;