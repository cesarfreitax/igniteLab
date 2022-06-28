import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){
    const {slug} = useParams<{slug: string}>()

    const [menu, setMenu] = useState(false);

    const menubtn = {
        display: menu ? "block" : "none"
    }
        
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 lg:flex-row flex-col">
                <button className="lg:hidden border border-green-400 h-12 w-12 self-end mt-2 mb-2 mr-2" onClick={() => setMenu(!menu)}>
                    <div className="border-green-400 border m-2"></div>
                    <div className="border-green-400 border m-2"></div>
                    <div className="border-green-400 border m-2"></div>
                </button>

                <div className="lg:hidden mx-auto pt-2 pb-2" style={menubtn}>
                    <Sidebar />
                </div>

                {slug ? <Video lessonSlug={slug}/> : <div className="flex-1"/>}
                <div className="hidden lg:block">
                <Sidebar />
                </div>
            </main>
            
        </div>
        
    )
}