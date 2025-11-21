import { useNavigate } from "react-router-dom";
//import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 mb-4 
                 bg-gray-800 text-white rounded-xl 
                 hover:bg-gray-700 active:scale-95 
                 transition-all duration-200 shadow-lg">
      {/* // <ArrowLeft size={20} /> */}
      <span>Back</span>
    </button>
  );
}
