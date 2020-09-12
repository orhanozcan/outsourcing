var express = require('express')
var router = express.Router()
var db = require('../db/db')
var mail = require('../services/mail/mail')
var uuid = require('uuid-random');
var auth = require('./auth/auth')


router.post('/register', async (request, response) => {
    console.log('register fonksiyonu çalıştı')
    console.log(request)
    db.query('select * from tuser t where t.email = $1', [request.body.email], (err, res) => {
        if (err) {
            return next(err)
        }
        var uid = uuid();
        if (res.rowCount == 0) {
            db.query('INSERT INTO public.tuser(user_id,email, password, userstatus,activationcode) VALUES( (SELECT nextval(\'seq_user_id\')),$1, $2, $3 , $4) ',
                [
                    request.body.email,
                    request.body.password,
                    0,
                    uid
                ], (err, res) => {
                    if (err) {
                        return response.status(200).send({ status: 0, msg: err })
                    }
                    mail.sendActivationEmail(request.body.email, uid, (err, res) => {
                        if (err) {
                            return response.status(200).send({ status: 0, msg: err })
                        }
                    });
                    return response.status(200).send({ status: 1, msg: 'Please Check your mailbox and approve your mail.' })
                })
        }
        else
            return response.status(200).send({ status: 0, msg: 'Email have already registered' })
    })
})

router.post('/checkmail', async (request, response) => {
    console.log('checkmail fonksiyonu çalıştı')
    db.query('select * from tuser t where t.email = $1', [request.body.email], (err, res) => {
        console.log(res.rowCount)
        if (err) {
            return response.status(200).send({ status: 0, msg: err })
        }
        if (res.rowCount == 0)
            return response.status(200).send({ status: 1, msg: 'ok' })
        else
            return response.status(200).send({ status: 0, msg: res })
    })
})

router.post('/activate', async (request, response) => {
    console.log('activate fonksiyonu çalıştı')
    console.log(request.body.uuid)
    db.query('UPDATE public.tuser SET userstatus=1 WHERE activationcode =$1', [request.body.uuid], (err, res) => {
        console.log(res)
        if (err) {
            return response.status(200).send({ status: 0, msg: err })
        }
        if (res.rowCount === 0) {
            return response.status(200).send({ status: 0, msg: 'Activation Failed' })
        }
        return response.status(200).send({ status: 1, msg: 'Your account have been activated.' })
    })
})


router.post('/login', async (request, response) => {
    console.log('login fonksiyonu calisti')
    db.query('select * from tuser t where t.email = $1', [request.body.email], (err, res) => {
        console.log(res.rowCount)
        if (err) {
            return response.status(200).send({ status: 0, msg: err })
        }
        if (res.rowCount === 0)
            return response.status(200).send({ status: 0, msg: 'Check your password or email.' })
        else {

            if (res.rowCount === 1 && res.rows[0].password === request.body.password) {
                if (res.rows[0].userstatus === 1) {
                    const token = auth.getToken(res.rows[0])
                    return response.status(200).send({ status: 1, msg: 'Welcome ' + res.rows[0].email, token: token })
                } else {
                    return response.status(200).send({ status: 0, msg: 'Please, approve your mail address.' })
                }

            } else
                return response.status(200).send({ status: 0, msg: 'Check your password or email.' })
        }
    })



})

var user = { router }

module.exports = user