import React from 'react';
// import data from './data.json';
import Hornedbeast from './Hornedbeast';


class Main extends React.Component {

  render() {
    return (
      
      <div>
        <Hornedbeast 
        title="UniWhal"
        src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
        description="A unicorn and a narwhal nuzzling their horns"
        />
         <Hornedbeast 
        title="Rhino Family"
        src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
        description="Mother (or father) rhino with two babies"
        />
        <Hornedbeast 
        title="Unicorn Head"
        src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"
        description="Someone wearing a creepy unicorn head mask"
        />
        <Hornedbeast
        title="Basically a unicorn"
        scr="https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg"
        description="A narwhal is basically a unicorn after all, right?"
        />
        
        

        {/* {data.map(beast=> (<Hornedbeast title = {beast, title} 
        image= {beast.image.url} discription {beast,discription} />))} */}
      </div>
    )
  };
}

export default Main;