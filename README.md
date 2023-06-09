<div id="top"></div>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<br />
<div align="center">
  <a href="https://github.com/ecruhling/resource-layout-blocks">
    <img src="assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Resource Branding<br />
Layout blocks for WordPress</h3>

  <p align="center">
    Custom layout blocks for the WordPress block editor.<br />
Container, Row, and Column.<br />
Uses CSS and utility classes from Twitter Bootstrap 5.
    <br />
    <a href="https://github.com/ecruhling/resource-layout-blocks"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ecruhling/resource-layout-blocks">View Demo</a>
    ·
    <a href="https://github.com/ecruhling/resource-layout-blocks/issues">Report Bug</a>
    ·
    <a href="https://github.com/ecruhling/resource-layout-blocks/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Layout Blocks

![Layout Blocks Screen Shot][product-screenshot]

Custom layout blocks for the WordPress block editor. Container, Row, and Column. Uses CSS and utility classes from
Twitter Bootstrap 5.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

WordPress plugin – install and activate.

### Prerequisites

Requires PHP >= 7.0. Requires WordPress >= 5.9.

## Features

Blocks have an 'inlineStyle' attribute. This attribute is editable in the side panel, under the Advanced accordion - '
Inline Styles'. Must be a valid string of inline CSS. Be aware that as some native WordPress attributes (like
'align' and 'alignWide') are dependent on inline CSS, these attributes are not compatible with these blocks.

A 'Class Inspector' area is added to the Block Control Toolbar. This dynamically lists all the CSS classes added to the
block during creation and editing. It provides a concise, quick way
of telling exactly what classes are added throughout all breakpoints, including any custom CSS classes added in the
Advanced sidebar.

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [X] Add Controls for creating & editing inline style per block.

- [ ] Block for layout purposes only: placeholder, grouping for alignment & justify, width 100%, to break column, etc.

- [ ] Enable CSS class editing from within the Class Inspector.

See the [open issues](https://github.com/ecruhling/resource-layout-blocks/issues) for a full list of proposed features (
and
known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Erik Rühling - erik@resourceatlanta.com

Project Link: [https://github.com/ecruhling/resource-layout-blocks](https://github.com/ecruhling/resource-layout-blocks)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ecruhling/resource-layout-blocks.svg

[contributors-url]: https://github.com/ecruhling/resource-layout-blocks/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/ecruhling/resource-layout-blocks.svg

[forks-url]: https://github.com/ecruhling/resource-layout-blocks/network/members

[stars-shield]: https://img.shields.io/github/stars/ecruhling/resource-layout-blocks.svg

[stars-url]: https://github.com/ecruhling/resource-layout-blocks/stargazers

[issues-shield]: https://img.shields.io/github/issues/ecruhling/resource-layout-blocks.svg

[issues-url]: https://github.com/ecruhling/resource-layout-blocks/issues

[license-shield]: https://img.shields.io/github/license/ecruhling/resource-layout-blocks.svg

[license-url]: https://github.com/ecruhling/resource-layout-blocks/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg

[linkedin-url]: https://linkedin.com/in/erik-r%C3%BChling-1a452138

[product-screenshot]: assets/images/logo.png
