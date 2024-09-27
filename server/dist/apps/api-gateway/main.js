/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nestjs/throttler/dist/hash.js":
/*!*****************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/hash.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha256 = sha256;
const crypto = __webpack_require__(/*! node:crypto */ "node:crypto");
function sha256(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}
//# sourceMappingURL=hash.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageToken = exports.getOptionsToken = void 0;
__exportStar(__webpack_require__(/*! ./throttler-module-options.interface */ "./node_modules/@nestjs/throttler/dist/throttler-module-options.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler-storage.interface */ "./node_modules/@nestjs/throttler/dist/throttler-storage.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler.decorator */ "./node_modules/@nestjs/throttler/dist/throttler.decorator.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler.exception */ "./node_modules/@nestjs/throttler/dist/throttler.exception.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler.guard */ "./node_modules/@nestjs/throttler/dist/throttler.guard.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler.guard.interface */ "./node_modules/@nestjs/throttler/dist/throttler.guard.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./throttler.module */ "./node_modules/@nestjs/throttler/dist/throttler.module.js"), exports);
var throttler_providers_1 = __webpack_require__(/*! ./throttler.providers */ "./node_modules/@nestjs/throttler/dist/throttler.providers.js");
Object.defineProperty(exports, "getOptionsToken", ({ enumerable: true, get: function () { return throttler_providers_1.getOptionsToken; } }));
Object.defineProperty(exports, "getStorageToken", ({ enumerable: true, get: function () { return throttler_providers_1.getStorageToken; } }));
__exportStar(__webpack_require__(/*! ./throttler.service */ "./node_modules/@nestjs/throttler/dist/throttler.service.js"), exports);
__exportStar(__webpack_require__(/*! ./utilities */ "./node_modules/@nestjs/throttler/dist/utilities.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler-module-options.interface.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler-module-options.interface.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=throttler-module-options.interface.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler-storage.interface.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler-storage.interface.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerStorage = void 0;
exports.ThrottlerStorage = Symbol('ThrottlerStorage');
//# sourceMappingURL=throttler-storage.interface.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.constants.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.THROTTLER_SKIP = exports.THROTTLER_OPTIONS = exports.THROTTLER_KEY_GENERATOR = exports.THROTTLER_BLOCK_DURATION = exports.THROTTLER_TRACKER = exports.THROTTLER_TTL = exports.THROTTLER_LIMIT = void 0;
exports.THROTTLER_LIMIT = 'THROTTLER:LIMIT';
exports.THROTTLER_TTL = 'THROTTLER:TTL';
exports.THROTTLER_TRACKER = 'THROTTLER:TRACKER';
exports.THROTTLER_BLOCK_DURATION = 'THROTTLER:BLOCK_DURATION';
exports.THROTTLER_KEY_GENERATOR = 'THROTTLER:KEY_GENERATOR';
exports.THROTTLER_OPTIONS = 'THROTTLER:MODULE_OPTIONS';
exports.THROTTLER_SKIP = 'THROTTLER:SKIP';
//# sourceMappingURL=throttler.constants.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.decorator.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.decorator.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectThrottlerStorage = exports.InjectThrottlerOptions = exports.SkipThrottle = exports.Throttle = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_constants_1 = __webpack_require__(/*! ./throttler.constants */ "./node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_providers_1 = __webpack_require__(/*! ./throttler.providers */ "./node_modules/@nestjs/throttler/dist/throttler.providers.js");
function setThrottlerMetadata(target, options) {
    for (const name in options) {
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_TTL + name, options[name].ttl, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_LIMIT + name, options[name].limit, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_BLOCK_DURATION + name, options[name].blockDuration, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_TRACKER + name, options[name].getTracker, target);
        Reflect.defineMetadata(throttler_constants_1.THROTTLER_KEY_GENERATOR + name, options[name].generateKey, target);
    }
}
const Throttle = (options) => {
    return (target, propertyKey, descriptor) => {
        if (descriptor) {
            setThrottlerMetadata(descriptor.value, options);
            return descriptor;
        }
        setThrottlerMetadata(target, options);
        return target;
    };
};
exports.Throttle = Throttle;
const SkipThrottle = (skip = { default: true }) => {
    return (target, propertyKey, descriptor) => {
        var _a;
        const reflectionTarget = (_a = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value) !== null && _a !== void 0 ? _a : target;
        for (const key in skip) {
            Reflect.defineMetadata(throttler_constants_1.THROTTLER_SKIP + key, skip[key], reflectionTarget);
        }
        return descriptor !== null && descriptor !== void 0 ? descriptor : target;
    };
};
exports.SkipThrottle = SkipThrottle;
const InjectThrottlerOptions = () => (0, common_1.Inject)((0, throttler_providers_1.getOptionsToken)());
exports.InjectThrottlerOptions = InjectThrottlerOptions;
const InjectThrottlerStorage = () => (0, common_1.Inject)((0, throttler_providers_1.getStorageToken)());
exports.InjectThrottlerStorage = InjectThrottlerStorage;
//# sourceMappingURL=throttler.decorator.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.exception.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.exception.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerException = exports.throttlerMessage = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.throttlerMessage = 'ThrottlerException: Too Many Requests';
class ThrottlerException extends common_1.HttpException {
    constructor(message) {
        super(`${message || exports.throttlerMessage}`, common_1.HttpStatus.TOO_MANY_REQUESTS);
    }
}
exports.ThrottlerException = ThrottlerException;
//# sourceMappingURL=throttler.exception.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.guard.interface.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.guard.interface.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=throttler.guard.interface.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.guard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.guard.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const hash_1 = __webpack_require__(/*! ./hash */ "./node_modules/@nestjs/throttler/dist/hash.js");
const throttler_storage_interface_1 = __webpack_require__(/*! ./throttler-storage.interface */ "./node_modules/@nestjs/throttler/dist/throttler-storage.interface.js");
const throttler_constants_1 = __webpack_require__(/*! ./throttler.constants */ "./node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_decorator_1 = __webpack_require__(/*! ./throttler.decorator */ "./node_modules/@nestjs/throttler/dist/throttler.decorator.js");
const throttler_exception_1 = __webpack_require__(/*! ./throttler.exception */ "./node_modules/@nestjs/throttler/dist/throttler.exception.js");
let ThrottlerGuard = class ThrottlerGuard {
    constructor(options, storageService, reflector) {
        this.options = options;
        this.storageService = storageService;
        this.reflector = reflector;
        this.headerPrefix = 'X-RateLimit';
        this.errorMessage = throttler_exception_1.throttlerMessage;
    }
    async onModuleInit() {
        var _a, _b;
        var _c, _d;
        this.throttlers = (Array.isArray(this.options) ? this.options : this.options.throttlers)
            .sort((first, second) => {
            if (typeof first.ttl === 'function') {
                return 1;
            }
            if (typeof second.ttl === 'function') {
                return 0;
            }
            return first.ttl - second.ttl;
        })
            .map((opt) => { var _a; return (Object.assign(Object.assign({}, opt), { name: (_a = opt.name) !== null && _a !== void 0 ? _a : 'default' })); });
        if (Array.isArray(this.options)) {
            this.commonOptions = {};
        }
        else {
            this.commonOptions = {
                skipIf: this.options.skipIf,
                ignoreUserAgents: this.options.ignoreUserAgents,
                getTracker: this.options.getTracker,
                generateKey: this.options.generateKey,
            };
        }
        (_a = (_c = this.commonOptions).getTracker) !== null && _a !== void 0 ? _a : (_c.getTracker = this.getTracker.bind(this));
        (_b = (_d = this.commonOptions).generateKey) !== null && _b !== void 0 ? _b : (_d.generateKey = this.generateKey.bind(this));
    }
    async canActivate(context) {
        const handler = context.getHandler();
        const classRef = context.getClass();
        if (await this.shouldSkip(context)) {
            return true;
        }
        const continues = [];
        for (const namedThrottler of this.throttlers) {
            const skip = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_SKIP + namedThrottler.name, [
                handler,
                classRef,
            ]);
            const skipIf = namedThrottler.skipIf || this.commonOptions.skipIf;
            if (skip || (skipIf === null || skipIf === void 0 ? void 0 : skipIf(context))) {
                continues.push(true);
                continue;
            }
            const routeOrClassLimit = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_LIMIT + namedThrottler.name, [handler, classRef]);
            const routeOrClassTtl = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_TTL + namedThrottler.name, [handler, classRef]);
            const routeOrClassBlockDuration = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_BLOCK_DURATION + namedThrottler.name, [handler, classRef]);
            const routeOrClassGetTracker = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_TRACKER + namedThrottler.name, [handler, classRef]);
            const routeOrClassGetKeyGenerator = this.reflector.getAllAndOverride(throttler_constants_1.THROTTLER_KEY_GENERATOR + namedThrottler.name, [handler, classRef]);
            const limit = await this.resolveValue(context, routeOrClassLimit || namedThrottler.limit);
            const ttl = await this.resolveValue(context, routeOrClassTtl || namedThrottler.ttl);
            const blockDuration = await this.resolveValue(context, routeOrClassBlockDuration || namedThrottler.blockDuration || ttl);
            const getTracker = routeOrClassGetTracker || namedThrottler.getTracker || this.commonOptions.getTracker;
            const generateKey = routeOrClassGetKeyGenerator || namedThrottler.generateKey || this.commonOptions.generateKey;
            continues.push(await this.handleRequest({
                context,
                limit,
                ttl,
                throttler: namedThrottler,
                blockDuration,
                getTracker,
                generateKey,
            }));
        }
        return continues.every((cont) => cont);
    }
    async shouldSkip(_context) {
        return false;
    }
    async handleRequest(requestProps) {
        var _a;
        const { context, limit, ttl, throttler, blockDuration, getTracker, generateKey } = requestProps;
        const { req, res } = this.getRequestResponse(context);
        const ignoreUserAgents = (_a = throttler.ignoreUserAgents) !== null && _a !== void 0 ? _a : this.commonOptions.ignoreUserAgents;
        if (Array.isArray(ignoreUserAgents)) {
            for (const pattern of ignoreUserAgents) {
                if (pattern.test(req.headers['user-agent'])) {
                    return true;
                }
            }
        }
        const tracker = await getTracker(req);
        const key = generateKey(context, tracker, throttler.name);
        const { totalHits, timeToExpire, isBlocked, timeToBlockExpire } = await this.storageService.increment(key, ttl, limit, blockDuration, throttler.name);
        const getThrottlerSuffix = (name) => (name === 'default' ? '' : `-${name}`);
        if (isBlocked) {
            res.header(`Retry-After${getThrottlerSuffix(throttler.name)}`, timeToBlockExpire);
            await this.throwThrottlingException(context, {
                limit,
                ttl,
                key,
                tracker,
                totalHits,
                timeToExpire,
                isBlocked,
                timeToBlockExpire,
            });
        }
        res.header(`${this.headerPrefix}-Limit${getThrottlerSuffix(throttler.name)}`, limit);
        res.header(`${this.headerPrefix}-Remaining${getThrottlerSuffix(throttler.name)}`, Math.max(0, limit - totalHits));
        res.header(`${this.headerPrefix}-Reset${getThrottlerSuffix(throttler.name)}`, timeToExpire);
        return true;
    }
    async getTracker(req) {
        return req.ip;
    }
    getRequestResponse(context) {
        const http = context.switchToHttp();
        return { req: http.getRequest(), res: http.getResponse() };
    }
    generateKey(context, suffix, name) {
        const prefix = `${context.getClass().name}-${context.getHandler().name}-${name}`;
        return (0, hash_1.sha256)(`${prefix}-${suffix}`);
    }
    async throwThrottlingException(context, throttlerLimitDetail) {
        throw new throttler_exception_1.ThrottlerException(await this.getErrorMessage(context, throttlerLimitDetail));
    }
    async getErrorMessage(context, throttlerLimitDetail) {
        if (!Array.isArray(this.options)) {
            if (!this.options.errorMessage)
                return this.errorMessage;
            return typeof this.options.errorMessage === 'function'
                ? this.options.errorMessage(context, throttlerLimitDetail)
                : this.options.errorMessage;
        }
        return this.errorMessage;
    }
    async resolveValue(context, resolvableValue) {
        return typeof resolvableValue === 'function' ? resolvableValue(context) : resolvableValue;
    }
};
exports.ThrottlerGuard = ThrottlerGuard;
exports.ThrottlerGuard = ThrottlerGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, throttler_decorator_1.InjectThrottlerOptions)()),
    __param(1, (0, throttler_decorator_1.InjectThrottlerStorage)()),
    __metadata("design:paramtypes", [Object, Object, core_1.Reflector])
], ThrottlerGuard);
//# sourceMappingURL=throttler.guard.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.module.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ThrottlerModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const throttler_constants_1 = __webpack_require__(/*! ./throttler.constants */ "./node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_providers_1 = __webpack_require__(/*! ./throttler.providers */ "./node_modules/@nestjs/throttler/dist/throttler.providers.js");
let ThrottlerModule = ThrottlerModule_1 = class ThrottlerModule {
    static forRoot(options = []) {
        const providers = [...(0, throttler_providers_1.createThrottlerProviders)(options), throttler_providers_1.ThrottlerStorageProvider];
        return {
            module: ThrottlerModule_1,
            providers,
            exports: providers,
        };
    }
    static forRootAsync(options) {
        const providers = [...this.createAsyncProviders(options), throttler_providers_1.ThrottlerStorageProvider];
        return {
            module: ThrottlerModule_1,
            imports: options.imports || [],
            providers,
            exports: providers,
        };
    }
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: throttler_constants_1.THROTTLER_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: throttler_constants_1.THROTTLER_OPTIONS,
            useFactory: async (optionsFactory) => await optionsFactory.createThrottlerOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
exports.ThrottlerModule = ThrottlerModule;
exports.ThrottlerModule = ThrottlerModule = ThrottlerModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], ThrottlerModule);
//# sourceMappingURL=throttler.module.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.providers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.providers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getStorageToken = exports.getOptionsToken = exports.ThrottlerStorageProvider = void 0;
exports.createThrottlerProviders = createThrottlerProviders;
const throttler_storage_interface_1 = __webpack_require__(/*! ./throttler-storage.interface */ "./node_modules/@nestjs/throttler/dist/throttler-storage.interface.js");
const throttler_constants_1 = __webpack_require__(/*! ./throttler.constants */ "./node_modules/@nestjs/throttler/dist/throttler.constants.js");
const throttler_service_1 = __webpack_require__(/*! ./throttler.service */ "./node_modules/@nestjs/throttler/dist/throttler.service.js");
function createThrottlerProviders(options) {
    return [
        {
            provide: throttler_constants_1.THROTTLER_OPTIONS,
            useValue: options,
        },
    ];
}
exports.ThrottlerStorageProvider = {
    provide: throttler_storage_interface_1.ThrottlerStorage,
    useFactory: (options) => {
        return !Array.isArray(options) && options.storage
            ? options.storage
            : new throttler_service_1.ThrottlerStorageService();
    },
    inject: [throttler_constants_1.THROTTLER_OPTIONS],
};
const getOptionsToken = () => throttler_constants_1.THROTTLER_OPTIONS;
exports.getOptionsToken = getOptionsToken;
const getStorageToken = () => throttler_storage_interface_1.ThrottlerStorage;
exports.getStorageToken = getStorageToken;
//# sourceMappingURL=throttler.providers.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/throttler.service.js":
/*!******************************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/throttler.service.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThrottlerStorageService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ThrottlerStorageService = class ThrottlerStorageService {
    constructor() {
        this._storage = new Map();
        this.timeoutIds = new Map();
    }
    get storage() {
        return this._storage;
    }
    getExpirationTime(key) {
        return Math.ceil((this.storage.get(key).expiresAt - Date.now()) / 1000);
    }
    getBlockExpirationTime(key) {
        return Math.ceil((this.storage.get(key).blockExpiresAt - Date.now()) / 1000);
    }
    setExpirationTime(key, ttlMilliseconds, throttlerName) {
        const timeoutId = setTimeout(() => {
            const { totalHits } = this.storage.get(key);
            totalHits.set(throttlerName, totalHits.get(throttlerName) - 1);
            clearTimeout(timeoutId);
            this.timeoutIds.set(throttlerName, this.timeoutIds.get(throttlerName).filter((id) => id !== timeoutId));
        }, ttlMilliseconds);
        this.timeoutIds.get(throttlerName).push(timeoutId);
    }
    clearExpirationTimes(throttlerName) {
        this.timeoutIds.get(throttlerName).forEach(clearTimeout);
        this.timeoutIds.set(throttlerName, []);
    }
    resetBlockdRequest(key, throttlerName) {
        this.storage.get(key).isBlocked = false;
        this.storage.get(key).totalHits.set(throttlerName, 0);
        this.clearExpirationTimes(throttlerName);
    }
    fireHitCount(key, throttlerName, ttl) {
        const { totalHits } = this.storage.get(key);
        totalHits.set(throttlerName, totalHits.get(throttlerName) + 1);
        this.setExpirationTime(key, ttl, throttlerName);
    }
    async increment(key, ttl, limit, blockDuration, throttlerName) {
        const ttlMilliseconds = ttl;
        const blockDurationMilliseconds = blockDuration;
        if (!this.timeoutIds.has(throttlerName)) {
            this.timeoutIds.set(throttlerName, []);
        }
        if (!this.storage.has(key)) {
            this.storage.set(key, {
                totalHits: new Map([[throttlerName, 0]]),
                expiresAt: Date.now() + ttlMilliseconds,
                blockExpiresAt: 0,
                isBlocked: false,
            });
        }
        let timeToExpire = this.getExpirationTime(key);
        if (timeToExpire <= 0) {
            this.storage.get(key).expiresAt = Date.now() + ttlMilliseconds;
            timeToExpire = this.getExpirationTime(key);
        }
        if (!this.storage.get(key).isBlocked) {
            this.fireHitCount(key, throttlerName, ttlMilliseconds);
        }
        if (this.storage.get(key).totalHits.get(throttlerName) > limit &&
            !this.storage.get(key).isBlocked) {
            this.storage.get(key).isBlocked = true;
            this.storage.get(key).blockExpiresAt = Date.now() + blockDurationMilliseconds;
        }
        const timeToBlockExpire = this.getBlockExpirationTime(key);
        if (timeToBlockExpire <= 0 && this.storage.get(key).isBlocked) {
            this.resetBlockdRequest(key, throttlerName);
            this.fireHitCount(key, throttlerName, ttlMilliseconds);
        }
        return {
            totalHits: this.storage.get(key).totalHits.get(throttlerName),
            timeToExpire,
            isBlocked: this.storage.get(key).isBlocked,
            timeToBlockExpire: timeToBlockExpire,
        };
    }
    onApplicationShutdown() {
        this.timeoutIds.forEach((timeouts) => timeouts.forEach(clearTimeout));
    }
};
exports.ThrottlerStorageService = ThrottlerStorageService;
exports.ThrottlerStorageService = ThrottlerStorageService = __decorate([
    (0, common_1.Injectable)()
], ThrottlerStorageService);
//# sourceMappingURL=throttler.service.js.map

/***/ }),

