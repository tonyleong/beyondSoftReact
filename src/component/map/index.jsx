import GoogleMap from 'google-map-react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';

const Marker = () => {
    return <LocationOnIcon fontSize="large" color='error' />
}

const defaultPosition = {
    lat: 3.129010,
    lng: 101.679787
}

const Map = () => {
    const location = useSelector(state => state?.MAP_LOCATION ?? defaultPosition)

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                bootstrapURLKeys={{ key: "" }}
                defaultZoom={15}
                center={location}
            >
                <Marker text="MyMarker"
                    lat={location.lat}
                    lng={location.lng}
                />
            </GoogleMap>
        </div>
    )
}

export { Map as default, Map }