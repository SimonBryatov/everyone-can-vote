webpackHotUpdate(1,{

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(44);\n\n__webpack_require__(465);\n\nvar _mobxReact = __webpack_require__(29);\n\nvar _List = __webpack_require__(565);\n\nvar _List2 = _interopRequireDefault(_List);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// const renderList = (ViewStore) => {\n//   const list = [];\n//   if (ViewStore.pollsList) {\n//   ViewStore.pollsList.forEach((poll, ind) => {\n//   list.push(<Link to = {'/poll/' + ind} className = \"polls-list-item\" \n//   onClick = {() => ViewStore.choosePollMenuOpened.set(false)}>{poll.name}</Link>)\n//   })\n//   return(list)\n//   }\n\n// } \n\nvar PollsList = (0, _mobxReact.inject)(\"ViewStore\")((0, _mobxReact.observer)(function (props) {\n\n  var polls = props.ViewStore.pollsList;\n  console.log(polls);\n  if (polls) {\n    return _react2.default.createElement(\n      'div',\n      { className: 'polls-list' },\n      _react2.default.createElement(_List2.default, { list: props.ViewStore.getProperty['pollsList'], clickHandler: function clickHandler() {\n          props.ViewStore.choosePollMenuOpened.set(false);\n        } })\n    );\n  } else return null;\n}));\n\nvar _default = PollsList;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PollsList, 'PollsList', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollsList.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollsList.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDY0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxzTGlzdC5qcz9kMjgyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0Um91dGVyRG9tID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpO1xuXG5yZXF1aXJlKCcuLi8uLi9hc3NldHMvc2Nzcy9Qb2xsc0xpc3Quc2NzcycpO1xuXG52YXIgX21vYnhSZWFjdCA9IHJlcXVpcmUoJ21vYngtcmVhY3QnKTtcblxudmFyIF9MaXN0ID0gcmVxdWlyZSgnLi9MaXN0Jyk7XG5cbnZhciBfTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gY29uc3QgcmVuZGVyTGlzdCA9IChWaWV3U3RvcmUpID0+IHtcbi8vICAgY29uc3QgbGlzdCA9IFtdO1xuLy8gICBpZiAoVmlld1N0b3JlLnBvbGxzTGlzdCkge1xuLy8gICBWaWV3U3RvcmUucG9sbHNMaXN0LmZvckVhY2goKHBvbGwsIGluZCkgPT4ge1xuLy8gICBsaXN0LnB1c2goPExpbmsgdG8gPSB7Jy9wb2xsLycgKyBpbmR9IGNsYXNzTmFtZSA9IFwicG9sbHMtbGlzdC1pdGVtXCIgXG4vLyAgIG9uQ2xpY2sgPSB7KCkgPT4gVmlld1N0b3JlLmNob29zZVBvbGxNZW51T3BlbmVkLnNldChmYWxzZSl9Pntwb2xsLm5hbWV9PC9MaW5rPilcbi8vICAgfSlcbi8vICAgcmV0dXJuKGxpc3QpXG4vLyAgIH1cblxuLy8gfSBcblxudmFyIFBvbGxzTGlzdCA9ICgwLCBfbW9ieFJlYWN0LmluamVjdCkoXCJWaWV3U3RvcmVcIikoKDAsIF9tb2J4UmVhY3Qub2JzZXJ2ZXIpKGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIHZhciBwb2xscyA9IHByb3BzLlZpZXdTdG9yZS5wb2xsc0xpc3Q7XG4gIGNvbnNvbGUubG9nKHBvbGxzKTtcbiAgaWYgKHBvbGxzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ3BvbGxzLWxpc3QnIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTGlzdDIuZGVmYXVsdCwgeyBsaXN0OiBwcm9wcy5WaWV3U3RvcmUuZ2V0UHJvcGVydHlbJ3BvbGxzTGlzdCddLCBjbGlja0hhbmRsZXI6IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICAgICAgICBwcm9wcy5WaWV3U3RvcmUuY2hvb3NlUG9sbE1lbnVPcGVuZWQuc2V0KGZhbHNlKTtcbiAgICAgICAgfSB9KVxuICAgICk7XG4gIH0gZWxzZSByZXR1cm4gbnVsbDtcbn0pKTtcblxudmFyIF9kZWZhdWx0ID0gUG9sbHNMaXN0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG47XG5cbnZhciBfdGVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihQb2xsc0xpc3QsICdQb2xsc0xpc3QnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsc0xpc3QuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsc0xpc3QuanMnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxzTGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///464\n");

/***/ })

})