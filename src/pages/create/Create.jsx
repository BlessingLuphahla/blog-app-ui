import "./create.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import http from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import image from "../../images/logo.jpg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loading from "../../components/loading/Loading";

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
  // const [filePreview, setFilePreview] = useState("");
  const [isOpenFilePreview, setIsOpenFilePreview] = useState(false);
  const [categories, setCategories] = useState("");
  const [quillText, setQuillText] = useState("");
  const [publishLoading, setPublishLoading] = useState(false);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    setIsOpenFilePreview(true);
    setFilePreview(file);
    setValue("file", file);
  };

  const handlePostImage = async (e) => {
    e.preventDefault();
    var imageFile = e.target.previousElementSibling;
    const image = imageFile.files[0];

    if (!image) return;

    const ImageData = new FormData();
    const filename = Date.now() + image.name;

    ImageData.append("name", filename);
    ImageData.append("file", image);

    const data = {};

    try {
      setImageUploadLoading(true);
      const res = await http.post("/gallery", ImageData);
      data.url = res.data.url;
      setImageUploadLoading(false);

      try {
        setImageUploadLoading(true);
        await http.post("/picture", data);
        setImageUploadLoading(false);
        imageFile.value = null;
        navigate(`/gallery`);
      } catch (error) {
        setImageUploadLoading(false);
      }
    } catch (error) {
      console.error(error);
      setImageUploadLoading(false);
    }
  };

  const handleQuillText = (value) => {
    setQuillText(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newFile = filePreview;

    const body = {
      title: e.target[2].value,
      description: quillText,
      author: user.username,
      categories: categories.split(","),
    };

    const file = newFile;
    const data = new FormData();
    const filename = Date.now() + file.name;

    data.append("name", filename);
    data.append("file", file);

    try {
      setPublishLoading(true);
      const res = await http.post("/upload", data);
      body.image = res.data.url;
      setPublishLoading(false);

      try {
        setPublishLoading(true);
        const response = await http.post("/post", body);
        setPublishLoading(false);

        navigate(`/post/${response.data._id}`);
      } catch (error) {
        console.error(error);
        setPublishLoading(false);
      }
    } catch (error) {
      console.error(error);
      setPublishLoading(false);
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
                placeholder="Enter categories (should be comma separated)"
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
              value={quillText}
              onChange={handleQuillText}
              rows={10}
            ></ReactQuill>
          </div>
          <div className="createFormGroup error">
            {errors.description?.type === "required" && (
              <span>This field is required</span>
            )}
          </div>
          <button className="createSubmit" type="submit">
            {publishLoading ? <Loading /> : "Publish"}
          </button>
        </form>
      </div>

      <div className="createSection">
        <h3 className="createSectionTitle">Add Image To Gallery</h3>
        <input type="file" className="galleryImageInput" />
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
        <button className="postButton" onClick={(e) => handlePostImage(e)}>
          {imageUploadLoading ? <Loading /> : "POST IMAGE TO GALLERY"}
        </button>
      </div>
    </div>
  );
}
