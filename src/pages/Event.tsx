import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Event() {
    return (

        <div className="flex flex-col min-h-screen">
            <Header />
        <main className="flex">
            <Sidebar/>
            <Video />
        </main>
          

        </div>
        

    )


}


//video 26:00