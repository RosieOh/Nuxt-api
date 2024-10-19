// 기본 Express API 설정
const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.send('테스트 입니다!' + Math.random())
})
app.use('/hello', require('./hello'))

module.exports = {
    path: '/api',
    handler: app
}