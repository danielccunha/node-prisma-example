<div align="center">
  <h1>:floppy_disk: node-prisma-example</h1>
  <p>Simple Node.js application using Prisma to manage database resources</p>
</div>

## Tech

- [Node.js][nodejs] - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript][typescript] - TypeScript is a superset of JavaScript that compiles to clean JavaScript output
- [Prisma][prisma] - Next-generation Node.js and TypeScript ORM

## Getting started

In order to run the project you'll need to have [Node.js][nodejs] and [Yarn][yarn] installed in your machine. Prisma supports PostgreSQL, MySQL, SQLite and other databases, you need to setup one of the options to run the application.

```sh
# Clone repository
$ git clone https://github.com/danielccunha/node-prisma-example.git && cd node-prisma-example

# Populate environment variables
$ cp .env.example .env
$ nano .env

# Install dependencies and run migrations
$ yarn && yarn migrate

# Start the project in development mode
$ yarn dev
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[nodejs]: https://nodejs.org/en/
[typescript]: https://github.com/microsoft/TypeScript
[yarn]: https://yarnpkg.com/
[prisma]: https://www.prisma.io/