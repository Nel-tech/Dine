// 'use client';

// import { db } from '../../../Services/Auth/config';
// import { useAuth } from '../../../Context/AuthContext';
// import { doc, addDoc, getDoc, collection, getDocs } from 'firebase/firestore';
// import { useEffect, useState } from 'react';
// import {toast} from 'sonner'
// import axios from 'axios'

 
// import { Button } from '../../../Components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '../../../Components/ui/card';
// import { Input } from '../../../Components/ui/input';
 
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '../../../Components/ui/table';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '../../../Components/ui/dialog';
// import { Label } from '../../../Components/ui/label';
// import { Textarea } from '../../../Components/ui/textarea';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '../../../Components/ui/select';


// // Sample data



// const categories = [
//   'Main Dishes',
//   'Snacks',
//   'SeaFood',
//   'Drinks',
//   'Soups',
//   'Swallows',
//   'Add-Ons',
// ];
// type Order = {
//   id: string;
//   customerName: string;
//   status: string;
//   total: number;
//   items: { name: string; price: number }[];
//   date?: string;
//   people?: number;
// };

// type Payment = {
//   amount: string;
//   id: string;
//   email: string;
//   reference: string;
//   customerName: string;
//   status: string;
//   total: number;
//   timestamp?: string;
// };

// export default function AdminDashboard() {
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [totalCustomers, setTotalCustomers] = useState(0);
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [payments, setPayments] = useState<Payment[]>([]);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isAddFoodOpen, setIsAddFoodOpen] = useState(false);
//   const [loading, setLoading]= useState(false)
//  const [newFood, setNewFood] = useState<
//   { id: string; name: string; category: string; price: number; image: string; description: string }[]
// >([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "foods"));
//       const foodsArray = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(), // Ensure doc.data() is properly structured
//       }));

//       console.log("Fetched foodsArray:", foodsArray); // Debugging

//       setNewFood(foodsArray); // Ensure it's an array
//     } catch (error) {
//       console.error("Error fetching foods:", error);
//     }
//   };

//   fetchData();
// }, []);

// // Handle File Selection
// const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     setNewFood((prev) => ({ ...prev, image: file })); // Store the file object
//   }
// };

// // Upload Image to Firebase
// const handleImageUpload = async (file: File) => {
//   if (!file) return null;

//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", "default_img"); // Use your actual upload preset
//   formData.append("public_id", `foods/images/${file.name.replace(/\s+/g, "-").toLowerCase()}`); 

//   try {
//     const response = await axios.post(
//       "https://api.cloudinary.com/v1_1/dviiuiir8/image/upload",
//       formData
//     );

//     console.log("Upload Response:", response.data); // Log full response for debugging

//     return {
//       imageUrl: response.data.secure_url, // Image URL
//       publicId: response.data.public_id,  // Cloudinary's unique ID
//     };
//   } catch (error) {
//     console.error("Image upload error:", error);
//     return null;
//   }
// };



// // Submit Form
// const handleSubmit = async () => {
//   try {
//     if (!newFood.name || !newFood.category || !newFood.price || !newFood.image) {
//       toast.error("All fields are required!");
//       return;
//     }

//     // Upload image to Cloudinary
//     const imageUrl = await handleImageUpload(newFood.image);
//     if (!imageUrl) {
//       toast.error("Image upload failed!");
//       return;
//     }

//     // Save food item to Firestore
//     await addDoc(collection(db, "foods"), {
//       name: newFood.name,
//       category: newFood.category,
//       price: parseFloat(newFood.price),
//       image: imageUrl,
//       description: newFood.description || "",
//     });

//     toast.success("Food item added successfully!");
//     setIsAddFoodOpen(false);
//   } catch (error) {
//     console.error("Error adding food item:", error);
//     toast.error("Failed to add food item.");
//   }
// };



  
 
    
//   useEffect(() => {
//     const fetchTotalAmount = async () => {
//       try {
//         const paymentsCollection = collection(db, 'payments');
//         const paymentsSnapshot = await getDocs(paymentsCollection);

