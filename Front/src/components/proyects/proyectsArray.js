import imagePokemon from "../../images/Pokemon.jpg";
// import imageRickAndMorty from "../../images/RickAndMorty.jpg";
// import imageMarvel from "../../images/Marvel.jpeg";
// import imageEmpanadas from "../../images/Empanadas.png";
import imageToolMatch from "../../images/ToolMatch.png";
import imageProActive from "../../images/ImageProActive.png";

const proyects = [
  {
    title: "Pro Active Center",
    image: imageProActive,
    url: "https://github.com/fran-itria/vite-gym",
    description: `Aplicación para gimnasios, gestión de clientes, creación de rutinas, reserva de turnos, 
    pasarela de pago (MercadoPago), avisos mediante mails (NodeMailer), control de registros en la aplicación.`,
    tecnologias: [
      "React", 
      "Redux Toolkit", 
      "Tailwind", 
      "Firebase", 
      "Express",
      "Sequelize"
    ],
  },
  {
    title: "ToolMatch",
    image: imageToolMatch,
    url: "https://tools-match-eight.vercel.app/",
    description: `Aplicación para alquilar y vender herramientas usadas dentro de la comunidad, 
      implementación de pasarela de pago, autenticación con terceros, filtros y ordenamiento, panel de administrador`,
    tecnologias: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "Node.js",
      "Next.js",
      "Prisma",
      "React",
    ],
  },
  {
    title: "Pokemon",
    image: imagePokemon,
    url: "https://github.com/fran-itria/pokemon",
    description: `Aplicación web que utliza la api de Pokemon para buscar algunos de estos, 
        permite crear un pokemon a gusto que es guardado en la base de datos de la app, permite filtrar y 
        ordenarlos segun diversos criterios, se puede visualizar un detalle del pokemon seleccionado`,
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Express", "Sequelize"],
  },
];

export default proyects;
