import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Layout from '../Layout/Layout';

const About = () => {
  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tentang Kami </Text>
        <Text style={styles.title1}> Tim Satwa Liar </Text>

       

        <Text style={styles.description}>
          Aplikasi Satwa Liar merupakan aplikasi edukatif yang bertujuan untuk memperkenalkan kekayaan satwa liar dari berbagai belahan dunia kepada masyarakat, khususnya generasi muda. 
        </Text>

        <Text style={styles.description}>
          Aplikasi ini pertama kali dikembangkan pada tahun 2025 oleh sekelompok mahasiswa yang peduli terhadap kelestarian satwa dan lingkungan. Berawal dari tugas kuliah, aplikasi ini tumbuh menjadi sarana pembelajaran interaktif yang menyenangkan.
        </Text>

        <Text style={styles.description}>
          Fitur-fitur seperti galeri satwa, peta persebaran, dan artikel edukatif kami hadirkan agar pengguna dapat mengenal lebih dalam kehidupan hewan-hewan luar biasa yang sering terlupakan.
        </Text>

        <Text style={styles.thanks}>Terima kasih telah menggunakan aplikasi Satwa Liar!</Text>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  title1:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
    color: '#333',
  },
  thanks: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
});

export default About;
