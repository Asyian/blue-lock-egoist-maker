# Blue Lock Character Ranking Game

A web-based game inspired by the Blue Lock anime/manga series. Players create their ideal Blue Lock character by selecting players for different attributes and seeing their total value.

## Features

- 7 categories: Speed, Dribbling, Passing, Shooting, Physique, IQ, and Defense
- Random character generation for each category
- Interactive card selection
- Final value calculation based on selected characters
- Modern, responsive UI

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. Click the "Roll Characters" button to generate random characters for each category
2. Click on a category card to select that character for that category
3. Continue selecting characters for each category
4. Once all categories are filled, your final Blue Lock player value will be displayed
5. Click "Play Again" to start a new game

## Character Images

Place character images in the `public/characters` directory with the following naming convention:
- `isagi.png`
- `rin.png`
- `nagi.png`
- etc.

## Development

- Built with React + TypeScript
- Styled with CSS
- Uses Vite for fast development and building

## License

MIT License 