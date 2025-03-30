import "./create.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import http from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import image from "../../images/logo.jpg";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Create() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [filePreview, setFilePreview] = useState("");
  const [isOpenFilePreview, setIsOpenFilePreview] = useState(false);
  const [categories, setCategories] = useState("");

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    setIsOpenFilePreview(true);
    setFilePreview(file);
    setValue("file", file);
  };

  const handlePostImage = async (e) => {
    e.preventDefault();
    const image = e.target.previousElementSibling.value;
    if (!image) return;

    const data = {};

    try {
      const res = await http.post("/gallery", image);
      data.url = res.data.url;

      try {
        await http.post("/picture", data);
        navigate(`/gallery`);
      } catch (error) {}
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newFile = filePreview;

    const body = {
      title: e.target[2].value,
      description: e.target[3].value,
      author: user.username,
      categories: categories.split(","),
    };

    const file = newFile;
    const data = new FormData();
    const filename = Date.now() + file.name;

    data.append("name", filename);
    data.append("file", file);

    try {
      const res = await http.post("/upload", data);
      body.image = res.data.url;
      
      try {
        const response = await http.post("/post", body);
        console.log(response);

        navigate(`/post/${response.data._id}`);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create">
      <h3 className="createTitle">Create Section</h3>
      <img className="createImg" src={image} alt="" />
      <div className="createSection">
        <h3 className="createSectionTitle">Create a Blog</h3>
        {filePreview && isOpenFilePreview && (
          <div className="previewContainer">
            <div
              className="previewContainerClose"
              onClick={() => setIsOpenFilePreview(false)}
            >
              ×
            </div>
            <img
              className="createImage"
              src={URL.createObjectURL(filePreview)}
              alt="ss"
            />
          </div>
        )}
        <form className="createForm" onSubmit={(e) => onSubmit(e)}>
          <div className="createFormGroup">
            <div className="createFormGroupOptions">
              <input
                type="file"
                id="fileInput"
                {...register("file")}
                onChange={onSelectFile}
              />
              <input
                type="text"
                placeholder="Enter categories (should be comma seperated)"
                className="createInput category"
                autoFocus={true}
                {...register("category", { required: true, minLength: 5 })}
                onChange={(e) => setCategories(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Title"
              className="createInput"
              autoFocus={true}
              {...register("title", { required: true, minLength: 5 })}
            />
          </div>
          <div className="createFormGroup error">
            {errors.title?.type === "required" && (
              <span>This field is required</span>
            )}
            {errors.title?.type === "minLength" && (
              <span>This field should be more than 4 symbols</span>
            )}
          </div>
          <div className="createFormGroup">
            <ReactQuill
              className="createInput createText"
              placeholder="Tell your story..."
              rows={10}
              {...register("description", { required: true })}
            ></ReactQuill>
          </div>
          <div className="createFormGroup error">
            {errors.description?.type === "required" && (
              <span>This field is required</span>
            )}
          </div>
          <button className="createSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>

      <div className="createSection">
        <h3 className="createSectionTitle">Add Image To Gallery</h3>
        <input type="file" className="galleryImageInput" />
        <button className="postButton" onClick={handlePostImage}>
          POST IMAGE TO GALLERY
        </button>
      </div>
    </div>
  );
}
