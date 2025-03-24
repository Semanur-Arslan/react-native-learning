import { TouchableOpacity, Alert } from "react-native";
import { Colors } from "../../constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";

export default function FavoriteButton({ job }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoriteJobs.favorites);
  const isFavorite = favorites.some((fav) => fav.id == job.id);

  const showAlert = (title, message, text) => {
    Alert.alert(title, message, [{ text: text }]);
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(job.id));
      showAlert("Successful", "Removed from Favorites", "Okay");
    } else {
      dispatch(addFavorite(job));
      showAlert("Successful", "Added to Favorites", "Okay");
    }
  };
  return (
    <TouchableOpacity onPress={toggleFavorite}>
      {isFavorite ? (
        <MaterialIcons name="favorite" size={24} color={Colors.primary} />
      ) : (
        <MaterialIcons
          name="favorite-outline"
          size={24}
          color={Colors.primary}
        />
      )}
    </TouchableOpacity>
  );
}
