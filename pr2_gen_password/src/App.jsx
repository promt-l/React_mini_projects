import { useState, useCallback, useRef } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('eiubgiwgap');
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'QWERTYUIOPlkjhgfdsaZXCVBNMpoiuytrewqASDFGHJKLmnbvcxz';
    if (numbers) {
      str += '0123456789';
    }
    if (characters) {
      str += '!@#$%^&*(){}|,./>[]<?~`';
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">
        🔐 Password Generator
      </h1>

      <div className="bg-yellow-200 shadow-lg rounded-lg p-6 w-full max-w-md flex flex-col items-center gap-4">
        <div className="flex w-full gap-2">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="flex-grow text-black px-3 py-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex items-center w-full gap-3">
          <input
            type="range"
            min={1}
            max={30}
            value={length}
            className="flex-grow accent-blue-500"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="font-medium text-gray-800">Length: {length}</label>
        </div>

        <div className="flex flex-col w-full gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              className="accent-blue-600"
            />
            <span className="text-gray-800">Include Numbers</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)}
              className="accent-blue-600"
            />
            <span className="text-gray-800">Include Special Characters</span>
          </label>
        </div>

        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg w-full transition duration-200"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
