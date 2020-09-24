import React, {useState,useEffect} from 'react';
import {css} from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
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
            <img src={Image} className="img-fluid" alt="" />
            <RingLoader
                css={override}
                size={60}
                color={"#ff5000"}
                loading={isLoading}
            />
        </div>
    );
}

export default LoadingImage;