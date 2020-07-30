import React, {useEffect, useState} from 'react';
import EnhancedTable from './table/EnhancedTable';
import Filter from './filter/Filter';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

var runFilter =  (arr,filter,header) => {

    var filterFn = function(obj) { 

        if (typeof obj[header] === 'string' && ~obj[header].toLowerCase().indexOf(filter.toLowerCase())) {
            return true;
        }
        if (typeof obj[header] === 'number' && ~(obj[header]).toString().indexOf(filter)) {
            return true;
        }
     }

      return arr.filter(filterFn);
}
function Modal ({props}) {
    const [handleClose] = props;

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

export default function Body({headers,data}){
    const [products, setproducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [filter, setfilter] = useState("");
    const [selectedFilter, setselectedFilter] = useState("name");
    const [NeedFilter, setNeedFilter] = useState(false);
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});

    const handleClose = () => setShow(false);

    useEffect(() => {
        if(NeedFilter){
            setfilteredProducts(runFilter(products,filter,selectedFilter));
        }
        else{
            setfilteredProducts(data);
            setproducts(data);
        }
        return () => {
            
        }
    }, [NeedFilter,data,selectedFilter,filter,products])

    const handleText = (str) => {
        setfilter(str);
        if(str === ""){
            setNeedFilter(false);
        }
        else{
            setNeedFilter(true);
        }
        
    }

    const handleShow = () => setShow(true);

    const handleSelect = (selected) => {
        setselectedFilter(selected);
    }
    
    return (
        <div>
            <Filter 
                headers = {headers}
                handleText = {handleText}
                handleSelect = {handleSelect}
            />
            <EnhancedTable 
                headers= {headers} 
                products = {filteredProducts === []? products: filteredProducts}
                handleClick= {handleShow}/>
            {showModal ? <Modal /> : null}
        </div>
    );
}
