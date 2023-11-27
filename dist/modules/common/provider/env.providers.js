"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DATABASE_URL = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const DATABASE_URL = process.env.DATABASE_URL;
exports.DATABASE_URL = DATABASE_URL;
const PORT = process.env.PORT;
exports.PORT = PORT;
//# sourceMappingURL=env.providers.js.map