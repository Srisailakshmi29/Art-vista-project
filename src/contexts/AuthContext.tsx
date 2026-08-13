import React, { createContext, useContext, useEffect, useState } from 'react' 
 
interface User { 
id: string 
email: string 
name?: string 
} 
 
interface AuthContextType { 
user: User | null 
login: (email: string, password: string) => Promise<void> 
signup: (email: string, password: string, name: string) => Promise<void> 
logout: () => void 
loading: boolean 
} 
 
const AuthContext = createContext<AuthContextType | undefined>(undefined) 
 
export const useAuth = () => { 
const context = useContext(AuthContext) 
if (context === undefined) { 
throw new Error('useAuth must be used within an AuthProvider') 
} 
return context 
} 
 
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => { 
const [user, setUser] = useState<User | null>(null) 
const [loading, setLoading] = useState(true) 
 
useEffect(() => { 
const savedUser = localStorage.getItem('artvista_user') 
if (savedUser) { 
setUser(JSON.parse(savedUser)) 
} 
setLoading(false) 
}, []) 
 
 
const login = async (email: string, password: string) => { 
const mockUser = { id: '1', email, name: email.split('@')[0] } 
setUser(mockUser) 
localStorage.setItem('artvista_user', JSON.stringify(mockUser)) 
} 
 
const signup = async (email: string, password: string, name: string) => { 
const mockUser = { id: Date.now().toString(), email, name } 
setUser(mockUser) 
localStorage.setItem('artvista_user', JSON.stringify(mockUser)) 
} 
 
const logout = () => { 
setUser(null) 
localStorage.removeItem('artvista_user') 
} 
 
const value = { 
user, 
login, 
signup, 
logout, 
loading, 
} 
 
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
} 