import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';
import { useNavigation } from '@react-navigation/native';

export default function Artikel3() {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Peta Persebaran Satwa Liar</Text>
        
        <Image
          source={require('../../assets/Maps.jpeg')}
          style={styles.image}
        />
        
        <Text style={styles.paragraph}>
          Satwa liar tersebar di seluruh dunia dengan karakteristik habitat yang berbeda-beda. Setiap wilayah memiliki ekosistem yang mendukung kehidupan hewan-hewan tertentu, mulai dari hutan hujan tropis, padang rumput, gurun, hingga wilayah kutub.
        </Text>

        <Text style={styles.paragraph}>
          Di Indonesia sendiri, kita memiliki kekayaan hayati luar biasa yang tersebar di berbagai pulau. Misalnya, orangutan hanya ditemukan di Kalimantan dan Sumatera. Komodo, sebagai reptil purba yang masih hidup hingga kini, hanya ditemukan di Nusa Tenggara Timur.
        </Text>

        <Text style={styles.paragraph}>
          Penting bagi kita untuk mengetahui dan menjaga keseimbangan ekosistem ini. Mengetahui persebaran satwa liar dapat membantu dalam upaya konservasi dan edukasi masyarakat.
        </Text>

        <Text style={styles.source}>Sumber: WWF, National Geographic</Text>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Kembali ke Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    color: '#333',
  },
  source: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 20,
    textAlign: 'right',
  },

  homeButtonText: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    textAlign:'center',
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
