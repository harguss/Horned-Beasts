import React from 'react';
import data from './data.json';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {

   constructor(props){
     super(props);
    this.state = {
      hornedBeastData: data,
    }
   }

   render() {
     return (
       <div>
         <ol>
           {

         this.state.hornedBeastData.map((beast, hornedbeastIndex) => (

           <li key = {hornedbeastIndex}>


           <Hornedbeast
           title={beast.title}
           image_url={beast.image_url}
           description={beast.description}
           keyword={beast.keyword}
           horns={beast.horns}
            />
         </li>

         ))
        }
        </ol>
       
    
 </div>
 )
 }
}
       



//        <Hornedbeast 
//         title="UniWhal"
//         src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
//         description="A unicorn and a narwhal nuzzling their horns"
//         />
//          <Hornedbeast 
//         title="Rhino Family"
//         src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
//         description="Mother (or father) rhino with two babies"
//         />
//         <Hornedbeast 
//         title="Unicorn Head"
//         src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
//         description="Someone wearing a creepy unicorn head mask"
//         />
//         <Hornedbeast
//         title="Basically a unicorn"
//         src="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg"
//         description="A narwhal is basically a unicorn after all, right?"
//         />
//         <Hornedbeast
//         title="#truth"
//         src="https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg"
//         description="The truth behind narwhals"
//         />
//         <Hornedbeast
//         title="Baby Rhino"
//         src="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg"
//         description= "This is actually a figurine but it looks kinda real"
//         />
//         <Hornedbeast
//         title="Cera"
//         src="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003"
//         description="Three horns but still, horns. And who doesn't like The Land Before Time?"
//         /> }


        
        

//          {data.map(beast=> (<Hornedbeast title = {beast, title} 
//         image= {beast.image.url} discription {beast,discription} />))} 
//       </>
//     )
//   };
// }

export default Main;