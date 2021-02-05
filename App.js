import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import calc from './helper/algorithm';


const numpad = [
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', 'x'],
  ['.', '0', '=', '/']
]


export default function App() {

  const [expression, setExpression] = useState('')
  const [result, setResult] = useState(0)  

  const btnPress = function(c){
    console.log(c)
    switch (c) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        setExpression(expression + c)
        break;
      case '+':
      case '-':
      case 'x':
      case '/':
        if (!['+', '-', 'x', '/'].includes(expression[expression.length]))
          setExpression(expression+c)
        break;
      case '=':
        setResult(calc(expression))
      default:
        break;
    }
  }

  const numpadView = numpad.map((row, i) => 
    <View key={i} style={s.row}>
      {
        row.map(el =>
          <TouchableOpacity 
            key={el}
            style={s.btn_wrapper}  
            onPress={() => btnPress(el)}
          >
            <Text style={s.btn}>{el}</Text>
          </TouchableOpacity>
        )
      }
    </View>  
  )
  
  return (
    <View style={s.container}>
      <Text style={s.title}>Dever Calculator</Text>
      <View style={s.display_box}>
        <Text style={s.expression}>{expression}</Text>
        <Text style={s.result}>{result}</Text>        
      </View>
      <View style={s.wrapper}>
        {numpadView}
      </View>
      <StatusBar  />
    </View>
  );
}

const s = StyleSheet.create({
  container: {    
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    backgroundColor: '#f2a154',
    lineHeight: 70,
    height: 70,
    textAlign: 'center',
    fontSize: 35,
  },
  display_box: { 
    flex: 1,   
    padding: 10,    
    backgroundColor: '#eee',
    justifyContent: 'space-evenly'
  },
  expression: {
    fontSize: 30,
    fontFamily: 'monospace'
  },
  result: {    
    fontSize: 40,
    textAlign: 'right'
  },
  wrapper: {
    backgroundColor: '#f2a154',
    flex: 2
  },
  row: {
    flex: 1,    
    display: 'flex',
    flexDirection: 'row'
  },
  btn_wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'    
  },
  btn: {
    fontSize: 30,    
  }
});
