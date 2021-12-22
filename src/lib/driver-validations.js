import { body, validationResult} from 'express-validator';
import teamModel from '../models/team.js';

const handleErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (errors) {
        res.status(400).json(errors)
    }
    next();
}

const postPutValidations = [
    body('name').notEmpty().withMessage('name is required'),
    body('lastname').notEmpty().withMessage('lastname is required'),
    body('age').notEmpty().withMessage('age is required'),
    body('age').isInt({ min: 0}).withMessage('age must be major or equals than zero'),
    body('country').notEmpty().withMessage('country is required'),
    body('team').notEmpty().withMessage('team is required'),
    body('team').custom( async (team) => {
        const exists = await teamModel.findOne({ name: team })
        if (!exists) {
            return new Error(`team ${team} is not in the DB`)
        }
        req.body.team = exists.id;
    }),
    handleErrors
]

const patchValidations = [
    handleErrors
]

export {
    postPutValidations,
    patchValidations
}