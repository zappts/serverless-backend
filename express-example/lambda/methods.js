/*
event.query.type
{
    "query": {
        "type": "megasena"
    }
}
*/

module.exports.lottery = async (event) => {
    let numberArray = new Set();
    while (numberArray.size != 6) {
        console.log(numberArray.size);
        numberArray.add(Math.floor(Math.random() * 60) + 1);
    }
}

module.exports.lotteryAPI = async (event) => {
    let numberArray = new Set();
    if (!event.queryStringParameters.type) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "type is mandatory in query string" }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
                'Access-Control-Allow-Credentials': true,
            }
        }
    }
    if (event.queryStringParameters.type === 'megasena') {
        while (numberArray.size != 6) {
            console.log(numberArray.size);
            numberArray.add(Math.floor(Math.random() * 60) + 1);
        }

    }
    return {
        statusCode: 200,
        body: JSON.stringify({ numbers: Array.from(numberArray.values()) }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true,
        }
    }
}

const Cognito = require('../lambda/auth/cognito');

module.exports.signup = async (event) => {
    const requestBody = JSON.parse(event.body);
    console.log(requestBody);
    const authBusiness = new Cognito();
    await authBusiness.signup(requestBody.user_id, requestBody.email, requestBody.password);
    const response = {
        statusCode: 201,
        body: JSON.stringify({ message: 'Usuário criado com sucesso!' }),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true,
        },
    }
    return response;
};

module.exports.signin = async (event) => {
    const requestBody = JSON.parse(event.body);
    const authBusiness = new Cognito();
    const authenticationToken = await authBusiness.signin(requestBody.user_id, requestBody.password);
    const response = {
        statusCode: 201,
        body: JSON.stringify(authenticationToken),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Credentials': true,
        },
    }
    return response;
};
