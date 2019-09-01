# 🚑 Emt
> Tinier TS Event Emitter

## Install
```zsh
yarn add ${libname}
```

## Usage
```ts
import Emitter from '${libname}'

const emt = new Emitter()

emt.on('complete', (data) => {
	console.log('callbacks are still cool!')
	doSomethingWithData(data);
})

fetch('/api/make/coffee').then((data) => {
	emt.emit('complete', data)
})
```

## API
### Emitter#
#### on(event: string, callback: Function)
Adds an event listener for event, invoking callback

#### off(event: string)
Removes all events of type $event

#### emit(event: string, data?: any)
Emit an event to all $event listeners with optional data