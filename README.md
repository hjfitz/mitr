# 🎩 mitr
> Tinier event emitter

## Install
```zsh
yarn add mitr
```

## Usage
```ts
import Emitter from 'mitr'

const mitr = new Emitter()

mitr.on('complete', (data) => {
	console.log('callbacks are still cool!')
	doSomethingWithData(data);
})

fetch('/api/make/coffee').then((data) => {
	mitr.emit('complete', data)
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

## Inspiration
[mitt](https://github.com/developit/mitt) by [developit](https://github.com/developit/)