import imageToolMatch from "../../images/ToolMatch.png";
import imageProActive from "../../images/ImageProActive.png";
import imageAltouch from "../../images/altouch.png";

const proyects = [
  {
    title: "Liga Amateur de Futbol",
    image: imageAltouch,
    url: "https://github.com/fran-itria/Altouch",
    description: `Aplicación web para gestionar liga de futbol, como administrador 
    podrás crear divisiones, agregar equipos, gestionar las fechas, 
    gestionar la tabla de posiciones, estadísticas de equipos y jugadores.
    Cómo usuario podrás ver todo lo anteriormente mencionado.`,
    tecnologias: ["React Native", "Tailwind", "TypeScript", "Firebase"],
  },
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
      implementación de pasarela de pago, autenticación con terceros, filtros y ordenamiento, panel de administrador.`,
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
];

export default proyects;
