<script>
	import { io } from 'socket.io-client'
	const socket = io('http://localhost:3030', {
		transports: ['websocket'],
		withCredentials: false,
	});
	import Map from './Map.svelte'



	function iClicked(e) {
		console.log('user clicked', e.target)
		// client-side
		socket.emit("hello", "world");
	};
	
	document.addEventListener('click', iClicked)

	function beforeUnload(e) {
		e.preventDefault()
		socket.close()
	}

	socket.on('user-click', (data) => {
		console.log(' got somethig')
	})

	function zoom(e) {
		console.log('zooming in!')
		console.log(e)
	}
	
    </script>
      
	  <svelte:window on:BeforeUnloadEvent={beforeUnload} />
	  <Map />

<style>
	
</style>