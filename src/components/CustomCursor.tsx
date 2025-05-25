import { useEffect, useState, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  };

  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.querySelectorAll("a, button").forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [onMouseMove]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isPointer ? 0.8 : 1,
          }}
          transition={{ type: "spring", damping: 20 }}
          className="relative"
        >
          <div className="w-8 h-8 bg-white rounded-full" />
          {isHovering && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute inset-0 bg-white rounded-full blur-sm"
            />
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0.5 : 1,
            opacity: isPointer ? 0.5 : 0.2,
          }}
          className="w-16 h-16 bg-white rounded-full blur-xl"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
