Dokania Server (Express + MongoDB)
==================================

Backend API for Dokania Tech Solutions.

Setup
-----

1. Create an `.env` in `server/`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/dokania
JWT_SECRET=change_me_in_production
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

2. Install dependencies:

```
npm install
```

3. Seed database (optional):

```
npm run seed
```

4. Start server:

```
npm run dev
```

Project Structure
-----------------

```
src/
  app.js
  server.js
  config/
    db.js
  controllers/
    auth.controller.js
    product.controller.js
    contact.controller.js
    public.controller.js
  middlewares/
    auth.middleware.js
    error.middleware.js
    request-logger.middleware.js
    validate.middleware.js
  models/
    User.model.js
    Product.model.js
    ContactMessage.model.js
    Client.model.js
    Testimonial.model.js
  routes/
    auth.routes.js
    product.routes.js
    contact.routes.js
    public.routes.js
  utils/
    index.js
  validation/
    auth.validation.js
    product.validation.js
    contact.validation.js
  scripts/
    seed.js
```

API Overview (v1)
-----------------

- Auth (`/api/v1/auth`)
  - POST `/register` { name, email, password }
  - POST `/login` { email, password }
  - GET `/me` (Bearer token)

- Products (`/api/v1/products`)
  - GET `/` list with query: `q`, `category`, `sortBy=name|category`
  - GET `/:slug` get by slug
  - POST `/` (admin) create
  - PUT `/:id` (admin) update
  - DELETE `/:id` (admin) delete

- Contact (`/api/v1/contact`)
  - POST `/` submit message { name, email, phone?, subject, message, source? }
  - GET `/` (admin) list messages

- Public (`/api/v1/public`)
  - GET `/clients` list clients
  - GET `/testimonials` list testimonials

- Upload (`/api/v1/upload`) [admin]
  - POST `/product` – multipart field `image` ⇒ `{ success, url, publicId }`
  - POST `/client` – multipart field `image` ⇒ `{ success, url, publicId }`

Notes
-----
- CORS allows `CLIENT_ORIGIN`.
- JWT Bearer auth; admin role can manage products and view contact messages.
- Validation via Joi; errors return consistent JSON.


