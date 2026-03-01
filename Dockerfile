FROM node:20-alpine

WORKDIR /app

# Copiamos solo package.json primero para cachear dependencias
COPY package*.json ./

RUN npm install

# El código real lo vamos a montar como volumen
EXPOSE 5000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5000"]