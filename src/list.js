import React, {component }from 'react';

//this code is working but there were way more functionality..
//this code  is not connected to the whole progrm 
const firstCountry ={
 img :'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan_%281928%29.svg/180px-Flag_of_Afghanistan_%281928%29.svg.png',
 title :'Afghanstan',
 population: "27.657",
 cabital:"Kabul",
 region : "Asia",
}
const secondCountry ={
  img : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/102/flag-for-american-samoa-usas_1f3f4-e0075-e0073-e0061-e0073-e007f.png',
 title : 'American Samoa',
 population: "46,366",
 cabital: "	Pago Pago",
 region : "Oceania",
}

const thirdCountry ={
  img : 'https://www.emojimeaning.com/img/img-apple-160/1f1e6-1f1fd.png',
 title : 'Åland Islands',
 population: "28,875",
 cabital: "	Mariehamn ",
 region : "Europe",
}
const fourCountry ={
img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3MbqlukcyjiOzp8-MOY57UxUNBGBMCHM7Q&usqp=CAU',
 title : 'Albania',
 population: "28,875",
 cabital: "	Tirana ",
 region : "Europe",
}
const fiCountry ={
img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM0pv3jOMBambCEY99I461bqE--0_lz4OLA&usqp=CAU',
 title : 'Algeria',
 population: "40,400",
 cabital: "	Algeria ",
 region : "Africa",
}
const sixCountry ={
img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsHZ-xzlKfUGETHFpY13vCUE6rP2IrNqVjw&usqp=CAU',
 title : 'Andorr',
 population: "78,014",
 cabital: "	Andorra la Vella ",
 region : "Europe",
}
const sevCountry ={
img : 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0007/8480/brand.gif?itok=e5FSLbA-',
 title : 'Angola',
 population: "25,868,000",
 cabital: "	Luanda ",
 region : "Africa",
}
const eighCountry ={
img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNInWFJhi-SOpnCHV7tfvG_9kX8oZN5Us2g&usqp=CAU',
 title : 'Anguilla',
 population: "13,452",
 cabital: "	The Valley ",
 region : "Americas",
}
function CountriesList (){
   let title = ' LIST VIEW '
  return(
  <section className= 'countrylist'>
       <div>
          <i>
             <h1 style=
    { {
         fontSize:'30px',
         color:'#418f9c',
         background:'white',
         justifyContent: 'center',
         margin:101,
         borderRadius:8
    } } > {`WELCOME TO   ${title}`} 
             </h1>
          </i> 
       </div>
          <Country
          img = {firstCountry.img}
          title = {firstCountry.title}
          population= {firstCountry.population}
          cabital= {firstCountry.cabital}
          region= {firstCountry.region}
         >
        
         </Country>
           <Country 
          img = {secondCountry.img}
          title = {secondCountry.title}
          population= {secondCountry.population}
          cabital= {secondCountry.cabital}
          region= {secondCountry.region}
           />
           <Country 
          img = {thirdCountry.img}
          title = {thirdCountry.title}
          population= {thirdCountry.population}
          cabital= {thirdCountry.cabital}
          region= {thirdCountry.region}
           />
           <Country 
          img = {fourCountry.img}
          title = {fourCountry.title}
          population= {fourCountry.population}
          cabital= {fourCountry.cabital}
          region= {fourCountry.region}
           />
           <Country 
          img = {fiCountry.img}
          title = {fiCountry.title}
          population= {fiCountry.population}
          cabital= {fiCountry.cabital}
          region= {fiCountry.region}
           />
           <Country 
          img = {sixCountry.img}
          title = {sixCountry.title}
          population= {sixCountry.population}
          cabital= {sixCountry.cabital}
          region= {sixCountry.region}
           />
           <Country 
          img = {sevCountry.img}
          title = {sevCountry.title}
          population= {sevCountry.population}
          cabital= {sevCountry.cabital}
          region= {sevCountry.region}
           />
           <Country 
          img = {eighCountry.img}
          title = {eighCountry.title}
          population= {eighCountry.population}
          cabital= {eighCountry.cabital}
          region= {eighCountry.region}
           />
   </section>
    );
};

const Country = (props) => {

return (
<article className='coun'>
   <img src={ props.img} alt= 'altrnative text'/>
   <i><h5><b>{props.title}</b></h5></i>
   <h6>{props.population}</h6>
   <h6> {props.region} </h6>
   <h6>{props.cabital}</h6>
      
</article>
);
};
export default CountriesList