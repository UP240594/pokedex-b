import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, Text } from "react-native";

interface Pokemones {
  id: number;
  name: string;
  url: string;
}

export default function PokemonData(props: Pokemones) {
  const params = useLocalSearchParams();
  const [results, setResults] = useState<Pokemones[]>([]);
  const partes = props.url.split("/");
  const id = partes.at(-2);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;

  useEffect(() => {
    //Siempre se va a reproducir cuando el componente entre por primera vez
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const response = await fetch(URL, {
        method: "GET",
      }); //Esto es un request
      console.log(response);
      const data = await response.json();
      setResults(results);
      console.log(data);
    } catch (error) {
      Alert.alert(`Ocurrio un error al traer la api ${error}`);
      window.alert(`Ocurrio un error al traer la api ${error}`);
    }

    //guarda esto en memoria
  }; //esto es una funcion flecha,

  return (
    <ScrollView>
      <Text>
        <Image
          source={{ uri: pokemonImageURL }}
          style={{
            width: 60,
            height: 60,
          }}
        ></Image>
        {params.name}
        {params.url}
        {JSON.stringify(results, null, 2)}
      </Text>
      <Text>Oliolioliolio</Text>
    </ScrollView>
  );
}
