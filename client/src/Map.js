import React, { useEffect } from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import us from "./states-albers-10m.json"

export default function Map({guesses = []}) {

    //setting variables for UI to reference later
    const height = 610;
    const width = 975;

    //using geoPath packages from d3
    const path = d3.geoPath();
    const projection = d3.geoAlbersUsa().scale(1300).translate([width / 2, height / 2]);

    const svg = d3.create('svg')
        .attr('height', height)
        .attr('width', width);

    //eslint-disable-next-line
    const statesBackground = svg.append('path')
        .attr('fill', '#000') // state changes to black
        .attr('d', path(topojson.feature(us, us.objects.nation)));

    //eslint-disable-next-line
    const statesBoarders = svg.append('path')
        .attr('fill', 'none')
        .attr('stroke', '#fff') // state line stays as white to visually see each state
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('d', path(topojson.mesh(us, us.objects.states, (a,b) => a !== b)));

    // gets the data passed in to the map function
    const cityElements = svg.selectAll('g')
        .data(guesses)
        .join('g');

    //displays each data point as a circle
    cityElements.append('g')
        .attr('transform', ({ lng, lat}) => `translate(${projection([lng,lat]).join(",")})`)
        .append('circle')
        .attr('r', 3)
        .attr('fill', 'red'); // displays the red dot in a dark / black map

    //what actually renders the map onto the page
    useEffect(() => {
        //gets the map element
        var b = document.getElementById("map");

        //these lines clears the previous map so it can create a new one
        const element = document.getElementById("map");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        //creates a new div for the map and appends it
        var a = document.createElement("div");
        a.appendChild(svg.node());
        b.appendChild(a);
    },[svg]);
   
    return (
        //the div that the map is appended to
        <div id='map'>
        </div>
    )
}