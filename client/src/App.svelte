<script>
	export let name;
   
	import * as d3 from 'd3'
	import * as geo from 'd3-geo'
    import * as topojson from 'topojson'
	
	const width = 1400;
    const height = 900;

    const svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

    const projection = d3.geoMercator().scale(140)
        .translate([width / 2, height / 1.4]);
    const path = d3.geoPath(projection);

    const g = svg.append('g');

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        .then(data => {

            const countries = topojson.feature(data, data.objects.countries);
            g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

        });

    </script>
      

<div id='map'>
	<svg width="1200" height="850"> 
	</svg> 
</div>

<style>
	#map {
		background-color: #f2d3cd;
	}
</style>