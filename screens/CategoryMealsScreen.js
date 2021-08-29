import React from 'react'
import { View, Text } from 'react-native'

const CategoryMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen
