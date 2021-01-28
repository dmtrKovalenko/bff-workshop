// @ts-check
const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 4859;
const prisma = new PrismaClient();

const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json());

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

app.post("/api/customers/:id", (req, res) => {
  const customer = req.body;

  prisma.customers
    .update({
      where: {
        id: Number(req.params.id),
      },
      data: customer,
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

app.post("/api/jobs/:id", (req, res) => {
  const job = req.body;

  prisma.jobs
    .update({
      where: {
        id: Number(req.params.id),
      },
      data: job,
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
