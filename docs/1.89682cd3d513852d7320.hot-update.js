webpackHotUpdate(1,{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(405);\n\nvar _mobxReact = __webpack_require__(22);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import {introspect} from 'patch-react-proptypes-add-introspection'\n//const DonutChart = require('react-donut-chart');\n\nvar COLORS = ['#0088FE', '#00C49F', '#FF8042'];\n\nvar PollChart = (_dec = (0, _mobxReact.inject)(\"ViewStore\", \"ApiStore\"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(PollChart, _React$Component);\n\n  function PollChart(props) {\n    _classCallCheck(this, PollChart);\n\n    var _this = _possibleConstructorReturn(this, (PollChart.__proto__ || Object.getPrototypeOf(PollChart)).call(this, props));\n\n    _this.resize = function () {\n      return _this.__resize__REACT_HOT_LOADER__.apply(_this, arguments);\n    };\n\n    _this.state = {\n      active: -1\n    };\n    return _this;\n  }\n\n  _createClass(PollChart, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n\n      //console.log(\"I will mount!\")\n    }\n  }, {\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(nextProps) {\n      // nextProps.ViewStore.setPollView();\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.__resize__REACT_HOT_LOADER__.apply(this, arguments);\n    }\n  }, {\n    key: '__resize__REACT_HOT_LOADER__',\n    value: function __resize__REACT_HOT_LOADER__() {\n      return this.forceUpdate();\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      window.addEventListener('resize', this.resize);\n      this.resize();\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      window.removeEventListener('resize', this.resize);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (!this.props.ApiStore.voted.get()) {\n        var store = this.props.ViewStore;\n        var poll = store.getProperty(\"currentPoll\");\n        var colorMap = store.getProperty(\"colorMap\");\n        var opts = [].concat(_toConsumableArray(poll.options));\n        console.log(opts);\n        opts.forEach(function (el, ind) {\n          el.id = ind;\n        });\n        //console.log(poll)\n        var colorPick = function colorPick(ind) {\n          // console.log(store.activeOptionIndex)\n          var color = colorMap[ind];\n          if (store.activeOptionIndex == ind) {\n            color = \"rgba(0, 0, 0, 0.4)\";\n            console.log(color);\n          }\n          return color;\n        };\n        //let updater = this.props.ViewStore.updater.get();\n        var height = 0;\n        var width = 0;\n        var parent = document.getElementById('chart-container');\n        if (parent) {\n          height = parent.clientHeight;\n          width = parent.clientWidth;\n        }\n        //   <text style = {{'font-size': '40px'}} className = \"chosen-sector\" x={e.cx} y={e.cy - e.outerRadius - 10} dy={8} textAnchor=\"middle\" fill={\"white\"}>{e.payload.name}</text>\n        return _react2.default.createElement(\n          'div',\n          { className: 'flex-item' },\n          _react2.default.createElement(\n            _recharts.PieChart,\n            { width: width * 0.99, height: height * 0.99 },\n            _react2.default.createElement(\n              _recharts.Pie,\n              { data: opts, dataKey: 'votes', nameKey: 'name',\n                cx: '50%', cy: '50%', innerRadius: height * 0.28, outerRadius: height * 0.4, fill: '#82ca9d',\n                onMouseOver: function onMouseOver(e) {\n                  store.activeOptionIndex.set(e.payload.id);console.log(store.activeOptionIndex.get());\n                },\n                onClick: function onClick(e) {\n                  store.chosenOptionIndex.set(e.payload.id);\n                },\n                onMouseLeave: function onMouseLeave(e) {/*store.activeOptionIndex.set(-1);*/},\n                activeIndex: store.activeOptionIndex.get(),\n                activeShape: function activeShape(e) {\n                  return _react2.default.createElement(\n                    'g',\n                    null,\n                    _react2.default.createElement(\n                      'text',\n                      { className: 'chosen-sector', x: e.cx, y: e.cy, dy: 8, textAnchor: 'middle', fill: \"white\" },\n                      (e.percent * 100).toFixed(2) + \"%\"\n                    ),\n                    _react2.default.createElement(_recharts.Sector, {\n                      className: 'option-cell',\n                      cx: e.cx,\n                      cy: e.cy,\n                      startAngle: e.startAngle,\n                      endAngle: e.endAngle,\n                      innerRadius: height * 0.28,\n                      outerRadius: height * 0.4,\n                      stroke: 'black', 'stroke-width': 3,\n                      fill: e.payload.fill\n                    })\n                  );\n                } },\n              opts.map(function (entry, index) {\n                return _react2.default.createElement(_recharts.Cell, { className: 'option-cell', fill: colorPick(index), stroke: 'red' });\n              })\n            )\n          )\n        );\n      } else {\n        this.props.ApiStore.voted.set(false);return null;\n      }\n    }\n  }]);\n\n  return PollChart;\n}(_react2.default.Component)) || _class) || _class);\n\n\nfunction getRandomColor() {\n  var letters = '0123456789ABCDEF';\n  var color = '#';\n  for (var i = 0; i < 6; i++) {\n    color += letters[Math.floor(Math.random() * 16)];\n  }\n  return color;\n}\n\nfunction LightenDarkenColor(col, amt) {\n\n  var usePound = false;\n\n  if (col[0] == \"#\") {\n    col = col.slice(1);\n    usePound = true;\n  }\n\n  var num = parseInt(col, 16);\n\n  var r = (num >> 16) + amt;\n\n  if (r > 255) r = 255;else if (r < 0) r = 0;\n\n  var b = (num >> 8 & 0x00FF) + amt;\n\n  if (b > 255) b = 255;else if (b < 0) b = 0;\n\n  var g = (num & 0x0000FF) + amt;\n\n  if (g > 255) g = 255;else if (g < 0) g = 0;\n\n  return (usePound ? \"#\" : \"\") + (g | b << 8 | r << 16).toString(16);\n}\n\nvar renderActiveShape = function renderActiveShape(props) {\n  var RADIAN = Math.PI / 180;\n  var cx = props.cx,\n      cy = props.cy,\n      midAngle = props.midAngle,\n      innerRadius = props.innerRadius,\n      outerRadius = props.outerRadius,\n      startAngle = props.startAngle,\n      endAngle = props.endAngle,\n      fill = props.fill,\n      payload = props.payload,\n      percent = props.percent,\n      value = props.value;\n\n  var sin = Math.sin(-RADIAN * midAngle);\n  var cos = Math.cos(-RADIAN * midAngle);\n  var sx = cx + (outerRadius + 10) * cos;\n  var sy = cy + (outerRadius + 10) * sin;\n  var mx = cx + (outerRadius + 30) * cos;\n  var my = cy + (outerRadius + 30) * sin;\n  var ex = mx + (cos >= 0 ? 1 : -1) * 22;\n  var ey = my;\n  var textAnchor = cos >= 0 ? 'start' : 'end';\n\n  return _react2.default.createElement(\n    'g',\n    null,\n    _react2.default.createElement(\n      'text',\n      { x: cx, y: cy, dy: 8, textAnchor: 'middle', fill: fill },\n      payload.name\n    ),\n    _react2.default.createElement(_recharts.Sector, {\n      cx: cx,\n      cy: cy,\n      innerRadius: innerRadius,\n      outerRadius: outerRadius,\n      startAngle: startAngle,\n      endAngle: endAngle,\n      fill: fill\n    }),\n    _react2.default.createElement(_recharts.Sector, {\n      cx: cx,\n      cy: cy,\n      startAngle: startAngle,\n      endAngle: endAngle,\n      innerRadius: outerRadius + 6,\n      outerRadius: outerRadius + 10,\n      fill: fill\n    }),\n    _react2.default.createElement('path', { d: 'M' + sx + ',' + sy + 'L' + mx + ',' + my + 'L' + ex + ',' + ey, stroke: fill, fill: 'none' }),\n    _react2.default.createElement('circle', { cx: ex, cy: ey, r: 2, fill: fill, stroke: 'none' }),\n    _react2.default.createElement(\n      'text',\n      { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, textAnchor: textAnchor, fill: '#333' },\n      'PV ' + value\n    ),\n    _react2.default.createElement(\n      'text',\n      { x: ex + (cos >= 0 ? 1 : -1) * 12, y: ey, dy: 18, textAnchor: textAnchor, fill: '#999' },\n      '(Rate ' + (percent * 100).toFixed(2) + '%)'\n    )\n  );\n};\n\nvar _default = PollChart;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(COLORS, 'COLORS', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(PollChart, 'PollChart', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(getRandomColor, 'getRandomColor', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(LightenDarkenColor, 'LightenDarkenColor', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(renderActiveShape, 'renderActiveShape', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/home/ubuntu/workspace/react-webpack-boilerplate/app/components/blocks/PollChart.js');\n}();\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcz82NTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZWMsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlY2hhcnRzID0gcmVxdWlyZSgncmVjaGFydHMnKTtcblxudmFyIF9tb2J4UmVhY3QgPSByZXF1aXJlKCdtb2J4LXJlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vaW1wb3J0IHtpbnRyb3NwZWN0fSBmcm9tICdwYXRjaC1yZWFjdC1wcm9wdHlwZXMtYWRkLWludHJvc3BlY3Rpb24nXG4vL2NvbnN0IERvbnV0Q2hhcnQgPSByZXF1aXJlKCdyZWFjdC1kb251dC1jaGFydCcpO1xuXG52YXIgQ09MT1JTID0gWycjMDA4OEZFJywgJyMwMEM0OUYnLCAnI0ZGODA0MiddO1xuXG52YXIgUG9sbENoYXJ0ID0gKF9kZWMgPSAoMCwgX21vYnhSZWFjdC5pbmplY3QpKFwiVmlld1N0b3JlXCIsIFwiQXBpU3RvcmVcIiksIF9kZWMoX2NsYXNzID0gKDAsIF9tb2J4UmVhY3Qub2JzZXJ2ZXIpKF9jbGFzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb2xsQ2hhcnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvbGxDaGFydChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2xsQ2hhcnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvbGxDaGFydC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvbGxDaGFydCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogLTFcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb2xsQ2hhcnQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKFwiSSB3aWxsIG1vdW50IVwiKVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgLy8gbmV4dFByb3BzLlZpZXdTdG9yZS5zZXRQb2xsVmlldygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19yZXNpemVfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19fcmVzaXplX19SRUFDVF9IT1RfTE9BREVSX18nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3Jlc2l6ZV9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplKTtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLkFwaVN0b3JlLnZvdGVkLmdldCgpKSB7XG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMucHJvcHMuVmlld1N0b3JlO1xuICAgICAgICB2YXIgcG9sbCA9IHN0b3JlLmdldFByb3BlcnR5KFwiY3VycmVudFBvbGxcIik7XG4gICAgICAgIHZhciBjb2xvck1hcCA9IHN0b3JlLmdldFByb3BlcnR5KFwiY29sb3JNYXBcIik7XG4gICAgICAgIHZhciBvcHRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShwb2xsLm9wdGlvbnMpKTtcbiAgICAgICAgY29uc29sZS5sb2cob3B0cyk7XG4gICAgICAgIG9wdHMuZm9yRWFjaChmdW5jdGlvbiAoZWwsIGluZCkge1xuICAgICAgICAgIGVsLmlkID0gaW5kO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwb2xsKVxuICAgICAgICB2YXIgY29sb3JQaWNrID0gZnVuY3Rpb24gY29sb3JQaWNrKGluZCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JlLmFjdGl2ZU9wdGlvbkluZGV4KVxuICAgICAgICAgIHZhciBjb2xvciA9IGNvbG9yTWFwW2luZF07XG4gICAgICAgICAgaWYgKHN0b3JlLmFjdGl2ZU9wdGlvbkluZGV4ID09IGluZCkge1xuICAgICAgICAgICAgY29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40KVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICAgIH07XG4gICAgICAgIC8vbGV0IHVwZGF0ZXIgPSB0aGlzLnByb3BzLlZpZXdTdG9yZS51cGRhdGVyLmdldCgpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIHdpZHRoID0gMDtcbiAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydC1jb250YWluZXInKTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIGhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgd2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gICA8dGV4dCBzdHlsZSA9IHt7J2ZvbnQtc2l6ZSc6ICc0MHB4J319IGNsYXNzTmFtZSA9IFwiY2hvc2VuLXNlY3RvclwiIHg9e2UuY3h9IHk9e2UuY3kgLSBlLm91dGVyUmFkaXVzIC0gMTB9IGR5PXs4fSB0ZXh0QW5jaG9yPVwibWlkZGxlXCIgZmlsbD17XCJ3aGl0ZVwifT57ZS5wYXlsb2FkLm5hbWV9PC90ZXh0PlxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICdmbGV4LWl0ZW0nIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVjaGFydHMuUGllQ2hhcnQsXG4gICAgICAgICAgICB7IHdpZHRoOiB3aWR0aCAqIDAuOTksIGhlaWdodDogaGVpZ2h0ICogMC45OSB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9yZWNoYXJ0cy5QaWUsXG4gICAgICAgICAgICAgIHsgZGF0YTogb3B0cywgZGF0YUtleTogJ3ZvdGVzJywgbmFtZUtleTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIGN4OiAnNTAlJywgY3k6ICc1MCUnLCBpbm5lclJhZGl1czogaGVpZ2h0ICogMC4yOCwgb3V0ZXJSYWRpdXM6IGhlaWdodCAqIDAuNCwgZmlsbDogJyM4MmNhOWQnLFxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyOiBmdW5jdGlvbiBvbk1vdXNlT3ZlcihlKSB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5hY3RpdmVPcHRpb25JbmRleC5zZXQoZS5wYXlsb2FkLmlkKTtjb25zb2xlLmxvZyhzdG9yZS5hY3RpdmVPcHRpb25JbmRleC5nZXQoKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlLmNob3Nlbk9wdGlvbkluZGV4LnNldChlLnBheWxvYWQuaWQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZSkgey8qc3RvcmUuYWN0aXZlT3B0aW9uSW5kZXguc2V0KC0xKTsqL30sXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IHN0b3JlLmFjdGl2ZU9wdGlvbkluZGV4LmdldCgpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVNoYXBlOiBmdW5jdGlvbiBhY3RpdmVTaGFwZShlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY2hvc2VuLXNlY3RvcicsIHg6IGUuY3gsIHk6IGUuY3ksIGR5OiA4LCB0ZXh0QW5jaG9yOiAnbWlkZGxlJywgZmlsbDogXCJ3aGl0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgKGUucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWNoYXJ0cy5TZWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdvcHRpb24tY2VsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgY3g6IGUuY3gsXG4gICAgICAgICAgICAgICAgICAgICAgY3k6IGUuY3ksXG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogZS5zdGFydEFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlOiBlLmVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiBoZWlnaHQgKiAwLjI4LFxuICAgICAgICAgICAgICAgICAgICAgIG91dGVyUmFkaXVzOiBoZWlnaHQgKiAwLjQsXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnYmxhY2snLCAnc3Ryb2tlLXdpZHRoJzogMyxcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsOiBlLnBheWxvYWQuZmlsbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgIG9wdHMubWFwKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlY2hhcnRzLkNlbGwsIHsgY2xhc3NOYW1lOiAnb3B0aW9uLWNlbGwnLCBmaWxsOiBjb2xvclBpY2soaW5kZXgpLCBzdHJva2U6ICdyZWQnIH0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuQXBpU3RvcmUudm90ZWQuc2V0KGZhbHNlKTtyZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9sbENoYXJ0O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSkgfHwgX2NsYXNzKSB8fCBfY2xhc3MpO1xuXG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICB2YXIgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJztcbiAgdmFyIGNvbG9yID0gJyMnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgfVxuICByZXR1cm4gY29sb3I7XG59XG5cbmZ1bmN0aW9uIExpZ2h0ZW5EYXJrZW5Db2xvcihjb2wsIGFtdCkge1xuXG4gIHZhciB1c2VQb3VuZCA9IGZhbHNlO1xuXG4gIGlmIChjb2xbMF0gPT0gXCIjXCIpIHtcbiAgICBjb2wgPSBjb2wuc2xpY2UoMSk7XG4gICAgdXNlUG91bmQgPSB0cnVlO1xuICB9XG5cbiAgdmFyIG51bSA9IHBhcnNlSW50KGNvbCwgMTYpO1xuXG4gIHZhciByID0gKG51bSA+PiAxNikgKyBhbXQ7XG5cbiAgaWYgKHIgPiAyNTUpIHIgPSAyNTU7ZWxzZSBpZiAociA8IDApIHIgPSAwO1xuXG4gIHZhciBiID0gKG51bSA+PiA4ICYgMHgwMEZGKSArIGFtdDtcblxuICBpZiAoYiA+IDI1NSkgYiA9IDI1NTtlbHNlIGlmIChiIDwgMCkgYiA9IDA7XG5cbiAgdmFyIGcgPSAobnVtICYgMHgwMDAwRkYpICsgYW10O1xuXG4gIGlmIChnID4gMjU1KSBnID0gMjU1O2Vsc2UgaWYgKGcgPCAwKSBnID0gMDtcblxuICByZXR1cm4gKHVzZVBvdW5kID8gXCIjXCIgOiBcIlwiKSArIChnIHwgYiA8PCA4IHwgciA8PCAxNikudG9TdHJpbmcoMTYpO1xufVxuXG52YXIgcmVuZGVyQWN0aXZlU2hhcGUgPSBmdW5jdGlvbiByZW5kZXJBY3RpdmVTaGFwZShwcm9wcykge1xuICB2YXIgUkFESUFOID0gTWF0aC5QSSAvIDE4MDtcbiAgdmFyIGN4ID0gcHJvcHMuY3gsXG4gICAgICBjeSA9IHByb3BzLmN5LFxuICAgICAgbWlkQW5nbGUgPSBwcm9wcy5taWRBbmdsZSxcbiAgICAgIGlubmVyUmFkaXVzID0gcHJvcHMuaW5uZXJSYWRpdXMsXG4gICAgICBvdXRlclJhZGl1cyA9IHByb3BzLm91dGVyUmFkaXVzLFxuICAgICAgc3RhcnRBbmdsZSA9IHByb3BzLnN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSA9IHByb3BzLmVuZEFuZ2xlLFxuICAgICAgZmlsbCA9IHByb3BzLmZpbGwsXG4gICAgICBwYXlsb2FkID0gcHJvcHMucGF5bG9hZCxcbiAgICAgIHBlcmNlbnQgPSBwcm9wcy5wZXJjZW50LFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICB2YXIgc2luID0gTWF0aC5zaW4oLVJBRElBTiAqIG1pZEFuZ2xlKTtcbiAgdmFyIGNvcyA9IE1hdGguY29zKC1SQURJQU4gKiBtaWRBbmdsZSk7XG4gIHZhciBzeCA9IGN4ICsgKG91dGVyUmFkaXVzICsgMTApICogY29zO1xuICB2YXIgc3kgPSBjeSArIChvdXRlclJhZGl1cyArIDEwKSAqIHNpbjtcbiAgdmFyIG14ID0gY3ggKyAob3V0ZXJSYWRpdXMgKyAzMCkgKiBjb3M7XG4gIHZhciBteSA9IGN5ICsgKG91dGVyUmFkaXVzICsgMzApICogc2luO1xuICB2YXIgZXggPSBteCArIChjb3MgPj0gMCA/IDEgOiAtMSkgKiAyMjtcbiAgdmFyIGV5ID0gbXk7XG4gIHZhciB0ZXh0QW5jaG9yID0gY29zID49IDAgPyAnc3RhcnQnIDogJ2VuZCc7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdnJyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RleHQnLFxuICAgICAgeyB4OiBjeCwgeTogY3ksIGR5OiA4LCB0ZXh0QW5jaG9yOiAnbWlkZGxlJywgZmlsbDogZmlsbCB9LFxuICAgICAgcGF5bG9hZC5uYW1lXG4gICAgKSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVjaGFydHMuU2VjdG9yLCB7XG4gICAgICBjeDogY3gsXG4gICAgICBjeTogY3ksXG4gICAgICBpbm5lclJhZGl1czogaW5uZXJSYWRpdXMsXG4gICAgICBvdXRlclJhZGl1czogb3V0ZXJSYWRpdXMsXG4gICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGU6IGVuZEFuZ2xlLFxuICAgICAgZmlsbDogZmlsbFxuICAgIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWNoYXJ0cy5TZWN0b3IsIHtcbiAgICAgIGN4OiBjeCxcbiAgICAgIGN5OiBjeSxcbiAgICAgIHN0YXJ0QW5nbGU6IHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZTogZW5kQW5nbGUsXG4gICAgICBpbm5lclJhZGl1czogb3V0ZXJSYWRpdXMgKyA2LFxuICAgICAgb3V0ZXJSYWRpdXM6IG91dGVyUmFkaXVzICsgMTAsXG4gICAgICBmaWxsOiBmaWxsXG4gICAgfSksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNJyArIHN4ICsgJywnICsgc3kgKyAnTCcgKyBteCArICcsJyArIG15ICsgJ0wnICsgZXggKyAnLCcgKyBleSwgc3Ryb2tlOiBmaWxsLCBmaWxsOiAnbm9uZScgfSksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2NpcmNsZScsIHsgY3g6IGV4LCBjeTogZXksIHI6IDIsIGZpbGw6IGZpbGwsIHN0cm9rZTogJ25vbmUnIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3RleHQnLFxuICAgICAgeyB4OiBleCArIChjb3MgPj0gMCA/IDEgOiAtMSkgKiAxMiwgeTogZXksIHRleHRBbmNob3I6IHRleHRBbmNob3IsIGZpbGw6ICcjMzMzJyB9LFxuICAgICAgJ1BWICcgKyB2YWx1ZVxuICAgICksXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndGV4dCcsXG4gICAgICB7IHg6IGV4ICsgKGNvcyA+PSAwID8gMSA6IC0xKSAqIDEyLCB5OiBleSwgZHk6IDE4LCB0ZXh0QW5jaG9yOiB0ZXh0QW5jaG9yLCBmaWxsOiAnIzk5OScgfSxcbiAgICAgICcoUmF0ZSAnICsgKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMikgKyAnJSknXG4gICAgKVxuICApO1xufTtcblxudmFyIF9kZWZhdWx0ID0gUG9sbENoYXJ0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG47XG5cbnZhciBfdGVtcCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihDT0xPUlMsICdDT0xPUlMnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsQ2hhcnQuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihQb2xsQ2hhcnQsICdQb2xsQ2hhcnQnLCAnL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZS9yZWFjdC13ZWJwYWNrLWJvaWxlcnBsYXRlL2FwcC9jb21wb25lbnRzL2Jsb2Nrcy9Qb2xsQ2hhcnQuanMnKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihnZXRSYW5kb21Db2xvciwgJ2dldFJhbmRvbUNvbG9yJywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9ibG9ja3MvUG9sbENoYXJ0LmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoTGlnaHRlbkRhcmtlbkNvbG9yLCAnTGlnaHRlbkRhcmtlbkNvbG9yJywgJy9ob21lL3VidW50dS93b3Jrc3BhY2UvcmVhY3Qtd2VicGFjay1ib2lsZXJwbGF0ZS9hcHAvY29tcG9uZW50cy9ibG9ja3MvUG9sbENoYXJ0LmpzJyk7XG5cbiAgX19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIocmVuZGVyQWN0aXZlU2hhcGUsICdyZW5kZXJBY3RpdmVTaGFwZScsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcycpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCAnZGVmYXVsdCcsICcvaG9tZS91YnVudHUvd29ya3NwYWNlL3JlYWN0LXdlYnBhY2stYm9pbGVycGxhdGUvYXBwL2NvbXBvbmVudHMvYmxvY2tzL1BvbGxDaGFydC5qcycpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9ibG9ja3MvUG9sbENoYXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///404\n");

/***/ })

})