//         let total = 0;
//         paymentsSnapshot.forEach((doc) => {
//           const data = doc.data();
//           if (data.amount) {
//             total += Number(data.amount);
//           }
//         });

//         setTotalAmount(total);
//       } catch (error) {
//         console.error('Error fetching total payments:', error);
//       }
//     };

//     const fetchTotalCustomers = async () => {
//       try {
//         const customerCollection = collection(db, 'users');
//         const customerSnapshot = await getDocs(customerCollection);

//         const total = customerSnapshot.size; // Get the number of users
//         setTotalCustomers(total);
//       } catch (error) {
//         console.error('Error fetching total customers:', error);
//       }
//     };
//     fetchTotalAmount();
//     fetchTotalCustomers();
//   }, []);

//   const fetchOrdersAndReservations = async () => {
//     try {
//       setLoading(true);

//       // Step 1: Get all users
//       const usersCollection = collection(db, 'users');
//       const usersSnapshot = await getDocs(usersCollection);

//       let allOrders: Order[] = [];

//       // Step 2: Loop through each user
//       for (const userDoc of usersSnapshot.docs) {
//         const userId = userDoc.id;

//         // Step 3: Get user's cart (orders)
//         const cartCollection = collection(db, `users/${userId}/cart`);
//         const cartSnapshot = await getDocs(cartCollection);

//         let items: { name: string; price: number }[] = [];
//         let total = 0;

//         cartSnapshot.forEach((itemDoc) => {
//           const itemData = itemDoc.data();
//           items.push({
//             name: itemData.Name, // Use correct field name from Firestore
//             price: itemData.BasePrice || 0,
//           });
//           total += itemData.BasePrice || 0;
//         });

//         // Step 4: Get user's reservations
//         const reservationsCollection = collection(
//           db,
//           `users/${userId}/reservations`
//         );
//         const reservationsSnapshot = await getDocs(reservationsCollection);

//         if (!reservationsSnapshot.empty) {
//           reservationsSnapshot.forEach((reservationDoc) => {
//             const reservationData = reservationDoc.data();

//             // Step 5: Combine data into an order object
//             allOrders.push({
//               id: reservationDoc.id,
//               customerName: reservationData.name || 'Unknown',
//               items: [...items], // Include cart items
//               date: reservationData.date || 'N/A',
//               people: reservationData.people || 1,
//               total: total,
            
//             });
//           });
//         } else {
//           // If no reservation exists, create an order with only cart data
//           if (items.length > 0) {
//             allOrders.push({
//               id: `${userId}-cart`, // Unique identifier for cart-only orders
//               customerName: 'Unknown',
//               items: [...items],
//               total: total,
//               status: 'Pending',
//             });
//           }
//         }
//       }

//       setOrders(allOrders);
//     } catch (error) {
//       console.error('Error fetching orders and reservations:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchPayments = async () => {
//     try {
//       setLoading(true);
//       console.log('Fetching payments...');

//       const paymentCollection = collection(db, 'payments');
//       const paymentSnapshot = await getDocs(paymentCollection);

//       let allPayments = [];

//       for (const paymentDoc of paymentSnapshot.docs) {
//         const paymentId = paymentDoc.id;
//         const paymentData = paymentDoc.data();

//         let paymentDetails = {
//           paymentId: paymentId,
//           email: paymentData.email,
//           status: paymentData.status || 'Unknown',
//           amount: paymentData.amount || 0,
//           customerName: 'Unknown',
//           reference: paymentData.reference,
//           timestamp: paymentData.timestamp?.seconds 
//   ? new Date(paymentData.timestamp.seconds * 1000).toLocaleDateString("en-US")
//   : "N/A",

//         };

//         try {
//           if (paymentData.userId) {
//             console.log(
//               `Fetching reservation for userId: ${paymentData.userId}`
//             );

//             // Assuming reservationId is the same as userId
//             const reservationRef = doc(
//               db,
//               `users/${paymentData.userId}/reservations/${paymentData.userId}`
//             );
//             const reservationSnap = await getDoc(reservationRef);

//             if (reservationSnap.exists()) {
//               const reservationData = reservationSnap.data();
//               console.log('Fetched reservation data:', reservationData);

