webpackHotUpdate(1,{

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _desc, _value, _class, _descriptor;\n//import appUrl from \"../config/appUrl\";\n\n\nvar _mobx = __webpack_require__(24);\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(115);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _Root = __webpack_require__(43);\n\nvar _urlSearchParams = __webpack_require__(400);\n\nvar _urlSearchParams2 = _interopRequireDefault(_urlSearchParams);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n    if (!descriptor) return;\n    Object.defineProperty(target, property, {\n        enumerable: descriptor.enumerable,\n        configurable: descriptor.configurable,\n        writable: descriptor.writable,\n        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n    });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\nvar cookies = __webpack_require__(401);\n\n//let appUrl = \"https://everyone-can-vote.herokuapp.com\"\nvar appUrl = \"https://fcc-vote-simonbryatov.c9users.io\";\nvar ApiStore = (_dec = _mobx.action.bound, _dec2 = _mobx.action.bound, _dec3 = _mobx.action.bound, _dec4 = _mobx.action.bound, _dec5 = _mobx.action.bound, _dec6 = _mobx.action.bound, _dec7 = _mobx.action.bound, (_class = function () {\n    function ApiStore() {\n        var _this = this;\n\n        _classCallCheck(this, ApiStore);\n\n        _initDefineProp(this, 'userPolls', _descriptor, this);\n\n        this.currentPoll_Id = null;\n        this.isLoggedIn = (0, _mobx.observable)(false);\n        this.fetching = (0, _mobx.observable)(false);\n        this.userToken = (0, _mobx.observable)(null);\n        this.userName = (0, _mobx.observable)(null);\n        this.voted = (0, _mobx.observable)(false);\n        this.lastVote = (0, _mobx.observable)(null);\n        this.newOption = (0, _mobx.observable)(\"\");\n        this.pollName = (0, _mobx.observable)(\"\");\n        this.pollOptions = (0, _mobx.observable)(\"\");\n\n        this.fetchPollsList = function () {\n            return _this.__fetchPollsList__REACT_HOT_LOADER__.apply(_this, arguments);\n        };\n\n        this.fetchPollsList();\n        this.prepareToken();\n        if (this.userToken.get()) {\n            console.log(\"logged in\");\n            this.isLoggedIn.set(true);\n            this.userName.set(cookies.get(\"userName\"));\n        }\n        console.log(\"Api store is ready\");\n    }\n\n    _createClass(ApiStore, [{\n        key: 'renderOnLoginStatus',\n        value: function renderOnLoginStatus(guestOpt, userOpt) {\n            return this.isLoggedIn.get() ? userOpt : guestOpt;\n        }\n    }, {\n        key: 'logOut',\n        value: function logOut() {\n            console.log(\"Logging out\");\n            this.userToken.set(null);\n            this.userName.set(null);\n            this.isLoggedIn.set(false);\n            cookies.remove('userToken');\n            cookies.remove('userName');\n        }\n    }, {\n        key: 'getUserPolls',\n        value: function getUserPolls() {\n            var _this2 = this;\n\n            this.fetching.set(true);\n            _axios2.default.get(appUrl + '/api/userPolls').then(function (res) {\n                {\n                    console.log(res.data);\n                    _this2.userPolls = res.data;\n                    _this2.fetching.set(false);\n                }\n            }).catch(function (err) {\n                console.log(err.response.data);\n            });\n        }\n    }, {\n        key: 'prepareToken',\n        value: function prepareToken() {\n            var urlParams = new _urlSearchParams2.default(window.location.search);\n            var token = urlParams.get(\"token\");\n            console.log(token, \"curr params\");\n            if (token) {\n                console.log(\"Got the token \" + token);\n                cookies.set('userToken', token, { secure: true, expires: 14 });\n                cookies.set('userName', urlParams.get(\"userName\"));\n            }\n\n            token = cookies.get(\"userToken\");\n            console.log(\"checked the cookies\", token);\n            if (token) {\n                this.userToken.set(token);\n                this.userName.set(cookies.get(\"userName\"));\n                console.log(\"curr token\", this.userToken.get());\n            }\n        }\n    }, {\n        key: '__fetchPollsList__REACT_HOT_LOADER__',\n        value: function __fetchPollsList__REACT_HOT_LOADER__() {\n            return this.__fetchPollsList__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__fetchPollsList__REACT_HOT_LOADER__',\n        value: function __fetchPollsList__REACT_HOT_LOADER__() {\n            return this.__fetchPollsList__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__fetchPollsList__REACT_HOT_LOADER__',\n        value: function __fetchPollsList__REACT_HOT_LOADER__() {\n            return this.__fetchPollsList__REACT_HOT_LOADER__.apply(this, arguments);\n        }\n    }, {\n        key: '__fetchPollsList__REACT_HOT_LOADER__',\n        value: function __fetchPollsList__REACT_HOT_LOADER__(lastVote) {\n            var _this3 = this;\n\n            this.fetching.set(true);\n            _axios2.default.get(appUrl + \"/api/pollsList\").then(function (res) {\n                console.log(\"I've got the power of Polls... Again!\", res.data);\n                _Root.ViewStore.setProperty(\"pollsList\", res.data);\n                _this3.fetching.set(false);\n                if (lastVote >= 0) {\n                    _this3.lastVote.set(lastVote);\n                }\n                if (_this3.currentPoll_Id) {\n                    _Root.ViewStore.setPollView(_this3.currentPoll_Id);\n                }\n            });\n        }\n    }, {\n        key: 'createNewPoll',\n        value: function createNewPoll() {\n            var _this4 = this;\n\n            console.log(\"New Poll is \" + this.pollName + \" \" + this.pollOptions + \"!\");\n            var opts = this.pollOptions.get().split('\\n');\n            var newPoll = { name: this.pollName.get(), options: opts };\n            console.log(JSON.stringify(newPoll));\n            _axios2.default.post(appUrl + ('/api/createNewPoll?data=' + JSON.stringify(newPoll)), { firstName: 123 }).then(function (res) {\n                {\n                    console.log(res.data);\n                    _this4.pollName.set(\"\");\n                    _this4.pollOptions.set(\"\");\n                    _this4.fetchPollsList();\n                }\n            }).catch(function (err) {\n                alert(err.response.data);\n            });\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            console.log(\"reset\");\n            this.newOption.set(\"\");\n            this.pollName.set(\"\");\n            this.pollOptions.set(\"\");\n            this.userPolls = null;\n            _Root.ViewStore.chosenOptionIndex.set(null);\n        }\n    }, {\n        key: 'deletePoll',\n        value: function deletePoll(id) {\n            var _this5 = this;\n\n            console.log(\"Deleting poll \" + id);\n            var pollsList = _Root.ViewStore.getProperty(\"pollsList\");\n            var poll = pollsList.find(function (poll) {\n                if (poll[\"_id\"] == id) return true;\n            });\n            if (confirm('Do you really want to delete poll \"' + poll.name + '\"?' + '\\nThis action is permanent.')) {\n                _axios2.default.get(appUrl + '/api/deletePoll', { params: { pollId: id } }).then(function (res) {\n                    console.log(res.data, _this5);\n                    _this5.fetchPollsList();\n                    _this5.getUserPolls();\n                });\n            }\n        }\n    }, {\n        key: 'vote',\n        value: function vote() {\n            var _this6 = this;\n\n            if (this.newOption.get() == \"\") {\n                console.log(_Root.ViewStore.chosenOptionIndex.get(), \"wow\");\n\n                console.log(\"Last voted for \", this.lastVote.get());\n                var vote_id = _Root.ViewStore.currentPoll.options[_Root.ViewStore.chosenOptionIndex][\"_id\"];\n                console.log(vote_id, \"voting\");\n                console.log(\"Voting for\" + this.pollName + \" \" + this.pollOptions + \"!\");\n                _axios2.default.get(appUrl + '/api/vote', { params: { optId: vote_id, pollId: _Root.ViewStore.currentPoll[\"_id\"] } }).then(function (res) {\n                    console.log(\"Last voted for \", _this6.lastVote.get());\n                    _this6.fetchPollsList(_Root.ViewStore.chosenOptionIndex.get());\n                    console.log(res.data, 5555534);\n                }).catch(function (err) {\n                    alert(err.response.data);\n                });\n            } else _axios2.default.get(appUrl + '/api/vote', { params: { optName: this.newOption.get(), pollId: _Root.ViewStore.currentPoll[\"_id\"] } }).then(function (res) {\n                _this6.fetchPollsList(_Root.ViewStore.chosenOptionIndex.get());\n            }).catch(function (err) {\n                alert(err.response.data);\n            });\n        }\n    }]);\n\n    return ApiStore;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'userPolls', [_mobx.observable], {\n    enumerable: true,\n    initializer: function initializer() {\n        return null;\n    }\n}), _applyDecoratedDescriptor(_class.prototype, 'renderOnLoginStatus', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'renderOnLoginStatus'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'logOut', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'logOut'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'getUserPolls', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserPolls'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'prepareToken', [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, 'prepareToken'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'createNewPoll', [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, 'createNewPoll'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'deletePoll', [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, 'deletePoll'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'vote', [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, 'vote'), _class.prototype)), _class));\nvar _default = ApiStore;\nexports.default = _default;\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(appUrl, 'appUrl', '/home/ubuntu/workspace/react-webpack-boilerplate/app/stores/ApiStore.js');\n\n    __REACT_HOT_LOADER__.register(ApiStore, 'ApiStore', '/home/ubuntu/workspace/react-webpack-boilerplate/app/stores/ApiStore.js');\n\n    __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/stores/ApiStore.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3Jlcy9BcGlTdG9yZS5qcz8xOGVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2RlYywgX2RlYzIsIF9kZWMzLCBfZGVjNCwgX2RlYzUsIF9kZWM2LCBfZGVjNywgX2Rlc2MsIF92YWx1ZSwgX2NsYXNzLCBfZGVzY3JpcHRvcjtcbi8vaW1wb3J0IGFwcFVybCBmcm9tIFwiLi4vY29uZmlnL2FwcFVybFwiO1xuXG5cbnZhciBfbW9ieCA9IHJlcXVpcmUoJ21vYngnKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2F4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxudmFyIF9heGlvczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGlvcyk7XG5cbnZhciBfUm9vdCA9IHJlcXVpcmUoJy4uL2NvbmZpZy9Sb290Jyk7XG5cbnZhciBfdXJsU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMnKTtcblxudmFyIF91cmxTZWFyY2hQYXJhbXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXJsU2VhcmNoUGFyYW1zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2luaXREZWZpbmVQcm9wKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIWRlc2NyaXB0b3IpIHJldHVybjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwge1xuICAgICAgICBlbnVtZXJhYmxlOiBkZXNjcmlwdG9yLmVudW1lcmFibGUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZGVzY3JpcHRvci5jb25maWd1cmFibGUsXG4gICAgICAgIHdyaXRhYmxlOiBkZXNjcmlwdG9yLndyaXRhYmxlLFxuICAgICAgICB2YWx1ZTogZGVzY3JpcHRvci5pbml0aWFsaXplciA/IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIuY2FsbChjb250ZXh0KSA6IHZvaWQgMFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgZGVzYyA9IHt9O1xuICAgIE9iamVjdFsna2UnICsgJ3lzJ10oZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgICB9KTtcbiAgICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgICBpZiAoJ3ZhbHVlJyBpbiBkZXNjIHx8IGRlc2MuaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5LCBkZXNjKSB8fCBkZXNjO1xuICAgIH0sIGRlc2MpO1xuXG4gICAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgICAgICBkZXNjLmluaXRpYWxpemVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICAgICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICAgIGRlc2MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjO1xufVxuXG5mdW5jdGlvbiBfaW5pdGlhbGl6ZXJXYXJuaW5nSGVscGVyKGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlY29yYXRpbmcgY2xhc3MgcHJvcGVydHkgZmFpbGVkLiBQbGVhc2UgZW5zdXJlIHRoYXQgdHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMgaXMgZW5hYmxlZC4nKTtcbn1cblxudmFyIGNvb2tpZXMgPSByZXF1aXJlKCdqcy1jb29raWUnKTtcblxuLy9sZXQgYXBwVXJsID0gXCJodHRwczovL2V2ZXJ5b25lLWNhbi12b3RlLmhlcm9rdWFwcC5jb21cIlxudmFyIGFwcFVybCA9IFwiaHR0cHM6Ly9mY2Mtdm90ZS1zaW1vbmJyeWF0b3YuYzl1c2Vycy5pb1wiO1xudmFyIEFwaVN0b3JlID0gKF9kZWMgPSBfbW9ieC5hY3Rpb24uYm91bmQsIF9kZWMyID0gX21vYnguYWN0aW9uLmJvdW5kLCBfZGVjMyA9IF9tb2J4LmFjdGlvbi5ib3VuZCwgX2RlYzQgPSBfbW9ieC5hY3Rpb24uYm91bmQsIF9kZWM1ID0gX21vYnguYWN0aW9uLmJvdW5kLCBfZGVjNiA9IF9tb2J4LmFjdGlvbi5ib3VuZCwgX2RlYzcgPSBfbW9ieC5hY3Rpb24uYm91bmQsIChfY2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpU3RvcmUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFwaVN0b3JlKTtcblxuICAgICAgICBfaW5pdERlZmluZVByb3AodGhpcywgJ3VzZXJQb2xscycsIF9kZXNjcmlwdG9yLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQb2xsX0lkID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKGZhbHNlKTtcbiAgICAgICAgdGhpcy5mZXRjaGluZyA9ICgwLCBfbW9ieC5vYnNlcnZhYmxlKShmYWxzZSk7XG4gICAgICAgIHRoaXMudXNlclRva2VuID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKG51bGwpO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKG51bGwpO1xuICAgICAgICB0aGlzLnZvdGVkID0gKDAsIF9tb2J4Lm9ic2VydmFibGUpKGZhbHNlKTtcbiAgICAgICAgdGhpcy5sYXN0Vm90ZSA9ICgwLCBfbW9ieC5vYnNlcnZhYmxlKShudWxsKTtcbiAgICAgICAgdGhpcy5uZXdPcHRpb24gPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG4gICAgICAgIHRoaXMucG9sbE5hbWUgPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG4gICAgICAgIHRoaXMucG9sbE9wdGlvbnMgPSAoMCwgX21vYngub2JzZXJ2YWJsZSkoXCJcIik7XG5cbiAgICAgICAgdGhpcy5mZXRjaFBvbGxzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fX2ZldGNoUG9sbHNMaXN0X19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mZXRjaFBvbGxzTGlzdCgpO1xuICAgICAgICB0aGlzLnByZXBhcmVUb2tlbigpO1xuICAgICAgICBpZiAodGhpcy51c2VyVG9rZW4uZ2V0KCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIGluXCIpO1xuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluLnNldCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUuc2V0KGNvb2tpZXMuZ2V0KFwidXNlck5hbWVcIikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBpIHN0b3JlIGlzIHJlYWR5XCIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBcGlTdG9yZSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyT25Mb2dpblN0YXR1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJPbkxvZ2luU3RhdHVzKGd1ZXN0T3B0LCB1c2VyT3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluLmdldCgpID8gdXNlck9wdCA6IGd1ZXN0T3B0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsb2dPdXQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnaW5nIG91dFwiKTtcbiAgICAgICAgICAgIHRoaXMudXNlclRva2VuLnNldChudWxsKTtcbiAgICAgICAgICAgIHRoaXMudXNlck5hbWUuc2V0KG51bGwpO1xuICAgICAgICAgICAgdGhpcy5pc0xvZ2dlZEluLnNldChmYWxzZSk7XG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgndXNlclRva2VuJyk7XG4gICAgICAgICAgICBjb29raWVzLnJlbW92ZSgndXNlck5hbWUnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0VXNlclBvbGxzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZXJQb2xscygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoaW5nLnNldCh0cnVlKTtcbiAgICAgICAgICAgIF9heGlvczIuZGVmYXVsdC5nZXQoYXBwVXJsICsgJy9hcGkvdXNlclBvbGxzJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi51c2VyUG9sbHMgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmZldGNoaW5nLnNldChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVwYXJlVG9rZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZVRva2VuKCkge1xuICAgICAgICAgICAgdmFyIHVybFBhcmFtcyA9IG5ldyBfdXJsU2VhcmNoUGFyYW1zMi5kZWZhdWx0KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdXJsUGFyYW1zLmdldChcInRva2VuXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4sIFwiY3VyciBwYXJhbXNcIik7XG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvdCB0aGUgdG9rZW4gXCIgKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgY29va2llcy5zZXQoJ3VzZXJUb2tlbicsIHRva2VuLCB7IHNlY3VyZTogdHJ1ZSwgZXhwaXJlczogMTQgfSk7XG4gICAgICAgICAgICAgICAgY29va2llcy5zZXQoJ3VzZXJOYW1lJywgdXJsUGFyYW1zLmdldChcInVzZXJOYW1lXCIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9rZW4gPSBjb29raWVzLmdldChcInVzZXJUb2tlblwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlZCB0aGUgY29va2llc1wiLCB0b2tlbik7XG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJUb2tlbi5zZXQodG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlck5hbWUuc2V0KGNvb2tpZXMuZ2V0KFwidXNlck5hbWVcIikpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VyciB0b2tlblwiLCB0aGlzLnVzZXJUb2tlbi5nZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19fZmV0Y2hQb2xsc0xpc3RfX1JFQUNUX0hPVF9MT0FERVJfXycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfX2ZldGNoUG9sbHNMaXN0X19SRUFDVF9IT1RfTE9BREVSX18oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2ZldGNoUG9sbHNMaXN0X19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnX19mZXRjaFBvbGxzTGlzdF9fUkVBQ1RfSE9UX0xPQURFUl9fJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9fZmV0Y2hQb2xsc0xpc3RfX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZmV0Y2hQb2xsc0xpc3RfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdfX2ZldGNoUG9sbHNMaXN0X19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX19mZXRjaFBvbGxzTGlzdF9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19mZXRjaFBvbGxzTGlzdF9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ19fZmV0Y2hQb2xsc0xpc3RfX1JFQUNUX0hPVF9MT0FERVJfXycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfX2ZldGNoUG9sbHNMaXN0X19SRUFDVF9IT1RfTE9BREVSX18obGFzdFZvdGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoaW5nLnNldCh0cnVlKTtcbiAgICAgICAgICAgIF9heGlvczIuZGVmYXVsdC5nZXQoYXBwVXJsICsgXCIvYXBpL3BvbGxzTGlzdFwiKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkkndmUgZ290IHRoZSBwb3dlciBvZiBQb2xscy4uLiBBZ2FpbiFcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIF9Sb290LlZpZXdTdG9yZS5zZXRQcm9wZXJ0eShcInBvbGxzTGlzdFwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMzLmZldGNoaW5nLnNldChmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhc3RWb3RlID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLmxhc3RWb3RlLnNldChsYXN0Vm90ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpczMuY3VycmVudFBvbGxfSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX1Jvb3QuVmlld1N0b3JlLnNldFBvbGxWaWV3KF90aGlzMy5jdXJyZW50UG9sbF9JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZU5ld1BvbGwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlTmV3UG9sbCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBQb2xsIGlzIFwiICsgdGhpcy5wb2xsTmFtZSArIFwiIFwiICsgdGhpcy5wb2xsT3B0aW9ucyArIFwiIVwiKTtcbiAgICAgICAgICAgIHZhciBvcHRzID0gdGhpcy5wb2xsT3B0aW9ucy5nZXQoKS5zcGxpdCgnXFxuJyk7XG4gICAgICAgICAgICB2YXIgbmV3UG9sbCA9IHsgbmFtZTogdGhpcy5wb2xsTmFtZS5nZXQoKSwgb3B0aW9uczogb3B0cyB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmV3UG9sbCkpO1xuICAgICAgICAgICAgX2F4aW9zMi5kZWZhdWx0LnBvc3QoYXBwVXJsICsgKCcvYXBpL2NyZWF0ZU5ld1BvbGw/ZGF0YT0nICsgSlNPTi5zdHJpbmdpZnkobmV3UG9sbCkpLCB7IGZpcnN0TmFtZTogMTIzIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQucG9sbE5hbWUuc2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQucG9sbE9wdGlvbnMuc2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuZmV0Y2hQb2xsc0xpc3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Jlc2V0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKTtcbiAgICAgICAgICAgIHRoaXMubmV3T3B0aW9uLnNldChcIlwiKTtcbiAgICAgICAgICAgIHRoaXMucG9sbE5hbWUuc2V0KFwiXCIpO1xuICAgICAgICAgICAgdGhpcy5wb2xsT3B0aW9ucy5zZXQoXCJcIik7XG4gICAgICAgICAgICB0aGlzLnVzZXJQb2xscyA9IG51bGw7XG4gICAgICAgICAgICBfUm9vdC5WaWV3U3RvcmUuY2hvc2VuT3B0aW9uSW5kZXguc2V0KG51bGwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkZWxldGVQb2xsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZVBvbGwoaWQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nIHBvbGwgXCIgKyBpZCk7XG4gICAgICAgICAgICB2YXIgcG9sbHNMaXN0ID0gX1Jvb3QuVmlld1N0b3JlLmdldFByb3BlcnR5KFwicG9sbHNMaXN0XCIpO1xuICAgICAgICAgICAgdmFyIHBvbGwgPSBwb2xsc0xpc3QuZmluZChmdW5jdGlvbiAocG9sbCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2xsW1wiX2lkXCJdID09IGlkKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0RvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgcG9sbCBcIicgKyBwb2xsLm5hbWUgKyAnXCI/JyArICdcXG5UaGlzIGFjdGlvbiBpcyBwZXJtYW5lbnQuJykpIHtcbiAgICAgICAgICAgICAgICBfYXhpb3MyLmRlZmF1bHQuZ2V0KGFwcFVybCArICcvYXBpL2RlbGV0ZVBvbGwnLCB7IHBhcmFtczogeyBwb2xsSWQ6IGlkIH0gfSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCBfdGhpczUpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpczUuZmV0Y2hQb2xsc0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM1LmdldFVzZXJQb2xscygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd2b3RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZvdGUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHRoaXMubmV3T3B0aW9uLmdldCgpID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfUm9vdC5WaWV3U3RvcmUuY2hvc2VuT3B0aW9uSW5kZXguZ2V0KCksIFwid293XCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYXN0IHZvdGVkIGZvciBcIiwgdGhpcy5sYXN0Vm90ZS5nZXQoKSk7XG4gICAgICAgICAgICAgICAgdmFyIHZvdGVfaWQgPSBfUm9vdC5WaWV3U3RvcmUuY3VycmVudFBvbGwub3B0aW9uc1tfUm9vdC5WaWV3U3RvcmUuY2hvc2VuT3B0aW9uSW5kZXhdW1wiX2lkXCJdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZvdGVfaWQsIFwidm90aW5nXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVm90aW5nIGZvclwiICsgdGhpcy5wb2xsTmFtZSArIFwiIFwiICsgdGhpcy5wb2xsT3B0aW9ucyArIFwiIVwiKTtcbiAgICAgICAgICAgICAgICBfYXhpb3MyLmRlZmF1bHQuZ2V0KGFwcFVybCArICcvYXBpL3ZvdGUnLCB7IHBhcmFtczogeyBvcHRJZDogdm90ZV9pZCwgcG9sbElkOiBfUm9vdC5WaWV3U3RvcmUuY3VycmVudFBvbGxbXCJfaWRcIl0gfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMYXN0IHZvdGVkIGZvciBcIiwgX3RoaXM2Lmxhc3RWb3RlLmdldCgpKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM2LmZldGNoUG9sbHNMaXN0KF9Sb290LlZpZXdTdG9yZS5jaG9zZW5PcHRpb25JbmRleC5nZXQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCA1NTU1NTM0KTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVyci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBfYXhpb3MyLmRlZmF1bHQuZ2V0KGFwcFVybCArICcvYXBpL3ZvdGUnLCB7IHBhcmFtczogeyBvcHROYW1lOiB0aGlzLm5ld09wdGlvbi5nZXQoKSwgcG9sbElkOiBfUm9vdC5WaWV3U3RvcmUuY3VycmVudFBvbGxbXCJfaWRcIl0gfSB9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpczYuZmV0Y2hQb2xsc0xpc3QoX1Jvb3QuVmlld1N0b3JlLmNob3Nlbk9wdGlvbkluZGV4LmdldCgpKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBcGlTdG9yZTtcbn0oKSwgKF9kZXNjcmlwdG9yID0gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAndXNlclBvbGxzJywgW19tb2J4Lm9ic2VydmFibGVdLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBpbml0aWFsaXplcjogZnVuY3Rpb24gaW5pdGlhbGl6ZXIoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0pLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXJPbkxvZ2luU3RhdHVzJywgW19kZWNdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdyZW5kZXJPbkxvZ2luU3RhdHVzJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdsb2dPdXQnLCBbX2RlYzJdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdsb2dPdXQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2dldFVzZXJQb2xscycsIFtfZGVjM10sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2dldFVzZXJQb2xscycpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncHJlcGFyZVRva2VuJywgW19kZWM0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAncHJlcGFyZVRva2VuJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdjcmVhdGVOZXdQb2xsJywgW19kZWM1XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnY3JlYXRlTmV3UG9sbCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnZGVsZXRlUG9sbCcsIFtfZGVjNl0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2RlbGV0ZVBvbGwnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ3ZvdGUnLCBbX2RlYzddLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICd2b3RlJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKSk7XG52YXIgX2RlZmF1bHQgPSBBcGlTdG9yZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKGFwcFVybCwgJ2FwcFVybCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL3N0b3Jlcy9BcGlTdG9yZS5qcycpO1xuXG4gICAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoQXBpU3RvcmUsICdBcGlTdG9yZScsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL3N0b3Jlcy9BcGlTdG9yZS5qcycpO1xuXG4gICAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvc3RvcmVzL0FwaVN0b3JlLmpzJyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9zdG9yZXMvQXBpU3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDM5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///399\n");

/***/ })

})