/***/ "./node_modules/@nestjs/throttler/dist/utilities.js":
/*!**********************************************************!*\
  !*** ./node_modules/@nestjs/throttler/dist/utilities.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.weeks = exports.days = exports.hours = exports.minutes = exports.seconds = void 0;
const seconds = (howMany) => howMany * 1000;
exports.seconds = seconds;
const minutes = (howMany) => 60 * howMany * (0, exports.seconds)(1);
exports.minutes = minutes;
const hours = (howMany) => 60 * howMany * (0, exports.minutes)(1);
exports.hours = hours;
const days = (howMany) => 24 * howMany * (0, exports.hours)(1);
exports.days = days;
const weeks = (howMany) => 7 * howMany * (0, exports.days)(1);
exports.weeks = weeks;
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ "./apps/api-gateway/src/api-gateway.controller.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_gateway_service_1 = __webpack_require__(/*! ./api-gateway.service */ "./apps/api-gateway/src/api-gateway.service.ts");
let ApiGatewayController = class ApiGatewayController {
    constructor(apiGatewayService) {
        this.apiGatewayService = apiGatewayService;
    }
    getHello() {
        return this.apiGatewayService.getHello();
    }
};
exports.ApiGatewayController = ApiGatewayController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ApiGatewayController.prototype, "getHello", null);
exports.ApiGatewayController = ApiGatewayController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof api_gateway_service_1.ApiGatewayService !== "undefined" && api_gateway_service_1.ApiGatewayService) === "function" ? _a : Object])
], ApiGatewayController);


