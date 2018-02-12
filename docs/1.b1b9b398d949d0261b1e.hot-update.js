webpackHotUpdate(1,{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(19);\n\nvar _mobxReact = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar List = (0, _mobxReact.observer)(function (props) {\n    return _react2.default.createElement(\n        'div',\n        { className: \"polls-list my-scroll \" + props.listClass },\n        renderList(props.list, props.clickHandler, props.listItemClass, props.btnClose)\n    );\n});\n//import '../../assets/scss/PollsList.scss'\n\n\nvar renderList = function renderList(list, clickHandler, listItemClass, btnClose) {\n    var ls = []; //console.log(list, clickHandler);\n    if (list) {\n        list.forEach(function (poll, ind) {\n            if (btnClose) {\n                ls.push(_react2.default.createElement(\n                    'div',\n                    { className: \"flex-item user-li-item-cont\" },\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/poll/' + poll['_id'], className: \"user-li-item\"\n                        },\n                        poll.name\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { className: 'list-close-btn' },\n                        _react2.default.createElement('i', { className: 'fas fa-times', onClick: clickHandler })\n                    )\n                ));\n            } else {\n                ls.push(_react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/poll/' + poll['_id'], className: \"polls-list-item \" + listItemClass,\n                        onClick: clickHandler },\n                    poll.name\n                ));\n            }\n        });\n        return ls;\n    }\n};\n\nvar _default = List;\nexports.default = _default;\n;\n\nvar _temp = function () {\n    if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n        return;\n    }\n\n    __REACT_HOT_LOADER__.register(List, 'List', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/List.js');\n\n    __REACT_HOT_LOADER__.register(renderList, 'renderList', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/List.js');\n\n    __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/List.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xpc3QuanM/ZTE4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0Um91dGVyRG9tID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpO1xuXG52YXIgX21vYnhSZWFjdCA9IHJlcXVpcmUoJ21vYngtcmVhY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIExpc3QgPSAoMCwgX21vYnhSZWFjdC5vYnNlcnZlcikoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IFwicG9sbHMtbGlzdCBteS1zY3JvbGwgXCIgKyBwcm9wcy5saXN0Q2xhc3MgfSxcbiAgICAgICAgcmVuZGVyTGlzdChwcm9wcy5saXN0LCBwcm9wcy5jbGlja0hhbmRsZXIsIHByb3BzLmxpc3RJdGVtQ2xhc3MsIHByb3BzLmJ0bkNsb3NlKVxuICAgICk7XG59KTtcbi8vaW1wb3J0ICcuLi8uLi9hc3NldHMvc2Nzcy9Qb2xsc0xpc3Quc2NzcydcblxuXG52YXIgcmVuZGVyTGlzdCA9IGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdCwgY2xpY2tIYW5kbGVyLCBsaXN0SXRlbUNsYXNzLCBidG5DbG9zZSkge1xuICAgIHZhciBscyA9IFtdOyAvL2NvbnNvbGUubG9nKGxpc3QsIGNsaWNrSGFuZGxlcik7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwb2xsLCBpbmQpIHtcbiAgICAgICAgICAgIGlmIChidG5DbG9zZSkge1xuICAgICAgICAgICAgICAgIGxzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJmbGV4LWl0ZW0gdXNlci1saS1pdGVtLWNvbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIF9yZWFjdFJvdXRlckRvbS5MaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0bzogJy9wb2xsLycgKyBwb2xsWydfaWQnXSwgY2xhc3NOYW1lOiBcInVzZXItbGktaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9sbC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2xpc3QtY2xvc2UtYnRuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2knLCB7IGNsYXNzTmFtZTogJ2ZhcyBmYS10aW1lcycsIG9uQ2xpY2s6IGNsaWNrSGFuZGxlciB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdFJvdXRlckRvbS5MaW5rLFxuICAgICAgICAgICAgICAgICAgICB7IHRvOiAnL3BvbGwvJyArIHBvbGxbJ19pZCddLCBjbGFzc05hbWU6IFwicG9sbHMtbGlzdC1pdGVtIFwiICsgbGlzdEl0ZW1DbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IGNsaWNrSGFuZGxlciB9LFxuICAgICAgICAgICAgICAgICAgICBwb2xsLm5hbWVcbiAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBscztcbiAgICB9XG59O1xuXG52YXIgX2RlZmF1bHQgPSBMaXN0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG47XG5cbnZhciBfdGVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoTGlzdCwgJ0xpc3QnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9MaXN0LmpzJyk7XG5cbiAgICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihyZW5kZXJMaXN0LCAncmVuZGVyTGlzdCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xpc3QuanMnKTtcblxuICAgIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCAnZGVmYXVsdCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xpc3QuanMnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///140\n");

/***/ })

})