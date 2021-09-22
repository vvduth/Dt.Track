import React from "react";
import {Text, StyleSheet} from 'react-native';
import MapView,{Polyline} from "react-native-maps";
const Map = () => {

    let points = [];
    for (let i = 0; i < 20 ; i++){
       if (i % 2 === 0) {
        points.push({
            latitude: 61.5 + i * 0.001,
            longitude: 23.78 + i * 0.001
        });
     } else {
         points.push({
            latitude: 61.5 - i * 0.001,
            longitude: 23.78 + i * 0.001
         });
     }
    }

    return <MapView 
    style={styles.map}
    initialRegion = {{
        latitude: 61.49911,
        longitude: 23.78712,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }} >
        <Polyline coordinates={points} />

    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map ;