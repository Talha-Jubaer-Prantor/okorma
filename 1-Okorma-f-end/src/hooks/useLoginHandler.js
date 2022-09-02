import { useState } from 'react';

const useLoginHandler = () => {
    const [logedUser,setLoggedUser]=useState()
    
    return [logedUser,setLoggedUser]
};

export default useLoginHandler;