import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import { Sequelize } from 'sequelize';

const host = config.get('HOSTNAME')
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_SCHEMA } = process.env;
const sequelize = new Sequelize({
    dialect: 'postgres',
    host,
    port: 5432,
    database: 'postgres',
    schema: POSTGRES_SCHEMA,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD
})

export default sequelize;