import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
});

userSchema.pre('save', hashPassword = (next) => {
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, fun = (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, fun = (err, hash) => {
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

userSchema.methods.comparePassword = fun = (candidatePassword, cb) => {
    bcrypt.compare(candidatePassword, password, fun = (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const userModel = mongoose.model("User", userSchema);

export default userModel;