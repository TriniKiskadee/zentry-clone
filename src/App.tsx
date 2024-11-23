import Hero from "./components/hero.tsx";
import About from "./components/about.tsx";
import Navbar from "./components/navbar.tsx";
import Features from "./components/features.tsx";
import Story from "./components/story.tsx";
import Contact from "./components/contact.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
            <Footer />
        </main>
    )
}
export default App
