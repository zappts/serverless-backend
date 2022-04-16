## Olá! Bem vindo ao repositório de treino! 👋


## Instalação

```sh
yarn install 
```

## Vamos ao exercício?

1. Clone esse repositório
2. Vá ao arquivo handler/method.ts, você verá um arquivo em branco
3. Faça uma função que calcule quanto de INSS deve ser descontado dado o valor de um salário bruto

```
  const { salary } = event;
  let inssDeduction;
  // inss table
  if (salary <= 1212) {
    inssDeduction = salary * 0.075;
  } else if (salary >= 1212.01 && salary <= 2427.35) {
    inssDeduction = salary * 0.09 - 18.18;
  } else if (salary >= 2427.36 && salary <= 3641.03) {
    inssDeduction = salary * 0.12 - 91.00;
  } else {
    inssDeduction = salary * 0.14 - 163.82;
  }
  return (
    {
      inss: inssDeduction,
    }
  );
```

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

## Autora

👤 **Thauany Moedano**


## Gostou?

Deixa uma ⭐️ se você gostou desse projeto!