//               // Use correct field name
//               if (reservationData.name) {
//                 paymentDetails.customerName = reservationData.name;
//               } else {
//                 console.warn(
//                   "No 'name' field found in reservation document:",
//                   reservationData
//                 );
//               }
//             } else {
//               console.warn(
//                 'Reservation document does not exist:',
//                 `users/${paymentData.userId}/reservations/${paymentData.userId}`
//               );
//             }
//           } else {
//             console.warn('Missing userId in payment data:', paymentData);
//           }
//         } catch (error) {
//           console.error('Error fetching reservation:', error);
//         }

//         allPayments.push(paymentDetails);
//       }

//       setPayments(allPayments);
//     } catch (error) {
//       console.error('Error fetching payments:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Initial fetch
//     fetchOrdersAndReservations();
//     fetchPayments();

//     // Auto-refresh every 10 seconds
//     const interval = setInterval(() => {
//       fetchOrdersAndReservations();
//     }, 10000); // 10 seconds

//     // Cleanup function to stop the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

  
 

//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-gray-50">
//         <Sidebar className="border-r border-gray-200">
//           <SidebarHeader className="border-b border-gray-200 px-6 py-4">
//             <div className="flex items-center gap-2">
//               <Utensils className="h-6 w-6 text-[#AD343E]" />
//               <span className="text-xl font-bold">FoodAdmin</span>
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarMenu>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   onClick={() => setActiveTab('overview')}
//                   isActive={activeTab === 'overview'}
//                 >
//                   <BarChart3 className="h-5 w-5" />
//                   <span>Overview</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   onClick={() => setActiveTab('orders')}
//                   isActive={activeTab === 'orders'}
//                 >
//                   <ShoppingBag className="h-5 w-5" />
//                   <span>Orders</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   onClick={() => setActiveTab('payments')}
//                   isActive={activeTab === 'payments'}
//                 >
//                   <CreditCard className="h-5 w-5" />
//                   <span>Payments</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   onClick={() => setActiveTab('foods')}
//                   isActive={activeTab === 'foods'}
//                 >
//                   <Utensils className="h-5 w-5" />
//                   <span>Foods</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             </SidebarMenu>
//           </SidebarContent>
//           <SidebarFooter className="border-t border-gray-200 p-4">
//             <div className="flex items-center gap-3">
//               <Avatar>
//                 <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
//                 <AvatarFallback>AD</AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-sm: font-medium">Admin User</p>
//                 <p className="text-xs text-gray-500">admin@example.com</p>
//               </div>
//             </div>
//           </SidebarFooter>
//         </Sidebar>

//         <div className="flex-1 overflow-auto">
//           <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
//             <SidebarTrigger className="md:hidden" />

//             <div className="ml-auto flex items-center gap-4">
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button variant="ghost" size="icon" className="rounded-full">
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
//                       <AvatarFallback>AD</AvatarFallback>
//                     </Avatar>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent align="end">
//                   <DropdownMenuLabel>My Account</DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>Profile</DropdownMenuItem>
//                   <DropdownMenuItem>Settings</DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem>Logout</DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </header>

//           <main className="p-6">
//             {activeTab === 'overview' && (
//               <div className="space-y-6">
//                 <div>
//                   <h1 className="text-3xl font-bold text-[#AD343E]">
//                     Dashboard Overview
//                   </h1>
//                   <p className="text-gray-500">Welcome back, Admin User</p>
//                 </div>

