import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  url: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const partes = props.url.split("/");
  const id = partes.at(-2);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`;

  //split() , filter() , at()
  return (
    <Pressable
      onPress={() => router.push("/pokemon/" + props.name)}
      style={{
        padding: 100,
        borderWidth: 1,
        alignContent: "center",
      }}
    >
      <Image
        source={{ uri: pokemonImageURL }}
        style={{
          width: 60,
          height: 60,
        }}
      ></Image>
      <Text>{props.name}</Text>
      <Text>{props.url}</Text>
    </Pressable>
  );
}
