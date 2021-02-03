<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tokdaniel/GRAND-Next/">
    <img src="https://grandstack.io/img/GrandStack-Logo-Square.png" alt="Logo" width="80" height="80">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">GRANDstack + NEXT.js</h3>
   <p align="center">
  <b>G</b>raphQL <b>R</b>eact <b>A</b>pollo <b>N</b>eo4j <b>D</b>atabase
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#equipped-with">Equipped With</a></li>
        <li><a href="#styles">Styles</a></li>
        <li><a href="#test-env">Test Env</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## Equipped With

* [Typescript](https://www.typescriptlang.org/)
* [Grandstack](https://grandstack.io/)
  - [GraphQL](https://graphql.org/)
  - [React](https://reactjs.org/)
  - [Apollo](https://www.apollographql.com/docs/)
  - [Neo4j Db](https://neo4j.com/developer/language-guides/)
* [Next.js](https://nextjs.org/)
* [Storybook](https://nextjs.org/)
* [GraphQL Codegen](https://graphql-code-generator.com/)
* Docker containers

### Styles

* [Styled-Components](https://styled-components.com/)
* [TailwindCss](https://tailwindcss.com/)
* [Twin.Macro](https://github.com/ben-rogerson/twin.macro)

### Test env

* [Jest](https://jestjs.io/)
* [Fast-Check](https://github.com/dubzzz/fast-check)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* nodejs
* docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tokdaniel/GRAND-Next/
   ```
2. Install dependecies:
   ```
    npm run init
   ```
   this installs every node dependency in the root folder, and in the app folder as well
3. a). Either start up with docker
   ```
    cd <into root folder>
    docker-compose up / docker-compose up -d
   ```
   you can start up services individually by
   ```
    docker-compose up -d neo4j nextjs
   ```
3. b). Or you run npm scripts on your computer:
    ```
     cd app
     npm run dev
    ```
4. Generate apollo types and react hooks
    after starting up the nextjs service run
    ```
      npm run generate
    ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

DanielTok - tokdaniel4@gmail.com - email


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tokdaniel/GRAND-Next.svg?style=for-the-badge
[contributors-url]: https://github.com/contributors/tokdaniel/GRAND-Next/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tokdaniel/GRAND-Next.svg?style=for-the-badge
[forks-url]: https://github.com/tokdaniel/GRAND-Next/network/members
[stars-shield]: https://img.shields.io/github/stars/tokdaniel/GRAND-Next.svg?style=for-the-badge
[stars-url]: https://github.com/tokdaniel/GRAND-Next/stargazers
[issues-shield]: https://img.shields.io/github/issues/tokdaniel/GRAND-Next.svg?style=for-the-badge
[issues-url]: https://github.com/tokdaniel/GRAND-Next/issues
[license-shield]: https://img.shields.io/github/license/tokdaniel/GRAND-Next.svg?style=for-the-badge
[license-url]: https://github.com/tokdaniel/GRAND-Next/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/daniel-tok-015ba6120/
