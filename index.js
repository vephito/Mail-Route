#! /usr/bin/env node

const { exec } = require("child_process");
const { stdin, stdout } = require("process");
const readline = require("readline");

const url = process.argv.slice(2).join("");

function getUrl(url) {
  switch (url) {
    case "neko":
      openBrowser("https://mail.google.com/mail/u/0/");
      break;
    case "kris":
      openBrowser("https://mail.google.com/mail/u/1/");
      break;
    case "vep":
      openBrowser("https://mail.google.com/mail/u/2/");
      break;
    case "tho":
      openBrowser("https://mail.google.com/mail/u/4/");
      break;
  }
}
// function getPrompt() {
//   r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   r1.question("Enter the url", (url) => {
//     r1.close();
//     getUrl(url);
//   });
// }
function openBrowser(url) {
  try {
    //command = getUrl();
    exec(`open ${url}`);
  } catch (error) {
    console.error("Error occurred while opening the browser:", error);
  }
}
getUrl(url);
