webpackHotUpdate(1,{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(44);\n\n__webpack_require__(465);\n\nvar _mobxReact = __webpack_require__(29);\n\nvar _mobx = __webpack_require__(59);\n\nvar _List = __webpack_require__(565);\n\nvar _List2 = _interopRequireDefault(_List);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar UserPollsView = (0, _mobxReact.inject)(\"ViewStore\", \"ApiStore\")((0, _mobxReact.observer)(function (props) {\n  console.log(props.ApiStore.getUserPolls());\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_List2.default, { className: 'userPollsList', list: null })\n  );\n}));\n//import React from 'react';\nvar _default = UserPollsView;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(UserPollsView, 'UserPollsView', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/mainViews/UserPollsView.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/mainViews/UserPollsView.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1VzZXJQb2xsc1ZpZXcuanM/MmRlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdFJvdXRlckRvbSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKTtcblxucmVxdWlyZSgnLi4vLi4vYXNzZXRzL3Njc3MvUG9sbHNMaXN0LnNjc3MnKTtcblxudmFyIF9tb2J4UmVhY3QgPSByZXF1aXJlKCdtb2J4LXJlYWN0Jyk7XG5cbnZhciBfbW9ieCA9IHJlcXVpcmUoJ21vYngnKTtcblxudmFyIF9MaXN0ID0gcmVxdWlyZSgnLi4vYmxvY2tzL0xpc3QnKTtcblxudmFyIF9MaXN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVXNlclBvbGxzVmlldyA9ICgwLCBfbW9ieFJlYWN0LmluamVjdCkoXCJWaWV3U3RvcmVcIiwgXCJBcGlTdG9yZVwiKSgoMCwgX21vYnhSZWFjdC5vYnNlcnZlcikoZnVuY3Rpb24gKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHByb3BzLkFwaVN0b3JlLmdldFVzZXJQb2xscygpKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIG51bGwsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpc3QyLmRlZmF1bHQsIHsgY2xhc3NOYW1lOiAndXNlclBvbGxzTGlzdCcsIGxpc3Q6IG51bGwgfSlcbiAgKTtcbn0pKTtcbi8vaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBfZGVmYXVsdCA9IFVzZXJQb2xsc1ZpZXc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbjtcblxudmFyIF90ZW1wID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKFVzZXJQb2xsc1ZpZXcsICdVc2VyUG9sbHNWaWV3JywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9tYWluVmlld3MvVXNlclBvbGxzVmlldy5qcycpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCAnZGVmYXVsdCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1VzZXJQb2xsc1ZpZXcuanMnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1VzZXJQb2xsc1ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDU2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///564\n");

/***/ })

})