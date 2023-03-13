/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container,NavItem,
  NavLink, } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
        <ul>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Gobierno de la Provincia
                </a>
              </li>
            </ul>
            <NavItem>
                <NavLink
                  href="https://www.facebook.com/Programasoberaniaalimentaria"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          NHN Corp.
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
