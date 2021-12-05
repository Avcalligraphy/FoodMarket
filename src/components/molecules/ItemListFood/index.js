/* eslint-disable react/prop-types */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Number, Rating} from '../../molecules';
import {FoodDummy1, FoodDummy4} from '../../../assets';

/*
TYPE
1. Product
2. order-summary
3. in-progress
4. past-orders
*/
// eslint-disable-next-line react/prop-types
const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        //  item list product seperti di home page
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number style={styles.text} number={price} />
              {/* <Text style={styles.text}>IDR {price}</Text> */}
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-summary':
        //  item order summary
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number style={styles.text} number={price} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );
      case 'in-progress':
        // item in-progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.text}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.text} />
              </View>
            </View>
          </>
        );
      case 'past-orders':
        //  item past orders
        const formattedDate = new Date(date).toDateString();
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.text}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.text} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{formattedDate}</Text>
              <Text style={styles.state(status)}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number style={styles.text} number={price} />
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {/* <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          {inProgress ? (
            <Text style={styles.text}>
              {orderItems} items . IDR {totalOrder}
            </Text>
          ) : (
            <Text style={styles.text}>IDR 289.000</Text>
          )}
        </View>
        {items && !rating && <Text style={styles.items}>{items} items</Text>}
        {rating && !items && <Rating />} */}
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {flex: 1},
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
  state: status => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
});
