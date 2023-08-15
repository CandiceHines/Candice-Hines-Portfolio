import logo from './logo.svg';
import './App.css';

function App() {
    return (
    <div className="bg-white w-full h-screen">
        <div className={"flex flex-col items-center justify-center bg-fixed bg-cover h-screen w-screen object-center bg-[url('../public/fictional-planet-with-colourful-night-sky-stars-nebula.jpg')] bg-scroll custom-background"}>
            <div className={"box-content bg-gray-50 w-3/4 h-2/4 rounded-b-2xl rounded-t-2xl opacity-10 shadow-2xl shadow-black"}>
            </div>
            <div className={"flex items-right justify-items-right bg-fixed"}>
                <img src={"/IMG_7374.jpg"} className={"h-96 w-86 bg-opacity-0 z-10 absolute inset-y-36 inset-x-14 inset rounded-t-2xl rounded-b-2xl bg-fixed shadow-white shadow-2xl"}/>
            </div>
        </div>
    </div>
)
}

export default App;
