import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const explore = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔫 Gun Menu</Text>
        <Text style={styles.subtitle}>รายการอุปกรณ์ (UI ตัวอย่างเท่านั้น)</Text>
      </View>

      <View style={styles.menuContainer}>
        {/* Pistol */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🔫</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Pistol — ปืนพก</Text>
            <Text style={styles.itemDescription}>
              ปืนพกขนาดกะทัดรัด เหมาะสำหรับการพกพาและการฝึก (แสดงผลใน UI เท่านั้น)
            </Text>
            <Text style={styles.itemPrice}>฿12,000</Text>
          </View>
        </TouchableOpacity>

        {/* Crossbow */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🏹</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Crossbow — คันศร</Text>
            <Text style={styles.itemDescription}>
              คันศรสำหรับกีฬาและการสาธิต ออกแบบให้จับถนัดมือ (ตัวอย่างเท่านั้น)
            </Text>
            <Text style={styles.itemPrice}>฿8,500</Text>
          </View>
        </TouchableOpacity>

        {/* Knife */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🗡️</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Knife — มีดสนาม</Text>
            <Text style={styles.itemDescription}>
              มีดอเนกประสงค์สำหรับงานสนามและการฝึกฝน (แสดงเพื่อ UI เท่านั้น)
            </Text>
            <Text style={styles.itemPrice}>฿2,200</Text>
          </View>
        </TouchableOpacity>

        {/* Shield */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🛡️</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Shield — โล่ป้องกัน</Text>
            <Text style={styles.itemDescription}>
              โล่น้ำหนักเบาสำหรับการฝึกป้องกัน เหมาะกับการใช้งานแบบสาธิต
            </Text>
            <Text style={styles.itemPrice}>฿3,800</Text>
          </View>
        </TouchableOpacity>

        {/* Scope */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🎯</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Scope — กล้องเล็ง</Text>
            <Text style={styles.itemDescription}>
              กล้องเล็งคุณภาพ ปรับซูมได้ เพิ่มความแม่นยำในการเล็ง (UI เท่านั้น)
            </Text>
            <Text style={styles.itemPrice}>฿4,500</Text>
          </View>
        </TouchableOpacity>

        {/* Accessory */}
        <TouchableOpacity style={styles.menuCard}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🧨</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>Accessory — อุปกรณ์เสริม</Text>
            <Text style={styles.itemDescription}>
              ตัวอย่างอุปกรณ์เสริม เช่น ซอง ปรับแต่ง และอะแดปเตอร์ (ตัวอย่าง)
            </Text>
            <Text style={styles.itemPrice}>฿1,200</Text>
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
    backgroundColor: '#0f3b2a', // deep green header
    padding: 30,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d6ffe8',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bfead0',
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
    backgroundColor: '#072b1f', // dark green block
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 36, // ปรับขนาดให้พอดี
    lineHeight: 40,
    color: '#9ef3c0', // mint icon color
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#072b1f', // deep green text
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#3c4b44', // muted green-gray
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#066941', // accent green
  },
})
