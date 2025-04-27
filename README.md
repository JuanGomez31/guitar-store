
# Guitar Store Vue

This project was done with the objective of strengthening good practices in Vue.js.
The main idea was to convert a mockup made with HTML and CSS to Vue.js, adding as extra functionality
a product basket.

In addition to this goal, I decided to write the CSS code following the mobile first philosophy
and improve some parts of the design to offer a better visualization on mobile devices. 
I also made changes in the iconography to provide a better visual aid to the user.

## Table of Contents

1. [Deployment](#deployment)
2. [Installation](#installation)
3. [FAQ](#faq)

## Deployment
<a name="deployment"></a>

To deploy this project follow these steps


### 1. Install dependencies

```sh
    npm i
```

### 2. Check tests work

```sh
    npm run test
```

### 3. Build project

```sh
    npm run build
```

Once the build is finished the final files will be generated in the dist folder and you
will be able to deploy them on your nginx or apache server.


## Installation
<a name="installation"></a>

### Requirements

The project was developed and tested with the following technologies:

- npm: 10.9.2
- node: 22.14.0

### Run in dev enviroment

#### 1. Install dependencies

```sh
    npm i
```

#### 2. Run project

```sh
    npm run dev
```

If at any time you wish to run the tests to check the correct functioning of the application, 
you can launch the following command.

```sh
    npm run test
```

## FAQ
<a name="faq"></a>

#### What architecture have you used in this project?

In this project I use an atomic architecture.

Adjusting the division as follows:

- **Components**
    - **Atoms:** Basic building blocks (e.g. form labels, inputs, buttons)
    - **Molecules:** Simple groups of UI elements (e.g. search forms)
    - **Organisms:** Complex components made of molecules/atoms (e.g. headers)
- **Pages:** In this case being a quite simple application I don't have Layouts 
so the main page is found directly as App.

#### What css methodology did you use in this project?

For CSS, I have used the BEM methodology. Although I have not yet mastered it completely, 
I currently consider it the most useful and with the best naming system, especially in projects 
that are not component libraries or predefined styles. For the latter,
I consider the Utility-First CSS approach to be the best option.