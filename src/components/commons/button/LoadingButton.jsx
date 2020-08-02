import React from 'react'
import Button from 'react-bootstrap/Button';
import {css} from '@emotion/core';
import RingLoader from 'react-spinners/RingLoader';
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function LoadingButton({variant, as,isLoading, startLoading}) {

    return (
        <div className = 'row justify-content-center'>
            {!isLoading && 
                <Button
                className = 'textButton'
                variant={variant}
                type = {as}
                disabled={isLoading}
                onClick={!isLoading ? startLoading : null}
                >
                    Logear
                </Button>
            }
            <RingLoader
                css={override}
                size={50}
                color={"#ff5000"}
                loading={isLoading}
            />
        </div>
    );
}
  
export default LoadingButton;
