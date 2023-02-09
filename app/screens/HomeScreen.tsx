import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppLoader from '../components/AppLoader';
import usePosts from '../services/api.service';
import {Colors} from '../utils/colors';

const HomeScreen = () => {
  const {data, isLoading, isSuccess,isError} = usePosts();
  return (
    <SafeAreaView>
      <Text style={styles.header}>All posts</Text>
      <View style={{height: '90%', marginHorizontal: 20}}>
        <FlatList
          data={data}
          style={styles.wrapper}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <View style={styles.post}>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          )}
          ListEmptyComponent={
            <View style={{height: '100%', alignSelf: 'center'}}>
              <Text style={{...styles.header}}>No Data Found</Text>
            </View>
          }
        />
      </View>
      {isLoading && <AppLoader />}
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 30,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    height:"100%"
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.primary,
    paddingVertical: 10,
  },
  post: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {color: Colors.white, textTransform: 'capitalize'},
});
