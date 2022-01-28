import React from "react";
import './Footer.css';
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footer-item">
            <div>
            <div>
              <img src="" />
              Get Special Discount On Your InBox
            </div><br/>
            <div>
              <input type="email" value="Your Email" />
              <button type="button">Send</button>
            </div>
          </div>
          </div><br/>

          <div  className="footer-item">
            <div>
            <div>
              <img src="" />
              EXPERIENCE THE NYKAA MOBILE APP
            </div>
            <div>
              <img src="images/google.png" className="google"/>
              <img src="images/apple.png" className="apple" />
            </div>
          </div>
          </div>

          <div  className="footer-item">
            <div>
            <div>
              <img src="" />
              FOR ANY HELP YOU MAY CALL US AT <br/> 1800-267-4444
            </div><br/>
            <div>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</div>
          </div>
        </div>
        </div>

        <div className="footer2">

          <div className="footer-item2">
          <img src="images/nykaa-1.svg" style={{width:"100px"}}/>
            <h4>WHO ARE WE?  </h4>
            <p>CAREERS</p>  
            <p>AUTHENTICITY</p>  
           <p> PRESS TESTIMONIALS </p>
           <p>NYKAA CSR</p>
            <p>RESPONSIBLE DISCLOSURE</p>
            <p>INVESTOR RELATIONS</p>
          </div>

          <div className="footer-item2">
           <h4> HELP  </h4>
            <p>CONTACT US  </p>
           <p>FREQUENTLY ASKED QUESTIONS  </p> 
            <p>STORE LOCATOR</p>  
            <p>CANCELLATION & RETURN </p>
            <p>SHIPPING & DELIVERY </p>
            <p>SELL ON NYKAA</p>
          </div>

          <div className="footer-item2">
            <h4>INSPIRE ME</h4>   
            <p>BEAUTY BOOK </p>
             <p>NYKAA TV  </p>
             <p>NYKAA NETWORK </p>
             <p>BUYING GUIDES</p>
          </div>

          <div className="footer-item2">
            <h4>QUICK </h4>
            <p>LINKS OFFER ZONE </p>
             <p>NEW LAUNCHES  </p>
             <p>NYKAA MAN  </p>
             <p>NYKAA FASHION NYKAA</p>
            <p>PRO NYKAA FEMINA BEAUTY AWARDS<br/> WINNERS 2019 </p>
            <p>SITEMAP</p>
          </div>

          <div className="footer-item2">
            <h4>TOP CATEGORIES</h4>  
            <p>MAKEUP  </p>
            <p>SKIN HAIR</p>  
            <p>PERSONAL CARE  </p>
            <p>APPLIANCES  </p>
            <p>MOM AND BABY </p>
            <p>WELLNESS FRAGRANCE </p>
            <p>NATURAL</p> 
            <p>LUXE</p>
          </div>
        </div>


        <div className="footer3">
          <div className="footer-item">
            <div>
              <img src="images/Free-shipping.svg" />
            </div>
            <div>
              <div style={{fontWeight: "bold"}}>FREESHIPPING</div>
              <hr />
              for orders above INR499
            </div>
          </div>

          <div className="footer-item">
            <div>
              <img src="images/return_accepted.svg" />
            </div>
            <div>
              <div style={{fontWeight: "bold"}}>EASY RETURNS</div>
              <hr />
              15 Day Easy Returns For Most Products
            </div>
          </div>

          <div className="footer-item">
            <div>
              <img src="images/Authenticity.svg" />
            </div>
            <div>
              <div style={{fontWeight: "bold"}}>AUTHENTIC <br /> PRODUCTS</div>
              <hr />
              Sourced Directly from 
              Brands/ Authorised <br /> Distributors
            </div>
          </div>

          <div className="footer-item">
            <div>
              <img src="images/Brands.svg" />
            </div>
            <div>
              <div style={{fontWeight: "bold"}}>2400+ BRANDS</div>
              <hr />
              Well Curated 1.9Lakh + Product
            </div>
          </div>

          <div className="footer-item3">
            <div>
              SHOW US SOME LOVE ❤ ON SOCIAL MEDIA
            </div>
            <div>
              <img src="images/facebook.png" style={{width:"20px", height:"20px"}}/>
              <img src="images/twitter.png" style={{width:"20px", height:"20px"}} />
              <img src="images/pintrest.png" style={{width:"20px", height:"20px"}} />
              <img src="images/youtube.png" style={{width:"20px", height:"20px"}} />
            </div>
          </div>
        </div>

        <div className="footer4">
          <div className="item">Terams & Conditions</div>
          <div className="item">Shipping Policy</div>
          <div className="item">Cancellation policy </div>
          <div className="item">Privacy policy</div>
        </div>
        <div className="foot">
          @ 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved
        </div>
        
      </div><br/><br/>
      <div className="fixed-bottom">
        
        <div><img src="images/chat_logo.svg" /></div>
        <div style={{fontWeight:"bold"}} >How may we help you</div>
      
      </div>
    </>
  );
}
