import mongoose from 'mongoose';

const passwordSchema = new mongoose.Schema({}, { timestamps: true });

export const Password = mongoose.model(Password, passwordSchema);
