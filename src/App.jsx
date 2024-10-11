import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import ScrollToTop from "./components/ScrollToTop";
import { CrudProvider } from "./context/CrudProvider";

export default function App() {
    return (
        <CrudProvider>
            <div className="font-mono bg-background text-white p-4">
                <h1 className="text-center text-warning font-bold text-4xl p-8"> JSON Placeholder</h1>
                <AddPost />
                <Posts />
                <ScrollToTop />
            </div>
        </CrudProvider>
    )
}