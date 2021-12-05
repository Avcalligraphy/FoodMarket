/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ItemListFood, Rating} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getInProgress,
  getPastOrders,
  getPostOrders,
} from '../../../redux/action';

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

const InProgress = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {inProgress} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getInProgress());
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {inProgress.map(order => {
        return (
          <ItemListFood
            key={order.id}
            rating={order.food.rate}
            image={{uri: order.food.picturePath}}
            type="in-progress"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            onPress={() => navigation.navigate('OrderDetail')}
          />
        );
      })}
      {/* <ItemListFood
        rating={3}
        image={FoodDummy2}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy3}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        type="in-progress"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        onPress={() => navigation.navigate('OrderDetail')}
      /> */}
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pastOrders} = useSelector(state => state.orderReducer);
  useEffect(() => {
    dispatch(getPastOrders());
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {pastOrders.map(order => {
        return (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            type="past-orders"
            items={order.quantity}
            price={order.total}
            name={order.food.name}
            date={order.created_at}
            status={order.status}
            onPress={() => navigation.navigate('OrderDetail')}
          />
        );
      })}
      <ItemListFood
        rating={3}
        image={FoodDummy4}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        date="Jun 12, 14:00"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      {/* <ItemListFood
        rating={3}
        image={FoodDummy2}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        date="Jun 12, 14:00"
        status="Cancel"
        onPress={() => navigation.navigate('OrderDetail')}
      />
      <ItemListFood
        rating={3}
        image={FoodDummy1}
        type="past-orders"
        items={3}
        price="2.000.000"
        name="Soup Bumil"
        date="Jun 12, 14:00"
        onPress={() => navigation.navigate('OrderDetail')}
      /> */}
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;

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
