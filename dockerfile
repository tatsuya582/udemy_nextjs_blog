FROM node:22-alpine3.19
WORKDIR /app
COPY ./blog/package.json ./blog/package-lock.json ./
WORKDIR /app/blog
RUN npm install
EXPOSE 3000

# 最初はこちらで実行 yes | npx create-react-app .|| create-next-app .はコンテナ内で手動でやるまたはnpm create vite@latest＆npm install
# FROM node:22-alpine3.19
# WORKDIR /app/blog
# # RUN yes | npx create-react-app .
# EXPOSE 3000
