import DriverRepository from '../repositories/DriverRepository.js';

const driverService = class {
    constructor() {
        this.driverRepository = new DriverRepository();
    }

    findById = async (req, res) => {
        const id = req.params.id;
        const driver = await driverRepository.findById(id);
        res.json(driver ? driver : {error: 'driver not found'});
    }

    findAll = async (req, res) => {
        const drivers = await driverRepository.findAll();
        res.json({drivers});
    }

    save = (req, res) => {
        const driver = req.body;
        driverRepository.save(driver)
            .then(() => res.json({ok: 'driver was registered correctly!'}))
            .catch((e) => {
                console.error(e);
                res.json({error: 'driver could not be registered'})
            });
    }

    update = (req, res) => {
        const id = req.query.id;
        const driver = req.body;
        driverRepository.update(id, driver).then(() =>{
            res.json({ok: 'Driver was updated successfully'});
        }).catch((e) => {
            console.error(e);
            res.json({error: 'Error updating driver'});
        });
    }

    remove = (req, res) => {
        //req.headers.id
        const id = req.get('id');
        driverRepository.remove(id).then(() =>{
            res.json({ok: 'Driver was removed successfully'});
        }).catch((e) => {
            console.error(e);
            res.json({error: 'Error removing driver'});
        });
    }
}

export default driverService;