import React, { useState, useEffect, useMemo, memo } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import './css/Admin.css';
import 'firebase/auth';


const Admin = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsfetching] = useState(false)

    
    useEffect(() => { 
        setIsfetching(true)
        const userComments= firebase.firestore().collection('Comments').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
            setIsfetching(false)
        });
        return () => userComments()

    }, []);

    const handleDelete = ( id ) => {
        firebase.firestore().collection('Comments').doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
    



    const commentsList = useMemo(() => {
        return !data.length ? (
            <div className="container">
            <h2 style={{color:'white', alignSelf: 'center'}}>{!isFetching? 'Loading comments...' 
            : 'You do not have comments yet...'}</h2>
            </div>
        )
        :
        (
            <div className="container">                 
                <div>
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
                                    <div className='tableTitle'>E-mail</div>
                                    <div className='tableDescription'>{doc.email}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>Comment</div>
                                    <div className='tableDescription'>{doc.comment}</div>
                                </span>
                            </div>
                        )
                    })
                }     
                            </div>
            </div>
        )
    }, [ data ])

    return ( 
        <div>
            <div className="Container">
                { commentsList }
            </div>
            <Link type="submit" className="btn btn-primary logout mt-5" to="/">
                Back to Main Page
            </Link>
        </div>
    );
}

export default memo(Admin);

