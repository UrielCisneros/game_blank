
import { StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10
    },
    button: {
        backgroundColor: 'gray',
        color: "#fff",
        height: 30,
        width: 100,
        textAlign: "center",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: "bold"
    },
    description: {
        fontSize: 13,
        marginBottom: 8,
        fontWeight: "800",
        color: "grey"
    },
    card_date: {
        textAlign: "left"
    },  
    date: {
        fontSize: 13,
        color: "green",
        marginBottom: 8,
        fontWeight: "bold"
    },
    image: {
        width: 100,
        height: 140,
        borderRadius: 10,
        marginRight:10
    },
    content_info_card: {
        // padding:10
    },
    scope: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
       
    },
    score_content:{
        width: 50,
        height: 35,
        backgroundColor: "green",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        marginBottom: 5
    }
  });
  