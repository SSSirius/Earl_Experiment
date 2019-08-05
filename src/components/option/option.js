import React, {
    Component
} from "react"
// import {
//     useStaticQuery,
//     graphql
// } from "gatsby"
// import Img from "gatsby-image"

import Select from "../select/select"
import "./option.css"
const OptBody = props => { 
    // super(props);
    //   const {selection} = this.state;
     
        const opts = props.optData.map((opt, index) => {
        return (
            <div className="main-text" key={index} >
                 <div className = {
                     opt.svg + " home-cate-exp " + (index === props.selIndex ? "active" : "")
                 }
                 onClick = {
                     () => props.checkSelection(index)
                 } >
                        <div className = "wk-title"> {opt.name}
                        </div>
                        {/* <div className = "btn-title"> {opt.name}
                        </div> */}
                    </div>
            </div>
        );
    });
    return opts;
}
const OptBar = props => { 
    // super(props);
    //   const {selection} = this.state;
     
        const opts = props.optData.map((opt, index) => {
        return (
            <div className={"main-text "+ (index === props.selIndex ? "active" : "")} key={"btn"+index} 
            onClick = {() => props.checkSelection(index)}>
                 <div className = "btn-title"> {opt.name}
                        </div>
            </div>
        );
    });
    return opts;
}

class Option extends Component {
   
      state = {
         opts: [{
             name:`UI`,
             svg: `home-ui`,
             items: [{
                 title: `ui01`,
                 src: require('../../img/cate01/01.png')
             }, {
                 title: `ui02`,
                 src: require('../../img/cate01/02.png')
             }, {
                 title: `ui03`,
                 src: require('../../img/cate01/03.jpg')
             }, {
                 title: `ui04`,
                 src: require('../../img/cate01/04.png')
             }, {
                 title: `ui05`,
                 src: require('../../img/cate01/12.png')
             }, {
                 title: `ui06`,
                 src: require('../../img/cate01/06.png')
             }, {
                 title: `ui07`,
                 src: require('../../img/cate01/07.png')
             },
            ]
             }, {
                 name: `XR`,
                 svg: `home-xr`,
                 items: []
             }, {
                 name: `Creative Coding`,
                 svg: `home-creative`,
                 items: []
         }],
          selection:[],
          selIndex: -1,
      };



     checkSelection = index => {

         // const {selection} = this.state;
         this.setState({
             selection: (this.state.opts[index].items === this.state.selection) ? [] : this.state.opts[index].items,
             selIndex: (this.state.selIndex === index) ? -1: index
             //  selection: this.state.opts[index].items,
         });
        //  console.log(index, this.state.selIndex);
         
     }


 render() {
      const {
          opts,
          selection,
          selIndex
      } = this.state;
        // console.log(selection);
      return (
  < div className = {
          selIndex> -1? "blog-list": "blog-list unselect"
  } >

      <div className="btnbar">
        <OptBody optData = {opts} checkSelection = {this.checkSelection} selIndex = {selIndex}/>
         </div>
         < div className = "btntabs" >
             <OptBar optData = {opts} checkSelection = {this.checkSelection} selIndex = {selIndex}/>
      </div>
        < div className = "select-result" >
         <Select nowSelection = {
                  selection} selIndex = {selIndex}
              />

           </ div>
       </div>
      )
      }

}

export default Option
