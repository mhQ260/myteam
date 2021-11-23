import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
    teamName: { type: String, required: true, unique: true },
})

const teamtModel = mongoose.model("Team", pTeamSchema);

export default teamModel;