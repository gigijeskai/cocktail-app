import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <i class="bi bi-house-fill"></i>,
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
    icon: <i class="bi bi-people-fill"></i>,
  },
  {
    id: 3,
    text: "Contacts",
    url: "/contacts",
    icon: <i class="bi bi-chat-dots-fill"></i>,
  },
];

const LinkComponent = () => {
  const { closeSidebar } = useGlobalContext();

  return (
    <ul className="d-flex justify-content-evenly no-style-default">
      {links.map((link) => {
        return (
          <Link to={link.url} key={link.text} className="no-style-default" onClick={closeSidebar}>
            <div className="d-flex">
              {link.icon}
              <p className="ps-3 no-style-default">{link.text}</p>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com",
    icon: <i class="bi bi-facebook ps-3"></i>,
  },
  {
    url: "https://www.twitter.com",
    icon: <i class="bi bi-twitter-x ps-3"></i>,
  },
  {
    url: "https://www.youtube.com",
    icon: <i class="bi bi-youtube"></i>,
  },
];

const SocialComponent = () => {
  return (
    <ul className="d-flex justify-content-evenly no-style-default">
      {socialLink.map((link) => {
        return (
          <li key={link.url}>
            <a href={link.url} alt={link.url}>
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export { LinkComponent, SocialComponent };
