import "./create.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import http from "../../utils/axios";
import { useNavigate } from "react-router-dom";

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

  const onSubmit = async (formData) => {
    const body = {
      title: formData.title,
      description: formData.description,
      author: user.username,
      categories: categories.split(","),
    };

    if (formData.file?.size) {
      const file = formData.file;
      const data = new FormData();
      const filename = Date.now() + file.name;

      data.append("name", filename);
      data.append("file", file);

      try {
        const res = await http.post("/upload", data);
        body.image = res.data.url;

        try {
          const response = await http.post("/post", body);
          navigate(`/post/${response.data._id}`);
        } catch (error) {}
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="create">
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
      <form className="createForm" onSubmit={handleSubmit(onSubmit)}>
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
          <textarea
            className="createInput createText"
            placeholder="Tell your story..."
            rows={10}
            {...register("description", { required: true })}
          ></textarea>
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
  );
}
