import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('');
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const date = new Date()
  const handleSubmit = () => {
    console.log("url")
    firebase.firestore().collection('products').add({
      name,
      category,
      price,
      url: image,
      userId: user.uid,
      createdAt: date.toDateString()
    })
    history.push('/')


  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}


            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}
              onChange={(e) => setPrice(e.target.value)} />
            <br />
          </form>
          <br />

          <label htmlFor="img">Image</label>
          <br />
          <input id='img' type="text" onChange={(e) => {
            setImage(e.target.value)
          }} />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>

        </div>
      </card>
    </Fragment>
  );
};

export default Create;
