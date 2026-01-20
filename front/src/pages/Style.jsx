import React from "react";

function Style() {
  return (
    <div className=" section space-y-8 bg-radial-primary">
      <h1>Titre H1</h1>
      <h2>Titre H2</h2>
      <h3>Titre H3</h3>
      <h4>Titre H4</h4>
      <p>Paragraphe de texte exemple pour tester la couleur et la taille.</p>

      <div className="space-x-4">
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
      </div>

      <div className="card">
        <h3>Carte exemple</h3>
        <p>Contenu d’une carte avec fond, padding et border-radius.</p>
      </div>

      <div className="section">
        <h2>Section test</h2>
        <p>Cette section permet de voir le fond, les couleurs et le spacing.</p>
      </div>
    </div>
  );
}

export default Style;
