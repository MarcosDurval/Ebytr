import sinon from 'sinon'
import { expect } from 'chai'
import * as taskService from '../../src/app/services/task.services'
import * as taskModel from '../../src/app/models/task.models'

const obj ={
  id:'12345',
 task:'batman lavar louça',
  date: new Date(),
  status:'pendente'
} 

describe('testa o service',() => {
  afterEach(sinon.restore)
  describe('FindAll',() => {
    it('testa se o Service tem retorno',async () => {
      sinon.stub(taskModel,'findAll').resolves([])
      const result = await taskService.findAll()
      expect(result).to.be.an('array')
    })
  })
  describe('FindOne',() => {
    const id = '12345'
    it('testa se o Service tem retorno',async () => {
      sinon.stub(taskModel,'findOne').resolves(obj)
      const result = await taskService.findOne(id)

      expect(result).to.be.an('object')
    })
    it('testa se o Service tem retorno',async () => {
      sinon.stub(taskModel,'findOne').resolves(null)
      try {
         await taskService.findOne(id)

      } catch (error) {
        let err = error as unknown as Error
        expect(err.message).to.be.equal('404/task not found')
      }

    })
  })
  describe('Create',() => {
    let task = 'batman lavar louça'
    it('testa se o Service tem retorno',async () => {
      sinon.stub(taskModel,'create').resolves({} as ItaskId)
      const result = await taskService.create({task})
      expect(result).to.be.an('object')
    })
  })
  // describe('update',() => {
  //   const id = '12345'
  //   it('testa se o Service tem retorno',async () => {
  //     sinon.stub(taskModel,'update').resolves()
  //     sinon.stub(taskService,'findOne').resolves(obj)
  //     const result = await taskService.update(id as ItaskId['id'],obj)
  //     expect(result).to.be
  //   })
  // })
  describe('Delete',() => {
    const id = '12345'
    it('testa se o Service tem retorno',async () => {
      sinon.stub(taskModel,'destroy').resolves()
      const result = await taskService.destroy(id)
      expect(result).to.be
    })
  })
})