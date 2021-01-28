// @ts-check
var faker = require("faker");
const { PrismaClient } = require("@prisma/client");

const NUM_OF_DATA = 1000;
const prisma = new PrismaClient();

async function seedCustomers() {
  for (let i = 1; i <= NUM_OF_DATA; i++) {
    console.log(`Creating customer ${i}/${NUM_OF_DATA}`);
    await prisma.customers.create({
      data: {
        job: {
          create: {
            title: faker.name.jobTitle(),
            content: faker.name.jobDescriptor(),
            documents: new Array(faker.random.number(10))
              .fill(0)
              .map(faker.random.word),
            published: faker.random.boolean(),
          },
        },
        email: faker.internet.email(),
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        country: faker.address.country(),
        region: faker.random.word(),
        phone: faker.phone.phoneNumber(),
        discount: faker.random.number(100),
      },
    });
  }
}


async function main() {
  await seedCustomers();

  console.log("Data generated");
}

main()
  .then(() => process.exit(0))
  .catch((e) => console.error(e));
