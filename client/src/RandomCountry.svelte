<script>
import { count } from "d3";


    export let country
    async function fetchCountry() {
        await fetch('http://localhost:3030/country')
        .then(res => res.json())
        .then(data => country = data)

        console.log(country)
    }
</script>

<div class='up'>
<button on:click={fetchCountry}>Get a new country</button>

{#if country}
    <p class='big-flag'>{country.flag}</p>
{/if}
</div>

<style>
    .up {
        z-index: 100;
        position: absolute;
        top: 0;
        left: 0
    }
    .big-flag {
        font-size: 256px;
    }
</style>