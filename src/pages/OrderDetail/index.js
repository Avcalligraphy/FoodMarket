import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1} from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item -Ordered</Text>
        <ItemListFood
          type="order-summary"
          name="Soup Bumil"
          price="380.000"
          image={FoodDummy1}
          items={14}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.000.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC90"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Avav Sabilal" />
        <ItemValue label="Phone No." value="081213986906" />
        <ItemValue label="Address" value="Pondok Cilegon Indah" />
        <ItemValue label="House No." value="D 32 No. 27" />
        <ItemValue label="City" value="Banten" />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue label="#FG54682" value="Paid" valueColor="#1ABC90" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          colors="#D9435E"
          textColor="white"
          onPress={() => navigation.navigate('OrderSuccess')}
        />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#202020',
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
