webpackHotUpdate(1,{

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _descriptor;\n\nvar _mobx = __webpack_require__(40);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(108);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _appUrl = __webpack_require__(234);\n\nvar _appUrl2 = _interopRequireDefault(_appUrl);\n\nvar _Root = __webpack_require__(78);\n\nvar _urlSearchParams = __webpack_require__(562);\n\nvar _urlSearchParams2 = _interopRequireDefault(_urlSearchParams);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n    if (!descriptor) return;\n    Object.defineProperty(target, property, {\n        enumerable: descriptor.enumerable,\n        configurable: descriptor.configurable,\n        writable: descriptor.writable,\n        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n    });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\nvar cookies = __webpack_require__(203);\n\nvar ApiStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, (_class = function () {\n    function ApiStore() {\n        var _this = this;\n\n        _classCallCheck(this, ApiStore);\n\n        _initDefineProp(this, 'userPolls', _descriptor, this);\n\n        this.isLoggedIn = (0, _mobx.observable)(false);\n        this.fetching = (0, _mobx.observable)(false);\n        this.userToken = (0, _mobx.observable)(\"\");\n        this.voted = (0, _mobx.observable)(false);\n        this.newOption = (0, _mobx.observable)(\"\");\n        this.pollName = (0, _mobx.observable)(\"\");\n        this.pollOptions = (0, _mobx.observable)(\"\");\n\n        this.loadingIcon = function () {\n            return _this.__loadingIcon__REACT_HOT_LOADER__.apply(_this, arguments);\n        };\n\n        this.prepareToken();\n        if (this.userToken) {\n            this.isLoggedIn.set(true);\n        }\n        //this.setToken\n        console.log(\"Api store is ready\");\n    }\n\n    _createClass(ApiStore, [{\n        key: '__loadingIcon__REACT_HOT_LOADER__',\n        value: function __loadingIcon__REACT_HOT_LOADER__() {\n            return this.__loadingIcon__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__loadingIcon__REACT_HOT_LOADER__',\n        value: function __loadingIcon__REACT_HOT_LOADER__() {\n            return this.__loadingIcon__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__loadingIcon__REACT_HOT_LOADER__',\n        value: function __loadingIcon__REACT_HOT_LOADER__() {\n            return this.__loadingIcon__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__loadingIcon__REACT_HOT_LOADER__',\n        value: function __loadingIcon__REACT_HOT_LOADER__(comp) {\n            return comp;\n            if (this.fetching.get()) {\n                return _react2.default.createElement(\n                    'div',\n                    null,\n                    'Fetching...'\n                );\n            } else return comp;\n        }\n    }, {\n        key: 'logOut',\n        value: function logOut() {\n            this.userToken.set(\"\");\n            cookies.set(\"userToken\", null);\n        }\n    }, {\n        key: 'getUserPolls',\n        value: function getUserPolls() {\n            var _this2 = this;\n\n            _axios2.default //({ method: 'POST', url: appUrl + `/api/createNewPoll?data=${JSON.stringify(newPoll)}`, data: { firstName: 123 } })\n\n\n            //({ method: 'POST', url: appUrl + `/api/createNewPoll?data=${JSON.stringify(newPoll)}`, data: { firstName: 123 } })\n\n\n            .get(_appUrl2.default + '/api/userPolls').then(function (res) {\n                {\n                    //this.pollsList = res.data;\n                    console.log(res.data);\n                    _this2.userPolls = res.data;\n                    //this.pollName.set(\"\");\n                    //this.pollOptions.set(\"\");\n                    //ViewStore.fectchPollsList();\n                }\n            }).catch(function (err) {\n                console.log(err.response.data);\n            });\n        }\n    }, {\n        key: 'prepareToken',\n        value: function prepareToken() {\n            //console.log(\"curr state\" + window.location.search)\n            var urlParams = new _urlSearchParams2.default(window.location.search);\n            var token = urlParams.get(\"token\");\n            console.log(urlParams, \"curr paramas\");\n            if (token) {\n                console.log(\"Got the token \" + token);\n                cookies.set('userToken', token, { secure: true, expires: 14 });\n                cookies.set('userName', urlParams.get(\"userName\"));\n            }\n\n            token = cookies.get(\"userToken\");\n            console.log(\"checked the cookies\", token);\n            if (token) {\n                this.userToken.set(token);\n                console.log(\"curr token\", this.userToken.get());\n            }\n        }\n    }, {\n        key: 'createNewPoll',\n        value: function createNewPoll() {\n            var _this3 = this;\n\n            console.log(\"New Poll is \" + this.pollName + \" \" + this.pollOptions + \"!\");\n            var opts = this.pollOptions.get().split('\\n');\n            var newPoll = { name: this.pollName.get(), options: opts };\n            console.log(JSON.stringify(newPoll));\n            //  axios.get(appUrl + `/api/createNewPoll?pName=${this.pollName}&pOptions=${this.pollOptions}`)\n            // .then(res => {this.pollsList = res.data, console.log(res.data, 5555534)})\n            _axios2.default.post(_appUrl2.default + ('/api/createNewPoll?data=' + JSON.stringify(newPoll)), { firstName: 123 }).then(function (res) {\n                {\n                    //this.pollsList = res.data;\n                    console.log(res.data);\n                    _this3.pollName.set(\"\");\n                    _this3.pollOptions.set(\"\");\n                    _Root.ViewStore.fectchPollsList();\n                }\n            }).catch(function (err) {\n                console.log(err.response.data);\n            });\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            this.newOption.set(\"\");\n            this.pollName.set(\"\");\n            this.pollOptions.set(\"\");\n        }\n    }, {\n        key: 'vote',\n        value: function vote() {\n            var _this4 = this;\n\n            if (this.newOption.get() == \"\") {\n                var vote_id = _Root.ViewStore.currentPoll.options[_Root.ViewStore.chosenOptionIndex][\"_id\"];\n                console.log(vote_id, \"voting\");\n                console.log(\"Voting for\" + this.pollName + \" \" + this.pollOptions + \"!\");\n                this.fetching.set(true);\n                _axios2.default.get(_appUrl2.default + '/api/vote', { params: { optId: vote_id, pollId: _Root.ViewStore.currentPoll[\"_id\"] } }).then(function (res) {\n                    _this4.pollsList = res.data;\n                    _this4.fetching.set(false);\n                    _this4.voted.set(true);\n                    _Root.ViewStore.fectchPollsList();\n                    console.log(res.data, 5555534);\n                    _this4.reset();\n                });\n            }\n        }\n    }]);\n\n    return ApiStore;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'userPolls', [_mobx.observable], {\n    enumerable: true,\n    initializer: function initializer() {\n        return null;\n    }\n}), _applyDecoratedDescriptor(_class.prototype, 'logOut', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'logOut'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserPolls', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserPolls'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prepareToken', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'prepareToken'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createNewPoll', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'createNewPoll'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'reset', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'reset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'vote', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'vote'), _class.prototype)), _class));\nvar _default = ApiStore;\nexports.default = _default;\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(ApiStore, 'ApiStore', '/home/ubuntu/workspace/react-webpack-boilerplate/app/stores/ApiStore.js');\n\n    __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/stores/ApiStore.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcGlTdG9yZS5qcz8xOGVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RlYywgX2RlYzIsIF9kZWMzLCBfZGVjNCwgX2RlYzUsIF9kZWM2LCBfZGVzYywgX3ZhbHVlLCBfY2xhc3MsIF9kZXNjcmlwdG9yO1xuXG52YXIgX21vYnggPSByZXF1aXJlKCdtb2J4Jyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5cbnZhciBfYXhpb3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhpb3MpO1xuXG52YXIgX2FwcFVybCA9IHJlcXVpcmUoJy4uL2NvbmZpZy9hcHBVcmwnKTtcblxudmFyIF9hcHBVcmwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwVXJsKTtcblxudmFyIF9Sb290ID0gcmVxdWlyZSgnLi4vY29uZmlnL1Jvb3QnKTtcblxudmFyIF91cmxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCd1cmwtc2VhcmNoLXBhcmFtcycpO1xuXG52YXIgX3VybFNlYXJjaFBhcmFtczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cmxTZWFyY2hQYXJhbXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5pdERlZmluZVByb3AodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICAgIGlmICghZGVzY3JpcHRvcikgcmV0dXJuO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB7XG4gICAgICAgIGVudW1lcmFibGU6IGRlc2NyaXB0b3IuZW51bWVyYWJsZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSxcbiAgICAgICAgd3JpdGFibGU6IGRlc2NyaXB0b3Iud3JpdGFibGUsXG4gICAgICAgIHZhbHVlOiBkZXNjcmlwdG9yLmluaXRpYWxpemVyID8gZGVzY3JpcHRvci5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICAgIHZhciBkZXNjID0ge307XG4gICAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVzY1trZXldID0gZGVzY3JpcHRvcltrZXldO1xuICAgIH0pO1xuICAgIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICAgIGRlc2MuY29uZmlndXJhYmxlID0gISFkZXNjLmNvbmZpZ3VyYWJsZTtcblxuICAgIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgICAgICBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgICAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gICAgfSwgZGVzYyk7XG5cbiAgICBpZiAoY29udGV4dCAmJiBkZXNjLmluaXRpYWxpemVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKGRlc2MuaW5pdGlhbGl6ZXIgPT09IHZvaWQgMCkge1xuICAgICAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICAgICAgZGVzYyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2M7XG59XG5cbmZ1bmN0aW9uIF9pbml0aWFsaXplcldhcm5pbmdIZWxwZXIoZGVzY3JpcHRvciwgY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRGVjb3JhdGluZyBjbGFzcyBwcm9wZXJ0eSBmYWlsZWQuIFBsZWFzZSBlbnN1cmUgdGhhdCB0cmFuc2Zvcm0tY2xhc3MtcHJvcGVydGllcyBpcyBlbmFibGVkLicpO1xufVxuXG52YXIgY29va2llcyA9IHJlcXVpcmUoJ2Jyb3dzZXItY29va2llcycpO1xuXG52YXIgQXBpU3RvcmUgPSAoX2RlYyA9IF9tb2J4LmFjdGlvbi5ib3VuZCwgX2RlYzIgPSBfbW9ieC5hY3Rpb24uYm91bmQsIF9kZWMzID0gX21vYnguYWN0aW9uLmJvdW5kLCBfZGVjNCA9IF9tb2J4LmFjdGlvbi5ib3VuZCwgX2RlYzUgPSBfbW9ieC5hY3Rpb24uYm91bmQsIF9kZWM2ID0gX21vYnguYWN0aW9uLmJvdW5kLCAoX2NsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFwaVN0b3JlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBcGlTdG9yZSk7XG5cbiAgICAgICAgX2luaXREZWZpbmVQcm9wKHRoaXMsICd1c2VyUG9sbHMnLCBfZGVzY3JpcHRvciwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZXRjaGluZyA9ICgwLCBfbW9ieC5vYnNlcnZhYmxlKShmYWxzZSk7XG4gICAgICAgIHRoaXMudXNlclRva2VuID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKFwiXCIpO1xuICAgICAgICB0aGlzLnZvdGVkID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKGZhbHNlKTtcbiAgICAgICAgdGhpcy5uZXdPcHRpb24gPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG4gICAgICAgIHRoaXMucG9sbE5hbWUgPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG4gICAgICAgIHRoaXMucG9sbE9wdGlvbnMgPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fX2xvYWRpbmdJY29uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlVG9rZW4oKTtcbiAgICAgICAgaWYgKHRoaXMudXNlclRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLmlzTG9nZ2VkSW4uc2V0KHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5zZXRUb2tlblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFwaSBzdG9yZSBpcyByZWFkeVwiKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXBpU3RvcmUsIFt7XG4gICAgICAgIGtleTogJ19fbG9hZGluZ0ljb25fX1JFQUNUX0hPVF9MT0FERVJfXycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfX2xvYWRpbmdJY29uX19SRUFDVF9IT1RfTE9BREVSX18oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2xvYWRpbmdJY29uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX19sb2FkaW5nSWNvbl9fUkVBQ1RfSE9UX0xPQURFUl9fJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9fbG9hZGluZ0ljb25fX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fbG9hZGluZ0ljb25fX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfX2xvYWRpbmdJY29uX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX19sb2FkaW5nSWNvbl9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19sb2FkaW5nSWNvbl9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19fbG9hZGluZ0ljb25fX1JFQUNUX0hPVF9MT0FERVJfXycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfX2xvYWRpbmdJY29uX19SRUFDVF9IT1RfTE9BREVSX18oY29tcCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgICAgICAgICBpZiAodGhpcy5mZXRjaGluZy5nZXQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdGZXRjaGluZy4uLidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHJldHVybiBjb21wO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2dPdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgICAgICAgICAgdGhpcy51c2VyVG9rZW4uc2V0KFwiXCIpO1xuICAgICAgICAgICAgY29va2llcy5zZXQoXCJ1c2VyVG9rZW5cIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFVzZXJQb2xscycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRVc2VyUG9sbHMoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgX2F4aW9zMi5kZWZhdWx0IC8vKHsgbWV0aG9kOiAnUE9TVCcsIHVybDogYXBwVXJsICsgYC9hcGkvY3JlYXRlTmV3UG9sbD9kYXRhPSR7SlNPTi5zdHJpbmdpZnkobmV3UG9sbCl9YCwgZGF0YTogeyBmaXJzdE5hbWU6IDEyMyB9IH0pXG5cblxuICAgICAgICAgICAgLy8oeyBtZXRob2Q6ICdQT1NUJywgdXJsOiBhcHBVcmwgKyBgL2FwaS9jcmVhdGVOZXdQb2xsP2RhdGE9JHtKU09OLnN0cmluZ2lmeShuZXdQb2xsKX1gLCBkYXRhOiB7IGZpcnN0TmFtZTogMTIzIH0gfSlcblxuXG4gICAgICAgICAgICAuZ2V0KF9hcHBVcmwyLmRlZmF1bHQgKyAnL2FwaS91c2VyUG9sbHMnKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wb2xsc0xpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudXNlclBvbGxzID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wb2xsTmFtZS5zZXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wb2xsT3B0aW9ucy5zZXQoXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vVmlld1N0b3JlLmZlY3RjaFBvbGxzTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGFyZVRva2VuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVUb2tlbigpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyIHN0YXRlXCIgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgdmFyIHVybFBhcmFtcyA9IG5ldyBfdXJsU2VhcmNoUGFyYW1zMi5kZWZhdWx0KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdXJsUGFyYW1zLmdldChcInRva2VuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXJsUGFyYW1zLCBcImN1cnIgcGFyYW1hc1wiKTtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR290IHRoZSB0b2tlbiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb29raWVzLnNldCgndXNlclRva2VuJywgdG9rZW4sIHsgc2VjdXJlOiB0cnVlLCBleHBpcmVzOiAxNCB9KTtcbiAgICAgICAgICAgICAgICBjb29raWVzLnNldCgndXNlck5hbWUnLCB1cmxQYXJhbXMuZ2V0KFwidXNlck5hbWVcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0b2tlbiA9IGNvb2tpZXMuZ2V0KFwidXNlclRva2VuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2VkIHRoZSBjb29raWVzXCIsIHRva2VuKTtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclRva2VuLnNldCh0b2tlbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyIHRva2VuXCIsIHRoaXMudXNlclRva2VuLmdldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlTmV3UG9sbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVOZXdQb2xsKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IFBvbGwgaXMgXCIgKyB0aGlzLnBvbGxOYW1lICsgXCIgXCIgKyB0aGlzLnBvbGxPcHRpb25zICsgXCIhXCIpO1xuICAgICAgICAgICAgdmFyIG9wdHMgPSB0aGlzLnBvbGxPcHRpb25zLmdldCgpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIHZhciBuZXdQb2xsID0geyBuYW1lOiB0aGlzLnBvbGxOYW1lLmdldCgpLCBvcHRpb25zOiBvcHRzIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuZXdQb2xsKSk7XG4gICAgICAgICAgICAvLyAgYXhpb3MuZ2V0KGFwcFVybCArIGAvYXBpL2NyZWF0ZU5ld1BvbGw/cE5hbWU9JHt0aGlzLnBvbGxOYW1lfSZwT3B0aW9ucz0ke3RoaXMucG9sbE9wdGlvbnN9YClcbiAgICAgICAgICAgIC8vIC50aGVuKHJlcyA9PiB7dGhpcy5wb2xsc0xpc3QgPSByZXMuZGF0YSwgY29uc29sZS5sb2cocmVzLmRhdGEsIDU1NTU1MzQpfSlcbiAgICAgICAgICAgIF9heGlvczIuZGVmYXVsdC5wb3N0KF9hcHBVcmwyLmRlZmF1bHQgKyAoJy9hcGkvY3JlYXRlTmV3UG9sbD9kYXRhPScgKyBKU09OLnN0cmluZ2lmeShuZXdQb2xsKSksIHsgZmlyc3ROYW1lOiAxMjMgfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucG9sbHNMaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnBvbGxOYW1lLnNldChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnBvbGxPcHRpb25zLnNldChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgX1Jvb3QuVmlld1N0b3JlLmZlY3RjaFBvbGxzTGlzdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVzZXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLm5ld09wdGlvbi5zZXQoXCJcIik7XG4gICAgICAgICAgICB0aGlzLnBvbGxOYW1lLnNldChcIlwiKTtcbiAgICAgICAgICAgIHRoaXMucG9sbE9wdGlvbnMuc2V0KFwiXCIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd2b3RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZvdGUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMubmV3T3B0aW9uLmdldCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdm90ZV9pZCA9IF9Sb290LlZpZXdTdG9yZS5jdXJyZW50UG9sbC5vcHRpb25zW19Sb290LlZpZXdTdG9yZS5jaG9zZW5PcHRpb25JbmRleF1bXCJfaWRcIl07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codm90ZV9pZCwgXCJ2b3RpbmdcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJWb3RpbmcgZm9yXCIgKyB0aGlzLnBvbGxOYW1lICsgXCIgXCIgKyB0aGlzLnBvbGxPcHRpb25zICsgXCIhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hpbmcuc2V0KHRydWUpO1xuICAgICAgICAgICAgICAgIF9heGlvczIuZGVmYXVsdC5nZXQoX2FwcFVybDIuZGVmYXVsdCArICcvYXBpL3ZvdGUnLCB7IHBhcmFtczogeyBvcHRJZDogdm90ZV9pZCwgcG9sbElkOiBfUm9vdC5WaWV3U3RvcmUuY3VycmVudFBvbGxbXCJfaWRcIl0gfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnBvbGxzTGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuZmV0Y2hpbmcuc2V0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnZvdGVkLnNldCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgX1Jvb3QuVmlld1N0b3JlLmZlY3RjaFBvbGxzTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSwgNTU1NTUzNCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzNC5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFwaVN0b3JlO1xufSgpLCAoX2Rlc2NyaXB0b3IgPSBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICd1c2VyUG9sbHMnLCBbX21vYngub2JzZXJ2YWJsZV0sIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGluaXRpYWxpemVyOiBmdW5jdGlvbiBpbml0aWFsaXplcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2xvZ091dCcsIFtfZGVjXSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnbG9nT3V0JyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdnZXRVc2VyUG9sbHMnLCBbX2RlYzJdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdnZXRVc2VyUG9sbHMnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3ByZXBhcmVUb2tlbicsIFtfZGVjM10sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3ByZXBhcmVUb2tlbicpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnY3JlYXRlTmV3UG9sbCcsIFtfZGVjNF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2NyZWF0ZU5ld1BvbGwnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3Jlc2V0JywgW19kZWM1XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncmVzZXQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3ZvdGUnLCBbX2RlYzZdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICd2b3RlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKSk7XG52YXIgX2RlZmF1bHQgPSBBcGlTdG9yZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKEFwaVN0b3JlLCAnQXBpU3RvcmUnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9zdG9yZXMvQXBpU3RvcmUuanMnKTtcblxuICAgIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCAnZGVmYXVsdCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL3N0b3Jlcy9BcGlTdG9yZS5qcycpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvc3RvcmVzL0FwaVN0b3JlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///561\n");

/***/ })

})