import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        logoUrl: { type: String },
        website: { type: String }
    },
    { timestamps: true }
);

export default mongoose.model('Client', clientSchema);


