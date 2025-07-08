import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


const HeaderLogin = () => {

    const navigation = useNavigation();
  return (
     <View style={styles.container}>
      <Text style={styles.title}>Login Admin</Text>

        <TouchableOpacity style={styles.logoutLogin}>
            <Feather name="log-out" size={20} color="white" onPress={() => navigation.navigate('Home')} />
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'green',
    paddingHorizontal: 16,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
  },
 logoutLogin:{
    flexDirection: 'row',
    alignItems: 'center',
},
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderLogin