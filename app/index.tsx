import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    //Siempre se va a reproducir cuando el componente entre por primera vez
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response = await fetch(URL, {
      method: "GET",
    }); //Esto es un request
    console.log(response);
    const data = await response.json();
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
      <Text>Oliolioliolio</Text>
    </View>
  );
}
