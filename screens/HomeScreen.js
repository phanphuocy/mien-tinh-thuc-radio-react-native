import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "../components/Atomics";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const series = useSelector((state) => state.app.series);

  function onSelectedSeries(slug, name, type) {
    navigation.navigate("Series", {
      slug,
      name,
      isMainSeries: type === "main",
    });
  }

  return (
    <View style={styles.screen}>
      <Text>This is Home</Text>
      <FlatList
        data={series}
        keyExtractor={(series) => series.id}
        renderItem={({ item }) => (
          <View key={item.slug} style={styles.item}>
            <TouchableOpacity
              onPress={() => onSelectedSeries(item.slug, item.name, item.type)}
            >
              <Text>
                {item.type === "main" ? "Chuỗi Radio" : "Chuỗi Số Phụ"}
              </Text>
              <Text style={styles.title} serif>
                {item.name}
              </Text>
            </TouchableOpacity>
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
    marginVertical: 8,
    padding: 8,
  },
  title: {
    fontSize: 21,
  },
});

export default HomeScreen;
