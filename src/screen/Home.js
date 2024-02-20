import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useGlobalContext } from "../context/context";
import Cocktails from "../components/cocktails";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import image from "../assets/image/home-hero.jpg";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import useTitle from "../context/useTitle";

const Home = () => {
  useTitle("HOME");

  const { data, isLoading, isError, searchCocktail, query, count, deleteScrollPosition, scrollPosition } = useGlobalContext();
  const [input, setInput] = useState(query);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero img={image}>
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-8 col-sm-12 margin-0">
              <div>
                <Link to="/" className="no-style-default">
                  <h1 className="text-pink">
                    <b>WIKI DRINK</b>
                  </h1>
                </Link>
                <h6 className="text-white">
                  <span className="special-t">T</span>UTTI I COCKTAIL DEL MONDO A PORTATA DI CLICK
                </h6>
              </div>
              <div>
                <p className="text-white">
                  Wiki Drink è un database internazionale che mette a tua disposizione, in
                  <br />
                  maniera <span className="text-pink">Gratuita</span>, le ricette dei più importanti e diffusi cocktail al
                  <br />
                  mondo.
                </p>
              </div>
              <div>
                <p>
                  <Link className="pink-button p-2 ps-4 pe-4" to="/aboutus">
                    SCOPRI DI PIU'
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  reverse: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
                height={320}
              />
            </div>
          </div>
        </div>
      </Hero>

      {/* Search bar for cocktails */}

      <div className="container pt-5 pb-4">
        <div className="row pb-5 find-drink">
          <div className="col-4">
            <h4 className="">Cerca il tuo drink</h4>
          </div>
          <div className="col-4">
            <form className="d-flex" onSubmit={handleSubmit}>
              <label htmlFor="drink"></label>
              <input id="drink" className="input" placeholder={query} value={input} onChange={(e) => setInput(e.target.value)} />

              <button id="magnifying-glass" className="ms-5" type="submit">
                <i class="bi bi-search text-pink"></i>
              </button>
            </form>
          </div>

          <div className="col-4 col-sm-12" id="cocktail-result-count">
            <p>{count + " risultati"}</p>
          </div>
        </div>
      </div>
      {!isLoading && isError ? <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage> : !isLoading && !isError ? <Cocktails data={data.drinks} /> : <Loading />}
    </>
  );
};

export default Home;
