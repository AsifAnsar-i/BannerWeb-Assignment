"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";

export type EditBannerProps = {
  open: boolean;
  banner: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
  onClose: () => void;
  onSave: (banner: any) => void;
};

const EditBannerTemplateBs = ({
  open,
  banner,
  onClose,
  onSave,
}: EditBannerProps) => {
  const [editedBanner, setEditedBanner] = useState(banner);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBanner({
      ...editedBanner,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(editedBanner);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} className="p-6">
      <DialogTitle className="text-2xl font-semibold mb-4">Edit Banner</DialogTitle>
      <DialogContent className="space-y-4">
        <TextField
          name="title"
          label="Title"
          value={editedBanner.title}
          onChange={handleChange}
          fullWidth
          className="bg-gray-100 rounded-lg shadow-md"
          InputLabelProps={{ className: "text-gray-700" }}
        />
        <TextField
          name="description"
          label="Description"
          value={editedBanner.description}
          onChange={handleChange}
          fullWidth
          className="bg-gray-100 rounded-lg shadow-md"
          InputLabelProps={{ className: "text-gray-700" }}
        />
        <TextField
          name="cta"
          label="CTA"
          value={editedBanner.cta}
          onChange={handleChange}
          fullWidth
          className="bg-gray-100 rounded-lg shadow-md"
          InputLabelProps={{ className: "text-gray-700" }}
        />
        <TextField
          name="image"
          label="Image URL"
          value={editedBanner.image}
          onChange={handleChange}
          fullWidth
          className="bg-gray-100 rounded-lg shadow-md"
          InputLabelProps={{ className: "text-gray-700" }}
        />
        <TextField
          name="background"
          label="Background"
          value={editedBanner.background}
          onChange={handleChange}
          fullWidth
          className="bg-gray-100 rounded-lg shadow-md"
          InputLabelProps={{ className: "text-gray-700" }}
        />
        <div className="flex justify-end space-x-4">
          <Button 
            onClick={onClose} 
            variant="outlined" 
            className="text-gray-700 border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            color="primary" 
            className="bg-blue-500 text-white hover:bg-blue-400"
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBannerTemplateBs;

