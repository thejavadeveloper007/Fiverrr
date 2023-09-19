import React from 'react'
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { cards, projects } from '../../data';

const Home = () => {
  return (
    <div> 
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {
          cards.map(card =>(
           <CatCard key={card.id} item={card} />
          ))
        }
      </Slide>
      <div className='features'>
        <div className='container'>
          <div className="left">
            <h2>The best part? Everything.</h2>
            <ul>
              <li>
                <h6><span><img src="./img/check.png" alt="check"/></span>Stick to your budget</h6>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <h6><span><img src="./img/check.png" alt="check"/></span>Get quality work done quickly</h6>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <h6><span><img src="./img/check.png" alt="check"/></span>Pay when you`&apos`re happy</h6>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <h6><span><img src="./img/check.png" alt="check"/></span>Count on 24/7 support</h6>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
              </li>
            </ul>
          </div>  
          <div className="rigth">
            <video className='vdo' src="./img/video.mp4" controls/>
          </div>         
        </div>
      </div>
      <div className="explore">
        <div className="container">
            <h2>
            Explore the marketplace
            </h2>
            <ul>
              <li>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
              </li>
              <li>               
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
                </li>
                <li>               
                <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
                </li>
                <li>
                <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
                </li>
                <li>
                <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
                  </li>
                  <li>
                  <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
                  </li>
                  <li>
                  <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
                  </li>
                  <li>
                  <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
                  </li>
                  <li>
                  <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span> 
                  </li>
                  <li>
                  <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
                  </li>
            </ul>      
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="left">
            <h2>
              fiver <i>business</i>
            </h2>
            <h2>
              A business solution designed for <i>teams</i>
            </h2>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <ul>
              <li>
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
              </li>
              <li>               
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
                </li>
                <li>               
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
                </li>
            </ul>
            <button>Explore fiver Business</button>
          </div>
          <div className="right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
 </div>
  )
}

export default Home