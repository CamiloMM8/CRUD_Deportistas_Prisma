import { useEffect } from "react";
import ContentSection from "../components/ContentSection";
import { useNavigate } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/deportistas")
  }, [])
  
  return (
   <>
   
    <ContentSection/>
   
   </>
  )
}
