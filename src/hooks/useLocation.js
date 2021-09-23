import { useState, useEffect } from "react";
import { Accuracy,requestForegroundPermissionsAsync,watchPositionAsync } from "expo-location";

export default (shouldTrack,callback) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubcribers] = useState(null);
    const startWatching = async () => {
        try {
          await requestForegroundPermissionsAsync();
          const sub = await watchPositionAsync({
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 10
          },
          callback
          );
        setSubcribers(sub);
        } catch (e) {
          setErr(e); 
        }
      };


    useEffect(()=> {
        if (shouldTrack){
            startWatching();
        } else {
            subscriber.remove(); //stop watching
            //set subcriber bak to null
            setSubcribers(null);
        }
    },[shouldTrack]) ;
    //want to run more than once
    //in this case means if this track changed, re-run tbhis function


    return [err];
};
