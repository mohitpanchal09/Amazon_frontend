import React from 'react'
import './Phones.css';
function Phones() {
  return (
    <div className='phones'>
      <div className='row1'>
      <img className="img1" src="https://m.media-amazon.com/images/I/414wcW-9+ML._AC_SY200_.jpg"/>
          <div className='heading'>
          
          <h3 >iQOO Z5 5G (Arctic Dawn, 8GB RAM, 128GB Storage) | Snapdragon 778G 5G Processor | 5000mAh Battery | 44W FlashCharge</h3>
            <p >Qualcomm Snapdragon 778G 5G 6nm Octa-Core Processor
Segment’s 1st Smartphone with Enhanced LPDDR5 & UFS 3.1
44W FlashCharge technology with massive 5000mAh battery with up to 50% in 23 mins*</p>
            <p id='price1'><strong>Best Price:</strong><p id="price1__">Rs. 14,999</p>
            <ul>
                <li>Applicable on: Orders above Rs. 2499 (only on first purchase)
                </li>
                <li>Coupon code: AMAZON400</li>
                <li>Coupon Discount: Rs. 2000 off (check cart for final savings)</li>
            </ul>
            </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>
      <div className='row2'>
          <img id="img2__"className="img2" src="https://images-eu.ssl-images-amazon.com/images/I/71gm8v4uPBL._AC_UL160_SR160,160_.jpg"/>
          <div className='heading'>
          <h3 > Apple iPhone 13 Mini (128GB) - Midnight </h3>
            <p>
            Dual 12MP cameras with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K Dolby Vision HDR video up to 30 fps
            </p>
<p id='price2'><strong>Best Price:</strong><p id="price2__">Rs. 84,900</p>
            <ul>
            <li>15 cm (6.1-inch) Super Retina XDR display</li>
                <li>Up to 19 hours of video playback

                </li>
                <li>A15 Bionic chip for lightning-fast performance</li>
            </ul>
            </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>
      <div className='row3'>
          <img className="img3" src="https://m.media-amazon.com/images/I/61iy2Ru9KdS._AC_UY327_FMwebp_QL65_.jpg"/>
          <div className='heading'>
              <h3>
              OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)
              </h3>
              <p>OnePlus Nord CE 5G, Warp Charge 30T power adapter, Warp Type-C cable (Supports USB 2.0), Phone case, Screen protector (pre-applied), SIM tray ejector, Welcome letter, Brand sticker, Red Cable Club Membership card, Quick start guide, Safety information and warranty card, Highest SAR value & Plastic recycling card</p>
              <p id="price3"><strong>Best price:</strong><p id="price2__">Rs. 24,999</p>
            <ul>
                <li>64MP+8MP+2MP triple rear camera with 1080p</li>
                <li>OnePlus Nord CE currently supports dual 4G SIM Cards or a single 5G SIM + 4G SIM.</li>
                <li>Pay on delivery might be available</li>

            </ul>
            </p>

          <button className='btn'>Add to cart</button>
          </div>
         
      </div>
      <div className='row4'>
          <img className="img4" src="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY327_FMwebp_QL65_.jpg"/>
          <div className='heading'>
              <h3>
              Apple iPhone 12 (64GB) - Black
              </h3>
              <p>All-glass and surgical-grade stainless steel design, water and dust resistant (rated IP68)
</p>
          <p id="price4"><strong>Best price:</strong><p id="price4__">Rs. 56,999</p>
          <ul>
              <li>100% Original Products
</li>
              <li>6.1-inch (15.5 cm diagonal) Super Retina XDR display</li>
              <li>Ceramic Shield, tougher than any smartphone glass</li>
              <li>A14 Bionic chip, the fastest chip ever in a smartphone</li>
          </ul>
          </p>
          <button className='btn'>Add to cart</button>
          </div>
      </div>
    </div>
  );
}

export default Phones
