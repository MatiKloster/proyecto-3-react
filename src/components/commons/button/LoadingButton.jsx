import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';

const simulateNetworkRequest = () => new Promise((resolve) => setTimeout(resolve, 2000));
  
function LoadingButton({variant, as, handler}) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const handleClick = () => {
        setLoading(true);
        //api
        handler();
    }

    return (
        <div className = 'row justify-content-center'>
            <Button
                className = 'textButton'
                variant={variant}
                as = {as}
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Cargando...' : 'Logear'}
            </Button>
        </div>
    );
}
  
export default LoadingButton;