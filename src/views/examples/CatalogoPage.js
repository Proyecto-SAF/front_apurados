import React, { useEffect, useState } from "react";

import {
  Badge,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Card,
} from "reactstrap";

import DefaultFooter from "components/Footers/DefaultFooter";
import HomeNavbar from "components/Navbars/HomeNavbar";

function CatalogoPage() {
  

  const [data, setData] = useState([]);
  const [punto, setPunto] = useState([]);

 
  
  return (
    <>
    <HomeNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            background:
              "url(" + require("assets/img/fondo-page.jpg") + ")",
          }}
        ></div>
        
        <Container>
          <div
            color="info"
            className=" d-flex align-items-center justify-content-center"
          >
             <Badge color="info" className="text-center">
              <h1>Ferias habilitaddas</h1>
            </Badge>
          </div>
          
          <div id="images">
            <Badge color="info" className="text-center">
              <h3>Productos disponibles</h3>
            </Badge>
            <Card>
            </Card>
          </div>
        </Container>
      </div>

      <DefaultFooter />
    </>
  );
}

export default CatalogoPage;
