import sinon from 'sinon'
import { expect } from 'chai'
import * as taskService from '../../src/app/services/task.services'
import * as taskController from '../../src/app/controller/task.controller'

describe('Funções do controller',() => {
  afterEach(sinon.restore)
  describe('FindAll',() => {
    it('testa se o controller tem retorno',async () => {
      sinon.stub(taskService,'findAll').resolves([])
      const result = await taskController.findAll()
      expect(result).to.be.an('array')
    })
  })
  describe('FindOne',() => {
    const id = '12345'
    it('testa se o controller tem retorno',async () => {
      sinon.stub(taskService,'findOne').resolves({} as unknown as ItaskId)
      const result = await taskController.findOne(id)

      expect(result).to.be.an('object')
    })
  })
  describe('Create',() => {
    let task = 'batman lavar louça'
    it('testa se o controller tem retorno',async () => {
      sinon.stub(taskService,'create').resolves({} as ItaskId)
      const result = await taskController.create({task})
      expect(result).to.be.an('object')
    })
  })
  describe('update',() => {
    const obj ={
      id:'12345',
     task:'batman lavar louça',
      date: new Date(),
      status:'pendente'
    } 
    const id = '12345'
    it('testa se o controller tem retorno',async () => {
      sinon.stub(taskService,'update').resolves()
      const result = await taskController.update(id,obj)
      expect(result).to.be
    })
  })
  describe('Delete',() => {
    const id = '12345'
    it('testa se o controller tem retorno',async () => {
      sinon.stub(taskService,'destroy').resolves()
      const result = await taskController.destroy(id)
      expect(result).to.be
    })
  })
})