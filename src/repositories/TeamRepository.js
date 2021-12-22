import TeamModel from '../models/team.js';

const findAll = async () => {
    return TeamModel.find().exec();
}

const findById = async (id) => {
    return TeamModel.findById(id).exec();
}

const save = async (model) => {
    const team = new TeamModel(model);

    await team.save()
        .then(() => console.log('team was registered correctly!'))
        .catch(() => console.error('team could not be registered'));
}

const update = async (id, model) => {
    await TeamModel.findByIdAndUpdate(id, model);
}

const remove = async (id) => {
    await TeamModel.findByIdAndDelete(id);
}

export default {
    save,
    findAll,
    findById,
    update,
    remove
}