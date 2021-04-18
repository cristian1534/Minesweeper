import React, { useState, useEffect, useMemo, memo } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { db } from '../db/firebase-config';
import 'firebase/auth';
import './Back.css';


const Admin = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsfetching] = useState(false)

    
    useEffect(() => { 
        setIsfetching(true)
        const userComments= db.collection('Comments').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
            setIsfetching(false)
        });
        return () => userComments()

    }, []);

    const handleDelete = ( id ) => {
        db.collection('Comments').doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
    



    const commentsList = useMemo(() => {
        return !data.length ? (
            <div className="container">
            <h2 style={{color:'white', alignSelf: 'center'}}>{!isFetching? 'Loading comments...' : 'You do not have comments yet...'}</h2>
            </div>
        )
        :
        (
            <div className="container">
                <h2 style={{color:'white'}}>Users Comments from Data Base</h2>  
                {
                    data.map( doc => {
                        return (
                            <div className="table" key={doc.id} >
                                <span className='tableItem'>
                                    <div className='tableTitle'>Delete</div>
                                    <div className='tableDescription tableAction' onClick={() => handleDelete(doc.id) }>
                                        <IoTrashBinSharp />
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ID</div>
                                    <div className='tableDescription'>{doc.id}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>E-MAIL</div>
                                    <div className='tableDescription'>{doc.email}</div>
                                </span>
                            </div>
                        )
                    })
                }     
            </div>
        )
    }, [ data ])


    return ( 
        <div>
            <div className="Container">
                { commentsList }
            </div>
            <button type="submit" className="btn btn-secondary logout mt-5">
                Back to Main Page
            </button>
        </div>
    );
}

export default memo(Admin);