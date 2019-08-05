import React, {
    Component
} from "react"
// import {
//     useStaticQuery,
//     graphql
// } from "gatsby"
// import Img from "gatsby-image"
import "./select.css";
const ResultBody = props => {

  if (props.nowSelection.length>0){
      const sels = props.nowSelection.map((sel, index) => {
        //   let thisUrl = sel.src;
        return (
            <div className="sel" key={`sel` + index} style={{"animationDelay": `${index * 10 }ms`}}>
            <img className ="sel-img" alt={sel.title} height="100%" src = {sel.src}/>

            </div>
        );
    });
    //  console.log("hav")
    //    console.log(props.selIndex);
    return sels;
    } else if (props.selIndex > -1){
        // console.log("null")
        return (
            < div className = "sel home-more" > Please stay tuned～ </div>
        );

    }else {
        // console.log(props.selIndex);
        return null
    }
}

class Select extends Component {


// constructor(props) {
//         super(props)
//         }

    render() {
              const {nowSelection,
                selIndex
              } = this.props;

              
 return ( 
       
       <ResultBody 
       nowSelection = {nowSelection}
       selIndex = {selIndex
       }
       />
           
        )
        }
        
}

export default Select