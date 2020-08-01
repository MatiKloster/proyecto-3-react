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

export default function Body({headers,data}){
    const [products, setproducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [filter, setfilter] = useState("");
    const [selectedFilter, setselectedFilter] = useState("name");
    const [NeedFilter, setNeedFilter] = useState(false);

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
            />
        </div>
    );
}
