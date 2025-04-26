export const productCategories = [
    {
        id: 1,
        name: "Sofas & Seating",
        image: "https://via.placeholder.com/300x200?text=Sofas",
    },
    {
        id: 2,
        name: "Dining Tables",
        image: "https://via.placeholder.com/300x200?text=Dining+Tables",
    },
    {
        id: 3,
        name: "Office Furniture",
        image: "https://via.placeholder.com/300x200?text=Office+Furniture",
    },
    {
        id: 4,
        name: "Bedroom Sets",
        image: "https://via.placeholder.com/300x200?text=Bedroom+Furniture",
    },
    {
        id: 5,
        name: "Hotel Furniture",
        image: "https://via.placeholder.com/300x200?text=Hotel+Furniture",
    },
    {
        id: 6,
        name: "Restaurant Chairs",
        image: "https://via.placeholder.com/300x200?text=Restaurant+Chairs",
    },
];


export function Dateformatter(dateString) {

    // Define the date string

    // const dateString = '2024-09-18T19:36:55.417Z';

    // Create a Date object from the string

    const date = new Date(dateString);

    // Define options for formatting the date and time
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    // Format the date and time
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);

    // Combine both parts
    const finalOutput = `${formattedTime} ${formattedDate}`;

    return finalOutput; // Return the formatted date and time


}




export const ourProductList = [

    {

        image: "/landing/products/bar_stool.png",
        title: "Bar Stools",
        description: "Raising the Bar on comfort and style ",
    },
    {

        image: "/landing/products/center_table.png",
        title: "Gather Round, Elevate your space",
        description: "Gather Round and Elevate  your space"
    },
    {

        image: "/landing/products/sofa.png",
        title: "Sofa",
        description: "Raising the Bar on comfort and style "
    },
    {

        image: "/landing/products/table.png",
        title: "Dining Table",
        description: "Raising the Bar on comfort and style "
    }
]

export const navbarData = [

    {

        title: "About Us",
        link: "about-us",
    },
    {

        title: "Why Mayuri",
        link: "why-mayuri",

    },
    {

        title: "Privacy Policy",
        link: "privacy-policy",

    },
    {

        title: "Career",
        link: "career-page",

    },
    {

        title: "Contact",
        link: "contact-us",

    }
]


export function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}




export const verticalProductData = [

    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-08.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-04.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-01.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-02.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-06.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-03.png&w=640&q=75",
];



export const listedCatgories = [

    "Home Furniture",
    "Hotel Furniture",
    "Office Furniture",
    "Educational",
    "OutDoor",
    "Metal Furniture",
    "Catalogue",

]



export function removeSpacesAndExtraBracktes(str){

    console.log("str is ",str);

    return decodeURIComponent(str).replace(/-/g, " ").replace(/%20/g, " ").replace(/\s+/g, "").toLowerCase();

}
