import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./State";
// import "flag-icon-css/css/flag-icon.min.css";

function Header() {
   const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <select
          aria-describedby="searchDropdownDescription"
          className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown"
          data-nav-digest="LTeLDbNom//Tw5qE3CNFbXJRmPc="
          data-nav-selected="0"
          id="searchDropdownBox"
          name="url"
          style={{ display: "block", top: "2.5px" }}
          tabIndex="0"
          title="Search in"
        >
          <option
            value="search-alias=aps&amp;field-keywords="
            select="selected"
          >
            All
          </option>
          <option value="search-alias=aps&amp;field-keywords=Electronics">
            Electronics
          </option>
          <option value="search-alias=aps&amp;field-keywords=Books">
            Books
          </option>
          <option value="search-alias=aps&amp;field-keywords=Apps">Apps</option>
          <option value="search-alias=aps&amp;field-keywords=Software">
            Software
          </option>
          <option value="search-alias=aps&amp;field-keywords=Toys">Toys</option>
          <option value="search-alias=aps&amp;field-keywords=Video Games">
            Video Games
          </option>
          <option value="search-alias=aps&amp;field-keywords=Home">Home</option>
          <option value="search-alias=aps&amp;field-keywords=Beauty">
            Beauty
          </option>
          <option value="search-alias=aps&amp;field-keywords=Health &amp; Personal Care">
            Health &amp; Personal Care
          </option>
          <option value="search-alias=aps&amp;field-keywords=Pet Supplies">
            Pet Supplies
          </option>
          <option value="search-alias=aps&amp;field-keywords=Sports &amp; Outdoors">
            Sports &amp; Outdoors
          </option>
          <option value="search-alias=aps&amp;field-keywords=Grocery">
            Grocery
          </option>
        </select>
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />

        <SearchIcon className="header__searchIcon fas fa-search" />
      </div>
      <div className="header__country ">
        <select className="selectpicker" data-width="fit">
          <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
            EN
          </option>
          <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
            ES
          </option>
        </select>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon  className="fas fa-shopping-basket"/>

            <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
