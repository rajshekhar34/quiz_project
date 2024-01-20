const questions = [
 
{
   question: "Who was the first Prime Minister of India?",
    answer: [
        { text: "Sardar Patel", correct: false },
        { text: "Jawaharlal Nehru", correct: true },
        { text: "Indira Gandhi", correct: false },
        { text: "Subhas Chandra Bose", correct: false }
    ]
},
{
    question: "Which is the heavier metal of these two? Gold or Silver?",
    answer: [
        { text: "Gold", correct: true },
        { text: "Silver", correct: false },
        { text: "They weigh the same", correct: false },
        { text: "Depends on the form (e.g., solid, liquid)", correct: false }
    ]
},


    {
        question: "Who is the Father of our Nation?",
        answer: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "Who was the first President of India?",
        answer: [
            { text: "Dr. Rajendra Prasad", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false },
            { text: "Indira Gandhi", correct: false }
        ]
    },
    {
        question: "Who is known as Father of Indian Constitution?",
        answer: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Dr. B. R. Ambedkar", correct: true },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Which is the most sensitive organ in our body?",
        answer: [
            { text: "Eyes", correct: false },
            { text: "Nose", correct: false },
            { text: "Skin", correct: true },
            { text: "Tongue", correct: false }
        ]
    },
    {
        question: "Giddha is the folk dance of?",
        answer: [
            { text: "Haryana", correct: false },
            { text: "Punjab", correct: true },
            { text: "Gujarat", correct: false },
            { text: "Rajasthan", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answer: [
            { text: "Sardar Patel", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which is the heavier metal of these two? Gold or Silver?",
        answer: [
            { text: "Gold", correct: true },
            { text: "Silver", correct: false },
            { text: "They weigh the same", correct: false },
            { text: "Depends on the form (e.g., solid, liquid)", correct: false }
        ]
    },
    {
        question: "Who invented Computer?",
        answer: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "1024 Kilobytes is equal to?",
        answer: [
            { text: "1 Gigabyte (GB)", correct: false },
            { text: "1 Megabyte (MB)", correct: true },
            { text: "1 Terabyte (TB)", correct: false },
            { text: "1 Petabyte (PB)", correct: false }
        ]
    },
    {
        question: "Brain of computer is?",
        answer: [
            { text: "RAM", correct: false },
            { text: "Hard Drive", correct: false },
            { text: "CPU", correct: true },
            { text: "GPU", correct: false }
        ]
    },
    {
        question: "India lies in which continent?",
        answer: [
            { text: "Europe", correct: false },
            { text: "Asia", correct: true },
            { text: "Africa", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Which country are the Giza Pyramids in?",
        answer: [
            { text: "India", correct: false },
            { text: "Egypt", correct: true },
            { text: "Mexico", correct: false },
            { text: "China", correct: false }
        ]
    },
    {
        question: "What city is the statue of liberty in?",
        answer: [
            { text: "Washington D.C.", correct: false },
            { text: "Los Angeles", correct: false },
            { text: "New York City", correct: true },
            { text: "Chicago", correct: false }
        ]
    },
    {
        question: "How many Cricket world cups does India have?",
        answer: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "Martyrs’ Day is celebrated every year on?",
        answer: [
            { text: "15th August", correct: false },
            { text: "26th January", correct: false },
            { text: "30th January", correct: true },
            { text: "2nd October", correct: false }
        ]
    },
    {
        question: "Name the first 3 planets in our solar system?",
        answer: [
            { text: "Mars, Venus, Earth", correct: false },
            { text: "Mercury, Venus, Mars", correct: false },
            { text: "Mercury, Venus, Earth", correct: true },
            { text: "Mars, Jupiter, Saturn", correct: false }
        ]
    },
    {
        question: "Which is the longest river on the earth?",
        answer: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Ganges", correct: false },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "Gir National Park in Gujarat is famous for?",
        answer: [
            { text: "Elephants", correct: false },
            { text: "Tigers", correct: false },
            { text: "Lion", correct: true },
            { text: "Leopards", correct: false }
        ]
    },
    {
        question: "Which animal has hump on its back?",
        answer: [
            { text: "Horse", correct: false },
            { text: "Camel", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Name 3 root vegetables?",
        answer: [
            { text: "Potato, Tomato, Onion", correct: false },
            { text: "Beets, Carrots, Radish", correct: true },
            { text: "Cabbage, Broccoli, Cauliflower", correct: false },
            { text: "Lettuce, Spinach, Kale", correct: false }
        ]
    },
    {
        question: "Name the game which is played with bat, ball and wicket?",
        answer: [
            { text: "Soccer", correct: false },
            { text: "Tennis", correct: false },
            { text: "Cricket", correct: true },
            { text: "Baseball", correct: false }
        ]
    },
    {
        question: "Smallest state of India is?",
        answer: [
            { text: "Maharashtra", correct: false },
            { text: "Goa", correct: true },
            { text: "Sikkim", correct: false },
            { text: "Kerala", correct: false }
        ]
    },
    {
        question: "Fastest animal on earth is?",
        answer: [
            { text: "Lion", correct: false },
            { text: "Cheetah", correct: true },
            { text: "Gazelle", correct: false },
            { text: "Peregrine Falcon", correct: false }
        ]
    },
    {
        question: "Which is the animal referred to as the ship of the desert?",
        answer: [
            { text: "Elephant", correct: false },
            { text: "Horse", correct: false },
            { text: "Camel", correct: true },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which plant grows in the desert?",
        answer: [
            { text: "Fern", correct: false },
            { text: "Cactus", correct: true },
            { text: "Rose", correct: false },
            { text: "Sunflower", correct: false }
        ]
    },
    {
        question: "Highest dam of India is?",
        answer: [
            { text: "Bhakra Dam", correct: false },
            { text: "Sardar Sarovar Dam", correct: false },
            { text: "Tehri Dam", correct: true },
            { text: "Nagarjuna Sagar Dam", correct: false }
        ]
    },
    {
        question: "The total distance around a figure is called its?",
        answer: [
            { text: "Diameter", correct: false },
            { text: "Circumference", correct: true },
            { text: "Radius", correct: false },
            { text: "Perimeter", correct: false }
        ]
    },
    {
        question: "A figure with 8 sides is called?",
        answer: [
            { text: "Octopus", correct: false },
            { text: "Hexagon", correct: false },
            { text: "Octagon", correct: true },
            { text: "Pentagon", correct: false }
        ]
    },
    {
        question: "What color symbolizes peace?",
        answer: [
            { text: "Red", correct: false },
            { text: "Green", correct: false },
            { text: "Blue", correct: false },
            { text: "White", correct: true }
        ]
    },
    {
        question: "National Tree of India is?",
        answer: [
            { text: "Peepal", correct: false },
            { text: "Neem", correct: false },
            { text: "Banyan", correct: true },
            { text: "Mango", correct: false }
        ]
    },
    {
        question: "Which flower is white in color?",
        answer: [
            { text: "Rose", correct: false },
            { text: "Lily", correct: false },
            { text: "Jasmine", correct: true },
            { text: "Sunflower", correct: false }
        ]
    },
    {
        question: "Agra is situated on the bank of the river?",
        answer: [
            { text: "Ganges", correct: false },
            { text: "Yamuna", correct: true },
            { text: "Brahmaputra", correct: false },
            { text: "Godavari", correct: false }
        ]
    },
    {
        question: "Baby of a horse is called?",
        answer: [
            { text: "Calf", correct: false },
            { text: "Filly", correct: false },
            { text: "Colt", correct: true },
            { text: "Foal", correct: false }
        ]
    },
    {
        question: "National animal of India?",
        answer: [
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Tiger", correct: true },
            { text: "Leopard", correct: false }
        ]
    },
    {
        question: "Shape of an egg is?",
        answer: [
            { text: "Round", correct: false },
            { text: "Oval", correct: true },
            { text: "Square", correct: false },
            { text: "Cylindrical", correct: false }
        ]
    },
    {
        question: "Most widely spoken language in the world is?",
        answer: [
            { text: "English", correct: false },
            { text: "Spanish", correct: false },
            { text: "Mandarin (Chinese)", correct: true },
            { text: "Hindi", correct: false }
        ]
    }


]


