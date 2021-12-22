import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    age: {type: Number, required: true, min: 0},
    team: {type: mongoose.Schema.Types.ObjectId, required: true},
    country: String
});

export default mongoose.model('drivers', DriverSchema);