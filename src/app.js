/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { arrow } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let list = document.querySelector("#list");

  //variables
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domains = [".com", ".es", ".net", ".us"];

  //funciones
  const getRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];

  const generateDomains = () => {
    let inpar = 0;

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let x = 0; x < noun.length; x++) {
          let listComponents = document.createElement("li");

          //verificamos si racoon es la ultima palabra y la sustituimos
          //por ra.com para hacer el juego de palabras
          if (noun[x] === "racoon") {
            listComponents.innerHTML = `${pronoun[i]}${adj[j]}ra.com`;
          } else {
            listComponents.innerHTML = `${pronoun[i]}${adj[j]}${
              noun[x]
            }${getRandomDomain(domains)}`;
          }

          //Si el elemento de la lista es inpar ponemos fondo para mejorar la visibilidad
          if (inpar % 2 !== 0) {
            listComponents.style.backgroundColor = "lightgrey";
          }

          list.appendChild(listComponents);
          inpar++;
        }
      }
    }
  };

  generateDomains();
};