//                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between pb-2">
//                       <CardTitle className="text-sm: font-medium">
//                         Total Revenue
//                       </CardTitle>
//                       <CreditCard className="h-4 w-4 text-gray-500" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">#{totalAmount}</div>
//                       <p className="text-xs text-gray-500">
//                         +15.3% from last month
//                       </p>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader className="flex flex-row items-center justify-between pb-2">
//                       <CardTitle className="text-sm: font-medium">
//                         Customers
//                       </CardTitle>
//                       <Users className="h-4 w-4 text-gray-500" />
//                     </CardHeader>
//                     <CardContent>
//                       <div className="text-2xl font-bold">
//                         +{totalCustomers}
//                       </div>
//                       <p className="text-xs text-gray-500">
//                         +18.2% from last month
//                       </p>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="grid gap-6 md:grid-cols-2">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Recent Orders</CardTitle>
//                       <CardDescription>
//                         Latest 5 orders placed on your platform
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead>Order ID</TableHead>
//                             <TableHead>Customer</TableHead>
//                             {/* <TableHead>Status</TableHead> */}
//                             <TableHead className="text-right">Amount</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {orders.slice(0, 5).map((order) => (
//                             <TableRow key={order.id}>
//                               <TableCell className="font-medium">
//                                 {order.id.substring(0, 8)}
//                               </TableCell>
//                               <TableCell>{order.customerName}</TableCell>
//                               {/* <TableCell>
//                                 <Badge variant={order.status === "Completed" ? "default" : "outline"}>
//                                   {order.status}
//                                 </Badge>
//                               </TableCell> */}
//                               <TableCell className="text-right">
//                                 ₦{order.total}
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardHeader>
//                       <CardTitle>Recent Payments</CardTitle>
//                       <CardDescription>
//                         Latest 5 payments received
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <Table>
//                         <TableHeader>
//                           <TableRow>
//                             <TableHead>Payment ID</TableHead>
//                             <TableHead>Customer</TableHead>
//                             <TableHead>Status</TableHead>
//                             <TableHead className="text-right">Amount</TableHead>
//                           </TableRow>
//                         </TableHeader>
//                         <TableBody>
//                           {payments.slice(0, 5).map((payment: any) => (
//                             <TableRow key={payment.id}>
//                               <TableCell className="font-medium">
//                                 {payment.paymentId}
//                               </TableCell>
//                               <TableCell>{payment.customerName}</TableCell>
//                               <TableCell>
//                                 <Badge
//                                   variant={
//                                     payment.status === 'Successful'
//                                       ? 'default'
//                                       : 'outline'
//                                   }
//                                 >
//                                   {payment.status}
//                                 </Badge>
//                               </TableCell>
//                               <TableCell className="text-right">
//                                 #{payment.amount.toFixed(2)}
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'orders' && (
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h1 className="text-3xl font-bold text-[#AD343E]">
//                       Orders
//                     </h1>
//                     <p className="text-gray-500">Manage all customer orders</p>
//                   </div>
//                 </div>

//                 <Card>
//                   <CardContent className="pt-6">
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="w-[100px]">
//                             <div className="flex items-center">
//                               Order ID
//                               <ArrowUpDown className="ml-2 h-4 w-4" />
//                             </div>
//                           </TableHead>
//                           <TableHead>Customer</TableHead>
//                           <TableHead>Items</TableHead>
//                           <TableHead>
//                             <div className="flex items-center">
//                               Date
//                               <ArrowUpDown className="ml-2 h-4 w-4" />
//                             </div>
//                           </TableHead>
//                           {/* <TableHead>Status</TableHead> */}
//                           <TableHead className="text-right">Total</TableHead>
//                           <TableHead className="text-right">Actions</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {orders.map((order) => (
//                           <TableRow key={order.id}>
//                             <TableCell className="font-medium">
//                               {order.id.substring(0, 8)}
//                             </TableCell>
//                             <TableCell>{order.customerName}</TableCell>
//                             <TableCell>
//                               <TableCell>
//                                 <div className="flex flex-col">
//                                   {order.items.map((item, index) => (
//                                     <span key={index} className="text-sm:">
//                                       {item.name}
//                                       {index < order.items.length - 1
//                                         ? ','
//                                         : ''}
//                                     </span>
//                                   ))}
//                                 </div>
//                               </TableCell>
//                             </TableCell>
//                             <TableCell>{order.date}</TableCell>
//                             {/* <TableCell>
//                               <Badge variant={order.status === "Completed" ? "default" : "outline"}>
//                                 {order.status}
//                               </Badge>
//                             </TableCell> */}
//                             <TableCell className="text-right">
//                               ${order.total.toFixed(2)}
//                             </TableCell>
//                             <TableCell className="text-right">
//                               <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                   <Button variant="ghost" size="icon">
//                                     <MoreVertical className="h-4 w-4" />
//                                     <span className="sr-only">Actions</span>
//                                   </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent align="end" className='bg-gray-50'>
//                                   <DropdownMenuItem>
//                                     View details
//                                   </DropdownMenuItem>
                                 
//                                   <DropdownMenuSeparator />
//                                   <DropdownMenuItem className="text-red-600">
//                                     Cancel order
//                                   </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                               </DropdownMenu>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}

//             {activeTab === 'payments' && (
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h1 className="text-3xl font-bold text-[#AD343E]">
//                       Payments
//                     </h1>
//                     <p className="text-gray-500">
//                       Track all payment transactions
//                     </p>
//                   </div>
//                 </div>

//                 <Card>
//                   <CardContent className="pt-6">
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="w-[100px]">
//                             <div className="flex items-center">
//                               Payment ID
                             
//                             </div>
//                           </TableHead>
//                           <TableHead>Customer</TableHead>
//                           <TableHead>Email</TableHead>
//                           <TableHead>
//                             <div className="flex items-center">
//                               Date
//                               <ArrowUpDown className="ml-2 h-4 w-4" />
//                             </div>
//                           </TableHead>
//                           <TableHead>Status</TableHead>
//                           <TableHead className="text-right">Amount</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                       <TableBody>
//                         {payments.map((payment) => (
//                           <TableRow key={payment.id}>
//                             <TableCell className="font-medium">
//                               {payment.reference.substring(0, 8)}
//                             </TableCell>
//                             <TableCell>{payment.customerName}</TableCell>
//                             <TableCell>{payment.email}</TableCell>
//                             <TableCell>{payment.timestamp}</TableCell> 
//                             <TableCell>
//                               <Badge
//                                 variant={
//                                   payment.status === 'Successful'
//                                     ? 'default'
//                                     : 'outline'
//                                 }
//                               >
//                                 {payment.status}
//                               </Badge>
//                             </TableCell>
//                             <TableCell className="text-right">
//                               #{payment.amount}
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}

