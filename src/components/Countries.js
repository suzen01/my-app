import React ,{Component} from'react';
// import { Component } from "react/cjs/react.production.min";
import CountriesList from './CountriesList.js'

class Countries extends Component{

    render () {
      const ContryInfo=[
            {id:1, img:'/images/1.png', name:'Afghanstan', capital:'Kabul', population:'27.657' , region:'Asia'},
            {id:2, img:'/images/2.png', name:'American Samoa', capital:"Pago Pago", population:"46,366" , region: "Oceania"},
            {id:3, img:'/images/3.png', name:'Åland Islands', capital:"Mariehamn " , population: "28,875", region:"Europe" },
            {id:4, img:'https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3MbqlukcyjiOzp8-MOY57UxUNBGBMCHM7Q&usqp=CAU',
             name:'Albania', capital:"Tirana " , population:"28,875" , region:"Tirana " },

            {id:5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM0pv3jOMBambCEY99I461bqE--0_lz4OLA&usqp=CAU',
             name:'Algeria', capital:'Algeria' , population: "40,400", region:"Africa" },
            {id:6, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsHZ-xzlKfUGETHFpY13vCUE6rP2IrNqVjw&usqp=CAU',
             name:'Andorr', capital:"Andorra la Vella ", population:"78,014" , region:"Europe" },
            {id:7, img:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0007/8480/brand.gif?itok=e5FSLbA-',
             name:'Angola', capital:"Luanda " , population: "Luanda " , region:  "Africa"},
            {id:8, img:'/images/8.png', name:'Anguilla', capital:"The Valley ", population:"13,452", region:"Americas"},
            
      ]
      
      const country= ContryInfo.map( countri =>  <CountriesList
                                 key={countri.id}
                                 img={countri.img}
                                 name={countri.name}
                                 capital={countri.capital}
                                 population={countri.population}
                                 region={countri.region}

      />);
        return (
           <div className="row">
               {country}
           </div>
             

        )
      }
    }
    export default Countries