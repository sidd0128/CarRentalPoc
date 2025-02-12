// import React, { useState, useEffect, useCallback } from "react";
// import { 
//   View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl, Image 
// } from "react-native";

// const PAGE_SIZE = 10; // Number of items per page

// const useFetchProducts = () => {
//   const [data, setData] = useState<{ id: number; title: string; thumbnail: string }[]>([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const fetchData = useCallback(async (isRefresh = false) => {
//     if (loading || (!isRefresh && !hasMore)) return;

//     setLoading(true);
    
//     try {
//       const response = await fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${isRefresh ? 0 : (page - 1) * PAGE_SIZE}`);
//       const result = await response.json();

//       if (isRefresh) {
//         setData(result.products);
//         setPage(2);
//       } else {
//         setData((prevData) => [...prevData, ...result.products]);
//         setPage((prevPage) => prevPage + 1);
//       }

//       setHasMore(result.products.length === PAGE_SIZE);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//       if (isRefresh) setRefreshing(false);
//     }
//   }, [loading, hasMore, page]);

//   useEffect(() => {
//     fetchData(true);
//   }, []);

//   return { data, loading, refreshing, hasMore, fetchData, setRefreshing };
// };

// const ProductItem = React.memo(({ item }: { item: { id: number; title: string; thumbnail: string } }) => (
//   <View style={styles.item}>
//     <Image source={{ uri: item.thumbnail }} style={styles.image} />
//     <Text style={styles.title}>{item.title}</Text>
//   </View>
// ));

// const InfiniteScrollWithAPI = () => {
//   const { data, loading, refreshing, hasMore, fetchData, setRefreshing } = useFetchProducts();

//   const onRefresh = () => {
//     setRefreshing(true);
//     fetchData(true);
//   };
//     const renderItem = useCallback(({ item }) => <ProductItem item={item} />, []);
//   return (
//     <FlatList
//       data={data}
//       keyExtractor={(item) => item.id.toString()}
//       renderItem={renderItem}
//       onEndReached={() => fetchData(false)}
//       onEndReachedThreshold={0.3}
//       ListFooterComponent={() => (loading && hasMore ? <ActivityIndicator size="large" color="blue" /> : null)}
//       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["blue"]} />}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 10,
//     marginRight: 15,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default InfiniteScrollWithAPI;
