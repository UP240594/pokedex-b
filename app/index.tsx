import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Button, ScrollView, Text } from "react-native";
import PokemonCard from "../components/PokemonCard";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [results, setResults] = useState<Pokemon[]>([]);

  useEffect(() => {
    //Siempre se va a reproducir cuando el componente entre por primera vez
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      }); //Esto es un request
      console.log(response);
      const data = await response.json();
      setResults(data.results);
      console.log(data);
    } catch (error) {
      Alert.alert(`Ocurrio un error al traer la api ${error}`);
      window.alert(`Ocurrio un error al traer la api ${error}`);
    }

    //guarda esto en memoria
  }; //esto es una funcion flecha,
  return (
    <ScrollView>
      <Button
        title="newscreen"
        onPress={() => router.push("/newscreen")}
      ></Button>
      <Button title="pokemon" onPress={() => router.push("/pokemon")}></Button>
      <Button
        title="Dynamic route"
        onPress={() => router.push("/pokemon/[name]")}
      ></Button>

      {results.map((pokemon) => (
        // <Text key={pokemon.name}> {pokemon.name} </Text>
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        ></PokemonCard>
      ))}
      <Text>Oliolioliolio</Text>
    </ScrollView>
  );
}
