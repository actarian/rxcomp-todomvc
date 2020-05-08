/**
 * @license todomvc v1.0.0-beta.9
 * (c) 2020 Luca Zampetti <lzampetti@gmail.com>
 * License: MIT
 */

(function (rxjs, operators) {
	'use strict';

	var rxjs__default = 'default' in rxjs ? rxjs['default'] : rxjs;
	var operators__default = 'default' in operators ? operators['default'] : operators;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	function __exportStar(m, exports) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}

	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}
	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
	    result.default = mod;
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	function __classPrivateFieldGet(receiver, privateMap) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to get private field on non-instance");
	    }
	    return privateMap.get(receiver);
	}

	function __classPrivateFieldSet(receiver, privateMap, value) {
	    if (!privateMap.has(receiver)) {
	        throw new TypeError("attempted to set private field on non-instance");
	    }
	    privateMap.set(receiver, value);
	    return value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var factory = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.CONTEXTS = {};
	exports.NODES = {};
	var Factory = /** @class */ (function () {
	    function Factory() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        this.rxcompId = -1;
	        this.unsubscribe$ = new rxjs__default.Subject();
	        this.changes$ = new rxjs__default.ReplaySubject(1);
	    }
	    Factory.prototype.onInit = function () { };
	    Factory.prototype.onChanges = function (changes) { };
	    Factory.prototype.onView = function () { };
	    Factory.prototype.onDestroy = function () { };
	    Factory.prototype.pushChanges = function () {
	        this.changes$.next(this);
	        this.onView();
	    };
	    return Factory;
	}());
	exports.default = Factory;
	function getContext(instance) {
	    return exports.CONTEXTS[instance.rxcompId];
	}
	exports.getContext = getContext;
	});

	unwrapExports(factory);
	var factory_1 = factory.CONTEXTS;
	var factory_2 = factory.NODES;
	var factory_3 = factory.getContext;

	var directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var factory_1 = tslib_es6.__importDefault(factory);
	var Directive = /** @class */ (function (_super) {
	    tslib_es6.__extends(Directive, _super);
	    function Directive() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return Directive;
	}(factory_1.default));
	exports.default = Directive;
	});

	unwrapExports(directive);

	var class_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// import Factory, { ExpressionFunction } from '../core/factory';
	var directive_1 = tslib_es6.__importDefault(directive);

	var ClassDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(ClassDirective, _super);
	    function ClassDirective() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.class = '';
	        _this.keys = [];
	        return _this;
	    }
	    ClassDirective.prototype.onInit = function () {
	        var _this = this;
	        var node = factory.getContext(this).node;
	        Array.prototype.slice.call(node.classList).forEach(function (x) { return _this.keys.push(x); });
	    };
	    ClassDirective.prototype.onChanges = function () {
	        var node = factory.getContext(this).node;
	        var keys = [];
	        var object = this.class;
	        if (typeof object === 'object') {
	            for (var key in object) {
	                if (object[key]) {
	                    keys.push(key);
	                }
	            }
	        }
	        else if (typeof object === 'string') {
	            keys = object.split(/\s+/);
	        }
	        keys = keys.concat(this.keys);
	        // console.log(keys);
	        node.setAttribute('class', keys.join(' '));
	        // console.log('ClassDirective.onChanges', keys);
	    };
	    return ClassDirective;
	}(directive_1.default));
	exports.default = ClassDirective;
	ClassDirective.meta = {
	    selector: "[[class]]",
	    inputs: ['class']
	};
	});

	unwrapExports(class_directive);

	var event_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var directive_1 = tslib_es6.__importDefault(directive);

	var EVENTS = ['mousedown', 'mouseup', 'mousemove', 'click', 'dblclick', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'contextmenu', 'touchstart', 'touchmove', 'touchend', 'keydown', 'keyup', 'input', 'change', 'loaded'];
	var EventDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(EventDirective, _super);
	    function EventDirective() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.event = '';
	        return _this;
	    }
	    EventDirective.prototype.onInit = function () {
	        var _a = factory.getContext(this), module = _a.module, node = _a.node, parentInstance = _a.parentInstance, selector = _a.selector;
	        // console.log('parentInstance', parentInstance);
	        var event = this.event = selector.replace(/\[|\]|\(|\)/g, '');
	        var event$ = rxjs__default.fromEvent(node, event).pipe(operators__default.shareReplay(1));
	        var expression = node.getAttribute("(" + event + ")");
	        if (expression) {
	            var outputFunction_1 = module.makeFunction(expression, ['$event']);
	            event$.pipe(operators__default.takeUntil(this.unsubscribe$)).subscribe(function (event) {
	                module.resolve(outputFunction_1, parentInstance, event);
	            });
	        }
	        else {
	            parentInstance[event + "$"] = event$;
	        }
	        // console.log('EventDirective.onInit', 'selector', selector, 'event', event);
	    };
	    return EventDirective;
	}(directive_1.default));
	exports.default = EventDirective;
	EventDirective.meta = {
	    selector: "[(" + EVENTS.join(')],[(') + ")]",
	};
	});

	unwrapExports(event_directive);

	var structure = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var factory_1 = tslib_es6.__importDefault(factory);
	var Structure = /** @class */ (function (_super) {
	    tslib_es6.__extends(Structure, _super);
	    function Structure() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return Structure;
	}(factory_1.default));
	exports.default = Structure;
	});

	unwrapExports(structure);

	var component = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var factory_1 = tslib_es6.__importStar(factory);
	var Component = /** @class */ (function (_super) {
	    tslib_es6.__extends(Component, _super);
	    function Component() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Component.prototype.pushChanges = function () {
	        var _a = factory_1.getContext(this), module = _a.module, node = _a.node;
	        // console.log(new Error(`pushChanges ${instance.constructor.name}`).stack);
	        this.changes$.next(this);
	        // console.log('Module.parse', instance.constructor.name);
	        // parse component text nodes
	        module.parse(node, this);
	        // calling onView event
	        this.onView();
	    };
	    return Component;
	}(factory_1.default));
	exports.default = Component;
	});

	unwrapExports(component);

	var context = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	// import { BehaviorSubject, Subject } from 'rxjs';
	var component_1 = tslib_es6.__importDefault(component);
	var RESERVED_PROPERTIES = ['constructor', 'rxcompId', 'onInit', 'onChanges', 'onDestroy', 'pushChanges', 'changes$', 'unsubscribe$'];
	var Context = /** @class */ (function (_super) {
	    tslib_es6.__extends(Context, _super);
	    function Context(instance, descriptors) {
	        if (descriptors === void 0) { descriptors = {}; }
	        var _this = _super.call(this) || this;
	        descriptors = Context.mergeDescriptors(instance, instance, descriptors);
	        descriptors = Context.mergeDescriptors(Object.getPrototypeOf(instance), instance, descriptors);
	        Object.defineProperties(_this, descriptors);
	        return _this;
	    }
	    Context.mergeDescriptors = function (source, instance, descriptors) {
	        if (descriptors === void 0) { descriptors = {}; }
	        var properties = Object.getOwnPropertyNames(source);
	        var _loop_1 = function () {
	            var key = properties.shift();
	            if (RESERVED_PROPERTIES.indexOf(key) === -1 && !descriptors.hasOwnProperty(key)) {
	                var descriptor = Object.getOwnPropertyDescriptor(source, key);
	                if (typeof descriptor.value == 'function') {
	                    descriptor.value = function () {
	                        var args = [];
	                        for (var _i = 0; _i < arguments.length; _i++) {
	                            args[_i] = arguments[_i];
	                        }
	                        return instance[key].apply(instance, args);
	                    };
	                }
	                descriptors[key] = descriptor;
	            }
	        };
	        while (properties.length) {
	            _loop_1();
	        }
	        return descriptors;
	    };
	    return Context;
	}(component_1.default));
	exports.default = Context;
	});

	unwrapExports(context);

	var for_item = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var context_1 = tslib_es6.__importDefault(context);
	var ForItem = /** @class */ (function (_super) {
	    tslib_es6.__extends(ForItem, _super);
	    // !!! todo: payload options { key, $key, value, $value, index, count }
	    function ForItem(key, $key, value, $value, index, count, parentInstance) {
	        var _this = 
	        // console.log('ForItem', arguments);
	        _super.call(this, parentInstance) || this;
	        /*
	        super(parentInstance, {
	            [key]: {
	                get: function() {
	                    return this.$key;
	                },
	                set: function(key) {
	                    this.$key = key;
	                }
	            },
	            [value]: {
	                get: function() {
	                    return this.$value;
	                },
	                set: function(value) {
	                    this.$value = value;
	                }
	            }
	        });
	        */
	        _this[key] = $key;
	        _this[value] = $value;
	        _this.index = index;
	        _this.count = count;
	        return _this;
	    }
	    Object.defineProperty(ForItem.prototype, "first", {
	        get: function () { return this.index === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ForItem.prototype, "last", {
	        get: function () { return this.index === this.count - 1; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ForItem.prototype, "even", {
	        get: function () { return this.index % 2 === 0; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ForItem.prototype, "odd", {
	        get: function () { return !this.even; },
	        enumerable: true,
	        configurable: true
	    });
	    return ForItem;
	}(context_1.default));
	exports.default = ForItem;
	});

	unwrapExports(for_item);

	var for_structure = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var structure_1 = tslib_es6.__importDefault(structure);
	var for_item_1 = tslib_es6.__importDefault(for_item);
	var ForStructure = /** @class */ (function (_super) {
	    tslib_es6.__extends(ForStructure, _super);
	    function ForStructure() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.instances = [];
	        return _this;
	    }
	    ForStructure.prototype.onInit = function () {
	        var _a = factory.getContext(this), module = _a.module, node = _a.node;
	        var forbegin = document.createComment("*for begin");
	        forbegin.rxcompId = node.rxcompId;
	        node.parentNode.replaceChild(forbegin, node);
	        var forend = this.forend = document.createComment("*for end");
	        forbegin.parentNode.insertBefore(forend, forbegin.nextSibling);
	        var expression = node.getAttribute('*for');
	        node.removeAttribute('*for');
	        var token = this.token = this.getExpressionToken(expression);
	        this.forFunction = module.makeFunction(token.iterable);
	    };
	    ForStructure.prototype.onChanges = function (changes) {
	        var context = factory.getContext(this);
	        var module = context.module;
	        var node = context.node;
	        // resolve
	        var token = this.token;
	        var result = module.resolve(this.forFunction, changes, this) || [];
	        var isArray = Array.isArray(result);
	        var array = isArray ? result : Object.keys(result);
	        var total = array.length;
	        var previous = this.instances.length;
	        for (var i = 0; i < Math.max(previous, total); i++) {
	            if (i < total) {
	                var key = isArray ? i : array[i];
	                var value = isArray ? array[key] : result[key];
	                if (i < previous) {
	                    // update
	                    var instance = this.instances[i];
	                    instance[token.key] = key;
	                    instance[token.value] = value;
	                    /*
	                    if (!nextSibling) {
	                        const context = getContext(instance);
	                        const node = context.node;
	                        this.forend.parentNode.insertBefore(node, this.forend);
	                    } else {
	                        nextSibling = nextSibling.nextSibling;
	                    }
	                    */
	                }
	                else {
	                    // create
	                    var clonedNode = node.cloneNode(true);
	                    delete clonedNode.rxcompId;
	                    this.forend.parentNode.insertBefore(clonedNode, this.forend);
	                    // !!! todo: check context.parentInstance
	                    var args = [token.key, key, token.value, value, i, total, context.parentInstance];
	                    var instance = module.makeInstance(clonedNode, for_item_1.default, context.selector, context.parentInstance, args);
	                    if (instance) {
	                        var forItemContext = factory.getContext(instance);
	                        // console.log('ForStructure', clonedNode, forItemContext.instance.constructor.name);
	                        module.compile(clonedNode, forItemContext.instance);
	                        // nextSibling = clonedNode.nextSibling;
	                        this.instances.push(instance);
	                    }
	                }
	            }
	            else {
	                // remove
	                var instance = this.instances[i];
	                var node_1 = factory.getContext(instance).node;
	                node_1.parentNode.removeChild(node_1);
	                module.remove(node_1);
	            }
	        }
	        this.instances.length = array.length;
	        // console.log('ForStructure', this.instances, token);
	    };
	    ForStructure.prototype.getExpressionToken = function (expression) {
	        if (expression === null) {
	            throw ('invalid for');
	        }
	        if (expression.trim().indexOf('let ') === -1 || expression.trim().indexOf(' of ') === -1) {
	            throw ('invalid for');
	        }
	        var expressions = expression.split(';').map(function (x) { return x.trim(); }).filter(function (x) { return x !== ''; });
	        var forExpressions = expressions[0].split(' of ').map(function (x) { return x.trim(); });
	        var value = forExpressions[0].replace(/\s*let\s*/, '');
	        var iterable = forExpressions[1];
	        var key = 'index';
	        var keyValueMatches = value.match(/\[(.+)\s*,\s*(.+)\]/);
	        if (keyValueMatches) {
	            key = keyValueMatches[1];
	            value = keyValueMatches[2];
	        }
	        if (expressions.length > 1) {
	            var indexExpressions = expressions[1].split(/\s*let\s*|\s*=\s*index/).map(function (x) { return x.trim(); });
	            if (indexExpressions.length === 3) {
	                key = indexExpressions[1];
	            }
	        }
	        return { key: key, value: value, iterable: iterable };
	    };
	    return ForStructure;
	}(structure_1.default));
	exports.default = ForStructure;
	ForStructure.meta = {
	    selector: '[*for]',
	};
	});

	unwrapExports(for_structure);

	var href_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var directive_1 = tslib_es6.__importDefault(directive);

	var HrefDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(HrefDirective, _super);
	    function HrefDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(HrefDirective.prototype, "href", {
	        get: function () {
	            return this.href_;
	        },
	        set: function (href) {
	            if (this.href_ !== href) {
	                this.href_ = href;
	                var node = factory.getContext(this).node;
	                href ? node.setAttribute('href', href) : node.removeAttribute('href');
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return HrefDirective;
	}(directive_1.default));
	exports.default = HrefDirective;
	HrefDirective.meta = {
	    selector: '[[href]]',
	    inputs: ['href'],
	};
	});

	unwrapExports(href_directive);

	var if_structure = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });


	var structure_1 = tslib_es6.__importDefault(structure);
	var IfStructure = /** @class */ (function (_super) {
	    tslib_es6.__extends(IfStructure, _super);
	    function IfStructure() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    IfStructure.prototype.onInit = function () {
	        var _a = factory.getContext(this), module = _a.module, node = _a.node;
	        var ifbegin = this.ifbegin = document.createComment("*if begin");
	        ifbegin.rxcompId = node.rxcompId;
	        node.parentNode.replaceChild(ifbegin, node);
	        var ifend = this.ifend = document.createComment("*if end");
	        ifbegin.parentNode.insertBefore(ifend, ifbegin.nextSibling);
	        var expression = node.getAttribute('*if');
	        this.ifFunction = module.makeFunction(expression);
	        var clonedNode = node.cloneNode(true);
	        clonedNode.removeAttribute('*if');
	        this.clonedNode = clonedNode;
	        this.element = clonedNode.cloneNode(true);
	        // console.log('IfStructure.expression', expression);
	    };
	    IfStructure.prototype.onChanges = function (changes) {
	        var module = factory.getContext(this).module;
	        // console.log('IfStructure.onChanges', changes);
	        var value = module.resolve(this.ifFunction, changes, this);
	        var element = this.element;
	        if (value) {
	            if (!element.parentNode) {
	                var ifend = this.ifend;
	                ifend.parentNode.insertBefore(element, ifend);
	                module.compile(element);
	            }
	        }
	        else {
	            if (element.parentNode) {
	                module.remove(element, this);
	                element.parentNode.removeChild(element);
	                this.element = this.clonedNode.cloneNode(true);
	            }
	        }
	    };
	    IfStructure.meta = {
	        selector: '[*if]',
	    };
	    return IfStructure;
	}(structure_1.default));
	exports.default = IfStructure;
	});

	unwrapExports(if_structure);

	var innerHtml_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var directive_1 = tslib_es6.__importDefault(directive);

	var InnerHtmlDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(InnerHtmlDirective, _super);
	    function InnerHtmlDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(InnerHtmlDirective.prototype, "innerHTML", {
	        get: function () {
	            return this.innerHTML_;
	        },
	        set: function (innerHTML) {
	            if (this.innerHTML_ !== innerHTML) {
	                this.innerHTML_ = innerHTML;
	                var node = factory.getContext(this).node;
	                node.innerHTML = innerHTML == undefined ? '' : innerHTML; // !!! keep == loose equality
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return InnerHtmlDirective;
	}(directive_1.default));
	exports.default = InnerHtmlDirective;
	InnerHtmlDirective.meta = {
	    selector: "[innerHTML]",
	    inputs: ['innerHTML'],
	};
	});

	unwrapExports(innerHtml_directive);

	var pipe = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	var Pipe = /** @class */ (function () {
	    function Pipe() {
	    }
	    Pipe.transform = function (value) {
	        return value;
	    };
	    return Pipe;
	}());
	exports.default = Pipe;
	});

	unwrapExports(pipe);

	var json_pipe = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var pipe_1 = tslib_es6.__importDefault(pipe);
	var JsonPipe = /** @class */ (function (_super) {
	    tslib_es6.__extends(JsonPipe, _super);
	    function JsonPipe() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    // !!! todo: Remove circular structures when converting to JSON
	    JsonPipe.transform = function (value) {
	        return JSON.stringify(value, null, '\t');
	    };
	    return JsonPipe;
	}(pipe_1.default));
	exports.default = JsonPipe;
	JsonPipe.meta = {
	    name: 'json',
	};
	});

	unwrapExports(json_pipe);

	var module = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });



	var component_1 = tslib_es6.__importDefault(component);
	var context_1 = tslib_es6.__importDefault(context);
	var factory_1 = tslib_es6.__importStar(factory);
	var structure_1 = tslib_es6.__importDefault(structure);
	var ID = 0;
	var Module = /** @class */ (function () {
	    function Module() {
	    }
	    Module.prototype.compile = function (node, parentInstance) {
	        var _this = this;
	        var componentNode;
	        var instances = Module.querySelectorsAll(node, this.meta.selectors, []).map(function (match) {
	            if (componentNode && componentNode !== match.node) {
	                parentInstance = undefined;
	            }
	            var instance = _this.makeInstance(match.node, match.factory, match.selector, parentInstance);
	            if (match.factory.prototype instanceof component_1.default) {
	                componentNode = match.node;
	            }
	            return instance;
	        }).filter(function (x) { return x !== undefined; });
	        // console.log('compile', instances, node, parentInstance);
	        return instances;
	    };
	    Module.prototype.makeInstance = function (node, factory, selector, parentInstance, args) {
	        var _this = this;
	        if (parentInstance || node.parentNode) {
	            var meta_1 = factory.meta;
	            // collect parentInstance scope
	            parentInstance = parentInstance || this.getParentInstance(node.parentNode);
	            if (!parentInstance) {
	                return undefined;
	            }
	            // creating factory instance
	            var instance_1 = new (factory.bind.apply(factory, tslib_es6.__spreadArrays([void 0], (args || []))))();
	            // creating instance context
	            var context = Module.makeContext(this, instance_1, parentInstance, node, factory, selector);
	            // creating component input and outputs
	            if (meta_1) {
	                this.makeHosts(meta_1, instance_1, node);
	                context.inputs = this.makeInputs(meta_1, instance_1);
	                context.outputs = this.makeOutputs(meta_1, instance_1);
	                if (parentInstance instanceof factory_1.default) {
	                    this.resolveInputsOutputs(instance_1, parentInstance);
	                }
	            }
	            // calling onInit event
	            instance_1.onInit();
	            // subscribe to parent changes
	            if (parentInstance instanceof factory_1.default) {
	                parentInstance.changes$.pipe(
	                // filter(() => node.parentNode),
	                // debounceTime(1),
	                /*
	                distinctUntilChanged(function(prev, curr) {
	                    // console.log(isComponent, context.inputs);
	                    if (isComponent && meta && Object.keys(context.inputs).length === 0) {
	                        return true; // same
	                    } else {
	                        return false;
	                    }
	                }),
	                */
	                operators__default.takeUntil(instance_1.unsubscribe$)).subscribe(function (changes) {
	                    // resolve component input outputs
	                    if (meta_1) {
	                        _this.resolveInputsOutputs(instance_1, changes);
	                    }
	                    // calling onChanges event with changes
	                    instance_1.onChanges(changes);
	                    // push instance changes for subscribers
	                    instance_1.pushChanges();
	                });
	            }
	            return instance_1;
	        }
	        else {
	            return undefined;
	        }
	    };
	    Module.prototype.makeFunction = function (expression, params) {
	        if (params === void 0) { params = ['$instance']; }
	        if (expression) {
	            expression = Module.parseExpression(expression);
	            // console.log(expression);
	            var args = params.join(',');
	            var expression_func = new Function("with(this) {\n\t\t\t\treturn (function (" + args + ", $$module) {\n\t\t\t\t\tconst $$pipes = $$module.meta.pipes;\n\t\t\t\t\treturn " + expression + ";\n\t\t\t\t}.bind(this)).apply(this, arguments);\n\t\t\t}");
	            // console.log(this, $$module, $$pipes, "${expression}");
	            // console.log(expression_func);
	            return expression_func;
	        }
	        else {
	            return function () { return null; };
	        }
	    };
	    Module.prototype.resolve = function (expression, parentInstance, payload) {
	        // console.log(expression, parentInstance, payload);
	        return expression.apply(parentInstance, [payload, this]);
	    };
	    Module.prototype.parse = function (node, instance) {
	        for (var i = 0; i < node.childNodes.length; i++) {
	            var child = node.childNodes[i];
	            if (child.nodeType === 1) {
	                var element = child;
	                var context = getContextByNode(element);
	                if (!context) {
	                    this.parse(element, instance);
	                }
	            }
	            else if (child.nodeType === 3) {
	                var text = child;
	                this.parseTextNode(text, instance);
	            }
	        }
	    };
	    Module.prototype.remove = function (node, keepInstance) {
	        var keepContext = keepInstance ? factory_1.getContext(keepInstance) : undefined;
	        Module.traverseDown(node, function (node) {
	            var rxcompId = node.rxcompId;
	            if (rxcompId) {
	                var keepContexts = Module.deleteContext(rxcompId, keepContext);
	                if (keepContexts.length === 0) {
	                    delete node.rxcompId;
	                }
	            }
	        });
	        return node;
	    };
	    Module.prototype.destroy = function () {
	        this.remove(this.meta.node);
	        this.meta.node.innerHTML = this.meta.nodeInnerHTML;
	    };
	    Module.prototype.makeContext = function (instance, parentInstance, node, selector) {
	        var context = Module.makeContext(this, instance, parentInstance, node, instance.constructor, selector);
	        // console.log('Module.makeContext', context, context.instance, context.node);
	        return context;
	    };
	    Module.prototype.getInstance = function (node) {
	        if (node instanceof Document) {
	            return window; // !!! window or global
	        }
	        var context = getContextByNode(node);
	        if (context) {
	            return context.instance;
	        }
	        else {
	            return undefined;
	        }
	    };
	    Module.prototype.getParentInstance = function (node) {
	        var _this = this;
	        return Module.traverseUp(node, function (node) {
	            return _this.getInstance(node);
	        });
	    };
	    // reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
	    Module.prototype.parseTextNode = function (node, instance) {
	        var _this = this;
	        var expressions = node.nodeExpressions;
	        if (!expressions) {
	            expressions = this.parseTextNodeExpression(node.wholeText);
	        }
	        var replacedText = expressions.reduce(function (p, c) {
	            var text;
	            if (typeof c === 'function') { // instanceOf ExpressionFunction ?;
	                text = _this.resolve(c, instance, instance);
	                if (text == undefined) { // !!! keep == loose equality
	                    text = '';
	                }
	            }
	            else {
	                text = c;
	            }
	            return p + text;
	        }, '');
	        if (node.nodeValue !== replacedText) {
	            var textNode = document.createTextNode(replacedText);
	            textNode.nodeExpressions = expressions;
	            node.parentNode.replaceChild(textNode, node);
	        }
	    };
	    Module.prototype.pushFragment = function (nodeValue, from, to, expressions) {
	        var fragment = nodeValue.substring(from, to);
	        expressions.push(fragment);
	    };
	    Module.prototype.parseTextNodeExpression = function (nodeValue) {
	        var expressions = [];
	        var regex = /\{{2}((([^{}])|(\{([^{}]|(\{.*?\}))+?\}))*?)\}{2}/g;
	        var lastIndex = 0, matches;
	        while ((matches = regex.exec(nodeValue)) !== null) {
	            var index = regex.lastIndex - matches[0].length;
	            if (index > lastIndex) {
	                this.pushFragment(nodeValue, index, lastIndex, expressions);
	            }
	            lastIndex = regex.lastIndex;
	            var expression = this.makeFunction(matches[1]);
	            expressions.push(expression);
	        }
	        var length = nodeValue.length;
	        if (length > lastIndex) {
	            this.pushFragment(nodeValue, lastIndex, length, expressions);
	        }
	        return expressions;
	    };
	    Module.prototype.makeHosts = function (meta, instance, node) {
	        if (meta.hosts) {
	            Object.keys(meta.hosts).forEach(function (key) {
	                var factory = meta.hosts[key];
	                instance[key] = getHost(instance, factory, node);
	            });
	        }
	    };
	    Module.prototype.makeInput = function (instance, key) {
	        var node = factory_1.getContext(instance).node;
	        var input = null, expression = null;
	        if (node.hasAttribute("[" + key + "]")) {
	            expression = node.getAttribute("[" + key + "]");
	        }
	        else if (node.hasAttribute(key)) {
	            // const attribute = node.getAttribute(key).replace(/{{/g, '"+').replace(/}}/g, '+"');
	            var attribute = node.getAttribute(key).replace(/({{)|(}})|(")/g, function (substring, a, b, c) {
	                if (a) {
	                    return '"+';
	                }
	                if (b) {
	                    return '+"';
	                }
	                if (c) {
	                    return '\"';
	                }
	                return '';
	            });
	            expression = "\"" + attribute + "\"";
	        }
	        if (expression) {
	            input = this.makeFunction(expression);
	        }
	        return input;
	    };
	    Module.prototype.makeInputs = function (meta, instance) {
	        var _this = this;
	        var inputs = {};
	        if (meta.inputs) {
	            meta.inputs.forEach(function (key, i) {
	                var input = _this.makeInput(instance, key);
	                if (input) {
	                    inputs[key] = input;
	                }
	            });
	        }
	        return inputs;
	    };
	    Module.prototype.makeOutput = function (instance, key) {
	        var _this = this;
	        var context = factory_1.getContext(instance);
	        var node = context.node;
	        var parentInstance = context.parentInstance;
	        var expression = node.getAttribute("(" + key + ")");
	        var outputFunction = expression ? this.makeFunction(expression, ['$event']) : null;
	        var output$ = new rxjs__default.Subject().pipe(operators__default.tap(function (event) {
	            if (outputFunction) {
	                // console.log(expression, parentInstance);
	                _this.resolve(outputFunction, parentInstance, event);
	            }
	        }));
	        output$.pipe(operators__default.takeUntil(instance.unsubscribe$)).subscribe();
	        instance[key] = output$;
	        return output$;
	    };
	    Module.prototype.makeOutputs = function (meta, instance) {
	        var _this = this;
	        var outputs = {};
	        if (meta.outputs) {
	            meta.outputs.forEach(function (key) {
	                var output = _this.makeOutput(instance, key);
	                if (output) {
	                    outputs[key] = output;
	                }
	            });
	        }
	        return outputs;
	    };
	    Module.prototype.resolveInputsOutputs = function (instance, changes) {
	        var context = factory_1.getContext(instance);
	        var parentInstance = context.parentInstance;
	        var inputs = context.inputs;
	        for (var key in inputs) {
	            var inputFunction = inputs[key];
	            var value = this.resolve(inputFunction, parentInstance, instance);
	            instance[key] = value;
	        }
	    };
	    Module.parseExpression = function (expression) {
	        var l = '┌';
	        var r = '┘';
	        var rx1 = /(\()([^\(\)]*)(\))/;
	        while (expression.match(rx1)) {
	            expression = expression.replace(rx1, function (substring) {
	                var args = [];
	                for (var _i = 1; _i < arguments.length; _i++) {
	                    args[_i - 1] = arguments[_i];
	                }
	                return "" + l + Module.parsePipes(args[1]) + r;
	            });
	        }
	        expression = Module.parsePipes(expression);
	        expression = expression.replace(/(┌)|(┘)/g, function (substring) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            return args[0] ? '(' : ')';
	        });
	        return Module.parseOptionalChaining(expression);
	    };
	    Module.parsePipes = function (expression) {
	        var l = '┌';
	        var r = '┘';
	        var rx1 = /(.*?[^\|])\|([^\|]+)/;
	        while (expression.match(rx1)) {
	            expression = expression.replace(rx1, function (substring) {
	                var args = [];
	                for (var _i = 1; _i < arguments.length; _i++) {
	                    args[_i - 1] = arguments[_i];
	                }
	                var value = args[0].trim();
	                var params = Module.parsePipeParams(args[1]);
	                var func = params.shift().trim();
	                return "$$pipes." + func + ".transform" + l + tslib_es6.__spreadArrays([value], params) + r;
	            });
	        }
	        return expression;
	    };
	    Module.parsePipeParams = function (expression) {
	        var segments = [];
	        var i = 0, word = '', block = 0;
	        var t = expression.length;
	        while (i < t) {
	            var c = expression.substr(i, 1);
	            if (c === '{' || c === '(' || c === '[') {
	                block++;
	            }
	            if (c === '}' || c === ')' || c === ']') {
	                block--;
	            }
	            if (c === ':' && block === 0) {
	                if (word.length) {
	                    segments.push(word.trim());
	                }
	                word = '';
	            }
	            else {
	                word += c;
	            }
	            i++;
	        }
	        if (word.length) {
	            segments.push(word.trim());
	        }
	        return segments;
	    };
	    Module.parseOptionalChaining = function (expression) {
	        var regex = /(\w+(\?\.))+([\.|\w]+)/g;
	        var previous;
	        expression = expression.replace(regex, function (substring) {
	            var args = [];
	            for (var _i = 1; _i < arguments.length; _i++) {
	                args[_i - 1] = arguments[_i];
	            }
	            var tokens = substring.split('?.');
	            for (var i = 0; i < tokens.length - 1; i++) {
	                var a = i > 0 ? "(" + tokens[i] + " = " + previous + ")" : tokens[i];
	                var b = tokens[i + 1];
	                previous = i > 0 ? a + "." + b : "(" + a + " ? " + a + "." + b + " : void 0)";
	            }
	            return previous || '';
	        });
	        return expression;
	    };
	    Module.makeContext = function (module, instance, parentInstance, node, factory, selector) {
	        instance.rxcompId = ++ID;
	        var context = { module: module, instance: instance, parentInstance: parentInstance, node: node, factory: factory, selector: selector };
	        var rxcompNodeId = node.rxcompId = (node.rxcompId || instance.rxcompId);
	        var nodeContexts = factory_1.NODES[rxcompNodeId] || (factory_1.NODES[rxcompNodeId] = []);
	        nodeContexts.push(context);
	        factory_1.CONTEXTS[instance.rxcompId] = context;
	        return context;
	    };
	    Module.deleteContext = function (id, keepContext) {
	        var keepContexts = [];
	        var nodeContexts = factory_1.NODES[id];
	        if (nodeContexts) {
	            nodeContexts.forEach(function (context) {
	                if (context === keepContext) {
	                    keepContexts.push(keepContext);
	                }
	                else {
	                    var instance = context.instance;
	                    instance.unsubscribe$.next();
	                    instance.unsubscribe$.complete();
	                    instance.onDestroy();
	                    delete factory_1.CONTEXTS[instance.rxcompId];
	                }
	            });
	            if (keepContexts.length) {
	                factory_1.NODES[id] = keepContexts;
	            }
	            else {
	                delete factory_1.NODES[id];
	            }
	        }
	        return keepContexts;
	    };
	    Module.matchSelectors = function (node, selectors, results) {
	        for (var i = 0; i < selectors.length; i++) {
	            var selectorResult = selectors[i](node);
	            if (selectorResult) {
	                var factory = selectorResult.factory;
	                if (factory.prototype instanceof component_1.default && factory.meta.template) {
	                    node.innerHTML = factory.meta.template;
	                }
	                results.push(selectorResult);
	                if (factory.prototype instanceof structure_1.default) {
	                    // console.log('Structure', node);
	                    break;
	                }
	            }
	        }
	        return results;
	    };
	    Module.querySelectorsAll = function (node, selectors, results) {
	        if (node.nodeType === 1) {
	            var selectorResults = this.matchSelectors(node, selectors, []);
	            results = results.concat(selectorResults);
	            var structure = selectorResults.find(function (x) { return x.factory.prototype instanceof structure_1.default; });
	            if (structure) {
	                return results;
	            }
	            var childNodes = node.childNodes;
	            for (var i = 0; i < childNodes.length; i++) {
	                results = this.querySelectorsAll(childNodes[i], selectors, results);
	            }
	        }
	        return results;
	    };
	    Module.traverseUp = function (node, callback, i) {
	        if (i === void 0) { i = 0; }
	        if (!node) {
	            return;
	        }
	        var result = callback(node, i);
	        if (result) {
	            return result;
	        }
	        return this.traverseUp(node.parentNode, callback, i + 1);
	    };
	    Module.traverseDown = function (node, callback, i) {
	        if (i === void 0) { i = 0; }
	        if (!node) {
	            return;
	        }
	        var result = callback(node, i);
	        if (result) {
	            return result;
	        }
	        if (node.nodeType === 1) {
	            var j = 0, t = node.childNodes.length;
	            while (j < t && !result) {
	                result = this.traverseDown(node.childNodes[j], callback, i + 1);
	                j++;
	            }
	        }
	        return result;
	    };
	    Module.traversePrevious = function (node, callback, i) {
	        if (i === void 0) { i = 0; }
	        if (!node) {
	            return;
	        }
	        var result = callback(node, i);
	        if (result) {
	            return result;
	        }
	        return this.traversePrevious(node.previousSibling, callback, i + 1);
	    };
	    Module.traverseNext = function (node, callback, i) {
	        if (i === void 0) { i = 0; }
	        if (!node) {
	            return;
	        }
	        var result = callback(node, i);
	        if (result) {
	            return result;
	        }
	        return this.traverseNext(node.nextSibling, callback, i + 1);
	    };
	    return Module;
	}());
	exports.default = Module;
	function getContextByNode(node) {
	    var context;
	    var rxcompId = node.rxcompId;
	    if (rxcompId) {
	        var nodeContexts = factory_1.NODES[rxcompId];
	        if (nodeContexts) {
	            context = nodeContexts.reduce(function (previous, current) {
	                if (current.factory.prototype instanceof component_1.default) {
	                    return current;
	                }
	                else if (current.factory.prototype instanceof context_1.default) {
	                    return previous ? previous : current;
	                }
	                else {
	                    return previous;
	                }
	            }, undefined);
	            // console.log(node.rxcompId, context);
	        }
	    }
	    return context;
	}
	exports.getContextByNode = getContextByNode;
	function getHost(instance, factory, node) {
	    if (!node) {
	        node = factory_1.getContext(instance).node;
	    }
	    if (node.rxcompId) {
	        var nodeContexts = factory_1.NODES[node.rxcompId];
	        if (nodeContexts) {
	            // console.log(nodeContexts);
	            for (var i = 0; i < nodeContexts.length; i++) {
	                var context = nodeContexts[i];
	                if (context.instance !== instance) {
	                    // console.log(context.instance, instance);
	                    if (context.instance instanceof factory) {
	                        return context.instance;
	                    }
	                }
	            }
	        }
	    }
	    if (node.parentNode) {
	        return getHost(instance, factory, node.parentNode);
	    }
	    else {
	        return undefined;
	    }
	}
	exports.getHost = getHost;
	});

	unwrapExports(module);
	var module_1 = module.getContextByNode;
	var module_2 = module.getHost;

	var src_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var directive_1 = tslib_es6.__importDefault(directive);

	var SrcDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(SrcDirective, _super);
	    function SrcDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(SrcDirective.prototype, "src", {
	        get: function () {
	            return this.src_;
	        },
	        set: function (src) {
	            if (this.src_ !== src) {
	                this.src_ = src;
	                var node = factory.getContext(this).node;
	                src ? node.setAttribute('src', src) : node.removeAttribute('src');
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return SrcDirective;
	}(directive_1.default));
	exports.default = SrcDirective;
	SrcDirective.meta = {
	    selector: '[[src]]',
	    inputs: ['src'],
	};
	});

	unwrapExports(src_directive);

	var style_directive = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var directive_1 = tslib_es6.__importDefault(directive);

	var StyleDirective = /** @class */ (function (_super) {
	    tslib_es6.__extends(StyleDirective, _super);
	    function StyleDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    StyleDirective.prototype.onChanges = function () {
	        var node = factory.getContext(this).node;
	        var style = this.style;
	        var previousStyle = this.previousStyle;
	        if (previousStyle) {
	            for (var key in previousStyle) {
	                if (!style || !style[key]) {
	                    var splitted = key.split('.');
	                    var propertyName = splitted.shift();
	                    node.style.removeProperty(propertyName);
	                }
	            }
	        }
	        if (style) {
	            for (var key in style) {
	                if (!previousStyle || previousStyle[key] !== style[key]) {
	                    var splitted = key.split('.');
	                    var propertyName = splitted.shift();
	                    var value = style[key] + (splitted.length ? splitted[0] : '');
	                    // console.log(propertyName, value, style, key, style[key]);
	                    node.style.setProperty(propertyName, value);
	                }
	            }
	        }
	        this.previousStyle = style;
	        // console.log('StyleDirective.onChanges', style);
	    };
	    return StyleDirective;
	}(directive_1.default));
	exports.default = StyleDirective;
	StyleDirective.meta = {
	    selector: "[[style]]",
	    inputs: ['style']
	};
	});

	unwrapExports(style_directive);

	var core_module = createCommonjsModule(function (module$1, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var class_directive_1 = tslib_es6.__importDefault(class_directive);
	var event_directive_1 = tslib_es6.__importDefault(event_directive);
	var for_structure_1 = tslib_es6.__importDefault(for_structure);
	var href_directive_1 = tslib_es6.__importDefault(href_directive);
	var if_structure_1 = tslib_es6.__importDefault(if_structure);
	var inner_html_directive_1 = tslib_es6.__importDefault(innerHtml_directive);
	var json_pipe_1 = tslib_es6.__importDefault(json_pipe);
	var module_1 = tslib_es6.__importDefault(module);
	var src_directive_1 = tslib_es6.__importDefault(src_directive);
	var style_directive_1 = tslib_es6.__importDefault(style_directive);
	var factories = [
	    class_directive_1.default,
	    event_directive_1.default,
	    for_structure_1.default,
	    href_directive_1.default,
	    if_structure_1.default,
	    inner_html_directive_1.default,
	    src_directive_1.default,
	    style_directive_1.default,
	];
	var pipes = [
	    json_pipe_1.default,
	];
	var CoreModule = /** @class */ (function (_super) {
	    tslib_es6.__extends(CoreModule, _super);
	    function CoreModule() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CoreModule.meta = {
	        declarations: tslib_es6.__spreadArrays(factories, pipes),
	        exports: tslib_es6.__spreadArrays(factories, pipes)
	    };
	    return CoreModule;
	}(module_1.default));
	exports.default = CoreModule;
	});

	unwrapExports(core_module);

	var platform = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var component_1 = tslib_es6.__importDefault(component);
	var directive_1 = tslib_es6.__importDefault(directive);
	var factory_1 = tslib_es6.__importDefault(factory);
	var pipe_1 = tslib_es6.__importDefault(pipe);
	var structure_1 = tslib_es6.__importDefault(structure);
	var ORDER = [structure_1.default, component_1.default, directive_1.default];
	var Platform = /** @class */ (function () {
	    function Platform() {
	    }
	    Platform.bootstrap = function (moduleFactory) {
	        if (!moduleFactory) {
	            throw ('missing moduleFactory');
	        }
	        if (!moduleFactory.meta) {
	            throw ('missing moduleFactory meta');
	        }
	        if (!moduleFactory.meta.bootstrap) {
	            throw ('missing bootstrap');
	        }
	        if (!moduleFactory.meta.bootstrap.meta) {
	            throw ('missing bootstrap meta');
	        }
	        if (!moduleFactory.meta.bootstrap.meta.selector) {
	            throw ('missing bootstrap meta selector');
	        }
	        var meta = this.resolveMeta(moduleFactory);
	        var module = new moduleFactory();
	        module.meta = meta;
	        var instances = module.compile(meta.node, window);
	        var root = instances[0];
	        // if (root instanceof module.meta.bootstrap) {
	        root.pushChanges();
	        // }
	        return module;
	    };
	    Platform.isBrowser = function () {
	        return Boolean(window);
	    };
	    // static isServer() {}
	    Platform.querySelector = function (selector) {
	        return document.querySelector(selector);
	    };
	    Platform.resolveMeta = function (moduleFactory) {
	        var meta = this.resolveImportedMeta(moduleFactory);
	        var bootstrap = moduleFactory.meta.bootstrap;
	        var node = this.querySelector(bootstrap.meta.selector);
	        if (!node) {
	            throw ("missing node " + bootstrap.meta.selector);
	        }
	        var nodeInnerHTML = node.innerHTML;
	        var pipes = this.resolvePipes(meta);
	        var factories = this.resolveFactories(meta);
	        this.sortFactories(factories);
	        factories.unshift(bootstrap);
	        var selectors = this.unwrapSelectors(factories);
	        return { factories: factories, pipes: pipes, selectors: selectors, bootstrap: bootstrap, node: node, nodeInnerHTML: nodeInnerHTML };
	    };
	    Platform.resolveImportedMeta = function (moduleFactory) {
	        var _this = this;
	        var meta = Object.assign({
	            imports: [],
	            declarations: [],
	            pipes: [],
	            exports: []
	        }, moduleFactory.meta);
	        meta.imports = (moduleFactory.meta.imports || []).map(function (moduleFactory) { return _this.resolveImportedMeta(moduleFactory); });
	        return meta;
	    };
	    Platform.resolvePipes = function (meta, exported) {
	        var _this = this;
	        var importedPipes = meta.imports.map(function (importMeta) { return _this.resolvePipes(importMeta, true); });
	        var pipes = {};
	        var pipeList = (exported ? meta.exports : meta.declarations).filter(function (x) { return x.prototype instanceof pipe_1.default; });
	        pipeList.forEach(function (pipeFactory) { return pipes[pipeFactory.meta.name] = pipeFactory; });
	        return Object.assign.apply(Object, tslib_es6.__spreadArrays([{}], importedPipes, [pipes]));
	    };
	    Platform.resolveFactories = function (meta, exported) {
	        var _a;
	        var _this = this;
	        var importedFactories = meta.imports.map(function (importMeta) { return _this.resolveFactories(importMeta, true); });
	        var factoryList = (exported ? meta.exports : meta.declarations).filter(function (x) { return x.prototype instanceof factory_1.default; });
	        return (_a = Array.prototype.concat).call.apply(_a, tslib_es6.__spreadArrays([factoryList], importedFactories));
	    };
	    Platform.sortFactories = function (factories) {
	        factories.sort(function (a, b) {
	            var ai = ORDER.reduce(function (p, c, i) { return a.prototype instanceof c ? i : p; }, -1);
	            var bi = ORDER.reduce(function (p, c, i) { return b.prototype instanceof c ? i : p; }, -1);
	            // return ai - bi;
	            var o = ai - bi;
	            if (o === 0) {
	                return (a.meta.hosts ? 1 : 0) - (b.meta.hosts ? 1 : 0);
	            }
	            return o;
	        });
	    };
	    Platform.getExpressions = function (selector) {
	        var matchers = [];
	        selector.replace(/\.([\w\-\_]+)|\[(.+?\]*)(\=)(.*?)\]|\[(.+?\]*)\]|([\w\-\_]+)/g, function (value, c1, a2, u3, v4, a5, e6) {
	            if (c1) {
	                matchers.push(function (node) {
	                    return node.classList.contains(c1);
	                });
	            }
	            if (a2) {
	                matchers.push(function (node) {
	                    return (node.hasAttribute(a2) && node.getAttribute(a2) === v4) ||
	                        (node.hasAttribute("[" + a2 + "]") && node.getAttribute("[" + a2 + "]") === v4);
	                });
	            }
	            if (a5) {
	                matchers.push(function (node) {
	                    return node.hasAttribute(a5) || node.hasAttribute("[" + a5 + "]");
	                });
	            }
	            if (e6) {
	                matchers.push(function (node) {
	                    return node.nodeName.toLowerCase() === e6.toLowerCase();
	                });
	            }
	            return '';
	        });
	        return matchers;
	    };
	    Platform.unwrapSelectors = function (factories) {
	        var _this = this;
	        var selectors = [];
	        factories.forEach(function (factory) {
	            if (factory.meta && factory.meta.selector) {
	                factory.meta.selector.split(',').forEach(function (selector) {
	                    selector = selector.trim();
	                    var excludes = [];
	                    var matchSelector = selector.replace(/\:not\((.+?)\)/g, function (value, unmatchSelector) {
	                        excludes = _this.getExpressions(unmatchSelector);
	                        return '';
	                    });
	                    var includes = _this.getExpressions(matchSelector);
	                    selectors.push(function (node) {
	                        var included = includes.reduce(function (p, match) {
	                            return p && match(node);
	                        }, true);
	                        var excluded = excludes.reduce(function (p, match) {
	                            return p || match(node);
	                        }, false);
	                        if (included && !excluded) {
	                            return { node: node, factory: factory, selector: selector };
	                        }
	                        else {
	                            return false;
	                        }
	                    });
	                });
	            }
	        });
	        return selectors;
	    };
	    return Platform;
	}());
	exports.default = Platform;
	});

	unwrapExports(platform);

	var browser = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	var platform_1 = tslib_es6.__importDefault(platform);
	var Browser = /** @class */ (function (_super) {
	    tslib_es6.__extends(Browser, _super);
	    function Browser() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return Browser;
	}(platform_1.default));
	exports.default = Browser;
	});

	unwrapExports(browser);

	var rxcomp = createCommonjsModule(function (module$1, exports) {
	Object.defineProperty(exports, "__esModule", { value: true });

	exports.ClassDirective = class_directive.default;

	exports.CoreModule = core_module.default;

	exports.Component = component.default;

	exports.Context = context.default;

	exports.Directive = directive.default;

	exports.Factory = factory.default;
	exports.getContext = factory.getContext;

	exports.Pipe = pipe.default;

	exports.Structure = structure.default;

	exports.EventDirective = event_directive.default;

	exports.ForItem = for_item.default;

	exports.ForStructure = for_structure.default;

	exports.HrefDirective = href_directive.default;

	exports.IfStructure = if_structure.default;

	exports.InnerHtmlDirective = innerHtml_directive.default;

	exports.JsonPipe = json_pipe.default;

	exports.Module = module.default;
	exports.getContextByNode = module.getContextByNode;
	exports.getHost = module.getHost;

	exports.Browser = browser.default;

	exports.Platform = platform.default;

	exports.SrcDirective = src_directive.default;

	exports.StyleDirective = style_directive.default;
	});

	unwrapExports(rxcomp);
	var rxcomp_1 = rxcomp.ClassDirective;
	var rxcomp_2 = rxcomp.CoreModule;
	var rxcomp_3 = rxcomp.Component;
	var rxcomp_4 = rxcomp.Context;
	var rxcomp_5 = rxcomp.Directive;
	var rxcomp_6 = rxcomp.Factory;
	var rxcomp_7 = rxcomp.getContext;
	var rxcomp_8 = rxcomp.Pipe;
	var rxcomp_9 = rxcomp.Structure;
	var rxcomp_10 = rxcomp.EventDirective;
	var rxcomp_11 = rxcomp.ForItem;
	var rxcomp_12 = rxcomp.ForStructure;
	var rxcomp_13 = rxcomp.HrefDirective;
	var rxcomp_14 = rxcomp.IfStructure;
	var rxcomp_15 = rxcomp.InnerHtmlDirective;
	var rxcomp_16 = rxcomp.JsonPipe;
	var rxcomp_17 = rxcomp.Module;
	var rxcomp_18 = rxcomp.getContextByNode;
	var rxcomp_19 = rxcomp.getHost;
	var rxcomp_20 = rxcomp.Browser;
	var rxcomp_21 = rxcomp.Platform;
	var rxcomp_22 = rxcomp.SrcDirective;
	var rxcomp_23 = rxcomp.StyleDirective;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var LocalStorageService = function () {
	  function LocalStorageService() {}

	  LocalStorageService.delete = function _delete(name) {
	    if (this.isLocalStorageSupported()) {
	      window.localStorage.removeItem(name);
	    }
	  };

	  LocalStorageService.exist = function exist(name) {
	    if (this.isLocalStorageSupported()) {
	      return window.localStorage[name] !== undefined;
	    }
	  };

	  LocalStorageService.get = function get(name) {
	    var value = null;

	    if (this.isLocalStorageSupported() && window.localStorage[name] !== undefined) {
	      try {
	        value = JSON.parse(window.localStorage[name]);
	      } catch (e) {
	        console.log('LocalStorageService.get.error parsing', name, e);
	      }
	    }

	    return value;
	  };

	  LocalStorageService.set = function set(name, value) {
	    if (this.isLocalStorageSupported()) {
	      try {
	        var cache = [];
	        var json = JSON.stringify(value, function (key, value) {
	          if (typeof value === 'object' && value !== null) {
	            if (cache.indexOf(value) !== -1) {
	              return;
	            }

	            cache.push(value);
	          }

	          return value;
	        });
	        window.localStorage.setItem(name, json);
	      } catch (e) {
	        console.log('LocalStorageService.set.error serializing', name, value, e);
	      }
	    }
	  };

	  LocalStorageService.isLocalStorageSupported = function isLocalStorageSupported() {
	    if (this.supported) {
	      return true;
	    }

	    var supported = false;

	    try {
	      supported = 'localStorage' in window && window.localStorage !== null;

	      if (supported) {
	        window.localStorage.setItem('test', '1');
	        window.localStorage.removeItem('test');
	      } else {
	        supported = false;
	      }
	    } catch (e) {
	      supported = false;
	    }

	    this.supported = supported;
	    return supported;
	  };

	  return LocalStorageService;
	}();

	var StoreService = function () {
	  function StoreService() {}

	  StoreService.set = function set(items) {
	    LocalStorageService.set('items', items);
	    return this.get$().next(items);
	  };

	  StoreService.get$ = function get$() {
	    if (this.store$) {
	      return this.store$;
	    }

	    var items = LocalStorageService.get('items');

	    if (!items) {
	      items = [{
	        id: 5,
	        name: 'Cookies',
	        date: new Date(Date.now())
	      }, {
	        id: 4,
	        name: 'Pizza',
	        date: new Date(2019, 4, 4, 12)
	      }, {
	        id: 3,
	        name: 'Pasta',
	        date: new Date(2019, 3, 22, 12)
	      }, {
	        id: 2,
	        name: 'Bread',
	        date: new Date(2019, 0, 6, 12)
	      }, {
	        id: 1,
	        name: 'Ham',
	        date: new Date(2018, 11, 30, 12)
	      }];
	      LocalStorageService.set('items', items);
	    }

	    this.store$ = new rxjs.BehaviorSubject(items);
	    return this.store$.pipe(operators.delay(1));
	  };

	  StoreService.add$ = function add$(patch) {
	    var item = Object.assign({
	      id: Date.now(),
	      date: new Date(Date.now())
	    }, patch);
	    var items = this.store$.getValue();
	    items.unshift(item);
	    this.set(items);
	    return rxjs.of(item).pipe(operators.delay(1));
	  };

	  StoreService.patch$ = function patch$(patch) {
	    var items = this.store$.getValue();
	    var item = items.find(function (x) {
	      return x.id === patch.id;
	    });

	    if (item) {
	      Object.assign(item, patch);
	      this.set(items);
	    }

	    return rxjs.of(item).pipe(operators.delay(1));
	  };

	  StoreService.delete$ = function delete$(item) {
	    var items = this.store$.getValue();
	    var index = items.indexOf(item);

	    if (index !== -1) {
	      items.splice(index, 1);
	      this.set(items);
	    }

	    return rxjs.of(item).pipe(operators.delay(1));
	  };

	  return StoreService;
	}();

	var AppComponent = function (_Component) {
	  _inheritsLoose(AppComponent, _Component);

	  function AppComponent() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = AppComponent.prototype;

	  _proto.onInit = function onInit() {
	    var _this = this;

	    var context = rxcomp_7(this);
	    this.input = context.node.querySelector('.control--text');
	    this.items = [];
	    this.store$ = StoreService.get$();
	    this.store$.pipe(operators.takeUntil(this.unsubscribe$)).subscribe(function (items) {
	      _this.items = items;

	      _this.pushChanges();
	    });
	  };

	  _proto.onView = function onView() {
	    var context = rxcomp_7(this);
	  };

	  _proto.onInput = function onInput($event) {
	    this.pushChanges();
	  };

	  _proto.onAddItem = function onAddItem($event) {
	    var _this2 = this;

	    if (this.input.value) {
	      StoreService.add$({
	        name: this.input.value
	      }).subscribe(function (item) {
	        _this2.input.value = null;
	      });
	    }
	  };

	  _proto.onToggleItem = function onToggleItem(item) {
	    StoreService.patch$({
	      id: item.id,
	      done: !item.done
	    }).subscribe(function (item) {});
	  };

	  _proto.onRemoveItem = function onRemoveItem(item) {
	    StoreService.delete$(item).subscribe(function (item) {});
	  };

	  return AppComponent;
	}(rxcomp_3);
	AppComponent.meta = {
	  selector: '[app-component]'
	};

	var DatePipe = function (_Pipe) {
	  _inheritsLoose(DatePipe, _Pipe);

	  function DatePipe() {
	    return _Pipe.apply(this, arguments) || this;
	  }

	  DatePipe.transform = function transform(value, locale, options) {
	    if (locale === void 0) {
	      locale = 'it-IT-u-ca-gregory';
	    }

	    if (options === void 0) {
	      options = {
	        dateStyle: 'short',
	        timeStyle: 'short'
	      };
	    }

	    var localeDateString = new Date(value).toLocaleDateString(locale, options);
	    return localeDateString;
	  };

	  return DatePipe;
	}(rxcomp_8);
	DatePipe.meta = {
	  name: 'date'
	};

	var colors = [{
	  hex: '#ffffff',
	  background: '#ffffff',
	  foreground: '#003adc',
	  accent: '#212121'
	}, {
	  hex: '#212121',
	  background: '#212121',
	  foreground: '#ffffff',
	  accent: '#003adc'
	}, {
	  hex: '#ffffff',
	  background: '#ffffff',
	  foreground: '#212121',
	  accent: '#003adc'
	}, {
	  hex: '#003adc',
	  background: '#003adc',
	  foreground: '#ffffff',
	  accent: '#212121'
	}];
	function background(index, alpha) {
	  return hexToRgb(colors[index % colors.length].background, alpha);
	}
	function foreground(index, alpha) {
	  return hexToRgb(colors[index % colors.length].foreground, alpha);
	}
	function accent(index, alpha) {
	  return hexToRgb(colors[index % colors.length].accent, alpha);
	}
	function hexToRgb(hex, a) {
	  var r = parseInt(hex.slice(1, 3), 16);
	  var g = parseInt(hex.slice(3, 5), 16);
	  var b = parseInt(hex.slice(5, 7), 16);

	  if (a) {
	    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	  } else {
	    return "rgb(" + r + "," + g + "," + b + ")";
	  }
	}

	var TodoItemComponent = function (_Component) {
	  _inheritsLoose(TodoItemComponent, _Component);

	  function TodoItemComponent() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = TodoItemComponent.prototype;

	  _proto.onChanges = function onChanges(changes) {
	    this.background = background(this.item.id);
	    this.foreground = foreground(this.item.id);
	    this.accent = accent(this.item.id);
	  };

	  _proto.onToggle = function onToggle($event) {
	    this.toggle.next($event);
	  };

	  _proto.onRemove = function onRemove($event) {
	    this.remove.next($event);
	  };

	  return TodoItemComponent;
	}(rxcomp_3);
	TodoItemComponent.meta = {
	  selector: '[todo-item-component]',
	  inputs: ['item'],
	  outputs: ['toggle', 'remove']
	};

	var AppModule = function (_Module) {
	  _inheritsLoose(AppModule, _Module);

	  function AppModule() {
	    return _Module.apply(this, arguments) || this;
	  }

	  return AppModule;
	}(rxcomp_17);
	AppModule.meta = {
	  imports: [rxcomp_2],
	  declarations: [TodoItemComponent, DatePipe],
	  bootstrap: AppComponent
	};

	rxcomp_20.bootstrap(AppModule);

}(rxjs, rxjs.operators));
