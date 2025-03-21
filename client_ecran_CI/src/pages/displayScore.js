import '../css/display.css'
import React, { useState, useRef } from "react";
import { useEffect } from "react";

function DisplayScore() {
  async function fetchScores() {
    let response = await fetch("http://10.66.151.182:5000/api/score");
    let data = await response.json();

    for (let id in data) {
        let counter = document.getElementById(id + '-counter');
        if (counter) {
            counter.textContent = data[id];  // Set the counter value to the fetched score
        }
    }
}

useEffect(() => {
  fetchScores(); // Initial fetch on page load
  setInterval(fetchScores, 2000); // Poll every 5 seconds
}, []);

  return (
    <div>
      <main id="mainScore">
          <div id="toges">
              <span>Togé.e.s</span>
              <div class="counter" id="toges-counter">Error</div>
          </div> 
          <div id="non-toges">
              <span>Non-togé.e.s</span>
              <div class="counter" id="non-toges-counter">Error</div>
          </div> 
      </main>
    </div>
  );
}

export default DisplayScore;
