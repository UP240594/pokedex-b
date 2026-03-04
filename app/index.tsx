import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    //Siempre se va a reproducir cuando el componente entre por primera vez
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(URL, {
      method: "GET",
    }); //Esto es un request
    console.log(response);
    const data = await response.json();
    setResults(data.results);
    console.log(data);
    //guarda esto en memoria
  }; //esto es una funcion flecha,
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {results.map((pokemon) => (
        <Text key={pokemon.name}> {pokemon.name} </Text>
      ))}
      <Text>Oliolioliolio</Text>
    </View>
  );
}
