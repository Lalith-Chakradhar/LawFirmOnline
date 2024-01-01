import React, { createContext, useState } from "react";
import Client1 from "../assets/clients_pictures/Jane Cooper.png";
import Client2 from "../assets/clients_pictures/Devon Lane.png";
import Client3 from "../assets/clients_pictures/Robert Fox.png";

// Create the context
export const ClientsContext = createContext();

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState([
    {
      id: "1211",
      name: "Jane Cooper",
      title: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
      image: Client1,
      selected: true,
    },
    {
      id: "1411",
      name: "Devon Lane",
      title: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
      image: Client2,
      selected: false,
    },
    {
      id: "1311",
      name: "Robert Fox",
      title: "Ceo of Hunt",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
      image: Client3,
      selected: false,
    },
  ]);

  // Function to update the selected client
  const setSelectedNext = (arrow) => {
    setClients((currentClients) => {
      const selectedIndex = currentClients.findIndex((d) => d.selected);
      let newSelectedIndex = selectedIndex;

      if (arrow === "left") {
        newSelectedIndex =
          selectedIndex === 0 ? currentClients.length - 1 : selectedIndex - 1;
      } else if (arrow === "right") {
        newSelectedIndex =
          selectedIndex === currentClients.length - 1 ? 0 : selectedIndex + 1;
      }

      return currentClients.map((d, i) => ({
        ...d,
        selected: i === newSelectedIndex,
      }));
    });
  };

  return (
    <ClientsContext.Provider value={{ clients, setSelectedNext }}>
      {children}
    </ClientsContext.Provider>
  );
};