//             {activeTab === 'foods' && (
//               <div className="space-y-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h1 className="text-3xl font-bold text-[#AD343E]">
//                       Food Items
//                     </h1>
//                     <p className="text-gray-500">Manage your food catalog</p>
//                   </div>
//                   <Dialog open={isAddFoodOpen} onOpenChange={setIsAddFoodOpen}>
//                     <DialogTrigger asChild>
//                       <Button className="bg-[#AD343E] hover:bg-[#8A2A32]">
//                         <Plus className="mr-2 h-4 w-4" />
//                         Add New Food
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="bg-gray-50 sm:max-w-[500px]">
//                       <DialogHeader>
//                         <DialogTitle>Add New Food Item</DialogTitle>
//                         <DialogDescription>
//                           Fill in the details to add a new food item to your
//                           catalog.
//                         </DialogDescription>
//                       </DialogHeader>
//                       <div className="grid gap-4 py-4">
//                         <div className="grid gap-2">
//                           <Label htmlFor="food-name">Name</Label>
//                           <Input
//                             id="food-name"
//                             placeholder="Enter food name"
//                             value={newFood.name}
//                             onChange={(e) =>
//                               setNewFood({ ...newFood, name: e.target.value })
//                             }
//                           />
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="food-category">Category</Label>
//                           <Select
//                             value={newFood.category}
//                             onValueChange={(value) =>
//                               setNewFood({ ...newFood, category: value })
//                             }
//                           >
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select a category" />
//                             </SelectTrigger>
//                             <SelectContent className='bg-gray-50'>
//                               {categories.map((category) => (
//                                 <SelectItem
//                                   key={category}
//                                   value={category}
//                                   className=""
//                                 >
//                                   {category}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <div className="grid gap-2">
//                           <Label htmlFor="food-price">Price ($)</Label>
//                           <Input
//                             id="food-price"
//                             type="number"
//                             placeholder="0.00"
//                             value={newFood.price}
//                             onChange={(e) =>
//                               setNewFood({ ...newFood, price: e.target.value })
//                             }
//                           />
//                         </div>
                       
