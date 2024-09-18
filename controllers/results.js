const express = require('express');

function multiplicar(req, res, next) {
    
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Ambos parametros deben de ser números validos');
    }
    const result = n1 * n2;
    res.send(`El resultado de multiplicar ${n1} y ${n2} es: ${result}`);
};

function sumar(req, res, next) {

    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Ambos parametros deben de ser números validos');
    }
    const result = n1 + n2;
    res.send(`El resultado de sumar ${n1} y ${n2} es: ${result}`);
};

function dividir(req, res, next) {

    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Ambos parametros deben de ser números validos');
    }
    const result = n1 / n2;
    res.send(`El resultado de dividir ${n1} y ${n2} es: ${result}`);
};

function potencia(req, res, next) {

    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Ambos parametros deben de ser números validos');
    }
    const result = Math.pow(n1, n2);
    res.send(`El resultado de elevar ${n1} a ${n2} es: ${result}`);
};

function resta(req, res, next) {

    const n1 = parseFloat(req.params.n1);
    const n2 = parseFloat(req.params.n2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).send('Ambos parametros deben de ser números validos');
    }
    const result = n1 - n2;
    res.send(`El resultado de restar ${n1} y ${n2} es: ${result}`);
};


module.exports = {multiplicar, sumar, dividir, potencia, resta}