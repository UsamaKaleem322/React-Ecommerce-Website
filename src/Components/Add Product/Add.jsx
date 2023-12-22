import React, { useState } from 'react'
import { db } from '../../Firebase/Firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Add = () => {
  const [product, setProduct] = useState([]);
  const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/PNG']
  const handlechange = (e) => {
    return setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const handlefilechange = (e) => {
    const image = e.target.files[0];
    if (image && types.includes(image.type)) {
      setProduct(prevProduct => ({ ...prevProduct, image }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + product.image.name);
    const uploadTask = uploadBytesResumable(storageRef, product.image);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const docRef = await addDoc(collection(db, "Products"), {
            name: product.name,
            price: Number(product.price),
            image: url,
            category: product.category,
            desc: product.description,
          }) 
          console.log("Document written with ID: ", docRef.id);
        });
      }
    );
  };


  return (

    <div className="container my-5">
      <form onSubmit={handleSubmit} required className='form-control p-4   m-auto' style={{ width: '370px' }}>
        <h2>Add Product</h2>
        <input type="text" required className='form-control my-4' placeholder='Name' name='name' onChange={e => handlechange(e)} />
        <input type="number" required className='form-control my-4' placeholder='Price' name='price' onChange={e => handlechange(e)} />
        <input type="text" required className='form-control my-4' placeholder='Category' name='category' onChange={e => handlechange(e)} />
        <input type="text" required className='form-control my-4' placeholder='Description' name='description' onChange={e => handlechange(e)} />
        <input type="file" required className='form-file mb-4' name='image' onChange={e => handlefilechange(e)} />
        <br />
        <button className='btn btn-success' type='submit'>Add</button>
      </form>
    </div>
  )

}

export default Add