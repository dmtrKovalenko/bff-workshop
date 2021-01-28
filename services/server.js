// @ts-check
const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const PORT = 4859;
const prisma = new PrismaClient();

const app = express();

app.use(cors());

app.get("/api/customers/:id", (req, res) => {
  prisma.customers
    .findUnique({
      where: {
        id: Number(req.params.id),
      },
    })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
      res.json({ success: false });
    });
});

app.get("/api/customers", (req, res) => {
  prisma.customers
    .findMany()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
      res.json({ success: false });
    });
});

app.get("/api/jobs", (req, res) => {
  prisma.jobs
    .findMany()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
      res.json({ success: false });
    });
});

app.get("/api/jobs/:id", (req, res) => {
  prisma.jobs
    .findUnique({
      where: { id: Number(req.params.id) },
    })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(500);
      res.json({ success: false });
    });
});

app.listen(PORT, () => {
  console.log(`"Microservices" app listening at http://localhost:${PORT}`);
});
