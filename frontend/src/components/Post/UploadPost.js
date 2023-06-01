import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/uploadPost.css';
import HeaderSmall from '../HeaderSmall';


export default function UploadPost() {
    const [data, setData] = useState({
        // user_id: null,
        title: '',
        description: '',
        image: null,
        tag: ''
    });

    // const handleChange = (e) => {
    //     setData({
    //         [e.target.id]: e.target.value
    //     })
    // };

    const handleChange = (e) => {
        // const { id, value } = e.target;
        setData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    const handleImageChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            image: e.target.files[0]
        }));
    };

    useEffect(() => {
        console.log(data);
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        // form_data.append('user_id', data.user_id);
        form_data.append('title', data.title);
        form_data.append('description', data.description);
        form_data.append('image', data.image);
        form_data.append('tag', data.tag);


        const url = 'http://localhost:8000/api/posts/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then((res) => console.log(res.data))
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
                            accept="image/png, image/jpeg" className='uploadInput' onChange={handleImageChange} required />

                    </p>

                    <input type="text" placeholder='Tag' id='tag' className='uploadInput' value={data.tag} onChange={handleChange} required />

                    <input type="submit" className='uploadSubmit' />
                </form>
            </div>
        </div>
    );
}


