"use strict";

window.addEventListener("load", start);

function start() {
  console.log("JavaScript is working");
  anotherFunction();
}

function anotherFunction() {
  console.log("This is another function");
  thirdFunction();
}

function thirdFunction() {
  console.log("Third function");
  fourthFunction();
}

function fourthFunction() {
  console.log("Fourth function");
}
