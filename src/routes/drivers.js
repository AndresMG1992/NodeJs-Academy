import express from 'express';
import DriverService from '../services/driverService.js';
import { postPutValidations, patchValidations } from '../lib/driver-validations.js';

const driverService = new DriverService();
const Router = express.Router();

Router.get('/:id', driverService.findById);
Router.get('/', driverService.findAll);
Router.post('/', postPutValidations, driverService.save);
Router.put('/', postPutValidations, driverService.update);
Router.patch('/', patchValidations, driverService.update);
Router.delete('/', driverService.remove);

export default Router;