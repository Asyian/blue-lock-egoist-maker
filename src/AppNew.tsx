import { useState } from 'react';
import './App.css';

interface Character {
  name: string;
  image: string;
  stats: {
    speed: number;
    dribbling: number;
    control: number;
    passing: number;
    shooting: number;
    physique: number;
    iq: number;
    defense: number;
  };
}

interface Category {
  name: string;
  value: number | null;
  character: Character | null;
  isLocked: boolean;
}

const CATEGORIES = [
  'Speed',
  'Dribbling',
  'Control',
  'Passing',
  'Shooting',
  'Physique',
  'IQ',
  'Defense'
] as const;

// Sample characters data
const SAMPLE_CHARACTERS: Character[] = [
  {
    name: "Isagi Yoichi",
    image: "/characters/isagi.png",
    stats: {
      speed: 77,
      dribbling: 84,
      control: 87,
      passing: 85,
      shooting: 92,
      physique: 71,
      iq: 94,
      defense: 77
    }
  },
  {
    name: "Rin Itoshi",
    image: "/characters/rin.png",
    stats: {
      speed: 87,
      dribbling: 92,
      control: 88,
      passing: 76,
      shooting: 95,
      physique: 81,
      iq: 87,
      defense: 63
    }
  },
  {
    name: "Seishiro Nagi",
    image: "/characters/nagi.png",
    stats: {
      speed: 82,
      dribbling: 90,
      control: 97,
      passing: 80,
      shooting: 88,
      physique: 77,
      iq: 66,
      defense: 73
    }
  },
  {
    name: "Bachira Meguru",
    image: "/characters/bachira.png",
    stats: {
      speed: 84,
      dribbling: 95,
      control: 89,
      passing: 85,
      shooting: 83,
      physique: 69,
      iq: 79,
      defense: 62
    }
  },
  {
    name: "Rensuke Kunigami",
    image: "/characters/kunigami.png",
    stats: {
      speed: 85,
      dribbling: 71,
      control: 73,
      passing: 65,
      shooting: 95,
      physique: 94,
      iq: 81,
      defense: 75
    }
  },
  {
    name: "Hyoma Chigiri",
    image: "/characters/chigiri.png",
    stats: {
      speed: 98,
      dribbling: 86,
      control: 81,
      passing: 82,
      shooting: 84,
      physique: 54,
      iq: 77,
      defense: 43
    }
  },
  {
    name: "Sae Itoshi",
    image: "/characters/sae.png",
    stats: {
      speed: 88,
      dribbling: 93,
      control: 95,
      passing: 98,
      shooting: 87,
      physique: 81,
      iq: 95,
      defense: 83
    }
  },
  {
    name: "Shidou Ryusei",
    image: "/characters/shidou.png",
    stats: {
      speed: 90,
      dribbling: 80,
      control: 78,
      passing: 71,
      shooting: 95,
      physique: 92,
      iq: 89,
      defense: 64
    }
  },
  {
    name: "Oliver Aiku",
    image: "/characters/aiku.png",
    stats: {
      speed: 81,
      dribbling: 71,
      control: 75,
      passing: 81,
      shooting: 76,
      physique: 90,
      iq: 91,
      defense: 98
    }
  },
  {
    name: "Michael Kaiser",
    image: "/characters/kaiser.gif",
    stats: {
      speed: 91,
      dribbling: 86,
      control: 85,
      passing: 81,
      shooting: 98,
      physique: 85,
      iq: 91,
      defense: 74
    }
  },
  {
    name: "Alexis Ness",
    image: "/characters/ness.png",
    stats: {
      speed: 76,
      dribbling: 80,
      control: 90,
      passing: 90,
      shooting: 85,
      physique: 75,
      iq: 90,
      defense: 70
    }
  },
  {
    name: "Gin Gagamaru",
    image: "/characters/gagamaru.png",
    stats: {
      speed: 87,
      dribbling: 79,
      control: 81,
      passing: 89,
      shooting: 80,
      physique: 91,
      iq: 82,
      defense: 93
    }
  },
  {
    name: "Gurumi Igarashi",
    image: "/characters/igarashi.png",
    stats: {
      speed: 70,
      dribbling: 65,
      control: 60,
      passing: 60,
      shooting: 65,
      physique: 75,
      iq: 75,
      defense: 70
    }
  },
  {
    name: "Jingo Raichi",
    image: "/characters/raichi.png",
    stats: {
      speed: 77,
      dribbling: 79,
      control: 76,
      passing: 71,
      shooting: 82,
      physique: 90,
      iq: 74,
      defense: 90
    }
  },
  {
    name: "Ikki Niko",
    image: "/characters/niko.png",
    stats: {
      speed: 78,
      dribbling: 76,
      control: 71,
      passing: 88,
      shooting: 67,
      physique: 84,
      iq: 85,
      defense: 80
    }
  },
  {
    name: "Shoei Barou",
    image: "/characters/barou.png",
    stats: {
      speed: 80,
      dribbling: 88,
      control: 75,
      passing: 61,
      shooting: 96,
      physique: 92,
      iq: 77,
      defense: 68
    }
  },
  {
    name: "Tsurugi Zantetsu",
    image: "/characters/zantetsu.png",
    stats: {
      speed: 92,
      dribbling: 87,
      control: 81,
      passing: 72,
      shooting: 84,
      physique: 81,
      iq: 71,
      defense: 68
    }
  },
  {
    name: "Mikage Reo",
    image: "/characters/reo.png",
    stats: {
      speed: 81,
      dribbling: 83,
      control: 82,
      passing: 89,
      shooting: 82,
      physique: 79,
      iq: 85,
      defense: 86
    }
  },
  {
    name: "Jyubei Aryu",
    image: "/characters/aryu.png",
    stats: {
      speed: 74,
      dribbling: 69,
      control: 65,
      passing: 68,
      shooting: 79,
      physique: 90,
      iq: 71,
      defense: 90
    }
  },
  {
    name: "Aoshi Tokimitsu",
    image: "/characters/tokimitsu.png",
    stats: {
      speed: 82,
      dribbling: 74,
      control: 72,
      passing: 72,
      shooting: 73,
      physique: 91,
      iq: 69,
      defense: 75
    }
  },
  {
    name: "Eita Otoya",
    image: "/characters/otoya.png",
    stats: {
      speed: 91,
      dribbling: 84,
      control: 80,
      passing: 79,
      shooting: 83,
      physique: 73,
      iq: 80,
      defense: 66
    }
  },
  {
    name: "Jin Kiyora",
    image: "/characters/kiyora.png",
    stats: {
      speed: 84,
      dribbling: 85,
      control: 80,
      passing: 82,
      shooting: 89,
      physique: 78,
      iq: 78,
      defense: 78
    }
  },
  {
    name: "Kenyu Yukimiya",
    image: "/characters/yukimiya.png",
    stats: {
      speed: 89,
      dribbling: 91,
      control: 88,
      passing: 79,
      shooting: 87,
      physique: 75,
      iq: 76,
      defense: 76
    }
  },
  {
    name: "Nijiro Nanase",
    image: "/characters/nanase.png",
    stats: {
      speed: 82,
      dribbling: 81,
      control: 80,
      passing: 80,
      shooting: 78,
      physique: 78,
      iq: 73,
      defense: 77
    }
  },
  {
    name: "Ranze Kurona",
    image: "/characters/kurona.png",
    stats: {
      speed: 95,
      dribbling: 84,
      control: 75,
      passing: 83,
      shooting: 72,
      physique: 75,
      iq: 80,
      defense: 68
    }
  },
  {
    name: "Tabito Karasu",
    image: "/characters/karasu.png",
    stats: {
      speed: 82,
      dribbling: 82,
      control: 80,
      passing: 85,
      shooting: 79,
      physique: 88,
      iq: 83,
      defense: 79
    }
  },
  {
    name: "Yo Hiori",
    image: "/characters/hiori.png",
    stats: {
      speed: 81,
      dribbling: 90,
      control: 87,
      passing: 97,
      shooting: 80,
      physique: 77,
      iq: 83,
      defense: 83
    }
  },
  {
    name: "Adam Blake",
    image: "/characters/blake.png",
    stats: {
      speed: 93,
      dribbling: 95,
      control: 85,
      passing: 83,
      shooting: 95,
      physique: 89,
      iq: 84,
      defense: 78
    }
  },
  {
    name: "Dada Silva",
    image: "/characters/silva.png",
    stats: {
      speed: 95,
      dribbling: 92,
      control: 89,
      passing: 82,
      shooting: 94,
      physique: 96,
      iq: 80,
      defense: 99
    }
  },
  {
    name: "Miroku Darai",
    image: "/characters/darai.png",
    stats: {
      speed: 75,
      dribbling: 76,
      control: 73,
      passing: 76,
      shooting: 64,
      physique: 82,
      iq: 88,
      defense: 88
    }
  },
  {
    name: "Shuto Sendou",
    image: "/characters/sendou.png",
    stats: {
      speed: 89,
      dribbling: 75,
      control: 73,
      passing: 76,
      shooting: 67,
      physique: 82,
      iq: 71,
      defense: 84
    }
  },
  {
    name: "Teppei Neru",
    image: "/characters/naru.png",
    stats: {
      speed: 86,
      dribbling: 71,
      control: 69,
      passing: 73,
      shooting: 63,
      physique: 81,
      iq: 72,
      defense: 88
    }
  },
  {
    name: "Kazuma Nio",
    image: "/characters/nio.png",
    stats: {
      speed: 81,
      dribbling: 73,
      control: 72,
      passing: 74,
      shooting: 71,
      physique: 92,
      iq: 74,
      defense: 91
    }
  },
  {
    name: "Agi",
    image: "/characters/agi.png",
    stats: {
      speed: 87,
      dribbling: 84,
      control: 82,
      passing: 80,
      shooting: 88,
      physique: 89,
      iq: 83,
      defense: 67
    }
  },
  {
    name: "Don Lorenzo",
    image: "/characters/lorenzo.png",
    stats: {
      speed: 83,
      dribbling: 93,
      control: 85,
      passing: 87,
      shooting: 82,
      physique: 85,
      iq: 85,
      defense: 99
    }
  },
  {
    name: "Charles Chevalier",
    image: "/characters/chevalier.png",
    stats: {
      speed: 85,
      dribbling: 89,
      control: 86,
      passing: 98,
      shooting: 89,
      physique: 80,
      iq: 81,
      defense: 78
    }
  }
];

