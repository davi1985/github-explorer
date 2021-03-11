DESCRIÇÃO DAS LIB/PACOTES USADAS

---BABEL---
"@babel/core": core da biblioteca do babel
"@babel/cli": lib para executar babel via terminal
"@babel/preset-env": lib que endentifica qual ambiente está sendo executada a app para converter o código da melhor maneira possível (browser ou node)
"babel-loader": integração entre babel e webpack

Comando para converter código usando o babel:
`yarn babel src/index.jsx --out-file dist/bundle.js`

---WEBPACK---
"webpack": core da biblioteca webpack
"webpack-cli": lib para executar webpack via terminal
"webpack-dev-server": lib que criar um servidor para nossa applicação
"html-webpack-plugin": criar htmls com o bundle.js injetado

Comando:
` yarn webpack`

"cross-env": lib para facilitar a criação de variáves ambiente

"style-loader": libs para fazer o loader de css
"css-loader": idem
"sass-loader": loader para entender arquivos sass
"node-sass":

---REACT---

Conceitos React

- componentes
