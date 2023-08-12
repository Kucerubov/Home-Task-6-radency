import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { NotesModule } from './notes/notes.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {Note} from "./notes/notes.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.PG_HOST,
            port: 5433,
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DB,
            models: [Note],
            autoLoadModels: true
        }),
        NotesModule,
    ]
})
export class AppModule{}