import ReactDOM from "react-dom";
import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";
import LogoWhite from "../Media/LogoWhite.png";
import ContactForm from "./contactForm";


function Appbar() {
  return (
    <>
      <div className="nav-wrapper">
        <Navbar
          alignLinks="right"
          brand={
            <a className="brand-logo" href="#">
              <img src={LogoWhite} alt="PhotoBook" id="photoBookLogo" />
            </a>
          }
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
        >
          <NavItem href="get-started.html">
            Home
            <Icon left>home</Icon>
          </NavItem>
          <ContactForm />
          {/* <NavItem href="get-started.html">
            Contact
            <Icon left>mail_outline</Icon>
          </NavItem> */}
          <NavItem href="get-started.html">
            Gallery
            <Icon left>photo</Icon>
          </NavItem>
          <NavItem className="log-in-button" href="get-started.html">
            Log In
            <Icon left>person_outline</Icon>
            <Icon right>logout</Icon>
          </NavItem>
        </Navbar>
      </div>
    </>
  );
}

export default Appbar;
