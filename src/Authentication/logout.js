import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

async function logout() {
    const navigate = useNavigate;
    try {
        // Ensure the request completes with "await"
        await axios.post('https://test.3scorers.com/api/v1/admin/logout');
        
        toast.success("Logged out successfully");
        
        // Navigate to the login page
        navigate('/');
    } catch (error) {
        toast.error("Failed to log out");
    }
}

export default logout;
