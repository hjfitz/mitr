interface Events {
	[key: string]: Function[]
}
export default class {
	events: Events = {}

	on = (event: string, action: Function): void => {
		if (typeof this.events[event] === 'undefined')
			this.events[event] = []
		this.events[event].push(action)
	}

	off = (event: string): void => {
		delete this.events[event]
	}

	emit = (event: string, data?: any): void => {
		if (typeof this.events[event] === 'undefined')
			return
		this.events[event].forEach(func => func(data))
	}
}