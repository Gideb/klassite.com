import { memo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Team from "../../assets/images/header/teamWorking.jpg";


const OtherHeroSection = ({
  pageName = "About",
  backgroundImage = Team,
  showBreadcrumbs = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let sticks = [];

    // Number of sticks
    const STICK_COUNT = 20;

    // Initialize sticks
    const initSticks = () => {
      sticks = [];
      for (let i = 0; i < STICK_COUNT; i++) {
        sticks.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          direction: Math.random() > 0.5 ? 1 : -1,
          speed: 2 + Math.random() * 3,
          length: 20 + Math.random() * 30,
          width: 2 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.4,
          delay: Math.random() * 100,
        });
      }
    };

    // Resize canvas to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initSticks();
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height / 2;

      sticks.forEach((stick) => {
        stick.y += stick.direction * stick.speed;

        const distanceFromCenter = Math.abs(stick.y - centerY);
        const maxDistance = canvas.height / 2;

        if (distanceFromCenter < maxDistance * 0.3) {
          const slowDownFactor = Math.max(
            0.2,
            distanceFromCenter / (maxDistance * 0.3),
          );
          stick.speed = Math.max(0.5, (2 + Math.random() * 3) * slowDownFactor);
        } else {
          stick.speed = 2 + Math.random() * 3;
        }

        const opacityFactor = Math.max(0, 1 - distanceFromCenter / maxDistance);
        const currentOpacity = stick.opacity * opacityFactor;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 155, ${currentOpacity})`;
        ctx.lineWidth = stick.width;
        ctx.lineCap = "round";

        ctx.moveTo(stick.x, stick.y - stick.length / 2);
        ctx.lineTo(stick.x, stick.y + stick.length / 2);
        ctx.stroke();

        if (stick.y < -stick.length || stick.y > canvas.height + stick.length) {
          stick.y =
            stick.direction === 1
              ? -stick.length
              : canvas.height + stick.length;
          stick.x = Math.random() * canvas.width;
          stick.opacity = 0.3 + Math.random() * 0.4;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] w-full">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt={`${pageName} page background`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-purple-800/60 mix-blend-multiply"></div>

          {/* Animated sticks canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ mixBlendMode: "overlay" }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Content - Centered on image with breadcrumbs */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {showBreadcrumbs && (
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm sm:text-base">
                <li className="flex items-center">
                  <Link
                    to="/"
                    className="text-white/90 hover:underline px-2 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-white/60 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white px-2 font-medium">{pageName}</span>
                </li>
              </ol>
            </nav>
          )}

          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-white text-center">
            {pageName}
          </h1>
        </div>
      </div>

      {/* Decorative wave or gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white/40 to-transparent"></div>
    </section>
  );
};

export default memo(OtherHeroSection);
