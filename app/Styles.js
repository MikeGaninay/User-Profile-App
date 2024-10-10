const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: '100%', 
      flex: 1,
      padding: 24,
      backgroundColor: "rgba(255, 255, 255, 0.8)", 
      justifyContent: "flex-start", 
      borderRadius: 10, 
      marginHorizontal: 16, 
      paddingVertical: 20, 
    },
    profileSection: {
      alignItems: "flex-start", 
      marginTop: 20,
      paddingBottom: 20, 
      borderBottomWidth: 1,
      borderBottomColor: "#ddd", 
    },
    imageAndJoined: {
      flexDirection: "row", 
      alignItems: "center",
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 80,
      borderWidth: 3,
      borderColor: "#fff", 
      marginRight: 10,  
    },
    joinedContainer: {
      flexDirection: "row", 
      alignItems: "center",
    },
    clockIcon: {
      marginRight: 5,
    },
    joinedText: {
      fontSize: 12,
      color: "#999",
    },
    textContainer: {
      alignItems: "flex-start", 
      marginTop: 10,
    },
    userName: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
    },
    userRole: {
      fontSize: 16,
      color: "#666",
      marginTop: 3,
    },
    sectionHeader: {
      paddingVertical: 10,
      alignItems: "flex-start", 
    },
    sectionHeaderText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    option: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    optionText: {
      fontSize: 18,
      color: "#333",
      textAlign: "left", 
    },
    signOutButton: {
      padding: 15,
      alignItems: "center", 
      marginTop: 20,
    },
    signOutText: {
      color: "red",
      fontSize: 18,
    },
  });
  