function App() {
  // Initialize state with all categories unlocked and no characters
  const [categories, setCategories] = useState<Category[]>(
    CATEGORIES.map(name => ({ name, value: null, character: null, isLocked: false }))
  );
  const [gameComplete, setGameComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Function to get a random character
  const getRandomCharacter = () => {
    return SAMPLE_CHARACTERS[Math.floor(Math.random() * SAMPLE_CHARACTERS.length)];
  };

  // Function to roll new characters for all unlocked categories
  const rollCharacters = () => {
    setGameStarted(true);
    
    // Create a new categories array
    const newCategories = [...categories];
    
    // For each category
    for (let i = 0; i < newCategories.length; i++) {
      // Only roll for unlocked categories
      if (!newCategories[i].isLocked) {
        const randomChar = getRandomCharacter();
        newCategories[i] = {
          ...newCategories[i],
          character: randomChar,
          value: randomChar.stats[newCategories[i].name.toLowerCase() as keyof typeof randomChar.stats],
          isLocked: false
        };
      }
      // Locked categories remain unchanged
    }
    
    setCategories(newCategories);
  };

  // Function to select and lock a category
  const selectCategory = (index: number) => {
    // Don't allow selection of already locked categories
    if (categories[index].isLocked) return;
    
    // Create a new categories array
    const newCategories = [...categories];
    
    // Lock the selected category
    newCategories[index] = {
      ...newCategories[index],
      isLocked: true
    };
    
    // Update the categories state
    setCategories(newCategories);
    
    // Check if all categories are now locked
    const allLocked = newCategories.every(cat => cat.isLocked);
    
    if (allLocked) {
      // If all categories are locked, end the game
      setGameComplete(true);
    } else {
      // Otherwise, roll new characters for remaining categories
      setTimeout(() => {
        rollCharacters();
      }, 500);
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setCategories(CATEGORIES.map(name => ({ name, value: null, character: null, isLocked: false })));
    setGameComplete(false);
    setGameStarted(false);
  };

  // Calculate total value when game is complete
  const calculateTotalValue = () => {
    const total = categories.reduce((sum, cat) => sum + (cat.value || 0), 0);
    return Math.round(total / categories.length * 100000); // Convert to monetary value
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Blue Lock Character Ranking Game</h1>
        <button className="restart-button" onClick={restartGame}>
          Restart Game
        </button>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div 
            key={category.name}
            className={`category-card ${category.isLocked ? 'locked' : ''}`}
            onClick={() => !category.isLocked && selectCategory(index)}
          >
            <h2>{category.name}</h2>
            {category.character && (
              <>
                <img src={category.character.image} alt={category.character.name} />
                <p>{category.character.name}</p>
                <p>Value: {category.value}</p>
                {category.isLocked && <p className="locked-text">Locked!</p>}
              </>
            )}
          </div>
        ))}
      </div>

      {!gameComplete && (
        <>
          <button onClick={rollCharacters} className="roll-button">
            {gameStarted ? 'Roll Again' : 'Roll Characters'}
          </button>
          {categories.some(cat => cat.isLocked) && (
            <p className="instruction-text">
              Select another category to continue. Your previous selection is locked in.
            </p>
          )}
        </>
      )}

      {gameComplete && (
        <div className="game-complete">
          <h2>Game Complete!</h2>
          <p>Your Blue Lock player is worth: ${calculateTotalValue().toLocaleString()}</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App; 