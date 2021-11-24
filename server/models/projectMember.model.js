import mongoose from 'mongoose';

const projectMemberSchema = new mongoose.Schema({
    role: { type: Number, required: true },
    project_id: { type: Schema.Types.ObjectId, ref: 'project' },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
})

const projectMemberModel = mongoose.model("projectMember", projectMemberSchema);

export default projectMemberModel;