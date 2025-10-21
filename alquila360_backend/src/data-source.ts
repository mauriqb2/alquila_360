import { DataSource } from "typeorm"
import { User } from "./entity/user.entity";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "alquila360_admin",
    password: "123456789",
    database: "alquila360",
    entities: [User],
    synchronize: true,
    logging: false,
})

export default AppDataSource;