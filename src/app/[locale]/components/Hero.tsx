const Hero = () => {
    return (
      <section className="">
        <div className="w-[1440px] h-[58rem] bg-background items-center text-center justify-center">

            {/* Relative position on this div */}
            <div className="relative flex mx-auto h-[48rem] w-[1312px] py-20" style={{ backgroundImage: 'url(/git-commit.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
                {/* Text positioned in the bottom-right corner */}
                <div className="absolute right-0 bottom-0 p-6 text-right">
                    <h1 className="text-5xl mt-4 text-foreground">Unlock your code,</h1>
                    <h1 className="text-5xl text-foreground">Unblock your potential.</h1>
                </div>

            </div>
        </div>
      </section>
    );
};


  export default Hero