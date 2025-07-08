import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';



export default function EditArtikel() {
  const [articles, setArticles] = useState([
    {
      id: '1',
      title: 'Harimau Sumatera',
      image: require('../../assets/Simba.jpeg'),
      content: 'Harimau Sumatera adalah satwa yang terancam punah.',
      Button: 'Hapus',
    },
    {
      id: '2',
      title: 'Gajah Kalimantan',
      image: require('../../assets/Orca.jpeg'),
      content: 'Gajah Kalimantan termasuk spesies langka di Asia Tenggara.',
      Button: 'Hapus,'
    },
    {
      id: '3',
      title: 'Singa, Sang Raja Hutan: Bukan Sekadar Kekuatan Fisik Semata',
      image: require('../../assets/Simba.jpeg'),
      content:
        'Singa hidup dalam pride, kelompok sosial unik yang menunjukkan kerja sama dan struktur kekuasaan.',
      Button:'Hapus',

    },
  ]);

  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImage, setEditImage] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);

  const openEditModal = (item) => {
    setSelectedArticle(item);
    setEditTitle(item.title);
    setEditContent(item.content);
    setEditImage(item.image);
    setIsAddMode(false);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (isAddMode) {
      const newArticle = {
        id: (articles.length + 1).toString(),
        title: editTitle,
        content: editContent,
        image: editImage,
      };
      setArticles([...articles, newArticle]);
    } else {
      const updated = articles.map((a) =>
        a.id === selectedArticle.id
          ? {
              ...a,
              title: editTitle,
              content: editContent,
              image: editImage,
            }
          : a
      );
      setArticles(updated);
    }

    setModalVisible(false);
    setIsAddMode(false);
  };
 
  const handleDelete = () => {
  const updated = articles.filter((item) => item.id !== selectedArticle.id);
  setArticles(updated);
  setModalVisible(false);
  setSelectedArticle(null);
};

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setEditImage({ uri: result.assets[0].uri });
    }
  };

  return (
   <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="green" />
        <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard Admin - Artikel</Text>
          <TouchableOpacity style={styles.logoutLogin}>
              <Feather name="log-out" size={20} color="white" onPress={() => navigation.navigate('DashboardHome')} />
              </TouchableOpacity> 
        </View>

    
      {articles.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.articleCard}
          onPress={() => openEditModal(item)}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.content}>{item.content}</Text>
          {item.source && <Text style={styles.source}>{item.source}</Text>}
          
        </TouchableOpacity>
        
      ))}
        <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setIsAddMode(true);
          setSelectedArticle(null);
          setEditTitle('');
          setEditContent('');
          setEditImage(null);
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>+ Tambah Artikel</Text>
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {isAddMode ? 'Tambah Artikel' : 'Edit Artikel'}
          </Text>
          <TextInput
            value={editTitle}
            onChangeText={setEditTitle}
            placeholder="Judul Artikel"
            style={styles.input}
          />
          <TextInput
            value={editContent}
            onChangeText={setEditContent}
            placeholder="Isi Artikel"
            style={[styles.input, { height: 100 }]}
            multiline
          />
          {editImage && (
            <Image source={editImage} style={styles.imagePreview} />
          )}
          <Button title="Pilih Gambar" onPress={pickImage} />
          <View style={{ marginTop: 20 }}>
  <Button title="Simpan" onPress={handleSave} />
  
    <Button
    title="Batal"
    color="red"
    onPress={() => {
      setModalVisible(false);
      setIsAddMode(false);
    }}
  />
</View>

<View style={{ marginTop: 20 }}>
  {!isAddMode && (
    <Button
      title="Hapus"
      color="red"
      onPress={handleDelete}
    />
  )}
</View>
        </ScrollView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
  height: 100,
  backgroundColor: 'green',
  justifyContent: 'flex-end',
  paddingTop: 30, 
  paddingBottom: 12,
  paddingHorizontal: 16,
  elevation: 4,
  },

  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  logoutLogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addButton: {
    backgroundColor: 'green',
    margin: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  articleCard: {
    backgroundColor: '#f9f9f9',
    margin: 16,
    padding: 16,
    borderRadius: 10,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },

  content: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 22,
    color: '#333',
  },

  source: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#666',
    textAlign: 'right',
  },

  modalContent: {
    padding: 20,
    backgroundColor: '#fff',
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  imagePreview: {
    width: '100%',
    height: 180,
    marginBottom: 12,
    borderRadius: 10,
  },

  
  Button:{
    color:'red',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20,

  },
});
