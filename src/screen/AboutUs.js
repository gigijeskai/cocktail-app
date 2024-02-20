import React from "react";
import Hero from "../components/Hero";
import image from "../assets/image/about-hero.jpg";
import imageteam from "../assets/image/team-img.jpg";
import useTitle from "../context/useTitle";

const AboutUs = () => {
  useTitle("ABOUT-US");

  const [isHovered, setIsHovered] = React.useState(false);
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  // il metodo che ho utilizzato con questi 3 stati è sbagliato, il modo corretto per
  // l'effetto su un elemento specifico è utilizzare un componente apparte altrimenti
  // tutti gli elementi saranno condizionati dalle azioni di uno soltanto,
  // l'ho fatto per velocizzare il lavoro, ma non è corretto.
  return (
    <>
      <Hero img={image}>
        <div className="container">
          <hr className="pink-hr" />
          <div className="row">
            <i>
              <h3 className="text-white text-center p-3">
                <q>
                  Grande è la fortuna di colui che
                  <br />
                  possiede una buona bottiglia, un buon
                  <br />
                  libro, un buon amico.
                </q>
              </h3>
            </i>
          </div>
          <hr className="pink-hr" />
        </div>
      </Hero>
      <div className="container-fluid pb-5" id="il-nostro-progetto-section">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center pt-4 pb-4 text-blue">
              <b>IL NOSTRO PROGETTO</b>
            </h2>
          </div>
          <div className="row d-flex justify-content-evenly pb-5">
            <div className="col-12 col-md-3 col-lg-3 col-sm-12 text-center  rounded-1 about-us-card">
              <h4 className="pt-4">Educare</h4>
              <p>
                <i class="bi bi-backpack2-fill text-pink resize-icon"></i>
              </p>
              <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={isHovered ? "text-white" : "text-gray"}>
                Picked hashtag portland pork belly
                <br />
                cred selvage viral retro prism lomo
                <br />
                narwhal cray selfies vegan lyft.
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-sm-12 text-center rounded-1 about-us-card">
              <h4 className="pt-4">Insegnare</h4>
              <p>
                <i class="bi bi-people-fill text-pink resize-icon"></i>
              </p>
              <p onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={isHovered1 ? "text-white" : "text-gray"}>
                iPhone banh mi you probably
                <br />
                haven't heard of them fanny pack
                <br />
                marfa four loko freegan. XOXO
                <br />
                salvia twee whatevr post-ironic.
                <br />
                blog
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-sm-12 text-center rounded-1 about-us-card">
              <h4 className="pt-4">Centralizzare</h4>
              <p>
                <i class="bi bi-database-fill text-pink resize-icon"></i>
              </p>
              <p onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={isHovered2 ? "text-white" : "text-gray"}>
                Tilde post-ironic celiac franzen
                <br />
                sustainable, vinyl polaroid direct
                <br />
                trade tattoed vaporware kogi
                <br />
                healt goth cray echo park organic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Hero img={imageteam}></Hero>
      <div className="contaner-fluid pb-5">
        <div className="row">
          <h2 className="text-center pt-4 pb-4 text-blue">
            <b>IL NOSTRO TEAM</b>
          </h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-2 col-md-2 col-sm-12 text-center">
            <h4>Pacciani</h4>
            <p className="rule text-gray">
              <b>CEO & Founder</b>
            </p>
            <img className="team-image" src="https://electomagazine.it/wp-content/uploads/2021/03/pietro-pacciani-mostro-di-firenze.jpg" />
          </div>
          <div className="col-12 col-lg-2 col-md-2 col-sm-12 text-center">
            <h4>Brumotti</h4>
            <p className="rule text-gray">
              <b>CTO</b>
            </p>
            <img className="team-image" src="https://www.italpress.com/wp-content/uploads/2020/09/BRUMOTTI.jpg" />
          </div>
          <div className="col-12 col-lg-2 col-md-2 col-sm-12 text-center">
            <h4>Rick Roll</h4>
            <p className="rule text-gray">
              <b>Stackholder & testimonial</b>
            </p>
            <img
              className="team-image"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="col-12 col-lg-2 col-md-2 col-sm-12 text-center">
            <h4>Dodo</h4>
            <p className="rule text-gray">
              <b>Creative Director</b>
            </p>
            <img
              className="team-image"
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
