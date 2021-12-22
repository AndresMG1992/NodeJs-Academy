import { DataTypes } from 'sequelize';
import postgres from '../db/postgres.js';

const roles = postgres.define('roles', {
    id: { type: DataTypes.UUIDV4, primaryKey: true, autoIncrement: true },
    role: { type: DataTypes.STRING }
});

export default roles;