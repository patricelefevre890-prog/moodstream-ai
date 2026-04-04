// ─────────────────────────────────────────────────────────
//  Moodstream.ai — Code Velo (page Wix)
//  Coller dans l'éditeur de code de la page en Dev Mode
// ─────────────────────────────────────────────────────────
//
//  Prérequis :
//  - Composant HTML iFrame sur la page avec ID : #htmlMoodstream
//  - Le contenu de index.html collé dans ce composant
//
// ─────────────────────────────────────────────────────────

$w.onReady(function () {

  // ── 1. Envoyer le secteur au chargement ──────────────────
  // Remplace 'restaurant' par le secteur de ton établissement :
  // restaurant | cafe | hotel | spa | retail | office | bar | gym | culture
  $w('#htmlMoodstream').postMessage({ type: 'sector', id: 'restaurant' });


  // ── 2. Envoyer des coordonnées GPS fixes (optionnel) ─────
  // Décommente et remplace par tes coordonnées :
  /*
  $w('#htmlMoodstream').postMessage({
    type: 'gps',
    lat: 48.8566,
    lon: 2.3522
  });
  */


  // ── 3. Géolocalisation automatique du visiteur (optionnel) ─
  // Décommente pour détecter la position réelle du visiteur :
  /*
  if (typeof navigator !== 'undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      $w('#htmlMoodstream').postMessage({
        type: 'gps',
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      });
    });
  }
  */


  // ── 4. Recevoir les résultats de Moodstream ──────────────
  $w('#htmlMoodstream').onMessage(function(event) {
    var data = event.data;

    // Scène musicale sélectionnée par l'IA
    if (data.type === 'moodstream_scene') {
      console.log('🎵 Scène :', data.scene.name);
      console.log('🎭 Ambiance :', data.scene.mood);
      console.log('🏢 Secteur :', data.scene.sector);
    }

    // Contexte météo détecté
    if (data.type === 'moodstream_ctx') {
      console.log('🌤 Météo :', data.ctx.weather);
      console.log('🌡 Température :', data.ctx.temp + '°C');
      console.log('🕐 Moment :', data.ctx.timeOfDay);
    }
  });

});
