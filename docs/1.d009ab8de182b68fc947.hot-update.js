webpackHotUpdate(1,{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(19);\n\nvar _HomeView = __webpack_require__(289);\n\nvar _HomeView2 = _interopRequireDefault(_HomeView);\n\nvar _PollView = __webpack_require__(308);\n\nvar _PollView2 = _interopRequireDefault(_PollView);\n\nvar _PollAddView = __webpack_require__(392);\n\nvar _PollAddView2 = _interopRequireDefault(_PollAddView);\n\nvar _UserPollsView = __webpack_require__(393);\n\nvar _UserPollsView2 = _interopRequireDefault(_UserPollsView);\n\nvar _PollsList = __webpack_require__(395);\n\nvar _PollsList2 = _interopRequireDefault(_PollsList);\n\nvar _ToolBar = __webpack_require__(396);\n\nvar _ToolBar2 = _interopRequireDefault(_ToolBar);\n\nvar _mobxReact = __webpack_require__(11);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import { Nav, NavItem } from 'react-bootstrap'\n\n//import 'bootstrap';\n\n//console.log(window.location.pathname);\n\n//<div className = \"btn-image\">fdsfdsdf</div>\n//'../../vendors/vendors';\nvar App = (0, _reactRouterDom.withRouter)((0, _mobxReact.inject)(\"ViewStore\", \"ApiStore\")((0, _mobxReact.observer)(function (props) {\n  var sideMenu = props.ViewStore.isSideMenuOpened.get() ? \"side-menu side-menu-opened\" : \"side-menu\";\n  var pollsListBtn = props.ViewStore.choosePollMenuOpened.get() ? \"poll-list-btn poll-list-btn-active\" : \"poll-list-btn\";\n  if (window.location.pathname == \"/\") {\n    pollsListBtn += \" poll-list-btn-animated\";\n  }\n  var choosePollMenu = props.ViewStore.choosePollMenuOpened.get() ? \"polls-list-container polls-list-container-visible\" : \"polls-list-container\";\n  if (props.ViewStore.getProperty(\"pollsList\")) {\n    return _react2.default.createElement(\n      'div',\n      { className: 'app' },\n      _react2.default.createElement('div', { className: sideMenu }),\n      _react2.default.createElement(_ToolBar2.default, { isLoggedIn: props.ApiStore.isLoggedIn.get() }),\n      _react2.default.createElement(\n        'div',\n        { className: 'main-content' },\n        _react2.default.createElement(\n          'div',\n          { className: choosePollMenu },\n          _react2.default.createElement(\n            'div',\n            { className: 'polls-list-header' },\n            'Available Polls:'\n          ),\n          _react2.default.createElement(_PollsList2.default, null)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: pollsListBtn, onClick: function onClick() {\n              props.ViewStore.choosePollMenuOpened.set(!props.ViewStore.choosePollMenuOpened.get());\n            } },\n          _react2.default.createElement('div', { className: 'btn-image' }),\n          _react2.default.createElement('div', null)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'flex-item views-container' },\n          _react2.default.createElement(\n            'div',\n            { className: 'loader-container' },\n            _react2.default.createElement('div', { className: 'loader' })\n          ),\n          _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _HomeView2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/poll/:id', component: _PollView2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/addpoll', component: _PollAddView2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/myPolls', component: _UserPollsView2.default })\n          )\n        )\n      )\n    );\n  } else return null;\n})));\n\nvar _default = App;\nexports.default = _default;\n\n// <div className = \"scroll-me\">Scroll down to see more polls...</div>\n\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(App, 'App', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/app/App.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/app/App.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYXBwL0FwcC5qcz8zOGI0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0Um91dGVyRG9tID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpO1xuXG52YXIgX0hvbWVWaWV3ID0gcmVxdWlyZSgnLi4vbWFpblZpZXdzL0hvbWVWaWV3Jyk7XG5cbnZhciBfSG9tZVZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSG9tZVZpZXcpO1xuXG52YXIgX1BvbGxWaWV3ID0gcmVxdWlyZSgnLi4vbWFpblZpZXdzL1BvbGxWaWV3Jyk7XG5cbnZhciBfUG9sbFZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9sbFZpZXcpO1xuXG52YXIgX1BvbGxBZGRWaWV3ID0gcmVxdWlyZSgnLi4vbWFpblZpZXdzL1BvbGxBZGRWaWV3Jyk7XG5cbnZhciBfUG9sbEFkZFZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9sbEFkZFZpZXcpO1xuXG52YXIgX1VzZXJQb2xsc1ZpZXcgPSByZXF1aXJlKCcuLi9tYWluVmlld3MvVXNlclBvbGxzVmlldycpO1xuXG52YXIgX1VzZXJQb2xsc1ZpZXcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVXNlclBvbGxzVmlldyk7XG5cbnZhciBfUG9sbHNMaXN0ID0gcmVxdWlyZSgnLi4vYmxvY2tzL1BvbGxzTGlzdCcpO1xuXG52YXIgX1BvbGxzTGlzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2xsc0xpc3QpO1xuXG52YXIgX1Rvb2xCYXIgPSByZXF1aXJlKCcuLi9ibG9ja3MvVG9vbEJhcicpO1xuXG52YXIgX1Rvb2xCYXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG9vbEJhcik7XG5cbnZhciBfbW9ieFJlYWN0ID0gcmVxdWlyZSgnbW9ieC1yZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vL2ltcG9ydCB7IE5hdiwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuLy9pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8vY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblxuLy88ZGl2IGNsYXNzTmFtZSA9IFwiYnRuLWltYWdlXCI+ZmRzZmRzZGY8L2Rpdj5cbi8vJy4uLy4uL3ZlbmRvcnMvdmVuZG9ycyc7XG52YXIgQXBwID0gKDAsIF9yZWFjdFJvdXRlckRvbS53aXRoUm91dGVyKSgoMCwgX21vYnhSZWFjdC5pbmplY3QpKFwiVmlld1N0b3JlXCIsIFwiQXBpU3RvcmVcIikoKDAsIF9tb2J4UmVhY3Qub2JzZXJ2ZXIpKGZ1bmN0aW9uIChwcm9wcykge1xuICB2YXIgc2lkZU1lbnUgPSBwcm9wcy5WaWV3U3RvcmUuaXNTaWRlTWVudU9wZW5lZC5nZXQoKSA/IFwic2lkZS1tZW51IHNpZGUtbWVudS1vcGVuZWRcIiA6IFwic2lkZS1tZW51XCI7XG4gIHZhciBwb2xsc0xpc3RCdG4gPSBwcm9wcy5WaWV3U3RvcmUuY2hvb3NlUG9sbE1lbnVPcGVuZWQuZ2V0KCkgPyBcInBvbGwtbGlzdC1idG4gcG9sbC1saXN0LWJ0bi1hY3RpdmVcIiA6IFwicG9sbC1saXN0LWJ0blwiO1xuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiKSB7XG4gICAgcG9sbHNMaXN0QnRuICs9IFwiIHBvbGwtbGlzdC1idG4tYW5pbWF0ZWRcIjtcbiAgfVxuICB2YXIgY2hvb3NlUG9sbE1lbnUgPSBwcm9wcy5WaWV3U3RvcmUuY2hvb3NlUG9sbE1lbnVPcGVuZWQuZ2V0KCkgPyBcInBvbGxzLWxpc3QtY29udGFpbmVyIHBvbGxzLWxpc3QtY29udGFpbmVyLXZpc2libGVcIiA6IFwicG9sbHMtbGlzdC1jb250YWluZXJcIjtcbiAgaWYgKHByb3BzLlZpZXdTdG9yZS5nZXRQcm9wZXJ0eShcInBvbGxzTGlzdFwiKSkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdhcHAnIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IHNpZGVNZW51IH0pLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1Rvb2xCYXIyLmRlZmF1bHQsIHsgaXNMb2dnZWRJbjogcHJvcHMuQXBpU3RvcmUuaXNMb2dnZWRJbi5nZXQoKSB9KSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdtYWluLWNvbnRlbnQnIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjaG9vc2VQb2xsTWVudSB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3BvbGxzLWxpc3QtaGVhZGVyJyB9LFxuICAgICAgICAgICAgJ0F2YWlsYWJsZSBQb2xsczonXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUG9sbHNMaXN0Mi5kZWZhdWx0LCBudWxsKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcG9sbHNMaXN0QnRuLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICBwcm9wcy5WaWV3U3RvcmUuY2hvb3NlUG9sbE1lbnVPcGVuZWQuc2V0KCFwcm9wcy5WaWV3U3RvcmUuY2hvb3NlUG9sbE1lbnVPcGVuZWQuZ2V0KCkpO1xuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2J0bi1pbWFnZScgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZmxleC1pdGVtIHZpZXdzLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdsb2FkZXItY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbG9hZGVyJyB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVhY3RSb3V0ZXJEb20uU3dpdGNoLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFJvdXRlckRvbS5Sb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy8nLCBjb21wb25lbnQ6IF9Ib21lVmlldzIuZGVmYXVsdCB9KSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFJvdXRlckRvbS5Sb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9wb2xsLzppZCcsIGNvbXBvbmVudDogX1BvbGxWaWV3Mi5kZWZhdWx0IH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0Um91dGVyRG9tLlJvdXRlLCB7IGV4YWN0OiB0cnVlLCBwYXRoOiAnL2FkZHBvbGwnLCBjb21wb25lbnQ6IF9Qb2xsQWRkVmlldzIuZGVmYXVsdCB9KSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdFJvdXRlckRvbS5Sb3V0ZSwgeyBleGFjdDogdHJ1ZSwgcGF0aDogJy9teVBvbGxzJywgY29tcG9uZW50OiBfVXNlclBvbGxzVmlldzIuZGVmYXVsdCB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH0gZWxzZSByZXR1cm4gbnVsbDtcbn0pKSk7XG5cbnZhciBfZGVmYXVsdCA9IEFwcDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyA8ZGl2IGNsYXNzTmFtZSA9IFwic2Nyb2xsLW1lXCI+U2Nyb2xsIGRvd24gdG8gc2VlIG1vcmUgcG9sbHMuLi48L2Rpdj5cblxuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoQXBwLCAnQXBwJywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9hcHAvQXBwLmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9hcHAvQXBwLmpzJyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL2FwcC9BcHAuanNcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///288\n");

/***/ })

})