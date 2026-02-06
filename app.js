(() => {
  const STORAGE_KEYS = {
    questions: "pyq_practice_questions_v1",
    progress: "pyq_practice_progress_v1",
  };

  const DEFAULT_QUESTIONS = [
  {
    "id": "bpsc-2020-001",
    "subject": "Science",
    "year": "2020",
    "question": "The radiations used in the treatment of muscle ache are:",
    "options": [
      "Infrared",
      "Microwave",
      "Ultraviolet",
      "X-ray",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-002",
    "subject": "Science",
    "year": "2020",
    "question": "The total resistance of a circuit having two parallel resistors is 1.403 kilo-ohm. If one of the resistors is 2.0 kilo-ohm, then the other resistor will be:",
    "options": [
      "1.403 kilo-ohm",
      "2.0 kilo-ohm",
      "3.403 kilo-ohm",
      "470 kilo-ohm",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-003",
    "subject": "Science",
    "year": "2020",
    "question": "On heating, the resistance of a semiconductor:",
    "options": [
      "Increases",
      "Decreases",
      "Remains the same",
      "First increases and then decreases",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-004",
    "subject": "Science",
    "year": "2020",
    "question": "Faraday constant:",
    "options": [
      "Depends on the amount of the electrolyte",
      "Depends on the current passed in the electrolyte",
      "Depends on the volume of the solvent in which the electrolyte is dissolved",
      "Is a universal constant",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-005",
    "subject": "Science",
    "year": "2020",
    "question": "‘Light-year’ is a unit of:",
    "options": [
      "Time",
      "Speed",
      "Distance",
      "Intensity of light",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-006",
    "subject": "Science",
    "year": "2020",
    "question": "Which of the following does not change when light travels from one medium to another?",
    "options": [
      "Velocity",
      "Wavelength",
      "Frequency",
      "Refractive index",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-007",
    "subject": "Science",
    "year": "2020",
    "question": "The velocity of electromagnetic waves is:",
    "options": [
      "3 × 10^8 m/s",
      "3 × 10^7 m/s",
      "3 × 10^9 m/s",
      "3 × 10^6 m/s",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-008",
    "subject": "Science",
    "year": "2020",
    "question": "The first man who placed his foot on the moon is:",
    "options": [
      "Leonov",
      "Neil Armstrong",
      "Michael Collins",
      "James Van Allen",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-009",
    "subject": "Science",
    "year": "2020",
    "question": "The number of neutrons in the nucleus of plutonium nuclide (94Pu242) is:",
    "options": [
      "94",
      "148",
      "242",
      "336",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-010",
    "subject": "Science",
    "year": "2020",
    "question": "The highest viscosity among the following is of:",
    "options": [
      "Water",
      "Air",
      "Blood",
      "Honey",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-011",
    "subject": "Science",
    "year": "2020",
    "question": "Milk is a poor source of:",
    "options": [
      "Calcium",
      "Protein",
      "Vitamin C",
      "Carbohydrate",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-012",
    "subject": "Science",
    "year": "2020",
    "question": "The breath test conducted by police to check a drunken driver has which one of the following on the filter paper?",
    "options": [
      "Potassium dichromate – sulfuric acid",
      "Potassium permanganate – sulfuric acid",
      "Silica gel coated with silver nitrate",
      "Turmeric",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-013",
    "subject": "Science",
    "year": "2020",
    "question": "Glucose is converted to ethyl alcohol by the enzyme:",
    "options": [
      "Maltase",
      "Invertase",
      "Zymase",
      "Diastase",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-014",
    "subject": "Science",
    "year": "2020",
    "question": "Limewater is turned milky by:",
    "options": [
      "Carbon monoxide",
      "Carbon dioxide",
      "Oxygen",
      "Ozone",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-015",
    "subject": "Science",
    "year": "2020",
    "question": "The incomplete burning of petrol and diesel produces:",
    "options": [
      "Nitric oxide",
      "Nitrogen dioxide",
      "Carbon dioxide",
      "Carbon monoxide",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-016",
    "subject": "Science",
    "year": "2020",
    "question": "The pH of a solution changes from 3 to 6. The H⁺ ion concentration will:",
    "options": [
      "Increase 3 times",
      "Decrease 3 times",
      "Decrease 10 times",
      "Decrease 1000 times",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-017",
    "subject": "Science",
    "year": "2020",
    "question": "A mixture of sand and naphthalene can be separated by:",
    "options": [
      "Sublimation",
      "Distillation",
      "Chromatography",
      "Fractional distillation",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-018",
    "subject": "Science",
    "year": "2020",
    "question": "The numbers of sigma and pi bonds in benzene are:",
    "options": [
      "3, 3",
      "3, 6",
      "12, 3",
      "12, 6",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-019",
    "subject": "Science",
    "year": "2020",
    "question": "The elements present in urea are:",
    "options": [
      "C, H, O",
      "C, N, O",
      "C, H, N",
      "C, H, N, O",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-020",
    "subject": "Science",
    "year": "2020",
    "question": "The poorest conductor of heat among the following is:",
    "options": [
      "Copper",
      "Lead",
      "Mercury",
      "Zinc",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-021",
    "subject": "Science",
    "year": "2020",
    "question": "The vitamin which is effective in blood clotting is:",
    "options": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin D",
      "Vitamin K",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-022",
    "subject": "Science",
    "year": "2020",
    "question": "The female sex hormone is:",
    "options": [
      "Estrogen",
      "Androgen",
      "Insulin",
      "Oxytocin",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-023",
    "subject": "Science",
    "year": "2020",
    "question": "The Nobel Prize for developing treatment of Parkinson’s disease was given to:",
    "options": [
      "Arvid Carlsson",
      "John F. Enders",
      "Robert B. Laughlin",
      "Walter Kohn",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-024",
    "subject": "Science",
    "year": "2020",
    "question": "The malfunctioning of thyroid gland is due to the deficiency of:",
    "options": [
      "Vitamin A",
      "Calcium",
      "Iodine",
      "Iron",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-025",
    "subject": "Science",
    "year": "2020",
    "question": "The sensitive area of the human tongue to bitterness is:",
    "options": [
      "Tip",
      "Middle part",
      "Posterior part",
      "Edge",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-026",
    "subject": "Science",
    "year": "2020",
    "question": "Ginger is a stem and not a root because:",
    "options": [
      "It stores food material",
      "It has nodes and internodes",
      "It grows horizontally in the soil",
      "It lacks chlorophyll",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-027",
    "subject": "Science",
    "year": "2020",
    "question": "The sweetest sugar among the following is:",
    "options": [
      "Fructose",
      "Glucose",
      "Maltose",
      "Sucrose",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-028",
    "subject": "Science",
    "year": "2020",
    "question": "Among the following, which is not a true fruit?",
    "options": [
      "Apple",
      "Grape",
      "Date",
      "Plum",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-029",
    "subject": "Science",
    "year": "2020",
    "question": "Legumes are highly nutritious because they are rich in:",
    "options": [
      "Fat",
      "Protein",
      "Oil",
      "Starch",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-030",
    "subject": "Science",
    "year": "2020",
    "question": "Clove, a spice, is obtained from which part of the plant?",
    "options": [
      "Fruit",
      "Stem",
      "Root",
      "Flower bud",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-031",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who has been appointed by the Board of Control for Cricket in India as the Head of All India Women’s Selection Committee?",
    "options": [
      "Mithu Mukherjee",
      "Neetu David",
      "Renu Margrate",
      "V. Kalpana",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-032",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who has won the Women’s Singles US Open Tennis Tournament, 2020?",
    "options": [
      "Naomi Osaka",
      "Bianca Andreescu",
      "Sofia Kenin",
      "Karolina Pliskova",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-033",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which athlete secured first position in the London Marathon held on 4th October, 2020?",
    "options": [
      "Eliud Kipchoge",
      "Shura Kitata",
      "Vincent Kipchumba",
      "Sisay Lemma",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-034",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which Indian cricketer along with M. S. Dhoni announced retirement from international cricket on 15th August, 2020?",
    "options": [
      "Suresh Raina",
      "Harbhajan Singh",
      "Bhuvneshwar Kumar",
      "Rohit Sharma",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-035",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who has been appointed as the Chairperson of the National School of Drama recently?",
    "options": [
      "Mahesh Bhatt",
      "Akshay Kumar",
      "Anupam Kher",
      "Paresh Rawal",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-036",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who is the Chairman of the Defence Research and Development Organisation?",
    "options": [
      "Surjeet Singh Deswal",
      "Dr. G. Satheesh Reddy",
      "Arvind Saxena",
      "Charanjit Singh Attra",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-037",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "For which discipline have Dr. Bushra Ateeq and Dr. Ritesh Agarwal been selected for the Shanti Swarup Bhatnagar Prize, 2020?",
    "options": [
      "Chemical Sciences",
      "Physical Sciences",
      "Medical Sciences",
      "Mathematical Sciences",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-038",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who has been selected for the Nobel Peace Prize, 2020?",
    "options": [
      "European Union",
      "World Food Programme",
      "Robert B. Wilson",
      "Paul R. Milgrom",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-039",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which Indian film actor has been included in the Time Magazine’s list of 100 most influential people of 2020?",
    "options": [
      "Ayushmann Khurrana",
      "Shah Rukh Khan",
      "Ajay Devgn",
      "Sunny Deol",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-040",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "How many Indian beaches have been recommended for the Blue Flag Certification recently?",
    "options": [
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-041",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Ram Vilas Paswan started his political career from which political party?",
    "options": [
      "Janata Party",
      "Bharatiya Lok Dal",
      "Samyukta Socialist Party",
      "Praja Socialist Party",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-042",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "When did the Election Commission of India issue a Press Note for the General Election to the Legislative Assembly of Bihar, 2020?",
    "options": [
      "23rd September, 2020",
      "24th September, 2020",
      "25th September, 2020",
      "26th September, 2020",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-043",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "‘Ghar Tak Fiber’ scheme was launched on 21st September, 2020 through a video conference in which State?",
    "options": [
      "Uttar Pradesh",
      "Madhya Pradesh",
      "Bihar",
      "Karnataka",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-044",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Bihar politician Late Raghuvansh Prasad Singh was for the first time elected to which Lok Sabha?",
    "options": [
      "Tenth Lok Sabha",
      "Eleventh Lok Sabha",
      "Twelfth Lok Sabha",
      "Thirteenth Lok Sabha",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-045",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which among the following is not a member of the Quadrilateral Security Dialogue?",
    "options": [
      "India",
      "Japan",
      "China",
      "Australia",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-046",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Who represented India’s perspective in the Fifth BRICS Culture Ministers’ Meeting held through a video conference in September 2020?",
    "options": [
      "Prahlad Singh Patel",
      "Ramesh Pokhriyal Nishank",
      "Nitin Gadkari",
      "Ravi Shankar Prasad",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-047",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Where was the 36th ASEAN Summit virtually held in June 2020?",
    "options": [
      "Thailand",
      "Singapore",
      "Indonesia",
      "Vietnam",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-048",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which of the following topped the Human Capital Index, 2020?",
    "options": [
      "Japan",
      "South Korea",
      "Singapore",
      "Hong Kong",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-049",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Recently in the USA, ‘Operation MAGA’ is related to:",
    "options": [
      "Campaign against COVID-19",
      "Donald Trump’s re-election campaign",
      "Joseph Biden’s election campaign",
      "‘Make Army Great Again’ campaign",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-050",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which Arab state has started the first nuclear power plant?",
    "options": [
      "Iraq",
      "Saudi Arabia",
      "United Arab Emirates",
      "Egypt",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-051",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which was the first Arab state to sign a peace deal with Israel?",
    "options": [
      "Egypt",
      "Jordan",
      "Bahrain",
      "Sudan",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-052",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which country assumed the role of Chairman of the International Labour Organization’s Governing Body from October 2020 to June 2021?",
    "options": [
      "Japan",
      "New Zealand",
      "Australia",
      "India",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-053",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "‘Operation My Saheli’, launched in September 2020, aims to:",
    "options": [
      "Encourage self-defence education among girls",
      "Boost the security of women passengers in trains",
      "Explore new job opportunities for women",
      "Boost awareness against girl child labour",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-054",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "On the first anniversary of the Fit India Movement, who gave the mantra ‘Fitness Ki Dose, Aadha Ghanta Roz’?",
    "options": [
      "Prime Minister Narendra Modi",
      "Union Home Minister Amit Shah",
      "Union Health Minister Dr. Harsh Vardhan",
      "Yoga Guru Baba Ramdev",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-055",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "On the birth anniversary of Rajmata Vijaya Raje Scindia, which was released by Prime Minister Narendra Modi?",
    "options": [
      "Fifty-rupee coin",
      "Fifty-rupee note",
      "One-hundred-rupee coin",
      "One-hundred-rupee note",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-056",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which State’s short documentary film ‘Chi Lupo’ won the Dada Saheb Phalke Award, 2020?",
    "options": [
      "Manipur",
      "Nagaland",
      "Meghalaya",
      "Arunachal Pradesh",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-057",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Which private sector bank has launched the ‘e-Kisaan Dhan’ app for farmers?",
    "options": [
      "Axis Bank",
      "HDFC Bank",
      "IDBI Bank",
      "Kotak Mahindra Bank",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-058",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "At the international airport of which city did India launch its first COVID-19 testing facility?",
    "options": [
      "Kolkata",
      "Delhi",
      "Mumbai",
      "Bengaluru",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-059",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "Rafale fighter aircraft was formally inducted into the Indian Air Force at which Air Force Station?",
    "options": [
      "Hindon",
      "Sarsawa",
      "Ambala",
      "Amritsar",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-060",
    "subject": "Current Affairs",
    "year": "2020",
    "question": "What is the name of India’s first indigenous anti-radiation missile?",
    "options": [
      "Tandav",
      "Trinetra",
      "Saksham",
      "Rudram",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-061",
    "subject": "History",
    "year": "2020",
    "question": "In which of the following Harappan cities have furrows of ploughed fields been found?",
    "options": [
      "Kalibangan",
      "Dholavira",
      "Mohenjo-daro",
      "Lothal",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-062",
    "subject": "History",
    "year": "2020",
    "question": "Triratna or Three Jewels—right knowledge, right faith and right action—are related to which religion?",
    "options": [
      "Buddhism",
      "Hinduism",
      "Jainism",
      "Christianity",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-063",
    "subject": "History",
    "year": "2020",
    "question": "Which ruler convened the Fourth Buddhist Council in Kashmir?",
    "options": [
      "Ashoka",
      "Ajatashatru",
      "Kanishka",
      "Kalashoka",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-064",
    "subject": "History",
    "year": "2020",
    "question": "Which philosophy of India propounded the atom theory?",
    "options": [
      "Yoga",
      "Nyaya",
      "Sankhya",
      "Vaisheshika",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-065",
    "subject": "History",
    "year": "2020",
    "question": "Which Delhi Sultan is known for adopting the ‘blood and iron’ policy?",
    "options": [
      "Iltutmish",
      "Balban",
      "Ala-ud-din Khalji",
      "Muhammad bin Tughluq",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-066",
    "subject": "History",
    "year": "2020",
    "question": "Which medieval Indian empire was famous for elaborated local self-government?",
    "options": [
      "Chalukya",
      "Chola",
      "Solanki",
      "Parmar",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-067",
    "subject": "History",
    "year": "2020",
    "question": "Pietra dura is related to which of the following?",
    "options": [
      "Decorating walls with floral designs made of semi-precious stones",
      "Building sloping walls in minars",
      "Use of arch in construction",
      "Use of marble in buildings",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-068",
    "subject": "History",
    "year": "2020",
    "question": "Which Mughal ruler established karkhanas for painting?",
    "options": [
      "Humayun",
      "Akbar",
      "Jahangir",
      "Shah Jahan",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-069",
    "subject": "History",
    "year": "2020",
    "question": "The dual system of governance in Bengal was enforced by:",
    "options": [
      "Warren Hastings",
      "William Bentinck",
      "Robert Clive",
      "Lord Curzon",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-070",
    "subject": "History",
    "year": "2020",
    "question": "Who participated in the Parliament of Religions held at Chicago in 1893?",
    "options": [
      "Dayananda Saraswati",
      "Swami Vivekananda",
      "Mahatma Gandhi",
      "Raja Rammohan Roy",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-071",
    "subject": "History",
    "year": "2020",
    "question": "Who established the Swaraj Party in 1923?",
    "options": [
      "Mahatma Gandhi",
      "Vallabhbhai Patel",
      "C. R. Das and Motilal Nehru",
      "B. R. Ambedkar",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-072",
    "subject": "History",
    "year": "2020",
    "question": "Who wrote the famous play ‘Neel Darpan’ depicting the oppression of indigo farmers?",
    "options": [
      "Sharat Chandra Chatterjee",
      "Rabindranath Tagore",
      "Barindra Ghosh",
      "Dinabandhu Mitra",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-073",
    "subject": "History",
    "year": "2020",
    "question": "The famous Battle of Wandiwash in 1760 was fought by the British against whom?",
    "options": [
      "The French",
      "Spain",
      "Mysore",
      "Carnatic",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-074",
    "subject": "History",
    "year": "2020",
    "question": "Which Act introduced the system of separate electorates in India?",
    "options": [
      "The Regulating Act, 1773",
      "The Charter Act, 1833",
      "The Pitt’s India Act, 1784",
      "The Indian Councils Act, 1909",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-075",
    "subject": "History",
    "year": "2020",
    "question": "The Kol Mutiny of 1831 under Buddho Bhagat took place in which region?",
    "options": [
      "Kutch",
      "Singhbhum",
      "Western Ghats",
      "Satara",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-076",
    "subject": "History",
    "year": "2020",
    "question": "Who spearheaded the Revolt of 1857 in Bihar?",
    "options": [
      "Nana Saheb",
      "Tatya Tope",
      "Kunwar Singh",
      "Maulavi Ahmadullah",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-077",
    "subject": "History",
    "year": "2020",
    "question": "Who drew Mahatma Gandhi’s attention to the plight of indigo peasants in Champaran?",
    "options": [
      "Rajendra Prasad",
      "Anugrah Narayan Sinha",
      "Acharya Kripalani",
      "Raj Kumar Shukla",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-078",
    "subject": "History",
    "year": "2020",
    "question": "What was the first capital of the ancient Mahajanapada Magadha?",
    "options": [
      "Pataliputra",
      "Vaishali",
      "Champa",
      "Anga",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-079",
    "subject": "History",
    "year": "2020",
    "question": "Swami Sahajananda was associated with which movement?",
    "options": [
      "Tribal movement in Bihar",
      "Labour movement in Bihar",
      "Peasant movement in Bihar",
      "Caste movement in Bihar",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-080",
    "subject": "History",
    "year": "2020",
    "question": "Which was Mahatma Gandhi’s first Satyagraha movement in India involving civil disobedience?",
    "options": [
      "Champaran",
      "Kheda",
      "Ahmedabad",
      "Rowlatt Satyagraha",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-081",
    "subject": "Geography",
    "year": "2020",
    "question": "The largest island of Japan in terms of geographical area is:",
    "options": [
      "Hokkaido",
      "Honshu",
      "Shikoku",
      "Kyushu",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-082",
    "subject": "Geography",
    "year": "2020",
    "question": "Greenland is a part of which country?",
    "options": [
      "Denmark",
      "Finland",
      "Canada",
      "United Kingdom",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-083",
    "subject": "Geography",
    "year": "2020",
    "question": "Which country had the largest Indian population as of December 2018?",
    "options": [
      "United Arab Emirates",
      "Malaysia",
      "United Kingdom",
      "United States of America",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-084",
    "subject": "Geography",
    "year": "2020",
    "question": "Which country recorded the highest annual gold output in 2019?",
    "options": [
      "Russia",
      "Australia",
      "China",
      "United States of America",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-085",
    "subject": "Geography",
    "year": "2020",
    "question": "Which continent has the highest number of countries?",
    "options": [
      "Europe",
      "Asia",
      "Africa",
      "North America",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-086",
    "subject": "Geography",
    "year": "2020",
    "question": "The State of India with the highest percentage of tribal population as per the 2011 Census is:",
    "options": [
      "Arunachal Pradesh",
      "Nagaland",
      "Mizoram",
      "Meghalaya",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-087",
    "subject": "Geography",
    "year": "2020",
    "question": "Which of the following coffee-growing areas is not in Karnataka?",
    "options": [
      "Chikmagalur",
      "Coorg",
      "Baba Budangiri",
      "Pulneys",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-088",
    "subject": "Geography",
    "year": "2020",
    "question": "Which one of the following districts of India is the largest in terms of geographical area?",
    "options": [
      "Leh",
      "Kutch",
      "Jaisalmer",
      "Barmer",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-089",
    "subject": "Geography",
    "year": "2020",
    "question": "The State of India with the maximum number of wildlife sanctuaries is:",
    "options": [
      "Karnataka",
      "Tamil Nadu",
      "Maharashtra",
      "Madhya Pradesh",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-090",
    "subject": "Geography",
    "year": "2020",
    "question": "Which of the following rivers flowing in Bihar is a north-flowing river?",
    "options": [
      "Bagmati",
      "Kamla",
      "Kosi",
      "Gandak",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-091",
    "subject": "Geography",
    "year": "2020",
    "question": "Atal Tunnel is across which Himalayan range?",
    "options": [
      "Zanskar",
      "Western Pir Panjal",
      "Ladakh",
      "Eastern Pir Panjal",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-092",
    "subject": "Geography",
    "year": "2020",
    "question": "India’s 13th major port is proposed to be set up in which State?",
    "options": [
      "Kerala",
      "Gujarat",
      "Maharashtra",
      "Tamil Nadu",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-093",
    "subject": "Geography",
    "year": "2020",
    "question": "Which one of the following States is a leading producer of solar energy in India?",
    "options": [
      "Telangana",
      "Karnataka",
      "Andhra Pradesh",
      "Rajasthan",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-094",
    "subject": "Geography",
    "year": "2020",
    "question": "Which of the following mineral–district pairs is correctly matched?",
    "options": [
      "Limestone — Kaimur",
      "Mica — Bhagalpur",
      "Quartzite — Madhubani",
      "Lead-Zinc — Gaya",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-095",
    "subject": "Geography",
    "year": "2020",
    "question": "Which of the following industry–place pairs is not correctly matched?",
    "options": [
      "Oil refinery — Barauni",
      "Cement — Banjari",
      "Fertilizer — Bhaurahi",
      "Wagon and engineering — Bhagalpur",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-096",
    "subject": "Geography",
    "year": "2020",
    "question": "Piedmont Swamp Soil is found only in which district of Bihar?",
    "options": [
      "Madhubani",
      "Bhagalpur",
      "West Champaran",
      "Sitamarhi",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-097",
    "subject": "Geography",
    "year": "2020",
    "question": "In which pair of administrative divisions of Bihar does the Ganga River not flow?",
    "options": [
      "Darbhanga — Munger",
      "Purnea — Bhagalpur",
      "Tirhut — Saran",
      "Kosi — Magadh",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-098",
    "subject": "Geography",
    "year": "2020",
    "question": "Which of the following tribe–district pairs is not correctly matched?",
    "options": [
      "Santhal — Banka",
      "Munda — Jamui",
      "Oraon — Supaul",
      "Kharwar — Bhagalpur",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-099",
    "subject": "Geography",
    "year": "2020",
    "question": "What percentage of the total geographical area of Bihar is covered by forest?",
    "options": [
      "7.27%",
      "6.87%",
      "3.21%",
      "12.77%",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-100",
    "subject": "Geography",
    "year": "2020",
    "question": "Which district has the only National Park of Bihar?",
    "options": [
      "Nalanda",
      "Bhagalpur",
      "West Champaran",
      "East Champaran",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-101",
    "subject": "Polity",
    "year": "2020",
    "question": "Who won the bid to construct the new Parliament building recently?",
    "options": [
      "Larsen & Toubro Limited",
      "Reliance Projects Limited",
      "Tata Projects Limited",
      "National Highways Authority of India",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-102",
    "subject": "Polity",
    "year": "2020",
    "question": "Which Article of the Indian Constitution is related to the establishment of the Election Commission of India?",
    "options": [
      "Article 324",
      "Article 148",
      "Article 342",
      "Article 325",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-103",
    "subject": "Polity",
    "year": "2020",
    "question": "Who is the Head of the National Commission for Women at present?",
    "options": [
      "Mamta Sharma",
      "Lalitha Kumaramangalam",
      "Rekha Sharma",
      "Smriti Irani",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-104",
    "subject": "Polity",
    "year": "2020",
    "question": "What is meant by ‘Rule of Law’?",
    "options": [
      "One law for all and one judiciary for all",
      "One law for all and one State for all",
      "One State for all and one judiciary for all",
      "All laws for one and one judiciary for all",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-105",
    "subject": "Polity",
    "year": "2020",
    "question": "Which Article provides the list of 29 functions to be performed by the Panchayati Raj Institutions?",
    "options": [
      "Article 243(H)",
      "Article 243(E)",
      "Article 243(F)",
      "Article 243(G)",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-106",
    "subject": "Polity",
    "year": "2020",
    "question": "When was the Citizenship (Amendment) Act passed?",
    "options": [
      "11th December, 2018",
      "11th December, 2019",
      "11th October, 2019",
      "11th October, 2020",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-107",
    "subject": "Polity",
    "year": "2020",
    "question": "The legislative origins of the 73rd Constitutional Amendment Act can be traced back to which Constitutional Amendment Bill?",
    "options": [
      "61st Constitutional Amendment Bill",
      "62nd Constitutional Amendment Bill",
      "63rd Constitutional Amendment Bill",
      "64th Constitutional Amendment Bill",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-108",
    "subject": "Polity",
    "year": "2020",
    "question": "Which company established its factory at Patna in 1632?",
    "options": [
      "British East India Company",
      "Dutch East India Company",
      "Portuguese East India Company",
      "French East India Company",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-109",
    "subject": "Polity",
    "year": "2020",
    "question": "Which of the following is not a characteristic of decentralization?",
    "options": [
      "Autonomy",
      "People’s participation",
      "To instil non-confidence among local communities",
      "To empower local communities",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-110",
    "subject": "Polity",
    "year": "2020",
    "question": "Which Act is not considered a landmark in the development of the Indian Constitution during British rule?",
    "options": [
      "The Regulating Act, 1773",
      "The Charter Act, 1833",
      "The Government of India Act, 1919",
      "The Protection of Civil Rights Act, 1955",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-111",
    "subject": "Economy",
    "year": "2020",
    "question": "Which one among the following is not an objective of food management in India?",
    "options": [
      "Distribution of food grains",
      "Procurement of food grains",
      "Maintenance of buffer stock",
      "Export of food grains",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-112",
    "subject": "Economy",
    "year": "2020",
    "question": "Revenue deficit in India implies that:",
    "options": [
      "Government borrows to create capital assets",
      "Government borrows for expenses that do not create capital assets",
      "Government borrows from RBI against securities",
      "Government borrows from international institutions",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-113",
    "subject": "Economy",
    "year": "2020",
    "question": "Which country was India’s top trading partner in 2019–20?",
    "options": [
      "USA",
      "China",
      "UAE",
      "Saudi Arabia",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-114",
    "subject": "Economy",
    "year": "2020",
    "question": "Which infrastructure sector is related to the Bharatmala Project?",
    "options": [
      "Telecom",
      "Railways",
      "Road infrastructure",
      "Port sector",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-115",
    "subject": "Economy",
    "year": "2020",
    "question": "Which agency releases the Index of Industrial Production in India?",
    "options": [
      "National Sample Survey Office",
      "Reserve Bank of India",
      "Central Statistics Office",
      "Indian Statistical Institute",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-116",
    "subject": "Economy",
    "year": "2020",
    "question": "According to the Ease of Doing Business Report, 2020, India improved its rank from:",
    "options": [
      "77 to 63",
      "130 to 100",
      "100 to 77",
      "77 to 67",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-117",
    "subject": "Economy",
    "year": "2020",
    "question": "To improve institutional agricultural credit flow, what credit target for 2020–21 was fixed in the Union Budget of India?",
    "options": [
      "₹10 lakh crore",
      "₹13.5 lakh crore",
      "₹15 lakh crore",
      "₹16.5 lakh crore",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-118",
    "subject": "Economy",
    "year": "2020",
    "question": "The objective of the PM-KUSUM Scheme is to:",
    "options": [
      "Reduce farmers’ dependence on monsoon for irrigation",
      "Reduce farmers’ dependence on moneylenders for credit",
      "Promote floriculture in India",
      "Remove farmers’ dependence on diesel and kerosene by linking pump sets to solar energy",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-119",
    "subject": "Economy",
    "year": "2020",
    "question": "Which of the following commercial banks of India is among the top 100 global banks?",
    "options": [
      "ICICI Bank",
      "State Bank of India",
      "HDFC Bank",
      "Kotak Mahindra Bank",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-120",
    "subject": "Economy",
    "year": "2020",
    "question": "The Government of India announced the ‘NIRVIK’ scheme in the Union Budget 2020–21 for the benefit of which sector?",
    "options": [
      "Agriculture sector",
      "Industrial sector",
      "Health sector",
      "Export sector",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-121",
    "subject": "Bihar Specific",
    "year": "2020",
    "question": "The Comprehensive Financial Management System (CFMS) introduced by the Bihar Government aims to:",
    "options": [
      "Make all financial activities online and paperless",
      "Solve the problem of NPAs of banks",
      "Ensure effective implementation of State projects only",
      "Manage only local body finances",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-122",
    "subject": "Bihar Specific",
    "year": "2020",
    "question": "Bihar received the Krishi Karman Award on 2nd January 2020 for:",
    "options": [
      "Production and productivity of maize and wheat",
      "Overall food grain production",
      "Production of rice",
      "Production of oilseeds",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-123",
    "subject": "Bihar Specific",
    "year": "2020",
    "question": "The objective of the ‘Satat Jivikoparjan Yojana’ launched by the Bihar Government is to:",
    "options": [
      "Provide unemployment allowance to youth",
      "Provide employment through local bodies",
      "Provide sustainable income-generating assets to extremely poor households",
      "Provide free skill upgradation training",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-124",
    "subject": "Bihar Specific",
    "year": "2020",
    "question": "Which of the following is not included in the ‘Saat Nishchay’ (Seven Resolves) of the Bihar Government?",
    "options": [
      "Women employment",
      "Clean drinking water",
      "Supply of electricity to all households",
      "Child welfare",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-125",
    "subject": "Bihar Specific",
    "year": "2020",
    "question": "In 2018–19, the per capita Net State Domestic Product of Bihar at constant prices was approximately:",
    "options": [
      "75% of the national average",
      "60% of the national average",
      "50% of the national average",
      "33% of the national average",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-126",
    "subject": "History",
    "year": "2020",
    "question": "In which college did Mahatma Gandhi study?",
    "options": [
      "Samaldas College, Bhavnagar",
      "Dharmendrasinhji College, Rajkot",
      "Gujarat College, Ahmedabad",
      "Bahauddin College, Junagadh",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-127",
    "subject": "History",
    "year": "2020",
    "question": "Which of the following persons actively participated in the Revolt of 1857?",
    "options": [
      "Nana Saheb (Kanpur)",
      "Begum Hazrat Mahal (Lucknow)",
      "Maulavi Ahmadullah (Faizabad)",
      "Begum Zeenat Mahal (Delhi)",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-128",
    "subject": "History",
    "year": "2020",
    "question": "About which Act did Jawaharlal Nehru say, “We were provided with a car with all brakes and no engine”?",
    "options": [
      "Act of 1858",
      "Act of 1909",
      "Act of 1919",
      "Act of 1935",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-129",
    "subject": "History",
    "year": "2020",
    "question": "For how many days did the Dandi March last?",
    "options": [
      "10 days",
      "20 days",
      "24 days",
      "30 days",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-130",
    "subject": "History",
    "year": "2020",
    "question": "Who is the author of the popular song ‘Sarfaroshi Ki Tamanna Ab Hamare Dil Mein Hai’?",
    "options": [
      "Surya Sen",
      "Chandra Shekhar Azad",
      "Sardar Bhagat Singh",
      "Ram Prasad Bismil",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 4,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-131",
    "subject": "History",
    "year": "2020",
    "question": "Which movement was started as a reaction to the Partition of Bengal?",
    "options": [
      "Non-Cooperation Movement",
      "Civil Disobedience Movement",
      "Swadeshi Movement",
      "Purna Swaraj Movement",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-132",
    "subject": "History",
    "year": "2020",
    "question": "Who among the following advocates appeared for the INA trials at Delhi during 1945–46?",
    "options": [
      "Dr. Rajendra Prasad",
      "Bhulabhai Desai",
      "K. M. Munshi",
      "Sardar Patel",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-133",
    "subject": "History",
    "year": "2020",
    "question": "Where did Madam Cama unfurl India’s tricolour flag of freedom?",
    "options": [
      "Paris",
      "London",
      "Stuttgart",
      "Geneva",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-134",
    "subject": "History",
    "year": "2020",
    "question": "Which of the following pairs is correctly matched?",
    "options": [
      "Vinoba Bhave — Second Individual Satyagrahi",
      "C. R. Das — Deshbandhu",
      "William Wedderburn — Congress President in 1907",
      "Shyamji Krishna Varma — Founder of India House in Paris",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-135",
    "subject": "History",
    "year": "2020",
    "question": "Which day was declared as ‘Purna Swaraj Day’ by the Indian National Congress?",
    "options": [
      "26 January 1930",
      "15 August 1947",
      "30 January 1948",
      "31 December 1950",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-136",
    "subject": "History",
    "year": "2020",
    "question": "When was the State of Bihar established?",
    "options": [
      "1911",
      "1912",
      "1913",
      "1914",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-137",
    "subject": "History",
    "year": "2020",
    "question": "Under the Tinkathia System in Bihar, how much land was reserved for indigo cultivation?",
    "options": [
      "1/10",
      "1/3",
      "3/20",
      "3/25",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-138",
    "subject": "History",
    "year": "2020",
    "question": "Who was the first Chief Minister of Bihar?",
    "options": [
      "Shri Krishna Singh",
      "Satya Pal Malik",
      "Nitish Kumar",
      "Rabri Devi",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-139",
    "subject": "History",
    "year": "2020",
    "question": "Where was the first Congress Session in Bihar held?",
    "options": [
      "Patna",
      "Gaya",
      "Muzaffarpur",
      "Darbhanga",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-140",
    "subject": "History",
    "year": "2020",
    "question": "Which title was given to Jayaprakash Narayan?",
    "options": [
      "Praja Hitechhu",
      "Lok Nayak",
      "Lokmanyasya",
      "Rashtra Nayak",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-141",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "What is the missing number in the sequence: 4, 18, 48, 100, ?, 294, 448?",
    "options": [
      "94",
      "164",
      "180",
      "192",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-142",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "If 2^nC3 : 3^nC2 = 44 : 3, then the value of n is:",
    "options": [
      "1",
      "6",
      "11",
      "4",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-143",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "If the average of m numbers is n² and that of n numbers is m², then the average of (m + n) numbers is:",
    "options": [
      "m",
      "n",
      "mn",
      "m − n",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-144",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "In a school, 21 students play basketball, 26 play hockey, and 29 play football. If 14 play hockey and basketball, 12 play football and basketball, 15 play hockey and football, and 8 play all three games, how many play football only?",
    "options": [
      "10",
      "29",
      "21",
      "18",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-145",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "Mohan can do a piece of work in 25 days and Sohan can do it in 20 days. They work together for 5 days, after which Mohan leaves. How many more days will Sohan take to complete the remaining work?",
    "options": [
      "20 days",
      "11 days",
      "14 days",
      "21 days",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-146",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "A clock is started at 12:00 noon. By 10 minutes past 5:00, through how many degrees has the hour hand turned?",
    "options": [
      "135°",
      "145°",
      "155°",
      "165°",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-147",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "Which of the following cannot be the square of a natural number?",
    "options": [
      "26569",
      "143642",
      "30976",
      "28561",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-148",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "If 217x + 131y = 913 and 131x + 217y = 827, then the values of x and y respectively are:",
    "options": [
      "5 and 7",
      "3 and 2",
      "-5 and -7",
      "2 and 5",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-149",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "The value of [(598 + 479)² − (598 − 479)²] / (598 × 479) is:",
    "options": [
      "4",
      "10",
      "132",
      "8",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2020-150",
    "subject": "Quant & Reasoning",
    "year": "2020",
    "question": "The population of a town is 176400. If it increases annually at the rate of 5%, what will be its population after two years?",
    "options": [
      "194481",
      "296841",
      "394481",
      "396841",
      "None of the above / More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-001",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "In the following question, out of four words given below, three are alike in some manner and the fourth word is different. Find the different one.",
    "options": [
      "Microscopes",
      "Telescope",
      "Stethoscope",
      "Periscope"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-002",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "SPRING is written in a code as UNUFRC. How will the word MOBILE be written in that code language?",
    "options": [
      "OMEFPA",
      "OMPGNC",
      "MPQSUL",
      "SEGRFT"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-003",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Mukesh said to his friend, “Rita is the mother of my son’s wife’s daughter”. How is Mukesh related to Rita?",
    "options": [
      "Father",
      "Son-in-law",
      "Son",
      "Father-in-law"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-004",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Ram goes North, turns right, then goes right again and then goes to Jeff. In which direction is Ram now?",
    "options": [
      "East",
      "South",
      "North",
      "West"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-005",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Writing in alphabetical order, which name of the following will appear in the last?",
    "options": [
      "Mahinder",
      "Mohinder",
      "Mohender",
      "Mahendra"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-006",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Nitin is 7 ranks ahead of Joginder in a class of 39. If Joginder’s rank is 17th from the last, what is Nitin’s rank from the beginning?",
    "options": [
      "17th",
      "15th",
      "18th",
      "16th"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-007",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "If + means ×, × means −, ÷ means + and − means ÷, then 175 − 25 ÷ 5 + 20 × 3 + 10 equals to:",
    "options": [
      "77",
      "87",
      "140",
      "70"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-008",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Rahul is 3 times as old as Seema. Laxmi was twice as old as Rahul four years ago. In four years’ time, Rahul will be 31. What are the present ages of Seema and Laxmi?",
    "options": [
      "10, 50",
      "9, 52",
      "9, 45",
      "9, 50"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-009",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "Find the missing number from the given alternatives:
28 | 20 | 7
84 | ? | 12
45 | 25 | 9",
    "options": [
      "30",
      "35",
      "20",
      "25"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-010",
    "subject": "Quant & Reasoning",
    "year": "2025",
    "question": "RAIN is written in a code as 8$%6 and MORE is written as 748@. How will REMAIN be written in the code language?",
    "options": [
      "@$86%7",
      "WI@%GH",
      "$6@$47",
      "8@7$%6"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-011",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "How many bronze medals were won by Bihar players in the 38th National Junior Athletics Championship 2025?",
    "options": [
      "4",
      "5",
      "6",
      "More than one of the above"
    ],
    "answerIndex": null,
    "explanation": "Answer key marked as deleted."
  },
  {
    "id": "bpsc-2025-012",
    "subject": "Geography",
    "year": "2025",
    "question": "Which districts in Bihar will benefit from the Kosi Mechi Link Project?",
    "options": [
      "Patna, Nalanda, Gaya, Siwan",
      "Darbhanga, Muzaffarpur, Sitamarhi, Begusarai",
      "Araria, Purnia, Bhagalpur, Katihar",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-013",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Which Indian languages are accorded the status of Classical Language?",
    "options": [
      "Telugu",
      "Marathi",
      "Bengali",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-014",
    "subject": "Geography",
    "year": "2025",
    "question": "Which organization recognized the Nagi bird sanctuary site as an Important Bird and Biodiversity Area (IBA)?",
    "options": [
      "UNESCO",
      "World Wildlife Fund",
      "BirdLife International",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-015",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Where was the National Panchayati Raj Day 2025 event organized?",
    "options": [
      "Patna",
      "Madhubani",
      "Gaya",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-016",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is the primary objective of the Lunar Trailblazer mission?",
    "options": [
      "To detect and map water on the Moon’s surface",
      "To create a 3D model of the entire Moon",
      "To test new lunar rovers",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-017",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Afrikaners indicate the people:",
    "options": [
      "Of Indo-African descent in the U.S.",
      "Indigenous tribal communities in Africa",
      "The white minority group in South Africa",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-018",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is the name of the 16th-century stepwell that the Archaeological Survey of India recently conserved in collaboration with the World Monuments Fund?",
    "options": [
      "Agrasen ki Baoli",
      "Rajon ki Baoli",
      "Chand Baori",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-019",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is the name of the mayor who proclaimed May 14, 2025, as Dr. B. R. Ambedkar Day in New York City?",
    "options": [
      "Bill de Blasio",
      "Eric Adams",
      "Sadiq Khan",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-020",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is the permanent slogan for the Eurovision Song Contest?",
    "options": [
      "Music Unites",
      "Together in Music",
      "United by Music",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-021",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is true of the GSLV-F15 mission by ISRO?",
    "options": [
      "It carried the NVS-02 satellite",
      "It marked ISRO’s 101st launch from Sriharikota",
      "It marked ISRO’s 100th launch from Sriharikota",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-022",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is true of the 18th G20 Summit?",
    "options": [
      "It was held in Rio de Janeiro",
      "Its theme was ‘Building a Just World and a Sustainable Planet’",
      "The Rio de Janeiro Declaration emphasized taxation of billionaires",
      "None of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-023",
    "subject": "Geography",
    "year": "2025",
    "question": "The UN climate conference held in Baku in 2024 concluded with an agreement that:",
    "options": [
      "Aims to ban fossil fuels globally by 2030",
      "Calls on developed countries to provide at least $500 billion annually to developing nations by 2030",
      "Calls on developed countries to provide at least $300 billion annually to developing nations by 2035",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-024",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Awarded the Nobel Prize in Literature in 2024, Han Kang’s novel ‘The Vegetarian’ won which other prestigious award?",
    "options": [
      "Pulitzer Prize",
      "Pan American Literary Awards",
      "International Booker Prize",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-025",
    "subject": "Geography",
    "year": "2025",
    "question": "Which glacier among the following has been declared ‘dead’ in May 2025?",
    "options": [
      "Khumbu Glacier",
      "Zalva Glacier",
      "Jima Glacier",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-026",
    "subject": "Geography",
    "year": "2025",
    "question": "According to the UNDP Human Development Index Report 2025, life expectancy in India increased from 58.6 years in 1990 to how many years in 2023?",
    "options": [
      "72 years",
      "73 years",
      "74 years",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-027",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "In which city was the AI Action Summit held in February 2025?",
    "options": [
      "Bengaluru",
      "Paris",
      "Rome",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-028",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "96th Academy Awards (2024): In which category did the Indian film ‘To Kill a Tiger’ receive a nomination?",
    "options": [
      "Best Documentary Feature",
      "Best International Feature Film",
      "Best Short Film",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-029",
    "subject": "Geography",
    "year": "2025",
    "question": "Which Gujarati film won the ‘Best National Film Award’ for promoting national, social and environmental values?",
    "options": [
      "Hellaro",
      "Chhello Show",
      "Kutch Express",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-030",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Which of the following individuals or organizations was a recipient of the Ramon Magsaysay Award 2024?",
    "options": [
      "Pankhuri Sharma",
      "Rural Doctors Movement",
      "Miyazaki Hayao",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-031",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are true about Akashteer?",
    "options": [
      "Akashteer is the core of the Indian Army’s Air Defence (AAD) system",
      "It seamlessly integrates India’s larger C4ISR",
      "It reflects a strategic shift from passive defence to proactive retaliation",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-032",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following defence platforms is part of India’s growing indigenous military ecosystem supported by the Make in India initiative?",
    "options": [
      "F-35 Lightning",
      "Main Battle Tank (MBT) Arjun",
      "Advanced Towed Artillery Gun System (ATAGS)",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-033",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "Which day is observed as Holocaust Memorial Day?",
    "options": [
      "January 15",
      "January 27",
      "February 5",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-034",
    "subject": "Current Affairs",
    "year": "2025",
    "question": "What is the title of the book by Banu Mushtaq that won the 2025 International Booker Prize?",
    "options": [
      "Light of the Heart",
      "Heart Lamp",
      "Soul Lantern",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-035",
    "subject": "Geography",
    "year": "2025",
    "question": "According to the Indus Waters Treaty, the three eastern rivers allocated to India are:",
    "options": [
      "Jhelum, Ravi, Sutlej",
      "Ravi, Beas, Sutlej",
      "Indus, Jhelum, Chenab",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-036",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is/are correct about Capability Poverty Measure (CPM) developed by the UNDP?
1) CPM includes child malnutrition as a proxy for lack of health and nourishment
2) Female illiteracy is included to reflect deprivation in education
3) It considers male illiteracy as a key indicator of capability poverty
4) It includes lack of access to clean drinking water as an important indicator",
    "options": [
      "1 and 2",
      "1, 2 and 3",
      "Only 1",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-037",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following is not among the top principal commodities of India’s export during April–September 2024–25?",
    "options": [
      "Petroleum products",
      "Iron and Steel",
      "Basmati Rice",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-038",
    "subject": "Geography",
    "year": "2025",
    "question": "According to the India State of Forest Report 2023 (ISFR 2023):",
    "options": [
      "The total forest and tree cover of the country is 75% of the geographical area",
      "Top three states recording forest area are Jharkhand, Andhra Pradesh and Manipur",
      "The maximum tree cover has been found in Maharashtra followed by Rajasthan and Uttar Pradesh",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-039",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following countries had the greater share than India in global services export in 2023?",
    "options": [
      "Russia",
      "Ireland",
      "Indonesia",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-040",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statement(s) is/are NOT CORRECT about the U-WIN portal of the Ministry of Health and Family Welfare?",
    "options": [
      "It provides QR-based e-vaccination certification",
      "It facilitates vaccination of Ayushman Bharat beneficiaries",
      "The portal is accessible in 11 regional languages",
      "None of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-041",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Bharat Ratna award?",
    "options": [
      "It is India’s highest civilian award",
      "It was instituted in 1954",
      "It can be awarded posthumously",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-042",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Supreme Court of India?",
    "options": [
      "It is the highest court of appeal in India",
      "It has original jurisdiction in disputes between Centre and States",
      "It can issue writs under Article 32",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-043",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which Fundamental Right is known as the ‘heart and soul’ of the Indian Constitution?",
    "options": [
      "Right to Equality",
      "Right to Freedom",
      "Right to Constitutional Remedies",
      "Right against Exploitation"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-044",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following is not a Directive Principle of State Policy?",
    "options": [
      "Equal pay for equal work",
      "Organisation of village panchayats",
      "Promotion of international peace",
      "Right to Education"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-045",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which Article of the Indian Constitution deals with the amendment of the Constitution?",
    "options": [
      "Article 352",
      "Article 360",
      "Article 368",
      "Article 370"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-046",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "The term of office of the President of India is:",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "Until the age of 65"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-047",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which Schedule of the Indian Constitution contains the forms of oaths and affirmations?",
    "options": [
      "Second Schedule",
      "Third Schedule",
      "Fourth Schedule",
      "Fifth Schedule"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-048",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following bodies is responsible for the conduct of elections in India?",
    "options": [
      "Union Public Service Commission",
      "Election Commission of India",
      "Planning Commission",
      "Finance Commission"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-049",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following taxes is levied and collected by the Union but assigned to the States?",
    "options": [
      "Income Tax",
      "Corporation Tax",
      "Stamp Duty",
      "Excise Duty on medicinal and toilet preparations"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-050",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a feature of the Indian Constitution?",
    "options": [
      "Written Constitution",
      "Federal system with unitary bias",
      "Parliamentary form of government",
      "Presidential system"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-051",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Goods and Services Tax (GST) in India?",
    "options": [
      "GST is a destination-based indirect tax",
      "GST subsumed multiple indirect taxes",
      "GST Council is a constitutional body",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-052",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Finance Commission of India?",
    "options": [
      "It is constituted under Article 280 of the Constitution",
      "It recommends the distribution of tax revenues between the Union and the States",
      "It is constituted every five years",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-053",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not included in the Union List of the Seventh Schedule?",
    "options": [
      "Defence",
      "Foreign Affairs",
      "Police",
      "Atomic Energy"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-054",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "The concept of ‘Separation of Powers’ in the Indian Constitution implies:",
    "options": [
      "Complete separation of the Executive, Legislature and Judiciary",
      "Partial separation with checks and balances",
      "Executive supremacy over Judiciary",
      "Judicial supremacy over Legislature"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-055",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Attorney General of India?",
    "options": [
      "He is the highest law officer of India",
      "He is a member of the Cabinet",
      "He has a fixed tenure",
      "He is elected by Parliament"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-056",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which Article of the Constitution provides for the establishment of the Comptroller and Auditor General of India?",
    "options": [
      "Article 148",
      "Article 112",
      "Article 280",
      "Article 324"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-057",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Lok Sabha?",
    "options": [
      "It is the Lower House of Parliament",
      "Its members are directly elected by the people",
      "It has a maximum strength of 552 members",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-058",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a Parliamentary Committee?",
    "options": [
      "Public Accounts Committee",
      "Estimates Committee",
      "Finance Commission",
      "Committee on Public Undertakings"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-059",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Rajya Sabha?",
    "options": [
      "It is a permanent House",
      "One-third of its members retire every two years",
      "The Vice-President of India is its ex-officio Chairman",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-060",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a Constitutional Amendment Act related to Panchayati Raj?",
    "options": [
      "73rd Constitutional Amendment Act",
      "74th Constitutional Amendment Act",
      "42nd Constitutional Amendment Act",
      "None of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-061",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the National Green Tribunal (NGT)?",
    "options": [
      "It was established under the National Green Tribunal Act, 2010",
      "It deals with environmental protection and conservation of forests",
      "It has both original and appellate jurisdiction",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-062",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Human Rights Commission (NHRC)?",
    "options": [
      "It was established under the Protection of Human Rights Act, 1993",
      "Its Chairperson must be a former Chief Justice of India",
      "It has powers of a civil court",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-063",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a function of the Election Commission of India?",
    "options": [
      "Conducting elections to Parliament and State Legislatures",
      "Delimitation of constituencies",
      "Recognizing political parties",
      "Allotment of election symbols"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-064",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Anti-Defection Law?",
    "options": [
      "It is contained in the Tenth Schedule of the Constitution",
      "It applies to Members of Parliament only",
      "It does not apply to State Legislatures",
      "It was introduced by the 44th Constitutional Amendment"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-065",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Model Code of Conduct (MCC)?",
    "options": [
      "It comes into force immediately after the announcement of elections",
      "It is legally enforceable by courts",
      "It applies only to national parties",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-066",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Right to Information Act, 2005?",
    "options": [
      "It empowers citizens to seek information from public authorities",
      "It applies to private bodies receiving substantial government funding",
      "It promotes transparency and accountability",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-067",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following is not included in the Directive Principles of State Policy?",
    "options": [
      "Uniform Civil Code",
      "Promotion of cottage industries",
      "Right to Freedom of Religion",
      "Equal justice and free legal aid"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-068",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Official Languages of India?",
    "options": [
      "Hindi in Devanagari script is the official language of the Union",
      "English was to be used for 15 years from the commencement of the Constitution",
      "The Constitution recognizes 22 languages in the Eighth Schedule",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-069",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a constitutional body?",
    "options": [
      "Finance Commission",
      "National Development Council",
      "Election Commission of India",
      "Union Public Service Commission"
    ],
    "answerIndex": null,
    "explanation": "Answer key marked as deleted."
  },
  {
    "id": "bpsc-2025-070",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about Public Interest Litigation (PIL)?",
    "options": [
      "It can be filed by any public-spirited individual",
      "It is available only in the Supreme Court",
      "It deals only with service matters",
      "It was introduced by a constitutional amendment"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-071",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Supreme Court of India?",
    "options": [
      "It is the final interpreter of the Constitution",
      "It can exercise advisory jurisdiction under Article 143",
      "It can review its own judgments",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-072",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about Judicial Review in India?",
    "options": [
      "It is explicitly mentioned in the Constitution",
      "It is part of the basic structure of the Constitution",
      "It allows courts to invalidate unconstitutional laws",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-073",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a ground for the removal of the President of India?",
    "options": [
      "Violation of the Constitution",
      "Incapacity",
      "Impeachment",
      "Resignation"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-074",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Vice-President of India?",
    "options": [
      "He is the ex-officio Chairman of the Rajya Sabha",
      "He acts as President in case of vacancy",
      "He is elected by an electoral college",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-075",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following is not a function of the Governor of a State?",
    "options": [
      "Appointing the Chief Minister",
      "Summoning and proroguing the State Legislature",
      "Making laws independently",
      "Giving assent to Bills"
    ],
    "answerIndex": null,
    "explanation": "Answer key marked as deleted."
  },
  {
    "id": "bpsc-2025-076",
    "subject": "History",
    "year": "2025",
    "question": "Which of the following statements are correct about the State Legislative Council?",
    "options": [
      "It is a permanent House",
      "One-third of its members retire every two years",
      "It can delay Money Bills",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-077",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Panchayati Raj system?",
    "options": [
      "It was given constitutional status by the 73rd Amendment",
      "It aims at decentralization of power",
      "It provides for reservation for women",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-078",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a feature of the Indian federal system?",
    "options": [
      "Written Constitution",
      "Dual polity",
      "Right of secession",
      "Supremacy of the Constitution"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-079",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Comptroller and Auditor General (CAG) of India?",
    "options": [
      "He audits the accounts of the Union and the States",
      "He is appointed by the President of India",
      "He submits his reports to the President",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-080",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Finance Commission?",
    "options": [
      "It is a constitutional body",
      "It is constituted every five years",
      "It recommends distribution of taxes",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-081",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Attorney General of India?",
    "options": [
      "He is the highest law officer of the country",
      "He is appointed by the President of India",
      "He has the right to speak in Parliament without voting rights",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-082",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the concept of ‘Rule of Law’?",
    "options": [
      "Supremacy of law",
      "Equality before law",
      "Predominance of legal spirit",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-083",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a Fundamental Duty under Article 51A of the Constitution?",
    "options": [
      "To protect the environment",
      "To safeguard public property",
      "To vote in elections",
      "To develop scientific temper"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-084",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the 42nd Constitutional Amendment Act, 1976?",
    "options": [
      "It is known as the ‘Mini Constitution’",
      "It curtailed the power of judicial review",
      "It added Fundamental Duties",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-085",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the National Emergency under Article 352?",
    "options": [
      "It can be proclaimed on grounds of war, external aggression or armed rebellion",
      "It requires approval of Parliament within one month",
      "It can suspend Fundamental Rights under Article 19",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-086",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the State Emergency (President’s Rule)?",
    "options": [
      "It is imposed under Article 356",
      "It can be extended beyond one year with parliamentary approval",
      "It suspends the State Legislative Assembly",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-087",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Financial Emergency?",
    "options": [
      "It is declared under Article 360",
      "It has never been proclaimed in India",
      "It can affect salaries of government employees",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-088",
    "subject": "Polity & Governance",
    "year": "2025",
    "question": "Which of the following is not a constitutional post?",
    "options": [
      "Speaker of Lok Sabha",
      "Chairman of Rajya Sabha",
      "Deputy Chairman of NITI Aayog",
      "Comptroller and Auditor General"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-089",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the All India Services?",
    "options": [
      "They include IAS, IPS and IFoS",
      "They are common to the Union and the States",
      "They are created under Article 312",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-090",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Election Commission of India?",
    "options": [
      "It is a multi-member body",
      "The Chief Election Commissioner enjoys security of tenure",
      "It conducts elections to Panchayats and Municipalities",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-091",
    "subject": "History",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Union Council of Ministers?",
    "options": [
      "It is collectively responsible to the Lok Sabha",
      "It is headed by the Prime Minister",
      "It includes Cabinet Ministers, Ministers of State and Deputy Ministers",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-092",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Prime Minister of India?",
    "options": [
      "He is the real executive authority",
      "He is appointed by the President",
      "He must be a member of either House of Parliament",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-093",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Cabinet Secretariat?",
    "options": [
      "It assists the Prime Minister and the Council of Ministers",
      "It is headed by the Cabinet Secretary",
      "It coordinates among various ministries",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-094",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Central Vigilance Commission (CVC)?",
    "options": [
      "It was established by a statutory Act",
      "It exercises superintendence over the CBI in corruption cases",
      "It advises Central Government organizations on vigilance matters",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-095",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Lokpal and Lokayuktas Act, 2013?",
    "options": [
      "It provides for the establishment of Lokpal at the Centre",
      "It mandates the establishment of Lokayuktas in States",
      "It covers public servants including the Prime Minister",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-096",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Central Bureau of Investigation (CBI)?",
    "options": [
      "It derives its powers from the Delhi Special Police Establishment Act",
      "It investigates cases of corruption and economic offences",
      "It requires consent of States to investigate within their jurisdiction",
      "More than one of the above"
    ],
    "answerIndex": null,
    "explanation": "Answer key marked as deleted."
  },
  {
    "id": "bpsc-2025-097",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the National Investigation Agency (NIA)?",
    "options": [
      "It was established under the NIA Act, 2008",
      "It investigates terrorism-related offences",
      "It has nationwide jurisdiction",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-098",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Central Information Commission (CIC)?",
    "options": [
      "It is a statutory body under the RTI Act, 2005",
      "It hears appeals and complaints under the RTI Act",
      "It has the powers of a civil court",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-099",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the National Commission for Scheduled Castes?",
    "options": [
      "It is a constitutional body under Article 338",
      "It investigates complaints relating to deprivation of rights of SCs",
      "It advises the government on policy matters concerning SCs",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-100",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Commission for Scheduled Tribes?",
    "options": [
      "It is a constitutional body under Article 338A",
      "It safeguards the rights of Scheduled Tribes",
      "It advises the government on ST-related issues",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-101",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Commission for Women?",
    "options": [
      "It was established under an Act of Parliament",
      "It investigates complaints relating to women’s rights",
      "It advises the government on policy matters affecting women",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-102",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the National Commission for Minorities?",
    "options": [
      "It is a statutory body",
      "It safeguards the interests of religious minorities",
      "It advises the government on minority affairs",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-103",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the National Disaster Management Authority (NDMA)?",
    "options": [
      "It was established under the Disaster Management Act, 2005",
      "It is chaired by the Prime Minister",
      "It formulates policies for disaster management",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-104",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Central Water Commission (CWC)?",
    "options": [
      "It is a statutory body",
      "It is the apex technical organization in the field of water resources",
      "It advises the government on water-related matters",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-105",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Planning Commission / NITI Aayog?",
    "options": [
      "NITI Aayog replaced the Planning Commission in 2015",
      "It acts as a policy think tank of the government",
      "It promotes cooperative federalism",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-106",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Health Mission (NHM)?",
    "options": [
      "It subsumed the National Rural Health Mission and National Urban Health Mission",
      "It aims to provide accessible, affordable and quality healthcare",
      "It focuses on strengthening health systems",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-107",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the National Education Policy (NEP) 2020?",
    "options": [
      "It replaces the 1986 National Policy on Education",
      "It emphasizes multidisciplinary education",
      "It promotes flexibility in curriculum",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-108",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Skill Development Mission?",
    "options": [
      "It aims to train a large workforce in India",
      "It promotes skill development and entrepreneurship",
      "It aligns skill development with industry needs",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-109",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements is correct about the Ayushman Bharat Scheme?",
    "options": [
      "It provides health insurance cover to poor and vulnerable families",
      "It has two components: PM-JAY and Health and Wellness Centres",
      "It aims to reduce out-of-pocket healthcare expenditure",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-110",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Swachh Bharat Mission?",
    "options": [
      "It was launched in 2014",
      "It aims to eliminate open defecation",
      "It promotes cleanliness and sanitation",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-111",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Pradhan Mantri Jan Dhan Yojana (PMJDY)?",
    "options": [
      "It aims to ensure financial inclusion",
      "It provides basic savings bank deposit accounts",
      "It offers insurance and pension benefits",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-112",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct about the Pradhan Mantri Ujjwala Yojana (PMUY)?",
    "options": [
      "It provides LPG connections to women from BPL households",
      "It aims to reduce indoor air pollution",
      "It promotes use of clean cooking fuel",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-113",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Pradhan Mantri Awas Yojana (PMAY)?",
    "options": [
      "It aims to provide housing for all",
      "It has both urban and rural components",
      "It provides financial assistance for house construction",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-114",
    "subject": "History",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)?",
    "options": [
      "It guarantees 100 days of wage employment",
      "It is a demand-driven programme",
      "It provides legal guarantee for employment",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-115",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Food Security Act (NFSA), 2013?",
    "options": [
      "It provides subsidized food grains to eligible households",
      "It covers two-thirds of India’s population",
      "It includes nutritional support to pregnant women and children",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-116",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Mid-Day Meal Scheme?",
    "options": [
      "It aims to improve nutritional status of children",
      "It encourages school attendance",
      "It is implemented in government and government-aided schools",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-117",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Integrated Child Development Services (ICDS)?",
    "options": [
      "It provides supplementary nutrition",
      "It focuses on early childhood care and development",
      "It includes health check-ups and immunization",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-118",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Rural Livelihoods Mission (NRLM)?",
    "options": [
      "It aims to reduce poverty through self-employment",
      "It promotes self-help groups",
      "It provides skill development and financial inclusion",
      "More than one of the above"
    ],
    "answerIndex": null,
    "explanation": "Answer key marked as deleted."
  },
  {
    "id": "bpsc-2025-119",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)?",
    "options": [
      "It provides income support to farmers",
      "It offers ₹6,000 per year to eligible farmers",
      "It is funded by the Government of India",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-120",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Pradhan Mantri Fasal Bima Yojana (PMFBY)?",
    "options": [
      "It provides crop insurance to farmers",
      "It aims to stabilize farmers’ income",
      "It covers losses due to natural calamities",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-121",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Jal Jeevan Mission?",
    "options": [
      "It aims to provide functional household tap connections",
      "It targets rural households",
      "It emphasizes water quality and sustainability",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-122",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Solar Mission?",
    "options": [
      "It is part of the National Action Plan on Climate Change",
      "It aims to promote solar energy",
      "It targets large-scale and decentralized solar power",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-123",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Electric Mobility Mission?",
    "options": [
      "It aims to promote electric vehicles",
      "It seeks to reduce dependence on fossil fuels",
      "It supports domestic manufacturing of EVs",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-124",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Afforestation Programme?",
    "options": [
      "It aims to increase forest and tree cover",
      "It involves participation of local communities",
      "It focuses on degraded forest lands",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-125",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Mission for Clean Ganga (NMCG)?",
    "options": [
      "It is implemented under the Namami Gange Programme",
      "It aims to rejuvenate the Ganga river",
      "It focuses on pollution abatement",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-126",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Nutrition Mission (POSHAN Abhiyaan)?",
    "options": [
      "It aims to reduce malnutrition",
      "It focuses on children, pregnant women and lactating mothers",
      "It promotes convergence of nutrition-related schemes",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-127",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Policy on Skill Development?",
    "options": [
      "It aims to create a skilled workforce",
      "It aligns training with industry needs",
      "It promotes lifelong learning",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-128",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Startup India initiative?",
    "options": [
      "It aims to promote entrepreneurship",
      "It provides tax benefits to startups",
      "It supports innovation and job creation",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-129",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Digital India programme?",
    "options": [
      "It aims to transform India into a digitally empowered society",
      "It focuses on digital infrastructure",
      "It promotes digital literacy",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-130",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the Atal Innovation Mission (AIM)?",
    "options": [
      "It is implemented by NITI Aayog",
      "It promotes innovation and entrepreneurship",
      "It establishes Atal Tinkering Labs",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-131",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Water Policy of India?",
    "options": [
      "It emphasizes integrated water resources management",
      "It prioritizes drinking water over other uses",
      "It promotes conservation and efficient use of water",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-132",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Forest Policy?",
    "options": [
      "It aims to increase forest cover",
      "It emphasizes ecological stability",
      "It encourages people’s participation in forest management",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-133",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Environment Policy?",
    "options": [
      "It aims at sustainable development",
      "It integrates environmental concerns into development planning",
      "It promotes conservation of natural resources",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-134",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Population Policy?",
    "options": [
      "It aims to stabilize population growth",
      "It emphasizes reproductive health",
      "It promotes small family norms",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-135",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Health Policy?",
    "options": [
      "It aims to improve access to healthcare",
      "It focuses on preventive and promotive health",
      "It seeks to increase public health expenditure",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-136",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Education Policy?",
    "options": [
      "It aims to improve quality of education",
      "It emphasizes holistic and multidisciplinary education",
      "It promotes flexibility and choice for students",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-137",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Youth Policy?",
    "options": [
      "It aims at empowering youth",
      "It focuses on skill development and employment",
      "It promotes leadership and social engagement",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-138",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Policy for Women?",
    "options": [
      "It aims to empower women",
      "It addresses gender equality",
      "It promotes women’s participation in decision-making",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-139",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Policy for Senior Citizens?",
    "options": [
      "It aims to ensure welfare of senior citizens",
      "It provides for social security measures",
      "It promotes active ageing",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-140",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding the National Policy on Persons with Disabilities?",
    "options": [
      "It aims at inclusion of persons with disabilities",
      "It promotes equal opportunities",
      "It ensures accessibility and participation",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-141",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding India’s demographic dividend?",
    "options": [
      "It refers to a situation where working-age population is larger than dependents",
      "It provides an opportunity for economic growth",
      "It requires investment in education and skill development",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-142",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding climate change mitigation?",
    "options": [
      "It involves reducing greenhouse gas emissions",
      "It includes adoption of renewable energy",
      "It focuses only on adaptation measures",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-143",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding sustainable development?",
    "options": [
      "It balances economic growth, social inclusion and environmental protection",
      "It meets the needs of the present without compromising future generations",
      "It emphasizes long-term development goals",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-144",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding urbanization in India?",
    "options": [
      "It has increased rapidly in recent decades",
      "It poses challenges related to housing and infrastructure",
      "It requires sustainable urban planning",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-145",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding poverty alleviation programmes in India?",
    "options": [
      "They aim to reduce income inequality",
      "They focus on employment generation",
      "They include social security measures",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-146",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding women empowerment in India?",
    "options": [
      "It involves improving access to education and health",
      "It promotes economic independence",
      "It encourages political participation",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-147",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding digital governance?",
    "options": [
      "It uses digital technologies to improve service delivery",
      "It enhances transparency and accountability",
      "It improves citizen participation",
      "More than one of the above"
    ],
    "answerIndex": 2,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-148",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding cyber security?",
    "options": [
      "It involves protection of computer systems and networks",
      "It is essential for national security",
      "It addresses threats like hacking and data breaches",
      "More than one of the above"
    ],
    "answerIndex": 1,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-149",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding artificial intelligence (AI)?",
    "options": [
      "It enables machines to perform tasks requiring human intelligence",
      "It can improve productivity and efficiency",
      "It raises ethical and regulatory concerns",
      "More than one of the above"
    ],
    "answerIndex": 0,
    "explanation": ""
  },
  {
    "id": "bpsc-2025-150",
    "subject": "Geography",
    "year": "2025",
    "question": "Which of the following statements are correct regarding India’s space programme?",
    "options": [
      "It is led by the Indian Space Research Organisation (ISRO)",
      "It focuses on satellite launches and space exploration",
      "It contributes to national development and security",
      "More than one of the above"
    ],
    "answerIndex": 3,
    "explanation": ""
  }
];

  const subjectSelect = document.getElementById("subjectSelect");
  const yearSelect = document.getElementById("yearSelect");
  const questionIndexEl = document.getElementById("questionIndex");
  const questionTotalEl = document.getElementById("questionTotal");
  const questionText = document.getElementById("questionText");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const questionSubject = document.getElementById("questionSubject");
  const questionYear = document.getElementById("questionYear");
  const btnCheck = document.getElementById("btn-check");
  const btnNext = document.getElementById("btn-next");
  const btnShuffle = document.getElementById("btn-shuffle");
  const btnReset = document.getElementById("btn-reset");
  const btnImport = document.getElementById("btn-import");
  const btnUseSample = document.getElementById("btn-use-sample");
  const fileInput = document.getElementById("fileInput");
  const toggleWrongOnly = document.getElementById("toggleWrongOnly");

  const statAttempted = document.getElementById("stat-attempted");
  const statCorrect = document.getElementById("stat-correct");
  const statAccuracy = document.getElementById("stat-accuracy");

  const state = {
    subject: "All Subjects",
    year: "All Years",
    filtered: [],
    currentIndex: 0,
    selectedIndex: null,
    checked: false,
    answeredIds: new Set(),
    wrongIds: new Set(),
  };

  let questions = DEFAULT_QUESTIONS.slice();

  function safeStorageGet(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function safeStorageRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore storage errors (private browsing, disabled storage, etc.)
    }
  }

  function safeJsonParse(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  }

  function slugify(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function normalizeOptions(rawOptions) {
    if (Array.isArray(rawOptions)) {
      return rawOptions.map((option) => String(option).trim()).filter(Boolean);
    }
    if (rawOptions && typeof rawOptions === "object") {
      const order = ["A", "B", "C", "D", "E"];
      const options = [];
      order.forEach((key) => {
        if (rawOptions[key] !== undefined && rawOptions[key] !== null) {
          const value = String(rawOptions[key]).trim();
          if (value) options.push(value);
        }
      });
      const extraKeys = Object.keys(rawOptions)
        .filter((key) => !order.includes(key))
        .sort();
      extraKeys.forEach((key) => {
        const value = String(rawOptions[key]).trim();
        if (value) options.push(value);
      });
      return options;
    }
    return [];
  }

  function normalizeAnswerIndex(raw, options) {
    if (raw?.answerIndex !== undefined && raw?.answerIndex !== null && raw.answerIndex !== "") {
      const asNumber = Number(raw.answerIndex);
      if (Number.isFinite(asNumber)) return asNumber;
    }
    if (raw?.answer !== undefined && raw?.answer !== null && raw.answer !== "") {
      const asNumber = Number(raw.answer);
      if (Number.isFinite(asNumber)) return asNumber;
    }

    const answer = raw?.answer;
    if (typeof answer === "string") {
      const trimmed = answer.trim();
      const letter = trimmed.toUpperCase();
      if (letter.length === 1 && letter >= "A" && letter <= "Z") {
        return letter.charCodeAt(0) - 65;
      }
      const matchIndex = options.findIndex((opt) => opt === trimmed);
      if (matchIndex !== -1) return matchIndex;
    }

    return null;
  }

  function normalizeQuestionsPayload(payload) {
    if (Array.isArray(payload)) return payload;
    if (payload && Array.isArray(payload.questions)) return payload.questions;
    return null;
  }

  function normalizeQuestions(rawQuestions) {
    const usedIds = new Set();
    const normalized = [];

    rawQuestions.forEach((raw, index) => {
      if (!raw) return;
      const subject = String(raw.subject || "General").trim();
      const year = raw.year === undefined || raw.year === null ? "" : String(raw.year).trim();
      const questionText = String(raw.question || raw.q || "").trim();
      const options = normalizeOptions(raw.options);
      const explanation = raw.explanation ? String(raw.explanation).trim() : "";

      if (!questionText || options.length < 2) return;

      const rawAnswerIndex = normalizeAnswerIndex(raw, options);
      let answerIndex = null;
      if (rawAnswerIndex !== null) {
        if (!Number.isInteger(rawAnswerIndex) || rawAnswerIndex < 0 || rawAnswerIndex >= options.length) return;
        answerIndex = rawAnswerIndex;
      }

      let id = typeof raw.id === "string" ? raw.id.trim() : "";
      if (!id) {
        const base = [slugify(subject) || "general", slugify(year) || "year", index + 1]
          .filter(Boolean)
          .join("-");
        id = base || `q-${index + 1}`;
      }

      let uniqueId = id;
      let suffix = 2;
      while (usedIds.has(uniqueId)) {
        uniqueId = `${id}-${suffix}`;
        suffix += 1;
      }
      usedIds.add(uniqueId);

      normalized.push({
        id: uniqueId,
        subject,
        year,
        question: questionText,
        options,
        answerIndex,
        explanation,
      });
    });

    return normalized;
  }

  function loadStoredQuestions() {
    const parsed = safeJsonParse(safeStorageGet(STORAGE_KEYS.questions));
    const rawQuestions = normalizeQuestionsPayload(parsed);
    if (!rawQuestions) return null;
    const normalized = normalizeQuestions(rawQuestions);
    return normalized.length ? normalized : null;
  }

  function saveStoredQuestions(nextQuestions) {
    try {
      localStorage.setItem(STORAGE_KEYS.questions, JSON.stringify(nextQuestions));
      return true;
    } catch {
      return false;
    }
  }

  function clearStoredQuestions() {
    safeStorageRemove(STORAGE_KEYS.questions);
  }

  function loadProgress() {
    const parsed = safeJsonParse(safeStorageGet(STORAGE_KEYS.progress));
    if (!parsed || typeof parsed !== "object") return;
    const answered = Array.isArray(parsed.answeredIds) ? parsed.answeredIds : [];
    const wrong = Array.isArray(parsed.wrongIds) ? parsed.wrongIds : [];
    state.answeredIds = new Set(answered.filter((id) => typeof id === "string"));
    state.wrongIds = new Set(wrong.filter((id) => typeof id === "string"));
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEYS.progress,
        JSON.stringify({
          answeredIds: Array.from(state.answeredIds),
          wrongIds: Array.from(state.wrongIds),
        }),
      );
      return true;
    } catch {
      return false;
    }
  }

  function clearProgress() {
    safeStorageRemove(STORAGE_KEYS.progress);
  }

  function pruneProgressToQuestions() {
    const validIds = new Set(questions.map((q) => q.id));
    state.answeredIds = new Set(Array.from(state.answeredIds).filter((id) => validIds.has(id)));
    state.wrongIds = new Set(Array.from(state.wrongIds).filter((id) => validIds.has(id)));
  }

  function getSubjects() {
    const subjects = new Set(questions.map((q) => q.subject));
    return ["All Subjects", ...Array.from(subjects).sort()];
  }

  function getYears() {
    const years = new Set(questions.map((q) => q.year).filter(Boolean));
    const sortedYears = Array.from(years).sort((a, b) => {
      const diff = Number(b) - Number(a);
      return Number.isFinite(diff) ? diff : String(b).localeCompare(String(a));
    });
    return ["All Years", ...sortedYears];
  }

  function shuffleArray(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  function applyFilter() {
    const wrongOnly = toggleWrongOnly.checked;
    let filtered = questions;
    if (state.subject !== "All Subjects") {
      filtered = filtered.filter((q) => q.subject === state.subject);
    }
    if (state.year !== "All Years") {
      filtered = filtered.filter((q) => q.year === state.year);
    }
    if (wrongOnly) {
      filtered = filtered.filter((q) => state.wrongIds.has(q.id));
    }

    state.filtered = filtered;

    state.currentIndex = Math.min(state.currentIndex, Math.max(filtered.length - 1, 0));
    renderQuestion();
  }

  function updateStats() {
    const attempted = state.answeredIds.size;
    const correct = attempted - state.wrongIds.size;
    statAttempted.textContent = attempted;
    statCorrect.textContent = correct;
    const accuracy = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
    statAccuracy.textContent = `${accuracy}%`;
  }

  function setFeedback(message, tone) {
    feedbackEl.textContent = message;
    feedbackEl.className = "feedback";
    if (tone === "good") feedbackEl.classList.add("good");
    if (tone === "bad") feedbackEl.classList.add("bad");
  }

  function renderQuestion() {
    state.selectedIndex = null;
    state.checked = false;

    if (state.filtered.length === 0) {
      questionIndexEl.textContent = "0";
      questionTotalEl.textContent = "0";
      questionText.textContent = "No questions available for this filter.";
      optionsEl.innerHTML = "";
      questionSubject.textContent = "Subject";
      questionYear.textContent = "";
      if (toggleWrongOnly.checked && state.wrongIds.size === 0) {
        setFeedback("No wrong answers yet. Attempt a few questions first.", "bad");
      } else {
        setFeedback("Change subject/year, or disable 'Only wrong answers'.", "bad");
      }
      btnCheck.disabled = true;
      btnNext.disabled = true;
      return;
    }

    const current = state.filtered[state.currentIndex];
    questionIndexEl.textContent = state.currentIndex + 1;
    questionTotalEl.textContent = state.filtered.length;
    questionText.textContent = current.question;
    questionSubject.textContent = current.subject;
    questionYear.textContent = current.year ? `Year: ${current.year}` : "";

    optionsEl.innerHTML = "";
    current.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option";
      button.dataset.index = index;
      button.innerHTML = `<span>${String.fromCharCode(65 + index)}.</span><span>${option}</span>`;
      button.addEventListener("click", () => handleOptionSelect(index));
      optionsEl.appendChild(button);
    });

    const hasAnswer = Number.isInteger(current.answerIndex);
    btnCheck.disabled = !hasAnswer;
    btnNext.disabled = false;
    if (hasAnswer) {
      setFeedback("Select an option and check your answer.", "");
    } else {
      setFeedback("Answer key not provided for this question.", "bad");
    }
  }

  function handleOptionSelect(index) {
    if (state.checked) return;
    state.selectedIndex = index;
    [...optionsEl.children].forEach((child) => child.classList.remove("selected"));
    const selected = optionsEl.querySelector(`[data-index='${index}']`);
    if (selected) selected.classList.add("selected");
  }

  function checkAnswer() {
    if (state.filtered.length === 0) return;
    if (state.selectedIndex === null) {
      setFeedback("Please select an option first.", "bad");
      return;
    }
    if (state.checked) return;

    const current = state.filtered[state.currentIndex];
    if (!Number.isInteger(current.answerIndex)) {
      setFeedback("Answer key not provided for this question.", "bad");
      return;
    }
    const isCorrect = state.selectedIndex === current.answerIndex;

    const options = [...optionsEl.children];
    options.forEach((option) => option.classList.remove("correct", "incorrect"));
    const correctOption = options[current.answerIndex];
    if (correctOption) correctOption.classList.add("correct");
    if (!isCorrect) {
      const selected = options[state.selectedIndex];
      if (selected) selected.classList.add("incorrect");
    }

    state.answeredIds.add(current.id);
    if (isCorrect) state.wrongIds.delete(current.id);
    else state.wrongIds.add(current.id);

    state.checked = true;
    updateStats();
    saveProgress();
    const extra = current.explanation ? ` ${current.explanation}` : "";
    const message = isCorrect ? `Correct!${extra}` : `Incorrect.${extra}`;
    setFeedback(message, isCorrect ? "good" : "bad");
  }

  function nextQuestion() {
    if (state.filtered.length === 0) return;
    state.currentIndex = (state.currentIndex + 1) % state.filtered.length;
    renderQuestion();
  }

  function resetStats() {
    state.answeredIds.clear();
    state.wrongIds.clear();
    toggleWrongOnly.checked = false;
    clearProgress();
    updateStats();
    applyFilter();
  }

  function initSubjects() {
    const subjects = getSubjects();
    subjectSelect.innerHTML = "";
    subjects.forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      subjectSelect.appendChild(option);
    });
    subjectSelect.value = state.subject;
  }

  function initYears() {
    const years = getYears();
    yearSelect.innerHTML = "";
    years.forEach((year) => {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });
    yearSelect.value = state.year;
  }

  function ensureValidFilters() {
    const subjects = getSubjects();
    if (!subjects.includes(state.subject)) state.subject = "All Subjects";
    const years = getYears();
    if (!years.includes(state.year)) state.year = "All Years";
  }

  function handleSubjectChange(e) {
    state.subject = e.target.value;
    state.currentIndex = 0;
    applyFilter();
  }

  function handleYearChange(e) {
    state.year = e.target.value;
    state.currentIndex = 0;
    applyFilter();
  }

  function handleShuffle() {
    shuffleArray(questions);
    state.currentIndex = 0;
    applyFilter();
  }

  function setQuestions(nextQuestions, { persist } = { persist: false }) {
    questions = nextQuestions.slice();
    const persisted = persist ? saveStoredQuestions(questions) : true;
    if (!persist) clearStoredQuestions();
    state.currentIndex = 0;
    pruneProgressToQuestions();
    ensureValidFilters();
    initSubjects();
    initYears();
    updateStats();
    applyFilter();
    return persisted;
  }

  function handleImport() {
    fileInput.value = "";
    fileInput.click();
  }

  function handleFileSelected(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const parsed = safeJsonParse(reader.result);
      const rawQuestions = normalizeQuestionsPayload(parsed);
      if (!rawQuestions) {
        setFeedback("Invalid JSON. Expected an array of questions (or { questions: [...] }).", "bad");
        return;
      }
      const normalized = normalizeQuestions(rawQuestions);
      if (!normalized.length) {
        setFeedback("No valid questions found in that JSON file.", "bad");
        return;
      }
      const persisted = setQuestions(normalized, { persist: true });
      if (persisted) {
        setFeedback(`Imported ${normalized.length} questions successfully.`, "good");
      } else {
        setFeedback(
          `Imported ${normalized.length} questions, but could not save them (storage full?).`,
          "bad",
        );
      }
    };
    reader.onerror = () => setFeedback("Could not read that file.", "bad");
    reader.readAsText(file);
  }

  function handleUseSample() {
    setQuestions(DEFAULT_QUESTIONS, { persist: false });
    setFeedback("Switched back to the default 2020 question set.", "good");
  }

  function handleWrongToggle() {
    state.currentIndex = 0;
    applyFilter();
  }

  function handleKeydown(e) {
    if (e.key >= "1" && e.key <= "4") {
      const index = Number(e.key) - 1;
      handleOptionSelect(index);
    }
    if (e.key.toLowerCase() === "enter") {
      if (state.checked) {
        nextQuestion();
        return;
      }
      const current = state.filtered[state.currentIndex];
      if (current && !Number.isInteger(current.answerIndex)) {
        nextQuestion();
        return;
      }
      checkAnswer();
    }
  }

  btnCheck.addEventListener("click", checkAnswer);
  btnNext.addEventListener("click", nextQuestion);
  btnShuffle.addEventListener("click", handleShuffle);
  btnReset.addEventListener("click", resetStats);
  btnImport.addEventListener("click", handleImport);
  btnUseSample.addEventListener("click", handleUseSample);
  fileInput.addEventListener("change", handleFileSelected);
  subjectSelect.addEventListener("change", handleSubjectChange);
  yearSelect.addEventListener("change", handleYearChange);
  toggleWrongOnly.addEventListener("change", handleWrongToggle);
  document.addEventListener("keydown", handleKeydown);

  const storedQuestions = loadStoredQuestions();
  if (storedQuestions) questions = storedQuestions;
  loadProgress();
  pruneProgressToQuestions();
  initSubjects();
  initYears();
  updateStats();
  applyFilter();
})();
