import React from "react";

const AboutUs = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/804876.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Fithub</h1>
        <p className="text-lg">
        FitHub is the ultimate destination for fitness enthusiasts, whether you're just starting your fitness journey or looking to take your training to the next level. Designed for individuals passionate about health and wellness, FitHub offers a vibrant community where you can share progress, learn new techniques, and stay motivated.

From strength training and yoga to cardio and nutrition tips, FitHub makes it easy to explore diverse fitness styles and find what works best for you. Connect with like-minded fitness lovers, participate in challenges, and showcase your achievements. It's not just about workouts—it's about building a lifestyle that celebrates fitness, health, and personal growth.

FitHub is where fitness becomes more than just a routine; it’s a supportive community dedicated to helping you unlock your full potential.        </p>
      </div>
    </div>
  );
};

export default AboutUs;
