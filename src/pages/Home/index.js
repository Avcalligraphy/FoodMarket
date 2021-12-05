import React, {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {
  FoodCard,
  HomeProfile,
  HomeTabSection,
} from '../../components/molecules';
import {Gap} from '../../components/atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodData} from '../../redux/action';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {food} = useSelector(state => state.homeReducer);
  useEffect(() => {
    dispatch(getFoodData());
  });
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map(itemFood => {
                return (
                  <FoodCard
                    key={itemFood.id}
                    image={{uri: itemFood.picturePath}}
                    name={itemFood.name}
                    rating={itemFood.rate}
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                  />
                );
              })}
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: 'white',
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {flex: 1},
});
