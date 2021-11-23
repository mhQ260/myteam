import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    isArchive: { type: Boolean, required: true, default: false },
    created_at: { type: Date, default: Date.now }
});

userSchema.pre('save', async function save(next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

userSchema.methods.validatePassword = async function validatePassword(data) {
    return bcrypt.compare(data, this.password);
}

const userModel = mongoose.model("User", userSchema);

export default userModel;