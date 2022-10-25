import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faImage, faFaceSmile,faComment} from "@fortawesome/free-regular-svg-icons";
import { BsThreeDots } from 'react-icons/bs'
import { Form,Button,InputGroup } from "react-bootstrap";
import '../assets/stylesheets/Feed.css'

import { storage, db, auth} from '../firebase-config';
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";

export default function Feed(props){
    const [image,setImageUpload] = useState(null)
    const [caption, setCaption] =useState('');
    const [posts, setPosts] = useState([]);
    const [imagePreview, setPreview] = useState('');
    const collectionRef = collection(db, "posts");
    const user = auth.currentUser;

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collectionRef)
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getPosts();
    },[]);

    const handlePost = async (e) =>{
        e.preventDefault();
        const docRef = await addDoc(collectionRef, {
            author: user.displayName,
            caption: caption
        })
        if(image !== null){
            const imageRef = ref(storage, `posts/${docRef.id}/image`)
            uploadBytes(imageRef, image).then(
                async snapshot =>{
                    const downloadURL = await getDownloadURL(imageRef);

                    await updateDoc(doc(db,'posts',docRef.id), {
                        avatar: props.user.photoURL,
                        image: downloadURL
                    });
                    const data = await getDocs(collectionRef)
                    setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
                }
            );
        }
        setPreview('');
        setCaption('');
    }

    const showPreview = (e) => {
            setPreview(<img className="img-post" src={URL.createObjectURL(e.target.files[0])}></img>)
    }
    
    console.log('image preview', imagePreview);
    return(
        <div className="feed">
            <div className="create-post shadow-sm">
                <Form className="w-100" onSubmit={(e) => handlePost(e)}>
                    <div className="type-content">
                        <img className="avatar" src={props.user.photoURL} alt="" />
                            <InputGroup>
                                <Form.Control className="input-post" type="text" placeholder="Tell us about your village adventure" value={caption} onChange={(e) => setCaption(e.target.value)}/>
                            </InputGroup>
                    </div>
                    <div className="preview-post">
                       {imagePreview} 
                    </div>
                    <div className="create-post-actions">
                        <Form.Label className="m-0 d-flex" htmlFor="upload-image"><FontAwesomeIcon className="upload-icon" icon={faImage}/></Form.Label>
                        <Form.Control className="upload-image" id="upload-image" type="file" onChange={(e) => {setImageUpload(e.target.files[0]); showPreview(e)}}/>
                        <FontAwesomeIcon icon={faFaceSmile}/>
                        <Button className="post-btn" type="submit" variant="primary" size="sm">Post</Button>
                    </div>
                </Form>
            </div>
            {posts.map((post,index) => (
            <div className="post shadow-sm" key={index}>
                <div className="author">
                    <img className="profile-post" src={post.avatar} alt="" />
                    <p className="name">{post.author}</p>
                    <BsThreeDots className="dot-menu"/>
                </div>
                <img className="img-post" src={post.image} alt="" />
                <div className="details">
                    <FontAwesomeIcon className="post-icon" icon={faHeart} />
                    <FontAwesomeIcon className="post-icon" icon={faComment} />
                    <p><span className="name">{post.author} </span>{post.caption}</p>
                    <p className="time">Just now</p>
                </div>
                <Form>
                <InputGroup className="w-100" controlid="comment">
                    <Form.Control className="input-comment" type="text" placeholder="Add a comment..."/>
                    <Button className="post-comment text-primary" variant="">post</Button>
                </InputGroup>
                </Form>
            </div>
            ))}
        </div>
    )
}