/***/ }),

/***/ "./apps/api-gateway/src/api-gateway.module.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_gateway_controller_1 = __webpack_require__(/*! ./api-gateway.controller */ "./apps/api-gateway/src/api-gateway.controller.ts");
const api_gateway_service_1 = __webpack_require__(/*! ./api-gateway.service */ "./apps/api-gateway/src/api-gateway.service.ts");
const podcasts_module_1 = __webpack_require__(/*! ./podcasts/podcasts.module */ "./apps/api-gateway/src/podcasts/podcasts.module.ts");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "./node_modules/@nestjs/throttler/dist/index.js");
let ApiGatewayModule = class ApiGatewayModule {
};
exports.ApiGatewayModule = ApiGatewayModule;
exports.ApiGatewayModule = ApiGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            podcasts_module_1.PodcastsModule,
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 20,
                },
            ]),
        ],
        controllers: [api_gateway_controller_1.ApiGatewayController],
        providers: [api_gateway_service_1.ApiGatewayService],
    })
], ApiGatewayModule);


/***/ }),

/***/ "./apps/api-gateway/src/api-gateway.service.ts":
/*!*****************************************************!*\
  !*** ./apps/api-gateway/src/api-gateway.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiGatewayService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ApiGatewayService = class ApiGatewayService {
    getHello() {
        return 'Hello World!';
    }
};
exports.ApiGatewayService = ApiGatewayService;
exports.ApiGatewayService = ApiGatewayService = __decorate([
    (0, common_1.Injectable)()
], ApiGatewayService);


/***/ }),

