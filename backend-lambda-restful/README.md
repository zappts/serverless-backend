## Olá! Bem vindo ao repositório de treino! 👋


## Instalação

```sh
yarn install 
```

## Vamos ao exercício?

1. Clone esse repositório
2. Vá ao arquivo handler/method.ts, você verá as funções RESTful
3. Faça uma função que calcule quanto de INSS deve ser descontado dado o valor de um salário bruto


4. Rode npm run build no terminal para gerar a pasta dist

5. Compacte a pasta dist (escolha o formato .zip)
6. Acesse a Lambda na AWS e faça upload do arquivo compactado 
7. Edite a Lambda e escolha como o handler o caminho dist/handler/methods.(metodo)
8. Utilize a aba de teste para enviar eventos para a sua Lambda

Lembre-se de enviar um JSON seguindo o formato do evento

```
{
  "salary": 3000.00
}
```

9. Integre a função lambda com um API Gateway
10. Configure o API Gateway para autorizar via Cognito
11. Teste via POSTMAN

## Autora

👤 **Thauany Moedano**


## Gostou?

Deixa uma ⭐️ se você gostou desse projeto!
