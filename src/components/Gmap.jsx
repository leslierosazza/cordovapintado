import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const Gmap = () => {
    const MAP_ID = '2dbc1755c4057d38';
    return (
        <APIProvider apiKey={import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY}>
            <Map 
                zoom={17} 
                center={{lat: -11.942109, lng: -77.075558}} 
                mapId={MAP_ID} 
                style={{width: '546px', height: '320px'}} 
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            >
                <Marker position={{ lat: -11.942109, lng: -77.075558 }} /> 
            </Map>
        </APIProvider>
    );
};

export default Gmap;