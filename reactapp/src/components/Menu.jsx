import React ,{Component}from 'react'
import { add as addition } from './utility'
import style from "../css/Menu.module.css"
// function Menu() {
//     console.log(addition(3,4))
//   return (
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         <li>Sports</li>
//         <li>Entertainment</li>
//         <li>Polititcs</li>

//       </ul>
//     </div>
//   )
// }

// export default Menu

class Menu extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            age:0,
            name:''
        }

    }
    componentDidMount(){
        console.log("component mounded")

        // data to be recieved form backend
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count==1){
            return false
        }
        console.log("should component update")
        return true
    }

    componentDidUpdate(){
        console.log("component update")
        // comes after shouldcomponentupdate
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>Polititcs</li>
                    <li>World</li>
                </ul>
                <h2>{this.state.count}</h2>
                {/* <button style={{backgroundColor:"blue",color:"white", width:"100px",height:"30px"}} onClick={this.handleIncrement} class="btn">Increment</button> */}
                <button onClick={this.handleIncrement} class="styles.btn">Increment</button>
            </div>
        )
    }
}

export default Menu