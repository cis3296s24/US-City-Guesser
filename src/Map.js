import React, { useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import us from "./data/states-albers-10m.json";
import { getDistance } from './calculateDistance';
import { getTargetCity } from './App';

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
        .attr('r', 7)
        .attr('stroke', 'yellow')
        .attr('stroke-width', 2)
        .attr('fill', ({ id }) => {
            const currentGuess = id;
            const targetCity = getTargetCity().id;
            const distance = getDistance(currentGuess, targetCity);
            
            // Adjusted comparison ranges to ensure correct color assignment
            if (distance > 1000) {
                return '#E0E0E0';
            } else if (distance <= 1000 && distance > 750) {
                return '#F8D1CD';
            } else if (distance <= 750 && distance > 500) {
                return '#F0A8AB';
            } else if (distance <= 500 && distance > 250) {
                return '#E97E88';
            } else if (distance <= 250 && distance > 100) {
                return '#DC1840';
            }
            else if(distance === 0) {
                return'green';
            }
            else if(distance<100){
                return 'red';
            }
            
        });


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
