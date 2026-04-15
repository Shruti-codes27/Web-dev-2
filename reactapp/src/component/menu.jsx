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
        console.log("Component Did Mount")
        //data to be retriewed from backend
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count===1){
        return false
        }
        console.log("Should Component Update")
        return true
    }

    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    componentwillUnmount(){
        console.log("Component will Unmount")
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
                <button className={style.btn} onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Menu