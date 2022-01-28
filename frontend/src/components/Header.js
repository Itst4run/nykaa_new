import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header() {
  return <div className="header">
    <div className="header-fix">
      <div className="top1">
<div className='get-app'><img src='images/get-app.png' height={20}/> Get App</div>
<div className='icons'><img src='images/location.png' height={20}/>Store & Events</div>
<div className='icons'><img src="images/gift-card.png" height={20}  />&nbsp; Gift Card</div>
<div className='help'><img src="images/help.png" height={20}/> &nbsp; Help</div>

</div>
<div className="top2">
<div className="items">
  <Link to="/"> <img src="images/logo.png" height={27} width={90}></img></Link>
 
</div>
<div className="items">CATEGORIES</div>
<div className="items">BRANDS</div>
<div className="items">NYKAA FASHION</div>
<div className="items">BEAUTY ADVICE</div>
<div className="items">NYKAA NETWORK</div>
<input className='search'  type="search"   placeholder= 'Search on Nykaa' />
{/* <i class="fa fa-search" style="font-size:24px"></i> */}
<Link to ="/signin">
<div className="account"> <img src="images/user.png" height={25}/> &nbsp; <b>Account</b></div></Link>
<div className="bag"><img src="images/bag.png" height={25} /></div>
</div>
    </div>

<div className="top3">
<div className="items">Makeup</div>
<div className="items">Skin</div>
<div className="items">Hair</div>
<div className="items">Appliances</div>
<div className="items">Personal Care</div>
<div className="items">Natural</div>
<div className="items">Mom & Baby</div>
<div className="items">Health & Wellness</div>
<div className="items">Men</div>
<div className="items">Fragrance</div>
<div className="items">LUXE</div>
<div className="sale"><img src="images/sale.png" height={40} /></div>

</div>
</div>;

}
