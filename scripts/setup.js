// @ts-check
const { execSync } = require('child_process')

const exec = (command) => execSync(command, {stdio: 'inherit'})

exec("yarn")
exec("docker run --name bff-workshop -e POSTGRES_PASSWORD=password -p 5432:5432 -v postgres-data:/var/lib/postgresql/data -d postgres:latest")
exec("yarn workspace services run db-migrate")
exec("yarn workspace services run db-seed")

console.log("Ready! Run `yarn start` to start everything. Happy hacking :)")
