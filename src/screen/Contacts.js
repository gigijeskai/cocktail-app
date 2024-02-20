import React from "react";
import Hero from "../components/Hero";
import image from "../assets/image/Contact-hero.png";
import useTitle from "../context/useTitle";

const Contacts = () => {
  useTitle("CONTACTS");

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row pt-3">
          <h2 className="pt-5">
            <b>Vorresti aggiungere un cocktail?</b>
          </h2>
        </div>
        <div className="row">
          <p className="text-gray mb-5">
            Il nostro team è sempre disponibile per valutare possibili
            <br />
            nuove ricette ed ad aggiungerle al nostro database
          </p>
        </div>
      </div>
      <Hero img={image} disableOverlay>
        <div className="container-fluid bg-white shadow-lg" id="form">
          <div className="row d-flex justify-content-center">
            <div className="col-10">
              <form action="https://formspree.io/f/mgepggej" method="POST">
                <div className="row pt-4 d-flex justify-content-center">
                  <div className="col-10 form-group">
                    <label className="text-blue pe-3">NAME</label>
                    <input className="input-edge" type="text" placeholder="NAME" name="name" id="name" />
                    <hr />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 form-group">
                    <label className="text-blue pe-3">SURNAME</label>
                    <input className="input-edge" type="text" placeholder="SURNAME" name="surname" id="surname" />
                    <hr />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 form-group">
                    <label className="text-blue pe-3">EMAIL</label>
                    <input className="input-edge" type="email" placeholder="email@email.email" name="email" id="email" />
                    <hr />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 form-group">
                    <label className="text-blue pe-3">PHONE</label>
                    <input className="input-edge" type="cel" placeholder="555 - 555 - 555" name="phone" id="phone" />
                    <hr />
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-10 form-group">
                    <label className="text-blue pe-3">TYPE YOUR RECIPE</label>
                    <input className="input-edge" type="tel" placeholder="RECIPE" name="recipe" id="recipe" />
                    <hr />
                  </div>
                </div>

                <div className="row pb-4 ">
                  <div className="col d-flex justify-content-center">
                    <button className="pink-button p-2 ps-3 pe-3" type="submit">
                      SEND RECIPE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default Contacts;
