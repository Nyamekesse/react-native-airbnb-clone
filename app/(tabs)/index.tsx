import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import listingsData from "@/assets/data/airbnb-listings.json";
import ExploreHeader from "@/components/ExploreHeader";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import ListingsMap from "@/components/ListingsMap";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);
  const geoItems = useMemo(() => listingsDataGeo, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={geoItems} />
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  );
};

export default Page;
