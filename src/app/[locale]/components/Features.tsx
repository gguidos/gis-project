const Features = () => {
    return (
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Features</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-800">Blockchain Solutions</h3>
              <p className="mt-2 text-gray-600">Innovative blockchain technology for your business needs.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-800">Tech Academy</h3>
              <p className="mt-2 text-gray-600">Learn to code with our hands-on programs and expert guidance.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl text-gray-800">Consulting</h3>
              <p className="mt-2 text-gray-600">Expert consulting services to help you scale your tech projects.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  