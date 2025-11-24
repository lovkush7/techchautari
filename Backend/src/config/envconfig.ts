import "dotenv/config"

class Envconfig{
    //DB
    static DB_PORT = process.env.DB_PORT
    static DB_USERNAME = process.env.DB_USERNAME
    static DB_HOST = process.env.DB_HOST
    static DB_PASSWORD = process.env.DB_PASSWORD
    static DB_DATABASE = process.env.DB_DATABASE
  //JWT
  static JWT_SEC = process.env.JWT_SEC

}

export default Envconfig;
