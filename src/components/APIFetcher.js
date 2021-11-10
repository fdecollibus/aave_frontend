import React, {useState, useEffect}  from 'react';

export default function ApiFetcher() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
  
    // Nota: l'array deps vuoto [] significa
    // questo useEffect verrà eseguito una volta
    // simile a componentDidMount()
    useEffect(() => {
      fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Nota: è importante gestire gli errori qui
          // invece di un blocco catch() in modo da non fare passare
          // eccezioni da bug reali nei componenti.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  };

