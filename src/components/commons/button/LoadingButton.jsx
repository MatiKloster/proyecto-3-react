import React, {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';

  
function LoadingButton({variant, as, handler}) {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (isLoading) {
            handler().then(() => {
                if(mounted){
                    setLoading(false);
                }
            });
        }
        return () => {
            mounted = false;
        }
    }, [isLoading]);

    const handleClick = () => {
        setLoading(true);
    }

    return (
        <div className = 'row justify-content-center'>
            <Button
                className = 'textButton'
                variant={variant}
                type = {as}
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
            >
                {isLoading ? 'Cargando...' : 'Logear'}
            </Button>
        </div>
    );
}
  
export default LoadingButton;