import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const currentRoute = route.name;

  return (
    <View style={styles.container}>
      <NavItem
        label="Edit Galeri"
        isActive={currentRoute === 'Home'}
        onPress={() => navigation.navigate('EditGaleri')}
      />
      <NavItem
        label="Edit Artikel"
        isActive={currentRoute === 'Galery'}
        onPress={() => navigation.navigate('EditArkikel')}
      />
      
    </View>
  );
};

const NavItem = ({ label, isActive, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, isActive && styles.activeButton]}
  >
    <Text style={[styles.text, isActive && styles.activeText]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    alignItems: 'center',
    height:50,
    width:130,
  },
  activeButton: {
    backgroundColor: 'green',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomNav;
