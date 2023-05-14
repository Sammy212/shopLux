import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>shopLux</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>

            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Lagos, Nigeria</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:+2347036209261">(+234)70 3620 9261</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:samuelafo.212@gmail.com">
                samuelafo.212@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>

            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>

            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>

            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright © 2023 | Samuel Afolabi</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
