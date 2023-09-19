import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const active = () => {
    console.log("active", isActive);
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };

  const currentUser = {
    id: 1,
    name: "Rakesh",
    isSeller: true,
  };

  useEffect(() => {
    console.log("active 14", isActive);
    window.addEventListener("scroll", active);

    return () => {
      window.removeEventListener("scroll", active);
    };
  }, []);
  return (
    <div className={isActive || pathname !== '/' ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="text link">
            Fiverrr
          </Link>
          <Link to="/" className="dot link">
            .
          </Link>
        </div>
        {
          (isActive || pathname !== '/') &&(<div className='search'>
          <div className='search-input'>
            <input type="text" placeholder='Try "building new app"'/>
          </div>
          <button>
            <img src="./img/search.png" alt="search-lens" />
         </button>
      </div>)
        }   
        <div className="links">
          <Link to="/" className="link">
            Fiverrr Business
          </Link>
          <Link to="/" className="link">
            Explore
          </Link>
          <Link to="/" className="link">
            English
          </Link>

          {!currentUser.isSeller && (
            <>
              <Link to='/signIn' className="link">Sign in</Link>
              <Link to='/seller' className="link">Become a Seller</Link>
            </>
          )}
          {!currentUser && (
            <>
              <Link to='/join' className="link"><button>Join</button></Link>
            </>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://www.adobe.com/in/express/feature/image/media_195c52b9fd2fbd9cb54717ec98c5628d789274db4.png?width=750&format=png&optimize=medium"
                alt="user-profile"
              />
              <span>{currentUser.name}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                     <Link
                        to="/gig/:id"
                        className="
                  link"
                      >
                        Gig
                      </Link>
                      <Link
                        to="/gigs"
                        className="
                  link"
                      >
                        Gigs
                      </Link>
                      <Link
                        to="/myGigs"
                        className="
                  link"
                      >
                        My Gigs
                      </Link>
                      <Link
                        to="/add"
                        className="
                link"
                      >
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link
                    to="/orders"
                    className="
                link"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/messages"
                    className="
                link"
                  >
                    Messages
                  </Link>
                  <Link
                    to="/logout"
                    className="
                link"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== '/') && (
        <>
          {" "}
          <hr />
          <div className="menu">
            <Link
              to="/"
              className="
          link"
            >
              Graphics & Design
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              Programming & Tech
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              Digital Marketing
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              Video & Animation
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              Writing & Translation
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              Music & Audio 
            </Link>
            <Link
              to="/"
              className="
          link"
            >
              AI Services 
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
