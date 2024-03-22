import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

function preloader() {

    const quotes = [
        { 
            quote: "A true passion that burns within your soul is one that can never be put out",
            author: "Zach Toelke"
        },
        { 
            quote: "Love what you do and do what you love. ",
            author: "David Cuschieri"
        },
        { 
            quote: "Passion is the genesis of genius.",
            author: "Tony Robbins"
        },
        { 
            quote: "The very basis of a man’s living spirit is his passion for adventure.",
            author: "Christopher McCandless"
        },
        { 
            quote: "Passion is the genesis of genius.",
            author: "Tony Robbins"
        },
    ]

    const res = quotes[(Math.floor(Math.random() * quotes.length))];
    const words = res.quote;

    //getting the values into an array for use
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.2),
        }
      );
    }, [scope.current]);

    //to render the effect
    const renderWords = () => {
        return (
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className="dark:text-white text-black opacity-0 text-xl font-bold"
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </motion.div>
        );
      };

  return (
    <>
        <div>
            {renderWords()}
            <p > ~ {res.author}</p>
        </div>

    </>
  )
}

export default preloader