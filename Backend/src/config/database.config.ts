import {DataSource } from "typeorm"
import Envconfig from "./envconfig.ts";

const AppDataSource = new DataSource({
    type: "postgres",
    host: Envconfig.DB_HOST!,
    port:  +(Envconfig.DB_PORT!),
    username: Envconfig.DB_USERNAME!,
    password: Envconfig.DB_PASSWORD!,
    database:Envconfig.DB_DATABASE!,
     entities: [],
    synchronize: true,
    logging:true
});

export default AppDataSource;