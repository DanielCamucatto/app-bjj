# Usar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o yarn.lock para o container
COPY package.json yarn.lock ./

# Instalar as dependências
RUN yarn install

# Copiar o restante do código para o container
COPY . .

# Construir o projeto
RUN yarn build

# Expor a porta que o Next.js usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["yarn", "dev"]
