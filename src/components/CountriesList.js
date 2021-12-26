import React , {Component}  from "react";

class CountriesList extends Component {    
      render() {
         return (
             <div className="col-md-4 col-sm-6">
                 <div className="card">
                     <div className="card-header">
                         <img style ={{maxWidth:'70%'}} src= {this.props.img} alt=' altrnative text'>
                         </img>
                     </div>
                     <div className="card-body">
                         <h2>{this.props.id}</h2>
                         <h2>{this.props.name}</h2>
                         <h5>{this.props.cabital}</h5>
                         <h5>{this.props.population}</h5>
                         <h5>{this.props.region}</h5>

                     </div>
                 </div>
             </div>
         )
      }
}
export default CountriesList