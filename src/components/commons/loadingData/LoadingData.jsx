import React, {useState,useEffect} from 'react';
import { Row, Card } from 'react-bootstrap';
import {css} from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const dataBlock = (data) => {
    return (
        <Card>
            <Row noGutters>
            <Card.Body>
                <Card.Title>{data['name']}</Card.Title>
                <h5 class="font-weight-bold blue-text">{data.hasOwnProperty('artist')? data['artist']: data['director']}</h5>
                <Card.Text>Lanzamiento {data['year']}</Card.Text>
                <Card.Text>Género {data['genre']}</Card.Text>
                <Card.Text><small class="text-muted">Reservables {data['quantity']}</small></Card.Text>
            </Card.Body>
            </Row>
        </Card>
    );
}
const LoadingData = ({handler}) => {
    const [isLoading, setLoading] = useState(true);
    const [ResourceData, setResourceData] = useState([]);
    
    useEffect(() => {
        let mounted = true;
        if (isLoading) {
            handler().then((data) => {
                if(mounted){
                    setLoading(false);
                    setResourceData(data);
                }
            });
        }
        return () => {
            mounted = false;
        }
      }, [isLoading,handler])

      useEffect(() => {
          console.log(ResourceData);
          return () => {
              
          }
      }, [ResourceData])

    return (
        <>
        {!isLoading  && dataBlock(ResourceData) }
        <HashLoader
            css={override}
            size={50}
            color={"#ff5000"}
            loading={isLoading}
        />
        </>
    );
}
 
export default LoadingData;