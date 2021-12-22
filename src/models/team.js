import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    director: { type: String, required: true },
    championships: { type: Number, required: false },
    drivers: { type: [mongoose.Schema.Types.ObjectId], required: false }
});

export default mongoose.model('teams', TeamSchema);