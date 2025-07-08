import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Layout from '../Layout/Layout';
import { useNavigation } from '@react-navigation/native';

export default function Artikel1() {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fakta-Fakta Mencengangkan tentang Paus Orca, Sang Predator Puncak Lautan</Text>
        
        <Image
          source={require('../../assets/Orca.jpeg')}
          style={styles.image}
        />
        
        <Text style={styles.paragraph}>
        Paus orca, atau yang sering dijuluki "paus pembunuh," adalah mamalia laut yang menakjubkan dan mendominasi puncak rantai makanan di lautan seluruh dunia. Meskipun namanya mengandung kata "paus," orca sebenarnya adalah spesies terbesar dalam keluarga lumba-lumba laut (Oceanic Dolphin). Kecerdasan mereka yang luar biasa, kemampuan berburu yang kompleks, dan struktur sosial yang unik menjadikan mereka makhluk yang sangat menarik untuk dipelajari.
        </Text>

        <Text style={styles.paragraph}>
          1. Bukan Sekadar Hitam dan Putih: Warna hitam dan putih orca yang mencolok bukan hanya sekadar pola. Warna kontras ini berfungsi sebagai kamuflase countershading. Dari atas, punggung hitam mereka menyatu dengan kedalaman laut yang gelap, sementara dari bawah, perut putih mereka sulit dibedakan dengan permukaan laut yang terang.
        </Text>

        <Text style={styles.paragraph}>
          2. Predator Puncak yang Cerdas: Orca dikenal sebagai predator yang sangat efektif dan serbaguna. Mereka memangsa berbagai jenis hewan laut, mulai dari ikan kecil, anjing laut, singa laut, hingga paus yang lebih besar. Teknik berburu mereka sangat bervariasi dan menunjukkan tingkat kecerdasan sosial yang tinggi, seperti bekerja sama dalam kelompok untuk mengepung mangsa atau bahkan menciptakan gelombang untuk menjatuhkan anjing laut dari bongkahan es.
        </Text>

        <Text style={styles.paragraph}>
          3. Dialek dan Budaya yang Berbeda: Hal yang sangat menarik tentang orca adalah adanya perbedaan "dialek" dan perilaku berburu antar kelompok (pod) yang berbeda. Setiap pod memiliki serangkaian suara unik yang mereka gunakan untuk berkomunikasi. Selain itu, teknik berburu dan bahkan jenis mangsa yang disukai dapat berbeda secara signifikan antar pod, menunjukkan adanya semacam "budaya" yang diturunkan dari generasi ke generasi.
        </Text>

        <Text style={styles.paragraph}>
          4. Struktur Sosial Matrilineal: Kelompok orca biasanya dipimpin oleh betina tertua dan terdiri dari anak-anaknya serta keturunan betina lainnya. Ikatan keluarga ini sangat kuat dan dapat bertahan seumur hidup. Anak jantan akan tetap berada dalam kelompok ibunya meskipun mereka sudah dewasa.
        </Text>

        <Text style={styles.paragraph}>
          Paus orca adalah bukti nyata keajaiban dan kompleksitas kehidupan di lautan. Memahami lebih dalam tentang mereka membantu kita menghargai peran penting mereka dalam ekosistem laut dan mendorong upaya konservasi untuk melindungi mereka di masa depan.
        </Text>

        <Text style={styles.source}>Sumber: National Oceanic and Atmospheric Administration (NOAA) Fisheries</Text>

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
