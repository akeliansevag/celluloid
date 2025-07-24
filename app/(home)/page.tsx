import Header from "@/components/layout/headers/header";
import About from "@/components/common/about";
import Hero from "@/components/pages/(home)/home-1/hero";
import ProjectArea from "@/components/pages/(home)/home-1/project-area";
import OurAchievement from "@/components/common/our-achievement";
import ServiceArea from "@/components/pages/(home)/home-1/service-area";
import Testimonial from "@/components/pages/(home)/home-1/testimonial";
import ClientArea from "@/components/common/client-area";
import BlogArea from "@/components/common/blog-area";
import Footer from "@/components/layout/footers/footer";
import AboutArea from "@/components/common/about-area";

export const metadata = {
    title: "Home",
};

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About
                heading="We’re not just keeping pace with telecom evolution — we’re driving it. Our fully customized, in-house solutions are designed to challenge legacy limits and set new industry standards."
                paragraph="Backed by a culture of constant improvement and customer-centric excellence, we empower operators and enterprises with smarter, faster, and more agile telecom innovations."
            />
            
            <OurAchievement />
            <AboutArea style="style-2"/>
            {/* <ProjectArea /> */}
            <ServiceArea />
            <Testimonial />
            <ClientArea />
            <BlogArea />
            <Footer />
        </>
    );
};

export default Home;
