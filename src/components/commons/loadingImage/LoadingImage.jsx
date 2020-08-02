import React, {useState,useEffect} from 'react';

const LoadingImage = ({handler}) => {
    const [isLoading, setLoading] = useState(true);
    const [Image, setImage] = useState("");
    
    useEffect(() => {
        let mounted = true;
        if (isLoading) {
            handler().then((image) => {
                if(mounted){
                    setLoading(false);
                    setImage("data:image/png;base64,"+image);
                }
            });
        }
        return () => {
            mounted = false;
        }
    }, [isLoading,handler]);

    return (
        <div>
            <img src={Image} class="img-fluid" alt="No se ha encontrado la imagen"/>
        </div>
    );
}

export default LoadingImage;