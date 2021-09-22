import * as Location from 'expo-location';

const tenMetersWithDegree = 0.0001 ; //10 met in long and lad

const getLocation = increment => { //fake location reading
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5 ,
            altitude:  61.5 + increment * tenMetersWithDegree, //go around the world
            latitute: 23.78 + increment * tenMetersWithDegree
        }
    };
};

let counter = 0;
setInterval(()=> {
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);