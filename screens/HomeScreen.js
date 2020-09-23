import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "../components/Atomics";
import { useSelector } from "react-redux";
import series from "../database/series.json";
import SeriesSlider from "../components/SeriesSlider";

const HomeScreen = ({ navigation }) => {
  // const images = useSelector((state) => state.app.images);

  function onSelectedSeries(slug, name, type) {
    navigation.navigate("Series", {
      slug,
      name,
      isMainSeries: type === "main",
    });
  }

  return (
    <View style={styles.screen}>
      {series.map((serie) => (
        <SeriesSlider id={serie.slug} name={serie.name} />
      ))}
      {/* <FlatList
        data={series}
        keyExtractor={(series) => series.slug}
        renderItem={({ item }) => (
          <View key={item.slug} style={styles.item}>
            <TouchableOpacity
              onPress={() => onSelectedSeries(item.slug, item.name, item.type)}
            >
              <Text>{item.type}</Text>
              <Text style={styles.title} serif>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  item: {
    marginVertical: 8,
    padding: 8,
  },
  title: {
    fontSize: 21,
  },
});

export default HomeScreen;
