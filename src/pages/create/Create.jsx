import './create.css'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import http from '../../utils/axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [filePreview, setFilePreview] = useState('');

    const onSelectFile = (event) => {
        const file = event.target.files[0];

        setFilePreview(file);
        setValue('file', file);
    }

    const onSubmit = async (formData) => {
        // console.log(formData);
        const body = {
            title: formData.title,
            description: formData.description,
            author: user.username,
            categories: []
        };

        if (formData.file?.size) {
            const file = formData.file;
            const data = new FormData();
            const filename = Date.now() + file.name;

            data.append('name', filename);
            data.append('file', file);

            body.image = filename;

            try {
                await http.post('/upload', data);
            } catch (error) {
                console.error(error);
            }
        }

        const response = await http.post('/post', body);
        navigate(`/post/${response.data._id}`);
    }

    return (
        <div className='create'>
            {
                filePreview &&
                <img className='createImage' src={URL.createObjectURL(filePreview)} alt="Image" />
            }
            <form className='createForm' onSubmit={handleSubmit(onSubmit)}>
                <div className="createFormGroup">
                    <label htmlFor="fileInput">
                        <i className="createIcon fa-solid fa-arrow-up-from-bracket"></i>
                    </label>
                    <input type="file" id='fileInput'
                        style={{ display: 'none' }}
                        {...register('file')}
                        onChange={onSelectFile}
                    />
                    <input type="text" placeholder='Title'
                        className='createInput' autoFocus={true}
                        {...register('title', { required: true, minLength: 5 })}
                    />
                </div>
                <div className='createFormGroup error'>
                    {errors.title?.type === 'required' && <span>This field is required</span>}
                    {errors.title?.type === 'minLength' && <span>This field should be more than 4 symbols</span>}
                </div>
                <div className="createFormGroup">
                    <textarea
                        className='createInput createText'
                        placeholder='Tell your story...'
                        rows={10}
                        {...register('description', { required: true })}
                    ></textarea>
                </div>
                <div className='createFormGroup error'>
                    {errors.description?.type === 'required' && <span>This field is required</span>}
                </div>
                <button className='createSubmit' type='submit'>Publish</button>
            </form>
        </div>
    )
}
