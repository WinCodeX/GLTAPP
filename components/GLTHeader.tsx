// components/GLTHeader.tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function GLTHeader() {
  return (
    <View style={{
      backgroundColor: '#37246D',
      paddingTop: 50,
      paddingBottom: 15,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 5,
    }}>
      <TouchableOpacity>
        <Feather name="menu" size={24} color="white" />
      </TouchableOpacity>
      
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'SpaceMono',
      }}>
        GLT Logistics
      </Text>

      <TouchableOpacity>
        <Feather name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}