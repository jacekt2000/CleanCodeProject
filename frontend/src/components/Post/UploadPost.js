import { useState } from 'react';
import axios from 'axios';
import '../../style/uploadPost.css';
import HeaderSmall from '../HeaderSmall';


export default function UploadPost() {
    const [data, setData] = useState({
        user_id: 1,
        title: '',
        description: '',
        image: null,
        tag: ''
    });

    const handleChange = (e) => {
        setData({
            [e.target.id]: e.target.value
        })
    };

    const handleImageChange = (e) => {
        setData({
            [image]: e.target.files[0]
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        let form_data = new FormData();
        form_data.append('user_id', 1);
        form_data.append('create_date', '2023-05-16');
        form_data.append('title', data.title);
        form_data.append('description', data.content);
        form_data.append('image', data.image, data.image.name);
        form_data.append('tag', data.tag);

        let url = 'http://localhost:8000/api/posts/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="UploadPost">
            <div className='logoSmall'>
                <HeaderSmall />
            </div>

            <div className='content'>


                <form onSubmit={handleSubmit} className='uploadForm'>
                    <input type="text" placeholder='Title' id='title' className='uploadInput' value={data.title} onChange={handleChange} required />

                    <p>
                        <textarea type="text" cols="40" rows="3" placeholder='Description' id='description' className='uploadInput' value={data.description} onChange={handleChange} required />

                    </p>
                    <p>

                        <input type="file"
                            id="image"
                            accept="image/png, image/jpeg, image/gif" className='uploadInput' onChange={handleImageChange} required />

                    </p>

                    <input type="text" placeholder='Tag' id='tag' className='uploadInput' value={data.tag} onChange={handleChange} required />

                    <input type="submit" className='uploadSubmit' />
                </form>
            </div>
        </div>
    );
}


