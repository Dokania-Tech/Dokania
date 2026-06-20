import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
    {
        author: { type: String, required: true },
        company: { type: String },
        content: { type: String, required: true },
        rating: { type: Number, min: 1, max: 5, default: 5 }
    },
    { timestamps: true }
);

export default mongoose.model('Testimonial', testimonialSchema);


