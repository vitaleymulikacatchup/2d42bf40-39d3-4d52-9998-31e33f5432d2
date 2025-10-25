"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Crown, MessageSquare, Star, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" }
          ]}
          brandName="The Grand Aurora"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled elegance at The Grand Aurora, where every moment becomes a cherished memory in the heart of paradise."
          tag="5-Star Excellence"
          tagIcon={Star}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant furnishing"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Where Elegance Meets Excellence"
          description={[
            "For over three decades, The Grand Aurora has been the epitome of luxury hospitality, setting the standard for exceptional service and unforgettable experiences.",
            "Our commitment to creating magical moments for our guests has earned us recognition as one of the world's premier destinations for discerning travelers."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover an array of exceptional facilities designed to enhance every aspect of your stay"
          tag="Luxury Services"
          tagIcon={Crown}
          features={[
            {
              title: "Serenity Spa & Wellness",
              description: "Rejuvenate your body and soul with our award-winning spa treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Culinary Excellence",
              description: "Savor exquisite cuisine crafted by world-renowned chefs in our signature restaurants",
              imageSrc: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant"
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active with our state-of-the-art fitness center and recreational facilities",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern fitness center"
            },
            {
              title: "Infinity Pool Oasis",
              description: "Unwind in our stunning infinity pool overlooking breathtaking panoramic views",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury infinity pool"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our selection of elegantly appointed suites and rooms, each designed for ultimate comfort"
          tag="Premium Stays"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Ocean Suite",
              price: "From $450/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe suite with ocean view",
              onProductClick: null
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "From $1,200/night",
              imageSrc: "https://images.pexels.com/photos/8089070/pexels-photo-8089070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite living area",
              onProductClick: null
            },
            {
              id: "oceanview",
              name: "Premium Ocean View",
              price: "From $650/night",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ocean view room balcony",
              onProductClick: null
            }
          ]}
          layout="default"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional service reflected in guest satisfaction"
          tag="Awards & Recognition"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "2",
              value: "30+",
              description: "Years of Excellence"
            },
            {
              id: "3",
              value: "150K+",
              description: "Happy Guests Served"
            },
            {
              id: "4",
              value: "25",
              description: "International Awards"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover what makes The Grand Aurora unforgettable through our guests' eyes"
          tag="Testimonials"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Executive Director, Thomson Global",
              testimonial: "The Grand Aurora exceeded every expectation. The attention to detail, impeccable service, and breathtaking views created an unforgettable experience for our anniversary celebration.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James & Emma Roberts",
              role: "Honored Guests",
              testimonial: "From the moment we arrived, we were treated like royalty. The staff's warmth and the hotel's elegance made our honeymoon absolutely magical. We'll treasure these memories forever.",
              imageSrc: "https://images.pexels.com/photos/8249281/pexels-photo-8249281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James and Emma Roberts"
            },
            {
              id: "3",
              name: "Michael Chen",
              role: "Business Travel Consultant",
              testimonial: "The perfect blend of luxury and functionality. The business amenities are world-class, and the peaceful ambiance provided the ideal environment for both work and relaxation.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "4",
              name: "Isabella Rodriguez",
              role: "Travel & Lifestyle Blogger",
              testimonial: "In my years of reviewing luxury hotels, The Grand Aurora stands apart. Every detail has been thoughtfully curated to create an experience that defines true hospitality excellence.",
              imageSrc: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Rodriguez"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The dedicated professionals who ensure your stay is nothing short of extraordinary"
          tag="Our People"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alexander Sterling",
              role: "General Manager",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Alexander Sterling"
            },
            {
              id: "2",
              name: "Sophie Laurent",
              role: "Guest Relations Director",
              imageSrc: "https://images.pexels.com/photos/6474521/pexels-photo-6474521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sophie Laurent"
            },
            {
              id: "3",
              name: "Chef Marcus Dubois",
              role: "Executive Chef",
              imageSrc: "https://images.pexels.com/photos/6937472/pexels-photo-6937472.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Chef Marcus Dubois"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Let us help you create an unforgettable experience. Contact our reservations team for personalized assistance with your booking."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your preferences or special requests...",
            rows: 4,
            required: false
          }}
          buttonText="Send Inquiry"
          imageSrc="https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="The Grand Aurora hotel exterior at night"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="The Grand Aurora"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "restaurant" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Awards", href: "awards" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}