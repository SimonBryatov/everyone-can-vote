webpackHotUpdate(1,{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(405);\n\nvar _mobxReact = __webpack_require__(22);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import {introspect} from 'patch-react-proptypes-add-introspection'\n//const DonutChart = require('react-donut-chart');\n\nvar COLORS = ['#0088FE', '#00C49F', '#FF8042'];\n\nvar PollChart = (_dec = (0, _mobxReact.inject)(\"ViewStore\", \"ApiStore\"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(PollChart, _React$Component);\n\n  function PollChart(props) {\n    _classCallCheck(this, PollChart);\n\n    var _this = _possibleConstructorReturn(this, (PollChart.__proto__ || Object.getPrototypeOf(PollChart)).call(this, props));\n\n    _this.resize = function () {\n      return _this.__resize__REACT_HOT_LOADER__.apply(_this, arguments);\n    };\n\n    _this.state = {\n      active: -1\n    };\n    return _this;\n  }\n\n  _createClass(PollChart, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n\n      //console.log(\"I will mount!\")\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(nextProps) {\n      // nextProps.ViewStore.setPollView();\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.forceUpdate();\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener('resize', this.resize);\n      this.resize();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      if (!this.props.ApiStore.voted.get()) {\n        var store = this.props.ViewStore;\n        var poll = store.getProperty(\"currentPoll\");\n        var colorMap = store.getProperty(\"colorMap\");\n        var opts = [].concat(_toConsumableArray(poll.options));\n        console.log(opts);\n        opts.forEach(function (el, ind) {\n          el.id = ind;\n        });\n        //console.log(poll)\n        var colorPick = function colorPick(ind) {\n          // console.log(store.activeOptionIndex)\n          var color = colorMap[ind];\n          if (store.activeOptionIndex == ind) {\n            color = \"rgba(0, 0, 0, 0.4)\";\n            console.log(color);\n          }\n          return color;\n        };\n        //let updater = this.props.ViewStore.updater.get();\n        var height = 0;\n        var width = 0;\n        var parent = document.getElementById('chart-container');\n        if (parent) {\n          height = parent.clientHeight;\n          width = parent.clientWidth;\n        }\n        //   <text style = {{'font-size': '40px'}} className = \"chosen-sector\" x={e.cx} y={e.cy - e.outerRadius - 10} dy={8} textAnchor=\"middle\" fill={\"white\"}>{e.payload.name}</text>\n        return _react2.default.createElement(\n          'div',\n          { className: 'flex-item' },\n          _react2.default.createElement(\n            _recharts.PieChart,\n            { width: width * 0.99, height: height * 0.99 },\n            _react2.default.createElement(\n              _recharts.Pie,\n              { data: opts, dataKey: 'votes', nameKey: 'name',\n                cx: '50%', cy: '50%', innerRadius: height * 0.28, outerRadius: height * 0.4, fill: '#82ca9d',\n                onMouseOver: function onMouseOver(e) {\n                  store.activeOptionIndex.set(e.payload.id);console.log(store.activeOptionIndex.get());\n                },\n                onClick: function onClick(e) {\n                  store.chosenOptionIndex.set(e.payload.id);\n                  _this2.props.ApiStore.newOption.set(\"\");\n                },\n                onMouseLeave: function onMouseLeave(e) {/*store.activeOptionIndex.set(-1);*/},\n                activeIndex: store.activeOptionIndex.get(),\n                activeShape: function activeShape(e) {\n                  return _react2.default.createElement(\n                    'g',\n                    null,\n                    _react2.default.createElement(\n                      'text',\n                      { className: 'chosen-sector', x: e.cx, y: e.cy, dy: 8, textAnchor: 'middle', fill: \"white\" },\n                      (e.percent * 100).toFixed(2) + \"%\"\n                    ),\n                    _react2.default.createElement(_recharts.Sector, {\n                      className: 'option-cell',\n                      cx: e.cx,\n                      cy: e.cy,\n                      startAngle: e.startAngle,\n                      endAngle: e.endAngle,\n                      innerRadius: height * 0.28,\n                      outerRadius: height * 0.4,\n                      stroke: '#FF5960', 'stroke-width': 5,\n                      fill: e.payload.fill\n                    })\n                  );\n                } },\n              opts.map(function (entry, index) {\n                return _react2.default.createElement(_recharts.Cell, { className: 'option-cell', fill: colorPick(index), stroke: 'black' });\n              })\n            )\n          )\n        );\n      } else {\n        this.props.ApiStore.voted.set(false);return null;\n      }\n    }\n  }]);\n\n  return PollChart;\n}(_react2.default.Component)) || _class) || _class);\n\n\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\nfunction LightenDarkenColor(col, amt) {\n\n  var usePound = false;\n\n  if (col[0] == \"#\") {\n    col = col.slice(1);\n    usePound = true;\n  }\n\n  var num = parseInt(col, 16);\n\n  var r = (num >> 16) + amt;\n\n  if (r > 255) r = 255;else if (r < 0) r = 0;\n\n  var b = (num >> 8 & 0x00FF) + amt;\n\n  if (b > 255) b = 255;else if (b < 0) b = 0;\n\n  var g = (num & 0x0000FF) + amt;\n\n  if (g > 255) g = 255;else if (g < 0) g = 0;\n\n  return (usePound ? \"#\" : \"\") + (g | b << 8 | r << 16).toString(16);\n}\n\nvar renderActiveShape = function renderActiveShape(props) {\n  var RADIAN = Math.PI / 180;\n  var cx = props.cx,\n      cy = props.cy,\n      midAngle = props.midAngle,\n      innerRadius = props.innerRadius,\n      outerRadius = props.outerRadius,\n      startAngle = props.startAngle,\n      endAngle = props.endAngle,\n      fill = props.fill,\n      payload = props.payload,\n      percent = props.percent,\n      value = props.value;\n\n  var sin = Math.sin(-RADIAN * midAngle);\n  var cos = Math.cos(-RADIAN * midAngle);\n  var sx = cx + (outerRadius + 10) * cos;\n  var sy = cy + (outerRadius + 10) * sin;\n  var mx = cx + (outerRadius + 30) * cos;\n  var my = cy + (outerRadius + 30) * sin;\n  var ex = mx + (cos >= 0 ? 1 : -1) * 22;\n  var ey = my;\n  var textAnchor = cos >= 0 ? 'start' : 'end';\n\n  return _react2.default.createElement(\n    'g',\n    null,\n    _react2.default.createElement(\n      'text',\n      { x: cx, y: cy, dy: 8, textAnchor: 'middle', fill: fill },\n      payload.name\n    ),\n    _react2.default.createElement(_recharts.Sector, {\n      cx: cx,\n      cy: cy,\n      innerRadius: innerRadius,\n      outerRadius: outerRadius,\n      startAngle: startAngle,\n      endAngle: endAngle,\n      fill: fill\n    }),\n    _react2.default.createElement(_recharts.Sector, {\n      cx: cx,\n      cy: cy,\n      startAngle: startAngle,\n      endAngle: endAngle,\n      innerRadius: outerRadius + 6,\n      outerRadius: outerRadius + 10,\n      fill: fill\n    }),\n    _react2.default.createElement('path', { d: 'M' + sx + ',' + sy + 'L' + mx + ',' + my + 'L' + ex + ',' + ey, stroke: fill, fill: 'none' }),\n    _react2.default.createElement('circle', { cx: ex, cy: ey, r: 2, fill: fill, stroke: 'none' }),\n    _react2.default.createElement(\n      'text',\n      { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: '#333' },\n      'PV ' + value\n    ),\n    _react2.default.createElement(\n      'text',\n      { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: '#999' },\n      '(Rate ' + (percent * 100).toFixed(2) + '%)'\n    )\n  );\n};\n\nvar _default = PollChart;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(COLORS, 'COLORS', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(PollChart, 'PollChart', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(getRandomColor, 'getRandomColor', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(LightenDarkenColor, 'LightenDarkenColor', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(renderActiveShape, 'renderActiveShape', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcz82NTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZWMsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlY2hhcnRzID0gcmVxdWlyZSgncmVjaGFydHMnKTtcblxudmFyIF9tb2J4UmVhY3QgPSByZXF1aXJlKCdtb2J4LXJlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vaW1wb3J0IHtpbnRyb3NwZWN0fSBmcm9tICdwYXRjaC1yZWFjdC1wcm9wdHlwZXMtYWRkLWludHJvc3BlY3Rpb24nXG4vL2NvbnN0IERvbnV0Q2hhcnQgPSByZXF1aXJlKCdyZWFjdC1kb251dC1jaGFydCcpO1xuXG52YXIgQ09MT1JTID0gWycjMDA4OEZFJywgJyMwMEM0OUYnLCAnI0ZGODA0MiddO1xuXG52YXIgUG9sbENoYXJ0ID0gKF9kZWMgPSAoMCwgX21vYnhSZWFjdC5pbmplY3QpKFwiVmlld1N0b3JlXCIsIFwiQXBpU3RvcmVcIiksIF9kZWMoX2NsYXNzID0gKDAsIF9tb2J4UmVhY3Qub2JzZXJ2ZXIpKF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb2xsQ2hhcnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvbGxDaGFydChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2xsQ2hhcnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvbGxDaGFydC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvbGxDaGFydCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogLTFcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb2xsQ2hhcnQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiSSB3aWxsIG1vdW50IVwiKVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgLy8gbmV4dFByb3BzLlZpZXdTdG9yZS5zZXRQb2xsVmlldygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5BcGlTdG9yZS52b3RlZC5nZXQoKSkge1xuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLnByb3BzLlZpZXdTdG9yZTtcbiAgICAgICAgdmFyIHBvbGwgPSBzdG9yZS5nZXRQcm9wZXJ0eShcImN1cnJlbnRQb2xsXCIpO1xuICAgICAgICB2YXIgY29sb3JNYXAgPSBzdG9yZS5nZXRQcm9wZXJ0eShcImNvbG9yTWFwXCIpO1xuICAgICAgICB2YXIgb3B0cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocG9sbC5vcHRpb25zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuICAgICAgICBvcHRzLmZvckVhY2goZnVuY3Rpb24gKGVsLCBpbmQpIHtcbiAgICAgICAgICBlbC5pZCA9IGluZDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vY29uc29sZS5sb2cocG9sbClcbiAgICAgICAgdmFyIGNvbG9yUGljayA9IGZ1bmN0aW9uIGNvbG9yUGljayhpbmQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yZS5hY3RpdmVPcHRpb25JbmRleClcbiAgICAgICAgICB2YXIgY29sb3IgPSBjb2xvck1hcFtpbmRdO1xuICAgICAgICAgIGlmIChzdG9yZS5hY3RpdmVPcHRpb25JbmRleCA9PSBpbmQpIHtcbiAgICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNClcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9O1xuICAgICAgICAvL2xldCB1cGRhdGVyID0gdGhpcy5wcm9wcy5WaWV3U3RvcmUudXBkYXRlci5nZXQoKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICAgIHZhciB3aWR0aCA9IDA7XG4gICAgICAgIHZhciBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICBoZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgIHdpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIC8vICAgPHRleHQgc3R5bGUgPSB7eydmb250LXNpemUnOiAnNDBweCd9fSBjbGFzc05hbWUgPSBcImNob3Nlbi1zZWN0b3JcIiB4PXtlLmN4fSB5PXtlLmN5IC0gZS5vdXRlclJhZGl1cyAtIDEwfSBkeT17OH0gdGV4dEFuY2hvcj1cIm1pZGRsZVwiIGZpbGw9e1wid2hpdGVcIn0+e2UucGF5bG9hZC5uYW1lfTwvdGV4dD5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnZmxleC1pdGVtJyB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlY2hhcnRzLlBpZUNoYXJ0LFxuICAgICAgICAgICAgeyB3aWR0aDogd2lkdGggKiAwLjk5LCBoZWlnaHQ6IGhlaWdodCAqIDAuOTkgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfcmVjaGFydHMuUGllLFxuICAgICAgICAgICAgICB7IGRhdGE6IG9wdHMsIGRhdGFLZXk6ICd2b3RlcycsIG5hbWVLZXk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICBjeDogJzUwJScsIGN5OiAnNTAlJywgaW5uZXJSYWRpdXM6IGhlaWdodCAqIDAuMjgsIG91dGVyUmFkaXVzOiBoZWlnaHQgKiAwLjQsIGZpbGw6ICcjODJjYTlkJyxcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlcjogZnVuY3Rpb24gb25Nb3VzZU92ZXIoZSkge1xuICAgICAgICAgICAgICAgICAgc3RvcmUuYWN0aXZlT3B0aW9uSW5kZXguc2V0KGUucGF5bG9hZC5pZCk7Y29uc29sZS5sb2coc3RvcmUuYWN0aXZlT3B0aW9uSW5kZXguZ2V0KCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5jaG9zZW5PcHRpb25JbmRleC5zZXQoZS5wYXlsb2FkLmlkKTtcbiAgICAgICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5BcGlTdG9yZS5uZXdPcHRpb24uc2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZSkgey8qc3RvcmUuYWN0aXZlT3B0aW9uSW5kZXguc2V0KC0xKTsqL30sXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IHN0b3JlLmFjdGl2ZU9wdGlvbkluZGV4LmdldCgpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVNoYXBlOiBmdW5jdGlvbiBhY3RpdmVTaGFwZShlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hvc2VuLXNlY3RvcicsIHg6IGUuY3gsIHk6IGUuY3ksIGR5OiA4LCB0ZXh0QW5jaG9yOiAnbWlkZGxlJywgZmlsbDogXCJ3aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgKGUucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWNoYXJ0cy5TZWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdvcHRpb24tY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgY3g6IGUuY3gsXG4gICAgICAgICAgICAgICAgICAgICAgY3k6IGUuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogZS5zdGFydEFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlOiBlLmVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiBoZWlnaHQgKiAwLjI4LFxuICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzOiBoZWlnaHQgKiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnI0ZGNTk2MCcsICdzdHJva2Utd2lkdGgnOiA1LFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IGUucGF5bG9hZC5maWxsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgb3B0cy5tYXAoZnVuY3Rpb24gKGVudHJ5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVjaGFydHMuQ2VsbCwgeyBjbGFzc05hbWU6ICdvcHRpb24tY2VsbCcsIGZpbGw6IGNvbG9yUGljayhpbmRleCksIHN0cm9rZTogJ2JsYWNrJyB9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLkFwaVN0b3JlLnZvdGVkLnNldChmYWxzZSk7cmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBvbGxDaGFydDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCkpIHx8IF9jbGFzcykgfHwgX2NsYXNzKTtcblxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcbiAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gIHZhciBjb2xvciA9ICcjJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gIH1cbiAgcmV0dXJuIGNvbG9yO1xufVxuXG5mdW5jdGlvbiBMaWdodGVuRGFya2VuQ29sb3IoY29sLCBhbXQpIHtcblxuICB2YXIgdXNlUG91bmQgPSBmYWxzZTtcblxuICBpZiAoY29sWzBdID09IFwiI1wiKSB7XG4gICAgY29sID0gY29sLnNsaWNlKDEpO1xuICAgIHVzZVBvdW5kID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBudW0gPSBwYXJzZUludChjb2wsIDE2KTtcblxuICB2YXIgciA9IChudW0gPj4gMTYpICsgYW10O1xuXG4gIGlmIChyID4gMjU1KSByID0gMjU1O2Vsc2UgaWYgKHIgPCAwKSByID0gMDtcblxuICB2YXIgYiA9IChudW0gPj4gOCAmIDB4MDBGRikgKyBhbXQ7XG5cbiAgaWYgKGIgPiAyNTUpIGIgPSAyNTU7ZWxzZSBpZiAoYiA8IDApIGIgPSAwO1xuXG4gIHZhciBnID0gKG51bSAmIDB4MDAwMEZGKSArIGFtdDtcblxuICBpZiAoZyA+IDI1NSkgZyA9IDI1NTtlbHNlIGlmIChnIDwgMCkgZyA9IDA7XG5cbiAgcmV0dXJuICh1c2VQb3VuZCA/IFwiI1wiIDogXCJcIikgKyAoZyB8IGIgPDwgOCB8IHIgPDwgMTYpLnRvU3RyaW5nKDE2KTtcbn1cblxudmFyIHJlbmRlckFjdGl2ZVNoYXBlID0gZnVuY3Rpb24gcmVuZGVyQWN0aXZlU2hhcGUocHJvcHMpIHtcbiAgdmFyIFJBRElBTiA9IE1hdGguUEkgLyAxODA7XG4gIHZhciBjeCA9IHByb3BzLmN4LFxuICAgICAgY3kgPSBwcm9wcy5jeSxcbiAgICAgIG1pZEFuZ2xlID0gcHJvcHMubWlkQW5nbGUsXG4gICAgICBpbm5lclJhZGl1cyA9IHByb3BzLmlubmVyUmFkaXVzLFxuICAgICAgb3V0ZXJSYWRpdXMgPSBwcm9wcy5vdXRlclJhZGl1cyxcbiAgICAgIHN0YXJ0QW5nbGUgPSBwcm9wcy5zdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUgPSBwcm9wcy5lbmRBbmdsZSxcbiAgICAgIGZpbGwgPSBwcm9wcy5maWxsLFxuICAgICAgcGF5bG9hZCA9IHByb3BzLnBheWxvYWQsXG4gICAgICBwZXJjZW50ID0gcHJvcHMucGVyY2VudCxcbiAgICAgIHZhbHVlID0gcHJvcHMudmFsdWU7XG5cbiAgdmFyIHNpbiA9IE1hdGguc2luKC1SQURJQU4gKiBtaWRBbmdsZSk7XG4gIHZhciBjb3MgPSBNYXRoLmNvcygtUkFESUFOICogbWlkQW5nbGUpO1xuICB2YXIgc3ggPSBjeCArIChvdXRlclJhZGl1cyArIDEwKSAqIGNvcztcbiAgdmFyIHN5ID0gY3kgKyAob3V0ZXJSYWRpdXMgKyAxMCkgKiBzaW47XG4gIHZhciBteCA9IGN4ICsgKG91dGVyUmFkaXVzICsgMzApICogY29zO1xuICB2YXIgbXkgPSBjeSArIChvdXRlclJhZGl1cyArIDMwKSAqIHNpbjtcbiAgdmFyIGV4ID0gbXggKyAoY29zID49IDAgPyAxIDogLTEpICogMjI7XG4gIHZhciBleSA9IG15O1xuICB2YXIgdGV4dEFuY2hvciA9IGNvcyA+PSAwID8gJ3N0YXJ0JyA6ICdlbmQnO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICd0ZXh0JyxcbiAgICAgIHsgeDogY3gsIHk6IGN5LCBkeTogOCwgdGV4dEFuY2hvcjogJ21pZGRsZScsIGZpbGw6IGZpbGwgfSxcbiAgICAgIHBheWxvYWQubmFtZVxuICAgICksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlY2hhcnRzLlNlY3Rvciwge1xuICAgICAgY3g6IGN4LFxuICAgICAgY3k6IGN5LFxuICAgICAgaW5uZXJSYWRpdXM6IGlubmVyUmFkaXVzLFxuICAgICAgb3V0ZXJSYWRpdXM6IG91dGVyUmFkaXVzLFxuICAgICAgc3RhcnRBbmdsZTogc3RhcnRBbmdsZSxcbiAgICAgIGVuZEFuZ2xlOiBlbmRBbmdsZSxcbiAgICAgIGZpbGw6IGZpbGxcbiAgICB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVjaGFydHMuU2VjdG9yLCB7XG4gICAgICBjeDogY3gsXG4gICAgICBjeTogY3ksXG4gICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgaW5uZXJSYWRpdXM6IG91dGVyUmFkaXVzICsgNixcbiAgICAgIG91dGVyUmFkaXVzOiBvdXRlclJhZGl1cyArIDEwLFxuICAgICAgZmlsbDogZmlsbFxuICAgIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTScgKyBzeCArICcsJyArIHN5ICsgJ0wnICsgbXggKyAnLCcgKyBteSArICdMJyArIGV4ICsgJywnICsgZXksIHN0cm9rZTogZmlsbCwgZmlsbDogJ25vbmUnIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdjaXJjbGUnLCB7IGN4OiBleCwgY3k6IGV5LCByOiAyLCBmaWxsOiBmaWxsLCBzdHJva2U6ICdub25lJyB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICd0ZXh0JyxcbiAgICAgIHsgeDogZXggKyAoY29zID49IDAgPyAxIDogLTEpICogMTIsIHk6IGV5LCB0ZXh0QW5jaG9yOiB0ZXh0QW5jaG9yLCBmaWxsOiAnIzMzMycgfSxcbiAgICAgICdQViAnICsgdmFsdWVcbiAgICApLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RleHQnLFxuICAgICAgeyB4OiBleCArIChjb3MgPj0gMCA/IDEgOiAtMSkgKiAxMiwgeTogZXksIGR5OiAxOCwgdGV4dEFuY2hvcjogdGV4dEFuY2hvciwgZmlsbDogJyM5OTknIH0sXG4gICAgICAnKFJhdGUgJyArIChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpICsgJyUpJ1xuICAgIClcbiAgKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFBvbGxDaGFydDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoQ09MT1JTLCAnQ09MT1JTJywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9ibG9ja3MvUG9sbENoYXJ0LmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoUG9sbENoYXJ0LCAnUG9sbENoYXJ0JywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9ibG9ja3MvUG9sbENoYXJ0LmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoZ2V0UmFuZG9tQ29sb3IsICdnZXRSYW5kb21Db2xvcicsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcycpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKExpZ2h0ZW5EYXJrZW5Db2xvciwgJ0xpZ2h0ZW5EYXJrZW5Db2xvcicsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcycpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKHJlbmRlckFjdGl2ZVNoYXBlLCAncmVuZGVyQWN0aXZlU2hhcGUnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsQ2hhcnQuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsQ2hhcnQuanMnKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qc1xuLy8gbW9kdWxlIGlkID0gNDA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///404\n");

/***/ })

})