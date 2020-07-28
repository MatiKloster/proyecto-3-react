import React, {useEffect, useState} from 'react';
import EnhancedTable from './table/EnhancedTable';
import Filter from './filter/Filter';

var runFilter =  (arr,filter,header) => {

    var filterFn = function(obj) { 

        if (typeof obj[header] === 'string' && ~obj[header].indexOf(filter)) {
            return true;
        }
        if (typeof obj[header] === 'number' && ~obj[header] === filter) {
            return true;
        }
     }

      return arr.filter(filterFn);
}

function Body({headers,data}){
    const [products, setproducts] = useState({data});
    const [filteredProducts, setfilteredProducts] = useState({data});
    const [filter, setfilter] = useState("");
    const [selectedFilter, setselectedFilter] = useState("name");
    const [NeedFilter, setNeedFilter] = useState(false)

    useEffect(() => {
        if(NeedFilter){
            setfilteredProducts(runFilter(products,filter,selectedFilter));

        }
        return () => {
            
        }
    }, [NeedFilter])

    const handleText = (str) => {
        setfilter(str);
        setNeedFilter(true);
    }

    const handleSelect = (selected) => {
        setselectedFilter(selected);
    }
    
    return (
        <div className="py-4 col-md-8 offset-md-2">
            <Filter 
                headers = {headers}
                handleText = {handleText}
                handleSelect = {handleSelect}
            />
            <EnhancedTable 
                headers= {headers} 
                products = {filteredProducts}/>
        </div>
    );
}

export default Body;