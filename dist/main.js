"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const env_providers_1 = require("./modules/common/provider/env.providers");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(env_providers_1.PORT || 4004);
    console.log('starting on port' + (env_providers_1.PORT || 4004));
}
bootstrap();
//# sourceMappingURL=main.js.map