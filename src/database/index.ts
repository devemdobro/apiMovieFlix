import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "admin",
    database: "movieflix",
    port: 5432
});

export { dataSource }