/***/ "./apps/api-gateway/src/podcasts/dto/create-podcast.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/podcasts/dto/create-podcast.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePodcastDto = void 0;
class CreatePodcastDto {
}
exports.CreatePodcastDto = CreatePodcastDto;


/***/ }),

/***/ "./apps/api-gateway/src/podcasts/dto/update-podcast.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/api-gateway/src/podcasts/dto/update-podcast.dto.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePodcastDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "./node_modules/@nestjs/mapped-types/index.js");
const create_podcast_dto_1 = __webpack_require__(/*! ./create-podcast.dto */ "./apps/api-gateway/src/podcasts/dto/create-podcast.dto.ts");
class UpdatePodcastDto extends (0, mapped_types_1.PartialType)(create_podcast_dto_1.CreatePodcastDto) {
}
exports.UpdatePodcastDto = UpdatePodcastDto;


/***/ }),

/***/ "./apps/api-gateway/src/podcasts/podcasts.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/api-gateway/src/podcasts/podcasts.controller.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const podcasts_service_1 = __webpack_require__(/*! ./podcasts.service */ "./apps/api-gateway/src/podcasts/podcasts.service.ts");
const create_podcast_dto_1 = __webpack_require__(/*! ./dto/create-podcast.dto */ "./apps/api-gateway/src/podcasts/dto/create-podcast.dto.ts");
const update_podcast_dto_1 = __webpack_require__(/*! ./dto/update-podcast.dto */ "./apps/api-gateway/src/podcasts/dto/update-podcast.dto.ts");
let PodcastsController = class PodcastsController {
    constructor(podcastsService) {
        this.podcastsService = podcastsService;
    }
    create(createPodcastDto) {
        return this.podcastsService.create(createPodcastDto);
    }
    findAll() {
        return this.podcastsService.findAll();
    }
    findOne(id) {
        return this.podcastsService.findOne(+id);
    }
    update(id, updatePodcastDto) {
        return this.podcastsService.update(+id, updatePodcastDto);
    }
    remove(id) {
        return this.podcastsService.remove(+id);
    }
};
exports.PodcastsController = PodcastsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_podcast_dto_1.CreatePodcastDto !== "undefined" && create_podcast_dto_1.CreatePodcastDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_podcast_dto_1.UpdatePodcastDto !== "undefined" && update_podcast_dto_1.UpdatePodcastDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "remove", null);
exports.PodcastsController = PodcastsController = __decorate([
    (0, common_1.Controller)('podcasts'),
    __metadata("design:paramtypes", [typeof (_a = typeof podcasts_service_1.PodcastsService !== "undefined" && podcasts_service_1.PodcastsService) === "function" ? _a : Object])
], PodcastsController);


