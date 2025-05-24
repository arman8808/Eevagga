import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function CategoryDisplayCard({ image, text, onClick, catId }) {
  const history = useNavigate();
  const handleSearch = (categoryId, categoryName) => {
    const query = new URLSearchParams({
      q: "",
      category: categoryId,
    }).toString();
    Cookies.set("selectedCategoryId", categoryId, { expires: 1 });
    Cookies.set("selectedCategory", categoryName, { expires: 1 });
    history(`/search?${query}`);
  };
  return (
    <div
      className="min-w-[130px] min-h-[120px]  flex flex-col items-center gap-2 cursor-pointer"
      onClick={() => handleSearch(catId, text)}
    >
      <div className="w-full rounded-lg flex items-center justify-center aspect-[4/3]">
        <img
          src={image && process.env.REACT_APP_API_Aws_Image_BASE_URL + image}
          alt="Category"
          className="w-[70%] h-auto object-contain"
          width="800" // Add approximate intrinsic width
          height="600" // Add approximate intrinsic height
          loading="lazy"
        />
      </div>

      <p class="text-sm font-medium text-primary text-center break-words min-h-[1em]">
        {text ? text : "Default Text"}
      </p>
    </div>
  );
}

export default CategoryDisplayCard;
