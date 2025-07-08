import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Aplikasi ini bertujuan untuk memperkenalkan berbagai jenis satwa liar dari seluruh dunia.
        </Text>

        <View style={styles.card}>
          <Image source={require('../../assets/Orca.jpeg')} style={styles.image} />
          <Text style={styles.articleTitle}>Fakta Tentang Paus Orca si pemburu</Text>
          <Text style={styles.snippet}>
            Fakta-Fakta Mencengangkan tentang Paus Orca, Sang Predator Puncak Lautan
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Artikel1')}
          >
            <Text style={styles.buttonText}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../../assets/Simba.jpeg')} style={styles.image} />
          <Text style={styles.articleTitle}>Mengapa Singa Dijuluki Si Raja Hutan?</Text>
          <Text style={styles.snippet}>
           Julukan "Raja Hutan" telah melekat erat pada sosok singa selama berabad-abad.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Artikel2')}
          >
            <Text style={styles.buttonText}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image source={require('../../assets/Maps.jpeg')} style={styles.image} />
          <Text style={styles.articleTitle}>Peta Persebaran Satwa Liar</Text>
          <Text style={styles.snippet}>
            Temukan lokasi habitat hewan liar yang unik di berbagai belahan dunia.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Artikel3')}
          >
            <Text style={styles.buttonText}>Selengkapnya</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    alignItems: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    borderRadius: 10,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 10, 
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
  snippet: {
    fontSize: 14,
    marginVertical: 5,
    color: '#555',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;
