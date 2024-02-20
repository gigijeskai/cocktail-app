import { useState, useContext, createContext } from "react";
// use fetch è un custom hook utilizzato per effettuare le chiamate alle API

// createContext è un metodo che permette di creare un contesto globale è il
// valore che il context avrà per i componenti che non hanno un Provider
// sopra di loro nell'albero dei componenti, va messo nelle parentesi.
// Ritorna 2 oggetti: Provider e Consumer, il primo è usato per fornire il valore
// del context ai componenti discendenti.
// Il consumer raramente usato a causa di useContext di solito era usato per
// consumare il valore del consumer.

// UseContext è un hook che permette di accedere al valore del context

import useFetch from "./useFetch";

const AppContext = createContext();
// Creo un nuovo contesto con questa funzione che funge da contenitore per lo
// stato dei componenti.

const AppProvider = ({ children }) => {
  // AppProvider è un componente che contiene tutti i componenti a cui voglio dare
  // uno stato condiviso.

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [query, setQuery] = useState("negroni");
  // UseState inizializza uno stato queri con il valore di default che sarebbe quello
  // tra parentesi, setQuery è una funzione che permette di cambiare lo stato di query.

  const { isLoading, data, isError, count } = useFetch(`s=${query}`);
  // UseFerch è un custom hook che permette di effettuare le chiamate alle API in
  // questo caso sul valore di query, ritorna un oggetto con data e count.

  //SIDEBAR FUNCTIONS
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  //END SIDEBAR FUNCTION

  //Cerca cocktail: Quando cambia Query, ho un nuovo rendere di useFetch
  const searchCocktail = (input) => {
    setQuery(input);
  };

  //Aggiorno lo state con la posizione in cui ho cliccato sulla ricetta
  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  //Imposto state dello scroll position a 0
  const deleteScrollPosition = () => {
    setScrollPosition(0);
  };

  return (
    <AppContext.Provider
      // AppContext.Provider è un componente che permette di passare lo stato ai
      // componenti figli, lo utilizzo nell'index wrappando app per renderlo
      // disponibile a tutti i componenti figli cioè tutto ciò che si trova in app.js

      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        searchCocktail,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition,
        isLoading,
        isError,
        count,
        query,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
// useGlobalContext è una custom hook che permette ai componenti che lo utilizzano
// di accedere allo stato di AppContext.Provider senza utilizzare direttamente
// useContext.

export { AppProvider, useGlobalContext };
