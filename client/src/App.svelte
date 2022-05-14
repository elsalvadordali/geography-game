<script>
	export let name;
   
	import * as d3 from 'd3'
	import * as geo from 'd3-geo'
    import * as topojson from 'topojson'

    d3.select('body').attr('style', 'padding: 0; overflow: hidden;')

    const svg = d3.select('body').append('svg').attr('width', window.innerWidth).attr('height', window.innerHeight);
    let g = svg.append('g');

    d3.select(window).on('resize', () => (svg.attr('width', window.innerWidth).attr('height', window.innerHeight), d3json()))

    function d3json() {
    	g.remove()
    	g = svg.append('g')
    	d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
	        .then(data => {
	        	const projection = d3.geoMercator().fitSize([window.innerWidth, window.innerHeight], topojson.feature(data, data.objects.countries));

	            g.selectAll('path').data(topojson.feature(data, data.objects.countries).features).enter().append('path').attr('fill', 'none').attr('stroke', 'black').attr('stroke-width', '1').attr('class', 'country').attr('d', d3.geoPath(projection));

	        });
	}
	d3json()

    </script>
      

<style>
	#map {
		background-color: #f2d3cd;
	}
</style>