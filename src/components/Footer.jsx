import React, { useContext } from "react";

import { LoginContext } from "../Contexts/LoginContext";

import BulletPoint from "./UI/BulletPoint";

import RegLinks from "./UI/RegLinks";

import FestLinks from "./UI/FestLinks";

function Footer(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);

  return (
    <footer className={props.className}>
      <ul className="footerInfo">
        <BulletPoint content="faellestival@info.com" />

        <BulletPoint content="Stenbankevej 13, 5771 Stenstrup" />
      </ul>

      <ul className="footerLinks">
        {isLogin ? (
          <FestLinks {...props} globalClassName="footerLinks" />
        ) : (
          <RegLinks {...props} globalClassName="footerLinks" />
        )}
      </ul>
    </footer>
  );
}

export default Footer;
