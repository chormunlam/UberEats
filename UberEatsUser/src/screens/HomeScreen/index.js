import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
//we dont use dummy data now we gonna fetch the data from aws
//import restaurants from "../../../assets/data/restaurants.json";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

export default function HomeScreen() {
  const [restaurants, setrestaurants] = useState([]);

  //long route
  // const fetchRestaurants = async () => {
  //   const results = await DataStore.query(Restaurant);
  //   setrestaurants(results);
  // };

  // useEffect(() => {
  //   fetchRestaurants();
  // }, []);

  //make it short with single line
  useEffect(() => {
    //fetchRestaurants();
    // const results = await DataStore.query(Restaurant);
    // setrestaurants(results);

    //DataStore.query(Restaurant).then((results) => setrestaurants(results));
    DataStore.query(Restaurant).then(setrestaurants);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
