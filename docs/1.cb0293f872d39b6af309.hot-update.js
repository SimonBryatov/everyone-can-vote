webpackHotUpdate(1,{

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(22);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar PollAddView = (0, _mobxReact.inject)(\"ApiStore\")((0, _mobxReact.observer)(function (props) {\n\n  var content = props.ApiStore.renderOnLoginStatus(_react2.default.createElement(\n    'div',\n    { className: 'poll-add-view' },\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item flex-item-header' },\n      _react2.default.createElement(\n        'p',\n        null,\n        'New Poll'\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item poll-add-msg-line msg-l-1' },\n      'Log in first!'\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item msg-l-2' },\n      _react2.default.createElement(\n        'div',\n        null,\n        'And we\\'ll ask them questions together'\n      ),\n      _react2.default.createElement(\n        'div',\n        { className: 'ascii-smile' },\n        '\\u0F3C \\u3064 \\u25D5_\\u25D5 \\u0F3D\\u3064'\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item poll-add-msg-line' },\n      _react2.default.createElement(\n        'a',\n        { className: 'poll-add-login  hoverable', href: '/auth/facebook' },\n        'Log In',\n        _react2.default.createElement('i', { className: 'fab fa-facebook icon-fb' })\n      )\n    )\n  ), _react2.default.createElement(\n    'div',\n    { className: 'poll-add-view' },\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item flex-item-header' },\n      _react2.default.createElement(\n        'p',\n        null,\n        'New Poll'\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item flex-item-name-field' },\n      _react2.default.createElement('input', { className: 'name-field', placeholder: 'Enter poll name', value: props.ApiStore.pollName.get(), onChange: function onChange(e) {\n          props.ApiStore.pollName.set(e.target.value);\n        } })\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item flex-item-options-field' },\n      _react2.default.createElement('textarea', { className: 'options-field', placeholder: 'Enter Options\\nSeparated\\nBy\\nNew Lines',\n        value: props.ApiStore.pollOptions.get(), onChange: function onChange(e) {\n          props.ApiStore.pollOptions.set(e.target.value);\n        } })\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'flex-item flex-item-btn-create' },\n      _react2.default.createElement(\n        'button',\n        { className: 'btn-create', onClick: function onClick() {\n            props.ApiStore.createNewPoll();\n          } },\n        'Create a Poll'\n      )\n    )\n  ));\n  return content;\n}));\n\nvar _default = PollAddView;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(PollAddView, 'PollAddView', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/mainViews/PollAddView.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/mainViews/PollAddView.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1BvbGxBZGRWaWV3LmpzPzg0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfbW9ieFJlYWN0ID0gcmVxdWlyZSgnbW9ieC1yZWFjdCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgUG9sbEFkZFZpZXcgPSAoMCwgX21vYnhSZWFjdC5pbmplY3QpKFwiQXBpU3RvcmVcIikoKDAsIF9tb2J4UmVhY3Qub2JzZXJ2ZXIpKGZ1bmN0aW9uIChwcm9wcykge1xuXG4gIHZhciBjb250ZW50ID0gcHJvcHMuQXBpU3RvcmUucmVuZGVyT25Mb2dpblN0YXR1cyhfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IGNsYXNzTmFtZTogJ3BvbGwtYWRkLXZpZXcnIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZmxleC1pdGVtIGZsZXgtaXRlbS1oZWFkZXInIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3AnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnTmV3IFBvbGwnXG4gICAgICApXG4gICAgKSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdmbGV4LWl0ZW0gcG9sbC1hZGQtbXNnLWxpbmUgbXNnLWwtMScgfSxcbiAgICAgICdMb2cgaW4gZmlyc3QhJ1xuICAgICksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZmxleC1pdGVtIG1zZy1sLTInIH0sXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdBbmQgd2VcXCdsbCBhc2sgdGhlbSBxdWVzdGlvbnMgdG9nZXRoZXInXG4gICAgICApLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogJ2FzY2lpLXNtaWxlJyB9LFxuICAgICAgICAnXFx1MEYzQyBcXHUzMDY0IFxcdTI1RDVfXFx1MjVENSBcXHUwRjNEXFx1MzA2NCdcbiAgICAgIClcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2ZsZXgtaXRlbSBwb2xsLWFkZC1tc2ctbGluZScgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHsgY2xhc3NOYW1lOiAncG9sbC1hZGQtbG9naW4gIGhvdmVyYWJsZScsIGhyZWY6ICcvYXV0aC9mYWNlYm9vaycgfSxcbiAgICAgICAgJ0xvZyBJbicsXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpJywgeyBjbGFzc05hbWU6ICdmYWIgZmEtZmFjZWJvb2sgaWNvbi1mYicgfSlcbiAgICAgIClcbiAgICApXG4gICksIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgY2xhc3NOYW1lOiAncG9sbC1hZGQtdmlldycgfSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6ICdmbGV4LWl0ZW0gZmxleC1pdGVtLWhlYWRlcicgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAncCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICdOZXcgUG9sbCdcbiAgICAgIClcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2ZsZXgtaXRlbSBmbGV4LWl0ZW0tbmFtZS1maWVsZCcgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgY2xhc3NOYW1lOiAnbmFtZS1maWVsZCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgcG9sbCBuYW1lJywgdmFsdWU6IHByb3BzLkFwaVN0b3JlLnBvbGxOYW1lLmdldCgpLCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICAgIHByb3BzLkFwaVN0b3JlLnBvbGxOYW1lLnNldChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gfSlcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2ZsZXgtaXRlbSBmbGV4LWl0ZW0tb3B0aW9ucy1maWVsZCcgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHsgY2xhc3NOYW1lOiAnb3B0aW9ucy1maWVsZCcsIHBsYWNlaG9sZGVyOiAnRW50ZXIgT3B0aW9uc1xcblNlcGFyYXRlZFxcbkJ5XFxuTmV3IExpbmVzJyxcbiAgICAgICAgdmFsdWU6IHByb3BzLkFwaVN0b3JlLnBvbGxPcHRpb25zLmdldCgpLCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgICAgICAgIHByb3BzLkFwaVN0b3JlLnBvbGxPcHRpb25zLnNldChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0gfSlcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogJ2ZsZXgtaXRlbSBmbGV4LWl0ZW0tYnRuLWNyZWF0ZScgfSxcbiAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgeyBjbGFzc05hbWU6ICdidG4tY3JlYXRlJywgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgIHByb3BzLkFwaVN0b3JlLmNyZWF0ZU5ld1BvbGwoKTtcbiAgICAgICAgICB9IH0sXG4gICAgICAgICdDcmVhdGUgYSBQb2xsJ1xuICAgICAgKVxuICAgIClcbiAgKSk7XG4gIHJldHVybiBjb250ZW50O1xufSkpO1xuXG52YXIgX2RlZmF1bHQgPSBQb2xsQWRkVmlldztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoUG9sbEFkZFZpZXcsICdQb2xsQWRkVmlldycsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1BvbGxBZGRWaWV3LmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoX2RlZmF1bHQsICdkZWZhdWx0JywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9tYWluVmlld3MvUG9sbEFkZFZpZXcuanMnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvbWFpblZpZXdzL1BvbGxBZGRWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA0ODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///487\n");

/***/ })

})