import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Button } from "../../../../../Components/ui/button";
import { Input } from "../../../../../Components/ui/input";
import { Label } from "../../../../../Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../../Components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../../../Components/ui/dialog";
import { toast } from "sonner";
import axios from "axios";
import { db } from "../../../../../Services/Auth/config";
import { addDoc, collection } from "firebase/firestore";

const categories = [
  "Main Dishes",
  "Snacks",
  "SeaFood",
  "Drinks",
  "Soups",
  "Swallows",
  "Add-Ons",
];

interface AddFoodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddFoodDialog({ open, onOpenChange }: AddFoodDialogProps) {
  const [newFood, setNewFood] = useState({
    name: "",
    category: "",
    price: 0,
    image: null as File | null, // Ensure image is either File or null
    description: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewFood((prev) => ({ ...prev, image: file })); // Store file object
    }
  };

  
  const handleImageUpload = async (file: File) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "default_img"); // Use your actual upload preset
    formData.append("public_id", `foods/images/${file.name.replace(/\s+/g, "-").toLowerCase()}`);

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dviiuiir8/image/upload",
        formData
      );

      return response.data.secure_url; // Return only the image URL
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      if (!newFood.name || !newFood.category || !newFood.price || !newFood.image) {
        toast.error("All fields are required!");
        return;
      }

      // Upload image to Cloudinary
      const imageUrl = await handleImageUpload(newFood.image);
      if (!imageUrl) {
        toast.error("Image upload failed!");
        return;
      }

      // Save food item to Firestore
      await addDoc(collection(db, "foods"), {
        name: newFood.name,
        category: newFood.category,
        price: parseFloat(newFood.price.toString()), // Ensure price is a number
        image: imageUrl,
        description: newFood.description || "",
      });

      toast.success("Food item added successfully!");
      onOpenChange(false); // Close the dialog
    } catch (error) {
      console.error("Error adding food item:", error);
      toast.error("Failed to add food item.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-gray-50">
        <DialogHeader>
          <DialogTitle>Add New Food Item</DialogTitle>
          <DialogDescription>Fill in the details to add a new food item to your catalog.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="food-name">Name</Label>
            <Input
              id="food-name"
              placeholder="Enter food name"
              value={newFood.name}
              onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-category">Category</Label>
            <Select
              value={newFood.category}
              onValueChange={(value) => setNewFood({ ...newFood, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className='bg-gray-50'>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="food-price">Price ($)</Label>
            <Input
              id="food-price"
              type="number"
              placeholder="0.00"
              value={newFood.price}
              onChange={(e) =>
                setNewFood({ ...newFood, price: parseFloat(e.target.value) || 0 })
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="food-image">Image</Label>
            <div className="flex items-center gap-4">
              {newFood.image ? (
                <div className="relative h-20 w-20 overflow-hidden rounded-md border">
                  <img
                    src={URL.createObjectURL(newFood.image)}
                    alt="Food preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-md border bg-gray-50">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
              <Label
                htmlFor="food-image-upload"
                className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-sm: font-medium hover:bg-gray-200"
              >
                Upload Image
              </Label>
              <Input
                id="food-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-[#AD343E] hover:bg-[#8A2A32]" onClick={handleSubmit}>
            Add Food Item
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
