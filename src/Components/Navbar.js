import React from "react";

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-primary">
        <div class="container-fluid">
          <a style={{ color: "white" }} class="navbar-brand">
            Your Daily Portal
          </a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;