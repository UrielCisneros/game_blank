import { useState, useEffect, useRef } from "react";
import { getLatestGames } from "../lib/metacritic";
import {
  Image,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Animated,
  Pressable,
} from "react-native";
import { styles } from "../AppStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedContent } from "./AnimatedContent";
import Score from "./Score";
import { Link } from "expo-router";

export default function Main() {
  const [games, setGames] = useState([]);

  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Link isChild href={"/about"}>
        <Pressable>
          <Text>Ir al about</Text>
        </Pressable>
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedContent index={index}>
              <GameCard game={item} />
            </AnimatedContent>
          )}
        />
      )}
    </View>
  );
}

function GameCard({ game }) {
  return (
      <View style={styles.card}>
        <Image source={{ uri: game.image }} style={styles.image} />
        <View style={styles.content_info_card}>
            <Text style={styles.title}>{game.title}</Text>
            <Score score={game.score} />
            <Text style={styles.description}>{game.description.slice(0,100)}...</Text>
            <Text style={styles.date}>Date of Lanst: {game.releaseDate}</Text>
        </View>
      </View>
  );
}
