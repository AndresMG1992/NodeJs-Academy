import teamRepository from '../repositories/TeamRepository.js';

const findById = async (req, res) => {
    const { id } = req.params;
    const team = await teamRepository.findById(id);
    res.json(team ? team : {error: 'team not found'});
}

const findAll = async (req, res) => {
    const teams = await teamRepository.findAll();
    res.json({drivers: teams});
}

const save = (req, res) => {
    const team = req.body;
    teamRepository.save(team)
        .then(() => res.json({ok: 'driver was registered correctly!'}))
        .catch((e) => {
            console.error(e);
            res.json({error: 'driver could not be registered'})
        });
}

const patch = (req, res) => {
    const { id } = req.params;
    const driver = req.body;
    teamRepository.update(id, driver).then(() =>{
        res.json({ok: 'Driver was updated successfully'});
    }).catch((e) => {
        console.error(e);
        res.json({error: 'Error updating driver'});
    });
}

const remove = (req, res) => {
    const { id } = req.params;
    teamRepository.remove(id).then(() =>{
        res.json({ok: 'Driver was removed successfully'});
    }).catch((e) => {
        console.error(e);
        res.json({error: 'Error removing driver'});
    });
}

export default {
    findById,
    findAll,
    save,
    patch,
    remove
}