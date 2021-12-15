import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    summary: { type: String, required: true, unique: true },
    projet_id: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    assigne_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    create_user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    created_at: { type: Date, default: Date.now, required: true },
    updated_at: { type: Date },
    description: { type: String, required: true },
    priority: { type: Number, required: true },
    status: { type: Number, default: 1, required: true },
    deadline: { type: Date, required: true },
    timeSpent: { type: Number, default: 0 }
})

const taskModel = mongoose.model("Task", TaskSchema);

export default taskModel;