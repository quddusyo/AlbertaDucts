import furnaceCleaning from '../../assets/furnaceCleaning.png';
import ductCleaning from '../../assets/ductCleaning.png';
import dryerVent from '../../assets/dryerVent.png';
import sanitization from '../../assets/sanitization.png';
import brushing from '../../assets/brushing.png';
import coldairReturn from '../../assets/coldairReturn.png';

export const ServiceData = [
    {
        id: 0,
        title: "furnace cleaning service",
        description: "Furnace cleaning services includes a furnace inspection, furnace tune-up, filter tune-up, furnace blower tune-up, and filter replacement. If anything needs to be replaced, our HVAC technicians will schedule an appointment or suggest services if required.",
        price: "$129/Furnace",
        img: furnaceCleaning
    },
    {
        id: 1,
        title: "duct cleaning service",
        description: "Our Experts suggest duct cleaning once a year but with families with young children/elderly, pet, or allergies, we suggest even bumping that up to twice a year. We also highly suggest getting duct cleaning after any renovations to a home to avoid any long-term health risks. Duct cleaning services cleans all ducts in your home, safely removing all bacterias and dirt from your venilation system. Our specialists will start with the top floor ducts and make ways to the lowest floor ensuring all dust particles are pushed to the HVAC system where our vaccumes will suck out the dust. This service includes 8 ducts per home, any ducts above will be additional 20$/duct. (SPECIAL 15% OFF on total booking when you book throught our site!)",
        price: "149$ includes Furnace Inspection, Furnace Tune-Up, 8 ducts/home, additional 15$/duct. Safety Hazard & Work Waste Handling fees not included ($29) ",
        img:ductCleaning
    },
    {
        id: 6,
        title: "dryer vent",
        description: "Dryer vent cleaning service cleans your dryer vent from both the inside and outside to ensure it is fully clean. Dryer-vents tend to be the area where the most dust buildup occurs under a short amount of time. Our experts suggest cleaning your dryer vents twice a year to minimize longterm health issues.",
        price: "$129/Dryer-Vent",
        img: dryerVent
    },
    {
        id: 4,
        title: "sanitization",
        description: "Our sanitization service ensures every duct in your home is sanitized with our disinfectant after it has been air washed. This will disinfect the entire duct system allowing clean air flow and leave a wonderful smell in the house.",
        price: "$49 One Time Fee",
        img: sanitization
    },
    {
        id: 5,
        title: "brushing",
        description: " Our experts suggest brushing once every 3 years to physically remove any dust still in your ducts. Our brushing services includes brushing of one furnace with long pipes that go deep in your duct system and force dirt out.",
        price: "$149 One Time Fee",
        img: brushing
    },
    {
        id: 6,
        title: "cold-air return",
        description: "This service we open client's cold air return lines and clean all the dirt and dust inside with a high compressor, forcing the debree into our vaccume. We may also show before and after pictures upon customer request.",
        price: "49$/Air-Return",
        img: coldairReturn
    }
]