<script>
	import { io } from 'socket.io-client'
	/*
	const socket = io('localhost:3030', {
		transports: ['websocket'],
		withCredentials: false,
	});
	*/
	import Map from './Map.svelte'
	import RandomCountry from './RandomCountry.svelte';

	let clickedCountry
	let randomCountry

	$: console.log(clickedCountry)
/*

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
		console.log(' got something')
	})
	*/
	function zoom(e) {
		console.log('zooming in!')
		console.log(e)
	}
	/*
	<svelte:window on:BeforeUnloadEvent={beforeUnload} />
*/
    </script>
      
	<Map country={clickedCountry} />
	{#if !randomCountry}
		<RandomCountry country={randomCountry}/>
	{/if}
<style>
	
</style>