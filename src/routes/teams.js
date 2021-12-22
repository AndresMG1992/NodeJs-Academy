import express from 'express';
import TeamService from '../services/teamService.js';

const Router = express.Router();

Router.get('/:id', TeamService.findById);
Router.get('/', TeamService.findAll);
Router.post('/', TeamService.save);
Router.patch('/', TeamService.patch);
Router.delete('/', TeamService.remove);

export default Router;