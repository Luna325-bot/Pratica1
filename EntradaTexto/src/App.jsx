import React, { useState } from 'react';

function App() {
    const [miTexto, setMiTexto] = useState('');

    const handleText = (event) => {
        const valor = event.target.value;

        setMiTexto(valor);
    };

    return (
        <div>
            <div>
                Capture su texto
            </div>

            <input value={miTexto} onChange={handleText} />

            <h3>Su Texto</h3>
            <p>
                {miTexto}
            </p>
        </div>
    );
}

export default App;
