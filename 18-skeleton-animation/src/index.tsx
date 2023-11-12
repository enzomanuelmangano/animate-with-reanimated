import { FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ContactInfo, ContactListItem } from './components/contact-list-item';
import { AntDesign } from '@expo/vector-icons';
import { PressableScale } from './components/touchable-scale';

const App = () => {
  const [contacts, setContacts] = useState<ContactInfo[] | undefined>();

  const contactsPlaceholderList = useMemo(() => {
    return Array.from({ length: 15 }).map(_ => null);
  }, []);

  const fetchContacts = useCallback(async () => {
    setContacts(undefined);

    // fetch contacts from json placeholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // wait for 2000ms to simulate loading
    await new Promise(resolve => setTimeout(resolve, 5000));

    setContacts(data);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={contacts ?? contactsPlaceholderList}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#CED0CE',
              }}
            />
          );
        }}
        renderItem={({ item, index }) => {
          return <ContactListItem contact={item} key={index} />;
        }}
      />
      <PressableScale
        style={styles.floatingButton}
        onPress={() => {
          fetchContacts();
        }}>
        <AntDesign name="reload1" size={24} color="white" />
      </PressableScale>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 64,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 32,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { App };
