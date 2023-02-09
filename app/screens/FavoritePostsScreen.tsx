import {observer} from 'mobx-react';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import store from '../store/store';
import {Colors} from '../utils/colors';
import {navigate} from '../services/naviagtion.service';

const FavoritePostsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.header}> Favorites</Text>
        <Text style={styles.header} onPress={() => navigate('Home')}>
          All posts
        </Text>
      </View>
      <View
        style={{
          height: '90%',
        }}>
        <FlatList
          data={store.Posts}
          style={styles.wrapper}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <View style={styles.post}>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          )}
          ListEmptyComponent={
            <View style={{height: '100%', alignSelf: 'center'}}>
              <Text style={styles.header}>No Data Found</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default observer(FavoritePostsScreen);
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
    height: '100%',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  header: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.primary,
    paddingVertical: 10,
  },
  post: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postTitle: {color: Colors.primary, textTransform: 'capitalize'},
});
