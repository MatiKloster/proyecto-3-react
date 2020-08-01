import React, {useState,useEffect} from 'react';
import Image from 'react-bootstrap/Image';

const LoadingImage = ({handler}) => {
    const [isLoading, setLoading] = useState(true);
    const [image, setImage] = useState(null);
    
    useEffect(() => {
        let mounted = true;
        if (isLoading) {
            handler().then((image) => {
                if(mounted){
                    setLoading(false);
                    setImage(image);
                }
            });
        }
        return () => {
            mounted = false;
        }
    }, [isLoading,handler]);

    return (
        <div>
            {(!isLoading) ? <Image src={"data:image/jpg;base64,"+{image}} rounded />: null }
        </div>
    );
}

export default LoadingImage;