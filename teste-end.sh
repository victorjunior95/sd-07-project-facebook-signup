#!/bin/bash
​
echo "Iniciando processo";
​
# Para alterar o repositório fonte dos testes basta alterar o link abaixo:
# https://github.com/betrybe/sd-0x-block5-project-mistery-letter-tests.git

# apagando arquivos de teste e dependências
rm -rf project-tests;
​
rm -rf cypress cypress.json package-lock.json package.json reporter.json;