/***/ }),

/***/ "./apps/api-gateway/src/podcasts/podcasts.module.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/podcasts/podcasts.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const podcasts_service_1 = __webpack_require__(/*! ./podcasts.service */ "./apps/api-gateway/src/podcasts/podcasts.service.ts");
const podcasts_controller_1 = __webpack_require__(/*! ./podcasts.controller */ "./apps/api-gateway/src/podcasts/podcasts.controller.ts");
let PodcastsModule = class PodcastsModule {
};
exports.PodcastsModule = PodcastsModule;
exports.PodcastsModule = PodcastsModule = __decorate([
    (0, common_1.Module)({
        controllers: [podcasts_controller_1.PodcastsController],
        providers: [podcasts_service_1.PodcastsService],
    })
], PodcastsModule);


/***/ }),

/***/ "./apps/api-gateway/src/podcasts/podcasts.service.ts":
/*!***********************************************************!*\
  !*** ./apps/api-gateway/src/podcasts/podcasts.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PodcastsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PodcastsService = class PodcastsService {
    create(createPodcastDto) {
        return 'This action adds a new podcast';
    }
    findAll() {
        return `This action returns all podcasts`;
    }
    findOne(id) {
        return `This action returns a #${id} podcast`;
    }
    update(id, updatePodcastDto) {
        return `This action updates a #${id} podcast`;
    }
    remove(id) {
        return `This action removes a #${id} podcast`;
    }
};
exports.PodcastsService = PodcastsService;
exports.PodcastsService = PodcastsService = __decorate([
    (0, common_1.Injectable)()
], PodcastsService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./apps/api-gateway/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const api_gateway_module_1 = __webpack_require__(/*! ./api-gateway.module */ "./apps/api-gateway/src/api-gateway.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(api_gateway_module_1.ApiGatewayModule);
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;