import styled from "styled-components";

const Navbar = styled.nav`
  border: 1px solid #dc143c;
`;

const ButtonNav = styled.button`
  
  
  .hamburger {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #top,
  #bottom {
    transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  #middle {
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #dc143c;
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }

  path {
    stroke-dasharray: 25 45;
    stroke-dashoffset: 0;
  }

  button {
    background: none;
    border: none;
  }

  .x #middle {
    opacity: 0;
  }

  .x #top,
  .x #bottom {
    stroke-dashoffset: -45;
  }
`;

const Nav = () => {
  return (
    <Navbar>
      <ButtonNav className="hamburger">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 35 30"
        >
          <path
            id="top"
            fill="line"
            d="M166.18,102.56h25s7.52-.43,5-5.29c-2.89-5.65-8.7,2.07-8.7,2.07L169.84,117"
            transform="translate(-166.18 -94.7)"
          />
          <path
            id="bottom"
            fill="line"
            d="M166.18,113.77h25s7.52.43,5,5.29c-2.89,5.64-8.7-2.07-8.7-2.07L169.84,99.31"
            transform="translate(-166.18 -94.7)"
          />
          <line id="middle" fill="line" y1="13.48" x2="25" y2="13.48" x1="0" />
        </svg>
      </ButtonNav>

    </Navbar>
    // const element = document.getElementById("hamburger");

    // element.onclick = () => {
    // if (element.classList.contains("x")) {
    //     element.classList.remove("x");
    // } else {
    //     element.classList.add("x");
    // }
    // };
  );
};

export default Nav;
