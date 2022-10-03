import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const FeedTopMenuBar = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>What do you want to cook today?</Text>
      <ScrollView
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Seafood</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FeedTopMenuBar;

const styles = StyleSheet.create({
  headingContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  menuContainer: {
    height: 50,
    flexDirection: 'row',
  },
  menuItem: {
    height: 40,
    backgroundColor: '#93c656',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  menuItemText: {
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
});
