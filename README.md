# Moodstream.ai

Plateforme de streaming musical ambient intelligent, propulsée par IA.

## Fonctionnement

- Détecte les coordonnées GPS (manuel ou géolocalisation)
- Récupère la météo en temps réel via [Open-Meteo](https://open-meteo.com/) (gratuit, sans clé API)
- Analyse l'heure de la journée
- Prend en compte le type d'établissement (restaurant, spa, hôtel, etc.)
- Sélectionne automatiquement la scène musicale ambiante la plus adaptée via un moteur de scoring IA

## Scènes disponibles

| Scène | Ambiance |
|---|---|
| 🌲 Éveil Forestier | Apaisant & Naturel |
| ☀️ Éclat Solaire | Joyeux & Dynamique |
| 🌧️ Cocon Pluvieux | Intimiste & Doux |
| 🌆 Soirée Lounge | Sophistiqué & Chaud |
| 🌌 Nuit Profonde | Mystérieux & Immersif |
| 🧘 Zen Absolu | Sérénité Totale |
| ⚡ Énergie Urbaine | Dynamique & Motivant |
| 🌫️ Brume Mystique | Onirique & Contemplatif |
| ⛈️ Tempête Électrique | Intense & Dramatique |
| ❄️ Cristal d'Hiver | Pur & Éthéré |

## Secteurs supportés

Restaurant · Café · Hôtel · Spa · Commerce · Bureau · Bar & Lounge · Sport & Gym · Culture

## Intégration Wix

1. Ajouter un composant **HTML iFrame** sur la page Wix
2. Coller le contenu de `index.html` dans "Entrer du code"
3. Donner l'ID `htmlMoodstream` au composant
4. Dans l'éditeur Velo, utiliser le code du fichier `velo-page-code.js`

## Technologies

- **Web Audio API** — génération musicale procédurale (oscillateurs, reverb, LFO)
- **Open-Meteo API** — météo temps réel sans clé
- **Canvas API** — visualiseur FFT en temps réel
- **Geolocation API** — détection GPS navigateur
