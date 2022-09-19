/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Rahul Kumar
 *      Date:       04/08/2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

window.activeCategoryID = "c1";
var selected = document.getElementById("selected-category");
selected.innerHTML = "Household";

var menu = document.getElementById("menu");

window.categories.forEach((element) => {
  var eLi = document.createElement("li");
  var eButton = document.createElement("button");

  eButton.onclick = function () {
    window.activeCategoryID = element.id;
    selected.innerHTML = `${element.name}`;
    window.render();
  };

  eButton.textContent = `${element.name}`;
  eLi.append(eButton);
  menu.append(eLi);
});

var productToRender;
var pcard = document.getElementById("product-cards");
window.render = function () {
  productToRender = window.products.filter((element) => {
    return element.categories.includes(window.activeCategoryID);
  });

  pcard.innerHTML = "";
  productToRender.forEach((element) => {
    var ediv = document.createElement("div");
    var eim = document.createElement("img");
    var eti = document.createElement("h4");
    var edes = document.createElement("span");
    var epri = document.createElement("h6");

    ediv.classList.add("card");
    eim.src = element.imageUrl;
    eti.innerHTML = `${element.title}`;
    edes.innerHTML = `${element.description}`;
    epri.innerHTML = `$${element.price / 100}`;

    if (!element.discontinued) {
      ediv.append(eim);
      ediv.append(eti);
      ediv.append(edes);
      ediv.append(epri);
      pcard.append(ediv);
    }
  });
};

window.render();
