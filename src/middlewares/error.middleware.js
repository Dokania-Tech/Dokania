export function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
}

export function errorHandler(err, req, res, next) {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    const details = err.details || undefined;
    res.status(status).json({ success: false, message, details });
}


