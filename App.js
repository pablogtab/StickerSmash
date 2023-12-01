import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        bounces={false}
        androidHardwareAccelerationDisabled={true}
        onLoadEnd={() => {

        }}
        style={{ ...styles.container, marginTop: 70 }}
        originWhitelist={["*"]}
        userAgent="react-native-webview"
        source={{ uri: 'https://autogestion.sigloquinto.com' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
})

