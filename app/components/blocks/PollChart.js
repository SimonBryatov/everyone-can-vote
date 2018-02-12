import React from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts';
import {observer, inject} from 'mobx-react';

const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

@inject("ViewStore", "ApiStore") @observer class PollChart  extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        active: -1
    }
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
         if (!this.props.ApiStore.voted.get()) {
    let store = this.props.ViewStore;
    let poll = store.getProperty("currentPoll");
    let colorMap = store.getProperty("colorMap")
    let opts = [...poll.options];

    opts.forEach((el, ind) => {el.id = ind})
    let colorPick = (ind) => {
        let color = colorMap[ind];
        if (store.activeOptionIndex == ind) {
            color = "rgba(0, 0, 0, 0.4)";
        }
        return color;
    }
    let height = 0;
    let width = 0;
    let parent = document.getElementById('chart-container');
    if (parent) {height = parent.clientHeight
        width = parent.clientWidth;
    }
    return(<div className = "flex-item">
    <PieChart width={width*0.99} height= {height*0.99}>
         <Pie data={opts} dataKey="votes" nameKey="name"
         cx="50%" cy="50%" innerRadius={height*0.28} outerRadius={height*0.4} fill="#82ca9d"
         onMouseOver = {(e) => {store.activeOptionIndex.set(e.payload.id); }}
         onClick = {(e) => {store.chosenOptionIndex.set(e.payload.id); 
         this.props.ApiStore.newOption.set("")}}
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
        stroke = "#FF5960" stroke-width = {5}
        fill={e.payload.fill}
      />

      </g>)}>
         {
           	opts.map((entry, index) => 
           	<Cell className = "option-cell" fill = {colorPick(index)} stroke = "black"/>)
         }
         </Pie>
       </PieChart>
       
    
   </div>
    )
    } else {this.props.ApiStore.voted.set(false); return null }
    } 
}

export default PollChart;
