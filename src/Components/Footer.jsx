import twitterIcon from "../assets/img/Social media/5282551_tweet_twitter_twitter logo_icon.svg";
import facebookIcon from "../assets/img/Social media/5282541_fb_social media_facebook_facebook logo_social network_icon.svg";
import instagramIcon from "../assets/img/Social media/5282544_camera_instagram_social media_social network_instagram logo_icon.svg";
import pinterestIcon from "../assets/img/Social media/5282545_pin_pinterest_inspiration_pinterest logo_icon.svg";

function Footer() {
  return ( 
      <>
          <footer className="footer bg-[#EFF2F6] text-base-content py-12 px-12 md:px-20">
              <div className="flex flex-col md:flex-row justify-between w-full">
                  <section className="flex flex-col max-w-[450px] items-start lg:w-1/2 mb-10 lg:mb-0">
                      <h3 className="text-black font-semibold text-left text-2xl md:text-4xl mb-2">Sign up for our newsletter</h3>
                      <p className="text-black text-left text-sm mb-4">Be the first to know about our special offers, new product launches, and events</p>
                      
                      {/* Input with button inside */}
                      <div className="relative w-full lg:w-[400px] h-10">
                          <input
                              type="email"
                              placeholder="Email Address"
                              className="input  bg-transparent w-full h-full border border-black placeholder:text-gray-400 pr-20"
                          />
                          <button className="absolute right-0 top-0 bg-transparent text-black h-full px-4 font-semibold ">Sign Up</button>
                      </div>

                      <div className="flex space-x-4 pt-10 pb-6">
                          <a href="#" aria-label="Twitter">
                              <img src={twitterIcon} className="w-5 h-5" alt="Twitter" />
                          </a>
                          <a href="#" aria-label="Facebook">
                              <img src={facebookIcon} className="w-5 h-5" alt="Facebook" />
                          </a>
                          <a href="#" aria-label="Instagram">
                              <img src={instagramIcon} className="w-5 h-5" alt="Instagram" />
                          </a>
                          <a href="#" aria-label="Pinterest">
                              <img src={pinterestIcon} className="w-5 h-5" alt="Pinterest" />
                          </a>
                      </div>
                      <p className="text-gray-600 text-sm">&copy; 2024 KLUGELOU</p>
                  </section>

                  <section className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                      <div className="flex flex-col">
                          <h6 className="footer-title text-black font-semibold">Shop</h6>
                          <a className="link link-hover text-black opacity-50">Gemstones</a>
                          <a className="link link-hover text-black opacity-50">Bath Salt</a>
                          <a className="link link-hover text-black opacity-50">Essential Oil</a>
                      </div>
                      <div className="flex flex-col">
                          <h6 className="footer-title text-black font-semibold">Information</h6>
                          <a className="link link-hover text-black opacity-50">Conditions</a>
                          <a className="link link-hover text-black opacity-50">Data protection</a>
                          <a className="link link-hover text-black opacity-50">Shipping information</a>
                          <a className="link link-hover text-black opacity-50">Returns & Warranty</a>
                          <a className="link link-hover text-black opacity-50">Imprint</a>
                      </div>
                      <div className="flex flex-col">
                          <h6 className="footer-title text-black font-semibold">About</h6>
                          <a className="link link-hover text-black opacity-50">Explore our stories</a>
                          <a className="link link-hover text-black opacity-50">Our mission</a>
                          <a className="link link-hover text-black opacity-50">Responsibility</a>
                          <a className="link link-hover text-black opacity-50">Help & Contact</a>
                      </div>
                  </section>
              </div>
          </footer>
      </>
   );
}

export default Footer;
