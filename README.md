# just-react

## Setup

[instructions for following along locally using your preferred text editor
](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment)

## Build and run

> npm install

> npm start

### Install Typescript (globally) for running TS files and you need a `tsconfig.json` file in the project root

> npm install -g typescript

After this, if you run `tsc`, it will create the **built/** directory where it will generate all the *.js/.jsx* files.`tsconfig.json` does the magic for you.

Now, for a recat project, we can start by changing the **.js/.jsx** file to **.ts/.tsx** file and do a `npm start` but it will complain 

*Firstly,*

Please install typescript by running npm install typescript.
If you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files).

> So, we have to `npm install typescript`

*Secondly,*

Import problems like something below:

```
TypeScript error in /Users/abose/work/base/personal/code/just-react/src/App.tsx(2,34):
Could not find a declaration file for module 'react'. '/Users/abose/work/base/personal/code/just-react/node_modules/react/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/react` if it exists or add a new declaration (.d.ts) file containing `declare module 'react';`  TS7016

    1 | 
  > 2 | import React, { Component } from 'react';
      |                                  ^
    3 | 
    4 | // importing `App` component 
    5 | import Welcometo from './Welcome';


```

> Restructure your imports the TS way!


## More on React

[Hello from React](docs/mds/what-is-react.md)

## Resources:

1. Great book on React can be found here for free. [Vumbula React](docs/Vumbula_React.pdf)



