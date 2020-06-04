import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import api from "../../service/api";

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  function navigateToDetails(product) {
    navigation.navigate("Details", { product });
  }

  const formatValue = (value) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <FlatList
        data={products}
        keyExtractor={(products) => String(products.id_product)}
        showsVerticalScrollIndicator={false}
        style={styles.productList}
        renderItem={({ item: product }) => (
          <View style={styles.product}>
            <Image style={styles.produtImage} source={{ uri: product.image }} />
            <Text style={styles.productName}>{product.name_product}</Text>
            <Text style={styles.productPrice}>
              {formatValue(product.price)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetails(product)}
            >
              <Text style={styles.detailsButtonText}>Detalhes</Text>
              <Feather name="arrow-right" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