//                        <div className="grid gap-2">
//   <Label htmlFor="food-image">Image</Label>
//   <div className="flex items-center gap-4">
//     {newFood.image ? (
//       <div className="relative h-20 w-20 overflow-hidden rounded-md border">
//         <img
//           src={URL.createObjectURL(newFood.image)} 
//           alt="Food preview"
//           className="h-full w-full object-cover"
//         />
//       </div>
//     ) : (
//       <div className="flex h-20 w-20 items-center justify-center rounded-md border bg-gray-50">
//         <ImageIcon className="h-8 w-8 text-gray-400" />
//       </div>
//     )}
//     <Label
//       htmlFor="food-image-upload"
//       className="cursor-pointer rounded-md bg-gray-100 px-4 py-2 text-sm: font-medium hover:bg-gray-200"
//     >
//       Upload Image
//     </Label>
//     <Input
//       id="food-image-upload"
//       type="file"
//       accept="image/*"
//       className="hidden"
//       onChange={handleFileChange} // FIXED: File selection
//     />
//   </div>
// </div>

//                       </div>
//                       <DialogFooter>
//                         <Button
//                           variant="outline"
//                           onClick={() => setIsAddFoodOpen(false)}
//                         >
//                           Cancel
//                         </Button>
//                         <Button
//                           className="bg-[#AD343E] hover:bg-[#8A2A32]"
//                           onClick={handleSubmit}
//                         >
//                           Add Food Item
//                         </Button>
//                       </DialogFooter>
//                     </DialogContent>
//                   </Dialog>
//                 </div>

//                 <Card>
//                   <CardContent className="pt-6">
//                     <Table>
//                       <TableHeader>
//                         <TableRow>
//                           <TableHead className="w-[80px]">Image</TableHead>
//                           <TableHead>Name</TableHead>
//                           <TableHead>Category</TableHead>
//                           <TableHead className="text-right">Price</TableHead>
//                         </TableRow>
//                       </TableHeader>
//                     <TableBody>
//   {newFood.map((food) => (
//     <TableRow key={food.id}>
//       <TableCell>
//         <img src={food.image.imageUrl} alt={food.name} className="h-12 w-12 rounded-md object-cover" />

//       </TableCell>
//       <TableCell className="font-medium">{food.name}</TableCell>
//       <TableCell>
//         <Badge variant="outline">{food.category}</Badge>
//       </TableCell>
     
//       <TableCell className="text-right">#{food.price.toFixed(2)}</TableCell>
//       <TableCell className="text-right">
       
//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>


//                     </Table>
//                   </CardContent>
//                 </Card>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </SidebarProvider>
//   );
// }
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../../Components/ui/dropdown-menu';

import { BarChart3, ShoppingBag, CreditCard, Utensils } from 'lucide-react';

import { Button } from '../../../Components/ui/button';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../Components/ui/avatar';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '../../../Components/ui/sidebar';

// import Categoriesm:anagement from './Components/Categories/Categories-Management';
import DashBoardOverview from './Components/DashBoard/DashBoardOverview';
import FoodManagement from './Components/Food/Food-Management';
import OrderManagement from './Components/Orders/Order-Management';
import PaymentManagement from './Components/Payments/Payments-Management';

import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Utensils className="h-6 w-6 text-[#AD343E]" />
              <span className="text-xl font-bold">DINE</span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('overview')}
                  isActive={activeTab === 'overview'}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('orders')}
                  isActive={activeTab === 'orders'}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Orders</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('payments')}
                  isActive={activeTab === 'payments'}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Payments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => setActiveTab('foods')}
                  isActive={activeTab === 'foods'}
                >
                  <Utensils className="h-5 w-5" />
                  <span>Foods</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add Categories Button */}
              
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm: font-medium">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="ml-auto flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                      <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="p-6">
            {activeTab === 'overview' && <DashBoardOverview />}
            {activeTab === 'orders' && <OrderManagement />}
            {activeTab === 'payments' && <PaymentManagement />}
            {activeTab === 'foods' && <FoodManagement />}
            {/* {activeTab === 'categories' && <Categoriesm:anagement />} */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
