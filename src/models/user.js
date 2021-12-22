import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres.js';
import roles from './role.js';

const users = sequelize.define('users', {
    id: { type: DataTypes.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    PASSWORD: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false,
    updatedAt: false,
    freezeTableName: true
});

users.belongsToMany(roles, { 
    through: 'USER_ROLE',
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'userId',
        allowNull: false
    }});
roles.belongsToMany(users, {
    through: 'USER_ROLE',
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'roleId',
        allowNull: false
    }
});

export default users;