import React from 'react';
import "./Home.css"
import Product from'./Product'
import {Link} from "react-router-dom";
function Home() {
  return (
  <div className='home'>
      <div className='home__container'>
          <img className='home__image'
          src='https://m.media-amazon.com/images/I/71Rcre1g8IL._SX3000_.jpg' 
          alt=""/>
          <div className='home__row'>
            <Link className='phones__' to='/phones'>
            <Product
            title="Up to 40% off on mobiles & accessories" description="Smart Phones"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Event/JanART/D37353571_WLD_Jan_ART_22-_MSO_Common_SIM_Desktop-Gateway_Category-Card._SY304_CB647220102_.jpg"
            btn="Check offers"
            
            />
            </Link>
            <Link className='gadgets__' to='/gadgets'>
            <Product 
            title="Gadgets"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/JanArt/GW/Electronics/D37355079_IN_CEPC_Electronics_GW-graphics_JanART22_rush_Desktop-Gateway_Category_Card_x1._SY304_CB647178505_.jpg"
            description="Mouse,smartwatch,earpods....."
            btn="Gadgets"
            
            />
            </Link>
            
            <Link className='mohit' to='/clothing'>
            <Product title="Great offers on your first purchase" img="https://m.media-amazon.com/images/I/917j0lCeCxL._AC_SY175_.jpg"
            
            btn="Offers" description="Welcome offers"/>
            </Link>


            <Product title="Up to 50% off | TVs & Appliances" img="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop-Gateway_Category-Card_1x_1._SY304_CB647194015_.jpg"
            description="Home collection" btn="check appliances"
            />
          </div>
          <div className='home__row'>
            <Product title="Blockbuster Deals" img="https://m.media-amazon.com/images/I/41P4Al+S3zL._AC_SY200_.jpg" description="Redmi note 8|₹ 1399"
            btn="Add to cart"/>
            <Product title="Redmi rocks" img="https://m.media-amazon.com/images/I/416SpYgTVYL._AC_SY200_.jpg" description="Redmi 7 |₹ 29999" btn="Add to cart"/>
            <Product title="Make your travelling sweat" img="https://m.media-amazon.com/images/I/31e3W13UMoL._AC_SY200_.jpg" description="Boat pods pro|₹ 2999"  btn="Add to cart"/>
            <Product title="Count your calories" img="https://m.media-amazon.com/images/I/31MFQIpYG+L._AC_SY200_.jpg" description="Apple 3rd gen|₹49999 " btn="Add to cart"/>
            <Product title="Smart watch" btn ="Buy now"img="https://m.media-amazon.com/images/I/418sfNe0t8L._AC_SY200_.jpg" description="Oppo dmart watch|₹ 2999"/>
          </div>
          <div className='home__row'>
            <Product title="Best sofa collection" description="Patola sofa milenge" btn="Check collection"img="https://m.media-amazon.com/images/I/41Bqp6PSMpL._AC_SY200_.jpg"/>
            <Product title="Home Saaz" description="Sarojini ka maal" btn="check collection" img="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"/>
          </div>
      </div>
  </div>
  );
}

export default Home;
