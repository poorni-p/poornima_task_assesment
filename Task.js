import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web';

const Task =(props) => {
  return (
    <View style={styles.item}>
         <View style={styles.itemLeft}>
            <View style={styles.square}></View>
          <Text>work</Text>
          
          
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
   backgroundColor: 'lightyellow',
   padding: 15,
   borderRadius: 10,
   paddingHorizontal: 300,
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginBottom: 30,
  },
  itemLeft:{
   flexDirection:'row',
   alignItems: 'center',
   flexWrap: 'wrap',
   marginLeft: 40,
  },
  square:{
    width: 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginRight: 15,
  },
  circular:{
    height: 12,
    width: 12,
    borderColor: '#*B0000',
    borderWidth: 2,
    borderRadius: 5,
    borderLeft: 400,

  },
});


export default Task;