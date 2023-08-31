import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { theme } from './color';
import { useState } from 'react';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (e) => setText(e);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? '#fff' : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: !working ? '#fff' : theme.grey }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onChangeText={onChangeText}
          placeholder={working ? 'Add a To do' : 'Where do you want to go?'}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 44,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    fontSize: 18,
    marginTop: 20,
  },
});
