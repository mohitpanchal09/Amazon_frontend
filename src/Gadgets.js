import React from 'react';
import './Gadgets.css';
function Gadgets() {
  return(
  <div className='gadgets'>
    <div className='row1'>
      <img className="img1" src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UL480_FMwebp_QL65_.jpg"/>
          <div className='heading'>
          
          <h3 >HRX by Hrithik Roshan
Ultralyte Men Black Running T-shirt</h3>
            <p >Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)</p>
            <p id='price1'><strong>Best Price:</strong><p id="price1__">Rs. 4,499</p>
            <ul>
                <li>Echo Dot is a smart speaker that can be operated by voice - even from a distance. Alexa can speak both English & Hindi, and new features are added automatically
                </li>
                <li>Echo Dot (4th Gen) has a new spherical design and improved bass performance compared to Echo Dot (3rd Gen)</li>
                <li>Voice makes everything simple: Just ask Alexa to easily pay your bills, get news, weather, cricket scores, nursery rhymes and stories!</li>
            </ul>
            </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>
      <div className='row2'>
          <img className="img2" src="https://m.media-amazon.com/images/I/81tioCUVf4L._AC_UY327_FMwebp_QL65_.jpg"/>
          <div className='heading'>
          <h3 > Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)</h3>
            <p>
            Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)
            </p>
<p id='price2'><strong>Best Price:</strong><p id="price2__">Rs. 909</p>
            <ul>
            <li>Zeb-Transformer-M is a Optical USB Gaming Mouse with 7 Colors LED Effect. It has High Quality Button,High Precision and Gold Plated USB. It includes Dedicated buttons for DPI,Forward and Backward. Button life : 2.5 Million Times</li>
                <li>It has Compact & Ergonomic Design. Cable type : Braided cable. Bluetooth:No.
                </li>
                <li>Breathing LED- Your gaming is going to get LIT as the gaming mouse comes with 7 colors breathing LED that will charm the gamer in you.</li>
            </ul>
            </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>
      <div className='row3'>
          <img className="img3" src="https://m.media-amazon.com/images/I/71zNES67uJL._AC_UY327_FMwebp_QL65_.jpg"/>
          <div className='heading'>
              <h3>
              Apple Watch Series 7 (GPS + Cellular, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular
              </h3>
              <p>Stay connected to family and friends with calls, texts and email, even when you don’t have your phone</p>
              <p id="price3"><strong>Best price:</strong><p id="price2__">Rs. 50,900</p>
            <ul>
                <li>Stay connected to family and friends with calls, texts and email, even when you don’t have your phone</li>
                <li>Always-on Retina display has nearly 20% more screen area than Series 6, making everything easier to see and use</li>
                <li>The most crack-resistant front crystal yet on an Apple Watch, IP6X dust resistance and swimproof design</li>

            </ul>
            </p>

          <button className='btn'>Add to cart</button>
          </div>
         
      </div>
      <div className='row4'>
          <img className="img4" src="https://m.media-amazon.com/images/I/71L5lSfJIPS._AC_UY327_FMwebp_QL65_.jpg"/>
          <div className='heading'>
              <h3>
              New Apple AirTag
              </h3>
              <p>Keep track of and find your items alongside friends and devices in the Find My app
</p>
          <p id="price4"><strong>Best price:</strong><p id="price4__">Rs. 799</p>
          <ul>
              <li>100% Original Products
</li>
              <li>Simple one-tap setup instantly connects AirTag with your iPhone or iPad</li>
              <li>Play a sound on the built-in speaker to help find your things, or just ask Siri for help</li>
              <li>Find items farther away with the help of hundreds of millions of Apple devices in the Find My network</li>
          </ul>
          </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>


  </div>
  );
}

export default Gadgets;
