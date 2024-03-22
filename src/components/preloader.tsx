



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


  return (
    <>
        <div>
            <p className="text-xl font-bold">{res.quote}</p>
            <p > ~ {res.author}</p>
        </div>

    </>
  )
}

export default preloader