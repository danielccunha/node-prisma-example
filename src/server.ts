import express from "express";
import morgan from "morgan";
import chalk from "chalk";

import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(routes);

app.listen(3333, () => console.log(`Successfully started server on port ${chalk.yellow("3333")}`));

process.on("SIGTERM", () => process.exit());
