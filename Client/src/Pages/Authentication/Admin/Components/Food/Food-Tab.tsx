"use client"

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Badge } from "../../../../../Components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../../Components/ui/table";

import { db } from "../../../../../Services/Auth/config";

interface Food {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export default function FoodsTable() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "foods"));
        const foodsArray = querySnapshot.docs.map((doc) => ({
          foodid: doc.id,
          ...(doc.data() as Food), // Ensure type safety
        }));

        console.log("Fetched foodsArray:", foodsArray); // Debugging

        setFoods(foodsArray);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Food Items</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
           
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {foods.length > 0 ? (
            foods.map((food) => (
              <TableRow key={food.id}>
                <TableCell>
                  <img
                    src={food.image?.imageUrl  || "/placeholder.png"}
                    alt={food.name}
                    className="h-12 w-12 rounded-md object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{food.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{food.category}</Badge>
                </TableCell>
               
                <TableCell className="text-right">#{food.price ? food.price.toFixed(2) : "0.00"}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center text-gray-500">
                No food items available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
