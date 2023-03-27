import React, { useEffect, useState, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./style.scss";

const NavBar = () => {
  // All states and Reference
  const [clicked, setClick] = useState(false);
  const navRef = useRef(null);
  const liRef = useRef(null);

  let tl = gsap.timeline({ paused: true });

  // UseEffect ::-->
  useEffect(() => {
    if (window.innerWidth <= 820) {
      // Animation Logic --
      tl.fromTo(
        navRef.current,
        {
          height: 0,
          y: -3,
          x: -10,
        },
        {
          height: 5,
          y: 40,
          rotation: 720,
        }
      )
        .to(navRef.current, {
          x: 0,
          height: "45vh",
          // ease: "back.out(2)",
          ease: "elastic.out(1,0.3)",
          duration: 1.4,
        })
        .fromTo(
          navRef.current,
          { width: 5, padding: 0 },
          { width: "100vw", x: 6, padding: "1rem 3rem" }
        )
        .fromTo(".liItems", { autoAlpha: 0 }, { autoAlpha: 1, display: "block" });
    }
  }, [tl]);

  // Function for onCLick --->
  const handClicked = () => {
    setClick(!clicked);
    if (!clicked) {
      tl.play();
    } else {
      tl.reverse();
    }
  };

  return (
    <div className="MainHeader flex justify-between lg:px-20 md:px-8 md:h-20 h-16 items-center">
      {/* =========== LOGO ============= */}
      <div className="logo cursor-wait">TodaysNews</div>
      <nav className="flex gap-12">
        {/*--------- Main-Navigation ----------------*/}
        <div className="box">
          <ul
            ref={navRef}
            className={
              clicked
                ? "grid grid-co md:text-base lg:text-[1.3rem] "
                : "grid grid-co openMenu md:text-base lg:text-[1.3rem]"
            }
          >
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
            <li ref={liRef} className="liItems">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
          </ul>
        </div>
        {/* ----------------- Icon ------------- */}
        <div className="flex gap-4 items-center scale-[1.3]">
          <span className="cursor-pointer">
            <AccountCircleIcon />
          </span>
          <div onClick={handClicked} className="cursor-pointer menuButton">
            {clicked ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
