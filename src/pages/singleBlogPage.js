import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../hooks/useServices";
import commonApis from "../services/commonApis";

function SingleBlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const navigate = useNavigate();
  const getOneBlogApi = useServices(commonApis.getOneBlog);
  const getOneBlogApiHandle = async () => {
    const response = await getOneBlogApi.callApi(blogId);
    setBlog(response ? response : "");
  };
  useEffect(() => {
    if (blogId) {
      getOneBlogApiHandle();
    }
  }, [blogId]);
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "auto",
        padding: { xs: 2, md: 4 },
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Button
        variant="text"
        onClick={() => navigate(-1)}
        sx={{
          mb: 3,
          textTransform: "none",
          fontWeight: "medium",
          color: "#6A1B9A",
          "&:hover": {
            backgroundColor: "transparent",
            color: "primary.dark",
          },
        }}
      >
        ← Back to Blogs
      </Button>

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "text.primary",
          mb: 3,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        {blog?.title}
      </Typography>

      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ mb: 4, fontStyle: "italic" }}
        className="text-textGray"
      >
        By {blog?.authorName} |{" "}
        {new Date(blog?.publishedAt)?.toLocaleDateString()}
      </Typography>

      <Box
        component="div"
        sx={{
          width: "100%",
          position: "relative",
          borderRadius: 1,
          mb: 4,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
          // Fixed height for laptop/desktop (min-width: 900px)
          height: { xs: "auto", md: "525px" }, // Mobile: auto, Desktop: 525px
          // Maintain 4:5 aspect ratio for mobile (xs) using padding
          paddingTop: { xs: "125%", md: 0 }, // Only apply aspect ratio on mobile
        }}
      >
        <Box
          component="img"
          src={`${
            process.env.REACT_APP_API_Aws_Image_BASE_URL + blog?.coverImage
          }`}
          alt={blog?.title}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // Show full image (no cropping) with letterboxing if needed
            objectFit: "contain",
            // Optional: Add a background for letterboxed areas
            bgcolor: "background.default",
          }}
        />
      </Box>

      <Typography
        dangerouslySetInnerHTML={{ __html: blog?.content }}
        variant="body1"
        sx={{
          textAlign: "justify",
          lineHeight: 1.8,
          "& img": {
            maxWidth: "100%",
            height: "auto",
            borderRadius: 1,
            mt: 2,
            mb: 2,
            border: "1px solid",
            borderColor: "divider",
          },
        }}
        className="text-textGray"
      />
    </Box>
  );
}

export default SingleBlogPage;
