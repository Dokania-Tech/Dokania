import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) return;
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error('MONGO_URI is not set');
    }
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoUri, {
        autoIndex: true
    });
    isConnected = true;
}


