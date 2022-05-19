import sinon from 'sinon'
import { expect } from 'chai'
import * as tasckService from '../../src/app/services/task.services'
import * as taskController from '../../src/app/controller/task.controller'

describe('Funções do controller',() => {
  afterEach(sinon.restore)
  describe('FindAll',() => {
    sinon.stub(tasckService,'findAll').resolves([])
    it('testa se o controller tem retorno',async () => {
      const result = await taskController.findAll()
      expect(result).to.be.an('array')
    })
  })
})