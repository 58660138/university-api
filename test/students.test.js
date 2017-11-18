
const test = require('tape')
const request = require('supertest')
const app =require('../server')


//supertest  จำลองการสร้าง  request ไปเรัยกใช้งาน express app
test('Frist test case',(t)=>{
  t.equal(1,1)
  t.end()
})

test('GET /students',(t)=>{
  request(app).get('/students') //เหมือนเปิดบราวเชอร์
  .expect(200)

  .then((res)=>{
    let students = res.body
    t.equal(2, students.length)
    let student = students[0]
    t.notEqual(undefined,student.id)
    t.end()
  })
})


test('POST /students',(t) =>{
  request(app).post('/students')
  .send({name:'Weera',email:'ball@outlook.com'})
  .expect(200)
  .then((res)=>{
    let student = res.body
    t.equal('Weera',student.name)
    t.end()
  })
})
