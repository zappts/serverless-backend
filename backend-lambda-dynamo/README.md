## Olá! Bem vindo ao repositório de treino! 👋


## Instalação

```sh
yarn install 
```

## Vamos ao exercício?

1. Clone esse repositório
2. Vá ao arquivo handler/method.ts, você verá um arquivo em branco
3. Vamos fazer uma função que calcula a média de notas de um aluno considerando que cada nota terá um peso maior que a outra. Por exemplo, se as notas forem 4, 5 e 6, a função deve fazer a conta (4+5*2+6*3)/6. O resultado deve ser armazenado no DynamoDB. O retorno da função deve indicar se o aluno foi APROVADO ou REPROVADO. Um aluno está aprovado se a média dele é maior ou igual a 6. Lembre-se de criar a tabela no DynamoDB antes de iniciar o exerício.

```
  const { studentId, subject, grades } = event;
  const dynamoDB = new DynamoDB();
  let weight = 1;
  let sum = 0;
  let numberOfGrades = 0;
  for (const grade of grades) {
    sum += (grade * weight);
    numberOfGrades += weight;
    weight++;
  }
  const result = sum / numberOfGrades;
  // salvar no dynamoDB
  const item = {
    studentId,
    [subject]: result,
  };
  await dynamoDB.put(item, 'grades');
  if (result >= 6) {
    return 'APROVADO';
  }
  return 'REPROVADO';
```

4. Rode npm run build no terminal para gerar a pasta dist

5. Compacte a pasta dist (escolha o formato .zip)
6. Acesse a Lambda na AWS e faça upload do arquivo compactado 
7. Edite a Lambda e escolha como o handler o caminho /dist/handler/methods.(metodo)
8. Utilize a aba de teste para enviar eventos para a sua Lambda

Lembre-se de enviar um JSON seguindo o formato do evento

```
    studentId: string,
    subject: string,
    grades: number[]
```

## Autora

👤 **Thauany Moedano**


## Gostou?

Deixa uma ⭐️ se você gostou desse projeto!
