import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';
import { useNavigation } from '@react-navigation/native';

export default function Artikel2() {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Singa, Sang Raja Hutan: Bukan Sekadar Kekuatan Fisik Semata</Text>
        
        <Image
          source={require('../../assets/Simba.jpeg')}
          style={styles.image}
        />
        
        <Text style={styles.paragraph}>
          Memang benar, dalam pertarungan satu lawan satu, harimau, terutama subspesies seperti harimau Siberia dan Bengal, seringkali memiliki keunggulan dalam hal ukuran tubuh, massa otot, dan bahkan gigitan. Mereka adalah pemburu soliter yang andal, mampu melumpuhkan mangsa yang besar dengan kekuatan dan kelincahan mereka sendiri. Lalu, mengapa bukan harimau yang menyandang mahkota "Raja"?
        </Text>

        <Text style={styles.paragraph}>
          Salah satu alasan utama terletak pada struktur sosial singa yang unik. Mereka hidup dalam kelompok keluarga besar yang disebut pride. Kehidupan dalam pride memunculkan dinamika kekuasaan dan kerja sama yang mencerminkan sebuah "kerajaan":
        </Text>

        <Text style={styles.paragraph}>
          Kerja Sama dalam Berburu: Singa betina dalam pride bekerja sama untuk mengepung dan melumpuhkan mangsa yang jauh lebih besar dari ukuran mereka sendiri. Strategi berburu berkelompok ini menunjukkan organisasi dan kekuatan kolektif.
        </Text>

        <Text style={styles.paragraph}>
          Perlindungan Wilayah dan Keturunan: Singa jantan dewasa bertanggung jawab untuk menjaga wilayah kekuasaan pride dari ancaman singa jantan lain. Kehadiran mereka yang gagah dan raungan mereka yang menggelegar menjadi simbol dominasi dan perlindungan bagi seluruh anggota kelompok. Anak-anak singa pun tumbuh dalam lingkungan yang aman di bawah perlindungan pride.
        </Text>

        <Text style={styles.paragraph}>
          Hierarki Sosial: Meskipun tidak seketat sistem kerajaan manusia, dalam pride terdapat hierarki sosial yang jelas, dengan singa jantan dominan memegang kekuasaan tertinggi.
        </Text>

        <Text style={styles.paragraph}>
          Sebagai kesimpulan, gelar "Raja Hutan" bagi singa bukanlah semata-mata tentang siapa yang lebih kuat dalam pertarungan fisik. Lebih dari itu, julukan ini adalah pengakuan atas kombinasi unik dari struktur sosial yang terorganisir, penampilan yang megah, simbolisme budaya yang kuat, dan peran dominannya dalam ekosistem sabana Afrika. Singa memimpin "kerajaannya" dengan cara yang berbeda dari harimau, dan inilah yang membuatnya layak menyandang gelar kehormatan tersebut di mata manusia.
        </Text>


        <Text style={styles.source}>Sumber:National Geographic - Lions</Text>

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
