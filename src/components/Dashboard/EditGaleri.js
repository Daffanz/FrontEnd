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

export default function EditGaleri() {
  const [galery, setGalery] = useState([

    {
      id: '1',
      title: 'Eagle',
      image: require('../../assets/eagle.jpeg'),
  
    },
    {
      id: '2',
      title: 'Pinguin',
      image: require('../../assets/pinguin.jpeg'),
      
    },
    {
      id: '3',
      title: 'Monyet Tampan',
      image: require('../../assets/Monyet.jpeg'),
     
    },
    {
      id: '4',
      title: 'RedPanda',
      image: require('../../assets/panda.jpeg'),
     
    },
  ]);

  const navigation = useNavigation();

const [modalVisible, setModalVisible] = useState(false);
  const [selectedGalery, setSelectedGalery] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImage, setEditImage] = useState(null);
  const [isAddMode, setIsAddMode] = useState(false);

  const openEditModal = (item) => {
    setSelectedGalery(item);
    setEditTitle(item.title);
    setEditContent(item.content);
    setEditImage(item.image);
    setModalVisible(true);
  };

  const handleSave = () => {
    const updated = galery.map((a) =>
      a.id === selectedGalery.id
        ? {
            ...a,
            title: editTitle,
            content: editContent,
            image: editImage,
          }
        : a
    );
    setArticles(updated);
    setModalVisible(false);
  };

  const handleDelete = () => {
  const updated = galery.filter((item) => item.id !== selected.id);
  setGalery(updated);
  setModalVisible(false);
  setSelectedGalery(null);
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
      <Text style={styles.headerText}>Dashboard Admin - Galeri</Text>
        <TouchableOpacity style={styles.logoutLogin}>
            <Feather name="log-out" size={20} color="white" onPress={() => navigation.navigate('DashboardHome')} />
            </TouchableOpacity> 
      </View>

      {galery.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.galeryCard}
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
          setSelectedGalery(null);
          setEditTitle('');
          setEditContent('');
          setEditImage(null);
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>+ Tambah Galeri</Text>
      </TouchableOpacity>
     
      <Modal visible={modalVisible} animationType="slide">
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalTitle}>Edit Galeri</Text>
          <TextInput
            value={editTitle}
            onChangeText={setEditTitle}
            placeholder="Nama Hewan"
            style={styles.input}
          />
          
          {editImage && (
            <Image source={editImage} style={styles.imagePreview} />
          )}

          <Button title="Pilih Gambar" onPress={pickImage} />
          <View style={{ marginTop: 20 }}/>
            <Button title="Simpan" onPress={handleSave} />
            <Button
              title="Batal"
              color="red"
              onPress={() => setModalVisible(false)}
            /> 
            
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
  height: 100, // atau 90 juga boleh
  backgroundColor: 'green',
  justifyContent: 'flex-end',
  paddingTop: 30, // ini yang menurunkan konten ke bawah
  paddingBottom: 12,
  paddingHorizontal: 16,
  elevation: 4,
},

 
  headerText: {
    textAlign:'center',
    color: '#fff',
    fontSize: 20,
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
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 400,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    margin: 40,
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
  logoutLogin:{
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
  
});
