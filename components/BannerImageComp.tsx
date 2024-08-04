import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export type BannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
};


const BannerImageComp = ({
  title,
  description,
  cta,
  image,
  background,
  onEdit,
}: BannerProps) => {
  return (
    <Card
      className="px-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: "20px",
        height: "450px",
      }}
    >
      <CardMedia
        className="w-[300px] h-[250px]  ml-96 mt-48 rounded-full"
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent className="-mt-72 flex flex-col gap-y-10">
        <Typography className="text-5xl -mt-28" variant="h5">
          {title}
        </Typography>
        <Typography
          className="mb-16 text-xl mt-10 font-light"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
        <button className="flex items-center justify-center py-2 px-3 bg-blue-500 text-white rounded w-[150px]">
          {cta}
        </button>
        <IconButton
          className="ml-[600px] -mt-[370px] text-white"
          onClick={onEdit}
        >
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default BannerImageComp;
