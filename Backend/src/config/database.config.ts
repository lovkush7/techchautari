import {DataSource } from "typeorm"
import Envconfig from "./envconfig.ts";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {SnakeNamingStrategy} from "typeorm-naming-strategies"

const __filename=fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const AppDataSource = new DataSource({
    type: "postgres",
    host: Envconfig.DB_HOST!,
    port:  +(Envconfig.DB_PORT!),
    username: Envconfig.DB_USERNAME!,
    password: Envconfig.DB_PASSWORD!,
    database:Envconfig.DB_DATABASE!,
     entities: [__dirname + "/../entities/*.entities.ts"],
    synchronize: true,
    logging:true,
    namingStrategy: new SnakeNamingStrategy()

});

export default AppDataSource;