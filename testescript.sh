#!/bin/bash

echo "Iniciando processo";

# Para alterar o repositório fonte dos testes basta alterar o link abaixo no exemplo foi usado o misteryletter:
# https://github.com/betrybe/sd-0x-block5-project-mistery-letter-tests.git
git clone --branch master https://github.com/betrybe/sd-0x-block6-project-facebook-signup-tests.git ./project-tests;

rm -rf ./project-tests/.git;

cp -r ./project-tests/cypress ./project-tests/cypress.json ./project-tests/package-lock.json ./project-tests/package.json ./project-tests/reporter.json .;

npm install;

node_modules/.bin/cypress run;

# apagando arquivos de teste e dependências
rm -rf project-tests;

rm -rf cypress cypress.json package-lock.json package.json reporter.json;
