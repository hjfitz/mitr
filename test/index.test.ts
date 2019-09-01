import {expect} from 'chai'

import Emitter from '../lib/index'

const emt = new Emitter()
const func: Function = () => console.log('tested')

describe('Emitter#', () => {
	beforeEach(() => {
		emt.off('test')
	})

	it('Should add events', () => {
		emt.on('test', func)
		expect(emt.events['test'].length).to.equal(1)
		expect(emt.events['test'][0]).to.deep.equal(func)
		expect(emt.events['test'][0]).to.be.a('function')
	})

	it('should remove events', () => {
		emt.on('test', func)
		expect(emt.events['test'].length).to.equal(1)
		emt.off('test')
		expect(emt.events['test']).not.to.be.a('function')
		expect(emt.events['test']).to.be.undefined

	})

	it('should emit an event', (done) => {
		emt.on('test', done)
		emt.emit('test')

	})

	it('should emit all events', (done) => {
		let total: number = 0
		const inc: Function = () => total++
		emt.on('test', inc)
		emt.on('test', inc)
		emt.on('test', () => {
			expect(total).to.equal(2)
			done()
		})
		emt.emit('test')
	})

	it('should emit data', (done) => {
		emt.on('not-test', (data: string) => {
			expect(data).to.equal('works')
			done()
		})

		emt.emit('not-test', 'works')
	})
})