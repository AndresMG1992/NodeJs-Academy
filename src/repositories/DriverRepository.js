import DriverModel from '../models/driver.js';

const driverRepository = class {
    
    findAll = async () => {
        return DriverModel.find().exec();
    }
    
    findById = async (id) => {
        return DriverModel.findById(id).exec();
    }
    
    save = async (model) => {
        const driver = new DriverModel(model);
    
        await driver.save()
            .then(() => console.log('driver was registered correctly!'))
            .catch(() => console.error('driver could not be registered'));
    }
    
    update = async (id, model) => {
        await DriverModel.findByIdAndUpdate(id, model);
    }
    
    remove = async (id) => {
        await DriverModel.findByIdAndDelete(id);
    }
}
export default driverRepository;