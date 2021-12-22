import UserModel from '../models/user.js';
import bcrypt from 'bcryptjs';

const userService = class {
    constructor() {
        this.UserModel = new UserModel();
    }

    get() {
        return UserModel.find();
    }

    async getById(id) {
        return UserModel.findOne({
            where: {
                id
            }
        });
    }

    async findByEmail(email) {
        return UserModel.findOne({ 
            where: {
                email
            }
        })
    }

    save(model) {
        const salt = bcrypt.genSaltSync(10);
        model.password = bcrypt.hashSync(model.password, salt);
        return UserModel.create(model);
    }

    update(model) {
        return UserModel.update(model);
    }
}

export default userService;

/* 
const createUser = async data => {
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);
    const newUser = new UserModel(data);
    await newUser.save();

    return newUser;
}

const findByEmail = email => UserModel.findOne({email});

export {
    createUser,
    findByEmail
} */