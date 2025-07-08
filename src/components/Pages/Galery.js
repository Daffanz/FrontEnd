import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Layout from '../Layout/Layout';

const Galery = () => {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.galeryContainer}>
        <Text style={styles.titleatas}>Selamat datang di Halaman Galeri</Text>

        <View style={styles.imageContainer}>
          <Text style={styles.caption}>Eagle</Text>
          <Image source={require('../../assets/eagle.jpeg')} style={styles.image} />
        </View>

        <View style={styles.imageContainer}>
          <Text style={styles.caption}>Pinguin</Text>
          <Image source={require('../../assets/pinguin.jpeg')} style={styles.image} />
        </View>

        <View style={styles.imageContainer}>
          <Text style={styles.caption}>Monyet Tampan</Text>
          <Image source={require('../../assets/Monyet.jpeg')} style={styles.image} />
        </View>

        <View style={styles.imageContainer}>
          <Text style={styles.caption}>Red Panda</Text>
          <Image source={require('../../assets/panda.jpeg')} style={styles.image} />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  galeryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  imageContainer: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  titleatas: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  caption: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: 300,
    height: 400,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default Galery;
