import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
    role: { type: Number, required: true },
    team_id: { type: Schema.Types.ObjectId, ref: 'team' },
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
})

const teamMemberModel = mongoose.model("teamMember", teamMemberSchema);

export default teamMemberModel;