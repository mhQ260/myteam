import mongoose from 'mongoose';

const projectMemberSchema = new mongoose.Schema({
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    role: { type: Number, required: true }    
})

const projectMemberModel = mongoose.model("ProjectMember", projectMemberSchema);

export default projectMemberModel;


// project_id: { type: String, ref: 'project' },
//     user_id: { type: String, ref: 'user' },