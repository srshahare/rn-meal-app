import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderItem = (itemData) => {
    return (
        <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  return (
    <View>
      <StatusBar style="light" backgroundColor={Colors.primaryColor} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
    <Item title="menu" iconName="ios-menu" onPress={() => {}}></Item>
  </HeaderButtons>
}

export default CategoriesScreen;
