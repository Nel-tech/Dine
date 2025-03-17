import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Services/Auth/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// Define the context type
interface AuthContextType {
  user: User | null;
  role: string;
  loading: boolean;
}

// Create Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProps = {
  children: ReactNode;
};

// Provider Component
export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>("user"); // Default role
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔄 AuthProvider - Checking Auth State...");
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("👤 AuthProvider - Current User:", currentUser?.email || "None");

      if (!currentUser) {
        console.log("🚫 AuthProvider - No User Logged In");
        setUser(null);
        setRole("user");
        setLoading(false);
        return;
      }

      try {
        let newRole = "user";

        // Run both Firestore queries in parallel
        const [adminSnap, userSnap] = await Promise.all([
          getDoc(doc(db, "Admin", currentUser.uid)),
          getDoc(doc(db, "users", currentUser.uid)),
        ]);

        if (adminSnap.exists()) {
          console.log("✅ AuthProvider - User found in Admin collection");
          newRole = "admin";
        } else if (userSnap.exists()) {
          newRole = userSnap.data()?.role ?? "user";
          console.log(`✅ AuthProvider - User found in Users collection with role: ${newRole}`);
        } else {
          console.log("❌ AuthProvider - User not found in any collection");
        }

        setRole(newRole);
        setUser(currentUser);
      } catch (error) {
        console.error("❌ AuthProvider - Firestore Fetch Error:", error);
        setRole("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
