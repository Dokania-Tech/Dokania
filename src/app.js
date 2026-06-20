import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { notFoundHandler, errorHandler } from './middlewares/error.middleware.js';
import { configureCloudinary } from './config/cloudinary.js';
import { requestLogger } from './middlewares/request-logger.middleware.js';

// Routes
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import contactRoutes from './routes/contact.routes.js';
import publicRoutes from './routes/public.routes.js';
import uploadRoutes from './routes/upload.routes.js';

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_ORIGIN?.split(',') || '*',
    credentials: true
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(requestLogger);

app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
});

// Mount API routes
configureCloudinary();
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/public', publicRoutes);
app.use('/api/v1/upload', uploadRoutes);

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;


