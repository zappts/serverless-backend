## Olá! Bem vindo ao repositório de treino! 👋


## Instalação

```sh
yarn install 
```

## Vamos ao exercício?

1. Clone esse repositório
2. Vamos primeiramente adicionar um novo método no DynamoDB para ler os itens.

```
  async get(hashKey: unknown, tableName: string) {
    const params = {
      TableName: tableName,
      Key: hashKey,
    };
    const response = await docClient.get(params).promise();
    return response.Item;
  }
```

Observe que a vantagem de se fazer em typescript é justamente ter as tipagens acessíveis.

3. Primeiramente, vamos criar a inserção (POST) de uma to-do list. Vamos ao arquivo handler/method.ts e começar a mexer no método postToDoList. Leia os parâmetros do evento, valide se estão corretos e faça a inserção no DynamoDB. Não se esqueça de antes de criar a tabela.

```
  const dynamoDb = new DynamoDB();
  const requestBody = await schemaValidator(JSON.parse(event.body), postToDolistSchema) as ToDoList;
  const toDoListItem = {
    owner: requestBody.owner,
    tag: requestBody.tag,
    list: requestBody.list,
  };
  await dynamoDb.put(toDoListItem, TABLE_NAMES.TO_DO_LIST);
```

4. Agora vamos adicionar um método GET para retornar uma todo list pela sua tag

```
  const { tag } = event.pathParameters;
  const dynamoDb = new DynamoDB();
  const item = await dynamoDb.get({ tag }, TABLE_NAMES.TO_DO_LIST);
```

5. Compacte a pasta dist (escolha o formato .zip)
6. Acesse a Lambda na AWS e faça upload do arquivo compactado 
7. Edite a Lambda e escolha como o handler o caminho /dist/handler/method.(metodos)
8. Utilize a aba de teste para enviar eventos para a sua Lambda

9. Crie um API utilizando o API Gateway e adicione a lambda como integração

## Autora

👤 **Thauany Moedano**


## Gostou?

Deixa uma ⭐️ se você gostou desse projeto!
