import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {children}
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    padding: 16,
  },
});

export default Layout;