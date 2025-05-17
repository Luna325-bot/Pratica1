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
                Escriba su Texto
            </div>

            <input value={miTexto} onChange={handleText} />

            <h3>Texto Escrito</h3>
            <p>
                {miTexto}
            </p>
        </div>
    );
}

export default App;
