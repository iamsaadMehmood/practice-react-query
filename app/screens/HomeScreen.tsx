import {observer} from 'mobx-react';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StarIcon from '../assets/svgs/StarIcon';
import AppLoader from '../components/AppLoader';
import usePosts from '../services/api.service';
import {navigate} from '../services/naviagtion.service';
import store from '../store/store';
import {Colors} from '../utils/colors';

const HomeScreen = () => {
  const {data, isLoading, isSuccess, isError} = usePosts();
  return (
    <SafeAreaView>
      <View style={styles.headerView}>
        <Text style={styles.header}>All posts</Text>
        <Text style={styles.header} onPress={() => navigate('Favorite')}>
          Favorites
        </Text>
      </View>
      <View style={{height: '90%', marginHorizontal: 20}}>
        <FlatList
          data={data}
          style={styles.wrapper}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => (
            <View style={styles.post}>
              <View style={styles.addFav}>
                <TouchableOpacity onPress={() => store.addPost(item)}>
                  <StarIcon height={30} width={30} />
                </TouchableOpacity>
              </View>
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
      {isLoading && <AppLoader />}
    </SafeAreaView>
  );
};
export default observer(HomeScreen);

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
  addFav: {
    marginVertical: 5,
    alignItems: 'flex-end',
    // width: '100%',
  },
  postTitle: {color: Colors.primary, textTransform: 'capitalize'},
});
