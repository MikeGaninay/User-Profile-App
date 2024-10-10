import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function UserProfile() {
  return (
    <ImageBackground 
      source={{ uri: "https://th.bing.com/th/id/OIP.lVuaK57QwreNgy7Zj6ZayAHaOE?rs=1&pid=ImgDetMain" }} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Profile Image with Joined Text */}
          <View style={styles.imageAndJoined}>
            <Image
              source={{ uri: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/444469801_1521467708712363_1128523499879770214_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEZLcpFc6Z3Z5jgbSu2zKgW1zh1NsYQ4OLXOHU2xhDg4u0xyXb5uNnFb6YtDieqKcwjuG7lTMsuTf0lXGyCRRDy&_nc_ohc=qVhLbLq1QD8Q7kNvgG7d-51&_nc_ht=scontent-mnl1-1.xx&_nc_gid=AGFZozy9NVmo_aMh3CSjb6I&oh=00_AYDVFkHg2uEm8mQqD2qCFPk-2OPuQmo_w1YCoPclmbHmkg&oe=670C6E9A" }} 
              style={styles.profileImage}
            />
            
            {/* Joined Text with Clock Icon */}
            <View style={styles.joinedContainer}>
              <Icon name="clock-o" size={16} color="#999" style={styles.clockIcon} />
              <Text style={styles.joinedText}>Joined 1 year ago</Text>
            </View>
          </View>

          {/* User Details Section */}
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Mikedyñl</Text>
            <Text style={styles.userRole}>Ganinay</Text>
          </View>
        </View>

        {/* Profile Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Profile</Text>
        </View>

        {/* Profile Management */}
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Manage User</Text>
        </TouchableOpacity>

        {/* Settings Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Settings</Text>
        </View>

        {/* Notifications and Dark Mode */}
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>

        <View style={styles.option}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Dark Mode</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Out - centered */}
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

