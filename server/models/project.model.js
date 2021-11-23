import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    manager_id: { type: Schema.Types.ObjectId, ref: 'user' },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    description: { type: String, required: false },
    isArchive: { type: Boolean, required: true, default: false },
})

const projectModel = mongoose.model("Project", projectSchema);

export default projectModel;