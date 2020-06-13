# Tamagotchi

This project is a Tamagotchi. You have four sections that each have two buttons that do different things. Each button either adds or decreases points. There is a Reset button to bring you back to the default points without having to refresh your page. The goal of this project was to experiment with SASS mixins, variables, and media breakpoints. The JavaScript is simple, the SASS is a little more intricate.

There is also a branch that allows you to properly view the project's responsiveness. When you get to a tablet size, the sections break off and stack on top of each other with the Reset button moving to the top.

P.S. There's a surprise when you hover over the Tamagotchi title.

## Preview Project

![Demo Preview of Tamagotchi Site](./src/assets/tamagotchi-site-demo.gif)

## Preview Responsive Format

![Demo Preview of the Responsive Tamagotchi Site](./src/assets/tamagotchi-responsive-demo.gif)

## View Project
- Clone the repository 👉🏼 `https://github.com/RyanBeiden/tamagotchi.git`
- Install Dependencies:
  
  **Dev**
  ```
  npm install @babel/core @babel/preset-env babel-loader css-loader eslint eslint-config-airbnb-base eslint-loader eslint-plugin-import file-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass sass-loader webpack webpack-cli webpack-dev-server --save-dev
  ```
  **Frontend**
  ```
  npm install axios firebase jquery @fortawesome/fontawesome-free popper.js --save
  ```
- Run `npm start`

## View Responsive Format
- Run `git checkout rb-responsive` then `npm start`

## Technologies Used
[![JavaScript](https://img.shields.io/badge/-JavaScript-2c9fcc?style=flat-square)](#) [![SASS](https://img.shields.io/badge/-SASS-2c9fcc?style=flat-square)](#)

#### Backlog/Roadmap

- Build a progress bar displaying the average HP of all four quadrants
