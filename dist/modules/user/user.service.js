"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const db_connections_name_1 = require("../common/constants/db-connections-name");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor(UserModal) {
        this.UserModal = UserModal;
    }
    async createUser(data) {
        try {
            const { contact } = data;
            if (!contact) {
                return { message: 'Contact is mandatory !' };
            }
            return await this.UserModal.create(data);
        }
        catch (e) {
            throw new common_1.BadRequestException(e);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, decorators_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.UserEntity.name, db_connections_name_1.DB_CONNECTIONS_NAMES.PRIMARY)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map