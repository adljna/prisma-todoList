# Dockerfile untuk deploy ke GCP Cloud Run
 
FROM node:20-alpine
 
# Install openssl untuk Prisma
RUN apk add --no-cache openssl
 
WORKDIR /app
 
COPY package*.json ./
 
# Install dependency
RUN npm ci 
COPY . .
 
# Generate Prisma Client
RUN npx prisma generate
 
# Build Next.js
RUN npm run build
 
# Set environment production
ENV NODE_ENV=production
ENV PORT=8080
 
EXPOSE 8080
 
# Jalankan app di port 8080 (wajib untuk Cloud Run)
CMD ["sh", "-c", "npm run start -- -H 0.0.0.0 -p ${PORT:-8080}"]