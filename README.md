<p align="center">
  <img src="/public/images/logo.png" alt="Dermaspace Logo" width="200">
</p>

<h1 align="center">DermaspaceNG Analytics</h1>

<p align="center">
  <i>Analytics dashboard for Dermaspace Esthetic And Wellness Centre - a modern, privacy-focused analytics solution.</i>
</p>

<p align="center">
  <a href="https://github.com/sidihost/DermaspaceNG-Analytics-/releases"><img src="https://img.shields.io/github/release/sidihost/DermaspaceNG-Analytics-.svg" alt="GitHub Release" /></a>
  <a href="https://github.com/sidihost/DermaspaceNG-Analytics-/blob/master/LICENSE"><img src="https://img.shields.io/github/license/sidihost/DermaspaceNG-Analytics-.svg" alt="MIT License" /></a>
</p>

---

## 🚀 Getting Started

DermaspaceNG Analytics is your dedicated analytics dashboard for tracking and analyzing website data.

---

## 🛠 Installing from Source

### Requirements

- A server with Node.js version 18.18+.
- A PostgreSQL database version v12.14+.

### Get the source code and install packages

```bash
git clone https://github.com/sidihost/DermaspaceNG-Analytics-.git
cd DermaspaceNG-Analytics-
pnpm install
```

### Configure DermaspaceNG Analytics

Create an `.env` file with the following:

```bash
DATABASE_URL=connection-url
```

The connection URL format:

```bash
postgresql://username:mypassword@localhost:5432/mydb
```

### Build the Application

```bash
pnpm run build
```

The build step will create tables in your database if you are installing for the first time. It will also create a login user with username **Dermaadmin** and password **Derma2025@@**.

### Start the Application

```bash
pnpm run start
```

By default, this will launch the application on `http://localhost:3000`. You will need to either [proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/) requests from your web server or change the [port](https://nextjs.org/docs/api-reference/cli#production) to serve the application directly.

---

## 🐳 Installing with Docker

DermaspaceNG Analytics can be deployed using Docker compose for easy deployment.

Docker compose (Runs with a PostgreSQL database):

Docker compose (Runs Umami with a PostgreSQL database):

```bash
docker compose up -d
```

---

## 🔄 Getting Updates

To get the latest features, simply do a pull, install any new dependencies, and rebuild:

```bash
git pull
pnpm install
pnpm build
```

To update the Docker image, simply pull the new images and rebuild:

```bash
docker compose pull
docker compose up --force-recreate -d
```

---

## 🛟 Support

<p align="center">
  <a href="https://github.com/sidihost/DermaspaceNG-Analytics-"><img src="https://img.shields.io/badge/GitHub--blue?style=social&logo=github" alt="GitHub" /></a>
</p>

<p align="center">
  <strong>Dermaspace Esthetic And Wellness Centre</strong>
</p>

[release-shield]: https://img.shields.io/github/release/sidihost/DermaspaceNG-Analytics-.svg
[releases-url]: https://github.com/sidihost/DermaspaceNG-Analytics-/releases
[license-shield]: https://img.shields.io/github/license/sidihost/DermaspaceNG-Analytics-.svg
[license-url]: https://github.com/sidihost/DermaspaceNG-Analytics-/blob/master/LICENSE
[github-shield]: https://img.shields.io/badge/GitHub--blue?style=social&logo=github
[github-url]: https://github.com/sidihost/DermaspaceNG-Analytics-
