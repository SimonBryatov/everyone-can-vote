import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import {observer, inject} from 'mobx-react';
//import {introspect} from 'patch-react-proptypes-add-introspection'
//const DonutChart = require('react-donut-chart');

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

@inject("ViewStore") @observer class PollChart  extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        active: -1
    }
    }
    
    componentWillMount() {
    this.props.ViewStore.setPollView();
    }
    
    resize = () => this.forceUpdate()

componentDidMount() {
  window.addEventListener('resize', this.resize)
  this.resize();
}

componentWillUnmount() {
  window.removeEventListener('resize', this.resize)
}
    
    render() {
    let store = this.props.ViewStore;
    let poll = store.getProperty("currentPoll");
    let colorMap = store.getProperty("colorMap")
    let opts = [...poll.options];
    opts.forEach((el, ind) => {el.id = ind})
    //console.log(poll)
    let colorPick = (ind) => {
       // console.log(store.activeOptionIndex)
        let color = colorMap[ind];
        if (store.activeOptionIndex == ind) {
            color = LightenDarkenColor(color, 200);
        }
        return color;
    }
    //let updater = this.props.ViewStore.updater.get();
    let height = 0;
    let width = 0;
    let parent = document.getElementById('chart-container');
    if (parent) {height = parent.clientHeight
        width = parent.clientWidth;
    }
    //   <text style = {{'font-size': '40px'}} className = "chosen-sector" x={e.cx} y={e.cy - e.outerRadius - 10} dy={8} textAnchor="middle" fill={"white"}>{e.payload.name}</text>
    return(<div className = "flex-item">
    <PieChart width={width*0.99} height= {height*0.99}>
         <Pie data={poll.options} dataKey="val" nameKey="pollName"
         cx="50%" cy="50%" innerRadius={height*0.28} outerRadius={height*0.4} fill="#82ca9d"
         onMouseOver = {(e) => {store.activeOptionIndex.set(e.payload.id); console.log(store.activeOptionIndex.get())}}
         onClick = {(e) => {store.chosenOptionIndex.set(e.payload.id)}}
         onMouseLeave =  {(e) => {/*store.activeOptionIndex.set(-1);*/}}
         activeIndex={store.activeOptionIndex.get()}
         activeShape = {(e) => (<g>
         <text className = "chosen-sector" x={e.cx} y={e.cy} dy={8} textAnchor="middle" fill={"white"}>{(e.percent*100).toFixed(2) + "%"}</text>
            <Sector
        className = "option-cell"
        cx={e.cx}
        cy={e.cy}
        startAngle={e.startAngle}
        endAngle={e.endAngle}
        innerRadius={height*0.28}
        outerRadius={height*0.4}
        stroke = "black" stroke-width = {3}
        fill={e.payload.fill}
      />

      </g>)}>
         {
           	poll.options.map((entry, index) => 
           	<Cell className = "option-cell" fill = {colorPick(index)} stroke = "black"/>)
         }
         </Pie>
       </PieChart>
       
    
   </div>
    )
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default PollChart;
