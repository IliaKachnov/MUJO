import coco from './../img/coco.png';
import carob from './../img/carob.png';
import vanila from './../img/vanila.png';
import mushroom from './../img/mushroom.png';
import cacao from './../img/cacao.png';
import romashka from './../img/romashka.png';
import clover from './../img/clover.png';
import chaga from './../img/chaga.png';
import spices from './../img/spices.png';



const ingredients = [
  {
    title: 'CACAO',
    dose: '0.58 grams per serving',
    img: mushroom,
    id: 1,
  },
  {
    title: 'MCT OIL',
    dose: '0.58 grams per serving',
    img: coco,
    id: 2,
  },
  {
    title: 'MCT OIL',
    dose: '0.58 grams per serving',
    img: cacao,
    id: 3,
  },
  {
    title: 'MCT OIL',
    dose: '0.58 grams per serving',
    img: coco,
    id: 4,
  },
  {
    title: 'MCT OIL',
    dose: '0.58 grams per serving',
    img: coco,
    id: 5,
  },
  {
    title: 'MCT OIL',
    dose: '0.58 grams per serving',
    img: coco,
    id: 6,
  },
  {
    title: 'CORDYCEPS',
    dose: '0.58 grams per serving',
    img: mushroom,
    id: 7,
  },
  {
    title: 'LIONS MANE',
    dose: '0.58 grams per serving',
    img: vanila,
    id: 8,
  },
  {
    title: 'CAROB',
    dose: '0.58 grams per serving',
    img: carob,
    id: 9,
  },
  {
    title: 'LIONS MANE',
    dose: '0.58 grams per serving',
    img: mushroom,
    id: 10,
  },
  {
    title: 'LIONS MANE',
    dose: '0.58 grams per serving',
    img: mushroom,
    id: 11,
  },
  {
    title: 'LIONS MANE',
    dose: '0.58 grams per serving',
    img: mushroom,
    id: 12,
  },
];
const accordionData = [
  {
    title: "How to prepare",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat sit amet arcu luctus pharetra. Cras scelerisque dolor non justo dignissim efficitur.
    `,
  },
  {
    title: "Ingredients",
    content: `
      Aliquam vel libero et tortor sagittis condimentum. Nam id varius turpis, id pharetra eros. Mauris purus tortor, mattis quis eros in, molestie pharetra lorem.

    `,
  },
  {
    title: "Nutritional facts",
    content: `
      Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis.

    `,
  },
  {
    title: "Shipping information",
    content: `
      Sed lobortis rutrum dui ut consequat. Vestibulum sollicitudin orci eget risus volutpat, quis congue neque pharetra. Nulla sed justo commodo tellus tincidunt lobortis. 
    `,
  },
];
const ingredientsPage = [
  {
    title: 'ASHWAGANDHA',
    about: 'Ayurvedic herb used to promote balance in the body and help it adapt to stressful conditions. It also been shown to have cognitive, antioxidant, anti-inflammatory, and cellular function-promoting effects. ',
    why: 'We use KSM-66® Ashwagandha, the most clinically studied ashwagandha on the market. It’s vegan, full-spectrum, and made exclusively from the root. Active compounds: Withanolide.',
    origin: 'India',
    science: ['Stress management', 'Memory & Cognition', 'Link to paper'],
    img: mushroom,
    id: 1,
  },
  {
    title: 'BACOPA MONNIERI',
    about: 'Powerful adaptogen known for its ability to enhance mental acuity and support relaxation. ',
    why: 'Our standardized form of Bacopa has been linked to improved performance in visual processing, learning rate, working memory, information retention, and mental performance. Active compounds: Bacopa Glycosides 12%',
    origin: 'India',
    science: ['Cognitive Performance', 'Stress Management', 'Link to paper'],
    img: romashka,
    id: 2,
  },
  {
    title: 'CACAO',
    about: 'Our organic cacao is sourced from  farmers who carefully farm, ferment, and craft it with the same care as a winemaker.',
    why: 'Cacao is high in theobromine, which naturally lowers blood pressure, and PQQ, which promotes the growth of new mitochondria and supports energy, memory, focus, and brain health.',
    origin: 'Peru',
    science: ['Energy', 'Brain health', 'Health benefits'],
    img: clover,
    id: 3,
  },
  {
    title: 'CAROB',
    about: 'Carob pods are filled with pulp that tastes similar to chocolate, and is high in protein, fiber and phytoneutrients. ',
    why: 'Carob is rich in tannins that help to combat toxins in the digestive tract and prevent the growth of harmful bacteria in the intestines.',
    origin: 'Spain',
    science: ['Gut', 'Link to paper', 'Link to paper'],
    img: carob,
    id: 4,
  },
  {
    title: 'CHAGA',
    about: 'Fungus that grows on birch trees in cold climates and has a long history of use for its potent antioxidant and anti-inflammatory properties.',
    why: '8:1 dual extract made from 100% fruiting bodies of the mushroom rather than the mycelium root system. Active compounds: Beta glucans, triterpenoids',
    origin: 'China',
    science: ['Energy', 'Immunity', 'Antioxidant'],
    img: chaga,
    id: 5,
  },
  {
    title: 'CORDYCEPS',
    about: 'Mushroom known as a natural energy booster. It supports mitochondrial function by delivering compounds that serve as precursors to ATP, the energy storing molecule  ',
    why: '8:1 dual extract made from 100% fruiting bodies of the mushroom rather than the mycelium root system. Active compounds: Beta -glucans Cordycepin ',
    origin: 'China',
    science: ['Energy', 'Stress Management', 'Mitochondria'],
    img: mushroom,
    id: 6,
  },
  {
    title: 'CURCUMA',
    about: 'Technology encapsulates curcumin in a protective lipid layer, delivering it to the lymphatic system, avoiding breakdown in the liver and excretion in the kidneys',
    why: 'Standard curcumin is poorly bioavailable. Ours ensures 285x greater bioavailability and delivers 65x higher blood plasma levels, supporting the movement of ‘free’ curcumin from the bloodstream to target tissues. Active compounds: [TBU]',
    origin: 'India',
    science: ['Memory & cognition', 'Anti-inflammatory', 'MItochondria'],
    img: cacao,
    id: 7,
  },
  {
    title: 'LIONS MANE',
    about: 'A mushroom with cognitive-enhancing benefits, which stem from beta-glucans and terpene. Supports neuroplasticity and optimizes Nerve Growth Factor (NGF), responsible for neuron growth and repair.',
    why: '8:1 dual extract made from 100% fruiting bodies of the mushroom rather than the mycelium root system. Active compounds: Beta, terpenes',
    origin: 'China',
    science: ['Brain Health', 'Anti-inflammatory', 'Link to paper'],
    img: coco,
    id: 8,
  },
  {
    title: 'MCT OIL',
    about: 'Our rare, heirloom and single-origin Dominican cacao is sourced from organic farmers who farm, ferment and craft the cacao with the care of a winemaker. ',
    why: 'C8 fatty acid is the most metabolically active medium-chain fatty acid. This means it can be quickly converted by the body into energy, providing its many benefits, such as increased energy and cognition.',
    origin: 'USA',
    science: ['Energy', 'Gut', 'Brain'],
    img: mushroom,
    id: 9,
  },
  {
    title: 'MACA',
    about: 'A root from the Peruvian Andes with a faint nutty, butterscotch, and slightly bitter flavor known for its high nutrition and energy boosting properties.',
    why: 'Raw maca root can be difficult to digest for some people due to its high starch content (70% carbohydrate, half of which is starch). Our maca is gelatinized (boiled and pressurized) to remove the starch content, making it easier to digest.',
    origin: 'Peru',
    science: ['Health benefits', 'Link to paper', 'Link to paper'],
    img: vanila,
    id: 10,
  },
  {
    title: 'RHODIOLA ROSEA',
    about: 'Powerful adaptogen with a long list of clinically-backed benefits, including reduced fatigue, improved memory and anxiety, anti-inflammatory and antioxidant properties.',
    why: 'Full-spectrum extract, rich in active compounds: ≥5% rosavins, ≥1.8% of salidroside',
    origin: 'Siberia (Russia)',
    science: ['Energy', 'Stress Management', 'Anti-inflammatory'],
    img: mushroom,
    id: 11,
  },
  {
    title: 'SPICES',
    about: 'Ceylon Cinnamon, Cardamom, All Spice, and Ginger are warm spices that add flavor and warmth to our blend. Some of our ingredients have naturally bitter flavors, and these spices help give it an earthy latte taste. ',
    why: 'We do not use any artificial flavors, and instead rely on these natural spices to provide a delicious and transparent product.',
    origin: 'Sri Lanka',
    science: ['Energy', 'Stress Management', 'Mitochondria'],
    img: spices,
    id: 12,
  },
  
];

export {ingredients, accordionData, ingredientsPage}