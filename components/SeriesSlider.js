import React, { useRef } from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";
import { Text } from "../components/Atomics";
import { useSelector } from "react-redux";

const SeriesSlider = ({ id, name }) => {
  const sliderRef = useRef(null);

  const tracks = useSelector((state) =>
    state.app.tracks.filter((track) => track.series == id)
  );
  const images = useSelector((state) => state.app.images);
  console.log(tracks);

  return (
    <View>
      <Text>{name}</Text>
      <FlatList
        ref={sliderRef}
        data={tracks}
        keyExtractor={(track) => track.id}
        horizontal
        onEndReached={() => console.log(sliderRef.current)}
        renderItem={({ item }) => (
          <SliderItem
            key={item.id}
            item={item}
            imageUri={"https:" + images[item.coverArt.sys.id].url}
          />
        )}
      />
    </View>
  );
};

SeriesSlider.scrollToEnd = () => {
  console.log("Scroll to end");
};

const SliderItem = ({ item, imageUri }) => (
  <View style={itemStyle.container}>
    <Image
      source={{ uri: imageUri }}
      style={{
        width: "100%",
        aspectRatio: 1.69,
        resizeMode: "contain",
      }}
    />
    <Text>{item.title}</Text>
  </View>
);

const itemStyle = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
});

export default SeriesSlider;
