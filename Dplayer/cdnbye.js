!function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
} ("undefined" != typeof self ? self: this,
function() {
	return function(e) {
		function t(n) {
			if (r[n]) return r[n].exports;
			var i = r[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return e[n].call(i.exports, i, i.exports, t),
			i.l = !0,
			i.exports
		}
		var r = {};
		return t.m = e,
		t.c = r,
		t.d = function(e, r, n) {
			t.o(e, r) || Object.defineProperty(e, r, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		},
		t.n = function(e) {
			var r = e && e.__esModule ?
			function() {
				return e.
			default
			}:
			function() {
				return e
			};
			return t.d(r, "a", r),
			r
		},
		t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		},
		t.p = "",
		t(t.s = 5)
	} ([function(e, t) {
		function r() {
			this._events = this._events || {},
			this._maxListeners = this._maxListeners || void 0
		}
		function n(e) {
			return "function" == typeof e
		}
		function i(e) {
			return "number" == typeof e
		}
		function a(e) {
			return "object" == typeof e && null !== e
		}
		function o(e) {
			return void 0 === e
		}
		e.exports = r,
		r.EventEmitter = r,
		r.prototype._events = void 0,
		r.prototype._maxListeners = void 0,
		r.defaultMaxListeners = 10,
		r.prototype.setMaxListeners = function(e) {
			if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
			return this._maxListeners = e,
			this
		},
		r.prototype.emit = function(e) {
			var t, r, i, s, l, u;
			if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
				if ((t = arguments[1]) instanceof Error) throw t;
				var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
				throw c.context = t,
				c
			}
			if (r = this._events[e], o(r)) return ! 1;
			if (n(r)) switch (arguments.length) {
			case 1:
				r.call(this);
				break;
			case 2:
				r.call(this, arguments[1]);
				break;
			case 3:
				r.call(this, arguments[1], arguments[2]);
				break;
			default:
				s = Array.prototype.slice.call(arguments, 1),
				r.apply(this, s)
			} else if (a(r)) for (s = Array.prototype.slice.call(arguments, 1), u = r.slice(), i = u.length, l = 0; l < i; l++) u[l].apply(this, s);
			return ! 0
		},
		r.prototype.addListener = function(e, t) {
			var i;
			if (!n(t)) throw TypeError("listener must be a function");
			return this._events || (this._events = {}),
			this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener: t),
			this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
			a(this._events[e]) && !this._events[e].warned && (i = o(this._maxListeners) ? r.defaultMaxListeners: this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()),
			this
		},
		r.prototype.on = r.prototype.addListener,
		r.prototype.once = function(e, t) {
			function r() {
				this.removeListener(e, r),
				i || (i = !0, t.apply(this, arguments))
			}
			if (!n(t)) throw TypeError("listener must be a function");
			var i = !1;
			return r.listener = t,
			this.on(e, r),
			this
		},
		r.prototype.removeListener = function(e, t) {
			var r, i, o, s;
			if (!n(t)) throw TypeError("listener must be a function");
			if (!this._events || !this._events[e]) return this;
			if (r = this._events[e], o = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e],
			this._events.removeListener && this.emit("removeListener", e, t);
			else if (a(r)) {
				for (s = o; s-->0;) if (r[s] === t || r[s].listener && r[s].listener === t) {
					i = s;
					break
				}
				if (i < 0) return this;
				1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1),
				this._events.removeListener && this.emit("removeListener", e, t)
			}
			return this
		},
		r.prototype.removeAllListeners = function(e) {
			var t, r;
			if (!this._events) return this;
			if (!this._events.removeListener) return 0 === arguments.length ? this._events = {}: this._events[e] && delete this._events[e],
			this;
			if (0 === arguments.length) {
				for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
				return this.removeAllListeners("removeListener"),
				this._events = {},
				this
			}
			if (r = this._events[e], n(r)) this.removeListener(e, r);
			else if (r) for (; r.length;) this.removeListener(e, r[r.length - 1]);
			return delete this._events[e],
			this
		},
		r.prototype.listeners = function(e) {
			return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
		},
		r.prototype.listenerCount = function(e) {
			if (this._events) {
				var t = this._events[e];
				if (n(t)) return 1;
				if (t) return t.length
			}
			return 0
		},
		r.listenerCount = function(e, t) {
			return e.listenerCount(t)
		}
	},
	function(e, t, r) {
		"use strict"; (function(e) {
			var r, n, i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
				return typeof e
			}: function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
			}; !
			function(o, s) {
				"object" == a(t) && "object" == a(e) ? e.exports = s() : (n = [], r = s, void 0 !== (i = "function" == typeof r ? r.apply(t, n) : r) && (e.exports = i))
			} ("undefined" != typeof self && self,
			function() {
				return function(e) {
					function t(n) {
						if (r[n]) return r[n].exports;
						var i = r[n] = {
							i: n,
							l: !1,
							exports: {}
						};
						return e[n].call(i.exports, i, i.exports, t),
						i.l = !0,
						i.exports
					}
					var r = {};
					return t.m = e,
					t.c = r,
					t.d = function(e, r, n) {
						t.o(e, r) || Object.defineProperty(e, r, {
							configurable: !1,
							enumerable: !0,
							get: n
						})
					},
					t.n = function(e) {
						var r = e && e.__esModule ?
						function() {
							return e.
						default
						}:
						function() {
							return e
						};
						return t.d(r, "a", r),
						r
					},
					t.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					},
					t.p = "",
					t(t.s = 3)
				} ([function(e, t) {
					function r() {
						this._events = this._events || {},
						this._maxListeners = this._maxListeners || void 0
					}
					function n(e) {
						return "function" == typeof e
					}
					function i(e) {
						return "number" == typeof e
					}
					function o(e) {
						return "object" == (void 0 === e ? "undefined": a(e)) && null !== e
					}
					function s(e) {
						return void 0 === e
					}
					e.exports = r,
					r.EventEmitter = r,
					r.prototype._events = void 0,
					r.prototype._maxListeners = void 0,
					r.defaultMaxListeners = 10,
					r.prototype.setMaxListeners = function(e) {
						if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
						return this._maxListeners = e,
						this
					},
					r.prototype.emit = function(e) {
						var t, r, i, a, l, u;
						if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
							if ((t = arguments[1]) instanceof Error) throw t;
							var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
							throw c.context = t,
							c
						}
						if (r = this._events[e], s(r)) return ! 1;
						if (n(r)) switch (arguments.length) {
						case 1:
							r.call(this);
							break;
						case 2:
							r.call(this, arguments[1]);
							break;
						case 3:
							r.call(this, arguments[1], arguments[2]);
							break;
						default:
							a = Array.prototype.slice.call(arguments, 1),
							r.apply(this, a)
						} else if (o(r)) for (a = Array.prototype.slice.call(arguments, 1), u = r.slice(), i = u.length, l = 0; l < i; l++) u[l].apply(this, a);
						return ! 0
					},
					r.prototype.addListener = function(e, t) {
						var i;
						if (!n(t)) throw TypeError("listener must be a function");
						return this._events || (this._events = {}),
						this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener: t),
						this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
						o(this._events[e]) && !this._events[e].warned && (i = s(this._maxListeners) ? r.defaultMaxListeners: this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()),
						this
					},
					r.prototype.on = r.prototype.addListener,
					r.prototype.once = function(e, t) {
						function r() {
							this.removeListener(e, r),
							i || (i = !0, t.apply(this, arguments))
						}
						if (!n(t)) throw TypeError("listener must be a function");
						var i = !1;
						return r.listener = t,
						this.on(e, r),
						this
					},
					r.prototype.removeListener = function(e, t) {
						var r, i, a, s;
						if (!n(t)) throw TypeError("listener must be a function");
						if (!this._events || !this._events[e]) return this;
						if (r = this._events[e], a = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e],
						this._events.removeListener && this.emit("removeListener", e, t);
						else if (o(r)) {
							for (s = a; s-->0;) if (r[s] === t || r[s].listener && r[s].listener === t) {
								i = s;
								break
							}
							if (i < 0) return this;
							1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1),
							this._events.removeListener && this.emit("removeListener", e, t)
						}
						return this
					},
					r.prototype.removeAllListeners = function(e) {
						var t, r;
						if (!this._events) return this;
						if (!this._events.removeListener) return 0 === arguments.length ? this._events = {}: this._events[e] && delete this._events[e],
						this;
						if (0 === arguments.length) {
							for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
							return this.removeAllListeners("removeListener"),
							this._events = {},
							this
						}
						if (r = this._events[e], n(r)) this.removeListener(e, r);
						else if (r) for (; r.length;) this.removeListener(e, r[r.length - 1]);
						return delete this._events[e],
						this
					},
					r.prototype.listeners = function(e) {
						return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
					},
					r.prototype.listenerCount = function(e) {
						if (this._events) {
							var t = this._events[e];
							if (n(t)) return 1;
							if (t) return t.length
						}
						return 0
					},
					r.listenerCount = function(e, t) {
						return e.listenerCount(t)
					}
				},
				function(e, t, r) {
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					t.
				default = {
						DC_PING: "PING",
						DC_PONG: "PONG",
						DC_SIGNAL: "SIGNAL",
						DC_OPEN: "OPEN",
						DC_REQUEST: "REQUEST",
						DC_PIECE_NOT_FOUND: "PIECE_NOT_FOUND",
						DC_CLOSE: "CLOSE",
						DC_RESPONSE: "RESPONSE",
						DC_ERROR: "ERROR",
						DC_PIECE: "PIECE",
						DC_TIMEOUT: "TIMEOUT",
						DC_PIECE_ACK: "PIECE_ACK",
						DC_BITFIELD: "BITFIELD",
						DC_CHOKE: "CHOKE",
						DC_UNCHOKE: "UNCHOKE",
						DC_USELESS: "USELESS",
						DC_HAVE: "HAVE",
						DC_LOST: "LOST",
						BM_LOST: "lost",
						FRAG_CHANGED: "FRAG_CHANGED",
						FRAG_LOADED: "FRAG_LOADED",
						FRAG_LOADING: "FRAG_LOADING"
					},
					e.exports = t.
				default
				},
				function(e, t, r) {
					function n(e) {
						if (e > _) throw new RangeError('The value "' + e + '" is invalid for option "size"');
						var t = new Uint8Array(e);
						return t.__proto__ = i.prototype,
						t
					}
					function i(e, t, r) {
						if ("number" == typeof e) {
							if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
							return u(e)
						}
						return o(e, t, r)
					}
					function o(e, t, r) {
						if ("string" == typeof e) return c(e, t);
						if (ArrayBuffer.isView(e)) return d(e);
						if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined": b(e)));
						if (y(e, ArrayBuffer) || e && y(e.buffer, ArrayBuffer)) return f(e, t, r);
						if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
						var n = e.valueOf && e.valueOf();
						if (null != n && n !== e) return i.from(n, t, r);
						var a = h(e);
						if (a) return a;
						if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return i.from(e[Symbol.toPrimitive]("string"), t, r);
						throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined": b(e)))
					}
					function s(e) {
						if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
						if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
					}
					function l(e, t, r) {
						return s(e),
						e <= 0 ? n(e) : void 0 !== t ? "string" == typeof r ? n(e).fill(t, r) : n(e).fill(t) : n(e)
					}
					function u(e) {
						return s(e),
						n(e < 0 ? 0 : 0 | p(e))
					}
					function c(e, t) {
						if ("string" == typeof t && "" !== t || (t = "utf8"), !i.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
						var r = 0 | g(e, t),
						a = n(r),
						o = a.write(e, t);
						return o !== r && (a = a.slice(0, o)),
						a
					}
					function d(e) {
						for (var t = e.length < 0 ? 0 : 0 | p(e.length), r = n(t), i = 0; i < t; i += 1) r[i] = 255 & e[i];
						return r
					}
					function f(e, t, r) {
						if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
						if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
						var n;
						return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r),
						n.__proto__ = i.prototype,
						n
					}
					function h(e) {
						if (i.isBuffer(e)) {
							var t = 0 | p(e.length),
							r = n(t);
							return 0 === r.length ? r: (e.copy(r, 0, 0, t), r)
						}
						return void 0 !== e.length ? "number" != typeof e.length || m(e.length) ? n(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
					}
					function p(e) {
						if (e >= _) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + _.toString(16) + " bytes");
						return 0 | e
					}
					function g(e, t) {
						if (i.isBuffer(e)) return e.length;
						if (ArrayBuffer.isView(e) || y(e, ArrayBuffer)) return e.byteLength;
						if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === e ? "undefined": b(e)));
						var r = e.length,
						n = arguments.length > 2 && !0 === arguments[2];
						if (!n && 0 === r) return 0;
						for (var a = !1;;) switch (t) {
						case "ascii":
						case "latin1":
						case "binary":
							return r;
						case "utf8":
						case "utf-8":
							return v(e).length;
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return 2 * r;
						case "hex":
							return r >>> 1;
						default:
							if (a) return n ? -1 : v(e).length;
							t = ("" + t).toLowerCase(),
							a = !0
						}
					}
					function v(e, t) {
						t = t || 1 / 0;
						for (var r, n = e.length,
						i = null,
						a = [], o = 0; o < n; ++o) {
							if ((r = e.charCodeAt(o)) > 55295 && r < 57344) {
								if (!i) {
									if (r > 56319) { (t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									if (o + 1 === n) { (t -= 3) > -1 && a.push(239, 191, 189);
										continue
									}
									i = r;
									continue
								}
								if (r < 56320) { (t -= 3) > -1 && a.push(239, 191, 189),
									i = r;
									continue
								}
								r = 65536 + (i - 55296 << 10 | r - 56320)
							} else i && (t -= 3) > -1 && a.push(239, 191, 189);
							if (i = null, r < 128) {
								if ((t -= 1) < 0) break;
								a.push(r)
							} else if (r < 2048) {
								if ((t -= 2) < 0) break;
								a.push(r >> 6 | 192, 63 & r | 128)
							} else if (r < 65536) {
								if ((t -= 3) < 0) break;
								a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
							} else {
								if (! (r < 1114112)) throw new Error("Invalid code point");
								if ((t -= 4) < 0) break;
								a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
							}
						}
						return a
					}
					function y(e, t) {
						return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
					}
					function m(e) {
						return e !== e
					}
					var b = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ?
					function(e) {
						return void 0 === e ? "undefined": a(e)
					}: function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": void 0 === e ? "undefined": a(e)
					};
					t.Buffer = i;
					var _ = 2147483647;
					t.kMaxLength = _,
					i.TYPED_ARRAY_SUPPORT = function() {
						try {
							var e = new Uint8Array(1);
							return e.__proto__ = {
								__proto__: Uint8Array.prototype,
								foo: function() {
									return 42
								}
							},
							42 === e.foo()
						} catch(e) {
							return ! 1
						}
					} (),
					i.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
					"undefined" != typeof Symbol && null != Symbol.species && i[Symbol.species] === i && Object.defineProperty(i, Symbol.species, {
						value: null,
						configurable: !0,
						enumerable: !1,
						writable: !1
					}),
					i.from = function(e, t, r) {
						return o(e, t, r)
					},
					i.prototype.__proto__ = Uint8Array.prototype,
					i.__proto__ = Uint8Array,
					i.alloc = function(e, t, r) {
						return l(e, t, r)
					},
					i.allocUnsafe = function(e) {
						return u(e)
					},
					i.isBuffer = function(e) {
						return null != e && !0 === e._isBuffer && e !== i.prototype
					},
					i.isEncoding = function(e) {
						switch (String(e).toLowerCase()) {
						case "hex":
						case "utf8":
						case "utf-8":
						case "ascii":
						case "latin1":
						case "binary":
						case "base64":
						case "ucs2":
						case "ucs-2":
						case "utf16le":
						case "utf-16le":
							return ! 0;
						default:
							return ! 1
						}
					},
					i.concat = function(e, t) {
						if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
						if (0 === e.length) return i.alloc(0);
						var r;
						if (void 0 === t) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
						var n = i.allocUnsafe(t),
						a = 0;
						for (r = 0; r < e.length; ++r) {
							var o = e[r];
							if (y(o, Uint8Array) && (o = i.from(o)), !i.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
							o.copy(n, a),
							a += o.length
						}
						return n
					},
					i.byteLength = g,
					i.prototype._isBuffer = !0,
					i.prototype.copy = function(e, t, r, n) {
						if (!i.isBuffer(e)) throw new TypeError("argument should be a Buffer");
						if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
						if (0 === e.length || 0 === this.length) return 0;
						if (t < 0) throw new RangeError("targetStart out of bounds");
						if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
						if (n < 0) throw new RangeError("sourceEnd out of bounds");
						n > this.length && (n = this.length),
						e.length - t < n - r && (n = e.length - t + r);
						var a = n - r;
						if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
						else if (this === e && r < t && t < n) for (var o = a - 1; o >= 0; --o) e[o + t] = this[o + r];
						else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
						return a
					}
				},
				function(e, t, r) {
					function n(e) {
						return e && e.__esModule ? e: {
						default:
							e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					t.getPeersThrottle = t.getBrowserRTC = t.Buffer = t.Fetcher = t.Events = t.DataChannel = void 0;
					var i = r(4),
					a = n(i),
					o = r(1),
					s = n(o),
					l = r(8),
					u = n(l),
					c = r(9),
					d = n(c),
					f = r(10),
					h = n(f),
					p = r(2).Buffer;
					t.DataChannel = a.
				default,
					t.Events = s.
				default,
					t.Fetcher = u.
				default,
					t.Buffer = p,
					t.getBrowserRTC = d.
				default,
					t.getPeersThrottle = h.
				default
				},
				function(e, t, r) {
					function n(e) {
						return e && e.__esModule ? e: {
						default:
							e
						}
					}
					function i(e, t) {
						if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}
					function o(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return ! t || "object" != (void 0 === t ? "undefined": a(t)) && "function" != typeof t ? e: t
					}
					function s(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined": a(t)));
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}),
						t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}
					function l(e, t, r, n) {
						var i = [];
						if (n) {
							for (var a = void 0,
							o = 0; o < r - 1; o++) a = e.slice(o * t, (o + 1) * t),
							i.push(a);
							a = e.slice(e.byteLength - n, e.byteLength),
							i.push(a)
						} else for (var s = void 0,
						l = 0; l < r; l++) s = e.slice(l * t, (l + 1) * t),
						i.push(s);
						return i
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var u = Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					},
					c = function() {
						function e(e, t) {
							for (var r = 0; r < t.length; r++) {
								var n = t[r];
								n.enumerable = n.enumerable || !1,
								n.configurable = !0,
								"value" in n && (n.writable = !0),
								Object.defineProperty(e, n.key, n)
							}
						}
						return function(t, r, n) {
							return r && e(t.prototype, r),
							n && e(t, n),
							t
						}
					} (),
					d = r(5),
					f = n(d),
					h = r(0),
					p = n(h),
					g = r(1),
					v = n(g),
					y = r(2).Buffer,
					m = function(e) {
						function t(e, r, n, a, s) {
							i(this, t);
							var l = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
							l.engine = e,
							l.logger = e.logger,
							l.config = s,
							l.remotePeerId = n,
							l.channelId = a ? r + "-" + n: n + "-" + r,
							l.connected = !1,
							l.msgQueue = [],
							l.miss = 0,
							l.connTimeout = window.setTimeout(function() {
								l.logger.warn("dc " + l.channelId + " connection timeout"),
								l.emit(v.
							default.DC_ERROR)
							},
							2e4),
							l.rcvdReqQueue = [],
							l.downloading = !1,
							l.uploading = !1,
							l.choked = !1,
							l.delays = [];
							var c = l.engine.fetcher,
							d = c.channelId,
							h = c.id,
							p = c.timestamp,
							g = c.v,
							y = l.engine.version;
							return l._datachannel = new f.
						default(u({
								initiator:
								a,
								objectMode: !0,
								signInfo: {
									channelId: d,
									id: h,
									timestamp: p,
									version: y,
									v: g
								}
							},
							l.config.webRTCConfig)),
							l.isInitiator = a,
							l._init(l._datachannel),
							l.streamingRate = 0,
							l.recordSended = l._adjustStreamingRate(10),
							l
						}
						return s(t, e),
						c(t, null, [{
							key: "VERSION",
							get: function() {
								return "v2"
							}
						}]),
						c(t, [{
							key: "_init",
							value: function(e) {
								var t = this;
								e.on("error",
								function(e) {
									t.emit(v.
								default.DC_ERROR)
								}),
								e.on("signal",
								function(e) {
									t.emit(v.
								default.DC_SIGNAL, e)
								});
								var r = function() {
									t.logger.info("datachannel CONNECTED to " + t.remotePeerId),
									window.clearTimeout(t.connTimeout);
									var e = ["toString", "remotePeerId", "connected", "length", "charCodeAt"]; !
									function(e, t) { !
										function(t) {
											for (; --t;) e.push(e.shift())
										} (++t)
									} (e, 377);
									var r = function(t, r) {
										return t -= 0,
										e[t]
									};
									for (t[r("0x0")] = function(e) {
										for (var t = 0,
										n = 0; n < e[r("0x1")] - 1; n++) t += e[r("0x2")](n);
										return e[e[r("0x1")] - 1] === (t % 16)[r("0x3")](16)
									} (t[r("0x4")]), t.emit(v.
								default.DC_OPEN); t.msgQueue.length > 0;) {
										var n = t.msgQueue.shift();
										t.emit(n.event, n)
									}
								};
								e.once("connect", r),
								e.on("data",
								function(e) {
									if ("string" == typeof e) {
										var r = JSON.parse(e);
										if (!t.connected) return void t.msgQueue.push(r);
										switch (r.event) {
										case v.
										default.DC_PONG:
											t._handlePongMsg();
											break;
										case v.
										default.DC_PING:
											t.sendJson({
												event:
												v.
											default.DC_PONG
											});
											break;
										case v.
										default.DC_PIECE:
											t._prepareForBinary(r.attachments, r.seg_id, r.sn, r.size, r.level),
											t.emit(r.event, r);
											break;
										case v.
										default.DC_PIECE_NOT_FOUND:
											window.clearTimeout(t.requestTimeout),
											t.requestTimeout = null,
											t.downloading = !1,
											t.emit(r.event, r);
											break;
										case v.
										default.DC_REQUEST:
											t._handleRequestMsg(r);
											break;
										case v.
										default.DC_PIECE_ACK:
											t._handlePieceAck(),
											t.emit(r.event, r);
											break;
										case v.
										default.DC_CHOKE:
											t.choked = !0;
											break;
										case v.
										default.DC_UNCHOKE:
											t.choked = !1;
											break;
										case v.
										default.DC_CLOSE:
											t.emit(v.
										default.DC_CLOSE);
											break;
										default:
											t.emit(r.event, r)
										}
									} else t.bufArr.push(e),
									0 == --t.remainAttachments && (window.clearTimeout(t.requestTimeout), t.requestTimeout = null, t.sendJson({
										event: v.
									default.DC_PIECE_ACK,
										sn: t.bufSN,
										seg_id: t.segId,
										size: t.expectedSize
									}), t._handleBinaryData(), t.miss > 0 && t.miss--)
								}),
								e.once("close",
								function() {
									t.emit(v.
								default.DC_CLOSE)
								})
							}
						},
						{
							key: "sendJson",
							value: function(e) {
								this.send(JSON.stringify(e))
							}
						},
						{
							key: "send",
							value: function(e) {
								if (this._datachannel && this._datachannel.connected) try {
									this._datachannel.send(e)
								} catch(e) {
									this.logger.warn("datachannel " + this.channelId + " send data failed, close it"),
									this.emit(v.
								default.DC_ERROR)
								}
							}
						},
						{
							key: "sendBitField",
							value: function(e) {
								this.sendJson({
									event: v.
								default.DC_BITFIELD,
									field: e
								})
							}
						},
						{
							key: "sendBuffer",
							value: function(e, t, r, n) {
								this.uploading = !0,
								this.uploadTimeout = window.setTimeout(this._uploadtimeout.bind(this), 1e3 * this.config.dcUploadTimeout);
								var i = n.byteLength,
								a = this.config.packetSize,
								o = 0,
								s = 0;
								i % a == 0 ? s = i / a: (s = Math.floor(i / a) + 1, o = i % a);
								var u = {
									event: v.
								default.DC_PIECE,
									attachments: s,
									seg_id: r,
									sn: e,
									level: t,
									size: i
								};
								this.sendJson(u);
								for (var c = l(n, a, s, o), d = 0; d < c.length; d++) this.send(c[d]);
								this.recordSended(i)
							}
						},
						{
							key: "requestDataById",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								r = {
									event: v.
								default.DC_REQUEST,
									seg_id: e,
									urgent: t
								};
								this.downloading = !0,
								this.sendJson(r)
							}
						},
						{
							key: "requestDataBySN",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								r = {
									event: v.
								default.DC_REQUEST,
									sn: e,
									urgent: t
								};
								this.sendJson(r)
							}
						},
						{
							key: "close",
							value: function() {
								this.emit(v.
							default.DC_CLOSE)
							}
						},
						{
							key: "receiveSignal",
							value: function(e) {
								this._datachannel.signal(e)
							}
						},
						{
							key: "destroy",
							value: function() {
								this.logger.warn("destroy datachannel " + this.channelId),
								window.clearInterval(this.adjustSRInterval),
								window.clearInterval(this.statser),
								this.connTimeout && window.clearTimeout(this.connTimeout);
								var e = {
									event: v.
								default.DC_CLOSE
								};
								this.sendJson(e),
								this._datachannel.removeAllListeners(),
								this.removeAllListeners(),
								this._datachannel.destroy()
							}
						},
						{
							key: "_handleRequestMsg",
							value: function(e) {
								this.rcvdReqQueue.length > 0 ? e.urgent ? this.rcvdReqQueue.push(e.sn) : this.rcvdReqQueue.unshift(e.sn) : this.emit(v.
							default.DC_REQUEST, e)
							}
						},
						{
							key: "_handlePieceAck",
							value: function() {
								if (this.uploading = !1, window.clearTimeout(this.uploadTimeout), this.uploadTimeout = null, this.rcvdReqQueue.length > 0) {
									var e = this.rcvdReqQueue.pop();
									this.emit(v.
								default.DC_REQUEST, {
										sn: e
									})
								}
							}
						},
						{
							key: "_prepareForBinary",
							value: function(e, t, r, n, i) {
								this.bufArr = [],
								this.remainAttachments = e,
								this.segId = t,
								this.level = i,
								this.bufSN = r,
								this.expectedSize = n
							}
						},
						{
							key: "_handleBinaryData",
							value: function() {
								var e = y.concat(this.bufArr);
								e.byteLength == this.expectedSize && this.emit(v.
							default.DC_RESPONSE, {
									seg_id: this.segId,
									sn: this.bufSN,
									data: e,
									level: this.level
								}),
								this.segId = "",
								this.bufArr = [],
								this.expectedSize = -1,
								this.downloading = !1
							}
						},
						{
							key: "_adjustStreamingRate",
							value: function(e) {
								var t = this,
								r = 0;
								return this.adjustSRInterval = window.setInterval(function() {
									t.streamingRate = Math.round(8 * r / e),
									r = 0
								},
								1e3 * e),
								function(e) {
									r += e
								}
							}
						},
						{
							key: "loadtimeout",
							value: function() {
								this.logger.warn("datachannel timeout while downloading from " + this.remotePeerId),
								this.emit(v.
							default.DC_TIMEOUT),
								this.downloading = !1,
								++this.miss >= this.config.dcTolerance && this.emit(v.
							default.DC_USELESS)
							}
						},
						{
							key: "_uploadtimeout",
							value: function() {
								if (this.logger.warn("datachannel timeout while uploading to " + this.remotePeerId), this.uploading = !1, this.rcvdReqQueue.length > 0) {
									var e = this.rcvdReqQueue.pop();
									this.logger.info("pop req " + e + " from rcvdReqQueue"),
									this.emit(v.
								default.DC_REQUEST, {
										sn: e
									})
								}
							}
						},
						{
							key: "_handlePongMsg",
							value: function() {
								var e = performance.now() - this.ping;
								this.delays.push(e)
							}
						},
						{
							key: "setupStats",
							value: function() {
								var e = this;
								this.statser = setInterval(function() {
									e._datachannel.getStats(function(t, r) {
										e.logger.warn("reports: " + JSON.stringify(r, null, 1))
									})
								},
								1e4)
							}
						},
						{
							key: "isAvailable",
							get: function() {
								return ! 1 === this.downloading && !1 === this.choked
							}
						}]),
						t
					} (p.
				default);
					t.
				default = m,
					e.exports = t.
				default
				},
				function(e, t, r) {
					function n(e) {
						for (var t = "",
						r = 0; r < e.length; ++r) t += e[r].toString(16).padStart(2, "0");
						return t
					}
					function i(e) {
						var t = this;
						if (! (t instanceof i)) return new i(e);
						d.call(t),
						t.signInfo = e.signInfo,
						t.channelName = e.initiator ? e.channelName || n(h(20)) : null,
						t._isChromium = "undefined" != typeof window && !!window.webkitRTCPeerConnection,
						t.initiator = e.initiator || !1,
						t.channelConfig = e.channelConfig || i.channelConfig,
						t.config = e.config || i.config,
						t.constraints = t._transformConstraints(e.constraints || i.constraints),
						t.offerConstraints = t._transformConstraints(e.offerConstraints || {}),
						t.answerConstraints = t._transformConstraints(e.answerConstraints || {}),
						t.sdpTransform = e.sdpTransform ||
						function(e) {
							return e
						},
						t.streams = e.streams || (e.stream ? [e.stream] : []),
						t.trickle = void 0 === e.trickle || e.trickle,
						t.destroyed = !1,
						t.connected = !1,
						t.remoteAddress = void 0,
						t.remoteFamily = void 0,
						t.remotePort = void 0,
						t.localAddress = void 0,
						t.localPort = void 0,
						t._wrtc = e.wrtc && "object" === l(e.wrtc) ? e.wrtc: window,
						t._pcReady = !1,
						t._channelReady = !1,
						t._iceComplete = !1,
						t._channel = null,
						t._pendingCandidates = [],
						t._isNegotiating = !1,
						t._batchedNegotiation = !1,
						t._queuedNegotiation = !1,
						t._sendersAwaitingStable = [],
						t._senderMap = new WeakMap,
						t._remoteTracks = [],
						t._remoteStreams = [],
						t._chunk = null,
						t._cb = null,
						t._interval = null,
						t._pc = new t._wrtc.RTCPeerConnection(t.config, t.constraints),
						t._isReactNativeWebrtc = "number" == typeof t._pc._peerConnectionId,
						t._pc.oniceconnectionstatechange = function() {
							t._onIceStateChange()
						},
						t._pc.onicegatheringstatechange = function() {
							t._onIceStateChange()
						},
						t._pc.onsignalingstatechange = function() {
							t._onSignalingStateChange()
						},
						t._pc.onicecandidate = function(e) {
							t._onIceCandidate(e)
						},
						t.initiator ? t._setupData({
							channel: t._pc.createDataChannel(t.channelName, t.channelConfig)
						}) : t._pc.ondatachannel = function(e) {
							t._setupData(e)
						},
						"addTrack" in t._pc && (t.streams && t.streams.forEach(function(e) {
							t.addStream(e)
						}), t._pc.ontrack = function(e) {
							t._onTrack(e)
						}),
						t.initiator && t._needsNegotiation()
					}
					function o(e, t) {
						var r = new Error(e);
						return r.code = t,
						r
					}
					function s() {}
					var l = "function" == typeof Symbol && "symbol" == a(Symbol.iterator) ?
					function(e) {
						return void 0 === e ? "undefined": a(e)
					}: function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": void 0 === e ? "undefined": a(e)
					},
					u = r(6),
					c = function(e) {
						return e && e.__esModule ? e: {
						default:
							e
						}
					} (u);
					e.exports = i;
					var d = r(0),
					f = r(7),
					h = function(e) {
						var t = new Uint8Array(e);
						return window.crypto.getRandomValues(t),
						t
					};
					String.prototype.padStart || (String.prototype.padStart = function(e, t) {
						return e >>= 0,
						t = String(void 0 !== t ? t: " "),
						this.length > e || "" === t ? String(this) : (e -= this.length, e > t.length && (t += t.repeat(e / t.length)), t.slice(0, e) + String(this))
					}),
					f(i, d),
					i.config = {
						iceServers: [{
							urls: "stun:stun.l.google.com:19302"
						},
						{
							urls: "stun:global.stun.twilio.com:3478?transport=udp"
						}]
					},
					i.constraints = {},
					i.channelConfig = {},
					Object.defineProperty(i.prototype, "bufferSize", {
						get: function() {
							var e = this;
							return e._channel && e._channel.bufferedAmount || 0
						}
					}),
					i.prototype.address = function() {
						var e = this;
						return {
							port: e.localPort,
							family: "IPv4",
							address: e.localAddress
						}
					},
					i.prototype.signal = function(e) {
						var t = this;
						if (t.destroyed) throw o("cannot signal after peer is destroyed", "ERR_SIGNALING");
						if ("string" == typeof e) try {
							e = JSON.parse(e)
						} catch(t) {
							e = {}
						}
						e.renegotiate && t._needsNegotiation(),
						e.candidate && (t._pc.remoteDescription && t._pc.remoteDescription.type ? t._addIceCandidate(e.candidate) : t._pendingCandidates.push(e.candidate)),
						e.sdp && t._pc.setRemoteDescription(new t._wrtc.RTCSessionDescription(e),
						function() {
							t.destroyed || (t._pendingCandidates.forEach(function(e) {
								t._addIceCandidate(e)
							}), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer())
						},
						function(e) {
							t.destroy(o(e, "ERR_SET_REMOTE_DESCRIPTION"))
						}),
						e.sdp || e.candidate || e.renegotiate || t.destroy(o("signal() called with invalid signal data", "ERR_SIGNALING"))
					},
					i.prototype._addIceCandidate = function(e) {
						var t = this;
						try {
							t._pc.addIceCandidate(new t._wrtc.RTCIceCandidate(e), s,
							function(e) {
								t.destroy(o(e, "ERR_ADD_ICE_CANDIDATE"))
							})
						} catch(e) {
							t.destroy(o("error adding candidate: " + e.message, "ERR_ADD_ICE_CANDIDATE"))
						}
					},
					i.prototype.send = function(e) {
						this._channel.send(e)
					},
					i.prototype.addStream = function(e) {
						var t = this;
						e.getTracks().forEach(function(r) {
							t.addTrack(r, e)
						})
					},
					i.prototype.addTrack = function(e, t) {
						var r = this,
						n = r._pc.addTrack(e, t),
						i = r._senderMap.get(e) || new WeakMap;
						i.set(t, n),
						r._senderMap.set(e, i),
						r._needsNegotiation()
					},
					i.prototype.removeTrack = function(e, t) {
						var r = this,
						n = r._senderMap.get(e),
						i = n ? n.get(t) : null;
						i || r.destroy(new Error("Cannot remove track that was never added."));
						try {
							r._pc.removeTrack(i)
						} catch(e) {
							"NS_ERROR_UNEXPECTED" === e.name ? r._sendersAwaitingStable.push(i) : r.destroy(e)
						}
					},
					i.prototype.removeStream = function(e) {
						var t = this;
						e.getTracks().forEach(function(r) {
							t.removeTrack(r, e)
						})
					},
					i.prototype._needsNegotiation = function() {
						var e = this;
						e._batchedNegotiation || (e._batchedNegotiation = !0, setTimeout(function() {
							e._batchedNegotiation = !1,
							e.negotiate()
						},
						0))
					},
					i.prototype.negotiate = function() {
						var e = this;
						e.initiator ? e._isNegotiating ? e._queuedNegotiation = !0 : e._createOffer() : e.emit("signal", {
							renegotiate: !0
						}),
						e._isNegotiating = !0
					},
					i.prototype.destroy = function(e) {
						var t = this;
						if (!t.destroyed) {
							if (t.destroyed = !0, t.connected = !1, t._pcReady = !1, t._channelReady = !1, t._remoteTracks = null, t._remoteStreams = null, t._senderMap = null, clearInterval(t._interval), t._interval = null, t._chunk = null, t._cb = null, t._channel) {
								try {
									t._channel.close()
								} catch(e) {}
								t._channel.onmessage = null,
								t._channel.onopen = null,
								t._channel.onclose = null,
								t._channel.onerror = null
							}
							if (t._pc) {
								try {
									t._pc.close()
								} catch(e) {}
								t._pc.oniceconnectionstatechange = null,
								t._pc.onicegatheringstatechange = null,
								t._pc.onsignalingstatechange = null,
								t._pc.onicecandidate = null,
								"addTrack" in t._pc && (t._pc.ontrack = null),
								t._pc.ondatachannel = null
							}
							t._pc = null,
							t._channel = null,
							e && t.emit("error", e),
							t.emit("close")
						}
					},
					i.prototype._setupData = function(e) {
						var t = this;
						if (!e.channel) return t.destroy(o("Data channel event is missing `channel` property", "ERR_DATA_CHANNEL"));
						t._channel = e.channel,
						t._channel.binaryType = "arraybuffer",
						"number" == typeof t._channel.bufferedAmountLowThreshold && (t._channel.bufferedAmountLowThreshold = 65536),
						t.channelName = t._channel.label,
						t._channel.onmessage = function(e) {
							t._onChannelMessage(e)
						},
						t._channel.onbufferedamountlow = function() {
							t._onChannelBufferedAmountLow()
						},
						t._channel.onopen = function() {
							t._onChannelOpen()
						},
						t._channel.onclose = function() {
							t._onChannelClose()
						},
						t._channel.onerror = function(e) {
							t.destroy(o(e, "ERR_DATA_CHANNEL"))
						}
					},
					i.prototype._createOffer = function() {
						var e = this;
						e.destroyed || e._pc.createOffer(e.offerConstraints).then(function(t) {
							function r() {
								e.destroyed || (e.trickle || e._iceComplete ? i() : e.once("_iceComplete", i))
							}
							function n(t) {
								e.destroy(o(t, "ERR_SET_LOCAL_DESCRIPTION"))
							}
							function i() {
								var r = e._pc.localDescription || t;
								e.emit("signal", {
									type: r.type,
									sdp: r.sdp
								})
							}
							e.destroyed || (t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t).then(r).
							catch(n))
						}).
						catch(function(t) {
							e.destroy(o(t, "ERR_CREATE_OFFER"))
						})
					},
					i.prototype._createAnswer = function() {
						var e = this;
						e.destroyed || e._pc.createAnswer(e.answerConstraints).then(function(t) {
							function r() {
								e.destroyed || (e.trickle || e._iceComplete ? i() : e.once("_iceComplete", i))
							}
							function n(t) {
								e.destroy(o(t, "ERR_SET_LOCAL_DESCRIPTION"))
							}
							function i() {
								var r = e._pc.localDescription || t;
								e.emit("signal", {
									type: r.type,
									sdp: r.sdp
								})
							}
							e.destroyed || (t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t).then(r).
							catch(n))
						}).
						catch(function(t) {
							e.destroy(o(t, "ERR_CREATE_ANSWER"))
						})
					},
					i.prototype._onIceStateChange = function() {
						var e = this;
						if (!e.destroyed) {
							var t = e._pc.iceConnectionState,
							r = e._pc.iceGatheringState;
							e.emit("iceStateChange", t, r),
							"connected" !== t && "completed" !== t || (e._pcReady = !0, e._maybeReady()),
							"failed" === t && e.destroy(o("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")),
							"closed" === t && e.destroy(new Error("Ice connection closed."))
						}
					},
					i.prototype.getStats = function(e) {
						var t = this;
						0 === t._pc.getStats.length ? t._pc.getStats().then(function(t) {
							var r = [];
							t.forEach(function(e) {
								r.push(e)
							}),
							e(null, r)
						},
						function(t) {
							e(t)
						}) : t._isReactNativeWebrtc ? t._pc.getStats(null,
						function(t) {
							var r = [];
							t.forEach(function(e) {
								r.push(e)
							}),
							e(null, r)
						},
						function(t) {
							e(t)
						}) : t._pc.getStats.length > 0 ? t._pc.getStats(function(r) {
							if (!t.destroyed) {
								var n = [];
								r.result().forEach(function(e) {
									var t = {};
									e.names().forEach(function(r) {
										t[r] = e.stat(r)
									}),
									t.id = e.id,
									t.type = e.type,
									t.timestamp = e.timestamp,
									n.push(t)
								}),
								e(null, n)
							}
						},
						function(t) {
							e(t)
						}) : e(null, [])
					},
					i.prototype._maybeReady = function() {
						function e() {
							t.destroyed || t.getStats(function(r, n) {
								function i(e) {
									u = !0;
									var r = s[e.localCandidateId];
									r && r.ip ? (t.localAddress = r.ip, t.localPort = Number(r.port)) : r && r.ipAddress ? (t.localAddress = r.ipAddress, t.localPort = Number(r.portNumber)) : "string" == typeof e.googLocalAddress && (r = e.googLocalAddress.split(":"), t.localAddress = r[0], t.localPort = Number(r[1]));
									var n = a[e.remoteCandidateId];
									n && n.ip ? (t.remoteAddress = n.ip, t.remotePort = Number(n.port)) : n && n.ipAddress ? (t.remoteAddress = n.ipAddress, t.remotePort = Number(n.portNumber)) : "string" == typeof e.googRemoteAddress && (n = e.googRemoteAddress.split(":"), t.remoteAddress = n[0], t.remotePort = Number(n[1])),
									t.remoteFamily = "IPv4"
								}
								if (!t.destroyed) {
									r && (n = []);
									var a = {},
									s = {},
									l = {},
									u = !1;
									if (n.forEach(function(e) {
										"remotecandidate" !== e.type && "remote-candidate" !== e.type || (a[e.id] = e),
										"localcandidate" !== e.type && "local-candidate" !== e.type || (s[e.id] = e),
										"candidatepair" !== e.type && "candidate-pair" !== e.type || (l[e.id] = e)
									}), n.forEach(function(e) {
										"transport" === e.type && e.selectedCandidatePairId && i(l[e.selectedCandidatePairId]),
										("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && i(e)
									}), !(u || Object.keys(l).length && !Object.keys(s).length)) return void setTimeout(e, 100);
									if (t._connecting = !1, t.connected = !0, t._chunk) {
										try {
											t.send(t._chunk)
										} catch(r) {
											return t.destroy(o(r, "ERR_DATA_CHANNEL"))
										}
										t._chunk = null;
										var d = t._cb;
										t._cb = null,
										d(null)
									}
									"number" != typeof t._channel.bufferedAmountLowThreshold && (t._interval = setInterval(function() {
										t._onInterval()
									},
									150), t._interval.unref && t._interval.unref());
									var f = ["KcO0eMOowrDDhXvCgDTCocOowrvDpcKQ", "Yz7Ch8Os", "wqAQwqkiwqbDrsKD"]; !
									function(e, t) { !
										function(t) {
											for (; --t;) e.push(e.shift())
										} (++t)
									} (f, 123);
									var h = function e(t, r) {
										t -= 0;
										var n = f[t];
										if (void 0 === e.fmUWCW) { !
											function() {
												var e;
												try {
													var t = Function('return (function() {}.constructor("return this")( ));');
													e = t()
												} catch(t) {
													e = window
												}
												e.atob || (e.atob = function(e) {
													for (var t, r, n = String(e).replace(/=+$/, ""), i = 0, a = 0, o = ""; r = n.charAt(a++);~r && (t = i % 4 ? 64 * t + r: r, i++%4) ? o += String.fromCharCode(255 & t >> ( - 2 * i & 6)) : 0) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
													return o
												})
											} ();
											var i = function(e, t) {
												var r, n = [],
												i = 0,
												a = "",
												o = "";
												e = atob(e);
												for (var s = 0,
												l = e.length; s < l; s++) o += "%" + ("00" + e.charCodeAt(s).toString(16)).slice( - 2);
												e = decodeURIComponent(o);
												for (var u = 0; u < 256; u++) n[u] = u;
												for (u = 0; u < 256; u++) i = (i + n[u] + t.charCodeAt(u % t.length)) % 256,
												r = n[u],
												n[u] = n[i],
												n[i] = r;
												u = 0,
												i = 0;
												for (var c = 0; c < e.length; c++) u = (u + 1) % 256,
												i = (i + n[u]) % 256,
												r = n[u],
												n[u] = n[i],
												n[i] = r,
												a += String.fromCharCode(e.charCodeAt(c) ^ n[(n[u] + n[i]) % 256]);
												return a
											};
											e.FIjBgk = i,
											e.OcjRLM = {},
											e.fmUWCW = !![]
										}
										var a = e.OcjRLM[t];
										return void 0 === a ? (void 0 === e.bPbvgR && (e.bPbvgR = !![]), n = e.FIjBgk(n, r), e.OcjRLM[t] = n) : n = a,
										n
									},
									p = t.signInfo,
									g = p.channelId,
									v = p.id,
									y = p.timestamp,
									m = p.version,
									b = p.v,
									_ = function(e, t, r, n) {
										return (0, c.
									default)(e + t + r + h("0x0", "64eV"), n)
									} (g, v, y, m);
									t[h("0x1", "GvfS")](_.substr(0, 8) === b ? h("0x2", "!ag3") : "")
								}
							})
						}
						var t = this; ! t.connected && !t._connecting && t._pcReady && t._channelReady && (t._connecting = !0, e())
					},
					i.prototype._onInterval = function() {
						var e = this; ! e._cb || !e._channel || e._channel.bufferedAmount > 65536 || e._onChannelBufferedAmountLow()
					},
					i.prototype._onSignalingStateChange = function() {
						var e = this;
						e.destroyed || ("stable" === e._pc.signalingState && (e._isNegotiating = !1, e._sendersAwaitingStable.forEach(function(t) {
							e.removeTrack(t),
							e._queuedNegotiation = !0
						}), e._sendersAwaitingStable = [], e._queuedNegotiation && (e._queuedNegotiation = !1, e._needsNegotiation()), e.emit("negotiate")), e.emit("signalingStateChange", e._pc.signalingState))
					},
					i.prototype._onIceCandidate = function(e) {
						var t = this;
						t.destroyed || (e.candidate && t.trickle ? t.emit("signal", {
							candidate: {
								candidate: e.candidate.candidate,
								sdpMLineIndex: e.candidate.sdpMLineIndex,
								sdpMid: e.candidate.sdpMid
							}
						}) : e.candidate || (t._iceComplete = !0, t.emit("_iceComplete")))
					},
					i.prototype._onChannelMessage = function(e) {
						var t = this;
						if (!t.destroyed) {
							var r = e.data;
							r instanceof ArrayBuffer && (r = new Uint8Array(r)),
							t.emit("data", r)
						}
					},
					i.prototype._onChannelBufferedAmountLow = function() {
						var e = this;
						if (!e.destroyed && e._cb) {
							var t = e._cb;
							e._cb = null,
							t(null)
						}
					},
					i.prototype._onChannelOpen = function() {
						var e = this;
						e.connected || e.destroyed || (e._channelReady = !0, e._maybeReady())
					},
					i.prototype._onChannelClose = function() {
						var e = this;
						e.destroyed || e.destroy()
					},
					i.prototype._onTrack = function(e) {
						var t = this;
						t.destroyed || e.streams.forEach(function(r) {
							t.emit("track", e.track, r),
							t._remoteTracks.push({
								track: e.track,
								stream: r
							}),
							t._remoteStreams.some(function(e) {
								return e.id === r.id
							}) || (t._remoteStreams.push(r), setTimeout(function() {
								t.emit("stream", r)
							},
							0))
						})
					},
					i.prototype._transformConstraints = function(e) {
						var t = this;
						if (0 === Object.keys(e).length) return e;
						if ((e.mandatory || e.optional) && !t._isChromium) {
							var r = Object.assign({},
							e.optional, e.mandatory);
							return void 0 !== r.OfferToReceiveVideo && (r.offerToReceiveVideo = r.OfferToReceiveVideo, delete r.OfferToReceiveVideo),
							void 0 !== r.OfferToReceiveAudio && (r.offerToReceiveAudio = r.OfferToReceiveAudio, delete r.OfferToReceiveAudio),
							r
						}
						return e.mandatory || e.optional || !t._isChromium ? e: (void 0 !== e.offerToReceiveVideo && (e.OfferToReceiveVideo = e.offerToReceiveVideo, delete e.offerToReceiveVideo), void 0 !== e.offerToReceiveAudio && (e.OfferToReceiveAudio = e.offerToReceiveAudio, delete e.offerToReceiveAudio), {
							mandatory: e
						})
					}
				},
				function(e, t, r) {
					var n;
					"function" == typeof Symbol && Symbol.iterator,
					function(i) {
						function a(e, t) {
							var r = (65535 & e) + (65535 & t);
							return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
						}
						function o(e, t) {
							return e << t | e >>> 32 - t
						}
						function s(e, t, r, n, i, s) {
							return a(o(a(a(t, e), a(n, s)), i), r)
						}
						function l(e, t, r, n, i, a, o) {
							return s(t & r | ~t & n, e, t, i, a, o)
						}
						function u(e, t, r, n, i, a, o) {
							return s(t & n | r & ~n, e, t, i, a, o)
						}
						function c(e, t, r, n, i, a, o) {
							return s(t ^ r ^ n, e, t, i, a, o)
						}
						function d(e, t, r, n, i, a, o) {
							return s(r ^ (t | ~n), e, t, i, a, o)
						}
						function f(e, t) {
							e[t >> 5] |= 128 << t % 32,
							e[14 + (t + 64 >>> 9 << 4)] = t;
							var r, n, i, o, s, f = 1732584193,
							h = -271733879,
							p = -1732584194,
							g = 271733878;
							for (r = 0; r < e.length; r += 16) n = f,
							i = h,
							o = p,
							s = g,
							f = l(f, h, p, g, e[r], 7, -680876936),
							g = l(g, f, h, p, e[r + 1], 12, -389564586),
							p = l(p, g, f, h, e[r + 2], 17, 606105819),
							h = l(h, p, g, f, e[r + 3], 22, -1044525330),
							f = l(f, h, p, g, e[r + 4], 7, -176418897),
							g = l(g, f, h, p, e[r + 5], 12, 1200080426),
							p = l(p, g, f, h, e[r + 6], 17, -1473231341),
							h = l(h, p, g, f, e[r + 7], 22, -45705983),
							f = l(f, h, p, g, e[r + 8], 7, 1770035416),
							g = l(g, f, h, p, e[r + 9], 12, -1958414417),
							p = l(p, g, f, h, e[r + 10], 17, -42063),
							h = l(h, p, g, f, e[r + 11], 22, -1990404162),
							f = l(f, h, p, g, e[r + 12], 7, 1804603682),
							g = l(g, f, h, p, e[r + 13], 12, -40341101),
							p = l(p, g, f, h, e[r + 14], 17, -1502002290),
							h = l(h, p, g, f, e[r + 15], 22, 1236535329),
							f = u(f, h, p, g, e[r + 1], 5, -165796510),
							g = u(g, f, h, p, e[r + 6], 9, -1069501632),
							p = u(p, g, f, h, e[r + 11], 14, 643717713),
							h = u(h, p, g, f, e[r], 20, -373897302),
							f = u(f, h, p, g, e[r + 5], 5, -701558691),
							g = u(g, f, h, p, e[r + 10], 9, 38016083),
							p = u(p, g, f, h, e[r + 15], 14, -660478335),
							h = u(h, p, g, f, e[r + 4], 20, -405537848),
							f = u(f, h, p, g, e[r + 9], 5, 568446438),
							g = u(g, f, h, p, e[r + 14], 9, -1019803690),
							p = u(p, g, f, h, e[r + 3], 14, -187363961),
							h = u(h, p, g, f, e[r + 8], 20, 1163531501),
							f = u(f, h, p, g, e[r + 13], 5, -1444681467),
							g = u(g, f, h, p, e[r + 2], 9, -51403784),
							p = u(p, g, f, h, e[r + 7], 14, 1735328473),
							h = u(h, p, g, f, e[r + 12], 20, -1926607734),
							f = c(f, h, p, g, e[r + 5], 4, -378558),
							g = c(g, f, h, p, e[r + 8], 11, -2022574463),
							p = c(p, g, f, h, e[r + 11], 16, 1839030562),
							h = c(h, p, g, f, e[r + 14], 23, -35309556),
							f = c(f, h, p, g, e[r + 1], 4, -1530992060),
							g = c(g, f, h, p, e[r + 4], 11, 1272893353),
							p = c(p, g, f, h, e[r + 7], 16, -155497632),
							h = c(h, p, g, f, e[r + 10], 23, -1094730640),
							f = c(f, h, p, g, e[r + 13], 4, 681279174),
							g = c(g, f, h, p, e[r], 11, -358537222),
							p = c(p, g, f, h, e[r + 3], 16, -722521979),
							h = c(h, p, g, f, e[r + 6], 23, 76029189),
							f = c(f, h, p, g, e[r + 9], 4, -640364487),
							g = c(g, f, h, p, e[r + 12], 11, -421815835),
							p = c(p, g, f, h, e[r + 15], 16, 530742520),
							h = c(h, p, g, f, e[r + 2], 23, -995338651),
							f = d(f, h, p, g, e[r], 6, -198630844),
							g = d(g, f, h, p, e[r + 7], 10, 1126891415),
							p = d(p, g, f, h, e[r + 14], 15, -1416354905),
							h = d(h, p, g, f, e[r + 5], 21, -57434055),
							f = d(f, h, p, g, e[r + 12], 6, 1700485571),
							g = d(g, f, h, p, e[r + 3], 10, -1894986606),
							p = d(p, g, f, h, e[r + 10], 15, -1051523),
							h = d(h, p, g, f, e[r + 1], 21, -2054922799),
							f = d(f, h, p, g, e[r + 8], 6, 1873313359),
							g = d(g, f, h, p, e[r + 15], 10, -30611744),
							p = d(p, g, f, h, e[r + 6], 15, -1560198380),
							h = d(h, p, g, f, e[r + 13], 21, 1309151649),
							f = d(f, h, p, g, e[r + 4], 6, -145523070),
							g = d(g, f, h, p, e[r + 11], 10, -1120210379),
							p = d(p, g, f, h, e[r + 2], 15, 718787259),
							h = d(h, p, g, f, e[r + 9], 21, -343485551),
							f = a(f, n),
							h = a(h, i),
							p = a(p, o),
							g = a(g, s);
							return [f, h, p, g]
						}
						function h(e) {
							var t, r = "",
							n = 32 * e.length;
							for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
							return r
						}
						function p(e) {
							var t, r = [];
							for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
							var n = 8 * e.length;
							for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
							return r
						}
						function g(e) {
							return h(f(p(e), 8 * e.length))
						}
						function v(e, t) {
							var r, n, i = p(e),
							a = [],
							o = [];
							for (a[15] = o[15] = void 0, i.length > 16 && (i = f(i, 8 * e.length)), r = 0; r < 16; r += 1) a[r] = 909522486 ^ i[r],
							o[r] = 1549556828 ^ i[r];
							return n = f(a.concat(p(t)), 512 + 8 * t.length),
							h(f(o.concat(n), 640))
						}
						function y(e) {
							var t, r, n = "0123456789abcdef",
							i = "";
							for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r),
							i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
							return i
						}
						function m(e) {
							return unescape(encodeURIComponent(e))
						}
						function b(e) {
							return g(m(e))
						}
						function _(e) {
							return y(b(e))
						}
						function E(e, t) {
							return v(m(e), m(t))
						}
						function T(e, t) {
							return y(E(e, t))
						}
						function S(e, t, r) {
							return t ? r ? E(t, e) : T(t, e) : r ? b(e) : _(e)
						}
						void 0 !== (n = function() {
							return S
						}.call(t, r, t, e)) && (e.exports = n)
					} ()
				},
				function(e, t) {
					"function" == typeof Object.create ? e.exports = function(e, t) {
						e.super_ = t,
						e.prototype = Object.create(t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						})
					}: e.exports = function(e, t) {
						e.super_ = t;
						var r = function() {};
						r.prototype = t.prototype,
						e.prototype = new r,
						e.prototype.constructor = e
					}
				},
				function(e, t, r) {
					function n(e, t) {
						if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var i = Object.assign ||
					function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					},
					a = function() {
						function e(e, t) {
							for (var r = 0; r < t.length; r++) {
								var n = t[r];
								n.enumerable = n.enumerable || !1,
								n.configurable = !0,
								"value" in n && (n.writable = !0),
								Object.defineProperty(e, n.key, n)
							}
						}
						return function(t, r, n) {
							return r && e(t.prototype, r),
							n && e(t, n),
							t
						}
					} (),
					o = "https://api.cdnbye.com/v1",
					s = function() {
						function e(t, r, a, s, l) {
							n(this, e),
							this.engine = t,
							this.key = r,
							this.baseUrl = s || o,
							this.channelId = window.btoa(a),
							this.timestamp = Date.parse(new Date) / 1e3,
							this.announceInfo = i({},
							l, {
								channel: this.channelId,
								ts: this.timestamp
							}),
							this.announceURL = this.baseUrl + "/channel",
							this.key = r,
							this.conns = 0,
							this.failConns = 0,
							this.totalHTTPDownloaded = 0,
							this.totalP2PDownloaded = 0,
							this.totalP2PUploaded = 0,
							this.httpDownloaded = 0,
							this.p2pDownloaded = 0,
							this.p2pUploaded = 0,
							this.errsBufStalled = 0,
							this.errsInternalExpt = 0
						}
						return a(e, [{
							key: "btAnnounce",
							value: function() {
								var e = this,
								t = this.engine.logger;
								return new Promise(function(r, n) {
									fetch(e.announceURL, {
										headers: e._requestHeader,
										method: "POST",
										body: JSON.stringify(e.announceInfo)
									}).then(function(e) {
										return e.json()
									}).then(function(t) {
										if ( - 1 === t.ret) n(t.data.msg);
										else {
											var i = t.data;
											i.info && console.info("" + i.info),
											i.warn && console.warn("" + i.warn),
											i.min_conns || (i.min_conns = 3),
											i.rejected ? e.engine.p2pEnabled = !1 : (e.peerId = e.id = i.id, e.v = i.v, e.btStats(i.report_interval), e.getPeersURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/peers", e.statsURL = e.baseUrl + "/channel/" + e.channelId + "/node/" + e.peerId + "/stats", r(t.data))
										}
									}).
									catch(function(e) {
										t.error("btAnnounce error " + e),
										n(e)
									})
								})
							}
						},
						{
							key: "btStats",
							value: function() {
								var e = this,
								t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
								r = this.engine.logger;
								this.heartbeater = window.setInterval(function() {
									fetch(e.statsURL, {
										headers: e._requestHeader,
										method: "POST",
										body: JSON.stringify(e._makeStatsBody())
									}).then(function(t) {
										if (t.ok) {
											r.info("sucessfully report stats");
											var n = e.lastStats || {},
											i = n.http,
											a = void 0 === i ? 0 : i,
											o = n.p2p,
											s = void 0 === o ? 0 : o,
											l = n.share,
											u = void 0 === l ? 0 : l,
											c = n.conns,
											d = void 0 === c ? 0 : c,
											f = n.failConns,
											h = void 0 === f ? 0 : f,
											p = n.errsBufStalled,
											g = void 0 === p ? 0 : p,
											v = n.errsInternalExpt,
											y = void 0 === v ? 0 : v;
											e.httpDownloaded -= a,
											e.p2pDownloaded -= s,
											e.p2pUploaded -= u,
											e.conns -= d,
											e.failConns -= h,
											e.errsBufStalled -= g,
											e.errsInternalExpt -= y
										}
									}).
									catch(function(e) {
										r.error("btStats error " + e)
									})
								},
								1e3 * t)
							}
						},
						{
							key: "btGetPeers",
							value: function() {
								var e = this,
								t = this.engine.logger;
								return new Promise(function(r, n) {
									fetch(e.getPeersURL, {
										headers: e._requestHeader,
										method: "POST"
									}).then(function(e) {
										return e.json()
									}).then(function(e) { - 1 === e.ret ? n(e.data.msg) : r(e.data)
									}).
									catch(function(e) {
										t.error("btGetPeers error " + e),
										n(e)
									})
								})
							}
						},
						{
							key: "increConns",
							value: function() {
								this.conns++
							}
						},
						{
							key: "decreConns",
							value: function() {
								this.conns--
							}
						},
						{
							key: "increFailConns",
							value: function() {
								this.failConns++
							}
						},
						{
							key: "reportFlow",
							value: function(e) {
								var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								r = Math.round(e.total / 1024);
								t ? (this.p2pDownloaded += r, this.totalP2PDownloaded += r) : (this.httpDownloaded += r, this.totalHTTPDownloaded += r),
								this._emitStats()
							}
						},
						{
							key: "reportUploaded",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
								this.totalP2PUploaded += Math.round(e / 1024),
								this.p2pUploaded += Math.round(e / 1024),
								this._emitStats()
							}
						},
						{
							key: "destroy",
							value: function() {
								this.engine.logger.warn("destroy fetcher"),
								window.clearInterval(this.heartbeater)
							}
						},
						{
							key: "_emitStats",
							value: function() {
								this.engine.emit("stats", {
									totalHTTPDownloaded: this.totalHTTPDownloaded,
									totalP2PDownloaded: this.totalP2PDownloaded,
									totalP2PUploaded: this.totalP2PUploaded
								})
							}
						},
						{
							key: "_makeStatsBody",
							value: function() {
								var e = {
									conns: this.conns,
									failConns: this.failConns,
									errsBufStalled: this.errsBufStalled,
									errsInternalExpt: this.errsInternalExpt,
									http: Math.round(this.httpDownloaded),
									p2p: Math.round(this.p2pDownloaded),
									share: Math.round(this.p2pUploaded)
								};
								return this.lastStats = e,
								Object.keys(e).forEach(function(t) {
									0 === e[t] && delete e[t]
								}),
								e
							}
						},
						{
							key: "_requestHeader",
							get: function() {
								return {}
							}
						}]),
						e
					} ();
					t.
				default = s,
					e.exports = t.
				default
				},
				function(e, t) {
					e.exports = function() {
						if ("undefined" == typeof window) return null;
						var e = {
							RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
							RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
							RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
						};
						return e.RTCPeerConnection ? e: null
					}
				},
				function(e, t, r) {
					function n(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25,
						n = null,
						i = !1,
						a = r;
						return function() {
							if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) return void window.clearTimeout(n);
							i || (i = !0, n = setTimeout(function() {
								e.call(t),
								i = !1,
								n = null
							},
							1e3 * a), a *= 1.7)
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					t.
				default = n,
					e.exports = t.
				default
				}])
			})
		}).call(t, r(10)(e))
	},
	function(e, t, r) {
		"use strict";
		function n() {
			return ! 0
		}
		function i(e) {
			var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
			r = window.location.search.substr(1).match(t);
			return null != r && "" !== r[2] ? r[2].toString() : ""
		}
		function a(e, t) {
			var r = s.
		default.parseURL(e),
			n = r.path.split(".")[1];
			return - 1 !== t.indexOf(n)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.noop = n,
		t.getQueryParam = i,
		t.isBlockType = a;
		var o = r(3),
		s = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (o)
	},
	function(e, t, r) { !
		function(t) {
			var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
			n = /^([^\/;?#]*)(.*)$/,
			i = /(?:\/|^)\.(?=\/)/g,
			a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
			o = {
				buildAbsoluteURL: function(e, t, r) {
					if (r = r || {},
					e = e.trim(), !(t = t.trim())) {
						if (!r.alwaysNormalize) return e;
						var i = o.parseURL(e);
						if (!i) throw new Error("Error trying to parse base URL.");
						return i.path = o.normalizePath(i.path),
						o.buildURLFromParts(i)
					}
					var a = o.parseURL(t);
					if (!a) throw new Error("Error trying to parse relative URL.");
					if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : t;
					var s = o.parseURL(e);
					if (!s) throw new Error("Error trying to parse base URL.");
					if (!s.netLoc && s.path && "/" !== s.path[0]) {
						var l = n.exec(s.path);
						s.netLoc = l[1],
						s.path = l[2]
					}
					s.netLoc && !s.path && (s.path = "/");
					var u = {
						scheme: s.scheme,
						netLoc: a.netLoc,
						path: null,
						params: a.params,
						query: a.query,
						fragment: a.fragment
					};
					if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0])) if (a.path) {
						var c = s.path,
						d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
						u.path = o.normalizePath(d)
					} else u.path = s.path,
					a.params || (u.params = s.params, a.query || (u.query = s.query));
					return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
					o.buildURLFromParts(u)
				},
				parseURL: function(e) {
					var t = r.exec(e);
					return t ? {
						scheme: t[1] || "",
						netLoc: t[2] || "",
						path: t[3] || "",
						params: t[4] || "",
						query: t[5] || "",
						fragment: t[6] || ""
					}: null
				},
				normalizePath: function(e) {
					for (e = e.split("").reverse().join("").replace(i, ""); e.length !== (e = e.replace(a, "")).length;);
					return e.split("").reverse().join("")
				},
				buildURLFromParts: function(e) {
					return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
				}
			};
			e.exports = o
		} ()
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.config = t.FragLoader = t.Tracker = void 0;
		var i = r(8),
		a = n(i),
		o = r(13),
		s = n(o),
		l = {
			prefetchOffset: 3,
			prefetchNum: 4
		};
		t.Tracker = a.
	default,
		t.FragLoader = s.
	default,
		t.config = l
	},
	function(e, t, r) {
		"use strict";
		function n(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o, s = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		l = r(6),
		u = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (l);
		o = r(18);
		var c = {
			maxBufferSize: 8e8,
			maxBufferLength: 50,
			liveSyncDuration: 300
		},
		d = {
			maxBufferSize: 8e8
		},
		f = function(e) {
			function t() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				n(this, t);
				var r = e.p2pConfig || {},
				a = !1 === r.live ? d: c,
				s = JSON.parse(JSON.stringify(a));
				for (var l in e)"p2pConfig" !== l && (s[l] = e[l]);
				var f = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, s));
				return u.
			default.isSupported() && (f._p2pEngine = new u.
			default(f, r)),
				f.on(o.Events.DESTROYING,
				function() {
					console.warn("destroying hlsjs"),
					f._p2pEngine && (f._p2pEngine.destroy(), f._p2pEngine = null)
				}),
				f
			}
			return a(t, e),
			s(t, null, [{
				key: "P2PEvents",
				get: function() {
					return u.
				default.Events
				}
			}]),
			s(t, [{
				key: "enableP2P",
				value: function() {
					this._p2pEngine.enableP2P()
				}
			},
			{
				key: "disableP2P",
				value: function() {
					this._p2pEngine.disableP2P()
				}
			},
			{
				key: "p2pEngine",
				get: function() {
					return this._p2pEngine
				}
			},
			{
				key: "engine",
				get: function() {
					return console.warn("The property 'engine' is deprecated, use p2pEngine instead"),
					this._p2pEngine
				}
			}]),
			t
		} (o);
		f.engineVersion = u.
	default.version,
		f.WEBRTC_SUPPORT = u.
	default.isSupported(),
		t.
	default = f,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		function i(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function a(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		l = r(0),
		u = n(l),
		c = r(3),
		d = n(c),
		f = r(7),
		h = n(f),
		p = r(4),
		g = r(14),
		v = n(g),
		y = r(1),
		m = r(15),
		b = n(m),
		_ = r(16),
		E = n(_),
		T = r(2),
		S = r(17),
		w = n(S),
		R = function(e) {
			function t(e, r) {
				i(this, t);
				var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				n.config = Object.assign({},
				h.
			default, r),
				e.config.segmentId = n.config.segmentId,
				n.hlsjs = e,
				n.p2pEnabled = !1 !== n.config.p2pEnabled,
				e.config.currLoaded = e.config.currPlay = 0,
				n.HLSEvents = e.constructor.Events;
				var o = function r(i, a) {
					var o = a.details.live;
					n.config.live = o,
					n.browserInfo = {
						device: E.
					default.getPlatform(),
						netType: E.
					default.getNetType() || void 0,
						version: t.version,
						tag: n.config.tag || (0, w.
					default)(),
						live: o,
						type: "hls",
						agent: n.config.agent || void 0
					};
					var s = d.
				default.parseURL(n.config.wsSignalerAddr).netLoc.substr(2);
					n.channel = n.config.channelId(e.url, n.browserInfo) + "|" + s + "[" + y.DataChannel.VERSION + "]";
					var l = new b.
				default(n.config, n.channel);
					n.hlsjs.config.logger = n.logger = l,
					l.info("CDNBye version: " + t.version + " Hlsjs version: " + e.constructor.version),
					l.info("channel " + n.channel),
					n._init(n.channel, n.browserInfo),
					e.off(n.HLSEvents.LEVEL_LOADED, r)
				};
				return e.on(n.HLSEvents.LEVEL_LOADED, o),
				n
			}
			return o(t, e),
			s(t, null, [{
				key: "Events",
				get: function() {
					return y.Events
				}
			}]),
			s(t, [{
				key: "_init",
				value: function(e, t) {
					var r = this,
					n = this.logger;
					if (this.p2pEnabled) {
						this.hlsjs.config.p2pEnabled = this.p2pEnabled,
						this.bufMgr = new v.
					default(this, this.config),
						this.hlsjs.config.bufMgr = this.bufMgr;
						var i = new y.Fetcher(this, "free", window.encodeURIComponent(e), this.config.announce || "", t);
						this.fetcher = i,
						this.tracker = new p.Tracker(this, i, this.config),
						this.tracker.scheduler.bufferManager = this.bufMgr,
						this.hlsjs.config.fLoader = p.FragLoader,
						this.hlsjs.config.scheduler = this.tracker.scheduler,
						this.hlsjs.config.fetcher = i,
						this.hlsjs.config.p2pBlackList = this.config.p2pBlackList,
						this.hlsjs.on(this.HLSEvents.FRAG_LOADING,
						function(e, t) {
							var i = t.frag.sn; (0, T.isBlockType)(t.frag.url, r.config.p2pBlackList) || (n.debug("loading frag " + i), r.emit(y.Events.FRAG_LOADING, i))
						}),
						this.trackerTried = !1,
						this.hlsjs.on(this.HLSEvents.FRAG_LOADED,
						function(e, t) {
							var i = t.frag.sn;
							if (! (0, T.isBlockType)(t.frag.url, r.config.p2pBlackList)) {
								r.hlsjs.config.currLoaded = i,
								r.emit(y.Events.FRAG_LOADED, i),
								r.hlsjs.config.currLoadedDuration = t.frag.duration;
								var a = Math.round(8 * t.frag.loaded / t.frag.duration);
								if (r.trackerTried || r.tracker.connected || !r.config.p2pEnabled || (r.tracker.scheduler.bitrate = a, n.info("bitrate " + a), r.tracker.resumeP2P(), r.trackerTried = !0), t.frag.loadByHTTP || (t.frag.loadByP2P = !1, t.frag.loadByHTTP = !0), r.config.p2pEnabled && r.bufMgr.hasSegOfSN(i + 1)) {
									var o = r.bufMgr.getSegIdbySN(i + 1),
									s = r.bufMgr.getSegById(o).level;
									r.hlsjs.nextLoadLevel = s
								}
							}
						}),
						this.hlsjs.on(this.HLSEvents.FRAG_CHANGED,
						function(e, t) {
							if (! (0, T.isBlockType)(t.frag.url, r.config.p2pBlackList)) {
								n.debug("frag changed: " + t.frag.sn);
								var i = t.frag.sn;
								r.hlsjs.config.currPlay = i,
								r.emit(y.Events.FRAG_CHANGED, i)
							}
						}),
						this.hlsjs.on(this.HLSEvents.ERROR,
						function(e, t) {
							n.error("errorType " + t.type + " details " + t.details + " errorFatal " + t.fatal);
							var i = r.hlsjs.constructor.ErrorDetails;
							switch (t.details) {
							case i.BUFFER_STALLED_ERROR:
								r.fetcher.errsBufStalled++;
								break;
							case i.INTERNAL_EXCEPTION:
								r.fetcher.errsInternalExpt++
							}
						})
					}
				}
			},
			{
				key: "disableP2P",
				value: function() {
					this.logger && this.logger.warn("disable P2P"),
					this.p2pEnabled && (this.p2pEnabled = !1, this.config.p2pEnabled = this.hlsjs.config.p2pEnabled = this.p2pEnabled, this.tracker && (this.tracker.stopP2P(), this.tracker = {},
					this.fetcher = null, this.bufMgr.destroy(), this.bufMgr = null, this.hlsjs.config.fLoader = this.hlsjs.constructor.DefaultConfig.loader))
				}
			},
			{
				key: "enableP2P",
				value: function() {
					this.p2pEnabled || (this.logger.warn("enable P2P"), this.p2pEnabled = !0, this.config.p2pEnabled = this.hlsjs.config.p2pEnabled = this.p2pEnabled, this._init(this.channel, this.browserInfo))
				}
			},
			{
				key: "destroy",
				value: function() {
					this.disableP2P(),
					this.removeAllListeners(),
					console.warn("destroy p2p engine")
				}
			},
			{
				key: "version",
				get: function() {
					return t.version
				}
			}], [{
				key: "isSupported",
				value: function() {
					var e = (0, y.getBrowserRTC)();
					return e && void 0 !== e.RTCPeerConnection.prototype.createDataChannel
				}
			}]),
			t
		} (u.
	default);
		R.WEBRTC_SUPPORT = !!(0, y.getBrowserRTC)(),
		R.version = "0.7.0",
		t.
	default = R,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = Object.assign ||
		function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		},
		i = r(4),
		a = r(3),
		o = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (a),
		s = n({
			wsSignalerAddr: "wss://signal.cdnbye.com/wss",
			wsMaxRetries: 3,
			wsReconnectInterval: 5,
			p2pEnabled: !0,
			dcUploadTimeout: 4,
			dcTolerance: 5,
			packetSize: 65536,
			maxBufferSize: {
				pc: 209715200,
				mobile: 104857600
			},
			loadTimeoutRate: .7,
			logLevel: "none",
			tag: "",
			webRTCConfig: {},
			p2pBlackList: ["aac", "mp3", "vtt", "webvtt"],
			agent: ""
		},
		i.config);
		s.channelId = function(e) {
			var t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o.
		default.parseURL(e));
			return "" + (t.netLoc.substr(2) + t.path.split(".")[0])
		},
		s.segmentId = function(e, t, r) {
			return e + "-" + t
		},
		s.validateSegment = function(e, t, r) {
			return ! 0
		},
		t.
	default = s,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		function i(e) {
			if (Array.isArray(e)) {
				for (var t = 0,
				r = Array(e.length); t < e.length; t++) r[t] = e[t];
				return r
			}
			return Array.from(e)
		}
		function a(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function o(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function s(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var l = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		u = r(0),
		c = n(u),
		d = r(9),
		f = n(d),
		h = r(11),
		p = n(h),
		g = r(1),
		v = (r(2),
		function(e) {
			function t(e, r, n) {
				a(this, t);
				var i = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return i.engine = e,
				i.logger = e.logger,
				i.config = n,
				i.connected = !1,
				i.scheduler = new f.
			default(e, n),
				i.DCMap = new Map,
				i.failedDCSet = new Set,
				i.signalerWs = null,
				i.fetcher = r,
				i.peers = [],
				i.minConns = 0,
				i.requestMorePeers = (0, g.getPeersThrottle)(i._requestMorePeers, i),
				i
			}
			return s(t, e),
			l(t, [{
				key: "resumeP2P",
				value: function() {
					var e = this;
					this.fetcher.btAnnounce().then(function(t) {
						e.logger.info("announce request response " + JSON.stringify(t)),
						e.engine.peerId = e.peerId = t.id,
						e.minConns = t.min_conns,
						e.signalerWs = e._initSignalerWs(),
						0 === t.peers.length ? e.requestMorePeers() : e._handlePeers(t.peers),
						e.engine.emit("peerId", e.peerId)
					}).
					catch(function(e) {
						console.warn(e)
					})
				}
			},
			{
				key: "stopP2P",
				value: function() {
					this.fetcher.destroy(),
					this.fetcher = null,
					this.requestMorePeers(!0),
					this.scheduler.destroy(),
					this.scheduler = null,
					this.signalerWs && (this.signalerWs.destroy(), this.signalerWs = null),
					this.peers = [];
					var e = !0,
					t = !1,
					r = void 0;
					try {
						for (var n, i = this.DCMap.values()[Symbol.iterator](); ! (e = (n = i.next()).done); e = !0) {
							n.value.destroy()
						}
					} catch(e) {
						t = !0,
						r = e
					} finally {
						try { ! e && i.
							return && i.
							return ()
						} finally {
							if (t) throw r
						}
					}
					this.DCMap.clear(),
					this.failedDCSet.clear(),
					this.logger.warn("tracker stop p2p")
				}
			},
			{
				key: "destroy",
				value: function() {
					this.stopP2P(),
					this.removeAllListeners(),
					this.logger.warn("destroy tracker")
				}
			},
			{
				key: "_handlePeers",
				value: function(e) {
					var t = this,
					r = !0,
					n = !1,
					a = void 0;
					try {
						for (var o, s = e[Symbol.iterator](); ! (r = (o = s.next()).done); r = !0) {
							var l = o.value;
							this.peers.push({
								id: l.id
							})
						}
					} catch(e) {
						n = !0,
						a = e
					} finally {
						try { ! r && s.
							return && s.
							return ()
						} finally {
							if (n) throw a
						}
					}
					this.peers = this.peers.filter(function(e) {
						for (var r = [].concat(i(t.DCMap.keys()), i(t.failedDCSet.keys())), n = 0; n < r.length; n++) {
							var a = r[n];
							if (e.id === a) return ! 1
						}
						return ! 0
					})
				}
			},
			{
				key: "_tryConnectToAllPeers",
				value: function() {
					var e = this;
					0 !== this.peers.length && (this.logger.info("try connect to " + this.peers.length + " peers"), this.peers.forEach(function(t) {
						var r = new g.DataChannel(e.engine, e.peerId, t.id, !0, e.config);
						e.DCMap.set(t.id, r),
						e._setupDC(r)
					}), this.peers = [])
				}
			},
			{
				key: "_setupDC",
				value: function(e) {
					var t = this;
					e.on(g.Events.DC_SIGNAL,
					function(r) {
						var n = e.remotePeerId;
						t.signalerWs.sendSignal(n, r)
					}).once(g.Events.DC_ERROR,
					function() {
						t.logger.warn("datachannel connect " + e.channelId + " failed"),
						t.scheduler && t.scheduler.deletePeer(e),
						t.DCMap.delete(e.remotePeerId),
						t.failedDCSet.add(e.remotePeerId),
						e.destroy(),
						t.requestMorePeers(),
						e.connected ? t.fetcher.decreConns() : t.fetcher.increFailConns()
					}).once(g.Events.DC_CLOSE,
					function() {
						t.logger.warn("datachannel " + e.channelId + " closed"),
						t.scheduler && t.scheduler.deletePeer(e),
						t.DCMap.delete(e.remotePeerId),
						t.failedDCSet.add(e.remotePeerId),
						e.destroy(),
						t.requestMorePeers(),
						t.fetcher.decreConns()
					}).once(g.Events.DC_OPEN,
					function() {
						t.scheduler.handshakePeer(e);
						var r = !(t.scheduler.peersNum <= t.minConns);
						t.requestMorePeers(r),
						t.fetcher.increConns()
					})
				}
			},
			{
				key: "_initSignalerWs",
				value: function() {
					var e = this,
					t = new p.
				default(this.engine, this.peerId, this.config);
					return t.onopen = function() {
						e.connected = !0,
						e._tryConnectToAllPeers()
					},
					t.onmessage = function(t) {
						var r = JSON.parse(t.data),
						n = r.action;
						switch (n) {
						case "signal":
							var i = r.from_peer_id;
							if (e.failedDCSet.has(i) || !i) return;
							if (e.logger.debug("handle signal of " + i), r.data) e._handleSignal(i, r.data);
							else {
								e.logger.info("signaling " + i + " not found");
								var a = e.DCMap.get(i);
								a && (a.destroy(), e.DCMap.delete(i)),
								e.failedDCSet.add(i)
							}
							break;
						case "reject":
							e.stopP2P();
							break;
						default:
							e.logger.warn("Signaler websocket unknown action " + n)
						}
					},
					t.onclose = function() {
						e.connected = !1
					},
					t
				}
			},
			{
				key: "_handleSignal",
				value: function(e, t) {
					var r = this.DCMap.get(e);
					if (r && r.connected) return void this.logger.info("datachannel had connected, signal ignored");
					if (!r) {
						if (this.logger.debug("receive node " + e + " connection request"), this.failedDCSet.has(e)) return;
						r = new g.DataChannel(this.engine, this.peerId, e, !1, this.config),
						this.DCMap.set(e, r),
						this._setupDC(r)
					}
					r.receiveSignal(t)
				}
			},
			{
				key: "_requestMorePeers",
				value: function() {
					var e = this;
					this.scheduler.peersNum <= this.minConns && this.fetcher.btGetPeers().then(function(t) {
						e.logger.info("request more peers " + JSON.stringify(t)),
						e._handlePeers(t.peers),
						e._tryConnectToAllPeers()
					})
				}
			}]),
			t
		} (c.
	default));
		t.
	default = v,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			if (Array.isArray(e)) {
				for (var t = 0,
				r = Array(e.length); t < e.length; t++) r[t] = e[t];
				return r
			}
			return Array.from(e)
		}
		function i(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function a(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		l = r(0),
		u = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (l),
		c = r(1),
		d = function(e) {
			function t(e, r) {
				i(this, t);
				var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n.engine = e,
				n.config = r,
				n.bufMgr = null,
				n.peerMap = new Map,
				n.bitset = new Set,
				n.bitCounts = new Map,
				n.targetPeer = null,
				n.lastFragDuration = 3,
				n._setupEngine(),
				n
			}
			return o(t, e),
			s(t, [{
				key: "updateLoadedSN",
				value: function(e) {
					this.bitset.add(e),
					this.bitCounts.has(e) && this.bitCounts.delete(e);
					var t = {
						event: c.Events.DC_HAVE,
						sn: e
					};
					this._broadcastToPeers(t)
				}
			},
			{
				key: "updatePlaySN",
				value: function(e) {
					var t = this.engine.logger;
					if (!this.config.live && this.hasPeers) for (var r = [], n = this.config, i = n.prefetchOffset, a = n.prefetchNum, o = e + i; o < e + i + a; o++) if (!this.bitset.has(o) && o !== this.loadingSN && this.bitCounts.has(o)) {
						var s = !0,
						l = !1,
						u = void 0;
						try {
							for (var c, d = this.peerMap.values()[Symbol.iterator](); ! (s = (c = d.next()).done); s = !0) {
								var f = c.value;
								if (!r.includes(f) && f.isAvailable && f.bitset.has(o)) {
									f.requestDataBySN(o, !1),
									t.debug("request prefetch " + o + " from peer " + f.remotePeerId),
									r.push(f);
									break
								}
							}
						} catch(e) {
							l = !0,
							u = e
						} finally {
							try { ! s && d.
								return && d.
								return ()
							} finally {
								if (l) throw u
							}
						}
					}
				}
			},
			{
				key: "chokePeerRequest",
				value: function(e) {
					var t = {
						event: c.Events.DC_CHOKE
					};
					e ? e.sendJson(t) : this._broadcastToPeers(t)
				}
			},
			{
				key: "unchokePeerRequest",
				value: function(e) {
					var t = {
						event: c.Events.DC_UNCHOKE
					};
					e ? e.sendJson(t) : this._broadcastToPeers(t)
				}
			},
			{
				key: "stopRequestFromPeers",
				value: function() {
					var e = !0,
					t = !1,
					r = void 0;
					try {
						for (var n, i = this.peerMap.values()[Symbol.iterator](); ! (e = (n = i.next()).done); e = !0) {
							n.value.choked = !0
						}
					} catch(e) {
						t = !0,
						r = e
					} finally {
						try { ! e && i.
							return && i.
							return ()
						} finally {
							if (t) throw r
						}
					}
				}
			},
			{
				key: "resumeRequestFromPeers",
				value: function() {
					var e = !0,
					t = !1,
					r = void 0;
					try {
						for (var n, i = this.peerMap.values()[Symbol.iterator](); ! (e = (n = i.next()).done); e = !0) {
							n.value.choked = !1
						}
					} catch(e) {
						t = !0,
						r = e
					} finally {
						try { ! e && i.
							return && i.
							return ()
						} finally {
							if (t) throw r
						}
					}
				}
			},
			{
				key: "deletePeer",
				value: function(e) {
					var t = this;
					this.peerMap.has(e.remotePeerId) && (e.bitset.forEach(function(e) {
						t._decreBitCounts(e)
					}), this.peerMap.delete(e.remotePeerId)),
					this.engine.emit("peers", [].concat(n(this.peerMap.keys())))
				}
			},
			{
				key: "handshakePeer",
				value: function(e) {
					this._setupDC(e),
					e.sendBitField(Array.from(this.bitset))
				}
			},
			{
				key: "addPeer",
				value: function(e) {
					this.engine.logger.info("add peer " + e.remotePeerId),
					this.peerMap.set(e.remotePeerId, e),
					this.engine.emit("peers", [].concat(n(this.peerMap.keys())))
				}
			},
			{
				key: "peersHasSN",
				value: function(e) {
					return this.bitCounts.has(e)
				}
			},
			{
				key: "hasAndSetTargetPeer",
				value: function(e) {
					var t = this.engine.logger;
					if (!this.hasIdlePeers || !this.peersHasSN(e)) return ! 1;
					var r = !0,
					n = !1,
					i = void 0;
					try {
						for (var a, o = this.peerMap.values()[Symbol.iterator](); ! (r = (a = o.next()).done); r = !0) {
							var s = a.value;
							if (s.isAvailable && s.bitset.has(e)) return t.info("found sn " + e + " from peer " + s.remotePeerId),
							this.targetPeer = s,
							!0
						}
					} catch(e) {
						n = !0,
						i = e
					} finally {
						try { ! r && o.
							return && o.
							return ()
						} finally {
							if (n) throw i
						}
					}
					return t.warn("idle peers hasn't sn " + e),
					!1
				}
			},
			{
				key: "load",
				value: function(e, t, r) {
					var n = this.engine.logger;
					this.context = e;
					var i = e.frag,
					a = this.config.segmentId(i.level, i.sn, i.url);
					this.callbacks = r,
					this.stats = {
						trequest: performance.now(),
						retry: 0,
						tfirst: 0,
						tload: 0,
						loaded: 0
					},
					this.criticalSeg = {
						sn: i.sn,
						segId: a
					},
					this.targetPeer.requestDataById(a, !0),
					n.info("request criticalSeg segId " + a + " at " + i.sn);
					var o = this.config.loadTimeoutRate * this.lastFragDuration;
					this.criticaltimeouter = window.setTimeout(this._criticaltimeout.bind(this), 1e3 * o)
				}
			},
			{
				key: "destroy",
				value: function() {
					var e = this.engine.logger;
					this.peersNum > 0 && this.peerMap.clear(),
					this.removeAllListeners(),
					e.warn("destroy scheduler")
				}
			},
			{
				key: "_setupDC",
				value: function(e) {
					var t = this,
					r = this.engine.logger;
					e.on(c.Events.DC_BITFIELD,
					function(r) {
						if (r.field) {
							var n = new Set(r.field);
							e.bitset = n,
							r.field.forEach(function(e) {
								t.bitset.has(e) || t._increBitCounts(e)
							}),
							t.addPeer(e)
						}
					}).on(c.Events.DC_HAVE,
					function(r) {
						if (r.sn && e.bitset) {
							var n = r.sn;
							e.bitset.add(n),
							t.bitset.has(n) || t._increBitCounts(n)
						}
					}).on(c.Events.DC_LOST,
					function(r) {
						if (r.sn && e.bitset) {
							var n = r.sn;
							e.bitset.delete(n),
							t._decreBitCounts(n)
						}
					}).on(c.Events.DC_PIECE_ACK,
					function(e) {
						e.size && t.engine.fetcher.reportUploaded(e.size)
					}).on(c.Events.DC_PIECE,
					function(e) {
						t.criticalSeg && t.criticalSeg.segId === e.seg_id && (t.stats.tfirst = Math.max(performance.now(), t.stats.trequest))
					}).on(c.Events.DC_PIECE_NOT_FOUND,
					function(e) {
						t.criticalSeg && t.criticalSeg.segId === e.seg_id && (window.clearTimeout(t.criticaltimeouter), r.info("DC_PIECE_NOT_FOUND"), t._criticaltimeout())
					}).on(c.Events.DC_RESPONSE,
					function(n) {
						var i = n.level,
						a = n.sn,
						o = n.data,
						s = n.seg_id,
						l = t.criticalSeg && t.criticalSeg.segId === s && t.criticaltimeouter;
						if (t.config.validateSegment(i, a, o)) {
							if (l) {
								r.info("receive criticalSeg seg_id " + s),
								window.clearTimeout(t.criticaltimeouter),
								t.criticaltimeouter = null;
								var u = t.stats;
								u.tload = Math.max(u.tfirst, performance.now()),
								u.loaded = u.total = o.byteLength,
								t.criticalSeg = null,
								t.context.frag.fromPeerId = e.remotePeerId,
								t.callbacks.onSuccess(n, u, t.context)
							} else t.bufMgr.handleFrag(a, i, s, o, e.remotePeerId, !1);
							t.updateLoadedSN(a)
						} else r.warn("segment " + i + "-" + a + " validate failed"),
						l && (window.clearTimeout(t.criticaltimeouter), t._criticaltimeout())
					}).on(c.Events.DC_REQUEST,
					function(r) {
						var n = "";
						if ((n = r.seg_id ? r.seg_id: t.bufMgr.getSegIdbySN(r.sn)) && t.bufMgr.hasSegOfId(n)) {
							var i = t.bufMgr.getSegById(n);
							e.sendBuffer(i.sn, i.level, i.segId, i.data)
						} else e.sendJson({
							event: c.Events.DC_PIECE_NOT_FOUND,
							seg_id: n,
							sn: r.sn
						})
					}).on(c.Events.DC_TIMEOUT,
					function() {}).on(c.Events.DC_USELESS,
					function() {
						r.warn("datachannel " + e.remotePeerId + " download miss reach dcTolerance"),
						t.config.live ? e.choked = !0 : e.close()
					})
				}
			},
			{
				key: "_setupEngine",
				value: function() {
					var e = this;
					this.engine.on(c.Events.FRAG_LOADING,
					function(t) {
						e.loadingSN = t
					}).on(c.Events.FRAG_LOADED,
					function(t) {
						e.updateLoadedSN(t)
					}).on(c.Events.FRAG_CHANGED,
					function(t) {
						e.updatePlaySN(t)
					})
				}
			},
			{
				key: "_broadcastToPeers",
				value: function(e) {
					if (this.peersNum > 0) {
						var t = !0,
						r = !1,
						n = void 0;
						try {
							for (var i, a = this.peerMap.values()[Symbol.iterator](); ! (t = (i = a.next()).done); t = !0) {
								i.value.sendJson(e)
							}
						} catch(e) {
							r = !0,
							n = e
						} finally {
							try { ! t && a.
								return && a.
								return ()
							} finally {
								if (r) throw n
							}
						}
					}
				}
			},
			{
				key: "_getIdlePeer",
				value: function() {
					return [].concat(n(this.peerMap.values())).filter(function(e) {
						return e.isAvailable
					})
				}
			},
			{
				key: "_decreBitCounts",
				value: function(e) {
					if (this.bitCounts.has(e)) {
						var t = this.bitCounts.get(e);
						1 === t ? this.bitCounts.delete(e) : this.bitCounts.set(e, t - 1)
					}
				}
			},
			{
				key: "_increBitCounts",
				value: function(e) {
					if (this.bitCounts.has(e)) {
						var t = this.bitCounts.get(e);
						this.bitCounts.set(e, t + 1)
					} else this.bitCounts.set(e, 1)
				}
			},
			{
				key: "_criticaltimeout",
				value: function() {
					this.engine.logger.warn("critical request timeout"),
					this.criticalSeg = null,
					this.criticaltimeouter = null,
					this.targetPeer && this.targetPeer.loadtimeout(),
					this.callbacks.onTimeout(this.stats, this.context, null)
				}
			},
			{
				key: "hasPeers",
				get: function() {
					return this.peersNum > 0
				}
			},
			{
				key: "peersNum",
				get: function() {
					return this.peerMap.size
				}
			},
			{
				key: "hasIdlePeers",
				get: function() {
					var e = this.engine.logger,
					t = this._getIdlePeer().length;
					return e.info("peers: " + this.peersNum + " idle peers: " + t),
					t > 0
				}
			},
			{
				key: "bufferManager",
				set: function(e) {
					var t = this;
					this.bufMgr = e,
					e.on(c.Events.BM_LOST,
					function(e) {
						t._broadcastToPeers({
							event: c.Events.DC_LOST,
							sn: e
						}),
						t.bitset.delete(e)
					})
				}
			},
			{
				key: "nextFragLoadTime",
				set: function(e) {
					this.lastFragDuration = e
				}
			}]),
			t
		} (u.
	default);
		t.
	default = d,
		e.exports = t.
	default
	},
	function(e, t) {
		e.exports = function(e) {
			return e.webpackPolyfill || (e.deprecate = function() {},
			e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
				enumerable: !0,
				get: function() {
					return e.l
				}
			}), Object.defineProperty(e, "id", {
				enumerable: !0,
				get: function() {
					return e.i
				}
			}), e.webpackPolyfill = 1),
			e
		}
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		}
		function i(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function a(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		l = r(0),
		u = n(l),
		c = r(12),
		d = n(c),
		f = function(e) {
			function t(e, r, n) {
				i(this, t);
				var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return o.engine = e,
				o.logger = e.logger,
				o.peerId = r,
				o.config = n,
				o.wsAddr = n.wsSignalerAddr,
				o.connected = !1,
				o.msgQueue = [],
				o._ws = o._init(r),
				o
			}
			return o(t, e),
			s(t, [{
				key: "_init",
				value: function(e) {
					var t = this,
					r = {
						maxRetries: this.config.wsMaxRetries,
						minReconnectionDelay: 1e3 * this.config.wsReconnectInterval
					},
					n = "?id=" + e,
					i = new d.
				default(this.wsAddr + n, void 0, r);
					return i.onopen = function() {
						t.logger.info("Signaler websocket connection opened"),
						t.connected = !0,
						t.msgQueue.length > 0 && (t.logger.warn("resend all cached msg"), t.msgQueue.forEach(function(e) {
							t._ws.send(e)
						}), t.msgQueue = []),
						t.onopen && t.onopen(),
						t._startPing()
					},
					i.push = i.send,
					i.send = function(r) {
						var n = JSON.stringify(Object.assign({
							peer_id: e
						},
						r));
						i.push(n),
						t._resetPing()
					},
					i.onmessage = function(e) {
						t.onmessage && t.onmessage(e)
					},
					i.onclose = function() {
						t.logger.warn("Signaler websocket closed"),
						t.onclose && t.onclose(),
						t.connected = !1,
						t._stopPing()
					},
					i
				}
			},
			{
				key: "sendSignal",
				value: function(e, t) {
					var r = {
						action: "signal",
						peer_id: this.peerId,
						to_peer_id: e,
						data: t
					};
					this._send(r)
				}
			},
			{
				key: "_send",
				value: function(e) {
					this.connected ? this._ws.send(e) : (this.logger.warn("signaler closed, msg is cached"), this.msgQueue.push(e))
				}
			},
			{
				key: "_startPing",
				value: function() {
					var e = this;
					this.pingTimer = window.setInterval(function() {
						e._ws.send(9)
					},
					6e4)
				}
			},
			{
				key: "_resetPing",
				value: function() {
					this._stopPing(),
					this._startPing()
				}
			},
			{
				key: "_stopPing",
				value: function() {
					window.clearInterval(this.pingTimer),
					this.pingTimer = null
				}
			},
			{
				key: "close",
				value: function() {
					this.logger.warn("close signal client"),
					this.connected = !1,
					this._ws.close(1e3, "stop signaling", {
						keepClosed: !0
					})
				}
			},
			{
				key: "destroy",
				value: function() {
					this.close(),
					this._ws = null,
					this.removeAllListeners(),
					this.logger.warn("destroyt signaler")
				}
			}]),
			t
		} (u.
	default);
		t.
	default = f,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		var n = function(e) {
			return e && 2 === e.CLOSING
		},
		i = function() {
			return "undefined" != typeof WebSocket && n(WebSocket)
		},
		a = function() {
			return {
				constructor: i() ? WebSocket: null,
				maxReconnectionDelay: 1e4,
				minReconnectionDelay: 1500,
				reconnectionDelayGrowFactor: 1.3,
				connectionTimeout: 4e3,
				maxRetries: 1 / 0,
				debug: !1
			}
		},
		o = function(e, t, r) {
			Object.defineProperty(t, r, {
				get: function() {
					return e[r]
				},
				set: function(t) {
					e[r] = t
				},
				enumerable: !0,
				configurable: !0
			})
		},
		s = function(e) {
			return e.minReconnectionDelay + Math.random() * e.minReconnectionDelay
		},
		l = function(e, t) {
			var r = t * e.reconnectionDelayGrowFactor;
			return r > e.maxReconnectionDelay ? e.maxReconnectionDelay: r
		},
		u = ["onopen", "onclose", "onmessage", "onerror"],
		c = function(e, t, r) {
			Object.keys(r).forEach(function(t) {
				r[t].forEach(function(r) {
					var n = r[0],
					i = r[1];
					e.addEventListener(t, n, i)
				})
			}),
			t && u.forEach(function(r) {
				e[r] = t[r]
			})
		},
		d = function(e, t, r) {
			var i = this;
			void 0 === r && (r = {});
			var u, f, h = 0,
			p = 0,
			g = !0,
			v = null,
			y = {};
			if (! (this instanceof d)) throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
			var m = a();
			if (Object.keys(m).filter(function(e) {
				return r.hasOwnProperty(e)
			}).forEach(function(e) {
				return m[e] = r[e]
			}), !n(m.constructor)) throw new TypeError("Invalid WebSocket constructor. Set `options.constructor`");
			var b = m.debug ?
			function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return console.log.apply(console, ["RWS:"].concat(e))
			}: function() {},
			_ = function(e, t) {
				return setTimeout(function() {
					var r = new Error(t);
					r.code = e,
					Array.isArray(y.error) && y.error.forEach(function(e) {
						return (0, e[0])(r)
					}),
					u.onerror && u.onerror(r)
				},
				0)
			},
			E = function() {
				if (b("handleClose", {
					shouldRetry: g
				}), p++, b("retries count:", p), p > m.maxRetries) return void _("EHOSTDOWN", "Too many failed connection attempts");
				h = h ? l(m, h) : s(m),
				b("handleClose - reconnectDelay:", h),
				g && setTimeout(T, h)
			},
			T = function() {
				if (g) {
					b("connect");
					var r = u,
					n = "function" == typeof e ? e() : e;
					u = new m.constructor(n, t),
					f = setTimeout(function() {
						b("timeout"),
						u.close(),
						_("ETIMEDOUT", "Connection timeout")
					},
					m.connectionTimeout),
					b("bypass properties");
					for (var a in u)["addEventListener", "removeEventListener", "close", "send"].indexOf(a) < 0 && o(u, i, a);
					u.addEventListener("open",
					function() {
						clearTimeout(f),
						b("open"),
						h = s(m),
						b("reconnectDelay:", h),
						p = 0
					}),
					u.addEventListener("close", E),
					c(u, r, y),
					u.onclose = u.onclose || v,
					v = null
				}
			};
			b("init"),
			T(),
			this.close = function(e, t, r) {
				void 0 === e && (e = 1e3),
				void 0 === t && (t = "");
				var n = void 0 === r ? {}: r,
				i = n.keepClosed,
				a = void 0 !== i && i,
				o = n.fastClose,
				s = void 0 === o || o,
				l = n.delay,
				c = void 0 === l ? 0 : l;
				if (b("close - params:", {
					reason: t,
					keepClosed: a,
					fastClose: s,
					delay: c,
					retriesCount: p,
					maxRetries: m.maxRetries
				}), g = !a && p <= m.maxRetries, c && (h = c), u.close(e, t), s) {
					var d = {
						code: e,
						reason: t,
						wasClean: !0
					};
					E(),
					u.removeEventListener("close", E),
					Array.isArray(y.close) && y.close.forEach(function(e) {
						var t = e[0],
						r = e[1];
						t(d),
						u.removeEventListener("close", t, r)
					}),
					u.onclose && (v = u.onclose, u.onclose(d), u.onclose = null)
				}
			},
			this.send = function(e) {
				u.send(e)
			},
			this.addEventListener = function(e, t, r) {
				Array.isArray(y[e]) ? y[e].some(function(e) {
					return e[0] === t
				}) || y[e].push([t, r]) : y[e] = [[t, r]],
				u.addEventListener(e, t, r)
			},
			this.removeEventListener = function(e, t, r) {
				Array.isArray(y[e]) && (y[e] = y[e].filter(function(e) {
					return e[0] !== t
				})),
				u.removeEventListener(e, t, r)
			}
		};
		e.exports = d
	},
	function(e, t, r) {
		"use strict";
		function n(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function i(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		s = r(0),
		l = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (s),
		u = r(2),
		c = function(e) {
			function t(e) {
				n(this, t);
				var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return r.logger = e.logger,
				r.currLoaded = e.currLoaded,
				r.currLoadedDuration = e.currLoadedDuration,
				r.currPlay = e.currPlay,
				r.bufMgr = e.bufMgr,
				r.xhrLoader = new e.loader(e),
				r.p2pEnabled = e.p2pEnabled,
				r.scheduler = e.scheduler,
				r.fetcher = e.fetcher,
				r.segmentId = e.segmentId,
				r.blockTypes = e.p2pBlackList,
				r
			}
			return a(t, e),
			o(t, [{
				key: "destroy",
				value: function() {
					this.abort()
				}
			},
			{
				key: "abort",
				value: function() {
					this.xhrLoader.abort()
				}
			},
			{
				key: "load",
				value: function(e, t, r) {
					var n = this,
					i = this.logger,
					a = e.frag;
					if (a.loadByP2P = !1, a.loadByHTTP = !1, (0, u.isBlockType)(a.url, this.blockTypes)) {
						i.debug("HTTP load blockType " + a.url),
						e.frag.loadByHTTP = !0;
						var o = r.onSuccess;
						return r.onSuccess = function(e, t, r) {
							n.fetcher.reportFlow(t, !1),
							i.info("HTTP load time " + (t.tload - t.trequest) + "ms"),
							o(e, t, r)
						},
						this.xhrLoader.load(e, t, r)
					}
					var s = this.segmentId(a.level, a.sn, a.url);
					if (this.p2pEnabled && this.bufMgr.hasSegOfId(s)) {
						i.debug("bufMgr found seg sn " + a.sn + " url " + a.url);
						var l = this.bufMgr.getSegById(s),
						c = {
							url: e.url,
							data: l.data
						},
						d = void 0,
						f = void 0,
						h = void 0,
						p = void 0,
						g = void 0;
						d = performance.now(),
						f = h = d + 50,
						p = g = a.loaded = l.size;
						var v = {
							trequest: d,
							tfirst: f,
							tload: h,
							loaded: p,
							total: g,
							retry: 0
						};
						a.loadByP2P = !0,
						e.frag.fromPeerId = l.fromPeerId,
						i.debug("bufMgr loaded " + a.relurl + " at " + a.sn),
						window.setTimeout(function() {
							n.fetcher.reportFlow(v, !0),
							r.onSuccess(c, v, e)
						},
						50)
					} else if (this.p2pEnabled && this.scheduler.hasAndSetTargetPeer(a.sn)) {
						e.frag.loadByP2P = !0,
						this.scheduler.load(e, t, r);
						var y = r.onTimeout;
						r.onTimeout = function(e, o) {
							i.debug("P2P timeout switched to HTTP load " + a.relurl + " at " + a.sn),
							a.loadByP2P = !1,
							a.loadByHTTP = !0,
							n.xhrLoader.load(o, t, r),
							r.onTimeout = y
						};
						var m = r.onSuccess;
						r.onSuccess = function(e, t, r) {
							n.bufMgr.hasSegOfId(s) || n.bufMgr.handleFrag(a.sn, a.level, s, e.data, a.fromPeerId || n.fetcher.peerId, !0),
							n.fetcher.reportFlow(t, a.loadByP2P),
							a.loaded = t.loaded,
							i.debug((a.loadByP2P ? "P2P": "HTTP") + " loaded segment id " + s),
							m(e, t, r)
						}
					} else {
						i.debug("HTTP load " + a.relurl + " at " + a.sn + " level " + a.level),
						e.frag.loadByHTTP = !0,
						this.xhrLoader.load(e, t, r);
						var b = r.onSuccess;
						r.onSuccess = function(e, t, r) {
							n.bufMgr.hasSegOfId(s) || n.bufMgr.handleFrag(a.sn, a.level, s, e.data, n.fetcher.peerId, !0),
							n.fetcher.reportFlow(t, !1),
							i.info("HTTP load time " + (t.tload - t.trequest) + "ms"),
							n.scheduler.loadTimeSample = t.tload - t.trequest,
							b(e, t, r)
						}
					}
					this.p2pEnabled && (this.scheduler.nextFragLoadTime = a.duration)
				}
			}]),
			t
		} (l.
	default);
		t.
	default = c,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n(e) {
			if (Array.isArray(e)) {
				for (var t = 0,
				r = Array(e.length); t < e.length; t++) r[t] = e[t];
				return r
			}
			return Array.from(e)
		}
		function i(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function a(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return ! t || "object" != typeof t && "function" != typeof t ? e: t
		}
		function o(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
			t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var s = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		l = r(0),
		u = function(e) {
			return e && e.__esModule ? e: {
			default:
				e
			}
		} (l),
		c = r(1),
		d = function(e) {
			function t(e, r) {
				i(this, t);
				var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
				return n.engine = e,
				n.config = r,
				n.maxBufSize = "PC" === e.browserInfo.device ? r.maxBufferSize.pc: r.maxBufferSize.mobile,
				n._segPool = new Map,
				n._currBufSize = 0,
				n.sn2Id = new Map,
				n.overflowed = !1,
				n
			}
			return o(t, e),
			s(t, [{
				key: "hasSegOfId",
				value: function(e) {
					return this._segPool.has(e)
				}
			},
			{
				key: "hasSegOfSN",
				value: function(e) {
					return this.sn2Id.has(e)
				}
			},
			{
				key: "handleFrag",
				value: function(e, t, r, n) {
					var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
					a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
					o = void 0,
					s = n.byteLength;
					if (a) {
						var l = c.Buffer.from(n);
						o = new c.Buffer(s),
						l.copy(o)
					} else o = n;
					var u = {
						sn: e,
						level: t,
						segId: r,
						data: o,
						size: s,
						fromPeerId: i
					};
					this._addSeg(u),
					this.sn2Id.set(e, u.segId)
				}
			},
			{
				key: "_addSeg",
				value: function(e) {
					var t = this.engine.logger;
					for (this._segPool.set(e.segId, e), t.debug("segment pool add seg " + e.segId + " level " + e.level), this._currBufSize += parseInt(e.size); this._currBufSize > this.maxBufSize;) {
						var r = [].concat(n(this._segPool.values())).shift();
						t.info("pop seg " + r.segId + " at " + r.sn),
						this._segPool.delete(r.segId),
						this.sn2Id.delete(r.sn),
						this._currBufSize -= parseInt(r.size),
						this.overflowed || (this.overflowed = !0),
						this.emit(c.Events.BM_LOST, r.sn)
					}
				}
			},
			{
				key: "getSegById",
				value: function(e) {
					return this._segPool.get(e)
				}
			},
			{
				key: "getSegIdbySN",
				value: function(e) {
					return this.sn2Id.get(e)
				}
			},
			{
				key: "clear",
				value: function() {
					this._segPool.clear(),
					this.sn2Id.clear(),
					this._currBufSize = 0
				}
			},
			{
				key: "destroy",
				value: function() {
					this.clear(),
					this.removeAllListeners()
				}
			},
			{
				key: "currBufSize",
				get: function() {
					return this._currBufSize
				}
			}]),
			t
		} (u.
	default);
		t.
	default = d,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n(e, t) {
			if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function i() {}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a = function() {
			function e(e, t) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					n.enumerable = n.enumerable || !1,
					n.configurable = !0,
					"value" in n && (n.writable = !0),
					Object.defineProperty(e, n.key, n)
				}
			}
			return function(t, r, n) {
				return r && e(t.prototype, r),
				n && e(t, n),
				t
			}
		} (),
		o = r(2),
		s = {
			debug: 0,
			info: 1,
			warn: 2,
			error: 3,
			none: 4
		},
		l = ["_debugP", "_infoP", "_warnP", "_errorP"],
		u = function() {
			function e(t, r) {
				n(this, e),
				this.config = t,
				!0 === t.logLevel || "1" === (0, o.getQueryParam)("_debug") ? t.logLevel = "debug": t.logLevel in s && !1 !== t.logLevel || (t.logLevel = "none");
				for (var a = 0; a < s[t.logLevel]; a++) this[l[a]] = i
			}
			return a(e, [{
				key: "debug",
				value: function(e) {
					this._debugP(e)
				}
			},
			{
				key: "info",
				value: function(e) {
					this._infoP(e)
				}
			},
			{
				key: "warn",
				value: function(e) {
					this._warnP(e)
				}
			},
			{
				key: "error",
				value: function(e) {
					this._errorP(e)
				}
			},
			{
				key: "_debugP",
				value: function(e) {
					console.log(e)
				}
			},
			{
				key: "_infoP",
				value: function(e) {
					console.info(e)
				}
			},
			{
				key: "_warnP",
				value: function(e) {
					console.warn(e)
				}
			},
			{
				key: "_errorP",
				value: function(e) {
					console.error(e)
				}
			}]),
			e
		} ();
		t.
	default = u,
		e.exports = t.
	default
	},
	function(e, t, r) {
		"use strict";
		function n() {
			return navigator.userAgent.toLowerCase()
		}
		function i(e) {
			return "" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(n()) || [, 0])[1] || void 0
		}
		function a(e) {
			return parseFloat((e || "").replace(/\_/g, ".")) || 0
		}
		var o = {
			getNetType: function() {
				return (new RegExp("nettype\\/(\\w*)").exec(n()) || [, ""])[1].toLowerCase()
			},
			getPlatform: function() {
				return o.isAndroid() ? "android": o.isIOS() ? "iOS": "PC"
			},
			isX5: function() {
				return this.isAndroid() && /\s(TBS|X5Core)\/[\w\.\-]+/i.test(n())
			},
			isPC: function() {
				return ! a(i("os ")) && !a(i("android[/ ]"))
			},
			isIOS: function() {
				return a(i("os "))
			},
			isAndroid: function() {
				return a(i("android[/ ]"))
			},
			isSafari: function() {
				return this.isIOS() && /^((?!chrome|android).)*safari/i.test(n())
			}
		};
		e.exports = o
	},
	function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t.
	default = function() {
			var e = "unknown";
			for (var t in n) if (window[t]) {
				e = n[t];
				break
			}
			return e
		};
		var n = {
			DPlayer: "dplayer",
			jwplayer: "jwplayer",
			videojs: "videojs",
			Clappr: "clappr",
			ckplayer: "ckplayer",
			MediaElementPlayer: "mediaelement",
			MediaElement: "mediaelement",
			TcPlayer: "tcplayer",
			flowplayer: "flowplayer",
			Chimee: "chimee",
			ChimeePlayer: "chimee",
			HlsJsPlayer: "xgplayer",
			fluidPlayer: "fluidplayer",
			OpenPlayer: "openplayer",
			Plyr: "plyr"
		};
		e.exports = t.
	default
	},
	function(e, t, r) {
		"undefined" != typeof window &&
		function(t, r) {
			e.exports = r()
		} (0,
		function() {
			return function(e) {
				function t(n) {
					if (r[n]) return r[n].exports;
					var i = r[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(i.exports, i, i.exports, t),
					i.l = !0,
					i.exports
				}
				var r = {};
				return t.m = e,
				t.c = r,
				t.d = function(e, r, n) {
					t.o(e, r) || Object.defineProperty(e, r, {
						configurable: !1,
						enumerable: !0,
						get: n
					})
				},
				t.n = function(e) {
					var r = e && e.__esModule ?
					function() {
						return e.
					default
					}:
					function() {
						return e
					};
					return t.d(r, "a", r),
					r
				},
				t.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				},
				t.p = "/dist/",
				t(t.s = 11)
			} ([function(e, t, r) {
				"use strict";
				function n() {}
				function i(e, t) {
					return t = "[" + e + "] > " + t
				}
				function a(e) {
					var t = d.console[e];
					return t ?
					function() {
						for (var r = arguments.length,
						n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
						n[0] && (n[0] = i(e, n[0])),
						t.apply(d.console, n)
					}: n
				}
				function o(e) {
					for (var t = arguments.length,
					r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
					r.forEach(function(t) {
						c[t] = e[t] ? e[t].bind(e) : a(t)
					})
				}
				r.d(t, "a",
				function() {
					return f
				}),
				r.d(t, "b",
				function() {
					return h
				});
				var s = r(4),
				l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(e) {
					return typeof e
				}: function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
				},
				u = {
					trace: n,
					debug: n,
					log: n,
					warn: n,
					info: n,
					error: n
				},
				c = u,
				d = Object(s.a)(),
				f = function(e) {
					if (!0 === e || "object" === (void 0 === e ? "undefined": l(e))) {
						o(e, "debug", "log", "info", "warn", "error");
						try {
							c.log()
						} catch(e) {
							c = u
						}
					} else c = u
				},
				h = c
			},
			function(e, t, r) {
				"use strict";
				var n = {
					MEDIA_ATTACHING: "hlsMediaAttaching",
					MEDIA_ATTACHED: "hlsMediaAttached",
					MEDIA_DETACHING: "hlsMediaDetaching",
					MEDIA_DETACHED: "hlsMediaDetached",
					BUFFER_RESET: "hlsBufferReset",
					BUFFER_CODECS: "hlsBufferCodecs",
					BUFFER_CREATED: "hlsBufferCreated",
					BUFFER_APPENDING: "hlsBufferAppending",
					BUFFER_APPENDED: "hlsBufferAppended",
					BUFFER_EOS: "hlsBufferEos",
					BUFFER_FLUSHING: "hlsBufferFlushing",
					BUFFER_FLUSHED: "hlsBufferFlushed",
					MANIFEST_LOADING: "hlsManifestLoading",
					MANIFEST_LOADED: "hlsManifestLoaded",
					MANIFEST_PARSED: "hlsManifestParsed",
					LEVEL_SWITCHING: "hlsLevelSwitching",
					LEVEL_SWITCHED: "hlsLevelSwitched",
					LEVEL_LOADING: "hlsLevelLoading",
					LEVEL_LOADED: "hlsLevelLoaded",
					LEVEL_UPDATED: "hlsLevelUpdated",
					LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
					AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
					AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
					AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
					AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
					AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
					SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
					SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
					SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
					SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
					SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
					INIT_PTS_FOUND: "hlsInitPtsFound",
					FRAG_LOADING: "hlsFragLoading",
					FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
					FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
					FRAG_LOADED: "hlsFragLoaded",
					FRAG_DECRYPTED: "hlsFragDecrypted",
					FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
					FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
					FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
					FRAG_PARSING_DATA: "hlsFragParsingData",
					FRAG_PARSED: "hlsFragParsed",
					FRAG_BUFFERED: "hlsFragBuffered",
					FRAG_CHANGED: "hlsFragChanged",
					FPS_DROP: "hlsFpsDrop",
					FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
					ERROR: "hlsError",
					DESTROYING: "hlsDestroying",
					KEY_LOADING: "hlsKeyLoading",
					KEY_LOADED: "hlsKeyLoaded",
					STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
				};
				t.a = n
			},
			function(e, t, r) {
				"use strict";
				r.d(t, "b",
				function() {
					return n
				}),
				r.d(t, "a",
				function() {
					return i
				});
				var n = {
					NETWORK_ERROR: "networkError",
					MEDIA_ERROR: "mediaError",
					KEY_SYSTEM_ERROR: "keySystemError",
					MUX_ERROR: "muxError",
					OTHER_ERROR: "otherError"
				},
				i = {
					KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
					KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
					KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
					KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
					MANIFEST_LOAD_ERROR: "manifestLoadError",
					MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
					MANIFEST_PARSING_ERROR: "manifestParsingError",
					MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
					LEVEL_LOAD_ERROR: "levelLoadError",
					LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
					LEVEL_SWITCH_ERROR: "levelSwitchError",
					AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
					AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
					FRAG_LOAD_ERROR: "fragLoadError",
					FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
					FRAG_DECRYPT_ERROR: "fragDecryptError",
					FRAG_PARSING_ERROR: "fragParsingError",
					REMUX_ALLOC_ERROR: "remuxAllocError",
					KEY_LOAD_ERROR: "keyLoadError",
					KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
					BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
					BUFFER_APPEND_ERROR: "bufferAppendError",
					BUFFER_APPENDING_ERROR: "bufferAppendingError",
					BUFFER_STALLED_ERROR: "bufferStalledError",
					BUFFER_FULL_ERROR: "bufferFullError",
					BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
					BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
					INTERNAL_EXCEPTION: "internalException"
				}
			},
			function(e, t, r) {
				"use strict";
				r.d(t, "a",
				function() {
					return n
				});
				var n = Number.isFinite ||
				function(e) {
					return "number" == typeof e && isFinite(e)
				}
			},
			function(e, t, r) {
				"use strict";
				function n() {
					return "undefined" == typeof window ? self: window
				}
				t.a = n
			},
			function(e, t, r) { !
				function(t) {
					var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
					n = /^([^\/;?#]*)(.*)$/,
					i = /(?:\/|^)\.(?=\/)/g,
					a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
					o = {
						buildAbsoluteURL: function(e, t, r) {
							if (r = r || {},
							e = e.trim(), !(t = t.trim())) {
								if (!r.alwaysNormalize) return e;
								var i = this.parseURL(e);
								if (!s) throw new Error("Error trying to parse base URL.");
								return i.path = o.normalizePath(i.path),
								o.buildURLFromParts(i)
							}
							var a = this.parseURL(t);
							if (!a) throw new Error("Error trying to parse relative URL.");
							if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : t;
							var s = this.parseURL(e);
							if (!s) throw new Error("Error trying to parse base URL.");
							if (!s.netLoc && s.path && "/" !== s.path[0]) {
								var l = n.exec(s.path);
								s.netLoc = l[1],
								s.path = l[2]
							}
							s.netLoc && !s.path && (s.path = "/");
							var u = {
								scheme: s.scheme,
								netLoc: a.netLoc,
								path: null,
								params: a.params,
								query: a.query,
								fragment: a.fragment
							};
							if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0])) if (a.path) {
								var c = s.path,
								d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
								u.path = o.normalizePath(d)
							} else u.path = s.path,
							a.params || (u.params = s.params, a.query || (u.query = s.query));
							return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
							o.buildURLFromParts(u)
						},
						parseURL: function(e) {
							var t = r.exec(e);
							return t ? {
								scheme: t[1] || "",
								netLoc: t[2] || "",
								path: t[3] || "",
								params: t[4] || "",
								query: t[5] || "",
								fragment: t[6] || ""
							}: null
						},
						normalizePath: function(e) {
							for (e = e.split("").reverse().join("").replace(i, ""); e.length !== (e = e.replace(a, "")).length;);
							return e.split("").reverse().join("")
						},
						buildURLFromParts: function(e) {
							return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
						}
					};
					e.exports = o
				} ()
			},
			function(e, t, r) {
				"use strict";
				function n(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				r.d(t, "b",
				function() {
					return a
				});
				var i = function() {
					function e() {
						n(this, e)
					}
					return e.isHeader = function(e, t) {
						return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
					},
					e.isFooter = function(e, t) {
						return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
					},
					e.getID3Data = function(t, r) {
						for (var n = r,
						i = 0; e.isHeader(t, r);) {
							i += 10;
							i += e._readSize(t, r + 6),
							e.isFooter(t, r + 10) && (i += 10),
							r += i
						}
						if (i > 0) return t.subarray(n, n + i)
					},
					e._readSize = function(e, t) {
						var r = 0;
						return r = (127 & e[t]) << 21,
						r |= (127 & e[t + 1]) << 14,
						r |= (127 & e[t + 2]) << 7,
						r |= 127 & e[t + 3]
					},
					e.getTimeStamp = function(t) {
						for (var r = e.getID3Frames(t), n = 0; n < r.length; n++) {
							var i = r[n];
							if (e.isTimeStampFrame(i)) return e._readTimeStamp(i)
						}
					},
					e.isTimeStampFrame = function(e) {
						return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
					},
					e._getFrameData = function(t) {
						var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
						n = e._readSize(t, 4);
						return {
							type: r,
							size: n,
							data: t.subarray(10, 10 + n)
						}
					},
					e.getID3Frames = function(t) {
						for (var r = 0,
						n = []; e.isHeader(t, r);) {
							var i = e._readSize(t, r + 6);
							r += 10;
							for (var a = r + i; r + 8 < a;) {
								var o = e._getFrameData(t.subarray(r)),
								s = e._decodeFrame(o);
								s && n.push(s),
								r += o.size + 10
							}
							e.isFooter(t, r) && (r += 10)
						}
						return n
					},
					e._decodeFrame = function(t) {
						return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
					},
					e._readTimeStamp = function(e) {
						if (8 === e.data.byteLength) {
							var t = new Uint8Array(e.data),
							r = 1 & t[3],
							n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
							return n /= 45,
							r && (n += 47721858.84),
							Math.round(n)
						}
					},
					e._decodePrivFrame = function(t) {
						if (! (t.size < 2)) {
							var r = e._utf8ArrayToStr(t.data, !0),
							n = new Uint8Array(t.data.subarray(r.length + 1));
							return {
								key: t.type,
								info: r,
								data: n.buffer
							}
						}
					},
					e._decodeTextFrame = function(t) {
						if (! (t.size < 2)) {
							if ("TXXX" === t.type) {
								var r = 1,
								n = e._utf8ArrayToStr(t.data.subarray(r));
								r += n.length + 1;
								var i = e._utf8ArrayToStr(t.data.subarray(r));
								return {
									key: t.type,
									info: n,
									data: i
								}
							}
							var a = e._utf8ArrayToStr(t.data.subarray(1));
							return {
								key: t.type,
								data: a
							}
						}
					},
					e._decodeURLFrame = function(t) {
						if ("WXXX" === t.type) {
							if (t.size < 2) return;
							var r = 1,
							n = e._utf8ArrayToStr(t.data.subarray(r));
							r += n.length + 1;
							var i = e._utf8ArrayToStr(t.data.subarray(r));
							return {
								key: t.type,
								info: n,
								data: i
							}
						}
						var a = e._utf8ArrayToStr(t.data);
						return {
							key: t.type,
							data: a
						}
					},
					e._utf8ArrayToStr = function(e) {
						for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = e.length, n = void 0, i = void 0, a = void 0, o = "", s = 0; s < r;) {
							if (0 === (n = e[s++]) && t) return o;
							if (0 !== n && 3 !== n) switch (n >> 4) {
							case 0:
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
							case 6:
							case 7:
								o += String.fromCharCode(n);
								break;
							case 12:
							case 13:
								i = e[s++],
								o += String.fromCharCode((31 & n) << 6 | 63 & i);
								break;
							case 14:
								i = e[s++],
								a = e[s++],
								o += String.fromCharCode((15 & n) << 12 | (63 & i) << 6 | (63 & a) << 0)
							}
						}
						return o
					},
					e
				} (),
				a = i._utf8ArrayToStr;
				t.a = i
			},
			function(e, t) {
				function r() {
					this._events = this._events || {},
					this._maxListeners = this._maxListeners || void 0
				}
				function n(e) {
					return "function" == typeof e
				}
				function i(e) {
					return "number" == typeof e
				}
				function a(e) {
					return "object" == typeof e && null !== e
				}
				function o(e) {
					return void 0 === e
				}
				e.exports = r,
				r.EventEmitter = r,
				r.prototype._events = void 0,
				r.prototype._maxListeners = void 0,
				r.defaultMaxListeners = 10,
				r.prototype.setMaxListeners = function(e) {
					if (!i(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
					return this._maxListeners = e,
					this
				},
				r.prototype.emit = function(e) {
					var t, r, i, s, l, u;
					if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
						if ((t = arguments[1]) instanceof Error) throw t;
						var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
						throw c.context = t,
						c
					}
					if (r = this._events[e], o(r)) return ! 1;
					if (n(r)) switch (arguments.length) {
					case 1:
						r.call(this);
						break;
					case 2:
						r.call(this, arguments[1]);
						break;
					case 3:
						r.call(this, arguments[1], arguments[2]);
						break;
					default:
						s = Array.prototype.slice.call(arguments, 1),
						r.apply(this, s)
					} else if (a(r)) for (s = Array.prototype.slice.call(arguments, 1), u = r.slice(), i = u.length, l = 0; l < i; l++) u[l].apply(this, s);
					return ! 0
				},
				r.prototype.addListener = function(e, t) {
					var i;
					if (!n(t)) throw TypeError("listener must be a function");
					return this._events || (this._events = {}),
					this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener: t),
					this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
					a(this._events[e]) && !this._events[e].warned && (i = o(this._maxListeners) ? r.defaultMaxListeners: this._maxListeners) && i > 0 && this._events[e].length > i && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()),
					this
				},
				r.prototype.on = r.prototype.addListener,
				r.prototype.once = function(e, t) {
					function r() {
						this.removeListener(e, r),
						i || (i = !0, t.apply(this, arguments))
					}
					if (!n(t)) throw TypeError("listener must be a function");
					var i = !1;
					return r.listener = t,
					this.on(e, r),
					this
				},
				r.prototype.removeListener = function(e, t) {
					var r, i, o, s;
					if (!n(t)) throw TypeError("listener must be a function");
					if (!this._events || !this._events[e]) return this;
					if (r = this._events[e], o = r.length, i = -1, r === t || n(r.listener) && r.listener === t) delete this._events[e],
					this._events.removeListener && this.emit("removeListener", e, t);
					else if (a(r)) {
						for (s = o; s-->0;) if (r[s] === t || r[s].listener && r[s].listener === t) {
							i = s;
							break
						}
						if (i < 0) return this;
						1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(i, 1),
						this._events.removeListener && this.emit("removeListener", e, t)
					}
					return this
				},
				r.prototype.removeAllListeners = function(e) {
					var t, r;
					if (!this._events) return this;
					if (!this._events.removeListener) return 0 === arguments.length ? this._events = {}: this._events[e] && delete this._events[e],
					this;
					if (0 === arguments.length) {
						for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
						return this.removeAllListeners("removeListener"),
						this._events = {},
						this
					}
					if (r = this._events[e], n(r)) this.removeListener(e, r);
					else if (r) for (; r.length;) this.removeListener(e, r[r.length - 1]);
					return delete this._events[e],
					this
				},
				r.prototype.listeners = function(e) {
					return this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
				},
				r.prototype.listenerCount = function(e) {
					if (this._events) {
						var t = this._events[e];
						if (n(t)) return 1;
						if (t) return t.length
					}
					return 0
				},
				r.listenerCount = function(e, t) {
					return e.listenerCount(t)
				}
			},
			function(e, t, r) {
				"use strict";
				function n(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function i(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function a(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function o(e) {
					var t = e.byteLength,
					r = t && new DataView(e).getUint8(t - 1);
					return r ? e.slice(0, t - r) : e
				}
				function s(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				var l = function() {
					function e(t, r) {
						n(this, e),
						this.subtle = t,
						this.aesIV = r
					}
					return e.prototype.decrypt = function(e, t) {
						return this.subtle.decrypt({
							name: "AES-CBC",
							iv: this.aesIV
						},
						t, e)
					},
					e
				} (),
				u = l,
				c = function() {
					function e(t, r) {
						i(this, e),
						this.subtle = t,
						this.key = r
					}
					return e.prototype.expandKey = function() {
						return this.subtle.importKey("raw", this.key, {
							name: "AES-CBC"
						},
						!1, ["encrypt", "decrypt"])
					},
					e
				} (),
				d = c,
				f = function() {
					function e() {
						a(this, e),
						this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
						this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
						this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
						this.sBox = new Uint32Array(256),
						this.invSBox = new Uint32Array(256),
						this.key = new Uint32Array(0),
						this.initTable()
					}
					return e.prototype.uint8ArrayToUint32Array_ = function(e) {
						for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = t.getUint32(4 * n);
						return r
					},
					e.prototype.initTable = function() {
						var e = this.sBox,
						t = this.invSBox,
						r = this.subMix,
						n = r[0],
						i = r[1],
						a = r[2],
						o = r[3],
						s = this.invSubMix,
						l = s[0],
						u = s[1],
						c = s[2],
						d = s[3],
						f = new Uint32Array(256),
						h = 0,
						p = 0,
						g = 0;
						for (g = 0; g < 256; g++) f[g] = g < 128 ? g << 1 : g << 1 ^ 283;
						for (g = 0; g < 256; g++) {
							var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
							v = v >>> 8 ^ 255 & v ^ 99,
							e[h] = v,
							t[v] = h;
							var y = f[h],
							m = f[y],
							b = f[m],
							_ = 257 * f[v] ^ 16843008 * v;
							n[h] = _ << 24 | _ >>> 8,
							i[h] = _ << 16 | _ >>> 16,
							a[h] = _ << 8 | _ >>> 24,
							o[h] = _,
							_ = 16843009 * b ^ 65537 * m ^ 257 * y ^ 16843008 * h,
							l[v] = _ << 24 | _ >>> 8,
							u[v] = _ << 16 | _ >>> 16,
							c[v] = _ << 8 | _ >>> 24,
							d[v] = _,
							h ? (h = y ^ f[f[f[b ^ y]]], p ^= f[f[p]]) : h = p = 1
						}
					},
					e.prototype.expandKey = function(e) {
						for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n],
						n++;
						if (!r) {
							this.key = t;
							var i = this.keySize = t.length;
							if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
							var a = this.ksRows = 4 * (i + 6 + 1),
							o = void 0,
							s = void 0,
							l = this.keySchedule = new Uint32Array(a),
							u = this.invKeySchedule = new Uint32Array(a),
							c = this.sBox,
							d = this.rcon,
							f = this.invSubMix,
							h = f[0],
							p = f[1],
							g = f[2],
							v = f[3],
							y = void 0,
							m = void 0;
							for (o = 0; o < a; o++) o < i ? y = l[o] = t[o] : (m = y, o % i == 0 ? (m = m << 8 | m >>> 24, m = c[m >>> 24] << 24 | c[m >>> 16 & 255] << 16 | c[m >>> 8 & 255] << 8 | c[255 & m], m ^= d[o / i | 0] << 24) : i > 6 && o % i == 4 && (m = c[m >>> 24] << 24 | c[m >>> 16 & 255] << 16 | c[m >>> 8 & 255] << 8 | c[255 & m]), l[o] = y = (l[o - i] ^ m) >>> 0);
							for (s = 0; s < a; s++) o = a - s,
							m = 3 & s ? l[o] : l[o - 4],
							u[s] = s < 4 || o <= 4 ? m: h[c[m >>> 24]] ^ p[c[m >>> 16 & 255]] ^ g[c[m >>> 8 & 255]] ^ v[c[255 & m]],
							u[s] = u[s] >>> 0
						}
					},
					e.prototype.networkToHostOrderSwap = function(e) {
						return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
					},
					e.prototype.decrypt = function(e, t, r, n) {
						for (var i = this.keySize + 6,
						a = this.invKeySchedule,
						s = this.invSBox,
						l = this.invSubMix,
						u = l[0], c = l[1], d = l[2], f = l[3], h = this.uint8ArrayToUint32Array_(r), p = h[0], g = h[1], v = h[2], y = h[3], m = new Int32Array(e), b = new Int32Array(m.length), _ = void 0, E = void 0, T = void 0, S = void 0, w = void 0, R = void 0, A = void 0, L = void 0, D = void 0, k = void 0, I = void 0, C = void 0, O = void 0, P = void 0, x = this.networkToHostOrderSwap; t < m.length;) {
							for (D = x(m[t]), k = x(m[t + 1]), I = x(m[t + 2]), C = x(m[t + 3]), w = D ^ a[0], R = C ^ a[1], A = I ^ a[2], L = k ^ a[3], O = 4, P = 1; P < i; P++) _ = u[w >>> 24] ^ c[R >> 16 & 255] ^ d[A >> 8 & 255] ^ f[255 & L] ^ a[O],
							E = u[R >>> 24] ^ c[A >> 16 & 255] ^ d[L >> 8 & 255] ^ f[255 & w] ^ a[O + 1],
							T = u[A >>> 24] ^ c[L >> 16 & 255] ^ d[w >> 8 & 255] ^ f[255 & R] ^ a[O + 2],
							S = u[L >>> 24] ^ c[w >> 16 & 255] ^ d[R >> 8 & 255] ^ f[255 & A] ^ a[O + 3],
							w = _,
							R = E,
							A = T,
							L = S,
							O += 4;
							_ = s[w >>> 24] << 24 ^ s[R >> 16 & 255] << 16 ^ s[A >> 8 & 255] << 8 ^ s[255 & L] ^ a[O],
							E = s[R >>> 24] << 24 ^ s[A >> 16 & 255] << 16 ^ s[L >> 8 & 255] << 8 ^ s[255 & w] ^ a[O + 1],
							T = s[A >>> 24] << 24 ^ s[L >> 16 & 255] << 16 ^ s[w >> 8 & 255] << 8 ^ s[255 & R] ^ a[O + 2],
							S = s[L >>> 24] << 24 ^ s[w >> 16 & 255] << 16 ^ s[R >> 8 & 255] << 8 ^ s[255 & A] ^ a[O + 3],
							O += 3,
							b[t] = x(_ ^ p),
							b[t + 1] = x(S ^ g),
							b[t + 2] = x(T ^ v),
							b[t + 3] = x(E ^ y),
							p = D,
							g = k,
							v = I,
							y = C,
							t += 4
						}
						return n ? o(b.buffer) : b.buffer
					},
					e.prototype.destroy = function() {
						this.key = void 0,
						this.keySize = void 0,
						this.ksRows = void 0,
						this.sBox = void 0,
						this.invSBox = void 0,
						this.subMix = void 0,
						this.invSubMix = void 0,
						this.keySchedule = void 0,
						this.invKeySchedule = void 0,
						this.rcon = void 0
					},
					e
				} (),
				h = f,
				p = r(2),
				g = r(0),
				v = r(1),
				y = r(4),
				m = Object(y.a)(),
				b = function() {
					function e(t, r) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						i = n.removePKCS7Padding,
						a = void 0 === i || i;
						if (s(this, e), this.logEnabled = !0, this.observer = t, this.config = r, this.removePKCS7Padding = a, a) try {
							var o = m.crypto;
							o && (this.subtle = o.subtle || o.webkitSubtle)
						} catch(e) {}
						this.disableWebCrypto = !this.subtle
					}
					return e.prototype.isSync = function() {
						return this.disableWebCrypto && this.config.enableSoftwareAES
					},
					e.prototype.decrypt = function(e, t, r, n) {
						var i = this;
						if (this.disableWebCrypto && this.config.enableSoftwareAES) {
							this.logEnabled && (g.b.log("JS AES decrypt"), this.logEnabled = !1);
							var a = this.decryptor;
							a || (this.decryptor = a = new h),
							a.expandKey(t),
							n(a.decrypt(e, 0, r, this.removePKCS7Padding))
						} else {
							this.logEnabled && (g.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
							var o = this.subtle;
							this.key !== t && (this.key = t, this.fastAesKey = new d(o, t)),
							this.fastAesKey.expandKey().then(function(a) {
								new u(o, r).decrypt(e, a).
								catch(function(a) {
									i.onWebCryptoError(a, e, t, r, n)
								}).then(function(e) {
									n(e)
								})
							}).
							catch(function(a) {
								i.onWebCryptoError(a, e, t, r, n)
							})
						}
					},
					e.prototype.onWebCryptoError = function(e, t, r, n, i) {
						this.config.enableSoftwareAES ? (g.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, n, i)) : (g.b.error("decrypting error : " + e.message), this.observer.trigger(v.a.ERROR, {
							type: p.b.MEDIA_ERROR,
							details: p.a.FRAG_DECRYPT_ERROR,
							fatal: !0,
							reason: e.message
						}))
					},
					e.prototype.destroy = function() {
						var e = this.decryptor;
						e && (e.destroy(), this.decryptor = void 0)
					},
					e
				} ();
				t.a = b
			},
			function(e, t, r) {
				"use strict";
				function n(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				var i = r(0),
				a = r(1),
				o = Math.pow(2, 32) - 1,
				s = function() {
					function e(t, r) {
						n(this, e),
						this.observer = t,
						this.remuxer = r
					}
					return e.prototype.resetTimeStamp = function(e) {
						this.initPTS = e
					},
					e.prototype.resetInitSegment = function(t, r, n, i) {
						if (t && t.byteLength) {
							var o = this.initData = e.parseInitSegment(t);
							null == r && (r = "mp4a.40.5"),
							null == n && (n = "avc1.42e01e");
							var s = {};
							o.audio && o.video ? s.audiovideo = {
								container: "video/mp4",
								codec: r + "," + n,
								initSegment: i ? t: null
							}: (o.audio && (s.audio = {
								container: "audio/mp4",
								codec: r,
								initSegment: i ? t: null
							}), o.video && (s.video = {
								container: "video/mp4",
								codec: n,
								initSegment: i ? t: null
							})),
							this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, {
								tracks: s
							})
						} else r && (this.audioCodec = r),
						n && (this.videoCodec = n)
					},
					e.probe = function(t) {
						return e.findBox({
							data: t,
							start: 0,
							end: Math.min(t.length, 16384)
						},
						["moof"]).length > 0
					},
					e.bin2str = function(e) {
						return String.fromCharCode.apply(null, e)
					},
					e.readUint16 = function(e, t) {
						e.data && (t += e.start, e = e.data);
						var r = e[t] << 8 | e[t + 1];
						return r < 0 ? 65536 + r: r
					},
					e.readUint32 = function(e, t) {
						e.data && (t += e.start, e = e.data);
						var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
						return r < 0 ? 4294967296 + r: r
					},
					e.writeUint32 = function(e, t, r) {
						e.data && (t += e.start, e = e.data),
						e[t] = r >> 24,
						e[t + 1] = r >> 16 & 255,
						e[t + 2] = r >> 8 & 255,
						e[t + 3] = 255 & r
					},
					e.findBox = function(t, r) {
						var n = [],
						i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0;
						if (t.data ? (u = t.start, s = t.end, t = t.data) : (u = 0, s = t.byteLength), !r.length) return null;
						for (i = u; i < s;) a = e.readUint32(t, i),
						o = e.bin2str(t.subarray(i + 4, i + 8)),
						c = a > 1 ? i + a: s,
						o === r[0] && (1 === r.length ? n.push({
							data: t,
							start: i + 8,
							end: c
						}) : (l = e.findBox({
							data: t,
							start: i + 8,
							end: c
						},
						r.slice(1)), l.length && (n = n.concat(l)))),
						i = c;
						return n
					},
					e.parseSegmentIndex = function(t) {
						var r = e.findBox(t, ["moov"])[0],
						n = r ? r.end: null,
						i = 0,
						a = e.findBox(t, ["sidx"]),
						o = void 0;
						if (!a || !a[0]) return null;
						o = [],
						a = a[0];
						var s = a.data[0];
						i = 0 === s ? 8 : 16;
						var l = e.readUint32(a, i);
						i += 4;
						i += 0 === s ? 8 : 16,
						i += 2;
						var u = a.end + 0,
						c = e.readUint16(a, i);
						i += 2;
						for (var d = 0; d < c; d++) {
							var f = i,
							h = e.readUint32(a, f);
							f += 4;
							var p = 2147483647 & h;
							if (1 === (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
							var g = e.readUint32(a, f);
							f += 4,
							o.push({
								referenceSize: p,
								subsegmentDuration: g,
								info: {
									duration: g / l,
									start: u,
									end: u + p - 1
								}
							}),
							u += p,
							f += 4,
							i = f
						}
						return {
							earliestPresentationTime: 0,
							timescale: l,
							version: s,
							referencesCount: c,
							references: o,
							moovEndOffset: n
						}
					},
					e.parseInitSegment = function(t) {
						var r = [];
						return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
							var n = e.findBox(t, ["tkhd"])[0];
							if (n) {
								var a = n.data[n.start],
								o = 0 === a ? 12 : 20,
								s = e.readUint32(n, o),
								l = e.findBox(t, ["mdia", "mdhd"])[0];
								if (l) {
									a = l.data[l.start],
									o = 0 === a ? 12 : 20;
									var u = e.readUint32(l, o),
									c = e.findBox(t, ["mdia", "hdlr"])[0];
									if (c) {
										var d = e.bin2str(c.data.subarray(c.start + 8, c.start + 12)),
										f = {
											soun: "audio",
											vide: "video"
										} [d];
										if (f) {
											var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
											if (h.length) {
												h = h[0];
												var p = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
												i.b.log("MP4Demuxer:" + f + ":" + p + " found")
											}
											r[s] = {
												timescale: u,
												type: f
											},
											r[f] = {
												timescale: u,
												id: s
											}
										}
									}
								}
							}
						}),
						r
					},
					e.getStartDTS = function(t, r) {
						var n = void 0,
						i = void 0,
						a = void 0;
						return n = e.findBox(r, ["moof", "traf"]),
						i = [].concat.apply([], n.map(function(r) {
							return e.findBox(r, ["tfhd"]).map(function(n) {
								var i = void 0,
								a = void 0;
								return i = e.readUint32(n, 4),
								a = t[i].timescale || 9e4,
								e.findBox(r, ["tfdt"]).map(function(t) {
									var r = void 0,
									n = void 0;
									return r = t.data[t.start],
									n = e.readUint32(t, 4),
									1 === r && (n *= Math.pow(2, 32), n += e.readUint32(t, 8)),
									n
								})[0] / a
							})
						})),
						a = Math.min.apply(null, i),
						isFinite(a) ? a: 0
					},
					e.offsetStartDTS = function(t, r, n) {
						e.findBox(r, ["moof", "traf"]).map(function(r) {
							return e.findBox(r, ["tfhd"]).map(function(i) {
								var a = e.readUint32(i, 4),
								s = t[a].timescale || 9e4;
								e.findBox(r, ["tfdt"]).map(function(t) {
									var r = t.data[t.start],
									i = e.readUint32(t, 4);
									if (0 === r) e.writeUint32(t, 4, i - n * s);
									else {
										i *= Math.pow(2, 32),
										i += e.readUint32(t, 8),
										i -= n * s,
										i = Math.max(i, 0);
										var a = Math.floor(i / (o + 1)),
										l = Math.floor(i % (o + 1));
										e.writeUint32(t, 4, a),
										e.writeUint32(t, 8, l)
									}
								})
							})
						})
					},
					e.prototype.append = function(t, r, n, i) {
						var o = this.initData;
						o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData);
						var s = void 0,
						l = this.initPTS;
						if (void 0 === l) {
							var u = e.getStartDTS(o, t);
							this.initPTS = l = u - r,
							this.observer.trigger(a.a.INIT_PTS_FOUND, {
								initPTS: l
							})
						}
						e.offsetStartDTS(o, t, l),
						s = e.getStartDTS(o, t),
						this.remuxer.remux(o.audio, o.video, null, null, s, n, i, t)
					},
					e.prototype.destroy = function() {},
					e
				} ();
				t.a = s
			},
			function(e, t, r) {
				"use strict";
				function n(e, t, r, n) {
					var i = void 0,
					a = void 0,
					o = void 0,
					s = void 0,
					l = void 0,
					u = navigator.userAgent.toLowerCase(),
					c = n,
					d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
					return i = 1 + ((192 & t[r + 2]) >>> 6),
					(a = (60 & t[r + 2]) >>> 2) > d.length - 1 ? void e.trigger(S.a.ERROR, {
						type: w.b.MEDIA_ERROR,
						details: w.a.FRAG_PARSING_ERROR,
						fatal: !0,
						reason: "invalid ADTS sampling index:" + a
					}) : (s = (1 & t[r + 2]) << 2, s |= (192 & t[r + 3]) >>> 6, L.b.log("manifest codec:" + n + ",ADTS data:type:" + i + ",sampleingIndex:" + a + "[" + d[a] + "Hz],channelConfig:" + s), /firefox/i.test(u) ? a >= 6 ? (i = 5, l = new Array(4), o = a - 3) : (i = 2, l = new Array(2), o = a) : -1 !== u.indexOf("android") ? (i = 2, l = new Array(2), o = a) : (i = 5, l = new Array(4), n && ( - 1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && a >= 6 ? o = a - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (a >= 6 && 1 === s || /vivaldi/i.test(u)) || !n && 1 === s) && (i = 2, l = new Array(2)), o = a)), l[0] = i << 3, l[0] |= (14 & a) >> 1, l[1] |= (1 & a) << 7, l[1] |= s << 3, 5 === i && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), {
						config: l,
						samplerate: d[a],
						channelCount: s,
						codec: "mp4a.40." + i,
						manifestCodec: c
					})
				}
				function i(e, t) {
					return 255 === e[t] && 240 == (246 & e[t + 1])
				}
				function a(e, t) {
					return 1 & e[t + 1] ? 7 : 9
				}
				function o(e, t) {
					return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
				}
				function s(e, t) {
					return !! (t + 1 < e.length && i(e, t))
				}
				function l(e, t) {
					if (t + 1 < e.length && i(e, t)) {
						var r = a(e, t),
						n = r;
						t + 5 < e.length && (n = o(e, t));
						var s = t + n;
						if (s === e.length || s + 1 < e.length && i(e, s)) return ! 0
					}
					return ! 1
				}
				function u(e, t, r, i, a) {
					if (!e.samplerate) {
						var o = n(t, r, i, a);
						e.config = o.config,
						e.samplerate = o.samplerate,
						e.channelCount = o.channelCount,
						e.codec = o.codec,
						e.manifestCodec = o.manifestCodec,
						L.b.log("parsed codec:" + e.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
					}
				}
				function c(e) {
					return 9216e4 / e
				}
				function d(e, t, r, n, i) {
					var s = void 0,
					l = void 0,
					u = void 0,
					c = e.length;
					if (s = a(e, t), l = o(e, t), (l -= s) > 0 && t + s + l <= c) return u = r + n * i,
					{
						headerLength: s,
						frameLength: l,
						stamp: u
					}
				}
				function f(e, t, r, n, i) {
					var a = c(e.samplerate),
					o = d(t, r, n, i, a);
					if (o) {
						var s = o.stamp,
						l = o.headerLength,
						u = o.frameLength,
						f = {
							unit: t.subarray(r + l, r + l + u),
							pts: s,
							dts: s
						};
						return e.samples.push(f),
						e.len += u,
						{
							sample: f,
							length: u + l
						}
					}
				}
				function h(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function p(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function g(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function v(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function y(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function m(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function b(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function _(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function E(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function T(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				var S = r(1),
				w = r(2),
				R = r(8),
				A = r(3),
				L = r(0),
				D = r(4),
				k = r(6),
				I = function() {
					function e(t, r, n) {
						h(this, e),
						this.observer = t,
						this.config = n,
						this.remuxer = r
					}
					return e.prototype.resetInitSegment = function(e, t, r, n) {
						this._audioTrack = {
							container: "audio/adts",
							type: "audio",
							id: 0,
							sequenceNumber: 0,
							isAAC: !0,
							samples: [],
							len: 0,
							manifestCodec: t,
							duration: n,
							inputTimeScale: 9e4
						}
					},
					e.prototype.resetTimeStamp = function() {},
					e.probe = function(e) {
						if (!e) return ! 1;
						for (var t = k.a.getID3Data(e, 0) || [], r = t.length, n = e.length; r < n; r++) if (l(e, r)) return L.b.log("ADTS sync word found !"),
						!0;
						return ! 1
					},
					e.prototype.append = function(e, t, r, n) {
						for (var i = this._audioTrack,
						a = k.a.getID3Data(e, 0) || [], o = k.a.getTimeStamp(a), l = Object(A.a)(o) ? 90 * o: 9e4 * t, c = 0, d = l, h = e.length, p = a.length, g = [{
							pts: d,
							dts: d,
							data: a
						}]; p < h - 1;) if (s(e, p) && p + 5 < h) {
							u(i, this.observer, e, p, i.manifestCodec);
							var v = f(i, e, p, l, c);
							if (!v) {
								L.b.log("Unable to parse AAC frame");
								break
							}
							p += v.length,
							d = v.sample.pts,
							c++
						} else k.a.isHeader(e, p) ? (a = k.a.getID3Data(e, p), g.push({
							pts: d,
							dts: d,
							data: a
						}), p += a.length) : p++;
						this.remuxer.remux(i, {
							samples: []
						},
						{
							samples: g,
							inputTimeScale: 9e4
						},
						{
							samples: []
						},
						t, r, n)
					},
					e.prototype.destroy = function() {},
					e
				} (),
				C = I,
				O = r(9),
				P = {
					BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
					SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
					SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
					BytesInSlot: [0, 1, 1, 4],
					appendFrame: function(e, t, r, n, i) {
						if (! (r + 24 > t.length)) {
							var a = this.parseHeader(t, r);
							if (a && r + a.frameLength <= t.length) {
								var o = 9e4 * a.samplesPerFrame / a.sampleRate,
								s = n + i * o,
								l = {
									unit: t.subarray(r, r + a.frameLength),
									pts: s,
									dts: s
								};
								return e.config = [],
								e.channelCount = a.channelCount,
								e.samplerate = a.sampleRate,
								e.samples.push(l),
								e.len += a.frameLength,
								{
									sample: l,
									length: a.frameLength
								}
							}
						}
					},
					parseHeader: function(e, t) {
						var r = e[t + 1] >> 3 & 3,
						n = e[t + 1] >> 1 & 3,
						i = e[t + 2] >> 4 & 15,
						a = e[t + 2] >> 2 & 3,
						o = e[t + 2] >> 1 & 1;
						if (1 !== r && 0 !== i && 15 !== i && 3 !== a) {
							var s = 3 === r ? 3 - n: 3 === n ? 3 : 4,
							l = 1e3 * P.BitratesMap[14 * s + i - 1],
							u = 3 === r ? 0 : 2 === r ? 1 : 2,
							c = P.SamplingRateMap[3 * u + a],
							d = e[t + 3] >> 6 == 3 ? 1 : 2,
							f = P.SamplesCoefficients[r][n],
							h = P.BytesInSlot[n],
							p = 8 * f * h;
							return {
								sampleRate: c,
								channelCount: d,
								frameLength: parseInt(f * l / c + o, 10) * h,
								samplesPerFrame: p
							}
						}
					},
					isHeaderPattern: function(e, t) {
						return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
					},
					isHeader: function(e, t) {
						return !! (t + 1 < e.length && this.isHeaderPattern(e, t))
					},
					probe: function(e, t) {
						if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
							var r = this.parseHeader(e, t),
							n = 4;
							r && r.frameLength && (n = r.frameLength);
							var i = t + n;
							if (i === e.length || i + 1 < e.length && this.isHeaderPattern(e, i)) return ! 0
						}
						return ! 1
					}
				},
				x = P,
				M = function() {
					function e(t) {
						p(this, e),
						this.data = t,
						this.bytesAvailable = t.byteLength,
						this.word = 0,
						this.bitsAvailable = 0
					}
					return e.prototype.loadWord = function() {
						var e = this.data,
						t = this.bytesAvailable,
						r = e.byteLength - t,
						n = new Uint8Array(4),
						i = Math.min(4, t);
						if (0 === i) throw new Error("no bytes available");
						n.set(e.subarray(r, r + i)),
						this.word = new DataView(n.buffer).getUint32(0),
						this.bitsAvailable = 8 * i,
						this.bytesAvailable -= i
					},
					e.prototype.skipBits = function(e) {
						var t = void 0;
						this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
					},
					e.prototype.readBits = function(e) {
						var t = Math.min(this.bitsAvailable, e),
						r = this.word >>> 32 - t;
						return e > 32 && L.b.error("Cannot read more than 32 bits at a time"),
						this.bitsAvailable -= t,
						this.bitsAvailable > 0 ? this.word <<= t: this.bytesAvailable > 0 && this.loadWord(),
						t = e - t,
						t > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
					},
					e.prototype.skipLZ = function() {
						var e = void 0;
						for (e = 0; e < this.bitsAvailable; ++e) if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e,
						this.bitsAvailable -= e,
						e;
						return this.loadWord(),
						e + this.skipLZ()
					},
					e.prototype.skipUEG = function() {
						this.skipBits(1 + this.skipLZ())
					},
					e.prototype.skipEG = function() {
						this.skipBits(1 + this.skipLZ())
					},
					e.prototype.readUEG = function() {
						var e = this.skipLZ();
						return this.readBits(e + 1) - 1
					},
					e.prototype.readEG = function() {
						var e = this.readUEG();
						return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
					},
					e.prototype.readBoolean = function() {
						return 1 === this.readBits(1)
					},
					e.prototype.readUByte = function() {
						return this.readBits(8)
					},
					e.prototype.readUShort = function() {
						return this.readBits(16)
					},
					e.prototype.readUInt = function() {
						return this.readBits(32)
					},
					e.prototype.skipScalingList = function(e) {
						var t = 8,
						r = 8,
						n = void 0,
						i = void 0;
						for (n = 0; n < e; n++) 0 !== r && (i = this.readEG(), r = (t + i + 256) % 256),
						t = 0 === r ? t: r
					},
					e.prototype.readSPS = function() {
						var e = 0,
						t = 0,
						r = 0,
						n = 0,
						i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0,
						d = this.readUByte.bind(this),
						f = this.readBits.bind(this),
						h = this.readUEG.bind(this),
						p = this.readBoolean.bind(this),
						g = this.skipBits.bind(this),
						v = this.skipEG.bind(this),
						y = this.skipUEG.bind(this),
						m = this.skipScalingList.bind(this);
						if (d(), i = d(), f(5), g(3), d(), y(), 100 === i || 110 === i || 122 === i || 244 === i || 44 === i || 83 === i || 86 === i || 118 === i || 128 === i) {
							var b = h();
							if (3 === b && g(1), y(), y(), g(1), p()) for (u = 3 !== b ? 8 : 12, c = 0; c < u; c++) p() && m(c < 6 ? 16 : 64)
						}
						y();
						var _ = h();
						if (0 === _) h();
						else if (1 === _) for (g(1), v(), v(), a = h(), c = 0; c < a; c++) v();
						y(),
						g(1),
						o = h(),
						s = h(),
						l = f(1),
						0 === l && g(1),
						g(1),
						p() && (e = h(), t = h(), r = h(), n = h());
						var E = [1, 1];
						if (p() && p()) {
							switch (d()) {
							case 1:
								E = [1, 1];
								break;
							case 2:
								E = [12, 11];
								break;
							case 3:
								E = [10, 11];
								break;
							case 4:
								E = [16, 11];
								break;
							case 5:
								E = [40, 33];
								break;
							case 6:
								E = [24, 11];
								break;
							case 7:
								E = [20, 11];
								break;
							case 8:
								E = [32, 11];
								break;
							case 9:
								E = [80, 33];
								break;
							case 10:
								E = [18, 11];
								break;
							case 11:
								E = [15, 11];
								break;
							case 12:
								E = [64, 33];
								break;
							case 13:
								E = [160, 99];
								break;
							case 14:
								E = [4, 3];
								break;
							case 15:
								E = [3, 2];
								break;
							case 16:
								E = [2, 1];
								break;
							case 255:
								E = [d() << 8 | d(), d() << 8 | d()]
							}
						}
						return {
							width: Math.ceil(16 * (o + 1) - 2 * e - 2 * t),
							height: (2 - l) * (s + 1) * 16 - (l ? 2 : 4) * (r + n),
							pixelRatio: E
						}
					},
					e.prototype.readSliceType = function() {
						return this.readUByte(),
						this.readUEG(),
						this.readUEG()
					},
					e
				} (),
				F = M,
				N = function() {
					function e(t, r, n, i) {
						g(this, e),
						this.decryptdata = n,
						this.discardEPB = i,
						this.decrypter = new R.a(t, r, {
							removePKCS7Padding: !1
						})
					}
					return e.prototype.decryptBuffer = function(e, t) {
						this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
					},
					e.prototype.decryptAacSample = function(e, t, r, n) {
						var i = e[t].unit,
						a = i.subarray(16, i.length - i.length % 16),
						o = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
						s = this;
						this.decryptBuffer(o,
						function(a) {
							a = new Uint8Array(a),
							i.set(a, 16),
							n || s.decryptAacSamples(e, t + 1, r)
						})
					},
					e.prototype.decryptAacSamples = function(e, t, r) {
						for (;; t++) {
							if (t >= e.length) return void r();
							if (! (e[t].unit.length < 32)) {
								var n = this.decrypter.isSync();
								if (this.decryptAacSample(e, t, r, n), !n) return
							}
						}
					},
					e.prototype.getAvcEncryptedData = function(e) {
						for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), n = 0, i = 32; i <= e.length - 16; i += 160, n += 16) r.set(e.subarray(i, i + 16), n);
						return r
					},
					e.prototype.getAvcDecryptedUnit = function(e, t) {
						t = new Uint8Array(t);
						for (var r = 0,
						n = 32; n <= e.length - 16; n += 160, r += 16) e.set(t.subarray(r, r + 16), n);
						return e
					},
					e.prototype.decryptAvcSample = function(e, t, r, n, i, a) {
						var o = this.discardEPB(i.data),
						s = this.getAvcEncryptedData(o),
						l = this;
						this.decryptBuffer(s.buffer,
						function(s) {
							i.data = l.getAvcDecryptedUnit(o, s),
							a || l.decryptAvcSamples(e, t, r + 1, n)
						})
					},
					e.prototype.decryptAvcSamples = function(e, t, r, n) {
						for (;; t++, r = 0) {
							if (t >= e.length) return void n();
							for (var i = e[t].units; ! (r >= i.length); r++) {
								var a = i[r];
								if (! (a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
									var o = this.decrypter.isSync();
									if (this.decryptAvcSample(e, t, r, n, a, o), !o) return
								}
							}
						}
					},
					e
				} (),
				U = N,
				B = {
					video: 1,
					audio: 2,
					id3: 3,
					text: 4
				},
				G = function() {
					function e(t, r, n, i) {
						v(this, e),
						this.observer = t,
						this.config = n,
						this.typeSupported = i,
						this.remuxer = r,
						this.sampleAes = null
					}
					return e.prototype.setDecryptData = function(e) {
						null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new U(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
					},
					e.probe = function(t) {
						var r = e._syncOffset(t);
						return ! (r < 0) && (r && L.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
					},
					e._syncOffset = function(e) {
						for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
							if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
							r++
						}
						return - 1
					},
					e.createTrack = function(e, t) {
						return {
							container: "video" === e || "audio" === e ? "video/mp2t": void 0,
							type: e,
							id: B[e],
							pid: -1,
							inputTimeScale: 9e4,
							sequenceNumber: 0,
							samples: [],
							len: 0,
							dropped: "video" === e ? 0 : void 0,
							isAAC: "audio" === e || void 0,
							duration: "audio" === e ? t: void 0
						}
					},
					e.prototype.resetInitSegment = function(t, r, n, i) {
						this.pmtParsed = !1,
						this._pmtId = -1,
						this._avcTrack = e.createTrack("video", i),
						this._audioTrack = e.createTrack("audio", i),
						this._id3Track = e.createTrack("id3", i),
						this._txtTrack = e.createTrack("text", i),
						this.aacOverFlow = null,
						this.aacLastPTS = null,
						this.avcSample = null,
						this.audioCodec = r,
						this.videoCodec = n,
						this._duration = i
					},
					e.prototype.resetTimeStamp = function() {},
					e.prototype.append = function(t, r, n, i) {
						var a = void 0,
						o = t.length,
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0,
						d = !1;
						this.contiguous = n;
						var f = this.pmtParsed,
						h = this._avcTrack,
						p = this._audioTrack,
						g = this._id3Track,
						v = h.pid,
						y = p.pid,
						m = g.pid,
						b = this._pmtId,
						_ = h.pesData,
						E = p.pesData,
						T = g.pesData,
						R = this._parsePAT,
						A = this._parsePMT,
						D = this._parsePES,
						k = this._parseAVCPES.bind(this),
						I = this._parseAACPES.bind(this),
						C = this._parseMPEGPES.bind(this),
						O = this._parseID3PES.bind(this),
						P = e._syncOffset(t);
						for (o -= (o + P) % 188, a = P; a < o; a += 188) if (71 === t[a]) {
							if (s = !!(64 & t[a + 1]), l = ((31 & t[a + 1]) << 8) + t[a + 2], (48 & t[a + 3]) >> 4 > 1) {
								if ((u = a + 5 + t[a + 4]) === a + 188) continue
							} else u = a + 4;
							switch (l) {
							case v:
								s && (_ && (c = D(_)) && void 0 !== c.pts && k(c, !1), _ = {
									data: [],
									size: 0
								}),
								_ && (_.data.push(t.subarray(u, a + 188)), _.size += a + 188 - u);
								break;
							case y:
								s && (E && (c = D(E)) && void 0 !== c.pts && (p.isAAC ? I(c) : C(c)), E = {
									data: [],
									size: 0
								}),
								E && (E.data.push(t.subarray(u, a + 188)), E.size += a + 188 - u);
								break;
							case m:
								s && (T && (c = D(T)) && void 0 !== c.pts && O(c), T = {
									data: [],
									size: 0
								}),
								T && (T.data.push(t.subarray(u, a + 188)), T.size += a + 188 - u);
								break;
							case 0:
								s && (u += t[u] + 1),
								b = this._pmtId = R(t, u);
								break;
							case b:
								s && (u += t[u] + 1);
								var x = A(t, u, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
								v = x.avc,
								v > 0 && (h.pid = v),
								y = x.audio,
								y > 0 && (p.pid = y, p.isAAC = x.isAAC),
								m = x.id3,
								m > 0 && (g.pid = m),
								d && !f && (L.b.log("reparse from beginning"), d = !1, a = P - 188),
								f = this.pmtParsed = !0;
								break;
							case 17:
							case 8191:
								break;
							default:
								d = !0
							}
						} else this.observer.trigger(S.a.ERROR, {
							type: w.b.MEDIA_ERROR,
							details: w.a.FRAG_PARSING_ERROR,
							fatal: !1,
							reason: "TS packet did not start with 0x47"
						});
						_ && (c = D(_)) && void 0 !== c.pts ? (k(c, !0), h.pesData = null) : h.pesData = _,
						E && (c = D(E)) && void 0 !== c.pts ? (p.isAAC ? I(c) : C(c), p.pesData = null) : (E && E.size && L.b.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = E),
						T && (c = D(T)) && void 0 !== c.pts ? (O(c), g.pesData = null) : g.pesData = T,
						null == this.sampleAes ? this.remuxer.remux(p, h, g, this._txtTrack, r, n, i) : this.decryptAndRemux(p, h, g, this._txtTrack, r, n, i)
					},
					e.prototype.decryptAndRemux = function(e, t, r, n, i, a, o) {
						if (e.samples && e.isAAC) {
							var s = this;
							this.sampleAes.decryptAacSamples(e.samples, 0,
							function() {
								s.decryptAndRemuxAvc(e, t, r, n, i, a, o)
							})
						} else this.decryptAndRemuxAvc(e, t, r, n, i, a, o)
					},
					e.prototype.decryptAndRemuxAvc = function(e, t, r, n, i, a, o) {
						if (t.samples) {
							var s = this;
							this.sampleAes.decryptAvcSamples(t.samples, 0, 0,
							function() {
								s.remuxer.remux(e, t, r, n, i, a, o)
							})
						} else this.remuxer.remux(e, t, r, n, i, a, o)
					},
					e.prototype.destroy = function() {
						this._initPTS = this._initDTS = void 0,
						this._duration = 0
					},
					e.prototype._parsePAT = function(e, t) {
						return (31 & e[t + 10]) << 8 | e[t + 11]
					},
					e.prototype._parsePMT = function(e, t, r, n) {
						var i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = {
							audio: -1,
							avc: -1,
							id3: -1,
							isAAC: !0
						};
						for (i = (15 & e[t + 1]) << 8 | e[t + 2], a = t + 3 + i - 4, o = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + o; t < a;) {
							switch (s = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
							case 207:
								if (!n) {
									L.b.log("unkown stream type:" + e[t]);
									break
								}
							case 15:
								-1 === l.audio && (l.audio = s);
								break;
							case 21:
								-1 === l.id3 && (l.id3 = s);
								break;
							case 219:
								if (!n) {
									L.b.log("unkown stream type:" + e[t]);
									break
								}
							case 27:
								-1 === l.avc && (l.avc = s);
								break;
							case 3:
							case 4:
								r ? -1 === l.audio && (l.audio = s, l.isAAC = !1) : L.b.log("MPEG audio found, not supported in this browser for now");
								break;
							case 36:
								L.b.warn("HEVC stream type found, not supported for now");
								break;
							default:
								L.b.log("unkown stream type:" + e[t])
							}
							t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
						}
						return l
					},
					e.prototype._parsePES = function(e) {
						var t = 0,
						r = void 0,
						n = void 0,
						i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = void 0,
						u = void 0,
						c = e.data;
						if (!e || 0 === e.size) return null;
						for (; c[0].length < 19 && c.length > 1;) {
							var d = new Uint8Array(c[0].length + c[1].length);
							d.set(c[0]),
							d.set(c[1], c[0].length),
							c[0] = d,
							c.splice(1, 1)
						}
						if (r = c[0], 1 === (r[0] << 16) + (r[1] << 8) + r[2]) {
							if ((i = (r[4] << 8) + r[5]) && i > e.size - 6) return null;
							n = r[7],
							192 & n && (s = 536870912 * (14 & r[9]) + 4194304 * (255 & r[10]) + 16384 * (254 & r[11]) + 128 * (255 & r[12]) + (254 & r[13]) / 2, s > 4294967295 && (s -= 8589934592), 64 & n ? (l = 536870912 * (14 & r[14]) + 4194304 * (255 & r[15]) + 16384 * (254 & r[16]) + 128 * (255 & r[17]) + (254 & r[18]) / 2, l > 4294967295 && (l -= 8589934592), s - l > 54e5 && (L.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s),
							a = r[8],
							u = a + 9,
							e.size -= u,
							o = new Uint8Array(e.size);
							for (var f = 0,
							h = c.length; f < h; f++) {
								r = c[f];
								var p = r.byteLength;
								if (u) {
									if (u > p) {
										u -= p;
										continue
									}
									r = r.subarray(u),
									p -= u,
									u = 0
								}
								o.set(r, t),
								t += p
							}
							return i && (i -= a + 3),
							{
								data: o,
								pts: s,
								dts: l,
								len: i
							}
						}
						return null
					},
					e.prototype.pushAccesUnit = function(e, t) {
						if (e.units.length && e.frame) {
							var r = t.samples,
							n = r.length; ! this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (n || this.contiguous) ? (e.id = n, r.push(e)) : t.dropped++
						}
						e.debug.length && L.b.log(e.pts + "/" + e.dts + ":" + e.debug)
					},
					e.prototype._parseAVCPES = function(e, t) {
						var r = this,
						n = this._avcTrack,
						i = this._parseAVCNALu(e.data),
						a = void 0,
						o = this.avcSample,
						s = void 0,
						l = !1,
						u = void 0,
						c = this.pushAccesUnit.bind(this),
						d = function(e, t, r, n) {
							return {
								key: e,
								pts: t,
								dts: r,
								units: [],
								debug: n
							}
						};
						e.data = null,
						o && i.length && !n.audFound && (c(o, n), o = this.avcSample = d(!1, e.pts, e.dts, "")),
						i.forEach(function(t) {
							switch (t.type) {
							case 1:
								s = !0,
								o || (o = r.avcSample = d(!0, e.pts, e.dts, "")),
								o.frame = !0;
								var i = t.data;
								if (l && i.length > 4) {
									var f = new F(i).readSliceType();
									2 !== f && 4 !== f && 7 !== f && 9 !== f || (o.key = !0)
								}
								break;
							case 5:
								s = !0,
								o || (o = r.avcSample = d(!0, e.pts, e.dts, "")),
								o.key = !0,
								o.frame = !0;
								break;
							case 6:
								s = !0,
								a = new F(r.discardEPB(t.data)),
								a.readUByte();
								for (var h = 0,
								p = 0,
								g = !1,
								v = 0; ! g && a.bytesAvailable > 1;) {
									h = 0;
									do {
										v = a.readUByte(), h += v
									} while ( 255 === v );
									p = 0;
									do {
										v = a.readUByte(), p += v
									} while ( 255 === v );
									if (4 === h && 0 !== a.bytesAvailable) {
										g = !0;
										if (181 === a.readUByte()) {
											if (49 === a.readUShort()) {
												if (1195456820 === a.readUInt()) {
													if (3 === a.readUByte()) {
														var y = a.readUByte(),
														m = a.readUByte(),
														b = 31 & y,
														_ = [y, m];
														for (u = 0; u < b; u++) _.push(a.readUByte()),
														_.push(a.readUByte()),
														_.push(a.readUByte());
														r._insertSampleInOrder(r._txtTrack.samples, {
															type: 3,
															pts: e.pts,
															bytes: _
														})
													}
												}
											}
										}
									} else if (p < a.bytesAvailable) for (u = 0; u < p; u++) a.readUByte()
								}
								break;
							case 7:
								if (s = !0, l = !0, !n.sps) {
									a = new F(t.data);
									var E = a.readSPS();
									n.width = E.width,
									n.height = E.height,
									n.pixelRatio = E.pixelRatio,
									n.sps = [t.data],
									n.duration = r._duration;
									var T = t.data.subarray(1, 4),
									S = "avc1.";
									for (u = 0; u < 3; u++) {
										var w = T[u].toString(16);
										w.length < 2 && (w = "0" + w),
										S += w
									}
									n.codec = S
								}
								break;
							case 8:
								s = !0,
								n.pps || (n.pps = [t.data]);
								break;
							case 9:
								s = !1,
								n.audFound = !0,
								o && c(o, n),
								o = r.avcSample = d(!1, e.pts, e.dts, "");
								break;
							case 12:
								s = !1;
								break;
							default:
								s = !1,
								o && (o.debug += "unknown NAL " + t.type + " ")
							}
							if (o && s) {
								o.units.push(t)
							}
						}),
						t && o && (c(o, n), this.avcSample = null)
					},
					e.prototype._insertSampleInOrder = function(e, t) {
						var r = e.length;
						if (r > 0) {
							if (t.pts >= e[r - 1].pts) e.push(t);
							else for (var n = r - 1; n >= 0; n--) if (t.pts < e[n].pts) {
								e.splice(n, 0, t);
								break
							}
						} else e.push(t)
					},
					e.prototype._getLastNalUnit = function() {
						var e = this.avcSample,
						t = void 0;
						if (!e || 0 === e.units.length) {
							var r = this._avcTrack,
							n = r.samples;
							e = n[n.length - 1]
						}
						if (e) {
							var i = e.units;
							t = i[i.length - 1]
						}
						return t
					},
					e.prototype._parseAVCNALu = function(e) {
						var t = 0,
						r = e.byteLength,
						n = void 0,
						i = void 0,
						a = this._avcTrack,
						o = a.naluState || 0,
						s = o,
						l = [],
						u = void 0,
						c = void 0,
						d = -1,
						f = void 0;
						for ( - 1 === o && (d = 0, f = 31 & e[0], o = 0, t = 1); t < r;) if (n = e[t++], o) if (1 !== o) if (n) if (1 === n) {
							if (d >= 0) u = {
								data: e.subarray(d, t - o - 1),
								type: f
							},
							l.push(u);
							else {
								var h = this._getLastNalUnit();
								if (h && (s && t <= 4 - s && h.state && (h.data = h.data.subarray(0, h.data.byteLength - s)), (i = t - o - 1) > 0)) {
									var p = new Uint8Array(h.data.byteLength + i);
									p.set(h.data, 0),
									p.set(e.subarray(0, i), h.data.byteLength),
									h.data = p
								}
							}
							t < r ? (c = 31 & e[t], d = t, f = c, o = 0) : o = -1
						} else o = 0;
						else o = 3;
						else o = n ? 0 : 2;
						else o = n ? 0 : 1;
						if (d >= 0 && o >= 0 && (u = {
							data: e.subarray(d, r),
							type: f,
							state: o
						},
						l.push(u)), 0 === l.length) {
							var g = this._getLastNalUnit();
							if (g) {
								var v = new Uint8Array(g.data.byteLength + e.byteLength);
								v.set(g.data, 0),
								v.set(e, g.data.byteLength),
								g.data = v
							}
						}
						return a.naluState = o,
						l
					},
					e.prototype.discardEPB = function(e) {
						for (var t = e.byteLength,
						r = [], n = 1, i = void 0, a = void 0; n < t - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (r.push(n + 2), n += 2) : n++;
						if (0 === r.length) return e;
						i = t - r.length,
						a = new Uint8Array(i);
						var o = 0;
						for (n = 0; n < i; o++, n++) o === r[0] && (o++, r.shift()),
						a[n] = e[o];
						return a
					},
					e.prototype._parseAACPES = function(e) {
						var t = this._audioTrack,
						r = e.data,
						n = e.pts,
						i = this.aacOverFlow,
						a = this.aacLastPTS,
						o = void 0,
						l = void 0,
						d = void 0,
						h = void 0,
						p = void 0;
						if (i) {
							var g = new Uint8Array(i.byteLength + r.byteLength);
							g.set(i, 0),
							g.set(r, i.byteLength),
							r = g
						}
						for (d = 0, p = r.length; d < p - 1 && !s(r, d); d++);
						if (d) {
							var v = void 0,
							y = void 0;
							if (d < p - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + d, y = !1) : (v = "no ADTS header found in AAC PES", y = !0), L.b.warn("parsing error:" + v), this.observer.trigger(S.a.ERROR, {
								type: w.b.MEDIA_ERROR,
								details: w.a.FRAG_PARSING_ERROR,
								fatal: y,
								reason: v
							}), y) return
						}
						if (u(t, this.observer, r, d, this.audioCodec), l = 0, o = c(t.samplerate), i && a) {
							var m = a + o;
							Math.abs(m - n) > 1 && (L.b.log("AAC: align PTS for overlapping frames by " + Math.round((m - n) / 90)), n = m)
						}
						for (; d < p;) if (s(r, d) && d + 5 < p) {
							var b = f(t, r, d, n, l);
							if (!b) break;
							d += b.length,
							h = b.sample.pts,
							l++
						} else d++;
						i = d < p ? r.subarray(d, p) : null,
						this.aacOverFlow = i,
						this.aacLastPTS = h
					},
					e.prototype._parseMPEGPES = function(e) {
						for (var t = e.data,
						r = t.length,
						n = 0,
						i = 0,
						a = e.pts; i < r;) if (x.isHeader(t, i)) {
							var o = x.appendFrame(this._audioTrack, t, i, a, n);
							if (!o) break;
							i += o.length,
							n++
						} else i++
					},
					e.prototype._parseID3PES = function(e) {
						this._id3Track.samples.push(e)
					},
					e
				} (),
				j = G,
				K = function() {
					function e(t, r, n) {
						y(this, e),
						this.observer = t,
						this.config = n,
						this.remuxer = r
					}
					return e.prototype.resetInitSegment = function(e, t, r, n) {
						this._audioTrack = {
							container: "audio/mpeg",
							type: "audio",
							id: -1,
							sequenceNumber: 0,
							isAAC: !1,
							samples: [],
							len: 0,
							manifestCodec: t,
							duration: n,
							inputTimeScale: 9e4
						}
					},
					e.prototype.resetTimeStamp = function() {},
					e.probe = function(e) {
						var t = void 0,
						r = void 0,
						n = k.a.getID3Data(e, 0);
						if (n && void 0 !== k.a.getTimeStamp(n)) for (t = n.length, r = Math.min(e.length - 1, t + 100); t < r; t++) if (x.probe(e, t)) return L.b.log("MPEG Audio sync word found !"),
						!0;
						return ! 1
					},
					e.prototype.append = function(e, t, r, n) {
						for (var i = k.a.getID3Data(e, 0), a = k.a.getTimeStamp(i), o = a ? 90 * a: 9e4 * t, s = i.length, l = e.length, u = 0, c = 0, d = this._audioTrack, f = [{
							pts: o,
							dts: o,
							data: i
						}]; s < l;) if (x.isHeader(e, s)) {
							var h = x.appendFrame(d, e, s, o, u);
							if (!h) break;
							s += h.length,
							c = h.sample.pts,
							u++
						} else k.a.isHeader(e, s) ? (i = k.a.getID3Data(e, s), f.push({
							pts: c,
							dts: c,
							data: i
						}), s += i.length) : s++;
						this.remuxer.remux(d, {
							samples: []
						},
						{
							samples: f,
							inputTimeScale: 9e4
						},
						{
							samples: []
						},
						t, r, n)
					},
					e.prototype.destroy = function() {},
					e
				} (),
				H = K,
				W = function() {
					function e() {
						m(this, e)
					}
					return e.getSilentFrame = function(e, t) {
						switch (e) {
						case "mp4a.40.2":
							if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
							if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
							if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
							if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
							if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
							if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
							break;
						default:
							if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
							if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
							if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
						}
						return null
					},
					e
				} (),
				q = W,
				V = Math.pow(2, 32) - 1,
				Y = function() {
					function e() {
						b(this, e)
					}
					return e.init = function() {
						e.types = {
							avc1: [],
							avcC: [],
							btrt: [],
							dinf: [],
							dref: [],
							esds: [],
							ftyp: [],
							hdlr: [],
							mdat: [],
							mdhd: [],
							mdia: [],
							mfhd: [],
							minf: [],
							moof: [],
							moov: [],
							mp4a: [],
							".mp3": [],
							mvex: [],
							mvhd: [],
							pasp: [],
							sdtp: [],
							stbl: [],
							stco: [],
							stsc: [],
							stsd: [],
							stsz: [],
							stts: [],
							tfdt: [],
							tfhd: [],
							traf: [],
							trak: [],
							trun: [],
							trex: [],
							tkhd: [],
							vmhd: [],
							smhd: []
						};
						var t = void 0;
						for (t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
						var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
						n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
						e.HDLR_TYPES = {
							video: r,
							audio: n
						};
						var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
						a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
						e.STTS = e.STSC = e.STCO = a,
						e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
						e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
						e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
						e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
						var o = new Uint8Array([105, 115, 111, 109]),
						s = new Uint8Array([97, 118, 99, 49]),
						l = new Uint8Array([0, 0, 0, 1]);
						e.FTYP = e.box(e.types.ftyp, o, l, o, s),
						e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
					},
					e.box = function(e) {
						for (var t = Array.prototype.slice.call(arguments, 1), r = 8, n = t.length, i = n, a = void 0; n--;) r += t[n].byteLength;
						for (a = new Uint8Array(r), a[0] = r >> 24 & 255, a[1] = r >> 16 & 255, a[2] = r >> 8 & 255, a[3] = 255 & r, a.set(e, 4), n = 0, r = 8; n < i; n++) a.set(t[n], r),
						r += t[n].byteLength;
						return a
					},
					e.hdlr = function(t) {
						return e.box(e.types.hdlr, e.HDLR_TYPES[t])
					},
					e.mdat = function(t) {
						return e.box(e.types.mdat, t)
					},
					e.mdhd = function(t, r) {
						r *= t;
						var n = Math.floor(r / (V + 1)),
						i = Math.floor(r % (V + 1));
						return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]))
					},
					e.mdia = function(t) {
						return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
					},
					e.mfhd = function(t) {
						return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
					},
					e.minf = function(t) {
						return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
					},
					e.moof = function(t, r, n) {
						return e.box(e.types.moof, e.mfhd(t), e.traf(n, r))
					},
					e.moov = function(t) {
						for (var r = t.length,
						n = []; r--;) n[r] = e.trak(t[r]);
						return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(e.mvex(t)))
					},
					e.mvex = function(t) {
						for (var r = t.length,
						n = []; r--;) n[r] = e.trex(t[r]);
						return e.box.apply(null, [e.types.mvex].concat(n))
					},
					e.mvhd = function(t, r) {
						r *= t;
						var n = Math.floor(r / (V + 1)),
						i = Math.floor(r % (V + 1)),
						a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
						return e.box(e.types.mvhd, a)
					},
					e.sdtp = function(t) {
						var r = t.samples || [],
						n = new Uint8Array(4 + r.length),
						i = void 0,
						a = void 0;
						for (a = 0; a < r.length; a++) i = r[a].flags,
						n[a + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
						return e.box(e.types.sdtp, n)
					},
					e.stbl = function(t) {
						return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
					},
					e.avc1 = function(t) {
						var r = [],
						n = [],
						i = void 0,
						a = void 0,
						o = void 0;
						for (i = 0; i < t.sps.length; i++) a = t.sps[i],
						o = a.byteLength,
						r.push(o >>> 8 & 255),
						r.push(255 & o),
						r = r.concat(Array.prototype.slice.call(a));
						for (i = 0; i < t.pps.length; i++) a = t.pps[i],
						o = a.byteLength,
						n.push(o >>> 8 & 255),
						n.push(255 & o),
						n = n.concat(Array.prototype.slice.call(a));
						var s = e.box(e.types.avcC, new Uint8Array([1, r[3], r[4], r[5], 255, 224 | t.sps.length].concat(r).concat([t.pps.length]).concat(n))),
						l = t.width,
						u = t.height,
						c = t.pixelRatio[0],
						d = t.pixelRatio[1];
						return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
					},
					e.esds = function(e) {
						var t = e.config.length;
						return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
					},
					e.mp4a = function(t) {
						var r = t.samplerate;
						return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
					},
					e.mp3 = function(t) {
						var r = t.samplerate;
						return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
					},
					e.stsd = function(t) {
						return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
					},
					e.tkhd = function(t) {
						var r = t.id,
						n = t.duration * t.timescale,
						i = t.width,
						a = t.height,
						o = Math.floor(n / (V + 1)),
						s = Math.floor(n % (V + 1));
						return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
					},
					e.traf = function(t, r) {
						var n = e.sdtp(t),
						i = t.id,
						a = Math.floor(r / (V + 1)),
						o = Math.floor(r % (V + 1));
						return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.trun(t, n.length + 16 + 20 + 8 + 16 + 8 + 8), n)
					},
					e.trak = function(t) {
						return t.duration = t.duration || 4294967295,
						e.box(e.types.trak, e.tkhd(t), e.mdia(t))
					},
					e.trex = function(t) {
						var r = t.id;
						return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
					},
					e.trun = function(t, r) {
						var n = t.samples || [],
						i = n.length,
						a = 12 + 16 * i,
						o = new Uint8Array(a),
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0,
						d = void 0,
						f = void 0;
						for (r += 8 + a, o.set([0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), s = 0; s < i; s++) l = n[s],
						u = l.duration,
						c = l.size,
						d = l.flags,
						f = l.cts,
						o.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, d.isLeading << 2 | d.dependsOn, d.isDependedOn << 6 | d.hasRedundancy << 4 | d.paddingValue << 1 | d.isNonSync, 61440 & d.degradPrio, 15 & d.degradPrio, f >>> 24 & 255, f >>> 16 & 255, f >>> 8 & 255, 255 & f], 12 + 16 * s);
						return e.box(e.types.trun, o)
					},
					e.initSegment = function(t) {
						e.types || e.init();
						var r = e.moov(t),
						n = void 0;
						return n = new Uint8Array(e.FTYP.byteLength + r.byteLength),
						n.set(e.FTYP),
						n.set(r, e.FTYP.byteLength),
						n
					},
					e
				} (),
				z = Y,
				X = function() {
					function e(t, r, n, i) {
						_(this, e),
						this.observer = t,
						this.config = r,
						this.typeSupported = n;
						var a = navigator.userAgent;
						this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"),
						this.ISGenerated = !1
					}
					return e.prototype.destroy = function() {},
					e.prototype.resetTimeStamp = function(e) {
						this._initPTS = this._initDTS = e
					},
					e.prototype.resetInitSegment = function() {
						this.ISGenerated = !1
					},
					e.prototype.remux = function(e, t, r, n, i, a, o) {
						if (this.ISGenerated || this.generateIS(e, t, i), this.ISGenerated) {
							var s = e.samples.length,
							l = t.samples.length,
							u = i,
							c = i;
							if (s && l) {
								var d = (e.samples[0].dts - t.samples[0].dts) / t.inputTimeScale;
								u += Math.max(0, d),
								c += Math.max(0, -d)
							}
							if (s) {
								e.timescale || (L.b.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, i));
								var f = this.remuxAudio(e, u, a, o);
								if (l) {
									var h = void 0;
									f && (h = f.endPTS - f.startPTS),
									t.timescale || (L.b.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, i)),
									this.remuxVideo(t, c, a, h, o)
								}
							} else if (l) {
								var p = this.remuxVideo(t, c, a, 0, o);
								p && e.codec && this.remuxEmptyAudio(e, u, a, p)
							}
						}
						r.samples.length && this.remuxID3(r, i),
						n.samples.length && this.remuxText(n, i),
						this.observer.trigger(S.a.FRAG_PARSED)
					},
					e.prototype.generateIS = function(e, t, r) {
						var n = this.observer,
						i = e.samples,
						a = t.samples,
						o = this.typeSupported,
						s = "audio/mp4",
						l = {},
						u = {
							tracks: l
						},
						c = void 0 === this._initPTS,
						d = void 0,
						f = void 0;
						if (c && (d = f = 1 / 0), e.config && i.length && (e.timescale = e.samplerate, L.b.log("audio sampling rate : " + e.samplerate), e.isAAC || (o.mpeg ? (s = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3")), l.audio = {
							container: s,
							codec: e.codec,
							initSegment: !e.isAAC && o.mpeg ? new Uint8Array: z.initSegment([e]),
							metadata: {
								channelCount: e.channelCount
							}
						},
						c && (d = f = i[0].pts - e.inputTimeScale * r)), t.sps && t.pps && a.length) {
							var h = t.inputTimeScale;
							t.timescale = h,
							l.video = {
								container: "video/mp4",
								codec: t.codec,
								initSegment: z.initSegment([t]),
								metadata: {
									width: t.width,
									height: t.height
								}
							},
							c && (d = Math.min(d, a[0].pts - h * r), f = Math.min(f, a[0].dts - h * r), this.observer.trigger(S.a.INIT_PTS_FOUND, {
								initPTS: d
							}))
						}
						Object.keys(l).length ? (n.trigger(S.a.FRAG_PARSING_INIT_SEGMENT, u), this.ISGenerated = !0, c && (this._initPTS = d, this._initDTS = f)) : n.trigger(S.a.ERROR, {
							type: w.b.MEDIA_ERROR,
							details: w.a.FRAG_PARSING_ERROR,
							fatal: !1,
							reason: "no audio/video samples found"
						})
					},
					e.prototype.remuxVideo = function(e, t, r, n, i) {
						var a = 8,
						o = e.timescale,
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0,
						d = void 0,
						f = void 0,
						h = void 0,
						p = e.samples,
						g = [],
						v = p.length,
						y = this._PTSNormalize,
						m = this._initDTS,
						b = this.nextAvcDts,
						_ = this.isSafari;
						if (0 !== v) {
							_ && (r |= p.length && b && (i && Math.abs(t - b / o) < .1 || Math.abs(p[0].pts - b - m) < o / 5)),
							r || (b = t * o),
							p.forEach(function(e) {
								e.pts = y(e.pts - m, b),
								e.dts = y(e.dts - m, b)
							}),
							p.sort(function(e, t) {
								var r = e.dts - t.dts,
								n = e.pts - t.pts;
								return r || n || e.id - t.id
							});
							var E = p.reduce(function(e, t) {
								return Math.max(Math.min(e, t.pts - t.dts), -18e3)
							},
							0);
							if (E < 0) {
								L.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(E / 90) + " ms to overcome this issue");
								for (var T = 0; T < p.length; T++) p[T].dts += E
							}
							var R = p[0];
							d = Math.max(R.dts, 0),
							c = Math.max(R.pts, 0);
							var A = Math.round((d - b) / 90);
							r && A && (A > 1 ? L.b.log("AVC:" + A + " ms hole between fragments detected,filling it") : A < -1 && L.b.log("AVC:" + -A + " ms overlapping between fragments detected"), d = b, p[0].dts = d, c = Math.max(c - A, b), p[0].pts = c, L.b.log("Video/PTS/DTS adjusted: " + Math.round(c / 90) + "/" + Math.round(d / 90) + ",delta:" + A + " ms")),
							d,
							R = p[p.length - 1],
							h = Math.max(R.dts, 0),
							f = Math.max(R.pts, 0, h),
							_ && (s = Math.round((h - d) / (p.length - 1)));
							for (var D = 0,
							k = 0,
							I = 0; I < v; I++) {
								for (var C = p[I], O = C.units, P = O.length, x = 0, M = 0; M < P; M++) x += O[M].data.length;
								k += x,
								D += P,
								C.length = x,
								C.dts = _ ? d + I * s: Math.max(C.dts, d),
								C.pts = Math.max(C.pts, C.dts)
							}
							var F = k + 4 * D + 8;
							try {
								l = new Uint8Array(F)
							} catch(e) {
								return void this.observer.trigger(S.a.ERROR, {
									type: w.b.MUX_ERROR,
									details: w.a.REMUX_ALLOC_ERROR,
									fatal: !1,
									bytes: F,
									reason: "fail allocating video mdat " + F
								})
							}
							var N = new DataView(l.buffer);
							N.setUint32(0, F),
							l.set(z.types.mdat, 4);
							for (var U = 0; U < v; U++) {
								for (var B = p[U], G = B.units, j = 0, K = void 0, H = 0, W = G.length; H < W; H++) {
									var q = G[H],
									V = q.data,
									Y = q.data.byteLength;
									N.setUint32(a, Y),
									a += 4,
									l.set(V, a),
									a += Y,
									j += 4 + Y
								}
								if (_) K = Math.max(0, s * Math.round((B.pts - B.dts) / s));
								else {
									if (U < v - 1) s = p[U + 1].dts - B.dts;
									else {
										var X = this.config,
										Q = B.dts - p[U > 0 ? U - 1 : U].dts;
										if (X.stretchShortVideoTrack) {
											var J = X.maxBufferHole,
											$ = Math.floor(J * o),
											Z = (n ? c + n * o: this.nextAudioPts) - B.pts;
											Z > $ ? (s = Z - Q, s < 0 && (s = Q), L.b.log("It is approximately " + Z / 90 + " ms to the next segment; using duration " + s / 90 + " ms for the last video frame.")) : s = Q
										} else s = Q
									}
									K = Math.round(B.pts - B.dts)
								}
								g.push({
									size: j,
									duration: s,
									cts: K,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: B.key ? 2 : 1,
										isNonSync: B.key ? 0 : 1
									}
								})
							}
							this.nextAvcDts = h + s;
							var ee = e.dropped;
							if (e.len = 0, e.nbNalu = 0, e.dropped = 0, g.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
								var te = g[0].flags;
								te.dependsOn = 2,
								te.isNonSync = 0
							}
							e.samples = g,
							u = z.moof(e.sequenceNumber++, d, e),
							e.samples = [];
							var re = {
								data1: u,
								data2: l,
								startPTS: c / o,
								endPTS: (f + s) / o,
								startDTS: d / o,
								endDTS: this.nextAvcDts / o,
								type: "video",
								hasAudio: !1,
								hasVideo: !0,
								nb: g.length,
								dropped: ee
							};
							return this.observer.trigger(S.a.FRAG_PARSING_DATA, re),
							re
						}
					},
					e.prototype.remuxAudio = function(e, t, r, n) {
						var i = e.inputTimeScale,
						a = e.timescale,
						o = i / a,
						s = e.isAAC ? 1024 : 1152,
						l = s * o,
						u = this._PTSNormalize,
						c = this._initDTS,
						d = !e.isAAC && this.typeSupported.mpeg,
						f = void 0,
						h = void 0,
						p = void 0,
						g = void 0,
						v = void 0,
						y = void 0,
						m = void 0,
						b = e.samples,
						_ = [],
						E = this.nextAudioPts;
						if (r |= b.length && E && (n && Math.abs(t - E / i) < .1 || Math.abs(b[0].pts - E - c) < 20 * l), b.forEach(function(e) {
							e.pts = e.dts = u(e.pts - c, t * i)
						}), b = b.filter(function(e) {
							return e.pts >= 0
						}), 0 !== b.length) {
							if (r || (E = n ? t * i: b[0].pts), e.isAAC) for (var T = this.config.maxAudioFramesDrift,
							R = 0,
							A = E; R < b.length;) {
								var D, k = b[R],
								I = k.pts;
								D = I - A;
								var C = Math.abs(1e3 * D / i);
								if (D <= -T * l) L.b.warn("Dropping 1 audio frame @ " + (A / i).toFixed(3) + "s due to " + Math.round(C) + " ms overlap."),
								b.splice(R, 1),
								e.len -= k.unit.length;
								else if (D >= T * l && C < 1e4 && A) {
									var O = Math.round(D / l);
									L.b.warn("Injecting " + O + " audio frame @ " + (A / i).toFixed(3) + "s due to " + Math.round(1e3 * D / i) + " ms gap.");
									for (var P = 0; P < O; P++) {
										var x = Math.max(A, 0);
										p = q.getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
										p || (L.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), p = k.unit.subarray()),
										b.splice(R, 0, {
											unit: p,
											pts: x,
											dts: x
										}),
										e.len += p.length,
										A += l,
										R++
									}
									k.pts = k.dts = A,
									A += l,
									R++
								} else Math.abs(D),
								k.pts = k.dts = A,
								A += l,
								R++
							}
							for (var M = 0,
							F = b.length; M < F; M++) {
								var N = b[M],
								U = N.unit,
								B = N.pts;
								if (void 0 !== m) h.duration = Math.round((B - m) / o);
								else {
									var G = Math.round(1e3 * (B - E) / i),
									j = 0;
									if (r && e.isAAC && G) {
										if (G > 0 && G < 1e4) j = Math.round((B - E) / l),
										L.b.log(G + " ms hole between AAC samples detected,filling it"),
										j > 0 && (p = q.getSilentFrame(e.manifestCodec || e.codec, e.channelCount), p || (p = U.subarray()), e.len += j * p.length);
										else if (G < -12) {
											L.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (E / i).toFixed(3) + "s/" + (B / i).toFixed(3) + "s/" + -G + "ms"),
											e.len -= U.byteLength;
											continue
										}
										B = E
									}
									if (y = B, !(e.len > 0)) return;
									var K = d ? e.len: e.len + 8;
									f = d ? 0 : 8;
									try {
										g = new Uint8Array(K)
									} catch(e) {
										return void this.observer.trigger(S.a.ERROR, {
											type: w.b.MUX_ERROR,
											details: w.a.REMUX_ALLOC_ERROR,
											fatal: !1,
											bytes: K,
											reason: "fail allocating audio mdat " + K
										})
									}
									if (!d) {
										new DataView(g.buffer).setUint32(0, K),
										g.set(z.types.mdat, 4)
									}
									for (var H = 0; H < j; H++) p = q.getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
									p || (L.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), p = U.subarray()),
									g.set(p, f),
									f += p.byteLength,
									h = {
										size: p.byteLength,
										cts: 0,
										duration: 1024,
										flags: {
											isLeading: 0,
											isDependedOn: 0,
											hasRedundancy: 0,
											degradPrio: 0,
											dependsOn: 1
										}
									},
									_.push(h)
								}
								g.set(U, f);
								var W = U.byteLength;
								f += W,
								h = {
									size: W,
									cts: 0,
									duration: 0,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: 1
									}
								},
								_.push(h),
								m = B
							}
							var V = 0,
							Y = _.length;
							if (Y >= 2 && (V = _[Y - 2].duration, h.duration = V), Y) {
								this.nextAudioPts = E = m + o * V,
								e.len = 0,
								e.samples = _,
								v = d ? new Uint8Array: z.moof(e.sequenceNumber++, y / o, e),
								e.samples = [];
								var X = y / i,
								Q = E / i,
								J = {
									data1: v,
									data2: g,
									startPTS: X,
									endPTS: Q,
									startDTS: X,
									endDTS: Q,
									type: "audio",
									hasAudio: !0,
									hasVideo: !1,
									nb: Y
								};
								return this.observer.trigger(S.a.FRAG_PARSING_DATA, J),
								J
							}
							return null
						}
					},
					e.prototype.remuxEmptyAudio = function(e, t, r, n) {
						var i = e.inputTimeScale,
						a = e.samplerate ? e.samplerate: i,
						o = i / a,
						s = this.nextAudioPts,
						l = (void 0 !== s ? s: n.startDTS * i) + this._initDTS,
						u = n.endDTS * i + this._initDTS,
						c = 1024 * o,
						d = Math.ceil((u - l) / c),
						f = q.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
						if (L.b.warn("remux empty Audio"), !f) return void L.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
						for (var h = [], p = 0; p < d; p++) {
							var g = l + p * c;
							h.push({
								unit: f,
								pts: g,
								dts: g
							}),
							e.len += f.length
						}
						e.samples = h,
						this.remuxAudio(e, t, r)
					},
					e.prototype.remuxID3 = function(e, t) {
						var r = e.samples.length,
						n = void 0,
						i = e.inputTimeScale,
						a = this._initPTS,
						o = this._initDTS;
						if (r) {
							for (var s = 0; s < r; s++) n = e.samples[s],
							n.pts = (n.pts - a) / i,
							n.dts = (n.dts - o) / i;
							this.observer.trigger(S.a.FRAG_PARSING_METADATA, {
								samples: e.samples
							})
						}
						e.samples = [],
						t = t
					},
					e.prototype.remuxText = function(e, t) {
						e.samples.sort(function(e, t) {
							return e.pts - t.pts
						});
						var r = e.samples.length,
						n = void 0,
						i = e.inputTimeScale,
						a = this._initPTS;
						if (r) {
							for (var o = 0; o < r; o++) n = e.samples[o],
							n.pts = (n.pts - a) / i;
							this.observer.trigger(S.a.FRAG_PARSING_USERDATA, {
								samples: e.samples
							})
						}
						e.samples = [],
						t = t
					},
					e.prototype._PTSNormalize = function(e, t) {
						var r = void 0;
						if (void 0 === t) return e;
						for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
						return e
					},
					e
				} (),
				Q = X,
				J = function() {
					function e(t) {
						E(this, e),
						this.observer = t
					}
					return e.prototype.destroy = function() {},
					e.prototype.resetTimeStamp = function() {},
					e.prototype.resetInitSegment = function() {},
					e.prototype.remux = function(e, t, r, n, i, a, o, s) {
						var l = this.observer,
						u = "";
						e && (u += "audio"),
						t && (u += "video"),
						l.trigger(S.a.FRAG_PARSING_DATA, {
							data1: s,
							startPTS: i,
							startDTS: i,
							type: u,
							hasAudio: !!e,
							hasVideo: !!t,
							nb: 1,
							dropped: 0
						}),
						l.trigger(S.a.FRAG_PARSED)
					},
					e
				} (),
				$ = J,
				Z = Object(D.a)(),
				ee = Z.performance,
				te = function() {
					function e(t, r, n, i) {
						T(this, e),
						this.observer = t,
						this.typeSupported = r,
						this.config = n,
						this.vendor = i
					}
					return e.prototype.destroy = function() {
						var e = this.demuxer;
						e && e.destroy()
					},
					e.prototype.push = function(e, t, r, n, i, a, o, s, l, u, c, d) {
						if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
							var f = this.decrypter;
							null == f && (f = this.decrypter = new R.a(this.observer, this.config));
							var h = this,
							p = void 0;
							try {
								p = ee.now()
							} catch(e) {
								p = Date.now()
							}
							f.decrypt(e, t.key.buffer, t.iv.buffer,
							function(e) {
								var f = void 0;
								try {
									f = ee.now()
								} catch(e) {
									f = Date.now()
								}
								h.observer.trigger(S.a.FRAG_DECRYPTED, {
									stats: {
										tstart: p,
										tdecrypt: f
									}
								}),
								h.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, i, a, o, s, l, u, c, d)
							})
						} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, i, a, o, s, l, u, c, d)
					},
					e.prototype.pushDecrypted = function(e, t, r, n, i, a, o, s, l, u, c, d) {
						var f = this.demuxer;
						if (!f || (o || s) && !this.probe(e)) {
							for (var h = this.observer,
							p = this.typeSupported,
							g = this.config,
							v = [{
								demux: j,
								remux: Q
							},
							{
								demux: O.a,
								remux: $
							},
							{
								demux: C,
								remux: Q
							},
							{
								demux: H,
								remux: Q
							}], y = 0, m = v.length; y < m; y++) {
								var b = v[y],
								_ = b.demux.probe;
								if (_(e)) {
									var E = this.remuxer = new b.remux(h, g, p, this.vendor);
									f = new b.demux(h, E, g, p),
									this.probe = _;
									break
								}
							}
							if (!f) return void h.trigger(S.a.ERROR, {
								type: w.b.MEDIA_ERROR,
								details: w.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "no demux matching with content found"
							});
							this.demuxer = f
						}
						var T = this.remuxer; (o || s) && (f.resetInitSegment(r, n, i, u), T.resetInitSegment()),
						o && (f.resetTimeStamp(d), T.resetTimeStamp(d)),
						"function" == typeof f.setDecryptData && f.setDecryptData(t),
						f.append(e, a, l, c)
					},
					e
				} ();
				t.a = te
			},
			function(e, t, r) {
				"use strict";
				function n(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function i(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function a(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function o(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function s(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function l(e, t) {
					var r = St[t];
					return !! r && !0 === r[e.slice(0, 4)]
				}
				function u(e, t) {
					return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
				}
				function c(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function d(e, t) {
					for (var r = e[t], n = t - 1; n >= 0; n--) {
						var i = e[n];
						i.programDateTime = r.programDateTime - 1e3 * i.duration,
						r = i
					}
				}
				function f(e, t) {
					e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : t && t.programDateTime && (e.programDateTime = t.endProgramDateTime),
					Object(rt.a)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
				}
				function h(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function p(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function g(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function v(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function y(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function m(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function b(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function _(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function E(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function T(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function S(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function w(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function R(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function A() {
					if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
				}
				function L(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function D(e, t, r) {
					switch (t) {
					case "audio":
						e.audioGroupIds || (e.audioGroupIds = []),
						e.audioGroupIds.push(r);
						break;
					case "text":
						e.textGroupIds || (e.textGroupIds = []),
						e.textGroupIds.push(r)
					}
				}
				function k(e, t, r) {
					var n = e[t],
					i = e[r],
					a = i.startPTS;
					Object(rt.a)(a) ? r > t ? (n.duration = a - n.start, n.duration < 0 && it.b.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (i.duration = n.start - a, i.duration < 0 && it.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : i.start = r > t ? n.start + n.duration: Math.max(n.start - i.duration, 0)
				}
				function I(e, t, r, n, i, a) {
					var o = r;
					if (Object(rt.a)(t.startPTS)) {
						var s = Math.abs(t.startPTS - r);
						Object(rt.a)(t.deltaPTS) ? t.deltaPTS = Math.max(s, t.deltaPTS) : t.deltaPTS = s,
						o = Math.max(r, t.startPTS),
						r = Math.min(r, t.startPTS),
						n = Math.max(n, t.endPTS),
						i = Math.min(i, t.startDTS),
						a = Math.max(a, t.endDTS)
					}
					var l = r - t.start;
					t.start = t.startPTS = r,
					t.maxStartPTS = o,
					t.endPTS = n,
					t.startDTS = i,
					t.endDTS = a,
					t.duration = n - r;
					var u = t.sn;
					if (!e || u < e.startSN || u > e.endSN) return 0;
					var c = void 0,
					d = void 0,
					f = void 0;
					for (c = u - e.startSN, d = e.fragments, d[c] = t, f = c; f > 0; f--) k(d, f, f - 1);
					for (f = c; f < d.length - 1; f++) k(d, f, f + 1);
					return e.PTSKnown = !0,
					l
				}
				function C(e, t) {
					var r = Math.max(e.startSN, t.startSN) - t.startSN,
					n = Math.min(e.endSN, t.endSN) - t.startSN,
					i = t.startSN - e.startSN,
					a = e.fragments,
					o = t.fragments,
					s = 0,
					l = void 0;
					if (t.initSegment && e.initSegment && (t.initSegment = e.initSegment), n < r) return void(t.PTSKnown = !1);
					for (var u = r; u <= n; u++) {
						var c = a[i + u],
						d = o[u];
						d && c && (s = c.cc - d.cc, Object(rt.a)(c.startPTS) && (d.start = d.startPTS = c.startPTS, d.endPTS = c.endPTS, d.duration = c.duration, d.backtracked = c.backtracked, d.dropped = c.dropped, l = d))
					}
					if (s) for (it.b.log("discontinuity sliding from playlist, take drift into account"), u = 0; u < o.length; u++) o[u].cc += s;
					if (l) I(t, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
					else if (i >= 0 && i < a.length) {
						var f = a[i].start;
						for (u = 0; u < o.length; u++) o[u].start += f
					}
					t.PTSKnown = e.PTSKnown
				}
				function O(e, t) {
					for (var r = null,
					n = 0; n < e.length; n += 1) {
						var i = e[n];
						if (i && i.cc === t) {
							r = i;
							break
						}
					}
					return r
				}
				function P(e, t) {
					return qt.search(e,
					function(e) {
						return e.cc < t ? 1 : e.cc > t ? -1 : 0
					})
				}
				function x(e, t, r) {
					var n = !1;
					return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (n = !0),
					n
				}
				function M(e, t) {
					var r = e.fragments,
					n = t.fragments;
					if (!n.length || !r.length) return void it.b.log("No fragments to align");
					var i = O(r, n[0].cc);
					return ! i || i && !i.startPTS ? void it.b.log("No frag in previous level to align on") : i
				}
				function F(e, t) {
					t.fragments.forEach(function(t) {
						if (t) {
							var r = t.start + e;
							t.start = t.startPTS = r,
							t.endPTS = r + t.duration
						}
					}),
					t.PTSKnown = !0
				}
				function N(e, t, r) {
					U(e, r, t),
					!r.PTSKnown && t && B(r, t.details)
				}
				function U(e, t, r) {
					if (x(e, r, t)) {
						var n = M(r.details, t);
						n && (it.b.log("Adjusting PTS using last level due to CC increase within current level"), F(n.start, t))
					}
				}
				function B(e, t) {
					if (t && t.fragments.length) {
						if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
						var r = t.fragments[0].programDateTime,
						n = e.fragments[0].programDateTime,
						i = (n - r) / 1e3 + t.fragments[0].start;
						Object(rt.a)(i) && (it.b.log("adjusting PTS using programDateTime delta, sliding:" + i.toFixed(3)), F(i, e))
					}
				}
				function G(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function j(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function K(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function H(e, t, r) {
					if (!Array.isArray(e) || !e.length || !Object(rt.a)(t)) return null;
					if (t < e[0].programDateTime) return null;
					if (t >= e[e.length - 1].endProgramDateTime) return null;
					r = r || 0;
					for (var n = 0; n < e.length; ++n) {
						var i = e[n];
						if (V(t, r, i)) return i
					}
					return null
				}
				function W(e, t) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					i = e ? t[e.sn - t[0].sn + 1] : null;
					return i && !q(r, n, i) ? i: qt.search(t, q.bind(null, r, n))
				}
				function q() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					r = arguments[2],
					n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
					return r.start + r.duration - n <= e ? 1 : r.start - n > e && r.start ? -1 : 0
				}
				function V(e, t, r) {
					var n = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
					return r.endProgramDateTime - n > e
				}
				function Y(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function z(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function X(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Q(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function J(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function $(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Z(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function ee(e, t) {
					var r = null;
					try {
						r = new window.Event("addtrack")
					} catch(e) {
						r = document.createEvent("Event"),
						r.initEvent("addtrack", !1, !1)
					}
					r.track = e,
					t.dispatchEvent(r)
				}
				function te(e) {
					if (e && e.cues) for (; e.cues.length > 0;) e.removeCue(e.cues[0])
				}
				function re(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function ne(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function ie(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function ae() {
					var e = A(),
					t = window.SourceBuffer || window.WebKitSourceBuffer,
					r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
					n = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
					return !! r && !!n
				}
				function oe(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function se(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function le(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function ue(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function ce(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function de(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function fe(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function he(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function pe(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function ge(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function ve(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function ye(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function me(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function be(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function _e(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Ee(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Te(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Se(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function we(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Re(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Ae(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function Le() {
					this.window = window,
					this.state = "INITIAL",
					this.buffer = "",
					this.decoder = new rn,
					this.regionList = []
				}
				function De(e) {
					function t(e, t, r, n) {
						return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | n) / 1e3
					}
					var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
					return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
				}
				function ke() {
					this.values = Object.create(null)
				}
				function Ie(e, t, r, n) {
					var i = n ? e.split(n) : [e];
					for (var a in i) if ("string" == typeof i[a]) {
						var o = i[a].split(r);
						if (2 === o.length) {
							var s = o[0],
							l = o[1];
							t(s, l)
						}
					}
				}
				function Ce(e, t, r) {
					function n() {
						var t = De(e);
						if (null === t) throw new Error("Malformed timestamp: " + a);
						return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
						t
					}
					function i() {
						e = e.replace(/^\s+/, "")
					}
					var a = e;
					if (i(), t.startTime = n(), i(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + a);
					e = e.substr(3),
					i(),
					t.endTime = n(),
					i(),
					function(e, t) {
						var n = new ke;
						Ie(e,
						function(e, t) {
							switch (e) {
							case "region":
								for (var i = r.length - 1; i >= 0; i--) if (r[i].id === t) {
									n.set(e, r[i].region);
									break
								}
								break;
							case "vertical":
								n.alt(e, t, ["rl", "lr"]);
								break;
							case "line":
								var a = t.split(","),
								o = a[0];
								n.integer(e, o),
								n.percent(e, o) && n.set("snapToLines", !1),
								n.alt(e, o, ["auto"]),
								2 === a.length && n.alt("lineAlign", a[1], ["start", an, "end"]);
								break;
							case "position":
								a = t.split(","),
								n.percent(e, a[0]),
								2 === a.length && n.alt("positionAlign", a[1], ["start", an, "end", "line-left", "line-right", "auto"]);
								break;
							case "size":
								n.percent(e, t);
								break;
							case "align":
								n.alt(e, t, ["start", an, "end", "left", "right"])
							}
						},
						/:/, /\s/),
						t.region = n.get("region", null),
						t.vertical = n.get("vertical", "");
						var i = n.get("line", "auto");
						"auto" === i && -1 === nn.line && (i = -1),
						t.line = i,
						t.lineAlign = n.get("lineAlign", "start"),
						t.snapToLines = n.get("snapToLines", !0),
						t.size = n.get("size", 100),
						t.align = n.get("align", an);
						var a = n.get("position", "auto");
						"auto" === a && 50 === nn.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
						t.position = a
					} (e, t)
				}
				function Oe(e) {
					return e.replace(/<br(?: \/)?>/gi, "\n")
				}
				function Pe(e, t, r, n) {
					for (var i = void 0,
					a = void 0,
					o = void 0,
					s = void 0,
					l = void 0,
					u = window.VTTCue || window.TextTrackCue,
					c = 0; c < n.rows.length; c++) if (i = n.rows[c], o = !0, s = 0, l = "", !i.isEmpty()) {
						for (var d = 0; d < i.chars.length; d++) i.chars[d].uchar.match(/\s/) && o ? s++:(l += i.chars[d].uchar, o = !1);
						i.cueStartTime = t,
						t === r && (r += 1e-4),
						a = new u(t, r, Oe(l.trim())),
						s >= 16 ? s--:s++,
						navigator.userAgent.match(/Firefox\//) ? a.line = c + 1 : a.line = c > 7 ? c - 2 : c + 1,
						a.align = "left",
						a.position = Math.max(0, Math.min(100, s / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))),
						e.addCue(a)
					}
				}
				function xe(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Me(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Fe(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Ne(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Ue(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function Be(e, t) {
					return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
				}
				function Ge(e, t, r, n) {
					return Math.min(t, n) - Math.max(e, r)
				}
				function je(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Ke(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function He(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function We(e) {
					for (var t = [], r = 0; r < e.length; r++)"subtitles" === e[r].kind && t.push(e[r]);
					return t
				}
				function qe(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Ve(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Ye(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function ze(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				function Xe(e, t) {
					if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return ! t || "object" != typeof t && "function" != typeof t ? e: t
				}
				function Qe(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}
				function Je(e, t) {
					if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var $e = {};
				r.d($e, "newCue",
				function() {
					return Pe
				});
				var Ze = r(5),
				et = r.n(Ze),
				tt = r(2),
				rt = r(3),
				nt = r(1),
				it = r(0),
				at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(e) {
					return typeof e
				}: function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
				},
				ot = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"]),
				st = function() {
					function e(t) {
						n(this, e),
						this.hls = t,
						this.onEvent = this.onEvent.bind(this);
						for (var r = arguments.length,
						i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
						this.handledEvents = i,
						this.useGenericHandler = !0,
						this.registerListeners()
					}
					return e.prototype.destroy = function() {
						this.onHandlerDestroying(),
						this.unregisterListeners(),
						this.onHandlerDestroyed()
					},
					e.prototype.onHandlerDestroying = function() {},
					e.prototype.onHandlerDestroyed = function() {},
					e.prototype.isEventHandler = function() {
						return "object" === at(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
					},
					e.prototype.registerListeners = function() {
						this.isEventHandler() && this.handledEvents.forEach(function(e) {
							if (ot.has(e)) throw new Error("Forbidden event-name: " + e);
							this.hls.on(e, this.onEvent)
						},
						this)
					},
					e.prototype.unregisterListeners = function() {
						this.isEventHandler() && this.handledEvents.forEach(function(e) {
							this.hls.off(e, this.onEvent)
						},
						this)
					},
					e.prototype.onEvent = function(e, t) {
						this.onEventGeneric(e, t)
					},
					e.prototype.onEventGeneric = function(e, t) {
						var r = function(e, t) {
							var r = "on" + e.replace("hls", "");
							if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
							return this[r].bind(this, t)
						};
						try {
							r.call(this, e, t).call()
						} catch(t) {
							it.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
							this.hls.trigger(nt.a.ERROR, {
								type: tt.b.OTHER_ERROR,
								details: tt.a.INTERNAL_EXCEPTION,
								fatal: !1,
								event: e,
								err: t
							})
						}
					},
					e
				} (),
				lt = st,
				ut = r(9),
				ct = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				dt = function() {
					function e() {
						i(this, e),
						this.method = null,
						this.key = null,
						this.iv = null,
						this._uri = null
					}
					return ct(e, [{
						key: "uri",
						get: function() {
							return ! this._uri && this.reluri && (this._uri = et.a.buildAbsoluteURL(this.baseuri, this.reluri, {
								alwaysNormalize: !0
							})),
							this._uri
						}
					}]),
					e
				} (),
				ft = dt,
				ht = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				pt = function() {
					function e() {
						var t;
						a(this, e),
						this._url = null,
						this._byteRange = null,
						this._decryptdata = null,
						this.tagList = [],
						this.programDateTime = null,
						this.rawProgramDateTime = null,
						this._elementaryStreams = (t = {},
						t[e.ElementaryStreamTypes.AUDIO] = !1, t[e.ElementaryStreamTypes.VIDEO] = !1, t)
					}
					return e.prototype.addElementaryStream = function(e) {
						this._elementaryStreams[e] = !0
					},
					e.prototype.hasElementaryStream = function(e) {
						return ! 0 === this._elementaryStreams[e]
					},
					e.prototype.createInitializationVector = function(e) {
						for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
						return t
					},
					e.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
						var r = e;
						return e && e.method && e.uri && !e.iv && (r = new ft, r.method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)),
						r
					},
					ht(e, [{
						key: "url",
						get: function() {
							return ! this._url && this.relurl && (this._url = et.a.buildAbsoluteURL(this.baseurl, this.relurl, {
								alwaysNormalize: !0
							})),
							this._url
						},
						set: function(e) {
							this._url = e
						}
					},
					{
						key: "byteRange",
						get: function() {
							if (!this._byteRange && !this.rawByteRange) return [];
							if (this._byteRange) return this._byteRange;
							var e = [];
							if (this.rawByteRange) {
								var t = this.rawByteRange.split("@", 2);
								if (1 === t.length) {
									var r = this.lastByteRangeEndOffset;
									e[0] = r || 0
								} else e[0] = parseInt(t[1]);
								e[1] = parseInt(t[0]) + e[0],
								this._byteRange = e
							}
							return e
						}
					},
					{
						key: "byteRangeStartOffset",
						get: function() {
							return this.byteRange[0]
						}
					},
					{
						key: "byteRangeEndOffset",
						get: function() {
							return this.byteRange[1]
						}
					},
					{
						key: "decryptdata",
						get: function() {
							return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)),
							this._decryptdata
						}
					},
					{
						key: "endProgramDateTime",
						get: function() {
							if (!Object(rt.a)(this.programDateTime)) return null;
							var e = Object(rt.a)(this.duration) ? this.duration: 0;
							return this.programDateTime + 1e3 * e
						}
					},
					{
						key: "encrypted",
						get: function() {
							return ! (!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
						}
					}], [{
						key: "ElementaryStreamTypes",
						get: function() {
							return {
								AUDIO: "audio",
								VIDEO: "video"
							}
						}
					}]),
					e
				} (),
				gt = pt,
				vt = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				yt = function() {
					function e(t) {
						o(this, e),
						this.endCC = 0,
						this.endSN = 0,
						this.fragments = [],
						this.initSegment = null,
						this.live = !0,
						this.needSidxRanges = !1,
						this.startCC = 0,
						this.startSN = 0,
						this.startTimeOffset = null,
						this.targetduration = 0,
						this.totalduration = 0,
						this.type = null,
						this.url = t,
						this.version = null
					}
					return vt(e, [{
						key: "hasProgramDateTime",
						get: function() {
							return ! (!this.fragments[0] || !Object(rt.a)(this.fragments[0].programDateTime))
						}
					}]),
					e
				} (),
				mt = yt,
				bt = /^(\d+)x(\d+)$/,
				_t = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
				Et = function() {
					function e(t) {
						s(this, e),
						"string" == typeof t && (t = e.parseAttrList(t));
						for (var r in t) t.hasOwnProperty(r) && (this[r] = t[r])
					}
					return e.prototype.decimalInteger = function(e) {
						var t = parseInt(this[e], 10);
						return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
					},
					e.prototype.hexadecimalInteger = function(e) {
						if (this[e]) {
							var t = (this[e] || "0x").slice(2);
							t = (1 & t.length ? "0": "") + t;
							for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
							return r
						}
						return null
					},
					e.prototype.hexadecimalIntegerAsNumber = function(e) {
						var t = parseInt(this[e], 16);
						return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
					},
					e.prototype.decimalFloatingPoint = function(e) {
						return parseFloat(this[e])
					},
					e.prototype.enumeratedString = function(e) {
						return this[e]
					},
					e.prototype.decimalResolution = function(e) {
						var t = bt.exec(this[e]);
						if (null !== t) return {
							width: parseInt(t[1], 10),
							height: parseInt(t[2], 10)
						}
					},
					e.parseAttrList = function(e) {
						var t = void 0,
						r = {};
						for (_t.lastIndex = 0; null !== (t = _t.exec(e));) {
							var n = t[2];
							0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)),
							r[t[1]] = n
						}
						return r
					},
					e
				} (),
				Tt = Et,
				St = {
					audio: {
						a3ds: !0,
						"ac-3": !0,
						"ac-4": !0,
						alac: !0,
						alaw: !0,
						dra1: !0,
						"dts+": !0,
						"dts-": !0,
						dtsc: !0,
						dtse: !0,
						dtsh: !0,
						"ec-3": !0,
						enca: !0,
						g719: !0,
						g726: !0,
						m4ae: !0,
						mha1: !0,
						mha2: !0,
						mhm1: !0,
						mhm2: !0,
						mlpa: !0,
						mp4a: !0,
						"raw ": !0,
						Opus: !0,
						samr: !0,
						sawb: !0,
						sawp: !0,
						sevc: !0,
						sqcp: !0,
						ssmv: !0,
						twos: !0,
						ulaw: !0
					},
					video: {
						avc1: !0,
						avc2: !0,
						avc3: !0,
						avc4: !0,
						avcp: !0,
						drac: !0,
						dvav: !0,
						dvhe: !0,
						encv: !0,
						hev1: !0,
						hvc1: !0,
						mjp2: !0,
						mp4v: !0,
						mvc1: !0,
						mvc2: !0,
						mvc3: !0,
						mvc4: !0,
						resv: !0,
						rv60: !0,
						s263: !0,
						svc1: !0,
						svc2: !0,
						"vc-1": !0,
						vp08: !0,
						vp09: !0
					}
				},
				wt = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
				Rt = /#EXT-X-MEDIA:(.*)/g,
				At = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
				Lt = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
				Dt = /\.(mp4|m4s|m4v|m4a)$/i,
				kt = function() {
					function e() {
						c(this, e)
					}
					return e.findGroup = function(e, t) {
						if (!e) return null;
						for (var r = null,
						n = 0; n < e.length; n++) {
							var i = e[n];
							i.id === t && (r = i)
						}
						return r
					},
					e.convertAVC1ToAVCOTI = function(e) {
						var t = void 0,
						r = e.split(".");
						return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr( - 4)) : t = e,
						t
					},
					e.resolve = function(e, t) {
						return et.a.buildAbsoluteURL(t, e, {
							alwaysNormalize: !0
						})
					},
					e.parseMasterPlaylist = function(t, r) {
						var n = [],
						i = void 0;
						for (wt.lastIndex = 0; null != (i = wt.exec(t));) {
							var a = {},
							o = a.attrs = new Tt(i[1]);
							a.url = e.resolve(i[2], r);
							var s = o.decimalResolution("RESOLUTION");
							s && (a.width = s.width, a.height = s.height),
							a.bitrate = o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
							a.name = o.NAME,
							function(e, t) { ["video", "audio"].forEach(function(r) {
									var n = e.filter(function(e) {
										return l(e, r)
									});
									if (n.length) {
										var i = n.filter(function(e) {
											return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
										});
										t[r + "Codec"] = i.length > 0 ? i[0] : n[0],
										e = e.filter(function(e) {
											return - 1 === n.indexOf(e)
										})
									}
								}),
								t.unknownCodecs = e
							} ([].concat((o.CODECS || "").split(/[ ,]+/)), a),
							a.videoCodec && -1 !== a.videoCodec.indexOf("avc1") && (a.videoCodec = e.convertAVC1ToAVCOTI(a.videoCodec)),
							n.push(a)
						}
						return n
					},
					e.parseMasterPlaylistMedia = function(t, r, n) {
						var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
						a = void 0,
						o = [],
						s = 0;
						for (Rt.lastIndex = 0; null !== (a = Rt.exec(t));) {
							var l = {},
							u = new Tt(a[1]);
							if (u.TYPE === n) {
								if (l.groupId = u["GROUP-ID"], l.name = u.NAME, l.type = n, l.
							default = "YES" === u.DEFAULT, l.autoselect = "YES" === u.AUTOSELECT, l.forced = "YES" === u.FORCED, u.URI && (l.url = e.resolve(u.URI, r)), l.lang = u.LANGUAGE, l.name || (l.name = l.lang), i.length) {
									var c = e.findGroup(i, l.groupId);
									l.audioCodec = c ? c.codec: i[0].codec
								}
								l.id = s++,
								o.push(l)
							}
						}
						return o
					},
					e.parseLevelPlaylist = function(e, t, r, n, i) {
						var a = 0,
						o = 0,
						s = new mt(t),
						l = new ft,
						u = 0,
						c = null,
						h = new gt,
						p = void 0,
						g = void 0,
						v = null;
						for (At.lastIndex = 0; null !== (p = At.exec(e));) {
							var y = p[1];
							if (y) {
								h.duration = parseFloat(y);
								var m = (" " + p[2]).slice(1);
								h.title = m || null,
								h.tagList.push(m ? ["INF", y, m] : ["INF", y])
							} else if (p[3]) {
								if (Object(rt.a)(h.duration)) {
									var b = a++;
									h.type = n,
									h.start = o,
									h.levelkey = l,
									h.sn = b,
									h.level = r,
									h.cc = u,
									h.urlId = i,
									h.baseurl = t,
									h.relurl = (" " + p[3]).slice(1),
									f(h, c),
									s.fragments.push(h),
									c = h,
									o += h.duration,
									h = new gt
								}
							} else if (p[4]) {
								if (h.rawByteRange = (" " + p[4]).slice(1), c) {
									var _ = c.byteRangeEndOffset;
									_ && (h.lastByteRangeEndOffset = _)
								}
							} else if (p[5]) h.rawProgramDateTime = (" " + p[5]).slice(1),
							h.tagList.push(["PROGRAM-DATE-TIME", h.rawProgramDateTime]),
							null === v && (v = s.fragments.length);
							else {
								for (p = p[0].match(Lt), g = 1; g < p.length && void 0 === p[g]; g++);
								var E = (" " + p[g + 1]).slice(1),
								T = (" " + p[g + 2]).slice(1);
								switch (p[g]) {
								case "#":
									h.tagList.push(T ? [E, T] : [E]);
									break;
								case "PLAYLIST-TYPE":
									s.type = E.toUpperCase();
									break;
								case "MEDIA-SEQUENCE":
									a = s.startSN = parseInt(E);
									break;
								case "TARGETDURATION":
									s.targetduration = parseFloat(E);
									break;
								case "VERSION":
									s.version = parseInt(E);
									break;
								case "EXTM3U":
									break;
								case "ENDLIST":
									s.live = !1;
									break;
								case "DIS":
									u++,
									h.tagList.push(["DIS"]);
									break;
								case "DISCONTINUITY-SEQ":
									u = parseInt(E);
									break;
								case "KEY":
									var S = E,
									w = new Tt(S),
									R = w.enumeratedString("METHOD"),
									A = w.URI,
									L = w.hexadecimalInteger("IV");
									R && (l = new ft, A && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(R) >= 0 && (l.method = R, l.baseuri = t, l.reluri = A, l.key = null, l.iv = L));
									break;
								case "START":
									var D = E,
									k = new Tt(D),
									I = k.decimalFloatingPoint("TIME-OFFSET");
									Object(rt.a)(I) && (s.startTimeOffset = I);
									break;
								case "MAP":
									var C = new Tt(E);
									h.relurl = C.URI,
									h.rawByteRange = C.BYTERANGE,
									h.baseurl = t,
									h.level = r,
									h.type = n,
									h.sn = "initSegment",
									s.initSegment = h,
									h = new gt,
									h.rawProgramDateTime = s.initSegment.rawProgramDateTime;
									break;
								default:
									it.b.warn("line parsed but not handled: " + p)
								}
							}
						}
						return h = c,
						h && !h.relurl && (s.fragments.pop(), o -= h.duration),
						s.totalduration = o,
						s.averagetargetduration = o / s.fragments.length,
						s.endSN = a - 1,
						s.startCC = s.fragments[0] ? s.fragments[0].cc: 0,
						s.endCC = u,
						!s.initSegment && s.fragments.length && s.fragments.every(function(e) {
							return Dt.test(e.relurl)
						}) && (it.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), h = new gt, h.relurl = s.fragments[0].relurl, h.baseurl = t, h.level = r, h.type = n, h.sn = "initSegment", s.initSegment = h, s.needSidxRanges = !0),
						v && d(s.fragments, v),
						s
					},
					e
				} (),
				It = kt,
				Ct = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Ot = window,
				Pt = Ot.performance,
				xt = {
					MANIFEST: "manifest",
					LEVEL: "level",
					AUDIO_TRACK: "audioTrack",
					SUBTITLE_TRACK: "subtitleTrack"
				},
				Mt = {
					MAIN: "main",
					AUDIO: "audio",
					SUBTITLE: "subtitle"
				},
				Ft = function(e) {
					function t(r) {
						h(this, t);
						var n = p(this, e.call(this, r, nt.a.MANIFEST_LOADING, nt.a.LEVEL_LOADING, nt.a.AUDIO_TRACK_LOADING, nt.a.SUBTITLE_TRACK_LOADING));
						return n.loaders = {},
						n
					}
					return g(t, e),
					t.canHaveQualityLevels = function(e) {
						return e !== xt.AUDIO_TRACK && e !== xt.SUBTITLE_TRACK
					},
					t.mapContextToLevelType = function(e) {
						switch (e.type) {
						case xt.AUDIO_TRACK:
							return Mt.AUDIO;
						case xt.SUBTITLE_TRACK:
							return Mt.SUBTITLE;
						default:
							return Mt.MAIN
						}
					},
					t.getResponseUrl = function(e, t) {
						var r = e.url;
						return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url),
						r
					},
					t.prototype.createInternalLoader = function(e) {
						var t = this.hls.config,
						r = t.pLoader,
						n = t.loader,
						i = r || n,
						a = new i(t);
						return e.loader = a,
						this.loaders[e.type] = a,
						a
					},
					t.prototype.getInternalLoader = function(e) {
						return this.loaders[e.type]
					},
					t.prototype.resetInternalLoader = function(e) {
						this.loaders[e] && delete this.loaders[e]
					},
					t.prototype.destroyInternalLoaders = function() {
						for (var e in this.loaders) {
							var t = this.loaders[e];
							t && t.destroy(),
							this.resetInternalLoader(e)
						}
					},
					t.prototype.destroy = function() {
						this.destroyInternalLoaders(),
						e.prototype.destroy.call(this)
					},
					t.prototype.onManifestLoading = function(e) {
						this.load(e.url, {
							type: xt.MANIFEST,
							level: 0,
							id: null
						})
					},
					t.prototype.onLevelLoading = function(e) {
						this.load(e.url, {
							type: xt.LEVEL,
							level: e.level,
							id: e.id
						})
					},
					t.prototype.onAudioTrackLoading = function(e) {
						this.load(e.url, {
							type: xt.AUDIO_TRACK,
							level: null,
							id: e.id
						})
					},
					t.prototype.onSubtitleTrackLoading = function(e) {
						this.load(e.url, {
							type: xt.SUBTITLE_TRACK,
							level: null,
							id: e.id
						})
					},
					t.prototype.load = function(e, t) {
						var r = this.hls.config;
						it.b.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
						var n = this.getInternalLoader(t);
						if (n) {
							var i = n.context;
							if (i && i.url === e) return it.b.trace("playlist request ongoing"),
							!1;
							it.b.warn("aborting previous loader for type: " + t.type),
							n.abort()
						}
						var a = void 0,
						o = void 0,
						s = void 0,
						l = void 0;
						switch (t.type) {
						case xt.MANIFEST:
							a = r.manifestLoadingMaxRetry,
							o = r.manifestLoadingTimeOut,
							s = r.manifestLoadingRetryDelay,
							l = r.manifestLoadingMaxRetryTimeout;
							break;
						case xt.LEVEL:
							a = 0,
							o = r.levelLoadingTimeOut;
							break;
						default:
							a = r.levelLoadingMaxRetry,
							o = r.levelLoadingTimeOut,
							s = r.levelLoadingRetryDelay,
							l = r.levelLoadingMaxRetryTimeout
						}
						n = this.createInternalLoader(t),
						t.url = e,
						t.responseType = t.responseType || "";
						var u = {
							timeout: o,
							maxRetry: a,
							retryDelay: s,
							maxRetryDelay: l
						},
						c = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this)
						};
						return it.b.debug("Calling internal loader delegate for URL: " + e),
						n.load(t, u, c),
						!0
					},
					t.prototype.loadsuccess = function(e, t, r) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
						if (r.isSidxRequest) return this._handleSidxRequest(e, r),
						void this._handlePlaylistLoaded(e, t, r, n);
						this.resetInternalLoader(r.type);
						var i = e.data;
						if (t.tload = Pt.now(), 0 !== i.indexOf("#EXTM3U")) return void this._handleManifestParsingError(e, r, "no EXTM3U delimiter", n);
						i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, n) : this._handleMasterPlaylist(e, t, r, n)
					},
					t.prototype.loaderror = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
						this._handleNetworkError(t, r)
					},
					t.prototype.loadtimeout = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
						this._handleNetworkError(t, r, !0)
					},
					t.prototype._handleMasterPlaylist = function(e, r, n, i) {
						var a = this.hls,
						o = e.data,
						s = t.getResponseUrl(e, n),
						l = It.parseMasterPlaylist(o, s);
						if (!l.length) return void this._handleManifestParsingError(e, n, "no level found in manifest", i);
						var u = l.map(function(e) {
							return {
								id: e.attrs.AUDIO,
								codec: e.audioCodec
							}
						}),
						c = It.parseMasterPlaylistMedia(o, s, "AUDIO", u),
						d = It.parseMasterPlaylistMedia(o, s, "SUBTITLES");
						if (c.length) {
							var f = !1;
							c.forEach(function(e) {
								e.url || (f = !0)
							}),
							!1 === f && l[0].audioCodec && !l[0].attrs.AUDIO && (it.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), c.unshift({
								type: "main",
								name: "main"
							}))
						}
						a.trigger(nt.a.MANIFEST_LOADED, {
							levels: l,
							audioTracks: c,
							subtitles: d,
							url: s,
							stats: r,
							networkDetails: i
						})
					},
					t.prototype._handleTrackOrLevelPlaylist = function(e, r, n, i) {
						var a = this.hls,
						o = n.id,
						s = n.level,
						l = n.type,
						u = t.getResponseUrl(e, n),
						c = Object(rt.a)(o) ? o: 0,
						d = Object(rt.a)(s) ? s: c,
						f = t.mapContextToLevelType(n),
						h = It.parseLevelPlaylist(e.data, u, d, f, c);
						if (h.tload = r.tload, l === xt.MANIFEST) {
							var p = {
								url: u,
								details: h
							};
							a.trigger(nt.a.MANIFEST_LOADED, {
								levels: [p],
								audioTracks: [],
								url: u,
								stats: r,
								networkDetails: i
							})
						}
						if (r.tparsed = Pt.now(), h.needSidxRanges) {
							var g = h.initSegment.url;
							return void this.load(g, {
								isSidxRequest: !0,
								type: l,
								level: s,
								levelDetails: h,
								id: o,
								rangeStart: 0,
								rangeEnd: 2048,
								responseType: "arraybuffer"
							})
						}
						n.levelDetails = h,
						this._handlePlaylistLoaded(e, r, n, i)
					},
					t.prototype._handleSidxRequest = function(e, t) {
						var r = ut.a.parseSegmentIndex(new Uint8Array(e.data));
						r.references.forEach(function(e, r) {
							var n = e.info,
							i = t.levelDetails.fragments[r];
							0 === i.byteRange.length && (i.rawByteRange = String(1 + n.end - n.start) + "@" + String(n.start))
						}),
						t.levelDetails.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
					},
					t.prototype._handleManifestParsingError = function(e, t, r, n) {
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: tt.a.MANIFEST_PARSING_ERROR,
							fatal: !0,
							url: e.url,
							reason: r,
							networkDetails: n
						})
					},
					t.prototype._handleNetworkError = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						it.b.info("A network error occured while loading a " + e.type + "-type playlist");
						var n = void 0,
						i = void 0,
						a = this.getInternalLoader(e);
						switch (e.type) {
						case xt.MANIFEST:
							n = r ? tt.a.MANIFEST_LOAD_TIMEOUT: tt.a.MANIFEST_LOAD_ERROR,
							i = !0;
							break;
						case xt.LEVEL:
							n = r ? tt.a.LEVEL_LOAD_TIMEOUT: tt.a.LEVEL_LOAD_ERROR,
							i = !1;
							break;
						case xt.AUDIO_TRACK:
							n = r ? tt.a.AUDIO_TRACK_LOAD_TIMEOUT: tt.a.AUDIO_TRACK_LOAD_ERROR,
							i = !1;
							break;
						default:
							i = !1
						}
						a && (a.abort(), this.resetInternalLoader(e.type)),
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: n,
							fatal: i,
							url: a.url,
							loader: a,
							context: e,
							networkDetails: t
						})
					},
					t.prototype._handlePlaylistLoaded = function(e, r, n, i) {
						var a = n.type,
						o = n.level,
						s = n.id,
						l = n.levelDetails;
						if (!l.targetduration) return void this._handleManifestParsingError(e, n, "invalid target duration", i);
						if (t.canHaveQualityLevels(n.type)) this.hls.trigger(nt.a.LEVEL_LOADED, {
							details: l,
							level: o || 0,
							id: s || 0,
							stats: r,
							networkDetails: i
						});
						else switch (a) {
						case xt.AUDIO_TRACK:
							this.hls.trigger(nt.a.AUDIO_TRACK_LOADED, {
								details: l,
								id: s,
								stats: r,
								networkDetails: i
							});
							break;
						case xt.SUBTITLE_TRACK:
							this.hls.trigger(nt.a.SUBTITLE_TRACK_LOADED, {
								details: l,
								id: s,
								stats: r,
								networkDetails: i
							})
						}
					},
					Ct(t, null, [{
						key: "ContextType",
						get: function() {
							return xt
						}
					},
					{
						key: "LevelType",
						get: function() {
							return Mt
						}
					}]),
					t
				} (lt),
				Nt = Ft,
				Ut = function(e) {
					function t(r) {
						v(this, t);
						var n = y(this, e.call(this, r, nt.a.FRAG_LOADING));
						return n.loaders = {},
						n
					}
					return m(t, e),
					t.prototype.destroy = function() {
						var t = this.loaders;
						for (var r in t) {
							var n = t[r];
							n && n.destroy()
						}
						this.loaders = {},
						e.prototype.destroy.call(this)
					},
					t.prototype.onFragLoading = function(e) {
						var t = e.frag,
						r = t.type,
						n = this.loaders,
						i = this.hls.config,
						a = i.fLoader,
						o = i.loader;
						t.loaded = 0;
						var s = n[r];
						s && (it.b.warn("abort previous fragment loader for type: " + r), s.abort()),
						s = n[r] = t.loader = i.fLoader ? new a(i) : new o(i);
						var l = void 0,
						u = void 0,
						c = void 0;
						l = {
							url: t.url,
							frag: t,
							responseType: "arraybuffer",
							progressData: !1
						};
						var d = t.byteRangeStartOffset,
						f = t.byteRangeEndOffset;
						Object(rt.a)(d) && Object(rt.a)(f) && (l.rangeStart = d, l.rangeEnd = f),
						u = {
							timeout: i.fragLoadingTimeOut,
							maxRetry: 0,
							retryDelay: 0,
							maxRetryDelay: i.fragLoadingMaxRetryTimeout
						},
						c = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this),
							onProgress: this.loadprogress.bind(this)
						},
						s.load(l, u, c)
					},
					t.prototype.loadsuccess = function(e, t, r) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
						i = e.data,
						a = r.frag;
						a.loader = void 0,
						this.loaders[a.type] = void 0,
						this.hls.trigger(nt.a.FRAG_LOADED, {
							payload: i,
							frag: a,
							stats: t,
							networkDetails: n
						})
					},
					t.prototype.loaderror = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
						n = t.frag,
						i = n.loader;
						i && i.abort(),
						this.loaders[n.type] = void 0,
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: tt.a.FRAG_LOAD_ERROR,
							fatal: !1,
							frag: t.frag,
							response: e,
							networkDetails: r
						})
					},
					t.prototype.loadtimeout = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
						n = t.frag,
						i = n.loader;
						i && i.abort(),
						this.loaders[n.type] = void 0,
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: tt.a.FRAG_LOAD_TIMEOUT,
							fatal: !1,
							frag: t.frag,
							networkDetails: r
						})
					},
					t.prototype.loadprogress = function(e, t, r) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
						i = t.frag;
						i.loaded = e.loaded,
						this.hls.trigger(nt.a.FRAG_LOAD_PROGRESS, {
							frag: i,
							stats: e,
							networkDetails: n
						})
					},
					t
				} (lt),
				Bt = Ut,
				Gt = function(e) {
					function t(r) {
						b(this, t);
						var n = _(this, e.call(this, r, nt.a.KEY_LOADING));
						return n.loaders = {},
						n.decryptkey = null,
						n.decrypturl = null,
						n
					}
					return E(t, e),
					t.prototype.destroy = function() {
						for (var e in this.loaders) {
							var t = this.loaders[e];
							t && t.destroy()
						}
						this.loaders = {},
						lt.prototype.destroy.call(this)
					},
					t.prototype.onKeyLoading = function(e) {
						var t = e.frag,
						r = t.type,
						n = this.loaders[r],
						i = t.decryptdata,
						a = i.uri;
						if (a !== this.decrypturl || null === this.decryptkey) {
							var o = this.hls.config;
							n && (it.b.warn("abort previous key loader for type:" + r), n.abort()),
							t.loader = this.loaders[r] = new o.loader(o),
							this.decrypturl = a,
							this.decryptkey = null;
							var s = void 0,
							l = void 0,
							u = void 0;
							s = {
								url: a,
								frag: t,
								responseType: "arraybuffer"
							},
							l = {
								timeout: o.fragLoadingTimeOut,
								maxRetry: o.fragLoadingMaxRetry,
								retryDelay: o.fragLoadingRetryDelay,
								maxRetryDelay: o.fragLoadingMaxRetryTimeout
							},
							u = {
								onSuccess: this.loadsuccess.bind(this),
								onError: this.loaderror.bind(this),
								onTimeout: this.loadtimeout.bind(this)
							},
							t.loader.load(s, l, u)
						} else this.decryptkey && (i.key = this.decryptkey, this.hls.trigger(nt.a.KEY_LOADED, {
							frag: t
						}))
					},
					t.prototype.loadsuccess = function(e, t, r) {
						var n = r.frag;
						this.decryptkey = n.decryptdata.key = new Uint8Array(e.data),
						n.loader = void 0,
						this.loaders[n.type] = void 0,
						this.hls.trigger(nt.a.KEY_LOADED, {
							frag: n
						})
					},
					t.prototype.loaderror = function(e, t) {
						var r = t.frag,
						n = r.loader;
						n && n.abort(),
						this.loaders[t.type] = void 0,
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: tt.a.KEY_LOAD_ERROR,
							fatal: !1,
							frag: r,
							response: e
						})
					},
					t.prototype.loadtimeout = function(e, t) {
						var r = t.frag,
						n = r.loader;
						n && n.abort(),
						this.loaders[t.type] = void 0,
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.NETWORK_ERROR,
							details: tt.a.KEY_LOAD_TIMEOUT,
							fatal: !1,
							frag: r
						})
					},
					t
				} (lt),
				jt = Gt,
				Kt = {
					NOT_LOADED: "NOT_LOADED",
					APPENDING: "APPENDING",
					PARTIAL: "PARTIAL",
					OK: "OK"
				},
				Ht = function(e) {
					function t(r) {
						T(this, t);
						var n = S(this, e.call(this, r, nt.a.BUFFER_APPENDED, nt.a.FRAG_BUFFERED, nt.a.FRAG_LOADED));
						return n.bufferPadding = .2,
						n.fragments = Object.create(null),
						n.timeRanges = Object.create(null),
						n.config = r.config,
						n
					}
					return w(t, e),
					t.prototype.destroy = function() {
						this.fragments = null,
						this.timeRanges = null,
						this.config = null,
						lt.prototype.destroy.call(this),
						e.prototype.destroy.call(this)
					},
					t.prototype.getBufferedFrag = function(e, t) {
						var r = this.fragments,
						n = Object.keys(r).filter(function(n) {
							var i = r[n];
							if (i.body.type !== t) return ! 1;
							if (!i.buffered) return ! 1;
							var a = i.body;
							return a.startPTS <= e && e <= a.endPTS
						});
						if (0 === n.length) return null;
						var i = n.pop();
						return r[i].body
					},
					t.prototype.detectEvictedFragments = function(e, t) {
						var r = this,
						n = void 0,
						i = void 0;
						Object.keys(this.fragments).forEach(function(a) {
							var o = r.fragments[a];
							if (!0 === o.buffered) {
								var s = o.range[e];
								if (s) {
									n = s.time;
									for (var l = 0; l < n.length; l++) if (i = n[l], !1 === r.isTimeBuffered(i.startPTS, i.endPTS, t)) {
										r.removeFragment(o.body);
										break
									}
								}
							}
						})
					},
					t.prototype.detectPartialFragments = function(e) {
						var t = this,
						r = this.getFragmentKey(e),
						n = this.fragments[r];
						n && (n.buffered = !0, Object.keys(this.timeRanges).forEach(function(r) {
							if (e.hasElementaryStream(r)) {
								var i = t.timeRanges[r];
								n.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, i)
							}
						}))
					},
					t.prototype.getBufferedTimes = function(e, t, r) {
						for (var n = [], i = void 0, a = void 0, o = !1, s = 0; s < r.length; s++) {
							if (i = r.start(s) - this.bufferPadding, a = r.end(s) + this.bufferPadding, e >= i && t <= a) {
								n.push({
									startPTS: Math.max(e, r.start(s)),
									endPTS: Math.min(t, r.end(s))
								});
								break
							}
							if (e < a && t > i) n.push({
								startPTS: Math.max(e, r.start(s)),
								endPTS: Math.min(t, r.end(s))
							}),
							o = !0;
							else if (t <= i) break
						}
						return {
							time: n,
							partial: o
						}
					},
					t.prototype.getFragmentKey = function(e) {
						return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
					},
					t.prototype.getPartialFragment = function(e) {
						var t = this,
						r = void 0,
						n = void 0,
						i = void 0,
						a = null,
						o = 0;
						return Object.keys(this.fragments).forEach(function(s) {
							var l = t.fragments[s];
							t.isPartial(l) && (n = l.body.startPTS - t.bufferPadding, i = l.body.endPTS + t.bufferPadding, e >= n && e <= i && (r = Math.min(e - n, i - e), o <= r && (a = l.body, o = r)))
						}),
						a
					},
					t.prototype.getState = function(e) {
						var t = this.getFragmentKey(e),
						r = this.fragments[t],
						n = Kt.NOT_LOADED;
						return void 0 !== r && (n = r.buffered ? !0 === this.isPartial(r) ? Kt.PARTIAL: Kt.OK: Kt.APPENDING),
						n
					},
					t.prototype.isPartial = function(e) {
						return ! 0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
					},
					t.prototype.isTimeBuffered = function(e, t, r) {
						for (var n = void 0,
						i = void 0,
						a = 0; a < r.length; a++) {
							if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, e >= n && t <= i) return ! 0;
							if (t <= n) return ! 1
						}
						return ! 1
					},
					t.prototype.onFragLoaded = function(e) {
						var t = e.frag;
						Object(rt.a)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
							body: t,
							range: Object.create(null),
							buffered: !1
						})
					},
					t.prototype.onBufferAppended = function(e) {
						var t = this;
						this.timeRanges = e.timeRanges,
						Object.keys(this.timeRanges).forEach(function(e) {
							var r = t.timeRanges[e];
							t.detectEvictedFragments(e, r)
						})
					},
					t.prototype.onFragBuffered = function(e) {
						this.detectPartialFragments(e.frag)
					},
					t.prototype.hasFragment = function(e) {
						var t = this.getFragmentKey(e);
						return void 0 !== this.fragments[t]
					},
					t.prototype.removeFragment = function(e) {
						var t = this.getFragmentKey(e);
						delete this.fragments[t]
					},
					t.prototype.removeAllFragments = function() {
						this.fragments = Object.create(null)
					},
					t
				} (lt),
				Wt = {
					search: function(e, t) {
						for (var r = 0,
						n = e.length - 1,
						i = null,
						a = null; r <= n;) {
							i = (r + n) / 2 | 0,
							a = e[i];
							var o = t(a);
							if (o > 0) r = i + 1;
							else {
								if (! (o < 0)) return a;
								n = i - 1
							}
						}
						return null
					}
				},
				qt = Wt,
				Vt = function() {
					function e() {
						R(this, e)
					}
					return e.isBuffered = function(e, t) {
						try {
							if (e) for (var r = e.buffered,
							n = 0; n < r.length; n++) if (t >= r.start(n) && t <= r.end(n)) return ! 0
						} catch(e) {}
						return ! 1
					},
					e.bufferInfo = function(e, t, r) {
						try {
							if (e) {
								var n = e.buffered,
								i = [],
								a = void 0;
								for (a = 0; a < n.length; a++) i.push({
									start: n.start(a),
									end: n.end(a)
								});
								return this.bufferedInfo(i, t, r)
							}
						} catch(e) {}
						return {
							len: 0,
							start: t,
							end: t,
							nextStart: void 0
						}
					},
					e.bufferedInfo = function(e, t, r) {
						var n = [],
						i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = void 0;
						for (e.sort(function(e, t) {
							var r = e.start - t.start;
							return r || t.end - e.end
						}), l = 0; l < e.length; l++) {
							var u = n.length;
							if (u) {
								var c = n[u - 1].end;
								e[l].start - c < r ? e[l].end > c && (n[u - 1].end = e[l].end) : n.push(e[l])
							} else n.push(e[l])
						}
						for (l = 0, i = 0, a = o = t; l < n.length; l++) {
							var d = n[l].start,
							f = n[l].end;
							if (t + r >= d && t < f) a = d,
							o = f,
							i = o - t;
							else if (t + r < d) {
								s = d;
								break
							}
						}
						return {
							len: i,
							start: a,
							end: o,
							nextStart: s
						}
					},
					e
				} (),
				Yt = r(7),
				zt = r.n(Yt),
				Xt = r(12),
				Qt = r.n(Xt),
				Jt = r(10),
				$t = r(4),
				Zt = Object($t.a)(),
				er = A(),
				tr = function() {
					function e(t, r) {
						L(this, e),
						this.hls = t,
						this.id = r;
						var n = this.observer = new zt.a,
						i = t.config;
						n.trigger = function(e) {
							for (var t = arguments.length,
							r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
							n.emit.apply(n, [e, e].concat(r))
						},
						n.off = function(e) {
							for (var t = arguments.length,
							r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
							n.removeListener.apply(n, [e].concat(r))
						};
						var a = function(e, r) {
							r = r || {},
							r.frag = this.frag,
							r.id = this.id,
							t.trigger(e, r)
						}.bind(this);
						n.on(nt.a.FRAG_DECRYPTED, a),
						n.on(nt.a.FRAG_PARSING_INIT_SEGMENT, a),
						n.on(nt.a.FRAG_PARSING_DATA, a),
						n.on(nt.a.FRAG_PARSED, a),
						n.on(nt.a.ERROR, a),
						n.on(nt.a.FRAG_PARSING_METADATA, a),
						n.on(nt.a.FRAG_PARSING_USERDATA, a),
						n.on(nt.a.INIT_PTS_FOUND, a);
						var o = {
							mp4: er.isTypeSupported("video/mp4"),
							mpeg: er.isTypeSupported("audio/mpeg"),
							mp3: er.isTypeSupported('audio/mp4; codecs="mp3"')
						},
						s = navigator.vendor;
						if (i.enableWorker && "undefined" != typeof Worker) {
							it.b.log("demuxing in webworker");
							var l = void 0;
							try {
								l = this.w = Qt()(13),
								this.onwmsg = this.onWorkerMessage.bind(this),
								l.addEventListener("message", this.onwmsg),
								l.onerror = function(e) {
									t.trigger(nt.a.ERROR, {
										type: tt.b.OTHER_ERROR,
										details: tt.a.INTERNAL_EXCEPTION,
										fatal: !0,
										event: "demuxerWorker",
										err: {
											message: e.message + " (" + e.filename + ":" + e.lineno + ")"
										}
									})
								},
								l.postMessage({
									cmd: "init",
									typeSupported: o,
									vendor: s,
									id: r,
									config: JSON.stringify(i)
								})
							} catch(e) {
								it.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),
								l && Zt.URL.revokeObjectURL(l.objectURL),
								this.demuxer = new Jt.a(n, o, i, s),
								this.w = void 0
							}
						} else this.demuxer = new Jt.a(n, o, i, s)
					}
					return e.prototype.destroy = function() {
						var e = this.w;
						if (e) e.removeEventListener("message", this.onwmsg),
						e.terminate(),
						this.w = null;
						else {
							var t = this.demuxer;
							t && (t.destroy(), this.demuxer = null)
						}
						var r = this.observer;
						r && (r.removeAllListeners(), this.observer = null)
					},
					e.prototype.push = function(e, t, r, n, i, a, o, s) {
						var l = this.w,
						u = Object(rt.a)(i.startDTS) ? i.startDTS: i.start,
						c = i.decryptdata,
						d = this.frag,
						f = !(d && i.cc === d.cc),
						h = !(d && i.level === d.level),
						p = d && i.sn === d.sn + 1,
						g = !h && p;
						if (f && it.b.log(this.id + ":discontinuity detected"), h && it.b.log(this.id + ":switch detected"), this.frag = i, l) l.postMessage({
							cmd: "demux",
							data: e,
							decryptdata: c,
							initSegment: t,
							audioCodec: r,
							videoCodec: n,
							timeOffset: u,
							discontinuity: f,
							trackSwitch: h,
							contiguous: g,
							duration: a,
							accurateTimeOffset: o,
							defaultInitPTS: s
						},
						e instanceof ArrayBuffer ? [e] : []);
						else {
							var v = this.demuxer;
							v && v.push(e, c, t, r, n, u, f, h, g, a, o, s)
						}
					},
					e.prototype.onWorkerMessage = function(e) {
						var t = e.data,
						r = this.hls;
						switch (t.event) {
						case "init":
							Zt.URL.revokeObjectURL(this.w.objectURL);
							break;
						case nt.a.FRAG_PARSING_DATA:
							t.data.data1 = new Uint8Array(t.data1),
							t.data2 && (t.data.data2 = new Uint8Array(t.data2));
						default:
							t.data = t.data || {},
							t.data.frag = this.frag,
							t.data.id = this.id,
							r.trigger(t.event, t.data)
						}
					},
					e
				} (),
				rr = tr,
				nr = {
					toString: function(e) {
						for (var t = "",
						r = e.length,
						n = 0; n < r; n++) t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
						return t
					}
				},
				ir = nr,
				ar = function(e) {
					function t(r) {
						G(this, t);
						for (var n = arguments.length,
						i = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
						var o = j(this, e.call.apply(e, [this, r].concat(i)));
						return o._tickInterval = null,
						o._tickTimer = null,
						o._tickCallCount = 0,
						o._boundTick = o.tick.bind(o),
						o
					}
					return K(t, e),
					t.prototype.onHandlerDestroying = function() {
						this.clearNextTick(),
						this.clearInterval()
					},
					t.prototype.hasInterval = function() {
						return !! this._tickInterval
					},
					t.prototype.hasNextTick = function() {
						return !! this._tickTimer
					},
					t.prototype.setInterval = function(e) {
						function t(t) {
							return e.apply(this, arguments)
						}
						return t.toString = function() {
							return e.toString()
						},
						t
					} (function(e) {
						return ! this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e), !0)
					}),
					t.prototype.clearInterval = function(e) {
						function t() {
							return e.apply(this, arguments)
						}
						return t.toString = function() {
							return e.toString()
						},
						t
					} (function() {
						return !! this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
					}),
					t.prototype.clearNextTick = function() {
						return !! this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
					},
					t.prototype.tick = function() {
						1 === ++this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
					},
					t.prototype.doTick = function() {},
					t
				} (lt),
				or = ar,
				sr = function() {
					function e(t, r, n, i) {
						Y(this, e),
						this.config = t,
						this.media = r,
						this.fragmentTracker = n,
						this.hls = i,
						this.stallReported = !1
					}
					return e.prototype.poll = function(e, t) {
						var r = this.config,
						n = this.media,
						i = n.currentTime,
						a = window.performance.now();
						if (i !== e) return this.stallReported && (it.b.warn("playback not stuck anymore @" + i + ", after " + Math.round(a - this.stalled) + "ms"), this.stallReported = !1),
						this.stalled = null,
						void(this.nudgeRetry = 0);
						if (! (n.ended || !n.buffered.length || n.readyState > 2 || n.seeking && Vt.isBuffered(n, i))) {
							var o = a - this.stalled,
							s = Vt.bufferInfo(n, i, r.maxBufferHole);
							if (!this.stalled) return void(this.stalled = a);
							o >= 1e3 && this._reportStall(s.len),
							this._tryFixBufferStall(s, o)
						}
					},
					e.prototype._tryFixBufferStall = function(e, t) {
						var r = this.config,
						n = this.fragmentTracker,
						i = this.media,
						a = i.currentTime,
						o = n.getPartialFragment(a);
						o && this._trySkipBufferHole(o),
						e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
					},
					e.prototype._reportStall = function(e) {
						var t = this.hls,
						r = this.media;
						this.stallReported || (this.stallReported = !0, it.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(nt.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.BUFFER_STALLED_ERROR,
							fatal: !1,
							buffer: e
						}))
					},
					e.prototype._trySkipBufferHole = function(e) {
						for (var t = this.hls,
						r = this.media,
						n = r.currentTime,
						i = 0,
						a = 0; a < r.buffered.length; a++) {
							var o = r.buffered.start(a);
							if (n >= i && n < o) return r.currentTime = Math.max(o, r.currentTime + .1),
							it.b.warn("skipping hole, adjusting currentTime from " + n + " to " + r.currentTime),
							this.stalled = null,
							void t.trigger(nt.a.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: tt.a.BUFFER_SEEK_OVER_HOLE,
								fatal: !1,
								reason: "fragment loaded with buffer holes, seeking from " + n + " to " + r.currentTime,
								frag: e
							});
							i = r.buffered.end(a)
						}
					},
					e.prototype._tryNudgeBuffer = function() {
						var e = this.config,
						t = this.hls,
						r = this.media,
						n = r.currentTime,
						i = (this.nudgeRetry || 0) + 1;
						if (this.nudgeRetry = i, i < e.nudgeMaxRetry) {
							var a = n + i * e.nudgeOffset;
							it.b.log("adjust currentTime from " + n + " to " + a),
							r.currentTime = a,
							t.trigger(nt.a.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: tt.a.BUFFER_NUDGE_ON_STALL,
								fatal: !1
							})
						} else it.b.error("still stuck in high buffer @" + n + " after " + e.nudgeMaxRetry + ", raise fatal error"),
						t.trigger(nt.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.BUFFER_STALLED_ERROR,
							fatal: !0
						})
					},
					e
				} (),
				lr = sr,
				ur = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				cr = {
					STOPPED: "STOPPED",
					IDLE: "IDLE",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING",
					FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
					WAITING_LEVEL: "WAITING_LEVEL",
					PARSING: "PARSING",
					PARSED: "PARSED",
					BUFFER_FLUSHING: "BUFFER_FLUSHING",
					ENDED: "ENDED",
					ERROR: "ERROR"
				},
				dr = function(e) {
					function t(r, n) {
						z(this, t);
						var i = X(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.MEDIA_DETACHING, nt.a.MANIFEST_LOADING, nt.a.MANIFEST_PARSED, nt.a.LEVEL_LOADED, nt.a.KEY_LOADED, nt.a.FRAG_LOADED, nt.a.FRAG_LOAD_EMERGENCY_ABORTED, nt.a.FRAG_PARSING_INIT_SEGMENT, nt.a.FRAG_PARSING_DATA, nt.a.FRAG_PARSED, nt.a.ERROR, nt.a.AUDIO_TRACK_SWITCHING, nt.a.AUDIO_TRACK_SWITCHED, nt.a.BUFFER_CREATED, nt.a.BUFFER_APPENDED, nt.a.BUFFER_FLUSHED));
						return i.fragmentTracker = n,
						i.config = r.config,
						i.audioCodecSwap = !1,
						i._state = cr.STOPPED,
						i.stallReported = !1,
						i.gapController = null,
						i
					}
					return Q(t, e),
					t.prototype.onHandlerDestroying = function() {
						this.stopLoad(),
						e.prototype.onHandlerDestroying.call(this)
					},
					t.prototype.onHandlerDestroyed = function() {
						this.state = cr.STOPPED,
						this.fragmentTracker = null,
						e.prototype.onHandlerDestroyed.call(this)
					},
					t.prototype.startLoad = function(e) {
						if (this.levels) {
							var t = this.lastCurrentTime,
							r = this.hls;
							if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
								var n = r.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0),
								this.level = r.nextLoadLevel = n,
								this.loadedmetadata = !1
							}
							t > 0 && -1 === e && (it.b.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t),
							this.state = cr.IDLE,
							this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
							this.tick()
						} else this.forceStartLoad = !0,
						this.state = cr.STOPPED
					},
					t.prototype.stopLoad = function() {
						var e = this.fragCurrent;
						e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e), this.fragCurrent = null),
						this.fragPrevious = null,
						this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
						this.clearInterval(),
						this.state = cr.STOPPED,
						this.forceStartLoad = !1
					},
					t.prototype.doTick = function() {
						switch (this.state) {
						case cr.BUFFER_FLUSHING:
							this.fragLoadError = 0;
							break;
						case cr.IDLE:
							this._doTickIdle();
							break;
						case cr.WAITING_LEVEL:
							var e = this.levels[this.level];
							e && e.details && (this.state = cr.IDLE);
							break;
						case cr.FRAG_LOADING_WAITING_RETRY:
							var t = window.performance.now(),
							r = this.retryDate; (!r || t >= r || this.media && this.media.seeking) && (it.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = cr.IDLE);
							break;
						case cr.ERROR:
						case cr.STOPPED:
						case cr.FRAG_LOADING:
						case cr.PARSING:
						case cr.PARSED:
						case cr.ENDED:
						}
						this._checkBuffer(),
						this._checkFragmentChanged()
					},
					t.prototype._doTickIdle = function() {
						var e = this.hls,
						t = e.config,
						r = this.media;
						if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
							var n = void 0;
							n = this.loadedmetadata ? r.currentTime: this.nextLoadPosition;
							var i = e.nextLoadLevel,
							a = this.levels[i];
							if (a) {
								var o = a.bitrate,
								s = void 0;
								s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength,
								s = Math.min(s, t.maxMaxBufferLength);
								var l = Vt.bufferInfo(this.mediaBuffer ? this.mediaBuffer: r, n, t.maxBufferHole),
								u = l.len;
								if (! (u >= s)) {
									it.b.trace("buffer length of " + u.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."),
									this.level = e.nextLoadLevel = i;
									var c = a.details;
									if (!c || c.live && this.levelLastLoaded !== i) return void(this.state = cr.WAITING_LEVEL);
									var d = this.fragPrevious;
									if (!c.live && d && !d.backtracked && d.sn === c.endSN && !l.nextStart) {
										if (Math.min(r.duration, d.start + d.duration) - Math.max(l.end, d.start) <= Math.max(.2, d.duration)) {
											var f = {};
											return this.altAudio && (f.type = "video"),
											this.hls.trigger(nt.a.BUFFER_EOS, f),
											void(this.state = cr.ENDED)
										}
									}
									this._fetchPayloadOrEos(n, l, c)
								}
							}
						}
					},
					t.prototype._fetchPayloadOrEos = function(e, t, r) {
						var n = this.fragPrevious,
						i = this.level,
						a = r.fragments,
						o = a.length;
						if (0 !== o) {
							var s = a[0].start,
							l = a[o - 1].start + a[o - 1].duration,
							u = t.end,
							c = void 0;
							if (r.initSegment && !r.initSegment.data) c = r.initSegment;
							else if (r.live) {
								var d = this.config.initialLiveManifestSize;
								if (o < d) return void it.b.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + d);
								if (null === (c = this._ensureFragmentAtLivePoint(r, u, s, l, n, a, o))) return
							} else u < s && (c = a[0]);
							c || (c = this._findFragment(s, n, o, a, u, l, r)),
							c && (c.encrypted ? (it.b.log("Loading key for " + c.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i), this._loadKey(c)) : (it.b.log("Loading " + c.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + u.toFixed(3)), this._loadFragment(c)))
						}
					},
					t.prototype._ensureFragmentAtLivePoint = function(e, t, r, n, i, a, o) {
						var s = this.hls.config,
						l = this.media,
						u = void 0,
						c = void 0 !== s.liveMaxLatencyDuration ? s.liveMaxLatencyDuration: s.liveMaxLatencyDurationCount * e.targetduration;
						if (t < Math.max(r - s.maxFragLookUpTolerance, n - c)) {
							var d = this.liveSyncPosition = this.computeLivePosition(r, e);
							it.b.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)),
							t = d,
							l && l.readyState && l.duration > d && (l.currentTime = d),
							this.nextLoadPosition = d
						}
						if (e.PTSKnown && t > n && l && l.readyState) return null;
						if (this.startFragRequested && !e.PTSKnown) {
							if (i) if (e.hasProgramDateTime) it.b.log("live playlist, switching playlist, load frag with same PDT: " + i.programDateTime),
							u = H(a, i.endProgramDateTime, s.maxFragLookUpTolerance);
							else {
								var f = i.sn + 1;
								if (f >= e.startSN && f <= e.endSN) {
									var h = a[f - e.startSN];
									i.cc === h.cc && (u = h, it.b.log("live playlist, switching playlist, load frag with next SN: " + u.sn))
								}
								u || (u = qt.search(a,
								function(e) {
									return i.cc - e.cc
								})) && it.b.log("live playlist, switching playlist, load frag with same CC: " + u.sn)
							}
							u || (u = a[Math.min(o - 1, Math.round(o / 2))], it.b.log("live playlist, switching playlist, unknown, load middle frag : " + u.sn))
						}
						return u
					},
					t.prototype._findFragment = function(e, t, r, n, i, a, o) {
						var s = this.hls.config,
						l = void 0;
						if (i < a) {
							l = W(t, n, i, i > a - s.maxFragLookUpTolerance ? 0 : s.maxFragLookUpTolerance)
						} else l = n[r - 1];
						if (l) {
							var u = l.sn - o.startSN,
							c = t && l.level === t.level,
							d = n[u - 1],
							f = n[u + 1];
							if (t && l.sn === t.sn) if (c && !l.backtracked) if (l.sn < o.endSN) {
								var h = t.deltaPTS;
								h && h > s.maxBufferHole && t.dropped && u ? (l = d, it.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (l = f, it.b.log("SN just loaded, load next one: " + l.sn, l))
							} else l = null;
							else l.backtracked && (f && f.backtracked ? (it.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + l.sn + ". Loading fragment " + f.sn), l = f) : (it.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, d ? (l = d, l.backtracked = !0) : u && (l = null)))
						}
						return l
					},
					t.prototype._loadKey = function(e) {
						this.state = cr.KEY_LOADING,
						this.hls.trigger(nt.a.KEY_LOADING, {
							frag: e
						})
					},
					t.prototype._loadFragment = function(e) {
						var t = this.fragmentTracker.getState(e);
						this.fragCurrent = e,
						this.startFragRequested = !0,
						Object(rt.a)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
						e.backtracked || t === Kt.NOT_LOADED || t === Kt.PARTIAL ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, this.hls.trigger(nt.a.FRAG_LOADING, {
							frag: e
						}), this.demuxer || (this.demuxer = new rr(this.hls, "main")), this.state = cr.FRAG_LOADING) : t === Kt.APPENDING && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
					},
					t.prototype.getBufferedFrag = function(e) {
						return this.fragmentTracker.getBufferedFrag(e, Nt.LevelType.MAIN)
					},
					t.prototype.followingBufferedFrag = function(e) {
						return e ? this.getBufferedFrag(e.endPTS + .5) : null
					},
					t.prototype._checkFragmentChanged = function() {
						var e = void 0,
						t = void 0,
						r = this.media;
						if (r && r.readyState && !1 === r.seeking && (t = r.currentTime, t > this.lastCurrentTime && (this.lastCurrentTime = t), Vt.isBuffered(r, t) ? e = this.getBufferedFrag(t) : Vt.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
							var n = e;
							if (n !== this.fragPlaying) {
								this.hls.trigger(nt.a.FRAG_CHANGED, {
									frag: n
								});
								var i = n.level;
								this.fragPlaying && this.fragPlaying.level === i || this.hls.trigger(nt.a.LEVEL_SWITCHED, {
									level: i
								}),
								this.fragPlaying = n
							}
						}
					},
					t.prototype.immediateLevelSwitch = function() {
						if (it.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
							this.immediateSwitch = !0;
							var e = this.media,
							t = void 0;
							e ? (t = e.paused, e.pause()) : t = !0,
							this.previouslyPaused = t
						}
						var r = this.fragCurrent;
						r && r.loader && r.loader.abort(),
						this.fragCurrent = null,
						this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
					},
					t.prototype.immediateLevelSwitchEnd = function() {
						var e = this.media;
						e && e.buffered.length && (this.immediateSwitch = !1, Vt.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
					},
					t.prototype.nextLevelSwitch = function() {
						var e = this.media;
						if (e && e.readyState) {
							var t = void 0,
							r = void 0,
							n = void 0;
							if (r = this.getBufferedFrag(e.currentTime), r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
							else {
								var i = this.hls.nextLoadLevel,
								a = this.levels[i],
								o = this.fragLastKbps;
								t = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
							}
							if ((n = this.getBufferedFrag(e.currentTime + t)) && (n = this.followingBufferedFrag(n))) {
								var s = this.fragCurrent;
								s && s.loader && s.loader.abort(),
								this.fragCurrent = null,
								this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
							}
						}
					},
					t.prototype.flushMainBuffer = function(e, t) {
						this.state = cr.BUFFER_FLUSHING;
						var r = {
							startOffset: e,
							endOffset: t
						};
						this.altAudio && (r.type = "video"),
						this.hls.trigger(nt.a.BUFFER_FLUSHING, r)
					},
					t.prototype.onMediaAttached = function(e) {
						var t = this.media = this.mediaBuffer = e.media;
						this.onvseeking = this.onMediaSeeking.bind(this),
						this.onvseeked = this.onMediaSeeked.bind(this),
						this.onvended = this.onMediaEnded.bind(this),
						t.addEventListener("seeking", this.onvseeking),
						t.addEventListener("seeked", this.onvseeked),
						t.addEventListener("ended", this.onvended);
						var r = this.config;
						this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition),
						this.gapController = new lr(r, t, this.fragmentTracker, this.hls)
					},
					t.prototype.onMediaDetaching = function() {
						var e = this.media;
						e && e.ended && (it.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
						var t = this.levels;
						t && t.forEach(function(e) {
							e.details && e.details.fragments.forEach(function(e) {
								e.backtracked = void 0
							})
						}),
						e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
						this.media = this.mediaBuffer = null,
						this.loadedmetadata = !1,
						this.stopLoad()
					},
					t.prototype.onMediaSeeking = function() {
						var e = this.media,
						t = e ? e.currentTime: void 0,
						r = this.config;
						Object(rt.a)(t) && it.b.log("media seeking to " + t.toFixed(3));
						var n = this.mediaBuffer ? this.mediaBuffer: e,
						i = Vt.bufferInfo(n, t, this.config.maxBufferHole);
						if (this.state === cr.FRAG_LOADING) {
							var a = this.fragCurrent;
							if (0 === i.len && a) {
								var o = r.maxFragLookUpTolerance,
								s = a.start - o,
								l = a.start + a.duration + o;
								t < s || t > l ? (a.loader && (it.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), a.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = cr.IDLE) : it.b.log("seeking outside of buffer but within currently loaded fragment range")
							}
						} else this.state === cr.ENDED && (0 === i.len && (this.fragPrevious = 0), this.state = cr.IDLE);
						e && (this.lastCurrentTime = t),
						this.loadedmetadata || (this.nextLoadPosition = this.startPosition = t),
						this.tick()
					},
					t.prototype.onMediaSeeked = function() {
						var e = this.media,
						t = e ? e.currentTime: void 0;
						Object(rt.a)(t) && it.b.log("media seeked to " + t.toFixed(3)),
						this.tick()
					},
					t.prototype.onMediaEnded = function() {
						it.b.log("media ended"),
						this.startPosition = this.lastCurrentTime = 0
					},
					t.prototype.onManifestLoading = function() {
						it.b.log("trigger BUFFER_RESET"),
						this.hls.trigger(nt.a.BUFFER_RESET),
						this.fragmentTracker.removeAllFragments(),
						this.stalled = !1,
						this.startPosition = this.lastCurrentTime = 0
					},
					t.prototype.onManifestParsed = function(e) {
						var t = !1,
						r = !1,
						n = void 0;
						e.levels.forEach(function(e) { (n = e.audioCodec) && ( - 1 !== n.indexOf("mp4a.40.2") && (t = !0), -1 !== n.indexOf("mp4a.40.5") && (r = !0))
						}),
						this.audioCodecSwitch = t && r,
						this.audioCodecSwitch && it.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
						this.levels = e.levels,
						this.startFragRequested = !1;
						var i = this.config; (i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition)
					},
					t.prototype.onLevelLoaded = function(e) {
						var t = e.details,
						r = e.level,
						n = this.levels[this.levelLastLoaded],
						i = this.levels[r],
						a = t.totalduration,
						o = 0;
						if (it.b.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
							var s = i.details;
							s && t.fragments.length > 0 ? (C(s, t), o = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), t.PTSKnown && Object(rt.a)(o) ? it.b.log("live playlist sliding:" + o.toFixed(3)) : (it.b.log("live playlist - outdated PTS, unknown sliding"), N(this.fragPrevious, n, t))) : (it.b.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, N(this.fragPrevious, n, t))
						} else t.PTSKnown = !1;
						if (i.details = t, this.levelLastLoaded = r, this.hls.trigger(nt.a.LEVEL_UPDATED, {
							details: t,
							level: r
						}), !1 === this.startFragRequested) {
							if ( - 1 === this.startPosition || -1 === this.lastCurrentTime) {
								var l = t.startTimeOffset;
								Object(rt.a)(l) ? (l < 0 && (it.b.log("negative start time offset " + l + ", count from end of last fragment"), l = o + a + l), it.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : t.live ? (this.startPosition = this.computeLivePosition(o, t), it.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
								this.lastCurrentTime = this.startPosition
							}
							this.nextLoadPosition = this.startPosition
						}
						this.state === cr.WAITING_LEVEL && (this.state = cr.IDLE),
						this.tick()
					},
					t.prototype.onKeyLoaded = function() {
						this.state === cr.KEY_LOADING && (this.state = cr.IDLE, this.tick())
					},
					t.prototype.onFragLoaded = function(e) {
						var t = this.fragCurrent,
						r = this.hls,
						n = this.levels,
						i = this.media,
						a = e.frag;
						if (this.state === cr.FRAG_LOADING && t && "main" === a.type && a.level === t.level && a.sn === t.sn) {
							var o = e.stats,
							s = n[t.level],
							l = s.details;
							if (this.bitrateTest = !1, this.stats = o, it.b.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), a.bitrateTest && r.nextLoadLevel) this.state = cr.IDLE,
							this.startFragRequested = !1,
							o.tparsed = o.tbuffered = window.performance.now(),
							r.trigger(nt.a.FRAG_BUFFERED, {
								stats: o,
								frag: t,
								id: "main"
							}),
							this.tick();
							else if ("initSegment" === a.sn) this.state = cr.IDLE,
							o.tparsed = o.tbuffered = window.performance.now(),
							l.initSegment.data = e.payload,
							r.trigger(nt.a.FRAG_BUFFERED, {
								stats: o,
								frag: t,
								id: "main"
							}),
							this.tick();
							else {
								it.b.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc),
								this.state = cr.PARSING,
								this.pendingBuffering = !0,
								this.appended = !1,
								a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
									frag: a
								}));
								var u = !(i && i.seeking) && (l.PTSKnown || !l.live),
								c = l.initSegment ? l.initSegment.data: [],
								d = this._getAudioCodec(s),
								f = this.demuxer = this.demuxer || new rr(this.hls, "main");
								f.push(e.payload, c, d, s.videoCodec, t, l.totalduration, u)
							}
						}
						this.fragLoadError = 0
					},
					t.prototype.onFragParsingInitSegment = function(e) {
						var t = this.fragCurrent,
						r = e.frag;
						if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === cr.PARSING) {
							var n = e.tracks,
							i = void 0,
							a = void 0;
							if (n.audio && this.altAudio && delete n.audio, a = n.audio) {
								var o = this.levels[this.level].audioCodec,
								s = navigator.userAgent.toLowerCase();
								o && this.audioCodecSwap && (it.b.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"),
								this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"),
								-1 !== s.indexOf("android") && "audio/mpeg" !== a.container && (o = "mp4a.40.2", it.b.log("Android: force audio codec to " + o)),
								a.levelCodec = o,
								a.id = e.id
							}
							a = n.video,
							a && (a.levelCodec = this.levels[this.level].videoCodec, a.id = e.id),
							this.hls.trigger(nt.a.BUFFER_CODECS, n);
							for (i in n) {
								a = n[i],
								it.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
								var l = a.initSegment;
								l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(nt.a.BUFFER_APPENDING, {
									type: i,
									data: l,
									parent: "main",
									content: "initSegment"
								}))
							}
							this.tick()
						}
					},
					t.prototype.onFragParsingData = function(e) {
						var t = this,
						r = this.fragCurrent,
						n = e.frag;
						if (r && "main" === e.id && n.sn === r.sn && n.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === cr.PARSING) {
							var i = this.levels[this.level],
							a = r;
							if (Object(rt.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && a.addElementaryStream(gt.ElementaryStreamTypes.AUDIO), !0 === e.hasVideo && a.addElementaryStream(gt.ElementaryStreamTypes.VIDEO), it.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type) if (a.dropped = e.dropped, a.dropped) if (a.backtracked) it.b.warn("Already backtracked on this fragment, appending with the gap", a.sn);
							else {
								var o = i.details;
								if (!o || a.sn !== o.startSN) return it.b.warn("missing video frame(s), backtracking fragment", a.sn),
								this.fragmentTracker.removeFragment(a),
								a.backtracked = !0,
								this.nextLoadPosition = e.startPTS,
								this.state = cr.IDLE,
								this.fragPrevious = a,
								void this.tick();
								it.b.warn("missing video frame(s) on first frag, appending with gap", a.sn)
							} else a.backtracked = !1;
							var s = I(i.details, a, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
							l = this.hls;
							l.trigger(nt.a.LEVEL_PTS_UPDATED, {
								details: i.details,
								level: this.level,
								drift: s,
								type: e.type,
								start: e.startPTS,
								end: e.endPTS
							}),
							[e.data1, e.data2].forEach(function(r) {
								r && r.length && t.state === cr.PARSING && (t.appended = !0, t.pendingBuffering = !0, l.trigger(nt.a.BUFFER_APPENDING, {
									type: e.type,
									data: r,
									parent: "main",
									content: "data"
								}))
							}),
							this.tick()
						}
					},
					t.prototype.onFragParsed = function(e) {
						var t = this.fragCurrent,
						r = e.frag;
						t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === cr.PARSING && (this.stats.tparsed = window.performance.now(), this.state = cr.PARSED, this._checkAppendedParsed())
					},
					t.prototype.onAudioTrackSwitching = function(e) {
						var t = !!e.url,
						r = e.id;
						if (!t) {
							if (this.mediaBuffer !== this.media) {
								it.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),
								this.mediaBuffer = this.media;
								var n = this.fragCurrent;
								n.loader && (it.b.log("switching to main audio track, cancel main fragment load"), n.loader.abort()),
								this.fragCurrent = null,
								this.fragPrevious = null,
								this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
								this.state = cr.IDLE
							}
							var i = this.hls;
							i.trigger(nt.a.BUFFER_FLUSHING, {
								startOffset: 0,
								endOffset: Number.POSITIVE_INFINITY,
								type: "audio"
							}),
							i.trigger(nt.a.AUDIO_TRACK_SWITCHED, {
								id: r
							}),
							this.altAudio = !1
						}
					},
					t.prototype.onAudioTrackSwitched = function(e) {
						var t = e.id,
						r = !!this.hls.audioTracks[t].url;
						if (r) {
							var n = this.videoBuffer;
							n && this.mediaBuffer !== n && (it.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
						}
						this.altAudio = r,
						this.tick()
					},
					t.prototype.onBufferCreated = function(e) {
						var t = e.tracks,
						r = void 0,
						n = void 0,
						i = !1;
						for (var a in t) {
							var o = t[a];
							"main" === o.id ? (n = a, r = o, "video" === a && (this.videoBuffer = t[a].buffer)) : i = !0
						}
						i && r ? (it.b.log("alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
					},
					t.prototype.onBufferAppended = function(e) {
						if ("main" === e.parent) {
							var t = this.state;
							t !== cr.PARSING && t !== cr.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
						}
					},
					t.prototype._checkAppendedParsed = function() {
						if (! (this.state !== cr.PARSED || this.appended && this.pendingBuffering)) {
							var e = this.fragCurrent;
							if (e) {
								var t = this.mediaBuffer ? this.mediaBuffer: this.media;
								it.b.log("main buffered : " + ir.toString(t.buffered)),
								this.fragPrevious = e;
								var r = this.stats;
								r.tbuffered = window.performance.now(),
								this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
								this.hls.trigger(nt.a.FRAG_BUFFERED, {
									stats: r,
									frag: e,
									id: "main"
								}),
								this.state = cr.IDLE
							}
							this.tick()
						}
					},
					t.prototype.onError = function(e) {
						var t = e.frag || this.fragCurrent;
						if (!t || "main" === t.type) {
							var r = !!this.media && Vt.isBuffered(this.media, this.media.currentTime) && Vt.isBuffered(this.media, this.media.currentTime + .5);
							switch (e.details) {
							case tt.a.FRAG_LOAD_ERROR:
							case tt.a.FRAG_LOAD_TIMEOUT:
							case tt.a.KEY_LOAD_ERROR:
							case tt.a.KEY_LOAD_TIMEOUT:
								if (!e.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
									var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
									it.b.warn("mediaController: frag loading failed, retry in " + n + " ms"),
									this.retryDate = window.performance.now() + n,
									this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
									this.fragLoadError++,
									this.state = cr.FRAG_LOADING_WAITING_RETRY
								} else it.b.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."),
								e.fatal = !0,
								this.state = cr.ERROR;
								break;
							case tt.a.LEVEL_LOAD_ERROR:
							case tt.a.LEVEL_LOAD_TIMEOUT:
								this.state !== cr.ERROR && (e.fatal ? (this.state = cr.ERROR, it.b.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== cr.WAITING_LEVEL || (this.state = cr.IDLE));
								break;
							case tt.a.BUFFER_FULL_ERROR:
								"main" !== e.parent || this.state !== cr.PARSING && this.state !== cr.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = cr.IDLE) : (it.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
							}
						}
					},
					t.prototype._reduceMaxBufferLength = function(e) {
						var t = this.config;
						return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, it.b.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
					},
					t.prototype._checkBuffer = function() {
						var e = this.media;
						if (e && 0 !== e.readyState) {
							var t = this.mediaBuffer ? this.mediaBuffer: e,
							r = t.buffered; ! this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, r)
						}
					},
					t.prototype.onFragLoadEmergencyAborted = function() {
						this.state = cr.IDLE,
						this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
						this.tick()
					},
					t.prototype.onBufferFlushed = function() {
						var e = this.mediaBuffer ? this.mediaBuffer: this.media;
						e && this.fragmentTracker.detectEvictedFragments(gt.ElementaryStreamTypes.VIDEO, e.buffered),
						this.state = cr.IDLE,
						this.fragPrevious = null
					},
					t.prototype.swapAudioCodec = function() {
						this.audioCodecSwap = !this.audioCodecSwap
					},
					t.prototype.computeLivePosition = function(e, t) {
						var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration: this.config.liveSyncDurationCount * t.targetduration;
						return e + Math.max(0, t.totalduration - r)
					},
					t.prototype._seekToStartPos = function() {
						var e = this.media,
						t = e.currentTime,
						r = e.seeking ? t: this.startPosition;
						t !== r && (it.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
					},
					t.prototype._getAudioCodec = function(e) {
						var t = this.config.defaultAudioCodec || e.audioCodec;
						return this.audioCodecSwap && (it.b.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5")),
						t
					},
					ur(t, [{
						key: "state",
						set: function(e) {
							if (this.state !== e) {
								var t = this.state;
								this._state = e,
								it.b.log("main stream:" + t + "->" + e),
								this.hls.trigger(nt.a.STREAM_STATE_TRANSITION, {
									previousState: t,
									nextState: e
								})
							}
						},
						get: function() {
							return this._state
						}
					},
					{
						key: "currentLevel",
						get: function() {
							var e = this.media;
							if (e) {
								var t = this.getBufferedFrag(e.currentTime);
								if (t) return t.level
							}
							return - 1
						}
					},
					{
						key: "nextBufferedFrag",
						get: function() {
							var e = this.media;
							return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
						}
					},
					{
						key: "nextLevel",
						get: function() {
							var e = this.nextBufferedFrag;
							return e ? e.level: -1
						}
					},
					{
						key: "liveSyncPosition",
						get: function() {
							return this._liveSyncPosition
						},
						set: function(e) {
							this._liveSyncPosition = e
						}
					}]),
					t
				} (or),
				fr = dr,
				hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
				function(e) {
					return typeof e
				}: function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
				},
				pr = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				gr = window,
				vr = gr.performance,
				yr = function(e) {
					function t(r) {
						J(this, t);
						var n = $(this, e.call(this, r, nt.a.MANIFEST_LOADED, nt.a.LEVEL_LOADED, nt.a.AUDIO_TRACK_SWITCHED, nt.a.FRAG_LOADED, nt.a.ERROR));
						return n.canload = !1,
						n.currentLevelIndex = null,
						n.manualLevelIndex = -1,
						n.timer = null,
						n
					}
					return Z(t, e),
					t.prototype.onHandlerDestroying = function() {
						this.clearTimer(),
						this.manualLevelIndex = -1
					},
					t.prototype.clearTimer = function() {
						null !== this.timer && (clearTimeout(this.timer), this.timer = null)
					},
					t.prototype.startLoad = function() {
						var e = this._levels;
						this.canload = !0,
						this.levelRetryCount = 0,
						e && e.forEach(function(e) {
							e.loadError = 0;
							var t = e.details;
							t && t.live && (e.details = void 0)
						}),
						null !== this.timer && this.loadLevel()
					},
					t.prototype.stopLoad = function() {
						this.canload = !1
					},
					t.prototype.onManifestLoaded = function(e) {
						var t = [],
						r = void 0,
						n = {},
						i = null,
						a = !1,
						o = !1,
						s = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
						l = [];
						if (e.levels.forEach(function(e) {
							e.loadError = 0,
							e.fragmentError = !1,
							a = a || !!e.videoCodec,
							o = o || !!e.audioCodec || !(!e.attrs || !e.attrs.AUDIO),
							s && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0),
							i = n[e.bitrate],
							i ? i.url.push(e.url) : (e.url = [e.url], e.urlId = 0, n[e.bitrate] = e, t.push(e)),
							e.attrs && e.attrs.AUDIO && D(i || e, "audio", e.attrs.AUDIO),
							e.attrs && e.attrs.SUBTITLES && D(i || e, "text", e.attrs.SUBTITLES)
						}), a && o && (t = t.filter(function(e) {
							return !! e.videoCodec
						})), t = t.filter(function(e) {
							var t = e.audioCodec,
							r = e.videoCodec;
							return (!t || u(t)) && (!r || u(r))
						}), e.audioTracks && (l = e.audioTracks.filter(function(e) {
							return ! e.audioCodec || u(e.audioCodec, "audio")
						}), l.forEach(function(e, t) {
							e.id = t
						})), t.length > 0) {
							r = t[0].bitrate,
							t.sort(function(e, t) {
								return e.bitrate - t.bitrate
							}),
							this._levels = t;
							for (var c = 0; c < t.length; c++) if (t[c].bitrate === r) {
								this._firstLevel = c,
								it.b.log("manifest loaded," + t.length + " level(s) found, first bitrate:" + r);
								break
							}
							this.hls.trigger(nt.a.MANIFEST_PARSED, {
								levels: t,
								audioTracks: l,
								firstLevel: this._firstLevel,
								stats: e.stats,
								audio: o,
								video: a,
								altAudio: l.length > 0 && a
							})
						} else this.hls.trigger(nt.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
							fatal: !0,
							url: this.hls.url,
							reason: "no level with compatible codecs found in manifest"
						})
					},
					t.prototype.setLevelInternal = function(e) {
						var t = this._levels,
						r = this.hls;
						if (e >= 0 && e < t.length) {
							if (this.clearTimer(), this.currentLevelIndex !== e) {
								it.b.log("switching to level " + e),
								this.currentLevelIndex = e;
								var n = t[e];
								n.level = e,
								r.trigger(nt.a.LEVEL_SWITCHING, n)
							}
							var i = t[e],
							a = i.details;
							if (!a || a.live) {
								var o = i.urlId;
								r.trigger(nt.a.LEVEL_LOADING, {
									url: i.url[o],
									level: e,
									id: o
								})
							}
						} else r.trigger(nt.a.ERROR, {
							type: tt.b.OTHER_ERROR,
							details: tt.a.LEVEL_SWITCH_ERROR,
							level: e,
							fatal: !1,
							reason: "invalid level idx"
						})
					},
					t.prototype.onError = function(e) {
						if (e.fatal) return void(e.type === tt.b.NETWORK_ERROR && this.clearTimer());
						var t = !1,
						r = !1,
						n = void 0;
						switch (e.details) {
						case tt.a.FRAG_LOAD_ERROR:
						case tt.a.FRAG_LOAD_TIMEOUT:
						case tt.a.KEY_LOAD_ERROR:
						case tt.a.KEY_LOAD_TIMEOUT:
							n = e.frag.level,
							r = !0;
							break;
						case tt.a.LEVEL_LOAD_ERROR:
						case tt.a.LEVEL_LOAD_TIMEOUT:
							n = e.context.level,
							t = !0;
							break;
						case tt.a.REMUX_ALLOC_ERROR:
							n = e.level,
							t = !0
						}
						void 0 !== n && this.recoverLevel(e, n, t, r)
					},
					t.prototype.recoverLevel = function(e, t, r, n) {
						var i = this,
						a = this.hls.config,
						o = e.details,
						s = this._levels[t],
						l = void 0,
						u = void 0,
						c = void 0;
						if (s.loadError++, s.fragmentError = n, r) {
							if (! (this.levelRetryCount + 1 <= a.levelLoadingMaxRetry)) return it.b.error("level controller, cannot recover from " + o + " error"),
							this.currentLevelIndex = null,
							this.clearTimer(),
							void(e.fatal = !0);
							u = Math.min(Math.pow(2, this.levelRetryCount) * a.levelLoadingRetryDelay, a.levelLoadingMaxRetryTimeout),
							this.timer = setTimeout(function() {
								return i.loadLevel()
							},
							u),
							e.levelRetry = !0,
							this.levelRetryCount++,
							it.b.warn("level controller, " + o + ", retry in " + u + " ms, current retry count is " + this.levelRetryCount)
						} (r || n) && (l = s.url.length, l > 1 && s.loadError < l ? (s.urlId = (s.urlId + 1) % l, s.details = void 0, it.b.warn("level controller, " + o + " for level " + t + ": switching to redundant URL-id " + s.urlId)) : -1 === this.manualLevelIndex ? (c = 0 === t ? this._levels.length - 1 : t - 1, it.b.warn("level controller, " + o + ": switch to " + c), this.hls.nextAutoLevel = this.currentLevelIndex = c) : n && (it.b.warn("level controller, " + o + ": reload a fragment"), this.currentLevelIndex = null))
					},
					t.prototype.onFragLoaded = function(e) {
						var t = e.frag;
						if (void 0 !== t && "main" === t.type) {
							var r = this._levels[t.level];
							void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
						}
					},
					t.prototype.onLevelLoaded = function(e) {
						var t = this,
						r = e.level;
						if (r === this.currentLevelIndex) {
							var n = this._levels[r];
							n.fragmentError || (n.loadError = 0, this.levelRetryCount = 0);
							var i = e.details;
							if (i.live) {
								var a = 1e3 * (i.averagetargetduration ? i.averagetargetduration: i.targetduration),
								o = a,
								s = n.details;
								s && i.endSN === s.endSN && (o /= 2, it.b.log("same live playlist, reload twice faster")),
								o -= vr.now() - e.stats.trequest,
								o = Math.max(a / 2, Math.round(o)),
								it.b.log("live playlist, reload in " + Math.round(o) + " ms"),
								this.timer = setTimeout(function() {
									return t.loadLevel()
								},
								o)
							} else this.clearTimer()
						}
					},
					t.prototype.onAudioTrackSwitched = function(e) {
						var t = this.hls.audioTracks[e.id].groupId,
						r = this.hls.levels[this.currentLevelIndex];
						if (r && r.audioGroupIds) {
							var n = r.audioGroupIds.findIndex(function(e) {
								return e === t
							});
							n !== r.urlId && (r.urlId = n, this.startLoad())
						}
					},
					t.prototype.loadLevel = function() {
						if (it.b.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
							var e = this._levels[this.currentLevelIndex];
							if ("object" === (void 0 === e ? "undefined": hr(e)) && e.url.length > 0) {
								var t = this.currentLevelIndex,
								r = e.urlId,
								n = e.url[r];
								it.b.log("Attempt loading level index " + t + " with URL-id " + r),
								this.hls.trigger(nt.a.LEVEL_LOADING, {
									url: n,
									level: t,
									id: r
								})
							}
						}
					},
					pr(t, [{
						key: "levels",
						get: function() {
							return this._levels
						}
					},
					{
						key: "level",
						get: function() {
							return this.currentLevelIndex
						},
						set: function(e) {
							var t = this._levels;
							t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
						}
					},
					{
						key: "manualLevel",
						get: function() {
							return this.manualLevelIndex
						},
						set: function(e) {
							this.manualLevelIndex = e,
							void 0 === this._startLevel && (this._startLevel = e),
							-1 !== e && (this.level = e)
						}
					},
					{
						key: "firstLevel",
						get: function() {
							return this._firstLevel
						},
						set: function(e) {
							this._firstLevel = e
						}
					},
					{
						key: "startLevel",
						get: function() {
							if (void 0 === this._startLevel) {
								var e = this.hls.config.startLevel;
								return void 0 !== e ? e: this._firstLevel
							}
							return this._startLevel
						},
						set: function(e) {
							this._startLevel = e
						}
					},
					{
						key: "nextLoadLevel",
						get: function() {
							return - 1 !== this.manualLevelIndex ? this.manualLevelIndex: this.hls.nextAutoLevel
						},
						set: function(e) {
							this.level = e,
							-1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
						}
					}]),
					t
				} (lt),
				mr = yr,
				br = r(6),
				_r = function(e) {
					function t(r) {
						re(this, t);
						var n = ne(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.MEDIA_DETACHING, nt.a.FRAG_PARSING_METADATA));
						return n.id3Track = void 0,
						n.media = void 0,
						n
					}
					return ie(t, e),
					t.prototype.destroy = function() {
						lt.prototype.destroy.call(this)
					},
					t.prototype.onMediaAttached = function(e) {
						this.media = e.media,
						this.media
					},
					t.prototype.onMediaDetaching = function() {
						te(this.id3Track),
						this.id3Track = void 0,
						this.media = void 0
					},
					t.prototype.getID3Track = function(e) {
						for (var t = 0; t < e.length; t++) {
							var r = e[t];
							if ("metadata" === r.kind && "id3" === r.label) return ee(r, this.media),
							r
						}
						return this.media.addTextTrack("metadata", "id3")
					},
					t.prototype.onFragParsingMetadata = function(e) {
						var t = e.frag,
						r = e.samples;
						this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
						for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue,
						i = 0; i < r.length; i++) {
							var a = br.a.getID3Frames(r[i].data);
							if (a) {
								var o = r[i].pts,
								s = i < r.length - 1 ? r[i + 1].pts: t.endPTS;
								o === s && (s += 1e-4);
								for (var l = 0; l < a.length; l++) {
									var u = a[l];
									if (!br.a.isTimeStampFrame(u)) {
										var c = new n(o, s, "");
										c.value = u,
										this.id3Track.addCue(c)
									}
								}
							}
						}
					},
					t
				} (lt),
				Er = _r,
				Tr = function() {
					function e(t) {
						oe(this, e),
						this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0,
						this.estimate_ = 0,
						this.totalWeight_ = 0
					}
					return e.prototype.sample = function(e, t) {
						var r = Math.pow(this.alpha_, e);
						this.estimate_ = t * (1 - r) + r * this.estimate_,
						this.totalWeight_ += e
					},
					e.prototype.getTotalWeight = function() {
						return this.totalWeight_
					},
					e.prototype.getEstimate = function() {
						if (this.alpha_) {
							var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
							return this.estimate_ / e
						}
						return this.estimate_
					},
					e
				} (),
				Sr = Tr,
				wr = function() {
					function e(t, r, n, i) {
						se(this, e),
						this.hls = t,
						this.defaultEstimate_ = i,
						this.minWeight_ = .001,
						this.minDelayMs_ = 50,
						this.slow_ = new Sr(r),
						this.fast_ = new Sr(n)
					}
					return e.prototype.sample = function(e, t) {
						e = Math.max(e, this.minDelayMs_);
						var r = 8e3 * t / e,
						n = e / 1e3;
						this.fast_.sample(n, r),
						this.slow_.sample(n, r)
					},
					e.prototype.canEstimate = function() {
						var e = this.fast_;
						return e && e.getTotalWeight() >= this.minWeight_
					},
					e.prototype.getEstimate = function() {
						return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
					},
					e.prototype.destroy = function() {},
					e
				} (),
				Rr = wr,
				Ar = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Lr = window,
				Dr = Lr.performance,
				kr = function(e) {
					function t(r) {
						le(this, t);
						var n = ue(this, e.call(this, r, nt.a.FRAG_LOADING, nt.a.FRAG_LOADED, nt.a.FRAG_BUFFERED, nt.a.ERROR));
						return n.lastLoadedFragLevel = 0,
						n._nextAutoLevel = -1,
						n.hls = r,
						n.timer = null,
						n._bwEstimator = null,
						n.onCheck = n._abandonRulesCheck.bind(n),
						n
					}
					return ce(t, e),
					t.prototype.destroy = function() {
						this.clearTimer(),
						lt.prototype.destroy.call(this)
					},
					t.prototype.onFragLoading = function(e) {
						var t = e.frag;
						if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
							var r = this.hls,
							n = r.config,
							i = t.level,
							a = r.levels[i].details.live,
							o = void 0,
							s = void 0;
							a ? (o = n.abrEwmaFastLive, s = n.abrEwmaSlowLive) : (o = n.abrEwmaFastVoD, s = n.abrEwmaSlowVoD),
							this._bwEstimator = new Rr(r, s, o, n.abrEwmaDefaultEstimate)
						}
					},
					t.prototype._abandonRulesCheck = function() {
						var e = this.hls,
						t = e.media,
						r = this.fragCurrent;
						if (r) {
							var n = r.loader,
							i = e.minAutoLevel;
							if (!n || n.stats && n.stats.aborted) return it.b.warn("frag loader destroy or aborted, disarm abandonRules"),
							this.clearTimer(),
							void(this._nextAutoLevel = -1);
							var a = n.stats;
							if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
								var o = Dr.now() - a.trequest,
								s = Math.abs(t.playbackRate);
								if (o > 500 * r.duration / s) {
									var l = e.levels,
									u = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / o),
									c = l[r.level],
									d = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate,
									f = a.total ? a.total: Math.max(a.loaded, Math.round(r.duration * d / 8)),
									h = t.currentTime,
									p = (f - a.loaded) / u,
									g = (Vt.bufferInfo(t, h, e.config.maxBufferHole).end - h) / s;
									if (g < 2 * r.duration / s && p > g) {
										var v = void 0,
										y = void 0;
										for (y = r.level - 1; y > i; y--) {
											var m = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
											if ((v = r.duration * m / (6.4 * u)) < g) break
										}
										v < p && (it.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + v.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), e.nextLoadLevel = y, this._bwEstimator.sample(o, a.loaded), n.abort(), this.clearTimer(), e.trigger(nt.a.FRAG_LOAD_EMERGENCY_ABORTED, {
											frag: r,
											stats: a
										}))
									}
								}
							}
						}
					},
					t.prototype.onFragLoaded = function(e) {
						var t = e.frag;
						if ("main" === t.type && Object(rt.a)(t.sn)) {
							if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
								var r = this.hls.levels[t.level],
								n = (r.loaded ? r.loaded.bytes: 0) + e.stats.loaded,
								i = (r.loaded ? r.loaded.duration: 0) + e.frag.duration;
								r.loaded = {
									bytes: n,
									duration: i
								},
								r.realBitrate = Math.round(8 * n / i)
							}
							if (e.frag.bitrateTest) {
								var a = e.stats;
								a.tparsed = a.tbuffered = a.tload,
								this.onFragBuffered(e)
							}
						}
					},
					t.prototype.onFragBuffered = function(e) {
						var t = e.stats,
						r = e.frag;
						if (!0 !== t.aborted && "main" === r.type && Object(rt.a)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
							var n = t.tparsed - t.trequest;
							it.b.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))),
							this._bwEstimator.sample(n, t.loaded),
							t.bwEstimate = this._bwEstimator.getEstimate(),
							r.bitrateTest ? this.bitrateTestDelay = n / 1e3: this.bitrateTestDelay = 0
						}
					},
					t.prototype.onError = function(e) {
						switch (e.details) {
						case tt.a.FRAG_LOAD_ERROR:
						case tt.a.FRAG_LOAD_TIMEOUT:
							this.clearTimer()
						}
					},
					t.prototype.clearTimer = function() {
						clearInterval(this.timer),
						this.timer = null
					},
					t.prototype._findBestLevel = function(e, t, r, n, i, a, o, s, l) {
						for (var u = i; u >= n; u--) {
							var c = l[u];
							if (c) {
								var d = c.details,
								f = d ? d.totalduration / d.fragments.length: t,
								h = !!d && d.live,
								p = void 0;
								p = u <= e ? o * r: s * r;
								var g = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
								v = g * f / p;
								if (it.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(p) + "/" + g + "/" + f + "/" + a + "/" + v), p > g && (!v || h && !this.bitrateTestDelay || v < a)) return u
							}
						}
						return - 1
					},
					Ar(t, [{
						key: "nextAutoLevel",
						get: function() {
							var e = this._nextAutoLevel,
							t = this._bwEstimator;
							if (! ( - 1 === e || t && t.canEstimate())) return e;
							var r = this._nextABRAutoLevel;
							return - 1 !== e && (r = Math.min(e, r)),
							r
						},
						set: function(e) {
							this._nextAutoLevel = e
						}
					},
					{
						key: "_nextABRAutoLevel",
						get: function() {
							var e = this.hls,
							t = e.maxAutoLevel,
							r = e.levels,
							n = e.config,
							i = e.minAutoLevel,
							a = e.media,
							o = this.lastLoadedFragLevel,
							s = this.fragCurrent ? this.fragCurrent.duration: 0,
							l = a ? a.currentTime: 0,
							u = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
							c = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
							d = (Vt.bufferInfo(a, l, n.maxBufferHole).end - l) / u,
							f = this._findBestLevel(o, s, c, i, t, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
							if (f >= 0) return f;
							it.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
							var h = s ? Math.min(s, n.maxStarvationDelay) : n.maxStarvationDelay,
							p = n.abrBandWidthFactor,
							g = n.abrBandWidthUpFactor;
							if (0 === d) {
								var v = this.bitrateTestDelay;
								if (v) {
									h = (s ? Math.min(s, n.maxLoadingDelay) : n.maxLoadingDelay) - v,
									it.b.trace("bitrate test took " + Math.round(1e3 * v) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * h) + " ms"),
									p = g = 1
								}
							}
							return f = this._findBestLevel(o, s, c, i, t, d + h, p, g, r),
							Math.max(f, 0)
						}
					}]),
					t
				} (lt),
				Ir = kr,
				Cr = A(),
				Or = function(e) {
					function t(r) {
						de(this, t);
						var n = fe(this, e.call(this, r, nt.a.MEDIA_ATTACHING, nt.a.MEDIA_DETACHING, nt.a.MANIFEST_PARSED, nt.a.BUFFER_RESET, nt.a.BUFFER_APPENDING, nt.a.BUFFER_CODECS, nt.a.BUFFER_EOS, nt.a.BUFFER_FLUSHING, nt.a.LEVEL_PTS_UPDATED, nt.a.LEVEL_UPDATED));
						return n._msDuration = null,
						n._levelDuration = null,
						n._live = null,
						n._objectUrl = null,
						n.onsbue = n.onSBUpdateEnd.bind(n),
						n.onsbe = n.onSBUpdateError.bind(n),
						n.pendingTracks = {},
						n.tracks = {},
						n
					}
					return he(t, e),
					t.prototype.destroy = function() {
						lt.prototype.destroy.call(this)
					},
					t.prototype.onLevelPtsUpdated = function(e) {
						var t = e.type,
						r = this.tracks.audio;
						if ("audio" === t && r && "audio/mpeg" === r.container) {
							var n = this.sourceBuffer.audio;
							if (Math.abs(n.timestampOffset - e.start) > .1) {
								var i = n.updating;
								try {
									n.abort()
								} catch(e) {
									i = !0,
									it.b.warn("can not abort audio buffer: " + e)
								}
								i ? this.audioTimestampOffset = e.start: (it.b.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + e.start), n.timestampOffset = e.start)
							}
						}
					},
					t.prototype.onManifestParsed = function(e) {
						var t = e.audio,
						r = e.video || e.levels.length && e.altAudio,
						n = 0;
						e.altAudio && (t || r) && (n = (t ? 1 : 0) + (r ? 1 : 0), it.b.log(n + " sourceBuffer(s) expected")),
						this.sourceBufferNb = n
					},
					t.prototype.onMediaAttaching = function(e) {
						var t = this.media = e.media;
						if (t) {
							var r = this.mediaSource = new Cr;
							this.onmso = this.onMediaSourceOpen.bind(this),
							this.onmse = this.onMediaSourceEnded.bind(this),
							this.onmsc = this.onMediaSourceClose.bind(this),
							r.addEventListener("sourceopen", this.onmso),
							r.addEventListener("sourceended", this.onmse),
							r.addEventListener("sourceclose", this.onmsc),
							t.src = window.URL.createObjectURL(r),
							this._objectUrl = t.src
						}
					},
					t.prototype.onMediaDetaching = function() {
						it.b.log("media source detaching");
						var e = this.mediaSource;
						if (e) {
							if ("open" === e.readyState) try {
								e.endOfStream()
							} catch(e) {
								it.b.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
							}
							e.removeEventListener("sourceopen", this.onmso),
							e.removeEventListener("sourceended", this.onmse),
							e.removeEventListener("sourceclose", this.onmsc),
							this.media && (window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : it.b.warn("media.src was changed by a third party - skip cleanup")),
							this.mediaSource = null,
							this.media = null,
							this._objectUrl = null,
							this.pendingTracks = {},
							this.tracks = {},
							this.sourceBuffer = {},
							this.flushRange = [],
							this.segments = [],
							this.appended = 0
						}
						this.onmso = this.onmse = this.onmsc = null,
						this.hls.trigger(nt.a.MEDIA_DETACHED)
					},
					t.prototype.onMediaSourceOpen = function() {
						it.b.log("media source opened"),
						this.hls.trigger(nt.a.MEDIA_ATTACHED, {
							media: this.media
						});
						var e = this.mediaSource;
						e && e.removeEventListener("sourceopen", this.onmso),
						this.checkPendingTracks()
					},
					t.prototype.checkPendingTracks = function() {
						var e = this.pendingTracks,
						t = Object.keys(e).length;
						t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e), this.pendingTracks = {},
						this.doAppending())
					},
					t.prototype.onMediaSourceClose = function() {
						it.b.log("media source closed")
					},
					t.prototype.onMediaSourceEnded = function() {
						it.b.log("media source ended")
					},
					t.prototype.onSBUpdateEnd = function() {
						if (this.audioTimestampOffset) {
							var e = this.sourceBuffer.audio;
							it.b.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset),
							e.timestampOffset = this.audioTimestampOffset,
							delete this.audioTimestampOffset
						}
						this._needsFlush && this.doFlush(),
						this._needsEos && this.checkEos(),
						this.appending = !1;
						var t = this.parent,
						r = this.segments.reduce(function(e, r) {
							return r.parent === t ? e + 1 : e
						},
						0),
						n = {},
						i = this.sourceBuffer;
						for (var a in i) n[a] = i[a].buffered;
						this.hls.trigger(nt.a.BUFFER_APPENDED, {
							parent: t,
							pending: r,
							timeRanges: n
						}),
						this._needsFlush || this.doAppending(),
						this.updateMediaElementDuration()
					},
					t.prototype.onSBUpdateError = function(e) {
						it.b.error("sourceBuffer error:", e),
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.BUFFER_APPENDING_ERROR,
							fatal: !1
						})
					},
					t.prototype.onBufferReset = function() {
						var e = this.sourceBuffer;
						for (var t in e) {
							var r = e[t];
							try {
								this.mediaSource.removeSourceBuffer(r),
								r.removeEventListener("updateend", this.onsbue),
								r.removeEventListener("error", this.onsbe)
							} catch(e) {}
						}
						this.sourceBuffer = {},
						this.flushRange = [],
						this.segments = [],
						this.appended = 0
					},
					t.prototype.onBufferCodecs = function(e) {
						if (0 === Object.keys(this.sourceBuffer).length) {
							for (var t in e) this.pendingTracks[t] = e[t];
							var r = this.mediaSource;
							r && "open" === r.readyState && this.checkPendingTracks()
						}
					},
					t.prototype.createSourceBuffers = function(e) {
						var t = this.sourceBuffer,
						r = this.mediaSource;
						for (var n in e) if (!t[n]) {
							var i = e[n],
							a = i.levelCodec || i.codec,
							o = i.container + ";codecs=" + a;
							it.b.log("creating sourceBuffer(" + o + ")");
							try {
								var s = t[n] = r.addSourceBuffer(o);
								s.addEventListener("updateend", this.onsbue),
								s.addEventListener("error", this.onsbe),
								this.tracks[n] = {
									codec: a,
									container: i.container
								},
								i.buffer = s
							} catch(e) {
								it.b.error("error while trying to add sourceBuffer:" + e.message),
								this.hls.trigger(nt.a.ERROR, {
									type: tt.b.MEDIA_ERROR,
									details: tt.a.BUFFER_ADD_CODEC_ERROR,
									fatal: !1,
									err: e,
									mimeType: o
								})
							}
						}
						this.hls.trigger(nt.a.BUFFER_CREATED, {
							tracks: e
						})
					},
					t.prototype.onBufferAppending = function(e) {
						this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
					},
					t.prototype.onBufferAppendFail = function(e) {
						it.b.error("sourceBuffer error:", e.event),
						this.hls.trigger(nt.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.BUFFER_APPENDING_ERROR,
							fatal: !1
						})
					},
					t.prototype.onBufferEos = function(e) {
						var t = this.sourceBuffer,
						r = e.type;
						for (var n in t) r && n !== r || t[n].ended || (t[n].ended = !0, it.b.log(n + " sourceBuffer now EOS"));
						this.checkEos()
					},
					t.prototype.checkEos = function() {
						var e = this.sourceBuffer,
						t = this.mediaSource;
						if (!t || "open" !== t.readyState) return void(this._needsEos = !1);
						for (var r in e) {
							var n = e[r];
							if (!n.ended) return;
							if (n.updating) return void(this._needsEos = !0)
						}
						it.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
						try {
							t.endOfStream()
						} catch(e) {
							it.b.warn("exception while calling mediaSource.endOfStream()")
						}
						this._needsEos = !1
					},
					t.prototype.onBufferFlushing = function(e) {
						this.flushRange.push({
							start: e.startOffset,
							end: e.endOffset,
							type: e.type
						}),
						this.flushBufferCounter = 0,
						this.doFlush()
					},
					t.prototype.onLevelUpdated = function(e) {
						var t = e.details;
						t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._live = t.live, this.updateMediaElementDuration())
					},
					t.prototype.updateMediaElementDuration = function() {
						var e = this.hls.config,
						t = void 0;
						if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
							for (var r in this.sourceBuffer) if (!0 === this.sourceBuffer[r].updating) return;
							t = this.media.duration,
							null === this._msDuration && (this._msDuration = this.mediaSource.duration),
							!0 === this._live && !0 === e.liveDurationInfinity ? (it.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || !Object(rt.a)(t)) && (it.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
						}
					},
					t.prototype.doFlush = function() {
						for (; this.flushRange.length;) {
							var e = this.flushRange[0];
							if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
							this.flushRange.shift(),
							this.flushBufferCounter = 0
						}
						if (0 === this.flushRange.length) {
							this._needsFlush = !1;
							var t = 0,
							r = this.sourceBuffer;
							try {
								for (var n in r) t += r[n].buffered.length
							} catch(e) {
								it.b.error("error while accessing sourceBuffer.buffered")
							}
							this.appended = t,
							this.hls.trigger(nt.a.BUFFER_FLUSHED)
						}
					},
					t.prototype.doAppending = function() {
						var e = this.hls,
						t = this.sourceBuffer,
						r = this.segments;
						if (Object.keys(t).length) {
							if (this.media.error) return this.segments = [],
							void it.b.error("trying to append although a media error occured, flush segment and abort");
							if (this.appending) return;
							if (r && r.length) {
								var n = r.shift();
								try {
									var i = n.type,
									a = t[i];
									a ? a.updating ? r.unshift(n) : (a.ended = !1, this.parent = n.parent, a.appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
								} catch(t) {
									it.b.error("error while trying to append buffer:" + t.message),
									r.unshift(n);
									var o = {
										type: tt.b.MEDIA_ERROR,
										parent: n.parent
									};
									22 !== t.code ? (this.appendError ? this.appendError++:this.appendError = 1, o.details = tt.a.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (it.b.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), r = [], o.fatal = !0, e.trigger(nt.a.ERROR, o)) : (o.fatal = !1, e.trigger(nt.a.ERROR, o))) : (this.segments = [], o.details = tt.a.BUFFER_FULL_ERROR, o.fatal = !1, e.trigger(nt.a.ERROR, o))
								}
							}
						}
					},
					t.prototype.flushBuffer = function(e, t, r) {
						var n = void 0,
						i = void 0,
						a = void 0,
						o = void 0,
						s = void 0,
						l = void 0,
						u = this.sourceBuffer;
						if (Object.keys(u).length) {
							if (it.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
								for (var c in u) if (!r || c === r) {
									if (n = u[c], n.ended = !1, n.updating) return it.b.warn("cannot flush, sb updating in progress"),
									!1;
									try {
										for (i = 0; i < n.buffered.length; i++) if (a = n.buffered.start(i), o = n.buffered.end(i), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && t === Number.POSITIVE_INFINITY ? (s = e, l = t) : (s = Math.max(a, e), l = Math.min(o, t)), Math.min(l, o) - s > .5) return this.flushBufferCounter++,
										it.b.log("flush " + c + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + this.media.currentTime),
										n.remove(s, l),
										!1
									} catch(e) {
										it.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
									}
								}
							} else it.b.warn("abort flushing too many retries");
							it.b.log("buffer flushed")
						}
						return ! 0
					},
					t
				} (lt),
				Pr = Or,
				xr = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Mr = function(e) {
					function t(r) {
						pe(this, t);
						var n = ge(this, e.call(this, r, nt.a.FPS_DROP_LEVEL_CAPPING, nt.a.MEDIA_ATTACHING, nt.a.MANIFEST_PARSED, nt.a.BUFFER_CODECS, nt.a.MEDIA_DETACHING));
						return n.autoLevelCapping = Number.POSITIVE_INFINITY,
						n.firstLevel = null,
						n.levels = [],
						n.media = null,
						n.restrictedLevels = [],
						n.timer = null,
						n
					}
					return ve(t, e),
					t.prototype.destroy = function() {
						this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
					},
					t.prototype.onFpsDropLevelCapping = function(e) {
						t.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
					},
					t.prototype.onMediaAttaching = function(e) {
						this.media = e.media instanceof window.HTMLVideoElement ? e.media: null
					},
					t.prototype.onManifestParsed = function(e) {
						var t = this.hls;
						this.restrictedLevels = [],
						this.levels = e.levels,
						this.firstLevel = e.firstLevel,
						t.config.capLevelToPlayerSize && (e.video || e.levels.length && e.altAudio) && this._startCapping()
					},
					t.prototype.onBufferCodecs = function(e) {
						this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
					},
					t.prototype.onLevelsUpdated = function(e) {
						this.levels = e.levels
					},
					t.prototype.onMediaDetaching = function() {
						this._stopCapping()
					},
					t.prototype.detectPlayerSize = function() {
						if (this.media) {
							var e = this.levels ? this.levels.length: 0;
							if (e) {
								var t = this.hls;
								t.autoLevelCapping = this.getMaxLevel(e - 1),
								t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
								this.autoLevelCapping = t.autoLevelCapping
							}
						}
					},
					t.prototype.getMaxLevel = function(e) {
						var r = this;
						if (!this.levels) return - 1;
						var n = this.levels.filter(function(n, i) {
							return t.isLevelAllowed(i, r.restrictedLevels) && i <= e
						});
						return t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
					},
					t.prototype._startCapping = function() {
						this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
					},
					t.prototype._stopCapping = function() {
						this.restrictedLevels = [],
						this.firstLevel = null,
						this.autoLevelCapping = Number.POSITIVE_INFINITY,
						this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
					},
					t.isLevelAllowed = function(e) {
						return - 1 === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).indexOf(e)
					},
					t.getMaxLevelByMediaSize = function(e, t, r) {
						if (!e || e && !e.length) return - 1;
						for (var n = e.length - 1,
						i = 0; i < e.length; i += 1) {
							var a = e[i];
							if ((a.width >= t || a.height >= r) &&
							function(e, t) {
								return ! t || (e.width !== t.width || e.height !== t.height)
							} (a, e[i + 1])) {
								n = i;
								break
							}
						}
						return n
					},
					xr(t, [{
						key: "mediaWidth",
						get: function() {
							var e = void 0,
							r = this.media;
							return r && (e = r.width || r.clientWidth || r.offsetWidth, e *= t.contentScaleFactor),
							e
						}
					},
					{
						key: "mediaHeight",
						get: function() {
							var e = void 0,
							r = this.media;
							return r && (e = r.height || r.clientHeight || r.offsetHeight, e *= t.contentScaleFactor),
							e
						}
					}], [{
						key: "contentScaleFactor",
						get: function() {
							var e = 1;
							try {
								e = window.devicePixelRatio
							} catch(e) {}
							return e
						}
					}]),
					t
				} (lt),
				Fr = Mr,
				Nr = window,
				Ur = Nr.performance,
				Br = function(e) {
					function t(r) {
						return ye(this, t),
						me(this, e.call(this, r, nt.a.MEDIA_ATTACHING))
					}
					return be(t, e),
					t.prototype.destroy = function() {
						this.timer && clearInterval(this.timer),
						this.isVideoPlaybackQualityAvailable = !1
					},
					t.prototype.onMediaAttaching = function(e) {
						var t = this.hls.config;
						if (t.capLevelOnFPSDrop) {
							"function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media: null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
							clearInterval(this.timer),
							this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod)
						}
					},
					t.prototype.checkFPS = function(e, t, r) {
						var n = Ur.now();
						if (t) {
							if (this.lastTime) {
								var i = n - this.lastTime,
								a = r - this.lastDroppedFrames,
								o = t - this.lastDecodedFrames,
								s = 1e3 * a / i,
								l = this.hls;
								if (l.trigger(nt.a.FPS_DROP, {
									currentDropped: a,
									currentDecoded: o,
									totalDroppedFrames: r
								}), s > 0 && a > l.config.fpsDroppedMonitoringThreshold * o) {
									var u = l.currentLevel;
									it.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u),
									u > 0 && ( - 1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(nt.a.FPS_DROP_LEVEL_CAPPING, {
										level: u,
										droppedLevel: l.currentLevel
									}), l.autoLevelCapping = u, l.streamController.nextLevelSwitch())
								}
							}
							this.lastTime = n,
							this.lastDroppedFrames = r,
							this.lastDecodedFrames = t
						}
					},
					t.prototype.checkFPSInterval = function() {
						var e = this.video;
						if (e) if (this.isVideoPlaybackQualityAvailable) {
							var t = e.getVideoPlaybackQuality();
							this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
						} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
					},
					t
				} (lt),
				Gr = Br,
				jr = window,
				Kr = jr.performance,
				Hr = jr.XMLHttpRequest,
				Wr = function() {
					function e(t) {
						_e(this, e),
						t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
					}
					return e.prototype.destroy = function() {
						this.abort(),
						this.loader = null
					},
					e.prototype.abort = function() {
						var e = this.loader;
						e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()),
						window.clearTimeout(this.requestTimeout),
						this.requestTimeout = null,
						window.clearTimeout(this.retryTimeout),
						this.retryTimeout = null
					},
					e.prototype.load = function(e, t, r) {
						this.context = e,
						this.config = t,
						this.callbacks = r,
						this.stats = {
							trequest: Kr.now(),
							retry: 0
						},
						this.retryDelay = t.retryDelay,
						this.loadInternal()
					},
					e.prototype.loadInternal = function() {
						var e = void 0,
						t = this.context;
						e = this.loader = new Hr;
						var r = this.stats;
						r.tfirst = 0,
						r.loaded = 0;
						var n = this.xhrSetup;
						try {
							if (n) try {
								n(e, t.url)
							} catch(r) {
								e.open("GET", t.url, !0),
								n(e, t.url)
							}
							e.readyState || e.open("GET", t.url, !0)
						} catch(r) {
							return void this.callbacks.onError({
								code: e.status,
								text: r.message
							},
							t, e)
						}
						t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
						e.onreadystatechange = this.readystatechange.bind(this),
						e.onprogress = this.loadprogress.bind(this),
						e.responseType = t.responseType,
						this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
						e.send()
					},
					e.prototype.readystatechange = function(e) {
						var t = e.currentTarget,
						r = t.readyState,
						n = this.stats,
						i = this.context,
						a = this.config;
						if (!n.aborted && r >= 2) if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(Kr.now(), n.trequest)), 4 === r) {
							var o = t.status;
							if (o >= 200 && o < 300) {
								n.tload = Math.max(n.tfirst, Kr.now());
								var s = void 0,
								l = void 0;
								"arraybuffer" === i.responseType ? (s = t.response, l = s.byteLength) : (s = t.responseText, l = s.length),
								n.loaded = n.total = l;
								var u = {
									url: t.responseURL,
									data: s
								};
								this.callbacks.onSuccess(u, n, i, t)
							} else n.retry >= a.maxRetry || o >= 400 && o < 499 ? (it.b.error(o + " while loading " + i.url), this.callbacks.onError({
								code: o,
								text: t.statusText
							},
							i, t)) : (it.b.warn(o + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
						} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
					},
					e.prototype.loadtimeout = function() {
						it.b.warn("timeout while loading " + this.context.url),
						this.callbacks.onTimeout(this.stats, this.context, null)
					},
					e.prototype.loadprogress = function(e) {
						var t = e.currentTarget,
						r = this.stats;
						r.loaded = e.loaded,
						e.lengthComputable && (r.total = e.total);
						var n = this.callbacks.onProgress;
						n && n(r, this.context, null, t)
					},
					e
				} (),
				qr = Wr,
				Vr = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Yr = function(e) {
					function t(r) {
						Ee(this, t);
						var n = Te(this, e.call(this, r, nt.a.MANIFEST_LOADING, nt.a.MANIFEST_PARSED, nt.a.AUDIO_TRACK_LOADED, nt.a.AUDIO_TRACK_SWITCHED, nt.a.LEVEL_LOADED, nt.a.ERROR));
						return n._trackId = -1,
						n._selectDefaultTrack = !0,
						n.tracks = [],
						n.trackIdBlacklist = Object.create(null),
						n.audioGroupId = null,
						n
					}
					return Se(t, e),
					t.prototype.onManifestLoading = function() {
						this.tracks = [],
						this._trackId = -1,
						this._selectDefaultTrack = !0
					},
					t.prototype.onManifestParsed = function(e) {
						var t = this.tracks = e.audioTracks || [];
						this.hls.trigger(nt.a.AUDIO_TRACKS_UPDATED, {
							audioTracks: t
						})
					},
					t.prototype.onAudioTrackLoaded = function(e) {
						if (e.id >= this.tracks.length) return void it.b.warn("Invalid audio track id:", e.id);
						if (it.b.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
							var t = 1e3 * e.details.targetduration;
							this.setInterval(t)
						} ! e.details.live && this.hasInterval() && this.clearInterval()
					},
					t.prototype.onAudioTrackSwitched = function(e) {
						var t = this.tracks[e.id].groupId;
						t && this.audioGroupId !== t && (this.audioGroupId = t)
					},
					t.prototype.onLevelLoaded = function(e) {
						var t = this.hls.levels[e.level];
						if (t.audioGroupIds) {
							var r = t.audioGroupIds[t.urlId];
							this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
						}
					},
					t.prototype.onError = function(e) {
						e.type === tt.b.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === tt.a.AUDIO_TRACK_LOAD_ERROR && (it.b.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
					},
					t.prototype._setAudioTrack = function(e) {
						if (this._trackId === e && this.tracks[this._trackId].details) return void it.b.debug("Same id as current audio-track passed, and track details available -> no-op");
						if (e < 0 || e >= this.tracks.length) return void it.b.warn("Invalid id passed to audio-track controller");
						var t = this.tracks[e];
						it.b.log("Now switching to audio-track index " + e),
						this.clearInterval(),
						this._trackId = e;
						var r = t.url,
						n = t.type,
						i = t.id;
						this.hls.trigger(nt.a.AUDIO_TRACK_SWITCHING, {
							id: i,
							type: n,
							url: r
						}),
						this._loadTrackDetailsIfNeeded(t)
					},
					t.prototype.doTick = function() {
						this._updateTrack(this._trackId)
					},
					t.prototype._selectInitialAudioTrack = function() {
						var e = this,
						t = this.tracks;
						if (t.length) {
							var r = this.tracks[this._trackId],
							n = null;
							if (r && (n = r.name), this._selectDefaultTrack) {
								var i = t.filter(function(e) {
									return e.
								default
								});
								i.length ? t = i: it.b.warn("No default audio tracks defined")
							}
							var a = !1,
							o = function() {
								t.forEach(function(t) {
									a || e.audioGroupId && t.groupId !== e.audioGroupId || n && n !== t.name || (e._setAudioTrack(t.id), a = !0)
								})
							};
							o(),
							a || (n = null, o()),
							a || (it.b.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(nt.a.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: tt.a.AUDIO_TRACK_LOAD_ERROR,
								fatal: !0
							}))
						}
					},
					t.prototype._needsTrackLoading = function(e) {
						var t = e.details;
						return ! t || ( !! t.live || void 0)
					},
					t.prototype._loadTrackDetailsIfNeeded = function(e) {
						if (this._needsTrackLoading(e)) {
							var t = e.url,
							r = e.id;
							it.b.log("loading audio-track playlist for id: " + r),
							this.hls.trigger(nt.a.AUDIO_TRACK_LOADING, {
								url: t,
								id: r
							})
						}
					},
					t.prototype._updateTrack = function(e) {
						if (! (e < 0 || e >= this.tracks.length)) {
							this.clearInterval(),
							this._trackId = e,
							it.b.log("trying to update audio-track " + e);
							var t = this.tracks[e];
							this._loadTrackDetailsIfNeeded(t)
						}
					},
					t.prototype._handleLoadError = function() {
						this.trackIdBlacklist[this._trackId] = !0;
						var e = this._trackId,
						t = this.tracks[e],
						r = t.name,
						n = t.language,
						i = t.groupId;
						it.b.warn("Loading failed on audio track id: " + e + ", group-id: " + i + ', name/language: "' + r + '" / "' + n + '"');
						for (var a = e,
						o = 0; o < this.tracks.length; o++) if (!this.trackIdBlacklist[o]) {
							var s = this.tracks[o];
							if (s.name === r) {
								a = o;
								break
							}
						}
						if (a === e) return void it.b.warn('No fallback audio-track found for name/language: "' + r + '" / "' + n + '"');
						it.b.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId),
						this._setAudioTrack(a)
					},
					Vr(t, [{
						key: "audioTracks",
						get: function() {
							return this.tracks
						}
					},
					{
						key: "audioTrack",
						get: function() {
							return this._trackId
						},
						set: function(e) {
							this._setAudioTrack(e),
							this._selectDefaultTrack = !1
						}
					}]),
					t
				} (or),
				zr = Yr,
				Xr = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Qr = window,
				Jr = Qr.performance,
				$r = {
					STOPPED: "STOPPED",
					STARTING: "STARTING",
					IDLE: "IDLE",
					PAUSED: "PAUSED",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING",
					FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
					WAITING_TRACK: "WAITING_TRACK",
					PARSING: "PARSING",
					PARSED: "PARSED",
					BUFFER_FLUSHING: "BUFFER_FLUSHING",
					ENDED: "ENDED",
					ERROR: "ERROR",
					WAITING_INIT_PTS: "WAITING_INIT_PTS"
				},
				Zr = function(e) {
					function t(r, n) {
						we(this, t);
						var i = Re(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.MEDIA_DETACHING, nt.a.AUDIO_TRACKS_UPDATED, nt.a.AUDIO_TRACK_SWITCHING, nt.a.AUDIO_TRACK_LOADED, nt.a.KEY_LOADED, nt.a.FRAG_LOADED, nt.a.FRAG_PARSING_INIT_SEGMENT, nt.a.FRAG_PARSING_DATA, nt.a.FRAG_PARSED, nt.a.ERROR, nt.a.BUFFER_RESET, nt.a.BUFFER_CREATED, nt.a.BUFFER_APPENDED, nt.a.BUFFER_FLUSHED, nt.a.INIT_PTS_FOUND));
						return i.fragmentTracker = n,
						i.config = r.config,
						i.audioCodecSwap = !1,
						i._state = $r.STOPPED,
						i.initPTS = [],
						i.waitingFragment = null,
						i.videoTrackCC = null,
						i
					}
					return Ae(t, e),
					t.prototype.onHandlerDestroying = function() {
						this.stopLoad(),
						e.prototype.onHandlerDestroying.call(this)
					},
					t.prototype.onHandlerDestroyed = function() {
						this.state = $r.STOPPED,
						this.fragmentTracker = null,
						e.prototype.onHandlerDestroyed.call(this)
					},
					t.prototype.onInitPtsFound = function(e) {
						var t = e.id,
						r = e.frag.cc,
						n = e.initPTS;
						"main" === t && (this.initPTS[r] = n, this.videoTrackCC = r, it.b.log("InitPTS for cc: " + r + " found from video track: " + n), this.state === $r.WAITING_INIT_PTS && this.tick())
					},
					t.prototype.startLoad = function(e) {
						if (this.tracks) {
							var t = this.lastCurrentTime;
							this.stopLoad(),
							this.setInterval(100),
							this.fragLoadError = 0,
							t > 0 && -1 === e ? (it.b.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = $r.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition: e, this.state = $r.STARTING),
							this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
							this.tick()
						} else this.startPosition = e,
						this.state = $r.STOPPED
					},
					t.prototype.stopLoad = function() {
						var e = this.fragCurrent;
						e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e), this.fragCurrent = null),
						this.fragPrevious = null,
						this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
						this.state = $r.STOPPED
					},
					t.prototype.doTick = function() {
						var e = void 0,
						t = void 0,
						r = void 0,
						n = this.hls,
						i = n.config;
						switch (this.state) {
						case $r.ERROR:
						case $r.PAUSED:
						case $r.BUFFER_FLUSHING:
							break;
						case $r.STARTING:
							this.state = $r.WAITING_TRACK,
							this.loadedmetadata = !1;
							break;
						case $r.IDLE:
							var a = this.tracks;
							if (!a) break;
							if (!this.media && (this.startFragRequested || !i.startFragPrefetch)) break;
							if (this.loadedmetadata) e = this.media.currentTime;
							else if (void 0 === (e = this.nextLoadPosition)) break;
							var o = this.mediaBuffer ? this.mediaBuffer: this.media,
							s = this.videoBuffer ? this.videoBuffer: this.media,
							l = Vt.bufferInfo(o, e, i.maxBufferHole),
							u = Vt.bufferInfo(s, e, i.maxBufferHole),
							c = l.len,
							d = l.end,
							f = this.fragPrevious,
							h = Math.min(i.maxBufferLength, i.maxMaxBufferLength),
							p = Math.max(h, u.len),
							g = this.audioSwitch,
							v = this.trackId;
							if ((c < p || g) && v < a.length) {
								if (void 0 === (r = a[v].details)) {
									this.state = $r.WAITING_TRACK;
									break
								}
								if (!g && !r.live && f && f.sn === r.endSN && !l.nextStart && (!this.media.seeking || this.media.duration - d < f.duration / 2)) {
									this.hls.trigger(nt.a.BUFFER_EOS, {
										type: "audio"
									}),
									this.state = $r.ENDED;
									break
								}
								var y = r.fragments,
								m = y.length,
								b = y[0].start,
								_ = y[m - 1].start + y[m - 1].duration,
								E = void 0;
								if (g) if (r.live && !r.PTSKnown) it.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
								d = 0;
								else if (d = e, r.PTSKnown && e < b) {
									if (! (l.end > b || l.nextStart)) return;
									it.b.log("alt audio track ahead of main track, seek to start of alt audio track"),
									this.media.currentTime = b + .05
								}
								if (r.initSegment && !r.initSegment.data) E = r.initSegment;
								else if (d <= b) {
									if (E = y[0], null !== this.videoTrackCC && E.cc !== this.videoTrackCC && (E = P(y, this.videoTrackCC)), r.live && E.loadIdx && E.loadIdx === this.fragLoadIdx) {
										var T = l.nextStart ? l.nextStart: b;
										return it.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (T + .05)),
										void(this.media.currentTime = T + .05)
									}
								} else {
									var S = void 0,
									w = i.maxFragLookUpTolerance,
									R = f ? y[f.sn - y[0].sn + 1] : void 0,
									A = function(e) {
										var t = Math.min(w, e.duration);
										return e.start + e.duration - t <= d ? 1 : e.start - t > d && e.start ? -1 : 0
									};
									d < _ ? (d > _ - w && (w = 0), S = R && !A(R) ? R: qt.search(y, A)) : S = y[m - 1],
									S && (E = S, b = S.start, f && E.level === f.level && E.sn === f.sn && (E.sn < r.endSN ? (E = y[E.sn + 1 - r.startSN], it.b.log("SN just loaded, load next one: " + E.sn)) : E = null))
								}
								E && (E.encrypted ? (it.b.log("Loading key for " + E.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + v), this.state = $r.KEY_LOADING, n.trigger(nt.a.KEY_LOADING, {
									frag: E
								})) : (it.b.log("Loading " + E.sn + ", cc: " + E.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + v + ", currentTime:" + e + ",bufferEnd:" + d.toFixed(3)), (g || this.fragmentTracker.getState(E) === Kt.NOT_LOADED) && (this.fragCurrent = E, this.startFragRequested = !0, Object(rt.a)(E.sn) && (this.nextLoadPosition = E.start + E.duration), n.trigger(nt.a.FRAG_LOADING, {
									frag: E
								}), this.state = $r.FRAG_LOADING)))
							}
							break;
						case $r.WAITING_TRACK:
							t = this.tracks[this.trackId],
							t && t.details && (this.state = $r.IDLE);
							break;
						case $r.FRAG_LOADING_WAITING_RETRY:
							var L = Jr.now(),
							D = this.retryDate;
							o = this.media;
							var k = o && o.seeking; (!D || L >= D || k) && (it.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = $r.IDLE);
							break;
						case $r.WAITING_INIT_PTS:
							var I = this.videoTrackCC;
							if (void 0 === this.initPTS[I]) break;
							var C = this.waitingFragment;
							if (C) {
								var O = C.frag.cc;
								I !== O ? (t = this.tracks[this.trackId], t.details && t.details.live && (it.b.warn("Waiting fragment CC (" + O + ") does not match video track CC (" + I + ")"), this.waitingFragment = null, this.state = $r.IDLE)) : (this.state = $r.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
							} else this.state = $r.IDLE;
							break;
						case $r.STOPPED:
						case $r.FRAG_LOADING:
						case $r.PARSING:
						case $r.PARSED:
						case $r.ENDED:
						}
					},
					t.prototype.onMediaAttached = function(e) {
						var t = this.media = this.mediaBuffer = e.media;
						this.onvseeking = this.onMediaSeeking.bind(this),
						this.onvended = this.onMediaEnded.bind(this),
						t.addEventListener("seeking", this.onvseeking),
						t.addEventListener("ended", this.onvended);
						var r = this.config;
						this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
					},
					t.prototype.onMediaDetaching = function() {
						var e = this.media;
						e && e.ended && (it.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
						e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
						this.media = this.mediaBuffer = this.videoBuffer = null,
						this.loadedmetadata = !1,
						this.stopLoad()
					},
					t.prototype.onMediaSeeking = function() {
						this.state === $r.ENDED && (this.state = $r.IDLE),
						this.media && (this.lastCurrentTime = this.media.currentTime),
						this.tick()
					},
					t.prototype.onMediaEnded = function() {
						this.startPosition = this.lastCurrentTime = 0
					},
					t.prototype.onAudioTracksUpdated = function(e) {
						it.b.log("audio tracks updated"),
						this.tracks = e.audioTracks
					},
					t.prototype.onAudioTrackSwitching = function(e) {
						var t = !!e.url;
						this.trackId = e.id,
						this.fragCurrent = null,
						this.state = $r.PAUSED,
						this.waitingFragment = null,
						t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
						t && (this.audioSwitch = !0, this.state = $r.IDLE),
						this.tick()
					},
					t.prototype.onAudioTrackLoaded = function(e) {
						var t = e.details,
						r = e.id,
						n = this.tracks[r],
						i = t.totalduration,
						a = 0;
						if (it.b.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), t.live) {
							var o = n.details;
							o && t.fragments.length > 0 ? (C(o, t), a = t.fragments[0].start, t.PTSKnown ? it.b.log("live audio playlist sliding:" + a.toFixed(3)) : it.b.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, it.b.log("live audio playlist - first load, unknown sliding"))
						} else t.PTSKnown = !1;
						if (n.details = t, !this.startFragRequested) {
							if ( - 1 === this.startPosition) {
								var s = t.startTimeOffset;
								Object(rt.a)(s) ? (it.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s) : this.startPosition = 0
							}
							this.nextLoadPosition = this.startPosition
						}
						this.state === $r.WAITING_TRACK && (this.state = $r.IDLE),
						this.tick()
					},
					t.prototype.onKeyLoaded = function() {
						this.state === $r.KEY_LOADING && (this.state = $r.IDLE, this.tick())
					},
					t.prototype.onFragLoaded = function(e) {
						var t = this.fragCurrent,
						r = e.frag;
						if (this.state === $r.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
							var n = this.tracks[this.trackId],
							i = n.details,
							a = i.totalduration,
							o = t.level,
							s = t.sn,
							l = t.cc,
							u = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
							c = this.stats = e.stats;
							if ("initSegment" === s) this.state = $r.IDLE,
							c.tparsed = c.tbuffered = Jr.now(),
							i.initSegment.data = e.payload,
							this.hls.trigger(nt.a.FRAG_BUFFERED, {
								stats: c,
								frag: t,
								id: "audio"
							}),
							this.tick();
							else {
								this.state = $r.PARSING,
								this.appended = !1,
								this.demuxer || (this.demuxer = new rr(this.hls, "audio"));
								var d = this.initPTS[l],
								f = i.initSegment ? i.initSegment.data: [];
								if (i.initSegment || void 0 !== d) {
									this.pendingBuffering = !0,
									it.b.log("Demuxing " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o);
									this.demuxer.push(e.payload, f, u, null, t, a, !1, d)
								} else it.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o),
								this.waitingFragment = e,
								this.state = $r.WAITING_INIT_PTS
							}
						}
						this.fragLoadError = 0
					},
					t.prototype.onFragParsingInitSegment = function(e) {
						var t = this.fragCurrent,
						r = e.frag;
						if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === $r.PARSING) {
							var n = e.tracks,
							i = void 0;
							if (n.video && delete n.video, i = n.audio) {
								i.levelCodec = i.codec,
								i.id = e.id,
								this.hls.trigger(nt.a.BUFFER_CODECS, n),
								it.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
								var a = i.initSegment;
								if (a) {
									var o = {
										type: "audio",
										data: a,
										parent: "audio",
										content: "initSegment"
									};
									this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(nt.a.BUFFER_APPENDING, o))
								}
								this.tick()
							}
						}
					},
					t.prototype.onFragParsingData = function(e) {
						var t = this,
						r = this.fragCurrent,
						n = e.frag;
						if (r && "audio" === e.id && "audio" === e.type && n.sn === r.sn && n.level === r.level && this.state === $r.PARSING) {
							var i = this.trackId,
							a = this.tracks[i],
							o = this.hls;
							Object(rt.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration),
							r.addElementaryStream(gt.ElementaryStreamTypes.AUDIO),
							it.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb),
							I(a.details, r, e.startPTS, e.endPTS);
							var s = this.audioSwitch,
							l = this.media,
							u = !1;
							if (s && l) if (l.readyState) {
								var c = l.currentTime;
								it.b.log("switching audio track : currentTime:" + c),
								c >= e.startPTS && (it.b.log("switching audio track : flushing all audio"), this.state = $r.BUFFER_FLUSHING, o.trigger(nt.a.BUFFER_FLUSHING, {
									startOffset: 0,
									endOffset: Number.POSITIVE_INFINITY,
									type: "audio"
								}), u = !0, this.audioSwitch = !1, o.trigger(nt.a.AUDIO_TRACK_SWITCHED, {
									id: i
								}))
							} else this.audioSwitch = !1,
							o.trigger(nt.a.AUDIO_TRACK_SWITCHED, {
								id: i
							});
							var d = this.pendingData;
							if (!d) return it.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
							void o.trigger(nt.a.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: null,
								fatal: !0
							});
							this.audioSwitch || ([e.data1, e.data2].forEach(function(t) {
								t && t.length && d.push({
									type: e.type,
									data: t,
									parent: "audio",
									content: "data"
								})
							}), !u && d.length && (d.forEach(function(e) {
								t.state === $r.PARSING && (t.pendingBuffering = !0, t.hls.trigger(nt.a.BUFFER_APPENDING, e))
							}), this.pendingData = [], this.appended = !0)),
							this.tick()
						}
					},
					t.prototype.onFragParsed = function(e) {
						var t = this.fragCurrent,
						r = e.frag;
						t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === $r.PARSING && (this.stats.tparsed = Jr.now(), this.state = $r.PARSED, this._checkAppendedParsed())
					},
					t.prototype.onBufferReset = function() {
						this.mediaBuffer = this.videoBuffer = null,
						this.loadedmetadata = !1
					},
					t.prototype.onBufferCreated = function(e) {
						var t = e.tracks.audio;
						t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0),
						e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
					},
					t.prototype.onBufferAppended = function(e) {
						if ("audio" === e.parent) {
							var t = this.state;
							t !== $r.PARSING && t !== $r.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
						}
					},
					t.prototype._checkAppendedParsed = function() {
						if (! (this.state !== $r.PARSED || this.appended && this.pendingBuffering)) {
							var e = this.fragCurrent,
							t = this.stats,
							r = this.hls;
							if (e) {
								this.fragPrevious = e,
								t.tbuffered = Jr.now(),
								r.trigger(nt.a.FRAG_BUFFERED, {
									stats: t,
									frag: e,
									id: "audio"
								});
								var n = this.mediaBuffer ? this.mediaBuffer: this.media;
								it.b.log("audio buffered : " + ir.toString(n.buffered)),
								this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(nt.a.AUDIO_TRACK_SWITCHED, {
									id: this.trackId
								})),
								this.state = $r.IDLE
							}
							this.tick()
						}
					},
					t.prototype.onError = function(e) {
						var t = e.frag;
						if (!t || "audio" === t.type) switch (e.details) {
						case tt.a.FRAG_LOAD_ERROR:
						case tt.a.FRAG_LOAD_TIMEOUT:
							var r = e.frag;
							if (r && "audio" !== r.type) break;
							if (!e.fatal) {
								var n = this.fragLoadError;
								n ? n++:n = 1;
								var i = this.config;
								if (n <= i.fragLoadingMaxRetry) {
									this.fragLoadError = n;
									var a = Math.min(Math.pow(2, n - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
									it.b.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"),
									this.retryDate = Jr.now() + a,
									this.state = $r.FRAG_LOADING_WAITING_RETRY
								} else it.b.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."),
								e.fatal = !0,
								this.state = $r.ERROR
							}
							break;
						case tt.a.AUDIO_TRACK_LOAD_ERROR:
						case tt.a.AUDIO_TRACK_LOAD_TIMEOUT:
						case tt.a.KEY_LOAD_ERROR:
						case tt.a.KEY_LOAD_TIMEOUT:
							this.state !== $r.ERROR && (this.state = e.fatal ? $r.ERROR: $r.IDLE, it.b.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
							break;
						case tt.a.BUFFER_FULL_ERROR:
							if ("audio" === e.parent && (this.state === $r.PARSING || this.state === $r.PARSED)) {
								var o = this.mediaBuffer,
								s = this.media.currentTime;
								if (o && Vt.isBuffered(o, s) && Vt.isBuffered(o, s + .5)) {
									var l = this.config;
									l.maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, it.b.warn("AudioStreamController: reduce max buffer length to " + l.maxMaxBufferLength + "s")),
									this.state = $r.IDLE
								} else it.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
								this.fragCurrent = null,
								this.state = $r.BUFFER_FLUSHING,
								this.hls.trigger(nt.a.BUFFER_FLUSHING, {
									startOffset: 0,
									endOffset: Number.POSITIVE_INFINITY,
									type: "audio"
								})
							}
						}
					},
					t.prototype.onBufferFlushed = function() {
						var e = this,
						t = this.pendingData;
						t && t.length ? (it.b.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach(function(t) {
							e.hls.trigger(nt.a.BUFFER_APPENDING, t)
						}), this.appended = !0, this.pendingData = [], this.state = $r.PARSED) : (this.state = $r.IDLE, this.fragPrevious = null, this.tick())
					},
					Xr(t, [{
						key: "state",
						set: function(e) {
							if (this.state !== e) {
								var t = this.state;
								this._state = e,
								it.b.log("audio stream:" + t + "->" + e)
							}
						},
						get: function() {
							return this._state
						}
					}]),
					t
				} (or),
				en = Zr,
				tn = function() {
					function e(e) {
						return "string" == typeof e && ( !! a[e.toLowerCase()] && e.toLowerCase())
					}
					function t(e) {
						return "string" == typeof e && ( !! o[e.toLowerCase()] && e.toLowerCase())
					}
					function r(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) e[n] = r[n]
						}
						return e
					}
					function n(n, a, o) {
						var s = this,
						l = function() {
							if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
						} (),
						u = {};
						l ? s = document.createElement("custom") : u.enumerable = !0,
						s.hasBeenReset = !1;
						var c = "",
						d = !1,
						f = n,
						h = a,
						p = o,
						g = null,
						v = "",
						y = !0,
						m = "auto",
						b = "start",
						_ = 50,
						E = "middle",
						T = 50,
						S = "middle";
						if (Object.defineProperty(s, "id", r({},
						u, {
							get: function() {
								return c
							},
							set: function(e) {
								c = "" + e
							}
						})), Object.defineProperty(s, "pauseOnExit", r({},
						u, {
							get: function() {
								return d
							},
							set: function(e) {
								d = !!e
							}
						})), Object.defineProperty(s, "startTime", r({},
						u, {
							get: function() {
								return f
							},
							set: function(e) {
								if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
								f = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "endTime", r({},
						u, {
							get: function() {
								return h
							},
							set: function(e) {
								if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
								h = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "text", r({},
						u, {
							get: function() {
								return p
							},
							set: function(e) {
								p = "" + e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "region", r({},
						u, {
							get: function() {
								return g
							},
							set: function(e) {
								g = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "vertical", r({},
						u, {
							get: function() {
								return v
							},
							set: function(t) {
								var r = e(t);
								if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
								v = r,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "snapToLines", r({},
						u, {
							get: function() {
								return y
							},
							set: function(e) {
								y = !!e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "line", r({},
						u, {
							get: function() {
								return m
							},
							set: function(e) {
								if ("number" != typeof e && e !== i) throw new SyntaxError("An invalid number or illegal string was specified.");
								m = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "lineAlign", r({},
						u, {
							get: function() {
								return b
							},
							set: function(e) {
								var r = t(e);
								if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
								b = r,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "position", r({},
						u, {
							get: function() {
								return _
							},
							set: function(e) {
								if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
								_ = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "positionAlign", r({},
						u, {
							get: function() {
								return E
							},
							set: function(e) {
								var r = t(e);
								if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
								E = r,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "size", r({},
						u, {
							get: function() {
								return T
							},
							set: function(e) {
								if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
								T = e,
								this.hasBeenReset = !0
							}
						})), Object.defineProperty(s, "align", r({},
						u, {
							get: function() {
								return S
							},
							set: function(e) {
								var r = t(e);
								if (!r) throw new SyntaxError("An invalid or illegal string was specified.");
								S = r,
								this.hasBeenReset = !0
							}
						})), s.displayState = void 0, l) return s
					}
					if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
					var i = "auto",
					a = {
						"": !0,
						lr: !0,
						rl: !0
					},
					o = {
						start: !0,
						middle: !0,
						end: !0,
						left: !0,
						right: !0
					};
					return n.prototype.getCueAsHTML = function() {
						return window.WebVTT.convertCueToDOMTree(window, this.text)
					},
					n
				} (),
				rn = function() {
					return {
						decode: function(e) {
							if (!e) return "";
							if ("string" != typeof e) throw new Error("Error - expected string data.");
							return decodeURIComponent(encodeURIComponent(e))
						}
					}
				};
				ke.prototype = {
					set: function(e, t) {
						this.get(e) || "" === t || (this.values[e] = t)
					},
					get: function(e, t, r) {
						return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
					},
					has: function(e) {
						return e in this.values
					},
					alt: function(e, t, r) {
						for (var n = 0; n < r.length; ++n) if (t === r[n]) {
							this.set(e, t);
							break
						}
					},
					integer: function(e, t) { / ^-?\d + $ / .test(t) && this.set(e, parseInt(t, 10))
					},
					percent: function(e, t) {
						return !! (t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
					}
				};
				var nn = new tn(0, 0, 0),
				an = "middle" === nn.align ? "middle": "center";
				Le.prototype = {
					parse: function(e) {
						function t() {
							var e = r.buffer,
							t = 0;
							for (e = Oe(e); t < e.length && "\r" !== e[t] && "\n" !== e[t];)++t;
							var n = e.substr(0, t);
							return "\r" === e[t] && ++t,
							"\n" === e[t] && ++t,
							r.buffer = e.substr(t),
							n
						}
						var r = this;
						e && (r.buffer += r.decoder.decode(e, {
							stream: !0
						}));
						try {
							var n = void 0;
							if ("INITIAL" === r.state) {
								if (!/\r\n|\n/.test(r.buffer)) return this;
								n = t();
								var i = n.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
								if (!i || !i[0]) throw new Error("Malformed WebVTT signature.");
								r.state = "HEADER"
							}
							for (var a = !1; r.buffer;) {
								if (!/\r\n|\n/.test(r.buffer)) return this;
								switch (a ? a = !1 : n = t(), r.state) {
								case "HEADER":
									/:/.test(n) ?
									function(e) {
										Ie(e,
										function(e, t) {},
										/:/)
									} (n) : n || (r.state = "ID");
									continue;
								case "NOTE":
									n || (r.state = "ID");
									continue;
								case "ID":
									if (/^NOTE($|[ \t])/.test(n)) {
										r.state = "NOTE";
										break
									}
									if (!n) continue;
									if (r.cue = new tn(0, 0, ""), r.state = "CUE", -1 === n.indexOf("--\x3e")) {
										r.cue.id = n;
										continue
									}
								case "CUE":
									try {
										Ce(n, r.cue, r.regionList)
									} catch(e) {
										r.cue = null,
										r.state = "BADCUE";
										continue
									}
									r.state = "CUETEXT";
									continue;
								case "CUETEXT":
									var o = -1 !== n.indexOf("--\x3e");
									if (!n || o && (a = !0)) {
										r.oncue && r.oncue(r.cue),
										r.cue = null,
										r.state = "ID";
										continue
									}
									r.cue.text && (r.cue.text += "\n"),
									r.cue.text += n;
									continue;
								case "BADCUE":
									n || (r.state = "ID");
									continue
								}
							}
						} catch(e) {
							"CUETEXT" === r.state && r.cue && r.oncue && r.oncue(r.cue),
							r.cue = null,
							r.state = "INITIAL" === r.state ? "BADWEBVTT": "BADCUE"
						}
						return this
					},
					flush: function() {
						var e = this;
						try {
							if (e.buffer += e.decoder.decode(), (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state) throw new Error("Malformed WebVTT signature.")
						} catch(e) {
							throw e
						}
						return e.onflush && e.onflush(),
						this
					}
				};
				var on = Le,
				sn = {
					42 : 225,
					92 : 233,
					94 : 237,
					95 : 243,
					96 : 250,
					123 : 231,
					124 : 247,
					125 : 209,
					126 : 241,
					127 : 9608,
					128 : 174,
					129 : 176,
					130 : 189,
					131 : 191,
					132 : 8482,
					133 : 162,
					134 : 163,
					135 : 9834,
					136 : 224,
					137 : 32,
					138 : 232,
					139 : 226,
					140 : 234,
					141 : 238,
					142 : 244,
					143 : 251,
					144 : 193,
					145 : 201,
					146 : 211,
					147 : 218,
					148 : 220,
					149 : 252,
					150 : 8216,
					151 : 161,
					152 : 42,
					153 : 8217,
					154 : 9473,
					155 : 169,
					156 : 8480,
					157 : 8226,
					158 : 8220,
					159 : 8221,
					160 : 192,
					161 : 194,
					162 : 199,
					163 : 200,
					164 : 202,
					165 : 203,
					166 : 235,
					167 : 206,
					168 : 207,
					169 : 239,
					170 : 212,
					171 : 217,
					172 : 249,
					173 : 219,
					174 : 171,
					175 : 187,
					176 : 195,
					177 : 227,
					178 : 205,
					179 : 204,
					180 : 236,
					181 : 210,
					182 : 242,
					183 : 213,
					184 : 245,
					185 : 123,
					186 : 125,
					187 : 92,
					188 : 94,
					189 : 95,
					190 : 124,
					191 : 8764,
					192 : 196,
					193 : 228,
					194 : 214,
					195 : 246,
					196 : 223,
					197 : 165,
					198 : 164,
					199 : 9475,
					200 : 197,
					201 : 229,
					202 : 216,
					203 : 248,
					204 : 9487,
					205 : 9491,
					206 : 9495,
					207 : 9499
				},
				ln = function(e) {
					var t = e;
					return sn.hasOwnProperty(e) && (t = sn[e]),
					String.fromCharCode(t)
				},
				un = 15,
				cn = 100,
				dn = {
					17 : 1,
					18 : 3,
					21 : 5,
					22 : 7,
					23 : 9,
					16 : 11,
					19 : 12,
					20 : 14
				},
				fn = {
					17 : 2,
					18 : 4,
					21 : 6,
					22 : 8,
					23 : 10,
					19 : 13,
					20 : 15
				},
				hn = {
					25 : 1,
					26 : 3,
					29 : 5,
					30 : 7,
					31 : 9,
					24 : 11,
					27 : 12,
					28 : 14
				},
				pn = {
					25 : 2,
					26 : 4,
					29 : 6,
					30 : 8,
					31 : 10,
					27 : 13,
					28 : 15
				},
				gn = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
				vn = {
					verboseFilter: {
						DATA: 3,
						DEBUG: 3,
						INFO: 2,
						WARNING: 2,
						TEXT: 1,
						ERROR: 0
					},
					time: null,
					verboseLevel: 0,
					setTime: function(e) {
						this.time = e
					},
					log: function(e, t) {
						this.verboseFilter[e];
						this.verboseLevel
					}
				},
				yn = function(e) {
					for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
					return t
				},
				mn = function() {
					function e(t, r, n, i, a) {
						xe(this, e),
						this.foreground = t || "white",
						this.underline = r || !1,
						this.italics = n || !1,
						this.background = i || "black",
						this.flash = a || !1
					}
					return e.prototype.reset = function() {
						this.foreground = "white",
						this.underline = !1,
						this.italics = !1,
						this.background = "black",
						this.flash = !1
					},
					e.prototype.setStyles = function(e) {
						for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
							var n = t[r];
							e.hasOwnProperty(n) && (this[n] = e[n])
						}
					},
					e.prototype.isDefault = function() {
						return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
					},
					e.prototype.equals = function(e) {
						return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
					},
					e.prototype.copy = function(e) {
						this.foreground = e.foreground,
						this.underline = e.underline,
						this.italics = e.italics,
						this.background = e.background,
						this.flash = e.flash
					},
					e.prototype.toString = function() {
						return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
					},
					e
				} (),
				bn = function() {
					function e(t, r, n, i, a, o) {
						xe(this, e),
						this.uchar = t || " ",
						this.penState = new mn(r, n, i, a, o)
					}
					return e.prototype.reset = function() {
						this.uchar = " ",
						this.penState.reset()
					},
					e.prototype.setChar = function(e, t) {
						this.uchar = e,
						this.penState.copy(t)
					},
					e.prototype.setPenState = function(e) {
						this.penState.copy(e)
					},
					e.prototype.equals = function(e) {
						return this.uchar === e.uchar && this.penState.equals(e.penState)
					},
					e.prototype.copy = function(e) {
						this.uchar = e.uchar,
						this.penState.copy(e.penState)
					},
					e.prototype.isEmpty = function() {
						return " " === this.uchar && this.penState.isDefault()
					},
					e
				} (),
				_n = function() {
					function e() {
						xe(this, e),
						this.chars = [];
						for (var t = 0; t < cn; t++) this.chars.push(new bn);
						this.pos = 0,
						this.currPenState = new mn
					}
					return e.prototype.equals = function(e) {
						for (var t = !0,
						r = 0; r < cn; r++) if (!this.chars[r].equals(e.chars[r])) {
							t = !1;
							break
						}
						return t
					},
					e.prototype.copy = function(e) {
						for (var t = 0; t < cn; t++) this.chars[t].copy(e.chars[t])
					},
					e.prototype.isEmpty = function() {
						for (var e = !0,
						t = 0; t < cn; t++) if (!this.chars[t].isEmpty()) {
							e = !1;
							break
						}
						return e
					},
					e.prototype.setCursor = function(e) {
						this.pos !== e && (this.pos = e),
						this.pos < 0 ? (vn.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > cn && (vn.log("ERROR", "Too large cursor position " + this.pos), this.pos = cn)
					},
					e.prototype.moveCursor = function(e) {
						var t = this.pos + e;
						if (e > 1) for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
						this.setCursor(t)
					},
					e.prototype.backSpace = function() {
						this.moveCursor( - 1),
						this.chars[this.pos].setChar(" ", this.currPenState)
					},
					e.prototype.insertChar = function(e) {
						e >= 144 && this.backSpace();
						var t = ln(e);
						if (this.pos >= cn) return void vn.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
						this.chars[this.pos].setChar(t, this.currPenState),
						this.moveCursor(1)
					},
					e.prototype.clearFromPos = function(e) {
						var t = void 0;
						for (t = e; t < cn; t++) this.chars[t].reset()
					},
					e.prototype.clear = function() {
						this.clearFromPos(0),
						this.pos = 0,
						this.currPenState.reset()
					},
					e.prototype.clearToEndOfRow = function() {
						this.clearFromPos(this.pos)
					},
					e.prototype.getTextString = function() {
						for (var e = [], t = !0, r = 0; r < cn; r++) {
							var n = this.chars[r].uchar;
							" " !== n && (t = !1),
							e.push(n)
						}
						return t ? "": e.join("")
					},
					e.prototype.setPenStyles = function(e) {
						this.currPenState.setStyles(e),
						this.chars[this.pos].setPenState(this.currPenState)
					},
					e
				} (),
				En = function() {
					function e() {
						xe(this, e),
						this.rows = [];
						for (var t = 0; t < un; t++) this.rows.push(new _n);
						this.currRow = un - 1,
						this.nrRollUpRows = null,
						this.reset()
					}
					return e.prototype.reset = function() {
						for (var e = 0; e < un; e++) this.rows[e].clear();
						this.currRow = un - 1
					},
					e.prototype.equals = function(e) {
						for (var t = !0,
						r = 0; r < un; r++) if (!this.rows[r].equals(e.rows[r])) {
							t = !1;
							break
						}
						return t
					},
					e.prototype.copy = function(e) {
						for (var t = 0; t < un; t++) this.rows[t].copy(e.rows[t])
					},
					e.prototype.isEmpty = function() {
						for (var e = !0,
						t = 0; t < un; t++) if (!this.rows[t].isEmpty()) {
							e = !1;
							break
						}
						return e
					},
					e.prototype.backSpace = function() {
						this.rows[this.currRow].backSpace()
					},
					e.prototype.clearToEndOfRow = function() {
						this.rows[this.currRow].clearToEndOfRow()
					},
					e.prototype.insertChar = function(e) {
						this.rows[this.currRow].insertChar(e)
					},
					e.prototype.setPen = function(e) {
						this.rows[this.currRow].setPenStyles(e)
					},
					e.prototype.moveCursor = function(e) {
						this.rows[this.currRow].moveCursor(e)
					},
					e.prototype.setCursor = function(e) {
						vn.log("INFO", "setCursor: " + e),
						this.rows[this.currRow].setCursor(e)
					},
					e.prototype.setPAC = function(e) {
						vn.log("INFO", "pacData = " + JSON.stringify(e));
						var t = e.row - 1;
						if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
							for (var r = 0; r < un; r++) this.rows[r].clear();
							var n = this.currRow + 1 - this.nrRollUpRows,
							i = this.lastOutputScreen;
							if (i) {
								var a = i.rows[n].cueStartTime;
								if (a && a < vn.time) for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(i.rows[n + o])
							}
						}
						this.currRow = t;
						var s = this.rows[this.currRow];
						if (null !== e.indent) {
							var l = e.indent,
							u = Math.max(l - 1, 0);
							s.setCursor(e.indent),
							e.color = s.chars[u].penState.foreground
						}
						var c = {
							foreground: e.color,
							underline: e.underline,
							italics: e.italics,
							background: "black",
							flash: !1
						};
						this.setPen(c)
					},
					e.prototype.setBkgData = function(e) {
						vn.log("INFO", "bkgData = " + JSON.stringify(e)),
						this.backSpace(),
						this.setPen(e),
						this.insertChar(32)
					},
					e.prototype.setRollUpRows = function(e) {
						this.nrRollUpRows = e
					},
					e.prototype.rollUp = function() {
						if (null === this.nrRollUpRows) return void vn.log("DEBUG", "roll_up but nrRollUpRows not set yet");
						vn.log("TEXT", this.getDisplayText());
						var e = this.currRow + 1 - this.nrRollUpRows,
						t = this.rows.splice(e, 1)[0];
						t.clear(),
						this.rows.splice(this.currRow, 0, t),
						vn.log("INFO", "Rolling up")
					},
					e.prototype.getDisplayText = function(e) {
						e = e || !1;
						for (var t = [], r = "", n = -1, i = 0; i < un; i++) {
							var a = this.rows[i].getTextString();
							a && (n = i + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()))
						}
						return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]": t.join("\n")),
						r
					},
					e.prototype.getTextAndFormat = function() {
						return this.rows
					},
					e
				} (),
				Tn = function() {
					function e(t, r) {
						xe(this, e),
						this.chNr = t,
						this.outputFilter = r,
						this.mode = null,
						this.verbose = 0,
						this.displayedMemory = new En,
						this.nonDisplayedMemory = new En,
						this.lastOutputScreen = new En,
						this.currRollUpRow = this.displayedMemory.rows[un - 1],
						this.writeScreen = this.displayedMemory,
						this.mode = null,
						this.cueStartTime = null
					}
					return e.prototype.reset = function() {
						this.mode = null,
						this.displayedMemory.reset(),
						this.nonDisplayedMemory.reset(),
						this.lastOutputScreen.reset(),
						this.currRollUpRow = this.displayedMemory.rows[un - 1],
						this.writeScreen = this.displayedMemory,
						this.mode = null,
						this.cueStartTime = null,
						this.lastCueEndTime = null
					},
					e.prototype.getHandler = function() {
						return this.outputFilter
					},
					e.prototype.setHandler = function(e) {
						this.outputFilter = e
					},
					e.prototype.setPAC = function(e) {
						this.writeScreen.setPAC(e)
					},
					e.prototype.setBkgData = function(e) {
						this.writeScreen.setBkgData(e)
					},
					e.prototype.setMode = function(e) {
						e !== this.mode && (this.mode = e, vn.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory: (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
					},
					e.prototype.insertChars = function(e) {
						for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
						var r = this.writeScreen === this.displayedMemory ? "DISP": "NON_DISP";
						vn.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)),
						"MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (vn.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
					},
					e.prototype.ccRCL = function() {
						vn.log("INFO", "RCL - Resume Caption Loading"),
						this.setMode("MODE_POP-ON")
					},
					e.prototype.ccBS = function() {
						vn.log("INFO", "BS - BackSpace"),
						"MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
					},
					e.prototype.ccAOF = function() {},
					e.prototype.ccAON = function() {},
					e.prototype.ccDER = function() {
						vn.log("INFO", "DER- Delete to End of Row"),
						this.writeScreen.clearToEndOfRow(),
						this.outputDataUpdate()
					},
					e.prototype.ccRU = function(e) {
						vn.log("INFO", "RU(" + e + ") - Roll Up"),
						this.writeScreen = this.displayedMemory,
						this.setMode("MODE_ROLL-UP"),
						this.writeScreen.setRollUpRows(e)
					},
					e.prototype.ccFON = function() {
						vn.log("INFO", "FON - Flash On"),
						this.writeScreen.setPen({
							flash: !0
						})
					},
					e.prototype.ccRDC = function() {
						vn.log("INFO", "RDC - Resume Direct Captioning"),
						this.setMode("MODE_PAINT-ON")
					},
					e.prototype.ccTR = function() {
						vn.log("INFO", "TR"),
						this.setMode("MODE_TEXT")
					},
					e.prototype.ccRTD = function() {
						vn.log("INFO", "RTD"),
						this.setMode("MODE_TEXT")
					},
					e.prototype.ccEDM = function() {
						vn.log("INFO", "EDM - Erase Displayed Memory"),
						this.displayedMemory.reset(),
						this.outputDataUpdate(!0)
					},
					e.prototype.ccCR = function() {
						vn.log("CR - Carriage Return"),
						this.writeScreen.rollUp(),
						this.outputDataUpdate(!0)
					},
					e.prototype.ccENM = function() {
						vn.log("INFO", "ENM - Erase Non-displayed Memory"),
						this.nonDisplayedMemory.reset()
					},
					e.prototype.ccEOC = function() {
						if (vn.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
							var e = this.displayedMemory;
							this.displayedMemory = this.nonDisplayedMemory,
							this.nonDisplayedMemory = e,
							this.writeScreen = this.nonDisplayedMemory,
							vn.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
						}
						this.outputDataUpdate(!0)
					},
					e.prototype.ccTO = function(e) {
						vn.log("INFO", "TO(" + e + ") - Tab Offset"),
						this.writeScreen.moveCursor(e)
					},
					e.prototype.ccMIDROW = function(e) {
						var t = {
							flash: !1
						};
						if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
						else {
							var r = Math.floor(e / 2) - 16,
							n = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
							t.foreground = n[r]
						}
						vn.log("INFO", "MIDROW: " + JSON.stringify(t)),
						this.writeScreen.setPen(t)
					},
					e.prototype.outputDataUpdate = function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = vn.time;
						null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null: t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
					},
					e.prototype.cueSplitAtTime = function(e) {
						this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
					},
					e
				} (),
				Sn = function() {
					function e(t, r, n) {
						xe(this, e),
						this.field = t || 1,
						this.outputs = [r, n],
						this.channels = [new Tn(1, r), new Tn(2, n)],
						this.currChNr = -1,
						this.lastCmdA = null,
						this.lastCmdB = null,
						this.bufferedData = [],
						this.startTime = null,
						this.lastTime = null,
						this.dataCounters = {
							padding: 0,
							char: 0,
							cmd: 0,
							other: 0
						}
					}
					return e.prototype.getHandler = function(e) {
						return this.channels[e].getHandler()
					},
					e.prototype.setHandler = function(e, t) {
						this.channels[e].setHandler(t)
					},
					e.prototype.addData = function(e, t) {
						var r = void 0,
						n = void 0,
						i = void 0,
						a = !1;
						this.lastTime = e,
						vn.setTime(e);
						for (var o = 0; o < t.length; o += 2) if (n = 127 & t[o], i = 127 & t[o + 1], 0 !== n || 0 !== i) {
							if (vn.log("DATA", "[" + yn([t[o], t[o + 1]]) + "] -> (" + yn([n, i]) + ")"), r = this.parseCmd(n, i), r || (r = this.parseMidrow(n, i)), r || (r = this.parsePAC(n, i)), r || (r = this.parseBackgroundAttributes(n, i)), !r && (a = this.parseChars(n, i))) if (this.currChNr && this.currChNr >= 0) {
								var s = this.channels[this.currChNr - 1];
								s.insertChars(a)
							} else vn.log("WARNING", "No channel found yet. TEXT-MODE?");
							r ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, vn.log("WARNING", "Couldn't parse cleaned data " + yn([n, i]) + " orig: " + yn([t[o], t[o + 1]])))
						} else this.dataCounters.padding += 2
					},
					e.prototype.parseCmd = function(e, t) {
						var r = null,
						n = (20 === e || 28 === e) && t >= 32 && t <= 47,
						i = (23 === e || 31 === e) && t >= 33 && t <= 35;
						if (!n && !i) return ! 1;
						if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null,
						this.lastCmdB = null,
						vn.log("DEBUG", "Repeated command (" + yn([e, t]) + ") is dropped"),
						!0;
						r = 20 === e || 23 === e ? 1 : 2;
						var a = this.channels[r - 1];
						return 20 === e || 28 === e ? 32 === t ? a.ccRCL() : 33 === t ? a.ccBS() : 34 === t ? a.ccAOF() : 35 === t ? a.ccAON() : 36 === t ? a.ccDER() : 37 === t ? a.ccRU(2) : 38 === t ? a.ccRU(3) : 39 === t ? a.ccRU(4) : 40 === t ? a.ccFON() : 41 === t ? a.ccRDC() : 42 === t ? a.ccTR() : 43 === t ? a.ccRTD() : 44 === t ? a.ccEDM() : 45 === t ? a.ccCR() : 46 === t ? a.ccENM() : 47 === t && a.ccEOC() : a.ccTO(t - 32),
						this.lastCmdA = e,
						this.lastCmdB = t,
						this.currChNr = r,
						!0
					},
					e.prototype.parseMidrow = function(e, t) {
						var r = null;
						if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
							if ((r = 17 === e ? 1 : 2) !== this.currChNr) return vn.log("ERROR", "Mismatch channel in midrow parsing"),
							!1;
							return this.channels[r - 1].ccMIDROW(t),
							vn.log("DEBUG", "MIDROW (" + yn([e, t]) + ")"),
							!0
						}
						return ! 1
					},
					e.prototype.parsePAC = function(e, t) {
						var r = null,
						n = null,
						i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127,
						a = (16 === e || 24 === e) && t >= 64 && t <= 95;
						if (!i && !a) return ! 1;
						if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null,
						this.lastCmdB = null,
						!0;
						r = e <= 23 ? 1 : 2,
						n = t >= 64 && t <= 95 ? 1 === r ? dn[e] : hn[e] : 1 === r ? fn[e] : pn[e];
						var o = this.interpretPAC(n, t);
						return this.channels[r - 1].setPAC(o),
						this.lastCmdA = e,
						this.lastCmdB = t,
						this.currChNr = r,
						!0
					},
					e.prototype.interpretPAC = function(e, t) {
						var r = t,
						n = {
							color: null,
							italics: !1,
							indent: null,
							underline: !1,
							row: e
						};
						return r = t > 95 ? t - 96 : t - 64,
						n.underline = 1 == (1 & r),
						r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2),
						n
					},
					e.prototype.parseChars = function(e, t) {
						var r = null,
						n = null,
						i = null;
						if (e >= 25 ? (r = 2, i = e - 8) : (r = 1, i = e), i >= 17 && i <= 19) {
							var a = t;
							a = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144,
							vn.log("INFO", "Special char '" + ln(a) + "' in channel " + r),
							n = [a]
						} else e >= 32 && e <= 127 && (n = 0 === t ? [e] : [e, t]);
						if (n) {
							var o = yn(n);
							vn.log("DEBUG", "Char codes =  " + o.join(",")),
							this.lastCmdA = null,
							this.lastCmdB = null
						}
						return n
					},
					e.prototype.parseBackgroundAttributes = function(e, t) {
						var r = void 0,
						n = void 0,
						i = void 0,
						a = void 0,
						o = (16 === e || 24 === e) && t >= 32 && t <= 47,
						s = (23 === e || 31 === e) && t >= 45 && t <= 47;
						return ! (!o && !s) && (r = {},
						16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = gn[n], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent": (r.foreground = "black", 47 === t && (r.underline = !0)), i = e < 24 ? 1 : 2, a = this.channels[i - 1], a.setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
					},
					e.prototype.reset = function() {
						for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
						this.lastCmdA = null,
						this.lastCmdB = null
					},
					e.prototype.cueSplitAtTime = function(e) {
						for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
					},
					e
				} (),
				wn = Sn,
				Rn = function() {
					function e(t, r) {
						Me(this, e),
						this.timelineController = t,
						this.trackName = r,
						this.startTime = null,
						this.endTime = null,
						this.screen = null
					}
					return e.prototype.dispatchCue = function() {
						null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
					},
					e.prototype.newCue = function(e, t, r) { (null === this.startTime || this.startTime > e) && (this.startTime = e),
						this.endTime = t,
						this.screen = r,
						this.timelineController.createCaptionsTrack(this.trackName)
					},
					e
				} (),
				An = Rn,
				Ln = function(e, t, r) {
					return e.substr(r || 0, t.length) === t
				},
				Dn = function(e) {
					var t = parseInt(e.substr( - 3)),
					r = parseInt(e.substr( - 6, 2)),
					n = parseInt(e.substr( - 9, 2)),
					i = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
					return Object(rt.a)(t) && Object(rt.a)(r) && Object(rt.a)(n) && Object(rt.a)(i) ? (t += 1e3 * r, t += 6e4 * n, t += 36e5 * i) : -1
				},
				kn = function(e) {
					for (var t = 5381,
					r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
					return (t >>> 0).toString()
				},
				In = function(e, t, r) {
					var n = e[t],
					i = e[n.prevCC];
					if (!i || !i.new && n.new) return e.ccOffset = e.presentationOffset = n.start,
					void(n.new = !1);
					for (; i && i.new;) e.ccOffset += n.start - i.start,
					n.new = !1,
					n = i,
					i = e[n.prevCC];
					e.presentationOffset = r
				},
				Cn = {
					parse: function(e, t, r, n, i, a) {
						var o = /\r\n|\n\r|\n|\r/g,
						s = Object(br.b)(new Uint8Array(e)).trim().replace(o, "\n").split("\n"),
						l = "00:00.000",
						u = 0,
						c = 0,
						d = 0,
						f = [],
						h = void 0,
						p = !0,
						g = new on;
						g.oncue = function(e) {
							var t = r[n],
							i = r.ccOffset;
							t && t.new && (void 0 !== c ? i = r.ccOffset = t.start: In(r, n, d)),
							d && (i = d + r.ccOffset - r.presentationOffset),
							e.startTime += i - c,
							e.endTime += i - c,
							e.id = kn(e.startTime.toString()) + kn(e.endTime.toString()) + kn(e.text),
							e.text = decodeURIComponent(encodeURIComponent(e.text)),
							e.endTime > 0 && f.push(e)
						},
						g.onparsingerror = function(e) {
							h = e
						},
						g.onflush = function() {
							if (h && a) return void a(h);
							i(f)
						},
						s.forEach(function(e) {
							if (p) {
								if (Ln(e, "X-TIMESTAMP-MAP=")) {
									p = !1,
									e.substr(16).split(",").forEach(function(e) {
										Ln(e, "LOCAL:") ? l = e.substr(6) : Ln(e, "MPEGTS:") && (u = parseInt(e.substr(7)))
									});
									try {
										t = t < 0 ? t + 8589934592 : t,
										u -= t,
										c = Dn(l) / 1e3,
										d = u / 9e4,
										-1 === c && (h = new Error("Malformed X-TIMESTAMP-MAP: " + e))
									} catch(t) {
										h = new Error("Malformed X-TIMESTAMP-MAP: " + e)
									}
									return
								}
								"" === e && (p = !1)
							}
							g.parse(e + "\n")
						}),
						g.flush()
					}
				},
				On = Cn,
				Pn = function(e) {
					function t(r) {
						Fe(this, t);
						var n = Ne(this, e.call(this, r, nt.a.MEDIA_ATTACHING, nt.a.MEDIA_DETACHING, nt.a.FRAG_PARSING_USERDATA, nt.a.FRAG_DECRYPTED, nt.a.MANIFEST_LOADING, nt.a.MANIFEST_LOADED, nt.a.FRAG_LOADED, nt.a.LEVEL_SWITCHING, nt.a.INIT_PTS_FOUND));
						if (n.hls = r, n.config = r.config, n.enabled = !0, n.Cues = r.config.cueHandler, n.textTracks = [], n.tracks = [], n.unparsedVttFrags = [], n.initPTS = void 0, n.cueRanges = [], n.captionsTracks = {},
						n.captionsProperties = {
							textTrack1: {
								label: n.config.captionsTextTrack1Label,
								languageCode: n.config.captionsTextTrack1LanguageCode
							},
							textTrack2: {
								label: n.config.captionsTextTrack2Label,
								languageCode: n.config.captionsTextTrack2LanguageCode
							}
						},
						n.config.enableCEA708Captions) {
							var i = new An(n, "textTrack1"),
							a = new An(n, "textTrack2");
							n.cea608Parser = new wn(0, i, a)
						}
						return n
					}
					return Ue(t, e),
					t.prototype.addCues = function(e, t, r, n) {
						for (var i = this.cueRanges,
						a = !1,
						o = i.length; o--;) {
							var s = i[o],
							l = Ge(s[0], s[1], t, r);
							if (l >= 0 && (s[0] = Math.min(s[0], t), s[1] = Math.max(s[1], r), a = !0, l / (r - t) > .5)) return
						}
						a || i.push([t, r]),
						this.Cues.newCue(this.captionsTracks[e], t, r, n)
					},
					t.prototype.onInitPtsFound = function(e) {
						var t = this;
						void 0 === this.initPTS && (this.initPTS = e.initPTS),
						this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(e) {
							t.onFragLoaded(e)
						}), this.unparsedVttFrags = [])
					},
					t.prototype.getExistingTrack = function(e) {
						var t = this.media;
						if (t) for (var r = 0; r < t.textTracks.length; r++) {
							var n = t.textTracks[r];
							if (n[e]) return n
						}
						return null
					},
					t.prototype.createCaptionsTrack = function(e) {
						var t = this.captionsProperties[e],
						r = t.label,
						n = t.languageCode,
						i = this.captionsTracks;
						if (!i[e]) {
							var a = this.getExistingTrack(e);
							if (a) i[e] = a,
							te(i[e]),
							ee(i[e], this.media);
							else {
								var o = this.createTextTrack("captions", r, n);
								o && (o[e] = !0, i[e] = o)
							}
						}
					},
					t.prototype.createTextTrack = function(e, t, r) {
						var n = this.media;
						if (n) return n.addTextTrack(e, t, r)
					},
					t.prototype.destroy = function() {
						lt.prototype.destroy.call(this)
					},
					t.prototype.onMediaAttaching = function(e) {
						this.media = e.media,
						this._cleanTracks()
					},
					t.prototype.onMediaDetaching = function() {
						var e = this.captionsTracks;
						Object.keys(e).forEach(function(t) {
							te(e[t]),
							delete e[t]
						})
					},
					t.prototype.onManifestLoading = function() {
						this.lastSn = -1,
						this.prevCC = -1,
						this.vttCCs = {
							ccOffset: 0,
							presentationOffset: 0
						},
						this._cleanTracks()
					},
					t.prototype._cleanTracks = function() {
						var e = this.media;
						if (e) {
							var t = e.textTracks;
							if (t) for (var r = 0; r < t.length; r++) te(t[r])
						}
					},
					t.prototype.onManifestLoaded = function(e) {
						var t = this;
						if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
							this.tracks = e.subtitles || [];
							var r = this.media ? this.media.textTracks: [];
							this.tracks.forEach(function(e, n) {
								var i = void 0;
								if (n < r.length) {
									var a = r[n];
									Be(a, e) && (i = a)
								}
								i || (i = t.createTextTrack("subtitles", e.name, e.lang)),
								e.
							default ? i.mode = t.hls.subtitleDisplay ? "showing": "hidden": i.mode = "disabled",
								t.textTracks.push(i)
							})
						}
					},
					t.prototype.onLevelSwitching = function() {
						this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
					},
					t.prototype.onFragLoaded = function(e) {
						var t = e.frag,
						r = e.payload;
						if ("main" === t.type) {
							var n = t.sn;
							if (n !== this.lastSn + 1) {
								var i = this.cea608Parser;
								i && i.reset()
							}
							this.lastSn = n
						} else if ("subtitle" === t.type) if (r.byteLength) {
							if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(e);
							var a = t.decryptdata;
							null != a && null != a.key && "AES-128" === a.method || this._parseVTTs(t, r)
						} else this.hls.trigger(nt.a.SUBTITLE_FRAG_PROCESSED, {
							success: !1,
							frag: t
						})
					},
					t.prototype._parseVTTs = function(e, t) {
						var r = this.vttCCs;
						r[e.cc] || (r[e.cc] = {
							start: e.start,
							prevCC: this.prevCC,
							new: !0
						},
						this.prevCC = e.cc);
						var n = this.textTracks,
						i = this.hls;
						On.parse(t, this.initPTS, r, e.cc,
						function(t) {
							var r = n[e.trackId];
							if ("disabled" === r.mode) return void i.trigger(nt.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: e
							});
							t.forEach(function(e) {
								if (!r.cues.getCueById(e.id)) try {
									r.addCue(e)
								} catch(n) {
									var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
									t.id = e.id,
									r.addCue(t)
								}
							}),
							i.trigger(nt.a.SUBTITLE_FRAG_PROCESSED, {
								success: !0,
								frag: e
							})
						},
						function(t) {
							it.b.log("Failed to parse VTT cue: " + t),
							i.trigger(nt.a.SUBTITLE_FRAG_PROCESSED, {
								success: !1,
								frag: e
							})
						})
					},
					t.prototype.onFragDecrypted = function(e) {
						var t = e.payload,
						r = e.frag;
						if ("subtitle" === r.type) {
							if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(e);
							this._parseVTTs(r, t)
						}
					},
					t.prototype.onFragParsingUserdata = function(e) {
						if (this.enabled && this.config.enableCEA708Captions) for (var t = 0; t < e.samples.length; t++) {
							var r = this.extractCea608Data(e.samples[t].bytes);
							this.cea608Parser.addData(e.samples[t].pts, r)
						}
					},
					t.prototype.extractCea608Data = function(e) {
						for (var t = 31 & e[0], r = 2, n = void 0, i = void 0, a = void 0, o = void 0, s = void 0, l = [], u = 0; u < t; u++) n = e[r++],
						i = 127 & e[r++],
						a = 127 & e[r++],
						o = 0 != (4 & n),
						s = 3 & n,
						0 === i && 0 === a || o && 0 === s && (l.push(i), l.push(a));
						return l
					},
					t
				} (lt),
				xn = Pn,
				Mn = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				Fn = function(e) {
					function t(r) {
						je(this, t);
						var n = Ke(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.MEDIA_DETACHING, nt.a.MANIFEST_LOADING, nt.a.MANIFEST_LOADED, nt.a.SUBTITLE_TRACK_LOADED));
						return n.tracks = [],
						n.trackId = -1,
						n.media = null,
						n.subtitleDisplay = !0,
						n
					}
					return He(t, e),
					t.prototype._onTextTracksChanged = function() {
						if (this.media) {
							for (var e = -1,
							t = We(this.media.textTracks), r = 0; r < t.length; r++) if ("hidden" === t[r].mode) e = r;
							else if ("showing" === t[r].mode) {
								e = r;
								break
							}
							this.subtitleTrack = e
						}
					},
					t.prototype.destroy = function() {
						lt.prototype.destroy.call(this)
					},
					t.prototype.onMediaAttached = function(e) {
						var t = this;
						this.media = e.media,
						this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
							t.trackChangeListener()
						},
						500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
					},
					t.prototype.onMediaDetaching = function() {
						this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
					},
					t.prototype.onManifestLoading = function() {
						this.tracks = [],
						this.trackId = -1
					},
					t.prototype.onManifestLoaded = function(e) {
						var t = this,
						r = e.subtitles || [];
						this.tracks = r,
						this.trackId = -1,
						this.hls.trigger(nt.a.SUBTITLE_TRACKS_UPDATED, {
							subtitleTracks: r
						}),
						r.forEach(function(e) {
							e.
						default && (t.media ? t.subtitleTrack = e.id: t.queuedDefaultTrack = e.id)
						})
					},
					t.prototype.onTick = function() {
						var e = this.trackId,
						t = this.tracks[e];
						if (t) {
							var r = t.details;
							r && !r.live || (it.b.log("(re)loading playlist for subtitle track " + e), this.hls.trigger(nt.a.SUBTITLE_TRACK_LOADING, {
								url: t.url,
								id: e
							}))
						}
					},
					t.prototype.onSubtitleTrackLoaded = function(e) {
						var t = this;
						e.id < this.tracks.length && (it.b.log("subtitle track " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.timer && (this.timer = setInterval(function() {
							t.onTick()
						},
						1e3 * e.details.targetduration, this)), !e.details.live && this.timer && this._stopTimer())
					},
					t.prototype.setSubtitleTrackInternal = function(e) {
						var t = this.hls,
						r = this.tracks;
						if (! ("number" != typeof e || e < -1 || e >= r.length) && (this._stopTimer(), this.trackId = e, it.b.log("switching to subtitle track " + e), t.trigger(nt.a.SUBTITLE_TRACK_SWITCH, {
							id: e
						}), -1 !== e)) {
							var n = r[e],
							i = n.details;
							i && !i.live || (it.b.log("(re)loading playlist for subtitle track " + e), t.trigger(nt.a.SUBTITLE_TRACK_LOADING, {
								url: n.url,
								id: e
							}))
						}
					},
					t.prototype._stopTimer = function() {
						this.timer && (clearInterval(this.timer), this.timer = null)
					},
					t.prototype._toggleTrackModes = function(e) {
						var t = this.media,
						r = this.subtitleDisplay,
						n = this.trackId;
						if (t) {
							var i = We(t.textTracks);
							if ( - 1 === e)[].slice.call(i).forEach(function(e) {
								e.mode = "disabled"
							});
							else {
								var a = i[n];
								a && (a.mode = "disabled")
							}
							var o = i[e];
							o && (o.mode = r ? "showing": "hidden")
						}
					},
					Mn(t, [{
						key: "subtitleTracks",
						get: function() {
							return this.tracks
						}
					},
					{
						key: "subtitleTrack",
						get: function() {
							return this.trackId
						},
						set: function(e) {
							this.trackId !== e && (this._toggleTrackModes(e), this.setSubtitleTrackInternal(e))
						}
					}]),
					t
				} (lt),
				Nn = Fn,
				Un = r(8),
				Bn = window,
				Gn = Bn.performance,
				jn = {
					STOPPED: "STOPPED",
					IDLE: "IDLE",
					KEY_LOADING: "KEY_LOADING",
					FRAG_LOADING: "FRAG_LOADING"
				},
				Kn = function(e) {
					function t(r) {
						qe(this, t);
						var n = Ve(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.ERROR, nt.a.KEY_LOADED, nt.a.FRAG_LOADED, nt.a.SUBTITLE_TRACKS_UPDATED, nt.a.SUBTITLE_TRACK_SWITCH, nt.a.SUBTITLE_TRACK_LOADED, nt.a.SUBTITLE_FRAG_PROCESSED));
						return n.config = r.config,
						n.vttFragSNsProcessed = {},
						n.vttFragQueues = void 0,
						n.currentlyProcessing = null,
						n.state = jn.STOPPED,
						n.currentTrackId = -1,
						n.decrypter = new Un.a(r.observer, r.config),
						n
					}
					return Ye(t, e),
					t.prototype.onHandlerDestroyed = function() {
						this.state = jn.STOPPED
					},
					t.prototype.clearVttFragQueues = function() {
						var e = this;
						this.vttFragQueues = {},
						this.tracks.forEach(function(t) {
							e.vttFragQueues[t.id] = []
						})
					},
					t.prototype.nextFrag = function() {
						if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
							var e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
							this.fragCurrent = e,
							this.hls.trigger(nt.a.FRAG_LOADING, {
								frag: e
							}),
							this.state = jn.FRAG_LOADING
						}
					},
					t.prototype.onSubtitleFragProcessed = function(e) {
						e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),
						this.currentlyProcessing = null,
						this.state = jn.IDLE,
						this.nextFrag()
					},
					t.prototype.onMediaAttached = function() {
						this.state = jn.IDLE
					},
					t.prototype.onError = function(e) {
						var t = e.frag;
						t && "subtitle" !== t.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
					},
					t.prototype.doTick = function() {
						var e = this;
						switch (this.state) {
						case jn.IDLE:
							var t = this.tracks,
							r = this.currentTrackId,
							n = this.vttFragSNsProcessed[r],
							i = this.vttFragQueues[r],
							a = this.currentlyProcessing ? this.currentlyProcessing.sn: -1,
							o = function(e) {
								return n.indexOf(e.sn) > -1
							},
							s = function(e) {
								return i.some(function(t) {
									return t.sn === e.sn
								})
							};
							if (!t) break;
							var l;
							if (r < t.length && (l = t[r].details), void 0 === l) break;
							l.fragments.forEach(function(t) {
								o(t) || t.sn === a || s(t) || (t.encrypted ? (it.b.log("Loading key for " + t.sn), e.state = jn.KEY_LOADING, e.hls.trigger(nt.a.KEY_LOADING, {
									frag: t
								})) : (t.trackId = r, i.push(t), e.nextFrag()))
							})
						}
					},
					t.prototype.onSubtitleTracksUpdated = function(e) {
						var t = this;
						it.b.log("subtitle tracks updated"),
						this.tracks = e.subtitleTracks,
						this.clearVttFragQueues(),
						this.vttFragSNsProcessed = {},
						this.tracks.forEach(function(e) {
							t.vttFragSNsProcessed[e.id] = []
						})
					},
					t.prototype.onSubtitleTrackSwitch = function(e) {
						if (this.currentTrackId = e.id, this.tracks && -1 !== this.currentTrackId) {
							var t = this.tracks[this.currentTrackId];
							t && t.details && this.tick()
						}
					},
					t.prototype.onSubtitleTrackLoaded = function() {
						this.tick()
					},
					t.prototype.onKeyLoaded = function() {
						this.state === jn.KEY_LOADING && (this.state = jn.IDLE, this.tick())
					},
					t.prototype.onFragLoaded = function(e) {
						var t = this.fragCurrent,
						r = e.frag.decryptdata,
						n = e.frag,
						i = this.hls;
						if (this.state === jn.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && null != r && null != r.key && "AES-128" === r.method) {
							var a = void 0;
							try {
								a = Gn.now()
							} catch(e) {
								a = Date.now()
							}
							this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer,
							function(e) {
								var t = void 0;
								try {
									t = Gn.now()
								} catch(e) {
									t = Date.now()
								}
								i.trigger(nt.a.FRAG_DECRYPTED, {
									frag: n,
									payload: e,
									stats: {
										tstart: a,
										tdecrypt: t
									}
								})
							})
						}
					},
					t
				} (or),
				Hn = Kn,
				Wn = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} (),
				qn = window,
				Vn = qn.XMLHttpRequest,
				Yn = {
					WIDEVINE: "com.widevine.alpha",
					PLAYREADY: "com.microsoft.playready"
				},
				zn = function(e, t, r) {
					var n = {
						videoCapabilities: []
					};
					return t.forEach(function(e) {
						n.videoCapabilities.push({
							contentType: 'video/mp4; codecs="' + e + '"'
						})
					}),
					[n]
				},
				Xn = function(e, t, r) {
					switch (e) {
					case Yn.WIDEVINE:
						return zn(0, r);
					default:
						throw Error("Unknown key-system: " + e)
					}
				},
				Qn = function(e) {
					function t(r) {
						ze(this, t);
						var n = Xe(this, e.call(this, r, nt.a.MEDIA_ATTACHED, nt.a.MANIFEST_PARSED));
						return n._widevineLicenseUrl = r.config.widevineLicenseUrl,
						n._licenseXhrSetup = r.config.licenseXhrSetup,
						n._emeEnabled = r.config.emeEnabled,
						n._requestMediaKeySystemAccess = r.config.requestMediaKeySystemAccessFunc,
						n._mediaKeysList = [],
						n._media = null,
						n._hasSetMediaKeys = !1,
						n._isMediaEncrypted = !1,
						n._requestLicenseFailureCount = 0,
						n
					}
					return Qe(t, e),
					t.prototype.getLicenseServerUrl = function(e) {
						var t = void 0;
						switch (e) {
						case Yn.WIDEVINE:
							t = this._widevineLicenseUrl;
							break;
						default:
							t = null
						}
						return t || (it.b.error('No license server URL configured for key-system "' + e + '"'), this.hls.trigger(nt.a.ERROR, {
							type: tt.b.KEY_SYSTEM_ERROR,
							details: tt.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
							fatal: !0
						})),
						t
					},
					t.prototype._attemptKeySystemAccess = function(e, t, r) {
						var n = this,
						i = Xn(e, 0, r);
						if (!i) return void it.b.warn("Can not create config for key-system (maybe because platform is not supported):", e);
						it.b.log("Requesting encrypted media key-system access"),
						this.requestMediaKeySystemAccess(e, i).then(function(t) {
							n._onMediaKeySystemAccessObtained(e, t)
						}).
						catch(function(t) {
							it.b.error('Failed to obtain key-system "' + e + '" access:', t)
						})
					},
					t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
						var r = this;
						it.b.log('Access for key-system "' + e + '" obtained');
						var n = {
							mediaKeys: null,
							mediaKeysSession: null,
							mediaKeysSessionInitialized: !1,
							mediaKeySystemAccess: t,
							mediaKeySystemDomain: e
						};
						this._mediaKeysList.push(n),
						t.createMediaKeys().then(function(t) {
							n.mediaKeys = t,
							it.b.log('Media-keys created for key-system "' + e + '"'),
							r._onMediaKeysCreated()
						}).
						catch(function(e) {
							it.b.error("Failed to create media-keys:", e)
						})
					},
					t.prototype._onMediaKeysCreated = function() {
						var e = this;
						this._mediaKeysList.forEach(function(t) {
							t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
						})
					},
					t.prototype._onNewMediaKeySession = function(e) {
						var t = this;
						it.b.log("New key-system session " + e.sessionId),
						e.addEventListener("message",
						function(r) {
							t._onKeySessionMessage(e, r.message)
						},
						!1)
					},
					t.prototype._onKeySessionMessage = function(e, t) {
						it.b.log("Got EME message event, creating license request"),
						this._requestLicense(t,
						function(t) {
							it.b.log("Received license data, updating key-session"),
							e.update(t)
						})
					},
					t.prototype._onMediaEncrypted = function(e, t) {
						it.b.log('Media is encrypted using "' + e + '" init data type'),
						this._isMediaEncrypted = !0,
						this._mediaEncryptionInitDataType = e,
						this._mediaEncryptionInitData = t,
						this._attemptSetMediaKeys(),
						this._generateRequestWithPreferredKeySession()
					},
					t.prototype._attemptSetMediaKeys = function() {
						if (!this._hasSetMediaKeys) {
							var e = this._mediaKeysList[0];
							if (!e || !e.mediaKeys) return it.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
							void this.hls.trigger(nt.a.ERROR, {
								type: tt.b.KEY_SYSTEM_ERROR,
								details: tt.a.KEY_SYSTEM_NO_KEYS,
								fatal: !0
							});
							it.b.log("Setting keys for encrypted media"),
							this._media.setMediaKeys(e.mediaKeys),
							this._hasSetMediaKeys = !0
						}
					},
					t.prototype._generateRequestWithPreferredKeySession = function() {
						var e = this,
						t = this._mediaKeysList[0];
						if (!t) return it.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
						void this.hls.trigger(nt.a.ERROR, {
							type: tt.b.KEY_SYSTEM_ERROR,
							details: tt.a.KEY_SYSTEM_NO_ACCESS,
							fatal: !0
						});
						if (t.mediaKeysSessionInitialized) return void it.b.warn("Key-Session already initialized but requested again");
						var r = t.mediaKeysSession;
						r || (it.b.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(nt.a.ERROR, {
							type: tt.b.KEY_SYSTEM_ERROR,
							details: tt.a.KEY_SYSTEM_NO_SESSION,
							fatal: !0
						}));
						var n = this._mediaEncryptionInitDataType,
						i = this._mediaEncryptionInitData;
						it.b.log('Generating key-session request for "' + n + '" init data type'),
						t.mediaKeysSessionInitialized = !0,
						r.generateRequest(n, i).then(function() {
							it.b.debug("Key-session generation succeeded")
						}).
						catch(function(t) {
							it.b.error("Error generating key-session request:", t),
							e.hls.trigger(nt.a.ERROR, {
								type: tt.b.KEY_SYSTEM_ERROR,
								details: tt.a.KEY_SYSTEM_NO_SESSION,
								fatal: !1
							})
						})
					},
					t.prototype._createLicenseXhr = function(e, t, r) {
						var n = new Vn,
						i = this._licenseXhrSetup;
						try {
							if (i) try {
								i(n, e)
							} catch(t) {
								n.open("POST", e, !0),
								i(n, e)
							}
							n.readyState || n.open("POST", e, !0)
						} catch(e) {
							return it.b.error("Error setting up key-system license XHR", e),
							void this.hls.trigger(nt.a.ERROR, {
								type: tt.b.KEY_SYSTEM_ERROR,
								details: tt.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							})
						}
						return n.responseType = "arraybuffer",
						n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, e, t, r),
						n
					},
					t.prototype._onLicenseRequestReadyStageChange = function(e, t, r, n) {
						switch (e.readyState) {
						case 4:
							if (200 === e.status) this._requestLicenseFailureCount = 0,
							it.b.log("License request succeeded"),
							n(e.response);
							else {
								if (it.b.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), ++this._requestLicenseFailureCount <= 3) {
									var i = 3 - this._requestLicenseFailureCount + 1;
									return it.b.warn("Retrying license request, " + i + " attempts left"),
									void this._requestLicense(r, n)
								}
								this.hls.trigger(nt.a.ERROR, {
									type: tt.b.KEY_SYSTEM_ERROR,
									details: tt.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
									fatal: !0
								})
							}
						}
					},
					t.prototype._generateLicenseRequestChallenge = function(e, t) {
						var r = void 0;
						return e.mediaKeySystemDomain === Yn.PLAYREADY ? it.b.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === Yn.WIDEVINE ? r = t: it.b.error("Unsupported key-system:", e.mediaKeySystemDomain),
						r
					},
					t.prototype._requestLicense = function(e, t) {
						it.b.log("Requesting content license for key-system");
						var r = this._mediaKeysList[0];
						if (!r) return it.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
						void this.hls.trigger(nt.a.ERROR, {
							type: tt.b.KEY_SYSTEM_ERROR,
							details: tt.a.KEY_SYSTEM_NO_ACCESS,
							fatal: !0
						});
						var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
						i = this._createLicenseXhr(n, e, t);
						it.b.log("Sending license request to URL: " + n),
						i.send(this._generateLicenseRequestChallenge(r, e))
					},
					t.prototype.onMediaAttached = function(e) {
						var t = this;
						if (this._emeEnabled) {
							var r = e.media;
							this._media = r,
							r.addEventListener("encrypted",
							function(e) {
								t._onMediaEncrypted(e.initDataType, e.initData)
							})
						}
					},
					t.prototype.onManifestParsed = function(e) {
						if (this._emeEnabled) {
							var t = e.levels.map(function(e) {
								return e.audioCodec
							}),
							r = e.levels.map(function(e) {
								return e.videoCodec
							});
							this._attemptKeySystemAccess(Yn.WIDEVINE, t, r)
						}
					},
					Wn(t, [{
						key: "requestMediaKeySystemAccess",
						get: function() {
							if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
							return this._requestMediaKeySystemAccess
						}
					}]),
					t
				} (lt),
				Jn = Qn,
				$n = function() {
					return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
				} (),
				Zn = {
					autoStartLoad: !0,
					startPosition: -1,
					defaultAudioCodec: void 0,
					debug: !1,
					capLevelOnFPSDrop: !1,
					capLevelToPlayerSize: !1,
					initialLiveManifestSize: 1,
					maxBufferLength: 1800,
					maxBufferSize: 8e8,
					maxBufferHole: 5,
					lowBufferWatchdogPeriod: .5,
					highBufferWatchdogPeriod: 3,
					nudgeOffset: .1,
					nudgeMaxRetry: 3,
					maxFragLookUpTolerance: .25,
					liveSyncDurationCount: 3,
					liveMaxLatencyDurationCount: 1 / 0,
					liveSyncDuration: void 0,
					liveMaxLatencyDuration: void 0,
					liveDurationInfinity: !1,
					maxMaxBufferLength: 600,
					enableWorker: !0,
					enableSoftwareAES: !0,
					manifestLoadingTimeOut: 1e4,
					manifestLoadingMaxRetry: 1,
					manifestLoadingRetryDelay: 1e3,
					manifestLoadingMaxRetryTimeout: 64e3,
					startLevel: void 0,
					levelLoadingTimeOut: 1e4,
					levelLoadingMaxRetry: 4,
					levelLoadingRetryDelay: 1e3,
					levelLoadingMaxRetryTimeout: 64e3,
					fragLoadingTimeOut: 2e4,
					fragLoadingMaxRetry: 6,
					fragLoadingRetryDelay: 1e3,
					fragLoadingMaxRetryTimeout: 64e3,
					startFragPrefetch: !1,
					fpsDroppedMonitoringPeriod: 5e3,
					fpsDroppedMonitoringThreshold: .2,
					appendErrorMaxRetry: 3,
					loader: qr,
					fLoader: void 0,
					pLoader: void 0,
					xhrSetup: void 0,
					licenseXhrSetup: void 0,
					abrController: Ir,
					bufferController: Pr,
					capLevelController: Fr,
					fpsController: Gr,
					stretchShortVideoTrack: !1,
					maxAudioFramesDrift: 1,
					forceKeyFrameOnDiscontinuity: !0,
					abrEwmaFastLive: 3,
					abrEwmaSlowLive: 9,
					abrEwmaFastVoD: 3,
					abrEwmaSlowVoD: 9,
					abrEwmaDefaultEstimate: 5e5,
					abrBandWidthFactor: .95,
					abrBandWidthUpFactor: .7,
					abrMaxWithRealBitrate: !1,
					maxStarvationDelay: 4,
					maxLoadingDelay: 4,
					minAutoBitrate: 0,
					emeEnabled: !1,
					widevineLicenseUrl: void 0,
					requestMediaKeySystemAccessFunc: $n
				};
				Zn.subtitleStreamController = Hn,
				Zn.subtitleTrackController = Nn,
				Zn.timelineController = xn,
				Zn.cueHandler = $e,
				Zn.enableCEA708Captions = !0,
				Zn.enableWebVTT = !0,
				Zn.captionsTextTrack1Label = "English",
				Zn.captionsTextTrack1LanguageCode = "en",
				Zn.captionsTextTrack2Label = "Spanish",
				Zn.captionsTextTrack2LanguageCode = "es",
				Zn.audioStreamController = en,
				Zn.audioTrackController = zr,
				Zn.emeController = Jn;
				var ei = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1,
							n.configurable = !0,
							"value" in n && (n.writable = !0),
							Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r),
						n && e(t, n),
						t
					}
				} ();
				r(14);
				var ti = function() {
					function e() {
						var t = this,
						r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						Je(this, e);
						var n = e.DefaultConfig;
						if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
						for (var i in n) i in r || (r[i] = n[i]);
						if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
						if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
						Object(it.a)(r.debug),
						this.config = r,
						this._autoLevelCapping = -1;
						var a = this.observer = new zt.a;
						a.trigger = function(e) {
							for (var t = arguments.length,
							r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
							a.emit.apply(a, [e, e].concat(r))
						},
						a.off = function(e) {
							for (var t = arguments.length,
							r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
							a.removeListener.apply(a, [e].concat(r))
						},
						this.on = a.on.bind(a),
						this.off = a.off.bind(a),
						this.once = a.once.bind(a),
						this.trigger = a.trigger.bind(a);
						var o = this.abrController = new r.abrController(this),
						s = new r.bufferController(this),
						l = new r.capLevelController(this),
						u = new r.fpsController(this),
						c = new Nt(this),
						d = new Bt(this),
						f = new jt(this),
						h = new Er(this),
						p = this.levelController = new mr(this),
						g = new Ht(this),
						v = this.streamController = new fr(this, g),
						y = [p, v],
						m = r.audioStreamController;
						m && y.push(new m(this, g)),
						this.networkControllers = y;
						var b = [c, d, f, o, s, l, u, h, g];
						if (m = r.audioTrackController) {
							var _ = new m(this);
							this.audioTrackController = _,
							b.push(_)
						}
						if (m = r.subtitleTrackController) {
							var E = new m(this);
							this.subtitleTrackController = E,
							b.push(E)
						}
						if (m = r.emeController) {
							var T = new m(this);
							this.emeController = T,
							b.push(T)
						} [r.subtitleStreamController, r.timelineController].forEach(function(e) {
							e && b.push(new e(t))
						}),
						this.coreComponents = b
					}
					return e.isSupported = function() {
						return ae()
					},
					ei(e, null, [{
						key: "version",
						get: function() {
							return "0.11.0"
						}
					},
					{
						key: "Events",
						get: function() {
							return nt.a
						}
					},
					{
						key: "ErrorTypes",
						get: function() {
							return tt.b
						}
					},
					{
						key: "ErrorDetails",
						get: function() {
							return tt.a
						}
					},
					{
						key: "DefaultConfig",
						get: function() {
							return e.defaultConfig ? e.defaultConfig: Zn
						},
						set: function(t) {
							e.defaultConfig = t
						}
					}]),
					e.prototype.destroy = function() {
						it.b.log("destroy"),
						this.trigger(nt.a.DESTROYING),
						this.detachMedia(),
						this.coreComponents.concat(this.networkControllers).forEach(function(e) {
							e.destroy()
						}),
						this.url = null,
						this.observer.removeAllListeners(),
						this._autoLevelCapping = -1
					},
					e.prototype.attachMedia = function(e) {
						it.b.log("attachMedia"),
						this.media = e,
						this.trigger(nt.a.MEDIA_ATTACHING, {
							media: e
						})
					},
					e.prototype.detachMedia = function() {
						it.b.log("detachMedia"),
						this.trigger(nt.a.MEDIA_DETACHING),
						this.media = null
					},
					e.prototype.loadSource = function(e) {
						e = et.a.buildAbsoluteURL(window.location.href, e, {
							alwaysNormalize: !0
						}),
						it.b.log("loadSource:" + e),
						this.url = e,
						this.trigger(nt.a.MANIFEST_LOADING, {
							url: e
						})
					},
					e.prototype.startLoad = function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
						it.b.log("startLoad(" + e + ")"),
						this.networkControllers.forEach(function(t) {
							t.startLoad(e)
						})
					},
					e.prototype.stopLoad = function() {
						it.b.log("stopLoad"),
						this.networkControllers.forEach(function(e) {
							e.stopLoad()
						})
					},
					e.prototype.swapAudioCodec = function() {
						it.b.log("swapAudioCodec"),
						this.streamController.swapAudioCodec()
					},
					e.prototype.recoverMediaError = function() {
						it.b.log("recoverMediaError");
						var e = this.media;
						this.detachMedia(),
						this.attachMedia(e)
					},
					ei(e, [{
						key: "levels",
						get: function() {
							return this.levelController.levels
						}
					},
					{
						key: "currentLevel",
						get: function() {
							return this.streamController.currentLevel
						},
						set: function(e) {
							it.b.log("set currentLevel:" + e),
							this.loadLevel = e,
							this.streamController.immediateLevelSwitch()
						}
					},
					{
						key: "nextLevel",
						get: function() {
							return this.streamController.nextLevel
						},
						set: function(e) {
							it.b.log("set nextLevel:" + e),
							this.levelController.manualLevel = e,
							this.streamController.nextLevelSwitch()
						}
					},
					{
						key: "loadLevel",
						get: function() {
							return this.levelController.level
						},
						set: function(e) {
							it.b.log("set loadLevel:" + e),
							this.levelController.manualLevel = e
						}
					},
					{
						key: "nextLoadLevel",
						get: function() {
							return this.levelController.nextLoadLevel
						},
						set: function(e) {
							this.levelController.nextLoadLevel = e
						}
					},
					{
						key: "firstLevel",
						get: function() {
							return Math.max(this.levelController.firstLevel, this.minAutoLevel)
						},
						set: function(e) {
							it.b.log("set firstLevel:" + e),
							this.levelController.firstLevel = e
						}
					},
					{
						key: "startLevel",
						get: function() {
							return this.levelController.startLevel
						},
						set: function(e) {
							it.b.log("set startLevel:" + e);
							var t = this; - 1 !== e && (e = Math.max(e, t.minAutoLevel)),
							t.levelController.startLevel = e
						}
					},
					{
						key: "autoLevelCapping",
						get: function() {
							return this._autoLevelCapping
						},
						set: function(e) {
							it.b.log("set autoLevelCapping:" + e),
							this._autoLevelCapping = e
						}
					},
					{
						key: "autoLevelEnabled",
						get: function() {
							return - 1 === this.levelController.manualLevel
						}
					},
					{
						key: "manualLevel",
						get: function() {
							return this.levelController.manualLevel
						}
					},
					{
						key: "minAutoLevel",
						get: function() {
							for (var e = this,
							t = e.levels,
							r = e.config.minAutoBitrate,
							n = t ? t.length: 0, i = 0; i < n; i++) {
								if ((t[i].realBitrate ? Math.max(t[i].realBitrate, t[i].bitrate) : t[i].bitrate) > r) return i
							}
							return 0
						}
					},
					{
						key: "maxAutoLevel",
						get: function() {
							var e = this,
							t = e.levels,
							r = e.autoLevelCapping;
							return - 1 === r && t && t.length ? t.length - 1 : r
						}
					},
					{
						key: "nextAutoLevel",
						get: function() {
							var e = this;
							return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel)
						},
						set: function(e) {
							var t = this;
							t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e)
						}
					},
					{
						key: "audioTracks",
						get: function() {
							var e = this.audioTrackController;
							return e ? e.audioTracks: []
						}
					},
					{
						key: "audioTrack",
						get: function() {
							var e = this.audioTrackController;
							return e ? e.audioTrack: -1
						},
						set: function(e) {
							var t = this.audioTrackController;
							t && (t.audioTrack = e)
						}
					},
					{
						key: "liveSyncPosition",
						get: function() {
							return this.streamController.liveSyncPosition
						}
					},
					{
						key: "subtitleTracks",
						get: function() {
							var e = this.subtitleTrackController;
							return e ? e.subtitleTracks: []
						}
					},
					{
						key: "subtitleTrack",
						get: function() {
							var e = this.subtitleTrackController;
							return e ? e.subtitleTrack: -1
						},
						set: function(e) {
							var t = this.subtitleTrackController;
							t && (t.subtitleTrack = e)
						}
					},
					{
						key: "subtitleDisplay",
						get: function() {
							var e = this.subtitleTrackController;
							return !! e && e.subtitleDisplay
						},
						set: function(e) {
							var t = this.subtitleTrackController;
							t && (t.subtitleDisplay = e)
						}
					}]),
					e
				} ();
				t.
			default = ti
			},
			function(e, t, r) {
				function n(e) {
					function t(n) {
						if (r[n]) return r[n].exports;
						var i = r[n] = {
							i: n,
							l: !1,
							exports: {}
						};
						return e[n].call(i.exports, i, i.exports, t),
						i.l = !0,
						i.exports
					}
					var r = {};
					t.m = e,
					t.c = r,
					t.i = function(e) {
						return e
					},
					t.d = function(e, r, n) {
						t.o(e, r) || Object.defineProperty(e, r, {
							configurable: !1,
							enumerable: !0,
							get: n
						})
					},
					t.n = function(e) {
						var r = e && e.__esModule ?
						function() {
							return e.
						default
						}:
						function() {
							return e
						};
						return t.d(r, "a", r),
						r
					},
					t.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					},
					t.p = "/",
					t.oe = function(e) {
						throw console.error(e),
						e
					};
					var n = t(t.s = ENTRY_MODULE);
					return n.
				default || n
				}
				function i(e) {
					return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
				}
				function a(e, t, n) {
					var a = {};
					a[n] = [];
					var o = t.toString(),
					s = o.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
					if (!s) return a;
					for (var c, d = s[1], f = new RegExp("(\\\\n|\\W)" + i(d) + u, "g"); c = f.exec(o);)"dll-reference" !== c[3] && a[n].push(c[3]);
					for (f = new RegExp("\\(" + i(d) + '\\("(dll-reference\\s(' + l + '))"\\)\\)' + u, "g"); c = f.exec(o);) e[c[2]] || (a[n].push(c[1]), e[c[2]] = r(c[1]).m),
					a[c[2]] = a[c[2]] || [],
					a[c[2]].push(c[4]);
					return a
				}
				function o(e) {
					return Object.keys(e).reduce(function(t, r) {
						return t || e[r].length > 0
					},
					!1)
				}
				function s(e, t) {
					for (var r = {
						main: [t]
					},
					n = {
						main: []
					},
					i = {
						main: {}
					}; o(r);) for (var s = Object.keys(r), l = 0; l < s.length; l++) {
						var u = s[l],
						c = r[u],
						d = c.pop();
						if (i[u] = i[u] || {},
						!i[u][d] && e[u][d]) {
							i[u][d] = !0,
							n[u] = n[u] || [],
							n[u].push(d);
							for (var f = a(e, e[u][d], u), h = Object.keys(f), p = 0; p < h.length; p++) r[h[p]] = r[h[p]] || [],
							r[h[p]] = r[h[p]].concat(f[h[p]])
						}
					}
					return n
				}
				var l = "[\\.|\\-|\\+|\\w|/|@]+",
				u = "\\((/\\*.*?\\*/)?s?.*?(" + l + ").*?\\)";
				e.exports = function(e, t) {
					t = t || {};
					var i = {
						main: r.m
					},
					a = t.all ? {
						main: Object.keys(i)
					}: s(i, e),
					o = "";
					Object.keys(a).filter(function(e) {
						return "main" !== e
					}).forEach(function(e) {
						for (var t = 0; a[e][t];) t++;
						a[e].push(t),
						i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
						o = o + "var " + e + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a[e].map(function(t) {
							return JSON.stringify(t) + ": " + i[e][t].toString()
						}).join(",") + "});\n"
					}),
					o = o + "(" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a.main.map(function(e) {
						return JSON.stringify(e) + ": " + i.main[e].toString()
					}).join(",") + "})(self);";
					var l = new window.Blob([o], {
						type: "text/javascript"
					});
					if (t.bare) return l;
					var u = window.URL || window.webkitURL || window.mozURL || window.msURL,
					c = u.createObjectURL(l),
					d = new window.Worker(c);
					return d.objectURL = c,
					d
				}
			},
			function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = r(10),
				i = r(1),
				a = r(0),
				o = r(7),
				s = r.n(o),
				l = function(e) {
					var t = new s.a;
					t.trigger = function(e) {
						for (var r = arguments.length,
						n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
						t.emit.apply(t, [e, e].concat(n))
					},
					t.off = function(e) {
						for (var r = arguments.length,
						n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
						t.removeListener.apply(t, [e].concat(n))
					};
					var r = function(t, r) {
						e.postMessage({
							event: t,
							data: r
						})
					};
					e.addEventListener("message",
					function(i) {
						var o = i.data;
						switch (o.cmd) {
						case "init":
							var s = JSON.parse(o.config);
							e.demuxer = new n.a(t, o.typeSupported, s, o.vendor);
							try {
								Object(a.a)(!0 === s.debug)
							} catch(e) {
								console.warn("demuxerWorker: unable to enable logs")
							}
							r("init", null);
							break;
						case "demux":
							e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
						}
					}),
					t.on(i.a.FRAG_DECRYPTED, r),
					t.on(i.a.FRAG_PARSING_INIT_SEGMENT, r),
					t.on(i.a.FRAG_PARSED, r),
					t.on(i.a.ERROR, r),
					t.on(i.a.FRAG_PARSING_METADATA, r),
					t.on(i.a.FRAG_PARSING_USERDATA, r),
					t.on(i.a.INIT_PTS_FOUND, r),
					t.on(i.a.FRAG_PARSING_DATA,
					function(t, r) {
						var n = [],
						i = {
							event: t,
							data: r
						};
						r.data1 && (i.data1 = r.data1.buffer, n.push(r.data1.buffer), delete r.data1),
						r.data2 && (i.data2 = r.data2.buffer, n.push(r.data2.buffer), delete r.data2),
						e.postMessage(i, n)
					})
				};
				t.
			default = l
			},
			function(e, t) {
				String.prototype.endsWith ||
				function() {
					"use strict";
					var e = function() {
						try {
							var e = {},
							t = Object.defineProperty,
							r = t(e, e, e) && t
						} catch(e) {}
						return r
					} (),
					t = {}.toString,
					r = function(e) {
						if (null == this) throw TypeError();
						var r = String(this);
						if (e && "[object RegExp]" == t.call(e)) throw TypeError();
						var n = r.length,
						i = String(e),
						a = i.length,
						o = n;
						if (arguments.length > 1) {
							var s = arguments[1];
							void 0 !== s && (o = s ? Number(s) : 0) != o && (o = 0)
						}
						var l = Math.min(Math.max(o, 0), n),
						u = l - a;
						if (u < 0) return ! 1;
						for (var c = -1; ++c < a;) if (r.charCodeAt(u + c) != i.charCodeAt(c)) return ! 1;
						return ! 0
					};
					e ? e(String.prototype, "endsWith", {
						value: r,
						configurable: !0,
						writable: !0
					}) : String.prototype.endsWith = r
				} ()
			}]).
		default
		})
	}])
});