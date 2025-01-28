import React, { FC } from 'react';
import { FlatList, FlatListProps, View, Text } from 'react-native';
import styles from './styles';

interface CustomFlatListProps<T> extends FlatListProps<T> {
  emptyMessage?: string;
}

const CustomFlatList: FC<CustomFlatListProps<any>> = ({
  data,
  renderItem,
  keyExtractor,
  emptyMessage,
  ...props
}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{emptyMessage}</Text>
        </View>
      }
      {...props}
    />
  );
};



export default CustomFlatList;
