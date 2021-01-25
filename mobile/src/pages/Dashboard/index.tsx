import React from 'react';
import { Text, View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dahboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, color: '#FFF' }}>Dashboard</Text>

      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dahboard;
