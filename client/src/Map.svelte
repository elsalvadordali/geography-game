<script>
    import * as d3 from 'd3'
	import * as topojson from 'topojson'

	export let country
    d3.select('body').attr('style', 'padding: 0; overflow: hidden;')

    const svg = d3.select('body').append('svg').attr('width', window.innerWidth).attr('height', window.innerHeight)
    let g = svg.append('g');
    function d3json() {
    	g.remove()
    	g = svg.append('g')
    	d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
	        .then(data => {
	        	const projection = d3.geoMercator().fitSize([window.innerWidth, window.innerHeight], topojson.feature(data, data.objects.countries));
	            g.selectAll('path').data(topojson.feature(data, data.objects.countries).features).enter()
				.append('path')
				.attr('fill', 'white')
				.attr('stroke', 'black')
				.attr('stroke-width', '1')
				.attr('id', function(d,i) {
                    return d.properties.name
                })
				.attr('d', d3.geoPath(projection))
				.on('click', function() {
					d3.select(this).attr('fill', 'blue')
					country = d3.select(this)
				})

	        });
	}

	d3json()

	document.addEventListener('click', (e) => {
		console.log(e.target)
	})
</script>

<div id='map'>
	
</div>

<style>
	.country {
		position: absolute;
		left: 500px;
		top: 10px;
	}
    #map {
        width: 500px;
        height: 500px;
        border: 2px sold black;
    }
</style>