import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>☕ Coffee Menu</Text>
        <Text style={styles.subtitle}>เมนูกาแฟแนะนำ</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* Espresso */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Espresso</Text>
            <Text style={styles.itemDescription}>เข้มข้น หอมกรุ่น ต้นตำรับอิตาเลียน</Text>
            <Text style={styles.itemPrice}>฿45</Text>
          </View>
        </TouchableOpacity>

        {/* Cappuccino */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Cappuccino</Text>
            <Text style={styles.itemDescription}>กาแฟผสมนมฟองนุ่ม สูตรคลาสสิก</Text>
            <Text style={styles.itemPrice}>฿65</Text>
          </View>
        </TouchableOpacity>

        {/* Latte */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Latte</Text>
            <Text style={styles.itemDescription}>นมนุ่มละมุน ผสมเอสเพรสโซ่</Text>
            <Text style={styles.itemPrice}>฿70</Text>
          </View>
        </TouchableOpacity>

        {/* Americano */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Americano</Text>
            <Text style={styles.itemDescription}>เอสเพรสโซ่ผสมน้ำร้อน รสชาติกลมกล่อม</Text>
            <Text style={styles.itemPrice}>฿50</Text>
          </View>
        </TouchableOpacity>

        {/* Mocha */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Mocha</Text>
            <Text style={styles.itemDescription}>กาแฟผสมช็อกโกแลต หวานมัน อร่อย</Text>
            <Text style={styles.itemPrice}>฿75</Text>
          </View>
        </TouchableOpacity>

        {/* Caramel Macchiato */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>☕</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Caramel Macchiato</Text>
            <Text style={styles.itemDescription}>กาแฟราดคาราเมล หวานหอม ครีมมี่</Text>
            <Text style={styles.itemPrice}>฿80</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6F4E37',
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e8d5c4',
  },
  menuContainer: {
    padding: 15,
  },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f0e6dc',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 40,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
})