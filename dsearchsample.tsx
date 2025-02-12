// import React, { useState } from "react";
// import { TextInput, View, StyleSheet } from "react-native";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
//   placeholder?: string;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search..." }) => {
//   const [query, setQuery] = useState("");

//   const handleChange = (text: string) => {
//     setQuery(text);
//     onSearch(text); // Triggers search with debounce in the hook
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={query}
//         onChangeText={handleChange}
//         placeholder={placeholder}
//         style={styles.input}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#ccc",
//   },
//   input: {
//     fontSize: 16,
//     padding: 8,
//   },
// });

// export default SearchBar;

// // HOOK 

// import { useState, useEffect, useCallback } from "react";
// import { debounce } from "lodash";
// import { fetchSearchResults } from "../services/apiService";
// import { SearchResult } from "../types/searchTypes";

// const useDebouncedSearch = (delay = 500) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const searchAPI = useCallback(
//     debounce(async (searchText: string) => {
//       if (!searchText.trim()) {
//         setResults([]);
//         return;
//       }
//       setLoading(true);
//       try {
//         const data = await fetchSearchResults(searchText);
//         setResults(data);
//         setError(null);
//       } catch (err) {
//         setError("Error fetching data");
//         setResults([]);
//       } finally {
//         setLoading(false);
//       }
//     }, delay),
//     []
//   );

//   useEffect(() => {
//     searchAPI(query);
//     return () => searchAPI.cancel(); // Cleanup debounce on unmount
//   }, [query]);

//   return { query, setQuery, results, loading, error };
// };

// export default useDebouncedSearch;

// // Service class

// export const fetchSearchResults = async (query: string) => {
//     try {
//       const response = await fetch(`https://api.example.com/search?q=${query}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("API Error:", error);
//       throw error;
//     }
//   };

//   // Types searchTypes.ts

//   export interface SearchResult {
//     id: string;
//     title: string;
//     description: string;
//   }
  
//   // SearchResultItem.tsx

//   import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { SearchResult } from "../types/searchTypes";

// const SearchResultItem: React.FC<{ result: SearchResult }> = ({ result }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{result.title}</Text>
//     <Text style={styles.description}>{result.description}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   item: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: "#ddd",
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });

// export default SearchResultItem;

// // SearchScreen.tsx

// import React from "react";
// import { View, FlatList, ActivityIndicator, Text, StyleSheet } from "react-native";
// import SearchBar from "../components/SearchBar";
// import useDebouncedSearch from "../hooks/useDebouncedSearch";
// import SearchResultItem from "../components/SearchResultItem";

// const SearchScreen: React.FC = () => {
//   const { query, setQuery, results, loading, error } = useDebouncedSearch();

//   return (
//     <View style={styles.container}>
//       <SearchBar onSearch={setQuery} />
//       {loading && <ActivityIndicator size="large" color="#000" />}
//       {error && <Text style={styles.error}>{error}</Text>}
//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <SearchResultItem result={item} />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//     marginTop: 10,
//   },
// });

// export default SearchScreen;

// // App.tsx

// import React from "react";
// import { SafeAreaView, StatusBar } from "react-native";
// import SearchScreen from "./src/screens/SearchScreen";

// const App: React.FC = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <StatusBar barStyle="dark-content" />
//       <SearchScreen />
//     </SafeAreaView>
//   );
// };

// export default App;


