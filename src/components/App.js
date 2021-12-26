import React,{Component}from "react";
import Header  from './Header'
import Countries from './Countries'

class App extends Component {
   render(){
       return (
         <div className="container">
             <Header/>
             <Countries/>
         </div>

       )    
   }

}
export default App