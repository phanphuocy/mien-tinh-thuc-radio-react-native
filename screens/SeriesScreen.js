import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
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
            {/* <Text>{JSON.stringify(item.coverArt)}</Text> */}
            <Text style={styles.title} bold>
              Số Thứ {item.trackOrder}: {item.title}
            </Text>
            <Text numberOfLines={4}>{item.excerpt}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  item: {
    marginVertical: 0,
    padding: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 8,
  },
});

export default SeriesScreen;
