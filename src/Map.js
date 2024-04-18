import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import us from "./data/states-albers-10m.json";

export default function Map({ guesses = [], isDark }) {
    

    useEffect(() => {
        const height = 610;
        const width = 975;
        const path = d3.geoPath();
        const projection = d3.geoAlbersUsa().scale(1300).translate([width / 2, height / 2]);
        const svg = d3.create('svg')
            .attr('height', height)
            .attr('width', width);

        const fill = isDark ? '#202124' : '#ffffff'; // Set fill color based on dark mode
        const stroke = isDark ? 'white' : 'black'; // Set stroke color based on dark mode

        // eslint-disable-next-line 
        const statesBackground = svg.append('path')
            .attr('fill', fill)
            .attr('stroke', stroke)
            .attr('d', path(topojson.feature(us, us.objects.nation)));

        // eslint-disable-next-line 
        const statesBorders = svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', stroke)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('d', path(topojson.mesh(us, us.objects.states, (a, b) => a !== b)));

        const cityElements = svg.selectAll('g')
            .data(guesses)
            .join('g');

        cityElements.append('g')
            .attr('transform', ({ lng, lat }) => `translate(${projection([lng, lat]).join(",")})`)
            .append('circle')
            .attr('r', 4)
            .attr('fill', 'red');

        const element = document.getElementById("map");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        const div = document.createElement("div");
        div.appendChild(svg.node());
        element.appendChild(div);
    }, [guesses, isDark]);

    return (
        <div>
            <div>
                {/* Button for dark mode */}
            </div>
            <div id={'map'}></div>
        </div>
    )
}
