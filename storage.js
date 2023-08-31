import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromStorageAndSetter = async (key, defaultValue, setter) => {
  try {
    const s = await AsyncStorage.getItem(key);
    const data = s === null ? defaultValue : s;
    setter(JSON.parse(data));
  } catch (e) {
    console.error(e);
  }
};
