import React from "react";
import MapUsu from "components/Funcionales/MapUsu";

// reactstrap components
import { Row, Alert } from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import IndexHeader from "components/Headers/IndexHeader";

function HomePage() {
  const [alert3] = React.useState(true);
  React.useEffect(() => {
    document.body.classList.add("Home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  return (
    <>
      <HomeNavbar />
      <IndexHeader />
      <br></br>
      <Row>
        <div id="Map" className="text-center">
          <Alert color="info" isOpen={alert3}>
            <h2>
              Haz click en el punto mas cercano y veras en que momento se
              realizara el programa Soberanía Alimentaria Formoseña.
            </h2>
          </Alert>
          <MapUsu />
          <br></br>
        </div>
      </Row>
      <DefaultFooter />
    </>
  );
}

export default HomePage;
