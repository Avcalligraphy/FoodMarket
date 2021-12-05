/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood, Rating} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indStyle}
    style={styles.bgStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {newTaste} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map(itemFoodTab => {
        return (
          <ItemListFood
            key={itemFoodTab.id}
            type="product"
            name={itemFoodTab.name}
            price={itemFoodTab.price}
            rating={itemFoodTab.rate}
            image={{uri: itemFoodTab.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', itemFoodTab)}
          />
        );
      })}
      {/* <ItemListFood
        type="product"
        name="Soup Bumil"
        price="380.000"
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      /> */}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map(itemFoodTab => {
        return (
          <ItemListFood
            key={itemFoodTab.id}
            type="product"
            name={itemFoodTab.name}
            price={itemFoodTab.price}
            rating={itemFoodTab.rate}
            image={{uri: itemFoodTab.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', itemFoodTab)}
          />
        );
      })}
      {/* <ItemListFood
        type="product"
        name="Soup Bumil"
        price="380.000"
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      /> */}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map(itemFoodTab => {
        return (
          <ItemListFood
            key={itemFoodTab.id}
            type="product"
            name={itemFoodTab.name}
            price={itemFoodTab.price}
            rating={itemFoodTab.rate}
            image={{uri: itemFoodTab.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', itemFoodTab)}
          />
        );
      })}
      {/* <ItemListFood
        type="product"
        name="Soup Bumil"
        price="380.000"
        rating={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      /> */}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  indStyle: {
    backgroundColor: '#020202',
    height: 3,
    width: '15%',
    marginLeft: '3%',
  },
  bgStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  tabStyle: {width: 'auto'},
  tabView: {backgroundColor: 'white'},
});
