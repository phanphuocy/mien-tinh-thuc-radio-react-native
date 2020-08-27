import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "../components/Atomics";
import { useSelector } from "react-redux";

const SeriesScreen = ({ route, navigation }) => {
  const seriesId = route.params.slug || "";
  const tracks = useSelector((state) => state.app.tracks);
  return (
    <View style={styles.screen}>
      <FlatList
        data={tracks}
        keyExtractor={(track) => track.id}
        renderItem={({ item }) => (
          <View key={item.slug} style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={4}>{item.excerpt}</Text>
          </View>
        )}
      />
      {/* {tracks.map((el) => (
          <View key={el.slug} style={styles.item}>
            <Text style={styles.title}>{el.title}</Text>
            <Text>{el.excerpt}</Text>
          </View>
        ))} */}
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

export default SeriesScreen;
