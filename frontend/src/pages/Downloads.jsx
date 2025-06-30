import React from 'react';
import './Downloads.css';

function Downloads() {
  return (
    <main className="downloads-page">
      <h1>Downloads</h1>
      <ul className="downloads-list">
        <li>
          <a href="/downloads/KYC for Individual.pdf" download>KYC Form for Individual</a>
        </li>
        <li>
          <a href="/downloads/KYC for non-individual.pdf" download>KYC Form for Non-Individual</a>
        </li>
        <li>
          <a href="/downloads/UBO-Declaration.pdf" download>UBO Declaration</a>
        </li>
      </ul>
    </main>
  );
}

export default Downloads;