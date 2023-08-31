## Pressable

- New: Pressable
- More powerful than TouchableOpacity
- Similar to "disabled" and "hitSlap"

## TouchableWithoutFeedback

- Use this when you do not want to receive any response, even upon touch.

## TextInput

- multiline
- onChangeText
- keyboardType : "number-pad", "email-address"
- returnKeyType : "send"
- onSubmitEdditing

## Object.assign

```
const target = {}; // 대상 객체
const source1 = { a: 1, b: 2 }; // 첫 번째 원본 객체
const source2 = { b: 3, c: 4 }; // 두 번째 원본 객체

Object.assign(target, source1, source2);

console.log(target);
// 결과: { a: 1, b: 3, c: 4 }
```

## How to convert an object into an array

```
Object.keys(x).map(key=>x[key]);
```

## Async-Storage

```
expo install @react-native-async-storage/async-storage
```

- AsyncStorage.clear()

## try-catch

- you need to do this always

## Alert API

```
Alert.alert('Delete todo', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: "I'm Sure",
        style: 'destructive',
        onPress: () => {
          const newTodos = { ...todos };
          delete newTodos[key];
          setTodos(newTodos);
          saveTodos(newTodos);
        },
      },
    ]);
```

## icons

[icons.expo.fyi](icons.expo.fyi)
